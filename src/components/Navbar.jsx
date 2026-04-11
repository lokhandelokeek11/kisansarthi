import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const location = useLocation()
  const { t, language, changeLanguage, availableLanguages } = useLanguage()

  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/advisory') || location.pathname.startsWith('/market')

  const handleNavClick = (e, path) => {
    // If it's an anchor link (starts with #) and we're on the landing page
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(path.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = isDashboard ? [
    { name: t('nav.dashboard'), path: '/dashboard' },
    { name: t('nav.advisory'), path: '/advisory' },
    { name: t('nav.market'), path: '/market' },
  ] : [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.features'), path: '#features' },
    { name: t('nav.howItWorks'), path: '#how-it-works' },
    { name: t('nav.contact'), path: '#contact' },
  ]

  const isActiveLink = (path) => {
    if (path.startsWith('#')) {
      return false // Don't highlight anchor links
    }
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">KisanSarthi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-1 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{availableLanguages.find(l => l.code === language)?.native}</span>
              </button>

              {showLangDropdown && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setShowLangDropdown(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {!isDashboard ? (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">{t('nav.login')}</Button>
                </Link>
                <Link to="/login">
                  <Button size="sm">{t('nav.getStarted')}</Button>
                </Link>
              </>
            ) : (
              <>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Sun className="h-5 w-5 text-gray-600" />
                </button>
                <button onClick={() => {
                  localStorage.removeItem('sellerType')
                  localStorage.removeItem('sellerData')
                  window.location.href = '/login'
                }}>
                  <Button variant="outline" size="sm">{t('nav.logout')}</Button>
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  handleNavClick(e, link.path)
                  setIsMenuOpen(false)
                }}
                className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 px-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4 space-y-3">
              <Button variant="outline" fullWidth>{t('nav.login')}</Button>
              <Button fullWidth>{t('nav.getStarted')}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200'

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600',
    outline: 'bg-transparent border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Navbar
