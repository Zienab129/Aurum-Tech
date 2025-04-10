/**
 * Advanced Service Worker Registration
 * - Optimized for performance and proper caching
 * - Uses requestIdleCallback to avoid impacting page load
 * - Includes error handling and recovery
 */
;(function () {
  // Skip registration in development environments
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    console.log(
      'Service Worker registration skipped in development environment',
    )
    return
  }

  // Only register if service workers are supported
  if ('serviceWorker' in navigator) {
    // Using requestIdleCallback to defer non-critical registration
    const registerServiceWorker = () => {
      navigator.serviceWorker
        .register('/service-worker.js', {
          scope: '/',
          // Use update on reload in production for the latest version
          updateViaCache: 'none',
        })
        .then((registration) => {
          console.log('Service Worker registered:', registration.scope)

          // Check for updates every hour
          setInterval(
            () => {
              registration.update().catch((error) => {
                console.error('Service Worker update failed:', error)
              })
            },
            60 * 60 * 1000,
          )

          // Handle service worker updates for instant activation
          if (registration.waiting) {
            // There's an updated service worker waiting
            notifyUserOfUpdate(registration)
          }

          // Handle future updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (
                  newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller
                ) {
                  // New service worker available
                  notifyUserOfUpdate(registration)
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
          // Set timeout to retry after 30 seconds
          setTimeout(registerServiceWorker, 30000)
        })
    }

    // Function to notify about updates
    const notifyUserOfUpdate = (registration) => {
      // Create custom event for app to respond to
      window.dispatchEvent(
        new CustomEvent('swUpdate', {
          detail: { registration },
        }),
      )

      // Optionally display update notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('App Update Available', {
          body: 'Refresh to update your app to the latest version',
        })
      }
    }

    // Handle communication between service workers
    navigator.serviceWorker.addEventListener('message', (event) => {
      // Handle messages from service worker
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        console.log('New content available, refresh to update.')
      }
    })

    // If page is fully loaded, register immediately
    if (document.readyState === 'complete') {
      registerServiceWorker()
    } else {
      // Use load event to avoid competing with critical resources
      window.addEventListener('load', () => {
        // Delay slightly to prioritize rendering
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(registerServiceWorker, { timeout: 5000 })
        } else {
          setTimeout(registerServiceWorker, 3000)
        }
      })
    }
  }
})()
