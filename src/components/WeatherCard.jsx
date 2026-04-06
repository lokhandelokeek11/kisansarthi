import React from 'react'
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react'
import Card from './Card'

const WeatherCard = ({ location, temperature, condition, humidity, wind, rainChance }) => {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="h-12 w-12 text-yellow-500" />
      case 'rainy':
      case 'rain':
        return <CloudRain className="h-12 w-12 text-blue-500" />
      default:
        return <Cloud className="h-12 w-12 text-gray-500" />
    }
  }

  const getConditionColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return 'text-yellow-600 bg-yellow-50'
      case 'rainy':
      case 'rain':
        return 'text-blue-600 bg-blue-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <Card className="bg-gradient-to-br from-primary-50 to-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {getWeatherIcon(condition)}
          <div>
            <p className="text-sm text-gray-600 font-medium">{location}</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-gray-900">{temperature}°</span>
              <span className="text-sm text-gray-500">Celsius</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-left">
            <p className={`px-3 py-1 rounded-full text-sm font-semibold ${getConditionColor(condition)}`}>
              {condition}
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Wind className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{wind} km/h</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-600">💧 {humidity}%</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-600">🌧️ {rainChance}%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default WeatherCard
