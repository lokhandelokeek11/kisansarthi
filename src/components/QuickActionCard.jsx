import React from 'react'
import { Camera, MessageCircle, Store, Newspaper, Leaf, Phone } from 'lucide-react'
import Card from './Card'

const QuickActionCard = ({ icon: Icon, title, description, color = 'primary', onClick }) => {
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600 hover:bg-primary-200',
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    yellow: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    green: 'bg-green-100 text-green-600 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    red: 'bg-red-100 text-red-600 hover:bg-red-200',
  }

  return (
    <Card
      className="text-center cursor-pointer group"
      onClick={onClick}
    >
      <div className={`p-6 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center transition-all duration-300 ${colorClasses[color]}`}>
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      )}
    </Card>
  )
}

export default QuickActionCard
