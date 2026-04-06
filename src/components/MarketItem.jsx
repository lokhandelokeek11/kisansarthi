import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const MarketItem = ({ commodity, price, change, changePercent, unit = 'Quintal' }) => {
  const isPositive = change >= 0

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {commodity}
        </h4>
        <p className="text-sm text-gray-500">{unit}</p>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</p>
        <div className={`flex items-center justify-end space-x-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span>{isPositive ? '+' : ''}{changePercent}%</span>
        </div>
      </div>
    </div>
  )
}

export default MarketItem
