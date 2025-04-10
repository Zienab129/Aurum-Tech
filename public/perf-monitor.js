/**
 * Performance Monitoring Script
 * - Measures and reports Core Web Vitals
 * - Uses requestIdleCallback for optimal JS execution
 * - Optimizes above-the-fold rendering
 */

;(function () {
  // Only run in production and in browsers that support the necessary APIs
  if (
    location.hostname === 'localhost' ||
    !('PerformanceObserver' in window) ||
    !('requestIdleCallback' in window)
  )
    return

  // Collect LCP, FID, CLS, TTFB metrics
  const metrics = {}
  let lcpElement = null

  // Track JS execution time
  const execTimes = {}

  // Create a performance marks to measure script execution
  performance.mark('perf-monitor-start')

  // Record LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((entries) => {
    const lastEntry = entries.getEntries().pop()
    if (lastEntry) {
      metrics.lcp = lastEntry.startTime
      lcpElement = lastEntry.element

      // Optimize LCP element once identified
      if (lcpElement) {
        lcpElement.setAttribute('fetchpriority', 'high')
        lcpElement.setAttribute('loading', 'eager')
        lcpElement.classList.add('lcp-element')
      }
    }
  })

  try {
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch (e) {
    console.warn('LCP monitoring not supported', e)
  }

  // Record FID (First Input Delay)
  const fidObserver = new PerformanceObserver((entries) => {
    entries.getEntries().forEach((entry) => {
      if (entry.processingStart && entry.startTime) {
        metrics.fid = entry.processingStart - entry.startTime
      }
    })
  })

  try {
    fidObserver.observe({ type: 'first-input', buffered: true })
  } catch (e) {
    console.warn('FID monitoring not supported', e)
  }

  // Record CLS (Cumulative Layout Shift)
  let cumulativeLayoutShift = 0
  let clsEntries = []

  const clsObserver = new PerformanceObserver((entries) => {
    entries.getEntries().forEach((entry) => {
      // Only count layout shifts without recent user input
      if (!entry.hadRecentInput) {
        clsEntries.push(entry)
        cumulativeLayoutShift += entry.value
        metrics.cls = cumulativeLayoutShift
      }
    })
  })

  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  } catch (e) {
    console.warn('CLS monitoring not supported', e)
  }

  // Record TTFB (Time to First Byte)
  const navigationEntries = performance.getEntriesByType('navigation')
  if (navigationEntries && navigationEntries.length) {
    metrics.ttfb = navigationEntries[0].responseStart
  }

  // Optimize resource loading based on network conditions
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection
  if (connection) {
    const connectionType = connection.effectiveType || connection.type
    const isSlow =
      connectionType === 'slow-2g' ||
      connectionType === '2g' ||
      connectionType === '3g'

    if (isSlow) {
      // Set a flag for the app to respond to
      document.documentElement.setAttribute('data-connection', 'slow')

      // Delay less important resources
      const nonCriticalElements = document.querySelectorAll(
        'img:not([fetchpriority="high"]), video, iframe, [data-lazy]',
      )

      Array.from(nonCriticalElements).forEach((element) => {
        element.setAttribute('loading', 'lazy')
        if (element.tagName === 'IMG') {
          element.setAttribute('decoding', 'async')
        }
      })
    }
  }

  // Use requestIdleCallback to report metrics without impacting performance
  window.requestIdleCallback(
    () => {
      // Complete performance measurement
      performance.mark('perf-monitor-end')
      performance.measure(
        'perf-monitor-execution',
        'perf-monitor-start',
        'perf-monitor-end',
      )

      execTimes.perfMonitor = performance.getEntriesByName(
        'perf-monitor-execution',
      )[0].duration

      // Report metrics if needed
      if (
        typeof window.gtag === 'function' ||
        typeof window.ga === 'function'
      ) {
        const sendToAnalytics = (name, value) => {
          // Choose the appropriate analytics function
          const analyticsFunc =
            window.gtag ||
            ((cmd, eventName, obj) => window.ga('send', eventName, obj))

          analyticsFunc('event', name, {
            value: Math.round(value),
            metric_id: name,
            metric_value: value,
            non_interaction: true,
          })
        }

        Object.keys(metrics).forEach((key) => {
          sendToAnalytics(`web-vitals-${key}`, metrics[key])
        })
      }

      // Clean up observers when done to avoid memory leaks
      if (lcpObserver) lcpObserver.disconnect()
      if (fidObserver) fidObserver.disconnect()
      if (clsObserver && metrics.cls) clsObserver.disconnect()
    },
    { timeout: 5000 },
  )

  // Listen for page visibility changes to optimize background performance
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // Page is hidden, send final metrics and clean up
      const finalReport = {
        lcp: metrics.lcp || 0,
        fid: metrics.fid || 0,
        cls: metrics.cls || 0,
        ttfb: metrics.ttfb || 0,
      }

      // Use beacon API for reliable sending when page unloads
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(finalReport)], {
          type: 'application/json',
        })
        navigator.sendBeacon('/api/performance-report', blob)
      }
    }
  })
})()
