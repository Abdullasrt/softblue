import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, CheckCircle2, ArrowLeft, Truck, Compass, MapPin, CreditCard, QrCode, Banknote, Wallet, User, Phone, Mail, Lock, Plus } from 'lucide-react';

export default function CartPage({ 
  cartItems, 
  onUpdateQty, 
  onRemoveItem, 
  walletBalance, 
  setWalletBalance, 
  savedAddresses = [], 
  onOrderSuccess 
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Step state: 'bag' | 'checkout'
  const [activeTab, setActiveTab] = useState('bag');

  // Checkout form state
  const [useWallet, setUseWallet] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiApp, setUpiApp] = useState('GPay');
  const [upiId, setUpiId] = useState('anand.nair@okicici');
  const [cardDetails, setCardDetails] = useState({
    number: '4532 8912 7640 1092',
    name: 'Dr. Anand V. Nair',
    expiry: '08/28',
    cvv: '849'
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: 'anand.nair@softblue.in',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: ''
  });

  // Auto-fill from default saved address
  useEffect(() => {
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

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((acc, item) => acc + (item.savings * item.quantity), 0);
  
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
              <span className="text-slate-400">Delivery Destination</span>
              <span className="text-white font-medium truncate max-w-[200px]">{formData.city}, {formData.state}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-slate-400">Payment Method</span>
              <span className="text-gold font-bold">
                {finalPayable === 0 
                  ? 'SoftBlue Wallet Cash (Full Coverage)' 
                  : paymentMethod === 'UPI' 
                    ? `Instant UPI (${upiApp})` 
                    : paymentMethod === 'CARD' 
                      ? `Card (${cardDetails.number.slice(-4)})` 
                      : 'Cash On Delivery'}
              </span>
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
              Return to SoftBlue Store
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/20 pb-6">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs text-gold hover:text-white uppercase tracking-widest font-semibold transition-colors px-4 py-2 rounded-full glass-panel border border-gold/30 hover:border-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </button>

          <div className="text-center sm:text-right">
            <h1 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide">
              SoftBlue <span className="gold-gradient-text italic font-normal">Cart & Checkout</span>
            </h1>
            <p className="text-xs text-slate-300 font-light">
              Single-Origin Munnar Tea · 1,600m Elevation · Express Direct Dispatch
            </p>
          </div>
        </div>

        {/* STEPPER TABS (Bag Review ➔ Checkout Details) */}
        {cartItems.length > 0 && (
          <div className="flex justify-center">
            <div className="glass-panel p-1.5 rounded-full border border-gold/30 inline-flex items-center gap-2 bg-royal-navy/80">
              <button
                onClick={() => setActiveTab('bag')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'bag'
                    ? 'bg-gold text-royal-deep shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>1. Reserve Bag ({cartItems.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('checkout')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'checkout'
                    ? 'bg-gold text-royal-deep shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>2. Checkout & Shipping</span>
              </button>
            </div>
          </div>
        )}

        {/* Free Express Shipping Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl border border-gold/30 gold-border-glow shadow-xl bg-gradient-to-r from-[#07193b] via-[#0b244d] to-[#07193b]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 border border-gold/40">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Free Express Courier Shipping Included Across India</span>
                <span className="text-slate-300 text-xs font-light">Direct dispatch from our Kochi & Munnar hub.</span>
              </div>
            </div>

            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider text-xs">
              UNLOCKED ✓
            </span>
          </div>
        </motion.div>

        {/* EMPTY CART VIEW */}
        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel max-w-2xl mx-auto p-10 sm:p-16 rounded-3xl border border-gold/30 text-center space-y-6 shadow-2xl bg-royal-navy/70"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto border border-gold/30 shadow-inner">
              <ShoppingBag className="w-10 h-10 text-gold" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">Your reserve shopping bag is empty</h2>
              <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                Discover our 1,600m high-altitude single-origin Munnar tea bundles and select your preferred package.
              </p>
            </div>

            <div>
              <button
                onClick={() => navigate('/shop')}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Tea Bundles & Shop</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* FILLED CART & CHECKOUT TABBED VIEWS */
          <AnimatePresence mode="wait">
            {activeTab === 'bag' ? (
              /* TAB 1: CART BAG REVIEW */
              <motion.div 
                key="bag-tab"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Cart Items List */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                    <h2 className="text-xl font-serif text-white font-medium flex items-center gap-2">
                      <span>Selected Reserve Packages</span>
                      <span className="text-xs bg-gold/20 text-gold px-2.5 py-0.5 rounded-full font-sans font-bold">
                        {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                      </span>
                    </h2>

                    <button 
                      onClick={() => navigate('/')}
                      className="text-xs text-gold hover:text-white transition-colors flex items-center gap-1 font-medium"
                    >
                      <span>+ Add More Packages</span>
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="glass-panel p-5 sm:p-6 rounded-2xl border border-gold/30 hover:border-gold/60 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center justify-between shadow-xl bg-gradient-to-r from-[#071735]/90 to-[#091e45]/90 group"
                    >
                      {/* Image & Title */}
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-20 h-24 bg-royal-navy rounded-xl p-2 flex items-center justify-center shrink-0 border border-gold/30 shadow-inner group-hover:scale-105 transition-transform">
                          <img src="/pouch-front.jpg" alt={item.title} className="max-h-full max-w-full object-contain filter drop-shadow" />
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] text-gold uppercase tracking-wider font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 inline-block">
                            100% Single Origin
                          </span>
                          <h3 className="text-lg font-serif text-white font-medium">{item.title}</h3>
                          <p className="text-xs text-slate-400">Net Wt: {item.weight}</p>
                          <p className="text-xs text-gold font-serif font-semibold">₹{item.price} per bundle</p>
                        </div>
                      </div>

                      {/* Controls & Price */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                        {/* Quantity Selector */}
                        <div className="flex items-center bg-royal-navy border border-gold/30 rounded-xl text-xs overflow-hidden shadow">
                          <button 
                            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                            className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors font-bold"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3.5 py-1.5 text-white font-bold font-serif">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors font-bold"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Total Price */}
                        <div className="text-right">
                          <span className="text-xl font-serif font-bold text-white block">
                            ₹{item.price * item.quantity}
                          </span>
                          {item.savings > 0 && (
                            <span className="text-[10px] text-emerald-400 font-medium block">
                              Save ₹{item.savings * item.quantity}
                            </span>
                          )}
                        </div>

                        {/* Trash Button */}
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </motion.div>
                  ))}
                </div>

                {/* Right Column: Order Summary Card */}
                <div className="lg:col-span-5">
                  <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/40 gold-border-glow shadow-2xl space-y-6 sticky top-28 bg-gradient-to-b from-[#081f44] to-[#051126]">
                    
                    <div className="border-b border-gold/20 pb-4">
                      <h3 className="text-2xl font-serif text-white font-medium">Order Summary</h3>
                      <p className="text-xs text-slate-400">Direct garden dispatch from Munnar logistics center.</p>
                    </div>

                    {/* Calculation breakdown */}
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex justify-between">
                        <span>Items Subtotal</span>
                        <span className="text-white font-serif font-medium">₹{subtotal}</span>
                      </div>

                      {totalSavings > 0 && (
                        <div className="flex justify-between text-emerald-400 font-medium">
                          <span>Bundle Savings</span>
                          <span className="font-serif">-₹{totalSavings}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span>Express Courier Shipping</span>
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">FREE</span>
                      </div>

                      <div className="pt-4 border-t border-gold/20 flex justify-between items-baseline">
                        <div>
                          <span className="text-base font-serif text-white font-medium block">Total Amount</span>
                          <span className="text-[10px] text-slate-400 font-light">Includes all GST & delivery</span>
                        </div>
                        <span className="text-3xl font-serif font-bold text-gold gold-gradient-text">
                          ₹{subtotal}
                        </span>
                      </div>
                    </div>

                    {/* Switch to Checkout Step CTA */}
                    <button 
                      onClick={() => setActiveTab('checkout')}
                      className="w-full py-4.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl flex items-center justify-center gap-3 border border-amber-300/40"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Security badges */}
                    <div className="pt-2 space-y-2 text-xs text-slate-400 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                        <span>256-Bit SSL Encrypted Payment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span>100% Authentic Single Origin Munnar Guarantee</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ) : (
              /* TAB 2: INLINE CHECKOUT FORM INSIDE CART */
              <motion.form 
                key="checkout-tab"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handlePlaceOrder}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Shipping & Payment */}
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
                        <span>Profile Addresses</span>
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

                  {/* STEP 2: WALLET CASH DISCOUNTS */}
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

                    {finalPayable === 0 ? (
                      <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                        <div>
                          <span className="font-bold text-sm block">100% Covered by SoftBlue Wallet Cash</span>
                          <span className="text-slate-300">Your total payable amount is ₹0. No external payment method is required.</span>
                        </div>
                      </div>
                    ) : (
                      <>
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

                        {/* SUB-SECTION FOR SELECTED PAYMENT METHOD */}
                        {paymentMethod === 'UPI' && (
                          <div className="p-4 rounded-2xl border border-gold/30 bg-royal-deep/60 space-y-4 animate-fade-in">
                            <span className="text-xs text-gold uppercase tracking-wider font-semibold block">Select Preferred UPI App</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                                <button
                                  key={app}
                                  type="button"
                                  onClick={() => setUpiApp(app)}
                                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                                    upiApp === app 
                                      ? 'bg-gold text-royal-deep border-gold shadow' 
                                      : 'bg-white/5 border-white/15 text-slate-300 hover:border-gold/40'
                                  }`}
                                >
                                  {app}
                                </button>
                              ))}
                            </div>

                            <div>
                              <label className="block text-xs text-slate-300 mb-1 font-medium">Virtual Payment Address (VPA / UPI ID)</label>
                              <div className="relative">
                                <input 
                                  required
                                  type="text"
                                  placeholder="e.g. mobile@upi or username@okicici"
                                  value={upiId}
                                  onChange={(e) => setUpiId(e.target.value)}
                                  className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold font-mono"
                                />
                                <span className="absolute right-3 top-2.5 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                  ✓ Verified
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'CARD' && (
                          <div className="p-4 rounded-2xl border border-gold/30 bg-royal-deep/60 space-y-4 animate-fade-in">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                              <span className="text-xs text-gold uppercase tracking-wider font-semibold">Card Details</span>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <Lock className="w-3 h-3 text-gold" /> 256-Bit SSL Encrypted
                              </span>
                            </div>

                            <div>
                              <label className="block text-xs text-slate-300 mb-1 font-medium">Card Number</label>
                              <input 
                                required
                                type="text"
                                maxLength="19"
                                placeholder="4532 8912 7640 1092"
                                value={cardDetails.number}
                                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                                className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold font-mono tracking-widest"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs text-slate-300 mb-1 font-medium">Expiry Date</label>
                                <input 
                                  required
                                  type="text"
                                  maxLength="5"
                                  placeholder="MM/YY"
                                  value={cardDetails.expiry}
                                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                                  className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold font-mono"
                                />
                              </div>

                              <div>
                                <label className="block text-xs text-slate-300 mb-1 font-medium">CVV / CVC</label>
                                <input 
                                  required
                                  type="password"
                                  maxLength="4"
                                  placeholder="•••"
                                  value={cardDetails.cvv}
                                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                  className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold font-mono"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs text-slate-300 mb-1 font-medium">Cardholder Name</label>
                              <input 
                                required
                                type="text"
                                placeholder="Name as printed on card"
                                value={cardDetails.name}
                                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                                className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                              />
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'COD' && (
                          <div className="p-4 rounded-2xl border border-gold/30 bg-royal-deep/60 space-y-2 text-xs text-slate-300 animate-fade-in">
                            <div className="flex items-center gap-2 text-gold font-semibold">
                              <Banknote className="w-4 h-4 text-gold" />
                              <span>Cash on Delivery Terms</span>
                            </div>
                            <p className="leading-relaxed">
                              You can pay in cash or via UPI QR code when our courier partner delivers your Munnar tea package to your door.
                            </p>
                            <span className="text-[10px] text-emerald-400 font-bold block pt-1">
                              ✓ Verified Express Courier Service
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column: Order Summary & Submit Button */}
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
                      className="w-full py-4.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl flex items-center justify-center gap-2 border border-amber-300/40"
                    >
                      <span>Place Order & Reserve Dispatch (₹{finalPayable})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button 
                      type="button"
                      onClick={() => setActiveTab('bag')}
                      className="w-full text-center text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      ← Back to Bag Items
                    </button>

                  </div>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        )}

      </div>
    </div>
  );
}
