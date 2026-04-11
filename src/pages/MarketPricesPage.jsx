import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Bell, 
  BarChart2, 
  MapPin, 
  ChevronRight,
  ChevronDown,
  Info
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { marketTrends, commodities } from '../data/dummyData';
import { motion } from 'framer-motion';

const MarketPricesPage = () => {
  const [selectedMandi, setSelectedMandi] = useState('Azadpur Mandi, Delhi');
  const [alertForm, setAlertForm] = useState({ commodity: '', price: '' });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
            <BarChart2 className="h-8 w-8 text-teal-600" />
            Market Price Analysis
          </h1>
          <p className="text-gray-500">Real-time daily mandi prices and distribution trends.</p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 p-2 rounded-2xl shadow-sm">
          <MapPin className="h-5 w-5 text-gray-400 ml-2" />
          <select 
            className="bg-transparent border-none focus:ring-0 font-bold text-gray-700 pr-8 py-2 appearance-none cursor-pointer"
            value={selectedMandi}
            onChange={(e) => setSelectedMandi(e.target.value)}
          >
            <option>Azadpur Mandi, Delhi</option>
            <option>Vashi Mandi, Mumbai</option>
            <option>Kalamana Mandi, Nagpur</option>
          </select>
          <ChevronDown className="h-4 w-4 text-gray-400 absolute right-6 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Commodity List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Live Commodity Prices</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Updated 5 mins ago
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] text-gray-400 uppercase tracking-widest bg-white">
                    <th className="px-6 py-4 font-black">Commodity</th>
                    <th className="px-6 py-4 font-black">Todays Price</th>
                    <th className="px-6 py-4 font-black">Market Trend</th>
                    <th className="px-6 py-4 font-black text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {commodities.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center font-bold text-teal-700">
                            {item.name.charAt(0)}
                          </div>
                          <span className="font-bold text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-black text-gray-900">₹{item.price}<span className="text-gray-400 font-medium text-xs ml-1">/ quintal</span></td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-1.5 font-bold ${item.status === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                          {item.status === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          {item.status === 'up' ? '+' : ''}{item.change}%
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-all text-gray-400">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Price Trend (7 Days)</h3>
                <p className="text-sm text-gray-500">Average historical prices for Tomato</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-teal-600 text-white shadow-lg shadow-teal-100">7D</button>
                <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500 hover:bg-gray-200">1M</button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketTrends}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12}}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#0d9488" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Insights Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Info className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Market Insights</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray-400 text-sm">Top Gainer</span>
                <div className="text-right">
                  <div className="font-bold">Green Chili</div>
                  <div className="text-emerald-400 text-xs font-bold">+12.3% ↑</div>
                </div>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-gray-400 text-sm">Most Traded</span>
                <div className="text-right">
                  <div className="font-bold">Onion</div>
                  <div className="text-gray-400 text-xs font-bold">4.2k Quintals</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mt-4">
                <p className="text-xs leading-relaxed text-gray-400 italic">
                  "Prices are expected to rise for tomatoes next week due to limited supply from southern regions."
                </p>
              </div>
            </div>
          </div>

          {/* Price Alert */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-50 rounded-2xl">
                <Bell className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Set Price Alert</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Commodity</label>
                <input 
                  type="text" 
                  placeholder="e.g. Tomato"
                  className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                  value={alertForm.commodity}
                  onChange={(e) => setAlertForm({...alertForm, commodity: e.target.value})}
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Target Price (₹)</label>
                <input 
                  type="number" 
                  placeholder="35"
                  className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                  value={alertForm.price}
                  onChange={(e) => setAlertForm({...alertForm, price: e.target.value})}
                />
              </div>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-gray-200 mt-4">
                Set Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPricesPage;
