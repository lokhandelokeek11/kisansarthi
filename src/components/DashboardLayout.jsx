import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const useAuth = () => {
  const sellerType = localStorage.getItem('sellerType')
  return sellerType
}

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    // Check localStorage for saved state
    return localStorage.getItem('sidebarOpen') !== 'false'
  })
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  // Auth check
  const sellerType = useAuth()
  if (!sellerType) {
    navigate('/login', { replace: true })
    return null
  }

  // Persist sidebar state
  useEffect(() => {
    localStorage.setItem('sidebarOpen', sidebarOpen)
  }, [sidebarOpen])

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(prev => !prev)
  }

  const getPageTitle = () => {
    const path = location.pathname
    if (path.includes('/catalogue')) return 'Catalogue'
    if (path.includes('/dealers')) return 'Dealers'
    if (path.includes('/waste-connect')) return 'Waste Connect'
    if (path.includes('/find-buyers')) return 'Find Buyers'
    if (path.includes('/market-prices')) return 'Market Prices'
    if (path.includes('/orders')) return 'Orders'
    if (path.includes('/profile')) return 'Profile'
    return 'Dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/80 backdrop-blur border-b sticky top-0 z-40">
        <div className="px-4 py-3 flex items-center justify-between">
          <button onClick={toggleMobileSidebar} className="p-2 rounded-lg hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="font-bold text-gray-900">{getPageTitle()}</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-50">
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className={`${sidebarOpen ? 'w-64' : 'w-20'} h-full bg-white/80 backdrop-blur-xl border-r border-gray-200/50 shadow-xl transition-all duration-300`}
        >
          <Sidebar collapsed={!sidebarOpen} mobile={false} onToggle={toggleSidebar} />
        </motion.div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            onClick={toggleMobileSidebar}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileSidebar} className="p-2 rounded-lg hover:bg-gray-100">
                ✕
              </button>
            </div>
            <Sidebar collapsed={false} mobile />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} transition-all duration-300`}>
        <Topbar onMenuToggle={toggleMobileSidebar} onSidebarToggle={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
