import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, CheckCircle2, Lock, Truck, Wallet, CreditCard, QrCode, Banknote, ArrowRight, Sparkles, Building, MapPin, Phone, User, Mail, Plus } from 'lucide-react';

export default function CheckoutPage({ cartItems, walletBalance, setWalletBalance, savedAddresses = [], onOrderSuccess }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Default auto-fill from default address if available
    const defaultAddr = savedAddresses.find(a => a.isDefault) || savedAddresses[0];
    if (defaultAddr) {
      setFormData({
        fullName: defaultAddr.name,
        phone: defaultAddr.phone,
        email: 'anand.nair@softblue.in',
        address: defaultAddr.address,
        city: defaultAddr.city,
        state: defaultAddr.state,
        pincode: defaultAddr.pincode
      });
    }
  }, [savedAddresses]);

  const [useWallet, setUseWallet] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: ''
  });

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const walletDeduction = useWallet ? Math.min(walletBalance, subtotal) : 0;
  const finalPayable = Math.max(0, subtotal - walletDeduction);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (useWallet && walletDeduction > 0) {
      setWalletBalance(prev => Math.max(0, prev - walletDeduction));
    }

    const generatedId = `SB-MUNNAR-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(generatedId);
    setOrderSubmitted(true);
    onOrderSuccess();
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-[85vh] py-16 bg-[#051126] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel max-w-xl w-full p-8 sm:p-12 rounded-3xl border border-gold/40 shadow-2xl text-center space-y-6 bg-gradient-to-b from-[#081f44] to-[#051126]"
        >
          <div className="w-20 h-20 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold shadow-lg animate-pulse">
            <CheckCircle2 className="w-10 h-10 text-gold" />
          </div>

          <div className="space-y-2">
            <span className="text-xs text-gold uppercase tracking-widest font-bold block">Order Confirmed ✓</span>
            <h1 className="text-3xl sm:text-4xl font-serif text-white font-medium">Thank You For Your Order!</h1>
            <p className="text-xs text-slate-300 font-light">
              Your single-origin Munnar tea packages have been reserved for garden dispatch.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-gold/30 text-left space-y-3 bg-royal-navy/80 text-xs">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-slate-400">Order Reference</span>
              <span className="text-gold font-bold font-mono text-sm">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-slate-400">Recipient Name</span>
              <span className="text-white font-medium">{formData.fullName || 'Connoisseur'}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-slate-400">Delivery Address</span>
              <span className="text-white font-medium truncate max-w-[200px]">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Delivery</span>
              <span className="text-emerald-400 font-bold">2 - 3 Business Days</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              Return to SoftBlue Storefront
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/20 pb-6">
          <button 
            onClick={() => navigate('/cart')}
            className="inline-flex items-center gap-2 text-xs text-gold hover:text-white uppercase tracking-widest font-semibold transition-colors px-4 py-2 rounded-full glass-panel border border-gold/30 hover:border-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </button>

          <div className="text-center sm:text-right">
            <div className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5 text-gold" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide">
              Luxury <span className="gold-gradient-text italic font-normal">Checkout</span>
            </h1>
          </div>
        </div>

        {/* CHECKOUT 2-COLUMN GRID */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Shipping & Payment Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* STEP 1: SHIPPING ADDRESS */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 space-y-5 bg-royal-navy/80 shadow-xl">
              <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h2 className="text-xl font-serif text-white font-medium">1. Shipping Address & Contact</h2>
                </div>

                <button 
                  type="button" 
                  onClick={() => navigate('/profile')}
                  className="text-xs text-gold hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Manage Profile Addresses</span>
                </button>
              </div>

              {/* Saved Address Selector */}
              {savedAddresses.length > 0 && (
                <div className="space-y-2 pb-3 border-b border-white/10">
                  <span className="text-xs text-gold uppercase tracking-wider font-semibold block">Select Saved Address (1-Click Fill)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {savedAddresses.map((addr) => (
                      <button
                        key={addr.id}
                        type="button"
                        onClick={() => {
                          setFormData({
                            fullName: addr.name,
                            phone: addr.phone,
                            email: formData.email || 'anand.nair@softblue.in',
                            address: addr.address,
                            city: addr.city,
                            state: addr.state,
                            pincode: addr.pincode
                          });
                        }}
                        className="p-3 rounded-xl border border-white/15 bg-white/5 hover:border-gold text-left space-y-0.5 transition-all text-xs group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white group-hover:text-gold transition-colors">{addr.label} Address</span>
                          {addr.isDefault && <span className="text-[10px] text-emerald-400 font-bold">Default</span>}
                        </div>
                        <p className="text-slate-300 truncate">{addr.name} - {addr.city}</p>
                        <p className="text-slate-400 text-[10px] font-mono">{addr.pincode}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Dr. Anand V. Nair"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-royal-deep border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-royal-deep border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Email Address (For Instant Receipt) *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input 
                      required
                      type="email" 
                      placeholder="anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-royal-deep border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Street Address & House No. *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Flat 402, KC Residency, Kakkanad Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-royal-deep border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">City / Town *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Kochi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-royal-deep border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Pincode *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. 682037"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-royal-deep border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            {/* STEP 2: SOFTBLUE WALLET CASH TOGGLE */}
            {walletBalance > 0 && (
              <div className="glass-panel p-6 rounded-3xl border border-gold/40 shadow-xl bg-gradient-to-r from-[#0c2654] to-[#07193b] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 border border-gold/40">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm block">Use SoftBlue Wallet Cash</span>
                    <span className="text-xs text-gold">Available Balance: ₹{walletBalance}</span>
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={useWallet} 
                    onChange={(e) => setUseWallet(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                </label>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 space-y-5 bg-royal-navy/80 shadow-xl">
              <div className="flex items-center gap-2 border-b border-gold/20 pb-3">
                <CreditCard className="w-5 h-5 text-gold" />
                <h2 className="text-xl font-serif text-white font-medium">2. Select Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                    paymentMethod === 'UPI' 
                      ? 'bg-gold/15 border-gold text-white gold-border-glow' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
                  }`}
                >
                  <QrCode className="w-6 h-6 text-gold" />
                  <div>
                    <span className="text-sm font-bold block">Instant UPI / QR</span>
                    <span className="text-[10px] text-slate-400">GPay, PhonePe, Paytm</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CARD')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                    paymentMethod === 'CARD' 
                      ? 'bg-gold/15 border-gold text-white gold-border-glow' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-gold" />
                  <div>
                    <span className="text-sm font-bold block">Cards / NetBanking</span>
                    <span className="text-[10px] text-slate-400">Visa, Mastercard, RuPay</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                    paymentMethod === 'COD' 
                      ? 'bg-gold/15 border-gold text-white gold-border-glow' 
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
                  }`}
                >
                  <Banknote className="w-6 h-6 text-gold" />
                  <div>
                    <span className="text-sm font-bold block">Cash On Delivery</span>
                    <span className="text-[10px] text-slate-400">Pay on home delivery</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Order Summary & Submit Button */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/40 gold-border-glow shadow-2xl space-y-6 sticky top-28 bg-gradient-to-b from-[#081f44] to-[#051126]">
              
              <div className="border-b border-gold/20 pb-4">
                <h3 className="text-2xl font-serif text-white font-medium">Order Summary</h3>
                <p className="text-xs text-slate-400">{cartItems.length} Reserved Packages</p>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <div>
                      <span className="text-white font-medium block truncate max-w-[180px]">{item.title}</span>
                      <span className="text-slate-400">Qty: {item.quantity} × ₹{item.price}</span>
                    </div>
                    <span className="text-gold font-serif font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-gold/20">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal}</span>
                </div>

                {useWallet && walletDeduction > 0 && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>SoftBlue Wallet Cash Applied</span>
                    <span>-₹{walletDeduction}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Courier Shipping</span>
                  <span className="text-emerald-400 font-bold uppercase">FREE</span>
                </div>

                <div className="pt-4 border-t border-gold/20 flex justify-between items-baseline">
                  <div>
                    <span className="text-base font-serif text-white font-medium block">Total Payable</span>
                    <span className="text-[10px] text-slate-400">All Taxes Included</span>
                  </div>
                  <span className="text-3xl font-serif font-bold text-gold gold-gradient-text">
                    ₹{finalPayable}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit"
                className="w-full py-4.5 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl hover:shadow-gold/40 flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>Place Order & Reserve Dispatch (₹{finalPayable})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 text-center font-light">
                🔒 256-Bit SSL Encrypted & Verified SoftBlue Garden Guarantee
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
