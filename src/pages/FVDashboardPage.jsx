import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  Phone,
  MessageCircle,
  ShoppingCart,
  TrendingUp,
  Users,
  Recycle,
  Zap,
  Award,
  MapPin,
  Star,
} from 'lucide-react'

const FVDashboardPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    fullName: 'Ashvin',
    shopName: 'Prabhu Fruit Shop',
  })

  useEffect(() => {
    const saved = localStorage.getItem('sellerData')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setUserData({
          fullName: parsed.fullName || 'Ashvin',
          shopName: parsed.shopName || 'Prabhu Fruit Shop',
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

  // Sample price chart data
  const priceData = [
    { day: 'Mon', price: 16 },
    { day: 'Tue', price: 17 },
    { day: 'Wed', price: 15 },
    { day: 'Thu', price: 18 },
    { day: 'Fri', price: 19 },
    { day: 'Sat', price: 18 },
    { day: 'Sun', price: 18 },
  ]

  const nearbyBuyers = [
    {
      name: 'Hotel Sawarkar',
      icon: '🏨',
      distance: '1.2 km',
      location: 'Kothrud, Pune',
      price: '₹20/kg',
      verified: true,
      rating: 4.8,
      demand: 'High',
    },
    {
      name: 'Vijay General Store',
      icon: '🏪',
      distance: '0.8 km',
      location: 'Deccan',
      price: 'Market rate',
      verified: true,
      rating: 4.5,
      demand: 'Medium',
    },
    {
      name: 'Fresh Mart',
      icon: '🛒',
      distance: '2.1 km',
      location: 'Aundh',
      price: '₹19/kg',
      verified: false,
      rating: 4.2,
      demand: 'High',
    },
  ]

  const wasteStats = {
    reused: 65,
    target: 80,
    collectors: 4,
  }

  return (
    <div className="space-y-6">
      {/* Smart Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg shadow-teal-500/20"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl">
                🌱
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  {t('fvDashboard.greeting')}, {userData.fullName} 👋
                </h1>
                <p className="text-teal-100 text-sm">{userData.shopName} · Pune, Maharashtra</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm text-teal-100">
              <div className="flex items-center gap-1">
                <span>📍 Near Kothrud</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🌤️ 28°C, Sunny</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📈 Tomato: ₹18/kg</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-teal-100">Updated</p>
              <p className="font-semibold">2 min ago</p>
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

      {/* Live Metrics Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Metric 1: Tomato Price */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-teal-50 rounded-xl">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full flex items-center gap-1"
            >
              <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                ↑
              </motion.span>
              12%
            </motion.span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">₹18/kg</div>
            <p className="text-sm text-gray-500">Tomato Avg Rate</p>
            <div className="text-xs text-gray-400 mt-2">Last updated: 6 AM</div>
          </div>
        </div>

        {/* Metric 2: Nearby Buyers */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Nearby</span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>7</motion.span>
            </div>
            <p className="text-sm text-gray-500">Active Buyers</p>
            <div className="text-xs text-gray-400 mt-2">Within 5 km radius</div>
          </div>
        </div>

        {/* Metric 3: Waste Collectors */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-50 rounded-xl">
              <Recycle className="h-6 w-6 text-green-600" />
            </div>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full"
            >
              Eco
            </motion.span>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>4</motion.span>
            </div>
            <p className="text-sm text-gray-500">Waste Collectors</p>
            <div className="text-xs text-gray-400 mt-2">3 available today</div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          {/* Market Insights with Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Market Insights</h2>
                <p className="text-sm text-gray-500">Tomato price trends (last 7 days)</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">↑ Trending</span>
              </div>
            </div>

            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <AreaChart data={priceData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} domain={['dataMin - 2', 'dataMax + 2']} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '12px',
                    }}
                    formatter={(value) => [`₹${value}/kg`, 'Price']}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Nearby Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Nearby Buyers</h2>
              <button className="text-sm text-teal-600 font-medium hover:text-teal-700">View All →</button>
            </div>

            <div className="space-y-4">
              {nearbyBuyers.map((buyer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-3xl">
                      {buyer.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{buyer.name}</h3>
                        {buyer.verified && (
                          <Award className="h-4 w-4 text-teal-600" title="Verified" />
                        )}
                        <span className="flex items-center gap-0.5 text-xs text-amber-600">
                          <Star className="h-3 w-3 fill-current" />
                          {buyer.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {buyer.distance} · {buyer.location}
                        </span>
                        <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full">
                          {buyer.demand} demand
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-teal-600">{buyer.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-medium rounded-lg shadow-md"
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
          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-5 text-white shadow-lg shadow-purple-500/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5" />
              <h3 className="font-bold">AI Insights</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div>
                    <p className="text-sm font-medium">Tomato prices expected to rise by 8% tomorrow</p>
                    <p className="text-xs opacity-75 mt-1">Based on market trends & demand</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="text-sm font-medium">High demand in Kothrud area</p>
                    <p className="text-xs opacity-75 mt-1">5 new buyers looking for tomatoes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Waste Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-5 w-5 text-green-600" />
              <h2 className="font-bold text-gray-900">Waste Connect</h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Waste reused</span>
                  <span className="font-semibold text-green-600">{wasteStats.reused}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${wasteStats.reused}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Goal: {wasteStats.target}%</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-green-800">Earned from waste</p>
                  <p className="text-2xl font-bold text-green-600">₹1,250</p>
                </div>
                <div className="text-3xl">♻️</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-md"
              >
                Post Today's Waste →
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-100 shadow-lg"
          >
            <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ShoppingCart, label: 'Create Listing', color: 'from-teal-500 to-emerald-500' },
                { icon: MessageCircle, label: 'Expert Chat', color: 'from-blue-500 to-blue-600' },
                { icon: TrendingUp, label: 'Market Watch', color: 'from-amber-500 to-yellow-500' },
                { icon: Users, label: 'Invite Buyers', color: 'from-purple-500 to-purple-600' },
              ].map((action, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-gradient-to-br ${action.color} rounded-xl text-white shadow-md`}
                >
                  <action.icon className="h-6 w-6 mx-auto mb-2" />
                  <span className="text-xs font-medium">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FVDashboardPage
