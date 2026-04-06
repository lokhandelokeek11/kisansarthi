import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Globe, Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
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
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Advisory', path: '/advisory' },
    { name: 'Market', path: '/market' },
  ] : [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '#features' },
    { name: 'How it Works', path: '#how-it-works' },
    { name: 'Contact', path: '#contact' },
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
            {!isDashboard ? (
              <>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Globe className="h-5 w-5 text-gray-600" />
              </button>
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/login">
                <Button size="sm">Get Started</Button>
              </Link>
              </>
            ) : (
              <>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Sun className="h-5 w-5 text-gray-600" />
                </button>
                <Link to="/login">
                  <Button variant="outline" size="sm">Logout</Button>
                </Link>
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
                className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 space-y-3">
              <Button variant="outline" fullWidth>Login</Button>
              <Button fullWidth>Get Started</Button>
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
