import type { Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import { I18nProvider } from '@/components/I18nProvider'
import dynamic from 'next/dynamic'
import '@/styles/tailwind.css'
import { monaSans } from './fonts'

const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  ssr: false,
})

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification',
  },
  other: {
    'theme-color': '#000000',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`h-full bg-neutral-950 text-base antialiased ${monaSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script src="/register-sw.js" defer></script>
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ErrorBoundary>
          <I18nProvider>
            <RootLayout>{children}</RootLayout>
          </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
