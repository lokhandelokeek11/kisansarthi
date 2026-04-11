import React, { useState } from 'react';
import { 
  User, 
  Store, 
  MapPin, 
  ShoppingBag, 
  CreditCard, 
  Camera, 
  Save, 
  CheckCircle,
  Briefcase,
  Smartphone,
  Mail,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

const FormSection = ({ title, icon: Icon, children }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-10">
    <div className="p-8 border-b border-gray-50 bg-gray-50/30 flex items-center gap-4">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm text-teal-600">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
    </div>
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {children}
      </div>
    </div>
  </div>
);

const InputGroup = ({ label, placeholder, type = "text", value, icon: Icon, readOnly = false }) => (
  <div className="space-y-3">
    <label className="text-[11px] font-black uppercase text-gray-400 tracking-widest pl-2">{label}</label>
    <div className="relative group">
      {Icon && <Icon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-teal-500 transition-colors" />}
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        className={`w-full ${Icon ? 'pl-14' : 'px-6'} pr-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 font-bold transition-all ${readOnly ? 'opacity-70 cursor-not-allowed' : ''}`}
      />
    </div>
  </div>
);

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg shadow-gray-100/50">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="profile" className="w-32 h-32" />
              </div>
            </div>
            <button className="absolute bottom-2 right-2 p-3 bg-white border border-gray-100 shadow-xl rounded-full hover:scale-110 transition-transform">
              <Camera className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-4xl font-black text-gray-900tracking-tight">Rajesh Kumar</h1>
              <CheckCircle className="h-7 w-7 text-blue-500 fill-blue-50" />
            </div>
            <p className="text-gray-500 font-bold flex items-center justify-center md:justify-start gap-2">
              <Briefcase className="h-4 w-4" />
              Street Vendor • 8 Years Experience
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-teal-50 text-teal-600 px-5 py-2 rounded-full text-sm font-black border border-teal-100">Top Trusted</span>
              <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-black border border-blue-100">Verified Seller</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`px-10 py-5 rounded-2xl font-black transition-all text-lg ${isEditing ? 'bg-gray-100 text-gray-500' : 'bg-teal-600 text-white shadow-xl shadow-teal-100 hover:scale-105'}`}
          >
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
          {isEditing && (
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 transition-all text-lg flex items-center gap-3">
              <Save className="h-6 w-6" />
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        <FormSection title="Personal Information" icon={User}>
          <InputGroup label="Full Name" placeholder="Rajesh Kumar" value="Rajesh Kumar" icon={User} />
          <InputGroup label="Mobile Number" placeholder="9876543210" value="9876543210" icon={Smartphone} />
          <InputGroup label="Email Address" placeholder="rajesh.agri@example.com" value="rajesh.agri@example.com" icon={Mail} />
          <InputGroup label="Date of Birth" placeholder="15/08/1985" value="15/08/1985" icon={Calendar} />
        </FormSection>

        <FormSection title="Business Details" icon={Store}>
          <InputGroup label="Shop/Business Name" placeholder="Rajesh Fresh Vegetables" value="Rajesh Fresh Vegetables" icon={Store} />
          <InputGroup label="Business Type" placeholder="Street Vendor / Wholesale" value="Street Vendor" icon={Briefcase} />
          <InputGroup label="Years of Experience" placeholder="8" value="8" />
          <InputGroup label="Registration Number (Optional)" placeholder="GST/FSSAI" value="NOT-AVAIL" />
        </FormSection>

        <FormSection title="Location Preference" icon={MapPin}>
          <InputGroup label="Main Selling Address" placeholder="Shop No. 12, Market Road" value="Shop No. 12, Market Road" icon={MapPin} />
          <InputGroup label="City" placeholder="Nagpur" value="Nagpur" />
          <InputGroup label="Pincode" placeholder="440001" value="440001" />
          <InputGroup label="State" placeholder="Maharashtra" value="Maharashtra" />
        </FormSection>

        <FormSection title="Products & Scale" icon={ShoppingBag}>
          <InputGroup label="Top Selling Products" placeholder="Tomato, Onion, Potato" value="Tomato, Onion, Potato" icon={ShoppingBag} />
          <InputGroup label="Daily Sales Quantity (kg)" placeholder="50-100" value="80" />
          <InputGroup label="Peak Season" placeholder="Winter (Nov-Feb)" value="Winter" />
          <InputGroup label="Waste Gen. (Daily)" placeholder="10kg" value="8kg" />
        </FormSection>

        <FormSection title="Payment & Settlements" icon={CreditCard}>
          <InputGroup label="UPI ID" placeholder="rajesh@upi" value="rajesh.kumar@ybl" icon={CreditCard} />
          <InputGroup label="Bank Name" placeholder="State Bank of India" value="State Bank of India" />
          <InputGroup label="Account Number" placeholder="**** **** 5678" value="XXXX XXXX 5678" />
          <InputGroup label="IFSC Code" placeholder="SBIN0001234" value="SBIN0001234" />
        </FormSection>
      </div>

      <div className="flex justify-center pb-20">
        <p className="text-gray-400 font-medium flex items-center gap-2">
          Your data is encrypted and secure with 256-bit SSL. 🔒
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
