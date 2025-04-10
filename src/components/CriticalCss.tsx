'use client'

import React from 'react'

/**
 * Inlines critical CSS to eliminate render-blocking resources
 * - Improves FCP (First Contentful Paint)
 * - Reduces LCP (Largest Contentful Paint)
 * - Prevents flash of unstyled content
 */
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      /* Reset and base styles */
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      
      /* Font optimization */
      @font-face {
        font-family: 'Mona Sans';
        src: url('/fonts/Mona-Sans.var.woff2') format('woff2');
        font-weight: 200 900;
        font-display: swap;
      }
      
      /* Initial page layout - prevents layout shifts */
      html, body {
        height: 100%;
        width: 100%;
        color-scheme: light;
        font-family: var(--font-mona-sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
      }
      
      /* Header and above-the-fold content - most critical for FCP and LCP */
      header, 
      body > div:first-child,
      main > div:first-child,
      .hero-section,
      .above-fold {
        content-visibility: auto;
        contain-intrinsic-size: 700px;
      }
      
      /* Prevent flash of unstyled content */
      html:not([data-js-loaded]) .fade-in, 
      html:not([data-js-loaded]) .animate {
        opacity: 0;
      }
            
      /* Critical path typography */
      h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
        word-break: break-word;
        hyphens: auto;
      }
      
      /* Preemptive color definitions */
      html {
        background-color: #000000;
        color: #ffffff;
      }
      
      /* Layout classes to prevent CLS */
      .aspect-ratio {
        position: relative;
        height: 0;
        width: 100%;
      }
      
      .aspect-ratio img,
      .aspect-ratio iframe,
      .aspect-ratio video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Skip navigation for accessibility */
      .skip-nav {
        position: absolute;
        left: -999px;
        width: 1px;
        height: 1px;
        top: auto;
        overflow: hidden;
      }
      
      .skip-nav:focus {
        position: fixed;
        top: 0;
        left: 0;
        width: auto;
        height: auto;
        padding: 20px;
        background: #000;
        color: #fff;
        z-index: 9999;
      }
    `,
      }}
    />
  )
}
