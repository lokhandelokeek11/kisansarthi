import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const HeroPanel = ({ theme = 'teal' }) => {
  const { t } = useLanguage()
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    {
      en: "Sell smarter, earn better",
      hi: "समझदारी से बेचें, अच्छा कमाएं",
      mr: "बुद्धीने विका, चांगले कमवा",
    },
    {
      en: "Connect directly with buyers",
      hi: "खरीदारों से सीधे जुड़ें",
      mr: "खरेदीदारांशी थेट जोडा",
    },
    {
      en: "Reduce waste, increase profit",
      hi: "बर्बादी कम करें, मुनाफा बढ़ाएं",
      mr: "कचरा कम करा, नफा वाढवा",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const themeGradients = {
    teal: 'from-teal-500 via-emerald-500 to-green-500',
    amber: 'from-amber-500 via-yellow-500 to-orange-500',
  }

  const floatingIcons = ['🌾', '🥦', '💰', '📈', '🏪', '✨']

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating icons */}
      {floatingIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className="absolute text-4xl opacity-20"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          }}
          transition={{
            duration: 20 + idx * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
              🌱
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">KisanSarthi</h1>
              <p className="text-xs text-gray-400">किसानसारथी · B2B Agricultural Platform</p>
            </div>
          </div>
        </motion.div>

        {/* Rotating message */}
        <div className="h-32 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-full flex items-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                {messages[currentMessage].en}
                <br />
                <span className="text-lg lg:text-xl font-normal text-teal-300 mt-2 block">
                  {messages[currentMessage].mr}
                </span>
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 mb-8"
        >
          {[
            { icon: '🚀', text: 'Fast & easy onboarding', mr: 'लगातार वापर' },
            { icon: '🔒', text: 'Your data is secure', mr: 'तुमचे डेटा सुरक्षित' },
            { icon: '📱', text: 'Mobile-first experience', mr: 'मोबाईल प्रथम' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-200">
              <span className="text-xl">{feature.icon}</span>
              <span className="text-sm">{feature.text}</span>
              <span className="text-xs text-gray-500">· {feature.mr}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-6 text-sm"
        >
          <div>
            <div className="text-2xl font-bold text-teal-400">50K+</div>
            <div className="text-xs text-gray-400">Active Sellers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-400">4.8★</div>
            <div className="text-xs text-gray-400">User Rating</div>
          </div>
        </motion.div>

        {/* Decorative gradient */}
        <div className={`absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br ${themeGradients[theme]} opacity-20 blur-3xl rounded-full`} />
        <div className={`absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tl ${themeGradients[theme]} opacity-10 blur-3xl rounded-full`} />
      </div>
    </div>
  )
}

export default HeroPanel
