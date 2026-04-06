import React from 'react'
import { Link } from 'react-router-dom'
import {
  Bell,
  Camera,
  MessageCircle,
  Store,
  Newspaper,
  TrendingUp,
  MapPin,
  Droplets,
  Wind,
  Leaf,
  Lightbulb,
  FileText,
  LayoutDashboard,
  LineChart,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import WeatherCard from '../components/WeatherCard'
import CropCard from '../components/CropCard'
import MarketItem from '../components/MarketItem'
import QuickActionCard from '../components/QuickActionCard'
import Button from '../components/Button'
import { weatherData, cropsData, marketData } from '../data/dummyData'

const iconMap = {
  Camera,
  MessageCircle,
  Store,
  Newspaper,
}

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 lg:ml-0 ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b p-4 sticky top-16 z-40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Namaste,</p>
              <p className="text-lg font-bold text-gray-900">Aditya Thakur</p>
            </div>
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-700" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {/* Desktop Header */}
          <div className="hidden lg:flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600">Namaste,</p>
              <h1 className="text-3xl font-bold text-gray-900">Aditya Thakur</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Weather Card */}
            <section>
              <WeatherCard
                location={weatherData.location}
                temperature={weatherData.temperature}
                condition={weatherData.condition}
                humidity={weatherData.humidity}
                wind={weatherData.wind}
                rainChance={weatherData.rainChance}
              />
            </section>

            {/* Quick Actions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <QuickActionCard
                  icon={Camera}
                  title="Crop Scan"
                  description="AI-powered crop disease detection"
                  color="primary"
                />
                <QuickActionCard
                  icon={MessageCircle}
                  title="Expert Chat"
                  description="Connect with agriculture experts"
                  color="blue"
                />
                <QuickActionCard
                  icon={Store}
                  title="Agri Store"
                  description="Buy seeds, tools & fertilizers"
                  color="green"
                />
                <QuickActionCard
                  icon={Newspaper}
                  title="News"
                  description="Latest agriculture updates"
                  color="yellow"
                />
              </div>
            </section>

            {/* My Crops & Market Prices */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* My Crops */}
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Crops</h2>
                  <Link
                    to="/advisory"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                  >
                    View All
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cropsData.slice(0, 2).map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                  ))}
                </div>
              </div>

              {/* Market Prices */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Market Prices</h2>
                  <Link
                    to="/market"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                  >
                    View All
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Top Gainers</p>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900 truncate max-w-xs">
                          {marketData.mandi}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">+2.3%</p>
                      <p className="text-xs text-gray-500">Today</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {marketData.commodities.slice(0, 4).map((commodity) => (
                      <MarketItem key={commodity.id} commodity={commodity} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Advisory Preview */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Advisory</h2>
                <Link
                  to="/advisory"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  View All
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Expert Advice</p>
                        <p className="font-semibold text-gray-900">Advisory #{i}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Best practices for your crops this season
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      Learn about optimal fertilizer schedule, pest management, and harvesting techniques.
                    </p>
                    <Button variant="primary" size="sm" fullWidth>
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage
