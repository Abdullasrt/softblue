import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, ArrowLeft, Truck, RefreshCw } from 'lucide-react';

export default function CartPage({ cartItems, onUpdateQty, onRemoveItem, onProceedToCheckout, onContinueShopping }) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((acc, item) => acc + (item.savings * item.quantity), 0);
  const finalTotal = subtotal;

  return (
    <section id="cart" className="py-24 bg-[#051126] relative overflow-hidden text-slate-100 border-t border-gold/20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Your Personal Shopping Bag</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-wide">
            SoftBlue <span className="gold-gradient-text italic font-normal">Reserve Cart</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Review your selected single-origin Munnar tea bundles before proceeding to secure checkout.
          </p>
        </div>

        {/* Free Express Shipping Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl border border-gold/30 gold-border-glow shadow-xl bg-gradient-to-r from-[#07193b] via-[#0b244d] to-[#07193b]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 border border-gold/40">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white block">Free Express Courier Shipping Across India</span>
                <span className="text-slate-300 text-xs font-light">Direct dispatch from our Kochi & Munnar logistics hub.</span>
              </div>
            </div>

            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider text-xs">
              UNLOCKED ✓
            </span>
          </div>
        </motion.div>

        {/* CART MAIN CONTENT (2-Column Layout or Empty State) */}
        {cartItems.length === 0 ? (
          /* EMPTY CART BANNER */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel max-w-2xl mx-auto p-10 sm:p-16 rounded-3xl border border-gold/30 text-center space-y-6 shadow-2xl bg-royal-navy/70"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto border border-gold/30 shadow-inner">
              <ShoppingBag className="w-10 h-10 text-gold" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">Your reserve bag is currently empty</h3>
              <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                Explore our 1,600m high-altitude single-origin Munnar tea bundles and select your preferred package.
              </p>
            </div>

            <div>
              <button
                onClick={onContinueShopping}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-gold/40 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Explore Tea Bundles & Shop</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* FILLED CART 2-COLUMN GRID */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                <h3 className="text-xl font-serif text-white font-medium flex items-center gap-2">
                  <span>Selected Bundles</span>
                  <span className="text-xs bg-gold/20 text-gold px-2.5 py-0.5 rounded-full font-sans font-bold">
                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                  </span>
                </h3>

                <button 
                  onClick={onContinueShopping}
                  className="text-xs text-gold hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Add More Packs</span>
                </button>
              </div>

              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="glass-panel p-5 rounded-2xl border border-gold/30 hover:border-gold/60 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center justify-between shadow-xl bg-gradient-to-r from-[#071735]/90 to-[#091e45]/90 group"
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
                      <h4 className="text-base font-serif text-white font-medium">{item.title}</h4>
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
                      <span className="px-3 py-1.5 text-white font-bold font-serif">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors font-bold"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Total Price for item */}
                    <div className="text-right">
                      <span className="text-lg font-serif font-bold text-white block">
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

            {/* Right Column: Order Summary & Checkout Card */}
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
                      <span>Bundle Offers Savings</span>
                      <span className="font-serif">-₹{totalSavings}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Express Courier Shipping</span>
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">FREE</span>
                  </div>

                  <div className="pt-4 border-t border-gold/20 flex justify-between items-baseline">
                    <div>
                      <span className="text-base font-serif text-white font-medium block">Total Payable</span>
                      <span className="text-[10px] text-slate-400 font-light">Includes all applicable GST & delivery</span>
                    </div>
                    <span className="text-3xl font-serif font-bold text-gold gold-gradient-text">
                      ₹{finalTotal}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button 
                  onClick={() => onProceedToCheckout(finalTotal)}
                  className="w-full py-4.5 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl hover:shadow-gold/40 flex items-center justify-center gap-3 border border-amber-300/40"
                >
                  <span>Proceed to Luxury Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Security badges */}
                <div className="pt-2 space-y-2 text-xs text-slate-400 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span>256-Bit SSL Encrypted Encrypted Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>100% Authentic Single Origin Munnar Guarantee</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
