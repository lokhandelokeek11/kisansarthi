import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, MessageCircle, LineChart, Store, Leaf, Bell, Settings, LogOut } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Advisory', icon: MessageCircle, path: '/advisory' },
    { name: 'Market', icon: LineChart, path: '/market' },
    { name: 'Agri Store', icon: Store, path: '#' },
    { name: 'My Crops', icon: Leaf, path: '#' },
  ]

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    if (path === '/advisory') return location.pathname === '/advisory'
    if (path === '/market') return location.pathname === '/market'
    return false
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16">
      {/* User Profile */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold text-lg">V</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Ved Sharma</p>
            <p className="text-sm text-gray-500">Farmer • Maharashtra</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
