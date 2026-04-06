import React from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import Card from './Card'

const AdvisoryCard = ({ title, description, image, category, date, readTime }) => {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🌾</div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>📖 {readTime} min read</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary-600">Read More</span>
          <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  )
}

export default AdvisoryCard
