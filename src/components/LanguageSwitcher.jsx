import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = ({ compact = false }) => {
  const { language, changeLanguage, availableLanguages } = useLanguage()

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-full p-1">
        {availableLanguages.map((lang, idx) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
              ${language === lang.code
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }
            `}
          >
            {lang.native}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-1.5">
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
              ${language === lang.code
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {language === lang.code && (
              <motion.div
                layoutId="languageIndicator"
                className="absolute inset-0 bg-white rounded-xl shadow-md"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{lang.native}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher
