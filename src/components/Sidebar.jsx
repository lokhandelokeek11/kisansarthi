import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import {
  LayoutDashboard,
  Search,
  TrendingUp,
  Recycle,
  Package,
  Users,
  User,
  ChevronLeft,
  ChevronRight,
  Store,
  Bell,
  Settings,
} from 'lucide-react'
import { motion } from 'framer-motion'

const Sidebar = ({ collapsed, mobile = false, onToggle }) => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const sellerType = localStorage.getItem('sellerType') || 'fv'

  const isActive = (path) => {
    return location.pathname === path
  }

  // Base navigation items (common to both)
  const baseNavItems = [
    {
      icon: LayoutDashboard,
      label: t('nav.dashboard'),
      path: '/dashboard',
      activePath: sellerType === 'fv' ? '/dashboard/fv' : '/dashboard/agro',
    },
  ]

  // FV Seller specific
  const fvNavItems = [
    {
      icon: Search,
      label: 'Find Buyers',
      path: '/find-buyers',
      activePath: '/find-buyers',
    },
    {
      icon: TrendingUp,
      label: 'Market Prices',
      path: '/market-prices',
      activePath: '/market-prices',
    },
    {
      icon: Recycle,
      label: 'Waste Connect',
      path: '/waste-connect',
      activePath: '/waste-connect',
      highlight: true,
      badge: 'CORE',
    },
  ]

  // Agro Seller specific
  const agroNavItems = [
    {
      icon: Package,
      label: 'Catalogue',
      path: '/agro/catalogue',
      activePath: '/agro/catalogue',
    },
    {
      icon: Users,
      label: 'Dealers',
      path: '/agro/dealers',
      activePath: '/agro/dealers',
    },
    {
      icon: Store,
      label: 'Orders',
      path: '/agro/orders',
      activePath: '/agro/orders',
    },
  ]

  // Common bottom items
  const bottomNavItems = [
    {
      icon: User,
      label: t('nav.profile'),
      path: sellerType === 'fv' ? '/profile' : '/agro/profile',
      activePath: sellerType === 'fv' ? '/profile' : '/agro/profile',
    },
  ]

  const navItems = sellerType === 'fv' ? [...baseNavItems, ...fvNavItems, ...bottomNavItems] : [...baseNavItems, ...agroNavItems, ...bottomNavItems]

  const handleNavClick = (path) => {
    navigate(path)
    if (mobile) {
      // Close mobile sidebar will be handled by parent
    }
  }

  const getThemeColors = () => {
    return sellerType === 'fv'
      ? {
          activeBg: 'bg-teal-50',
          activeText: 'text-teal-700',
          activeBorder: 'border-teal-500',
          iconActive: 'text-teal-600',
          iconInactive: 'text-gray-400',
        }
      : {
          activeBg: 'bg-amber-50',
          activeText: 'text-amber-700',
          activeBorder: 'border-amber-500',
          iconActive: 'text-amber-600',
          iconInactive: 'text-gray-400',
        }
  }

  const colors = getThemeColors()

  const NavItem = ({ item }) => {
    const active = isActive(item.activePath)
    const isHighlighted = item.highlight

    return (
      <motion.button
        whileHover={{ x: 4 }}
        onClick={() => handleNavClick(item.path)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative ${
          active 
            ? `${colors.activeBg} ${colors.activeText}` 
            : isHighlighted 
              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              : 'hover:bg-gray-50 text-gray-600'
        } ${isHighlighted && !active ? 'border-2 border-emerald-200 border-dashed' : ''}`}
      >
        {active && (
          <motion.div
            layoutId="sidebarActive"
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full ${colors.activeBorder}`}
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <item.icon className={`h-5 w-5 flex-shrink-0 ${active ? colors.iconActive : isHighlighted ? 'text-emerald-600' : colors.iconInactive}`} />
        {!collapsed && (
          <div className="flex-1 flex items-center justify-between">
            <span className="font-medium text-sm truncate">{item.label}</span>
            {item.badge && (
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                isHighlighted ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {item.badge}
              </span>
            )}
          </div>
        )}
      </motion.button>
    )
  }

  if (mobile) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                sellerType === 'fv' ? 'bg-gradient-to-r from-teal-400 to-emerald-500' : 'bg-gradient-to-r from-amber-400 to-yellow-500'
              }`}
            >
              {sellerType === 'fv' ? '🥦' : '🌾'}
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-gray-900 text-lg">KisanSarthi</h2>
                <p className="text-xs text-gray-500">किसानसारथी</p>
              </div>
            )}
          </div>

          <nav className="space-y-1">
            {navItems.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t space-y-2">
          <button
            onClick={() => {
              localStorage.removeItem('sellerType')
              localStorage.removeItem('sellerData')
              navigate('/login')
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
          >
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col p-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 ${
              sellerType === 'fv' ? 'bg-gradient-to-r from-teal-400 to-emerald-500' : 'bg-gradient-to-r from-amber-400 to-yellow-500'
            }`}
          >
            {sellerType === 'fv' ? '🥦' : '🌾'}
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-gray-900 text-lg">KisanSarthi</h2>
              <p className="text-xs text-gray-500">किसानसारथी</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item, idx) => (
          <NavItem key={idx} item={item} />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto space-y-2">
        {/* Collapse Button */}
        {onToggle && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={onToggle}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            {!collapsed && <span className="text-sm">Collapse</span>}
          </motion.button>
        )}

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem('sellerType')
            localStorage.removeItem('sellerData')
            navigate('/login')
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors"
        >
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
