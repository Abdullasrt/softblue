import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Smartphone, Banknote, Sparkles, Lock } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, totalAmount, cartItems, onOrderSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: '',
    paymentMethod: 'upi'
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const newOrderId = 'SB-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setIsCompleted(true);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-royal-navy border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit Encrypted Express Checkout</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">Delivery Address & Payment</h3>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Contact & Shipping Info */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">1. Shipping Details</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anjali Nair"
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone Number (WhatsApp Order Updates) *</label>
                    <input 
                      required
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Email Address *</label>
                  <input 
                    required
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Street Address / House No. / Landmark *</label>
                  <textarea 
                    required
                    rows="2"
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Apartment, Flat, Street address..."
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">City *</label>
                    <input 
                      required
                      type="text" 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Kochi / City"
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">State *</label>
                    <select 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-gold"
                    >
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Pincode *</label>
                    <input 
                      required
                      type="text" 
                      name="pincode" 
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="682037"
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-gold uppercase tracking-wider">2. Payment Method</h4>

                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'upi' ? 'bg-royal-navy border-gold text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="upi" 
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <Smartphone className="w-4 h-4 text-gold" />
                    <span className="text-xs font-medium">UPI / GPay / PhonePe</span>
                  </label>

                  <label className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod' ? 'bg-royal-navy border-gold text-white' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="cod" 
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="text-gold focus:ring-gold"
                    />
                    <Banknote className="w-4 h-4 text-gold" />
                    <span className="text-xs font-medium">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {/* Amount & CTA */}
              <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Total Payable Amount</span>
                  <span className="text-2xl font-serif font-bold text-gold">₹{totalAmount}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  Confirm & Place Order
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border-2 border-gold animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-gold uppercase tracking-widest font-semibold">Order Successfully Confirmed</span>
              <h3 className="text-3xl font-serif text-white font-light">
                Thank you, <span className="italic text-gold">{formData.name}</span>!
              </h3>
              <p className="text-xs text-slate-300">
                Your order ID is <strong className="text-white font-mono bg-royal-navy px-2 py-1 rounded border border-gold/30">{orderId}</strong>
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-gold/30 text-left text-xs text-slate-300 space-y-3 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Shipping Address:</span>
                <span className="text-white font-medium text-right">{formData.address}, {formData.city}, {formData.state}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Estimated Courier Dispatch:</span>
                <span className="text-gold font-medium">Tomorrow Morning from Munnar</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <span className="text-white font-semibold uppercase">{formData.paymentMethod}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-serif italic">
              "A tracking link and receipt have been dispatched to {formData.email} and WhatsApp."
            </p>

            <button 
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-gold text-royal-deep font-bold text-xs uppercase tracking-wider hover:bg-gold-glow transition-all"
            >
              Back to SoftBlue Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
