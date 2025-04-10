import { useEffect, useState } from 'react'

interface DeferredScriptProps {
  src: string
  strategy?: 'afterInteractive' | 'lazyOnload'
  onLoad?: () => void
  id?: string
}

/**
 * DeferredScript component for loading non-critical JavaScript with various strategies:
 * - afterInteractive: Loads after the page becomes interactive (default)
 * - lazyOnload: Loads during browser idle time
 */
export function DeferredScript({
  src,
  strategy = 'afterInteractive',
  onLoad,
  id,
}: DeferredScriptProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Skip if already loaded or no src provided
    if (loaded || !src) return

    // Function to create and load the script
    const loadScript = () => {
      const script = document.createElement('script')
      script.src = src
      if (id) script.id = id

      script.onload = () => {
        setLoaded(true)
        if (onLoad) onLoad()
      }

      document.body.appendChild(script)
    }

    // Use the appropriate loading strategy
    if (strategy === 'afterInteractive') {
      // Load after page becomes interactive
      if (document.readyState === 'complete') {
        loadScript()
      } else {
        window.addEventListener('load', loadScript)
        return () => window.removeEventListener('load', loadScript)
      }
    } else if (strategy === 'lazyOnload') {
      // Load during browser idle time using requestIdleCallback
      // Fall back to setTimeout for browsers that don't support requestIdleCallback
      const requestIdleCallback =
        window.requestIdleCallback || ((cb) => setTimeout(cb, 1000))

      const handle = requestIdleCallback(() => loadScript())

      return () => {
        if (window.cancelIdleCallback) {
          window.cancelIdleCallback(handle)
        } else {
          clearTimeout(handle)
        }
      }
    }
  }, [src, strategy, onLoad, loaded, id])

  return null
}
