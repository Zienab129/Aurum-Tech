/**
 * Advanced Performance-Optimized Service Worker
 * Features:
 * - Stale-while-revalidate caching for most resources
 * - Network-first strategy for API calls
 * - Cache-first strategy for static assets
 * - Precaching of critical resources
 * - Background sync for offline support
 * - Advanced error handling
 */

// Cache versioning - change version to force cache refresh
const CACHE_VERSION = 'v1.0.0'
const CURRENT_CACHES = {
  static: `static-${CACHE_VERSION}`,
  images: `images-${CACHE_VERSION}`,
  pages: `pages-${CACHE_VERSION}`,
  fonts: `fonts-${CACHE_VERSION}`,
  api: `api-${CACHE_VERSION}`,
}

// Resources to precache immediately
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/fonts/Mona-Sans.var.woff2',
  '/aurum-favicon.png',
  '/aurum-favicon-large.png',
  '/images/logo.png',
  '/images/placeholder.jpg',
  '/register-sw.js',
  '/perf-monitor.js',
]

// Install event - cache initial resources with error handling
self.addEventListener('install', (event) => {
  self.skipWaiting() // Activate new worker immediately

  event.waitUntil(
    Promise.all([
      caches.open(CURRENT_CACHES.static).then((cache) => {
        return cache.addAll(PRECACHE_URLS).catch((error) => {
          console.error('Precaching failed:', error)
          // Continue despite errors to ensure service worker installs
          return Promise.resolve()
        })
      }),

      // Preload critical font separately for reliability
      caches.open(CURRENT_CACHES.fonts).then((cache) => {
        return cache.add('/fonts/Mona-Sans.var.woff2').catch((error) => {
          console.error('Font caching failed:', error)
          return Promise.resolve()
        })
      }),
    ]).catch((error) => {
      console.error('Installation failed:', error)
      // Always resolve to ensure service worker installs
      return Promise.resolve()
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  // Take control of all clients immediately
  event.waitUntil(clients.claim())

  // Remove outdated caches
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Check if this cache name isn't in our current set
            if (!Object.values(CURRENT_CACHES).includes(cacheName)) {
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log('Service Worker activated and updated to', CACHE_VERSION)
      }),
  )
})

// Parse URLs to determine caching strategy
function getCacheKeyForRequest(request) {
  const url = new URL(request.url)

  // API requests
  if (url.pathname.startsWith('/api/')) {
    return CURRENT_CACHES.api
  }

  // Images
  if (/\.(jpe?g|png|gif|svg|webp|avif)$/i.test(url.pathname)) {
    return CURRENT_CACHES.images
  }

  // Fonts
  if (/\.(woff2?|ttf|otf|eot)$/i.test(url.pathname)) {
    return CURRENT_CACHES.fonts
  }

  // HTML pages
  if (
    request.mode === 'navigate' ||
    (request.method === 'GET' &&
      request.headers.get('accept').includes('text/html'))
  ) {
    return CURRENT_CACHES.pages
  }

  // Everything else
  return CURRENT_CACHES.static
}

// Helper function to determine if we should use network-first
function shouldUseNetworkFirst(request) {
  const url = new URL(request.url)

  // API requests always use network first
  if (url.pathname.startsWith('/api/')) {
    return true
  }

  // HTML navigation requests use network first for freshness
  if (request.mode === 'navigate') {
    return true
  }

  // All other requests use cache-first or stale-while-revalidate
  return false
}

// Network-first strategy with timeout
async function networkFirstWithTimeout(request, timeout = 3000) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(
      () => resolve(new Response('Network timeout, falling back to cache')),
      timeout,
    )
  })

  const networkPromise = fetch(request.clone())
    .then((response) => {
      // Cache the response for future
      const clonedResponse = response.clone()
      caches.open(getCacheKeyForRequest(request)).then((cache) => {
        cache.put(request, clonedResponse)
      })
      return response
    })
    .catch((error) => {
      console.error('Network request failed:', error)
      return caches.match(request)
    })

  return Promise.race([networkPromise, timeoutPromise]).then((response) => {
    if (response.type === 'opaque' || response.status === 200) {
      return response
    } else {
      // Try to get from cache if network failed
      return caches.match(request).then((cachedResponse) => {
        return cachedResponse || response
      })
    }
  })
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request)

  // Clone the request for the fetch call
  const fetchRequest = request.clone()

  // Revalidate the cache in the background
  const revalidateCache = async () => {
    try {
      const response = await fetch(fetchRequest)
      if (!response || response.status !== 200) {
        return // Don't cache bad responses
      }

      const cache = await caches.open(getCacheKeyForRequest(request))
      cache.put(request, response.clone())

      return response
    } catch (error) {
      console.error('Revalidation failed:', error)
    }
  }

  // Start revalidation regardless of the cached response
  const networkResponsePromise = revalidateCache()

  // Return the cached response immediately if we have one
  if (cachedResponse) {
    return cachedResponse
  }

  // Otherwise, wait for the network response
  return networkResponsePromise
}

// Main fetch handler with advanced caching strategies
self.addEventListener('fetch', (event) => {
  // Don't handle if request isn't GET
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)

  // Skip browser extension requests and different origins
  if (
    url.origin !== location.origin &&
    !url.hostname.endsWith('aurumtech.com')
  ) {
    return
  }

  // Choose appropriate strategy based on request type
  if (shouldUseNetworkFirst(event.request)) {
    event.respondWith(networkFirstWithTimeout(event.request))
  } else {
    event.respondWith(staleWhileRevalidate(event.request))
  }
})

// Handle messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// Background sync for offline operations
self.addEventListener('sync', (event) => {
  if (event.tag === 'offline-form-submit') {
    event.waitUntil(syncOfflineForms())
  }
})

// Function to sync any offline form submissions
async function syncOfflineForms() {
  try {
    // Open IndexedDB to get pending submissions
    // Implementation would depend on how your app stores offline data

    // Sample implementation:
    const IDB_NAME = 'offline-store'
    const IDB_VERSION = 1
    const STORE_NAME = 'offline-forms'

    return new Promise((resolve, reject) => {
      // Open database
      const request = indexedDB.open(IDB_NAME, IDB_VERSION)

      request.onerror = () =>
        reject(new Error('Failed to open offline database'))

      request.onsuccess = (event) => {
        const db = event.target.result
        const transaction = db.transaction(STORE_NAME, 'readwrite')
        const store = transaction.objectStore(STORE_NAME)

        const getAll = store.getAll()

        getAll.onsuccess = () => {
          const offlineForms = getAll.result || []

          // Submit each form data
          const submitPromises = offlineForms.map((formData) => {
            return fetch(formData.url, {
              method: formData.method || 'POST',
              headers: formData.headers || {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData.data),
            })
              .then((response) => {
                if (response.ok) {
                  // Delete from IndexedDB if successful
                  store.delete(formData.id)
                  return true
                }
                return false
              })
              .catch((error) => {
                console.error('Sync failed for item:', formData.id, error)
                return false
              })
          })

          // Resolve when all sync attempts complete
          Promise.all(submitPromises).then(resolve)
        }

        getAll.onerror = () => reject(new Error('Failed to get offline forms'))
      }
    })
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}
