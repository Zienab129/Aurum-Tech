'use client'

import { useTranslation as useNextTranslation } from 'react-i18next'
import i18n from './i18n'

// Custom hook for client components
export function useTranslation() {
  return useNextTranslation()
}

export { i18n }
