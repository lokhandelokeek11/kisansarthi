import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, CheckCircle, Phone, MessageSquare, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import { buyers } from '../data/dummyData';
import { motion } from 'framer-motion';

const BuyerCard = ({ buyer }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow relative overflow-hidden"
  >
    {buyer.highDemand && (
      <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
        High Demand
      </div>
    )}
    
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-xl">
          {buyer.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-gray-900">{buyer.name}</h3>
            {buyer.verified && <CheckCircle className="h-4 w-4 text-blue-500 fill-blue-50" />}
          </div>
          <p className="text-xs text-gray-500">{buyer.type}</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-5">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4 text-gray-400" />
        <span>{buyer.distance}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-teal-600 font-bold">
        <span>Offers: {buyer.priceOffered}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="font-medium text-gray-900">{buyer.rating}</span>
      </div>
      {buyer.recentlyActive && (
        <div className="flex items-center gap-2 text-sm text-emerald-600">
          <Clock className="h-4 w-4" />
          <span>Active now</span>
        </div>
      )}
    </div>

    <div className="flex gap-2">
      <button className="flex-1 bg-white border border-gray-200 hover:border-teal-200 hover:bg-teal-50 text-gray-700 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <Phone className="h-4 w-4" />
        Call
      </button>
      <button className="flex-1 bg-white border border-gray-200 hover:border-teal-200 hover:bg-teal-50 text-gray-700 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        <MessageSquare className="h-4 w-4" />
        Chat
      </button>
      <button className="flex-[1.5] bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-teal-100">
        <ShoppingCart className="h-4 w-4" />
        Sell Now
      </button>
    </div>
  </motion.div>
);

const FindBuyersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Find Best Buyers</h1>
          <p className="text-gray-500">Connect with bulk buyers, hotels, and retailers near you.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search by name or location..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter className="h-5 w-5 text-gray-400" />
            Filters
          </button>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-teal-100 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <TrendingUp className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <p className="text-teal-50 font-medium mb-1">High Demand Buyers</p>
            <h3 className="text-2xl font-bold">12 Active Now</h3>
            <p className="text-sm text-teal-100 mt-2 italic underline cursor-pointer">View List →</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1">Total Buyers Nearby</p>
            <h3 className="text-2xl font-bold text-gray-900">48</h3>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <MapPin className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1">Avg. Market Rate</p>
            <h3 className="text-2xl font-bold text-gray-900">₹42.5/kg</h3>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
            <Star className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Buyer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {buyers.map(buyer => (
          <BuyerCard key={buyer.id} buyer={buyer} />
        ))}
      </div>
    </div>
  );
};

export default FindBuyersPage;
