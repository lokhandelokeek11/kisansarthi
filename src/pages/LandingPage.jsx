import React from 'react'
import { Link } from 'react-router-dom'
import {
  Camera,
  MessageCircle,
  LineChart,
  Cloud,
  Store,
  Leaf,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Newspaper,
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import AdvisoryCard from '../components/AdvisoryCard'
import { advisoryData, quickActionsData, testimonialsData, cropsData } from '../data/dummyData'

// Icon mapping
const iconMap = {
  Camera,
  MessageCircle,
  Store,
  Newspaper,
}

const LandingPage = () => {
  const features = [
    {
      icon: Camera,
      title: 'Crop Scan',
      description: 'AI-powered disease detection for your crops with instant remedies.',
    },
    {
      icon: MessageCircle,
      title: 'Expert Advisory',
      description: 'Connect with experienced agronomists for personalized guidance.',
    },
    {
      icon: LineChart,
      title: 'Market Prices',
      description: 'Real-time mandi rates to get the best price for your produce.',
    },
    {
      icon: Cloud,
      title: 'Weather Insights',
      description: 'Accurate weather forecasts and rainfall predictions.',
    },
    {
      icon: Store,
      title: 'Agri Store',
      description: 'One-stop shop for seeds, fertilizers, and farming tools.',
    },
    {
      icon: Leaf,
      title: 'Farm Management',
      description: 'Track all your crops, expenses, and yields in one place.',
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Add Your Crops',
      description: 'Register your farm and add details about the crops you are growing.',
    },
    {
      step: '02',
      title: 'Get Smart Insights',
      description: 'Receive personalized recommendations based on your crop data and local conditions.',
    },
    {
      step: '03',
      title: 'Improve Yield',
      description: 'Follow expert advice and monitor progress to maximize your harvest.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🌾 Trusted by 50,000+ Farmers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Farmers with{' '}
                <span className="text-yellow-300">Smart Technology</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                Your all-in-one platform for modern farming. Get AI-powered insights, expert advice, and market intelligence to maximize your yields.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="#features">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                    Explore Features
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary-700">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 font-semibold">4.8/5</span>
                  </div>
                  <p className="text-primary-200">from 2,000+ reviews</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-primary-400 rounded-3xl blur-2xl opacity-30"></div>
              <Card className="relative p-8 bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Cloud className="h-6 w-6 text-primary-600" />
                        <span className="text-sm font-semibold">Weather</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">28°C</p>
                      <p className="text-xs text-gray-600">Partly Cloudy</p>
                    </div>
                    <div className="bg-white/90 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <LineChart className="h-6 w-6 text-green-600" />
                        <span className="text-sm font-semibold">Market</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">₹2,200</p>
                      <p className="text-xs text-green-600">Wheat ↑ 2.3%</p>
                    </div>
                  </div>
                  <div className="bg-white/90 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Leaf className="h-6 w-6 text-primary-600" />
                      <span className="text-sm font-semibold">Crop Health</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">Wheat - Excellent</p>
                    <p className="text-xs text-gray-600">Ready in 15 days</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Smart Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and insights to transform your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-4 group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-bold text-primary-100 absolute -top-8 left-0">{item.step}</div>
                <div className="relative pt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Smart Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All your farm information at a glance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Weather & Market</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border">
                    <div className="flex items-center space-x-4 mb-4">
                      <Cloud className="h-10 w-10 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-600">Pune, Maharashtra</p>
                        <p className="text-3xl font-bold text-gray-900">28°C</p>
                        <p className="text-sm text-gray-500">Partly Cloudy</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Humidity</p>
                        <p className="font-semibold text-gray-900">65%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Wind</p>
                        <p className="font-semibold text-gray-900">12 km/h</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Rain</p>
                        <p className="font-semibold text-gray-900">20%</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border">
                    <p className="text-sm text-gray-600 mb-4">Today's Top Gain</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Maize', price: 1900, change: 4.4 },
                        { name: 'Cotton', price: 6500, change: 3.2 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">₹{item.price}</p>
                          </div>
                          <span className="text-green-600 font-semibold">+{item.change}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {cropsData.slice(0, 2).map((crop) => (
                  <Card key={crop.id} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <Leaf className="h-8 w-8 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{crop.name}</h4>
                          <p className="text-sm text-gray-500">Planted: {crop.plantedDate}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
                        {crop.health}
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex-1 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-medium text-sm hover:bg-primary-100 transition-colors">
                        Health Report
                      </button>
                      <button className="flex-1 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                        Crop Tips
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {quickActionsData.map((action, index) => {
                    const IconComponent = iconMap[action.icon] || Camera
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className={`p-2 rounded-lg bg-${
                          action.color === 'primary' ? 'primary' : action.color
                        }-100`}>
                          <IconComponent className={`h-5 w-5 text-${
                            action.color === 'primary' ? 'primary' : action.color
                          }-600`} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{action.title}</p>
                          <p className="text-xs text-gray-500">{action.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Farmers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of farmers already using KisanSarthi to increase yields and profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
