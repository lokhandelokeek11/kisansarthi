import React from 'react';
import { Store, Calendar, CheckCircle2, Clock, Truck, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { agroOrders } from '../data/dummyData';

const AgroOrdersPage = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Processing': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Shipped': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return CheckCircle2;
      case 'Processing': return Clock;
      case 'Shipped': return Truck;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Recent Orders</h1>
          <p className="text-gray-500 font-medium">Track your sales and shipments</p>
        </div>
        <div className="flex gap-4">
           {['All', 'Processing', 'Shipped', 'Delivered'].map(tab => (
             <button 
              key={tab}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                tab === 'All' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-50'
              }`}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Order ID</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Customer</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Date</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Items</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Amount</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Status</th>
                <th className="px-8 py-6 text-[11px] font-black uppercase text-gray-400 tracking-widest border-b border-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {agroOrders.map((order, idx) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <motion.tr 
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    <td className="px-8 py-6 font-black text-gray-900">{order.id}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-black group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-bold text-gray-700">{order.customer}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {order.date}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-500 font-medium max-w-[200px] truncate">{order.items}</td>
                    <td className="px-8 py-6 font-black text-gray-900">{order.amount}</td>
                    <td className="px-8 py-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] font-black uppercase tracking-widest ${getStatusColor(order.status)}`}>
                        <StatusIcon className="h-3.5 w-3.5" />
                        {order.status}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgroOrdersPage;
