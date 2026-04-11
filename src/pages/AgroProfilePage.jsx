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
  Calendar,
  Warehouse,
  FileBadge
} from 'lucide-react';
import { motion } from 'framer-motion';

const FormSection = ({ title, icon: Icon, children }) => (
  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-10">
    <div className="p-8 border-b border-gray-50 bg-gray-50/30 flex items-center gap-4">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm text-amber-600">
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
      {Icon && <Icon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-amber-500 transition-colors" />}
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        className={`w-full ${Icon ? 'pl-14' : 'px-6'} pr-6 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-amber-500 font-bold transition-all ${readOnly ? 'opacity-70 cursor-not-allowed' : ''}`}
      />
    </div>
  </div>
);

const AgroProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-lg shadow-gray-100/50">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AgroBoss" alt="profile" className="w-32 h-32" />
              </div>
            </div>
            <button className="absolute bottom-2 right-2 p-3 bg-white border border-gray-100 shadow-xl rounded-full hover:scale-110 transition-transform">
              <Camera className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Vikram Deshmukh</h1>
              <CheckCircle className="h-7 w-7 text-blue-500 fill-blue-50" />
            </div>
            <p className="text-gray-500 font-bold flex items-center justify-center md:justify-start gap-2">
              <Warehouse className="h-4 w-4" />
              Agro Dealer • Registered Entity
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-amber-50 text-amber-600 px-5 py-2 rounded-full text-sm font-black border border-amber-100">Premium Dealer</span>
              <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-black border border-blue-100">Auth Distributor</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`px-10 py-5 rounded-2xl font-black transition-all text-lg ${isEditing ? 'bg-gray-100 text-gray-500' : 'bg-amber-600 text-white shadow-xl shadow-amber-100 hover:scale-105'}`}
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
        <FormSection title="Account Information" icon={User}>
          <InputGroup label="Full Name" placeholder="Vikram Deshmukh" value="Vikram Deshmukh" icon={User} />
          <InputGroup label="Mobile Number" placeholder="9876543210" value="9876543210" icon={Smartphone} />
          <InputGroup label="Email Address" placeholder="vikram@agrocorp.com" value="vikram@agrocorp.com" icon={Mail} />
          <InputGroup label="Date of Birth" placeholder="10/05/1982" value="10/05/1982" icon={Calendar} />
        </FormSection>

        <FormSection title="Company Details" icon={Warehouse}>
          <InputGroup label="Registered Company Name" placeholder="Deshmukh Agro Solutions" value="Deshmukh Agro Solutions" icon={Store} />
          <InputGroup label="Entity Type" placeholder="Private Limited" value="Private Limited" icon={Briefcase} />
          <InputGroup label="GST Number" placeholder="27XXXXX0000X1Z2" value="27XXXXX0000X1Z2" icon={FileBadge} />
          <InputGroup label="License No." placeholder="AGR/2024/0987" value="AGR/2024/0987" />
        </FormSection>

        <FormSection title="Warehouse & Logistics" icon={MapPin}>
          <InputGroup label="Primary Warehouse Address" placeholder="Gate No. 45, MIDC Area" value="Gate No. 45, MIDC Area" icon={MapPin} />
          <InputGroup label="City" placeholder="Pune" value="Pune" />
          <InputGroup label="Serving Districts" placeholder="Pune, Satara, Solapur" value="Pune, Satara, Solapur" />
          <InputGroup label="Logistics Partner" placeholder="Self Owned" value="Self Owned" />
        </FormSection>

        <FormSection title="Financial & Settlements" icon={CreditCard}>
          <InputGroup label="Business PAN" placeholder="XXXXX0000X" value="XXXXX0000X" icon={CreditCard} />
          <InputGroup label="Bank Name" placeholder="HDFC Bank" value="HDFC Bank" />
          <InputGroup label="Account Number" placeholder="**** **** 9012" value="XXXX XXXX 9012" />
          <InputGroup label="Branch" placeholder="KP Road Branch" value="KP Road Branch" />
        </FormSection>
      </div>

      <div className="flex justify-center">
        <p className="text-gray-400 font-medium flex items-center gap-2">
          Your data is encrypted and secure. Authorized access only. 🔒
        </p>
      </div>
    </div>
  );
};

export default AgroProfilePage;
