import React from 'react';
import { Users, Phone, MapPin, MoreVertical, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { agroDealers } from '../data/dummyData';

const AgroDealersPage = () => {
  return (
    <div className="space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dealers & Retailers</h1>
        <p className="text-gray-500 font-medium">Manage your distribution network</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {agroDealers.map((dealer, idx) => (
          <motion.div
            key={dealer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-6 group hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:bg-amber-100 transition-colors">
              <Users className="h-10 w-10" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{dealer.name}</h3>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  dealer.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {dealer.status}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-500 font-medium text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {dealer.contact}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {dealer.location}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  {dealer.rating} Rating
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 px-8 border-x border-gray-50 hidden lg:flex">
              <div className="text-2xl font-black text-gray-900">{dealer.ordersCount}</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Orders Fulfilled</div>
            </div>

            <div className="flex gap-3">
              <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 hover:text-gray-900 transition-all border border-transparent hover:border-gray-200">
                <Phone className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-amber-100 hover:scale-105 transition-all">
                View Profile
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="p-4 bg-white text-gray-400 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:text-gray-600 transition-all">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgroDealersPage;
