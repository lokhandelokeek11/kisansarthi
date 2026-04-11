import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  Package,
  Users,
  ShoppingCart,
  Bell,
  AlertTriangle,
  TrendingUp,
  Zap,
  Award,
  Phone,
  MessageCircle,
  MapPin,
  Star,
} from 'lucide-react'

const AgroDashboardPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    fullName: 'Santosh',
    organisation: 'Nrusinha Krushisuvidha',
  })

  useEffect(() => {
    const saved = localStorage.getItem('sellerData')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setUserData({
          fullName: parsed.fullName || 'Santosh',
          organisation: parsed.organisation || 'Nrusinha Krushisuvidha',
        })
      } catch (e) {
        console.error('Failed to parse seller data')
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('sellerType')
    localStorage.removeItem('sellerData')
    navigate('/login')
  }

  // Order volume chart data
  const orderData = [
    { month: 'Jan', orders: 12 },
    { month: 'Feb', orders: 19 },
    { month: 'Mar', orders: 15 },
    { month: 'Apr', orders: 25 },
    { month: 'May', orders: 22 },
    { month: 'Jun', orders: 30 },
  ]

  const dealers = [
    {
      name: 'Radhe Agro Shop',
      icon: '🏪',
      distance: '2.1 km',
      location: 'Nashik Road',
      rating: 4.8,
      minUnits: 'Min 10 units',
      verified: true,
      pendingOrders: 2,
    },
    {
      name: 'Green Valley Store',
      icon: '🏬',
      distance: '3.5 km',
      location: 'Camp',
      rating: 4.6,
      minUnits: 'Min 20 units',
      verified: true,
      pendingOrders: 1,
    },
    {
      name: 'Agro Solutions',
      icon: '🏢',
      distance: '5.2 km',
      location: 'Koregaon Park',
      rating: 4.4,
      minUnits: 'Min 50 units',
      verified: false,
      pendingOrders: 3,
    },
  ]

  const alerts = [
    { type: 'payment', count: 2, text: 'Payments delayed', color: 'red' },
    { type: 'order', count: 3, text: 'New orders pending', color: 'amber' },
    { type: 'message', count: 5, text: 'Unread messages', color: 'blue' },
  ]

  return (
    <div className="space-y-6">
      {/* Smart Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-6 text-white shadow-lg shadow-amber-500/20"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl">
                🌾
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  {t('agroDashboard.greeting')}, {userData.fullName} 👋
                </h1>
                <p className="text-amber-100 text-sm">{userData.organisation} · Distributor</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm text-amber-100">
              <div className="flex items-center gap-1">
                <span>📍 Near Nashik Road</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📦 12 active orders</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🤝 25 dealers</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-amber-100">Monthly Revenue</p>
              <p className="text-2xl font-bold">₹2.4L</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl text-sm font-medium hover:bg-white/30 transition-colors"
            >
              Refresh ↻
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Alert Banners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {alerts.map((alert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-4 flex items-center gap-3 ${
              alert.color === 'red'
                ? 'bg-red-50 border border-red-100'
                : alert.color === 'amber'
                ? 'bg-amber-50 border border-amber-100'
                : 'bg-blue-50 border border-blue-100'
            }`}
          >
            <div className={`p-2 rounded-lg ${alert.color === 'red' ? 'bg-red-100' : alert.color === 'amber' ? 'bg-amber-100' : 'bg-blue-100'}`}>
              <AlertTriangle className={`h-5 w-5 ${alert.color === 'red' ? 'text-red-600' : alert.color === 'amber' ? 'text-amber-600' : 'text-blue-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${alert.color === 'red' ? 'text-red-800' : alert.color === 'amber' ? 'text-amber-800' : 'text-blue-800'}`}>
                {alert.count} {alert.text}
              </p>
            </div>
            <div className="text-2xl font-bold opacity-50">{alert.count}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Live Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full"
            >
              +3 new
            </motion.span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">12</div>
            <p className="text-sm text-gray-500">Connected Dealers</p>
            <div className="text-xs text-gray-400 mt-2">Active this month</div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-red-50 rounded-xl">
              <ShoppingCart className="h-6 w-6 text-red-600" />
            </div>
            <span className="px-2 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">Pending</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">3</div>
            <p className="text-sm text-gray-500">Pending Orders</p>
            <div className="text-xs text-gray-400 mt-2">Requires attention</div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-50 rounded-xl">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">Verified</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">8</div>
            <p className="text-sm text-gray-500">Verified Buyers</p>
            <div className="text-xs text-gray-400 mt-2">Trusted partners</div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Trends Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Order Trends</h2>
                <p className="text-sm text-gray-500">Monthly order volume</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium">↑ Growing</span>
              </div>
            </div>

            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={orderData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '12px',
                    }}
                    formatter={(value) => [value, 'Orders']}
                  />
                  <Bar dataKey="orders" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Dealers List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Connected Dealers</h2>
              <button 
                onClick={() => navigate('/agro/dealers')}
                className="text-sm text-amber-600 font-medium hover:text-amber-700"
              >
                View All →
              </button>
            </div>

            <div className="space-y-4">
              {dealers.map((dealer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-3xl">
                      {dealer.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{dealer.name}</h3>
                        {dealer.verified && (
                          <Award className="h-4 w-4 text-amber-600" title="Verified" />
                        )}
                        <span className="flex items-center gap-0.5 text-xs text-amber-600">
                          <Star className="h-3 w-3 fill-current" />
                          {dealer.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {dealer.distance} · {dealer.location}
                        </span>
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-xs rounded-full">
                          Min {dealer.minUnits.split(' ')[1]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-red-600">
                          {dealer.pendingOrders} pending orders
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-medium rounded-lg shadow-md"
                      >
                        <Phone className="h-3 w-3 inline mr-1" />
                        Call
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg"
                      >
                        <MessageCircle className="h-3 w-3 inline mr-1" />
                        Chat
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-5 text-white shadow-lg shadow-purple-500/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5" />
              <h3 className="font-bold">AI Suggestions</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div>
                    <p className="text-sm font-medium">Increase stock of Organic NPK</p>
                    <p className="text-xs opacity-75 mt-1">Demand rising +20% this week</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="text-sm font-medium">Offer bulk discount to Radhe Agro</p>
                    <p className="text-xs opacity-75 mt-1">They order &gt;50 units regularly</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pending Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5 text-amber-600" />
              <h2 className="font-bold text-gray-900">Pending Orders</h2>
            </div>

            <div className="space-y-3">
              {[
                { id: '#ORD-001', buyer: 'Radhe Agro', items: 3, total: '₹12,500', urgent: true },
                { id: '#ORD-002', buyer: 'Green Valley', items: 2, total: '₹8,400', urgent: false },
                { id: '#ORD-003', buyer: 'Agro Solutions', items: 5, total: '₹28,000', urgent: true },
              ].map((order, idx) => (
                <div key={idx} className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500">{order.id}</span>
                    {order.urgent && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">Urgent</span>
                    )}
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{order.buyer}</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{order.items} items</span>
                    <span className="font-bold text-amber-700">{order.total}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/agro/orders')}
              className="w-full mt-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-medium shadow-md"
            >
              Process All Orders →
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Package, label: 'Add Product', color: 'bg-amber-500', action: () => navigate('/agro/catalogue') },
                { icon: Bell, label: 'Send Alert', color: 'bg-red-500', action: () => {} },
                { icon: TrendingUp, label: 'Set Prices', color: 'bg-green-500', action: () => {} },
                { icon: Users, label: 'Invite Dealer', color: 'bg-blue-500', action: () => navigate('/agro/dealers') },
              ].map((action, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.action}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className={`p-2 rounded-xl text-white ${action.color}`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AgroDashboardPage
