import React from 'react';
import { Package, Search, Filter, Plus, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { agroCatalogue } from '../data/dummyData';

const AgroCataloguePage = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Product Catalogue</h1>
          <p className="text-gray-500 font-medium">Manage your inventory and stock</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-amber-700 transition-all shadow-lg shadow-amber-100">
          <Plus className="h-5 w-5" />
          Add New Product
        </button>
      </div>

      {/* Stats/Filters Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search products, brands, categories..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium shadow-sm"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-100 px-6 py-4 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
          <Filter className="h-5 w-5" />
          Filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {agroCatalogue.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-amber-600 shadow-sm">
                {product.category}
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{product.brand}</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
                <span className="text-sm font-bold text-gray-500 ml-1">{product.rating}</span>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-2xl font-black text-gray-900">{product.price}</div>
                  <div className="text-xs font-bold text-gray-400">per {product.unit}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-black uppercase tracking-widest ${product.stock < 50 ? 'text-red-500' : 'text-emerald-500'}`}>
                    {product.stock} in stock
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-4 bg-gray-50 text-gray-900 font-black rounded-2xl hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                <ShoppingCart className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                Update Stock
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgroCataloguePage;
