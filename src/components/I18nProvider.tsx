'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import i18n from '@/localization/i18n'

// Dynamically import I18nextProvider to only load it on the client
const I18nextProviderClient = dynamic(
  () =>
    import('react-i18next').then((mod) => ({ default: mod.I18nextProvider })),
  { ssr: false },
)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR and initial render, return children without I18nextProvider
  if (!mounted) {
    return <>{children}</>
  }

  // After client-side hydration, use the I18nextProvider
  return <I18nextProviderClient i18n={i18n}>{children}</I18nextProviderClient>
}
