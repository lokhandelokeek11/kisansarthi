import React, { useState, useEffect } from 'react'
import { Bell, Menu, ChevronDown, Sun, ChevronLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Topbar = ({ onMenuToggle, onSidebarToggle, sidebarOpen }) => {
  const { t, language, changeLanguage, availableLanguages } = useLanguage()
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [userName, setUserName] = useState('User')
  const [sellerType, setSellerType] = useState('fv')

  useEffect(() => {
    const saved = localStorage.getItem('sellerData')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setUserName(parsed.fullName || parsed.shopName || 'User')
      } catch (e) {
        console.error('Failed to parse seller data')
      }
    }
    const type = localStorage.getItem('sellerType')
    if (type) {
      setSellerType(type)
    }
  }, [])

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-40">
      <div className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Menu + Greeting */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-900">
                  {getTimeBasedGreeting()}, {userName} 👋
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Pune, Maharashtra</span>
                <span className="flex items-center gap-1 text-xs">
                  <Sun className="h-3 w-3" />
                  28°C, Sunny
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
              >
                <span className="font-medium">{availableLanguages.find(l => l.code === language)?.native}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>

              {showLangDropdown && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setShowLangDropdown(false)
                      }}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 ${
                        language === lang.code ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {[
                      { text: 'New buyer nearby!', time: '2 min ago' },
                      { text: 'Price updated for tomatoes', time: '5 min ago' },
                      { text: 'Order #1234 confirmed', time: '1 hour ago' },
                    ].map((notif, idx) => (
                      <div key={idx} className="px-4 py-3 hover:bg-gray-50 border-b last:border-b-0">
                        <p className="text-sm text-gray-900">{notif.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar */}
            <div className="flex items-center gap-3 pl-3 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{sellerType} seller</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold">
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* Desktop Sidebar Toggle */}
            <button
              onClick={onSidebarToggle}
              className="hidden lg:flex p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
