import React, { createContext, useContext, useState, useEffect } from 'react'
import translations from '../i18n/translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  // Default language: 'en', check localStorage for saved preference
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('kisansarthi_language')
    return saved && ['en', 'hi', 'mr'].includes(saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('kisansarthi_language', language)
  }, [language])

  const changeLanguage = (lang) => {
    if (['en', 'hi', 'mr'].includes(lang)) {
      setLanguage(lang)
    }
  }

  // Translation function
  const t = (key, options = {}) => {
    // Support nested keys with dot notation: 'whoAreYou.title'
    const keys = key.split('.')
    let value = translations

    for (const k of keys) {
      if (!value || typeof value !== 'object') {
        return key // fallback to key if not found
      }
      value = value[k]
    }

    // If value is an object with language keys, return current language
    if (value && typeof value === 'object') {
      return value[language] || value['en'] || key
    }

    // If value is a string, return it (for simple translations)
    if (typeof value === 'string') {
      return value
    }

    return key // fallback
  }

  const value = {
    language,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'en', name: 'English', native: 'English' },
      { code: 'hi', name: 'हिंदी', native: 'हिंदी' },
      { code: 'mr', name: 'मराठी', native: 'मराठी' },
    ],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
