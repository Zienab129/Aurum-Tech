'use client'

import React from 'react'

interface ResourceHintsProps {
  preloadFonts?: boolean
  preloadHero?: boolean
  preconnectDomains?: string[]
  prefetchPages?: string[]
}

/**
 * Add advanced resource hints for critical resources
 * - Improves LCP by preloading key resources
 * - Optimizes connection timing with preconnect
 * - Improves perceived performance with prefetching
 */
export function ResourceHints({
  preloadFonts = true,
  preloadHero = true,
  preconnectDomains = [],
  prefetchPages = [],
}: ResourceHintsProps) {
  const defaultPreconnect = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net',
  ]

  const allPreconnect = [...defaultPreconnect, ...preconnectDomains]

  return (
    <>
      {/* Preconnect to critical domains */}
      {allPreconnect.map((domain) => (
        <React.Fragment key={`preconnect-${domain}`}>
          <link rel="preconnect" href={domain} crossOrigin="anonymous" />
          <link rel="dns-prefetch" href={domain} />
        </React.Fragment>
      ))}

      {/* Preload critical fonts */}
      {preloadFonts && (
        <>
          <link
            rel="preload"
            href="/fonts/Mona-Sans.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            importance="high"
          />
        </>
      )}

      {/* Preload hero images for faster LCP */}
      {preloadHero && (
        <>
          <link
            rel="preload"
            href="/images/logo.png"
            as="image"
            importance="high"
          />
          <link
            rel="preload"
            href="/images/placeholder.jpg"
            as="image"
            importance="high"
          />
        </>
      )}

      {/* Prefetch key pages for instant navigation */}
      {prefetchPages.map((page) => (
        <link key={`prefetch-${page}`} rel="prefetch" href={page} />
      ))}

      {/* Add prerender for critical navigation paths */}
      <link rel="prerender" href="/" />
    </>
  )
}
