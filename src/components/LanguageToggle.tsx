'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'

export function LanguageToggle({ invert = false }: { invert?: boolean }) {
  const { i18n, t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentLanguage = i18n.language
  const isArabic = currentLanguage === 'ar'

  const toggleLanguage = () => {
    const newLanguage = isArabic ? 'en' : 'ar'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <Button
      onClick={toggleLanguage}
      invert={invert}
      className={isArabic ? 'font-sans' : 'font-arabic'}
    >
      {isArabic ? t('language.switchToEnglish') : t('language.switchToArabic')}
    </Button>
  )
}
