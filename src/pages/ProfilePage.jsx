import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Plus, Trash2, CheckCircle2, ArrowLeft, ShieldCheck, Mail, Phone, Home, Building2, Sparkles, Wallet, ShoppingBag, Edit2, X } from 'lucide-react';

export default function ProfilePage({ savedAddresses, setSavedAddresses, walletBalance }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: 'Home',
    name: '',
    phone: '',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: '',
    isDefault: false
  });

  const [toastMessage, setToastMessage] = useState(null);

  const handleAddAddress = (e) => {
    e.preventDefault();

    const created = {
      id: Date.now(),
      label: newAddress.label || 'Home',
      name: newAddress.name,
      phone: newAddress.phone,
      address: newAddress.address,
      city: newAddress.city,
      state: newAddress.state || 'Kerala',
      pincode: newAddress.pincode,
      isDefault: newAddress.isDefault || savedAddresses.length === 0
    };

    let updatedList = [...savedAddresses];
    if (created.isDefault) {
      updatedList = updatedList.map(addr => ({ ...addr, isDefault: false }));
    }
    updatedList.push(created);

    setSavedAddresses(updatedList);
    setToastMessage('New delivery address saved successfully!');
    setAddressModalOpen(false);
    setNewAddress({ label: 'Home', name: '', phone: '', address: '', city: '', state: 'Kerala', pincode: '', isDefault: false });

    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSetDefault = (id) => {
    setSavedAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    setToastMessage('Default shipping address updated!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDeleteAddress = (id) => {
    setSavedAddresses(prev => prev.filter(addr => addr.id !== id));
    setToastMessage('Address removed.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/20 pb-6">
          <button 
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 text-xs text-gold hover:text-white uppercase tracking-widest font-semibold transition-colors px-4 py-2 rounded-full glass-panel border border-gold/30 hover:border-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </button>

          <div className="text-center sm:text-right">
            <div className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Royal Connoisseur Profile</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide">
              Account & <span className="gold-gradient-text italic font-normal">Saved Addresses</span>
            </h1>
          </div>
        </div>

        {toastMessage && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl text-center font-medium animate-fade-in">
            ✓ {toastMessage}
          </div>
        )}

        {/* PROFILE OVERVIEW CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/40 gold-border-glow shadow-2xl bg-gradient-to-r from-[#081f44] via-[#061836] to-[#081f44] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gold/20 text-gold flex items-center justify-center border-2 border-gold shadow-xl shrink-0">
              <User className="w-8 h-8 text-gold" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-serif text-white font-medium">Dr. Anand V. Nair</h2>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 font-light">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-gold" /> anand.nair@softblue.in</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-gold" /> +91 95676 71551</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/wallet')}
              className="px-4 py-2.5 rounded-full glass-panel border border-gold/40 text-gold hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow"
            >
              <Wallet className="w-4 h-4 text-gold" />
              <span>Wallet: ₹{walletBalance}</span>
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="px-4 py-2.5 rounded-full bg-gold text-royal-deep font-bold text-xs uppercase tracking-wider hover:bg-gold-glow flex items-center gap-2 shadow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Reserve Bag</span>
            </button>
          </div>
        </motion.div>

        {/* SAVED ADDRESSES SECTION */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/20 pb-4">
            <div>
              <h2 className="text-2xl font-serif text-white font-medium flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gold" />
                <span>Saved Delivery Addresses</span>
              </h2>
              <p className="text-xs text-slate-400">Manage your shipping destinations for instant 1-click checkout.</p>
            </div>

            <button
              onClick={() => setAddressModalOpen(true)}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Address</span>
            </button>
          </div>

          {/* ADDRESS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedAddresses.map((addr) => (
              <motion.div
                key={addr.id}
                whileHover={{ y: -4 }}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 relative space-y-4 flex flex-col justify-between shadow-xl ${
                  addr.isDefault 
                    ? 'border-gold gold-border-glow bg-royal-navy/90' 
                    : 'border-white/10 bg-white/5 hover:border-gold/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gold/15 text-gold flex items-center justify-center font-bold text-xs">
                        {addr.label === 'Home' ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                      </div>
                      <span className="font-semibold text-white text-sm">{addr.label} Address</span>
                    </div>

                    {addr.isDefault && (
                      <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3" /> Default
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-xs text-slate-300">
                    <p className="text-white font-medium text-sm">{addr.name}</p>
                    <p className="text-slate-300 leading-relaxed">{addr.address}</p>
                    <p className="text-slate-300">{addr.city}, {addr.state} - <strong className="text-gold">{addr.pincode}</strong></p>
                    <p className="text-slate-400 pt-1 font-mono">Phone: {addr.phone}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  {!addr.isDefault ? (
                    <button 
                      onClick={() => handleSetDefault(addr.id)}
                      className="text-gold hover:text-white font-semibold transition-colors"
                    >
                      Set as Default Address
                    </button>
                  ) : (
                    <span className="text-slate-500 text-[11px] italic">Primary Shipping Destination</span>
                  )}

                  <button 
                    onClick={() => handleDeleteAddress(addr.id)}
                    className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                    title="Remove address"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ADD ADDRESS MODAL */}
      {addressModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="glass-panel max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl relative bg-[#071735]">
            <button 
              onClick={() => setAddressModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-royal-navy border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
                  <MapPin className="w-4 h-4" />
                  <span>Delivery Destination</span>
                </div>
                <h3 className="text-2xl font-serif text-white font-medium">Add New Delivery Address</h3>
              </div>

              <form onSubmit={handleAddAddress} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Address Label</label>
                    <select 
                      value={newAddress.label}
                      onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                    >
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Vacation Villa">Vacation Villa</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Recipient Name *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Anand Nair"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Mobile Number *</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 95676 71551"
                    value={newAddress.phone}
                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Street Address & Flat / House No. *</label>
                  <textarea 
                    required
                    rows="2"
                    placeholder="e.g. Flat 402, KC Residency, Kakkanad Road"
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">City *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Kochi"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">State *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Kerala"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Pincode *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="682037"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox"
                    id="isDefaultCheck"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    className="w-4 h-4 rounded text-gold focus:ring-gold bg-royal-navy border-white/20"
                  />
                  <label htmlFor="isDefaultCheck" className="text-xs text-slate-300 font-medium">
                    Set as default delivery destination
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  Save Delivery Address
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
