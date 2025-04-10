import type { Metadata, Viewport } from 'next'
import { RootLayout } from '@/components/RootLayout'
import { I18nProvider } from '@/components/I18nProvider'
import dynamic from 'next/dynamic'
import { CriticalCSS } from '@/components/CriticalCss'
import { ResourceHints } from '@/components/ResourceHints'
import { monaSans } from './fonts'
import '@/styles/tailwind.css'

// Dynamic imports for JS splitting and delayed hydration
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
})

// Define viewport settings for optimal mobile experience
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  title: {
    template: '%s - Aurum Tech',
    default: 'Aurum Tech - Premium Digital Solutions',
  },
  description:
    'Aurum Tech provides premium digital solutions for businesses across the Middle East, Europe, and globally.',
  metadataBase: new URL('https://aurumtech.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ar-SA': '/ar-SA',
    },
  },
  applicationName: 'Aurum Tech',
  authors: [{ name: 'Aurum Tech Team' }],
  generator: 'Next.js',
  keywords: [
    'digital solutions',
    'web development',
    'app development',
    'digital marketing',
    'Aurum Tech',
  ],
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Aurum Tech - Premium Digital Solutions',
    description:
      'Aurum Tech provides premium digital solutions for businesses across the Middle East, Europe, and globally.',
    url: 'https://aurumtech.com',
    siteName: 'Aurum Tech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aurumtech.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurum Tech - Premium Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurum Tech - Premium Digital Solutions',
    description:
      'Aurum Tech provides premium digital solutions for businesses across the Middle East, Europe, and globally.',
    images: ['https://aurumtech.com/images/twitter-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/aurum-favicon-large.png',
        sizes: '256x256',
      },
      {
        url: '/aurum-favicon-large.png',
        sizes: '192x192',
      },
      {
        url: '/aurum-favicon.png',
        sizes: '64x64',
      },
    ],
    apple: {
      url: '/aurum-favicon-large.png',
      sizes: '180x180',
    },
    shortcut: '/aurum-favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification',
  },
  other: {
    'theme-color': '#000000',
  },
}

// Define key navigation paths for prefetching
const KEY_NAVIGATION_PATHS = ['/about/', '/contact/', '/work/']

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`h-full bg-neutral-950 text-base antialiased ${monaSans.variable}`}
    >
      <head>
        {/* Inline critical CSS to eliminate render-blocking resources */}
        <CriticalCSS />

        {/* Resource hints for faster loading */}
        <ResourceHints
          preloadFonts={true}
          preloadHero={true}
          prefetchPages={KEY_NAVIGATION_PATHS}
        />

        {/* Service worker registration - deferred loading */}
        <script src="/register-sw.js" defer data-no-instant />

        {/* Performance monitoring script - non-blocking */}
        <script src="/perf-monitor.js" async />

        {/* Mark document as JS-loaded to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-js-loaded', 'true');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/* Skip navigation link for accessibility */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <ErrorBoundary>
          <I18nProvider>
            <RootLayout>
              <main id="main-content">{children}</main>
            </RootLayout>
          </I18nProvider>
        </ErrorBoundary>

        {/* Prevent layout shifts from font loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                  document.documentElement.classList.add('fonts-loaded');
                });
              }
            `,
          }}
          defer
        />
      </body>
    </html>
  )
}
