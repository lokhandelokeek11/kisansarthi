import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import GlassCard from '../components/GlassCard'
import LanguageSwitcher from '../components/LanguageSwitcher'
import HeroPanel from '../components/HeroPanel'

const SellerSelectionPage = () => {
  const { t, language } = useLanguage()
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleSellerSelect = (type) => {
    localStorage.setItem('sellerType', type)
    if (type === 'fv') {
      navigate('/login/fv')
    } else {
      navigate('/login/agro')
    }
  }

  const sellerTypes = [
    {
      id: 'fv',
      icon: '🥦',
      theme: 'teal',
      gradient: 'from-teal-400 to-emerald-500',
      shadowColor: 'teal',
      title: t('fvSeller.title'),
      subtitle: t('fvSeller.subtitle'),
      desc: t('fvSeller.descMarathi'),
      features: [
        { text: t('fvSeller.features.dailyPrices'), color: 'bg-teal-100 text-teal-700' },
        { text: t('fvSeller.features.buyerConnect'), color: 'bg-teal-100 text-teal-700' },
        { text: t('fvSeller.features.wasteManagement'), color: 'bg-teal-100 text-teal-700' },
        { text: t('fvSeller.features.upiCash'), color: 'bg-teal-100 text-teal-700' },
      ],
      cta: t('fvSeller.cta'),
    },
    {
      id: 'agro',
      icon: '🌾',
      theme: 'amber',
      gradient: 'from-amber-400 to-yellow-500',
      shadowColor: 'amber',
      title: t('agroSeller.title'),
      subtitle: t('agroSeller.subtitle'),
      desc: t('agroSeller.descMarathi'),
      features: [
        { text: t('agroSeller.features.catalogue'), color: 'bg-amber-100 text-amber-700' },
        { text: t('agroSeller.features.dealerConnect'), color: 'bg-amber-100 text-amber-700' },
        { text: t('agroSeller.features.bulkPricing'), color: 'bg-amber-100 text-amber-700' },
        { text: t('agroSeller.features.orderTracking'), color: 'bg-amber-100 text-amber-700' },
      ],
      cta: t('agroSeller.cta'),
    },
  ]

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Side - Hero Panel (Desktop) */}
      <div className="lg:w-1/2 w-full lg:h-screen lg:sticky lg:top-0">
        <HeroPanel theme="teal" />
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center p-6 lg:p-12">
        {/* Language Switcher & Welcome */}
        <div className="max-w-md mx-auto w-full mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {t('whoAreYou.title')}
              </h2>
              <p className="text-sm text-gray-500">
                {t('whoAreYou.subtitle')}
              </p>
            </div>
            <LanguageSwitcher compact />
          </div>

          {/* Seller Type Cards */}
          <div className="space-y-4">
            {sellerTypes.map((seller, index) => (
              <GlassCard
                key={seller.id}
                theme={seller.theme}
                hover
                onClick={() => handleSellerSelect(seller.id)}
                className="overflow-hidden group"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="p-6">
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${seller.gradient} flex items-center justify-center text-3xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {seller.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                        {seller.title}
                      </h3>
                      <p className="text-sm text-gray-500">{seller.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {seller.desc}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {seller.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${feature.color}`}
                      >
                        {feature.text}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className={`mt-2 p-3 rounded-xl bg-gradient-to-r ${seller.gradient} text-white text-center font-medium shadow-md`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {seller.cta}
                  </motion.div>
                </div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={hoveredCard === seller.id ? { x: '100%' } : {}}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </GlassCard>
            ))}
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-gray-400">
              Already have an account?{' '}
              <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
                Sign in
              </button>
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-6 left-6 text-xs text-gray-400">
          Protected by 256-bit SSL encryption
        </div>
      </div>

      {/* Mobile-only background decoration */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  )
}

export default SellerSelectionPage
