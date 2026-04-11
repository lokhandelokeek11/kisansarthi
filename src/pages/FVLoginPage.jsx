import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import GlassCard from '../components/GlassCard'
import LanguageSwitcher from '../components/LanguageSwitcher'
import StepForm from '../components/StepForm'

const FVLoginPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    mobile: '',
    fullName: '',
    shopName: '',
    businessType: 'street',
    products: ['fruits'],
  })

  const businessTypeOptions = [
    { key: 'street', label: t('fvBusinessTypes.street'), subtitle: t('fvBusinessTypes.street', { hi: 'पथारीवाला', mr: 'रस्ता विक्रेता' }) },
    { key: 'shop', label: t('fvBusinessTypes.shop'), subtitle: t('fvBusinessTypes.shop', { hi: 'दुकान / स्टॉल', mr: 'दुकान / स्टॉल' }) },
    { key: 'market', label: t('fvBusinessTypes.market'), subtitle: t('fvBusinessTypes.market', { hi: 'बाजार विक्रेता', mr: 'बाजार विक्रेता' }) },
    { key: 'wholesale', label: t('fvBusinessTypes.wholesale'), subtitle: t('fvBusinessTypes.wholesale', { hi: 'घाऊक', mr: 'घाऊक' }) },
  ]

  const productOptions = [
    { key: 'fruits', label: t('fvProducts.fruits'), subtitle: t('fvProducts.fruits', { hi: 'फल', mr: 'फळे' }) },
    { key: 'vegetables', label: t('fvProducts.vegetables'), subtitle: t('fvProducts.vegetables', { hi: 'सब्जियां', mr: 'भाज्या' }) },
    { key: 'both', label: t('fvProducts.both'), subtitle: t('fvProducts.both', { hi: 'दोनों', mr: 'दोन्ही' }) },
    { key: 'flowers', label: t('fvProducts.flowers'), subtitle: t('fvProducts.flowers', { hi: 'फूल', mr: 'फुले' }) },
  ]

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    // Validate current step
    if (currentStep === 0 && !formData.mobile) {
      alert('Please enter mobile number')
      return
    }
    if (currentStep === 2 && !formData.businessType) {
      alert('Please select business type')
      return
    }
    if (currentStep === 3 && formData.products.length === 0) {
      alert('Please select at least one product')
      return
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    localStorage.setItem('sellerType', 'fv')
    localStorage.setItem('sellerData', JSON.stringify(formData))
    navigate('/dashboard/fv')
  }

  const steps = [
    // Step 1: Mobile
    <div key="mobile">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Mobile Number</h3>
      <div className="relative">
        <input
          type="tel"
          value={formData.mobile}
          onChange={(e) => updateField('mobile', e.target.value)}
          placeholder="9876543210"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-900"
          autoFocus
        />
        <p className="text-xs text-gray-500 mt-2">We'll send you a verification OTP</p>
      </div>
    </div>,

    // Step 2: Name & Shop
    <div key="info">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name (optional)
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Ashvin Jaiswal"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Shop / Business Name
          </label>
          <input
            type="text"
            value={formData.shopName}
            onChange={(e) => updateField('shopName', e.target.value)}
            placeholder="Prabhu Fruit Shop"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-900"
          />
        </div>
      </div>
    </div>,

    // Step 3: Business Type
    <div key="business">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Business Type</h3>
      <div className="grid grid-cols-2 gap-3">
        {businessTypeOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => updateField('businessType', option.key)}
            className={`p-3 border-2 rounded-xl text-left transition-all ${
              formData.businessType === option.key
                ? 'border-teal-500 bg-teal-50 shadow-md'
                : 'border-gray-200 hover:border-teal-300'
            }`}
          >
            <div className="font-medium text-sm text-gray-900">{option.label}</div>
            <div className="text-xs text-gray-500 mt-1">{option.subtitle}</div>
          </button>
        ))}
      </div>
    </div>,

    // Step 4: Products
    <div key="products">
      <h3 className="text-lg font-bold text-gray-900 mb-4">What do you sell?</h3>
      <div className="grid grid-cols-2 gap-3">
        {productOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => {
              const current = formData.products
              if (current.includes(option.key)) {
                updateField('products', current.filter((p) => p !== option.key))
              } else {
                updateField('products', [...current, option.key])
              }
            }}
            className={`p-3 border-2 rounded-xl text-left transition-all ${
              formData.products.includes(option.key)
                ? 'border-teal-500 bg-teal-50 shadow-md'
                : 'border-gray-200 hover:border-teal-300'
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                  formData.products.includes(option.key)
                    ? 'border-teal-500 bg-teal-500'
                    : 'border-gray-300'
                }`}
              >
                {formData.products.includes(option.key) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">{option.label}</div>
                <div className="text-xs text-gray-500">{option.subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>,
  ]

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Brand (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 via-emerald-600 to-green-600 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.5" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white text-2xl">
              🌱
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">KisanSarthi</h1>
              <p className="text-xs text-teal-100">किसानसारथी</p>
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <h2 className="text-3xl font-bold text-white leading-tight">
              {t('fvSeller.title')}
            </h2>
            <p className="text-teal-100">{t('fvSeller.subtitle')}</p>
            <div className="flex items-center gap-3 text-teal-100">
              <div className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              <span className="text-sm">Complete setup in under 2 minutes</span>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 text-teal-100 text-sm">
            <span>🔒 Secure</span>
            <span>·</span>
            <span>✓ Verified</span>
            <span>·</span>
            <span>🚀 Fast</span>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -bottom-32 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-16 w-48 h-48 bg-teal-300/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white">
        <GlassCard className="w-full max-w-md p-8" theme="teal">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white">
                🥦
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{t('fvLogin.title')}</h2>
                <p className="text-xs text-gray-500">{t('fvLogin.role')}</p>
              </div>
            </div>
            <LanguageSwitcher compact />
          </div>

          {/* Step Form */}
          <StepForm
            steps={steps}
            currentStep={currentStep}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
            theme="teal"
          />
        </GlassCard>
      </div>
    </div>
  )
}

export default FVLoginPage
