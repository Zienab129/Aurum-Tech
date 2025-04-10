import type { Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import { I18nProvider } from '@/components/I18nProvider'
import dynamic from 'next/dynamic'
import '@/styles/tailwind.css'

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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className="h-full bg-neutral-950 text-base antialiased"
    >
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
