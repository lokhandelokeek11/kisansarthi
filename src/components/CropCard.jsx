import React from 'react'
import { Leaf, FileText, Lightbulb } from 'lucide-react'
import Card from './Card'

const CropCard = ({ crop }) => {
  const { name, health = 'Good', plantedDate = 'N/A', expectedHarvest = 'N/A' } = crop || {}

  const getHealthColor = (health) => {
    switch (health?.toLowerCase()) {
      case 'excellent':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'good':
        return 'text-primary-600 bg-primary-50 border-primary-200'
      case 'fair':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'poor':
        return 'text-red-600 bg-red-50 border-red-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getHealthIcon = (health) => {
    switch (health?.toLowerCase()) {
      case 'excellent':
      case 'good':
        return '✅'
      case 'fair':
        return '⚠️'
      case 'poor':
        return '❌'
      default:
        return '🌱'
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="h-20 w-20 text-primary-300" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getHealthColor(health)}`}>
            {getHealthIcon(health)} {health}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Planted</span>
            <span className="font-medium text-gray-900">{plantedDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Expected Harvest</span>
            <span className="font-medium text-gray-900">{expectedHarvest}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors font-medium text-sm">
            <FileText className="h-4 w-4" />
            <span>Health Report</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm">
            <Lightbulb className="h-4 w-4" />
            <span>Tips</span>
          </button>
        </div>
      </div>
    </Card>
  )
}

export default CropCard
