import React from 'react';
import { 
  Recycle, 
  Sprout, 
  Truck, 
  TrendingUp, 
  MapPin, 
  Star, 
  Plus, 
  Leaf,
  Droplets,
  Calendar,
  Layers,
  Phone
} from 'lucide-react';
import { wasteCollectors } from '../data/dummyData';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
    <div className={`p-4 rounded-2xl ${color}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
      <h3 className="text-2xl font-black text-gray-900">{value}</h3>
    </div>
  </div>
);

const WasteConnectPage = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl shadow-emerald-200/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full -ml-10 -mb-10 blur-2xl" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Recycle className="h-4 w-4" />
              Sustainability Core
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1]">
              Turn Your Waste into <span className="text-emerald-200 underline decoration-emerald-200/30">Stable Income</span> ♻️
            </h1>
            <p className="text-emerald-50 text-xl font-medium opacity-90 leading-relaxed mb-8">
              Don't throw it away. Connect with compost makers, NGOs, and organic farms to sell your organic waste.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-white text-emerald-700 font-black px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                <Plus className="h-6 w-6" />
                Post Waste Now
              </button>
              <button className="bg-emerald-700/30 backdrop-blur-md text-white border border-emerald-400/30 font-bold px-10 py-5 rounded-2xl hover:bg-emerald-700/50 transition-all">
                How it works?
              </button>
            </div>
          </div>
          
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="hidden lg:block relative"
          >
            <div className="w-80 h-80 bg-white/20 backdrop-blur-xl rounded-[3rem] border border-white/30 flex items-center justify-center p-8 shadow-2xl">
              <Sprout className="w-48 h-48 text-white drop-shadow-2xl" />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-amber-400 text-gray-900 p-4 rounded-2xl shadow-xl font-black text-sm rotate-12">
              ₹1,200 Earned
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Waste Posted Today" 
          value="450 kg" 
          icon={Layers} 
          color="bg-emerald-50 text-emerald-600" 
        />
        <StatCard 
          label="Total Reused" 
          value="82%" 
          icon={Recycle} 
          color="bg-teal-50 text-teal-600" 
        />
        <StatCard 
          label="Earnings Today" 
          value="₹3,450" 
          icon={TrendingUp} 
          color="bg-amber-50 text-amber-600" 
        />
        <StatCard 
          label="Collectors Nearby" 
          value="14" 
          icon={Truck} 
          color="bg-blue-50 text-blue-600" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">Post New Waste</h3>
                <p className="text-gray-500 font-medium">Specify the leftovers or spoiled items.</p>
              </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-2">Waste Type</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 font-bold transition-all">
                  <option>Spoiled Fruits</option>
                  <option>Vegetable Peels</option>
                  <option>Mixed Organic</option>
                  <option>Expired Bulk Stock</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-2">Quantity (Approx kg)</label>
                <input type="number" placeholder="e.g. 25" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-emerald-500 font-bold transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-2">Preferred Pickup</label>
                <div className="relative">
                  <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input type="text" placeholder="Select Time" className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-5 focus:ring-2 focus:ring-emerald-500 font-bold transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest pl-2">Moisture Content</label>
                <div className="flex gap-4">
                  {['Dry', 'Medium', 'Wet'].map(type => (
                    <button key={type} type="button" className={`flex-1 py-4 rounded-2xl border-2 transition-all font-bold ${type === 'Medium' ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500'}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-3xl shadow-xl shadow-emerald-100 transition-all text-xl mt-4">
                  Confirm Pickup Request
                </button>
              </div>
            </form>
          </div>

          <div className="bg-emerald-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Droplets className="w-40 h-40" />
            </div>
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl font-black mb-4">Did you know?</h3>
              <p className="text-emerald-200 text-lg opacity-80 leading-relaxed mb-6">
                Most vegetable sellers waste <span className="text-white font-black underline">10-15kg</span> of organic matter daily. By selling it to compost makers, you can cover your transport costs!
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 px-4 py-2 rounded-xl border border-emerald-500/30">
                  <span className="text-emerald-400 font-black">40% Efficiency gained</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Collectors */}
        <div className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl font-extrabold text-gray-900">Active Collectors</h3>
            <span className="text-sm font-bold text-emerald-600">See All</span>
          </div>
          
          <div className="space-y-4">
            {wasteCollectors.map(collector => (
              <div key={collector.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center p-3 group-hover:bg-emerald-50 transition-colors">
                      <Truck className={`w-full h-full ${collector.verified ? 'text-emerald-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{collector.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{collector.type} • {collector.specialty}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-700">{collector.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-gray-700">{collector.rating}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-bold py-3 rounded-2xl transition-all border border-transparent hover:border-emerald-100 flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Details
                  </button>
                  <button className="flex-[1.5] bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-emerald-50">
                    Request Pickup
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-[2rem] p-8 text-white shadow-xl shadow-amber-100">
            <h4 className="text-xl font-black mb-2">Weekend Special</h4>
            <p className="text-amber-50 font-medium opacity-90 text-sm mb-4">Collectors are offering 1.5x rates for bulk organic waste this Sunday!</p>
            <button className="w-full bg-white text-orange-600 font-black py-4 rounded-2xl hover:scale-[1.02] transition-transform">
              Remind Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteConnectPage;
