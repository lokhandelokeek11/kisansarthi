import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, MessageCircle, ArrowRight } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import AdvisoryCard from '../components/AdvisoryCard'
import Button from '../components/Button'
import { advisoryData } from '../data/dummyData'

const AdvisoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Crop Management', 'Weather', 'Sustainable Farming', 'Market Insights', 'Policies', 'Irrigation']

  const filteredData = advisoryData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 lg:ml-0 ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b p-4 sticky top-16 z-40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Advisory</p>
              <h1 className="text-xl font-bold text-gray-900">Expert Guidance</h1>
            </div>
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <MessageCircle className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {/* Desktop Header */}
          <div className="hidden lg:flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600">Expert agricultural advice</p>
              <h1 className="text-3xl font-bold text-gray-900">Advisory Center</h1>
            </div>
            <Button className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Talk to Expert</span>
            </Button>
          </div>

          <div className="lg:hidden mb-6">
            <Button variant="primary" fullWidth className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Talk to Expert (Floating)</span>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for advisory articles, topics, or crops..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredData.length}</span> articles
              {activeFilter !== 'All' && (
                <span> in <span className="font-semibold text-primary-600">{activeFilter}</span></span>
              )}
            </p>
            <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 outline-none">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Helpful</option>
            </select>
          </div>

          {/* Advisory Cards Grid */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item) => (
                <AdvisoryCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  date={item.date}
                  readTime={item.readTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search query or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('')
                  setActiveFilter('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredData.length > 0 && (
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <span>Load More Articles</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Expert CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Need Personalized Advice?</h2>
                <p className="text-primary-100 text-lg mb-0">
                  Connect directly with our team of certified agronomists for one-on-one consultation
                  tailored to your specific crop and location.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-gray-100 w-full"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-700 w-full"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating FAB for Mobile */}
      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary-600 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors z-50">
        <MessageCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}

export default AdvisoryPage
