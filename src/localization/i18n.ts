import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {
  getLocalStorageLanguage,
  setLocalStorageLanguage,
} from './localStorage'

import enTranslation from './translations/en.json'
import arTranslation from './translations/ar.json'

// Default language for SSR
const defaultLanguage = 'en'

// Initialize without browser-specific features
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: defaultLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

// Only setup browser-specific features when in browser environment
if (typeof window !== 'undefined') {
  // This will run only on the client side after hydration
  const savedLanguage = getLocalStorageLanguage() || defaultLanguage

  i18n.use(LanguageDetector).init({
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language_preference',
      caches: ['localStorage'],
    },
    lng: savedLanguage,
  })

  i18n.on('languageChanged', (lng) => {
    setLocalStorageLanguage(lng)
    // Leave DOM manipulation to React components
  })
}

export default i18n
