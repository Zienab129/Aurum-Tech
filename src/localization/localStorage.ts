const LANGUAGE_KEY = 'language_preference'

export const getLocalStorageLanguage = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(LANGUAGE_KEY)
}

export const setLocalStorageLanguage = (language: string): void => {
  if (typeof window === 'undefined') {
    return
  }
  localStorage.setItem(LANGUAGE_KEY, language)
}
