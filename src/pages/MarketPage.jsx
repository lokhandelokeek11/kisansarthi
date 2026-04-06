import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ChevronDown, TrendingUp, Info, Star, RefreshCw } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import MarketItem from '../components/MarketItem'
import Button from '../components/Button'
import { marketData } from '../data/dummyData'

const MarketPage = () => {
  const [activeTab, setActiveTab] = useState('nearby')
  const [selectedMandi, setSelectedMandi] = useState(marketData.mandi)
  const [showMandiDropdown, setShowMandiDropdown] = useState(false)

  const mandis = [
    { name: 'Pune Agricultural Market (Laudha)', isCurrent: true },
    { name: 'Pune Grain Market', isCurrent: false },
    { name: 'Koregaon Park Mandi', isCurrent: false },
    { name: 'Deccan Gymkhana Market', isCurrent: false },
  ]

  const tabs = [
    { id: 'nearby', label: 'Nearby Mandis' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'grains', label: 'Grains' },
  ]

  const filteredCommodities = marketData.commodities

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 lg:ml-0 ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b p-4 sticky top-16 z-40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Market</p>
              <h1 className="text-xl font-bold text-gray-900">Market Prices</h1>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <RefreshCw className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {/* Desktop Header */}
          <div className="hidden lg:flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600">Real-time mandi rates</p>
              <h1 className="text-3xl font-bold text-gray-900">Market Prices</h1>
            </div>
            <Button className="flex items-center space-x-2">
              <RefreshCw className="h-5 w-5" />
              <span>Refresh</span>
            </Button>
          </div>

          <div className="space-y-6">
            {/* Mandi Selector */}
            <div className="relative">
              <button
                onClick={() => setShowMandiDropdown(!showMandiDropdown)}
                className="w-full md:w-auto flex items-center justify-between md:justify-start space-x-2 px-6 py-4 bg-white border border-gray-200 rounded-2xl hover:shadow-sm transition-all"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Selected Mandi</p>
                    <p className="font-semibold text-gray-900 truncate max-w-xs">{selectedMandi}</p>
                  </div>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>

              {showMandiDropdown && (
                <div className="absolute top-full left-0 right-0 md:w-96 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-10">
                  {mandis.map((mandi, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedMandi(mandi.name)
                        setShowMandiDropdown(false)
                      }}
                      className={`w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors ${
                        mandi.isCurrent ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className={`h-5 w-5 ${mandi.isCurrent ? 'text-primary-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${mandi.isCurrent ? 'text-primary-600' : 'text-gray-900'}`}>
                          {mandi.name}
                        </span>
                      </div>
                      {mandi.isCurrent && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
              <div className="flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Commodities List */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Commodity Prices</h2>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium text-xs">
                        Live Rates
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {filteredCommodities.map((commodity) => (
                      <MarketItem key={commodity.id} commodity={commodity} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Panel */}
              <div className="space-y-6">
                {/* Market Insight */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <Info className="h-6 w-6" />
                    <h3 className="text-lg font-bold">Market Insight</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-primary-100 mb-1">Top Performer</p>
                      <p className="text-2xl font-bold">Maize</p>
                      <p className="text-sm text-primary-100">↑ 4.4% today</p>
                    </div>
                    <div className="h-px bg-white/20"></div>
                    <div>
                      <p className="text-sm text-primary-100 mb-1">Most Traded</p>
                      <p className="text-2xl font-bold">Wheat</p>
                      <p className="text-sm text-primary-100">High volume</p>
                    </div>
                  </div>
                </div>

                {/* Price Alert */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Set Price Alert</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Commodity
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none">
                        {marketData.commodities.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alert When Price
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none">
                        <option>Goes Above</option>
                        <option>Goes Below</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Price (₹/Quintal)
                      </label>
                      <input
                        type="number"
                        placeholder="e.g., 3000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                    <Button fullWidth>Create Alert</Button>
                  </div>
                </div>

                {/* Recent Changes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Changes</h3>
                  <div className="space-y-4">
                    {marketData.commodities
                      .filter((c) => c.change !== 0)
                      .sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
                      .slice(0, 3)
                      .map((commodity) => (
                        <div key={commodity.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{commodity.name}</p>
                            <p className="text-sm text-gray-500">₹{commodity.price}</p>
                          </div>
                          <div className={`flex items-center space-x-1 font-semibold ${
                            commodity.change > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {commodity.change > 0 ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingUp className="h-4 w-4 transform rotate-180" />
                            )}
                            <span>
                              {commodity.change > 0 ? '+' : ''}{commodity.changePercent}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Mandi Info */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About This Mandi</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Operating Hours</span>
                      <span className="font-medium text-gray-900">6 AM - 8 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Avg. Transactions</span>
                      <span className="font-medium text-gray-900">2,500/day</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Distance</span>
                      <span className="font-medium text-gray-900">5.2 km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">4.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating FAB for Mobile */}
      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors z-50">
        <RefreshCw className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}

export default MarketPage
