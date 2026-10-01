import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bundleOffers } from '../data/teas';
import { ShoppingBag, Check, ShieldCheck, Sparkles, Star, Eye, Zap, RotateCcw, Truck } from 'lucide-react';

export default function ProductShop({ onAddToCart }) {
  const [selectedBundle, setSelectedBundle] = useState(bundleOffers[3]); // Default to 4 Packs (Best Value)
  const [pouchView, setPouchView] = useState('front'); // 'front' | 'back'
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(selectedBundle);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <section id="shop" className="py-24 bg-[#051126] relative overflow-hidden">
      
      {/* Glow aura */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Direct-From-Garden Reserve</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-wide">
            SoftBlue <span className="gold-gradient-text italic font-normal">Premium Tea</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Single-Origin Munnar Tea · 1,600 m Elevation · Net Wt. 250g per pouch
          </p>
        </motion.div>

        {/* E-Commerce Showcase Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-4 sm:p-10 border border-gold/30 gold-border-glow shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Product Pouch Image & Interactive Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Pouch Canvas Card */}
              <div className="relative bg-gradient-to-b from-royal-navy to-[#071630] rounded-2xl p-4 sm:p-8 border border-gold/30 shadow-2xl flex flex-col items-center justify-between min-h-[420px] group overflow-hidden">
                
                {/* Top Responsive Control Bar (Fixes mobile overlap) */}
                <div className="w-full flex flex-wrap items-center justify-between gap-2.5 z-10 border-b border-white/10 pb-3">
                  <div className="bg-gold text-royal-deep text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    100% Pure Munnar
                  </div>

                  <div className="flex items-center gap-1 bg-royal-deep/90 backdrop-blur-md p-1 rounded-lg border border-gold/20 text-xs">
                    <button 
                      onClick={() => setPouchView('front')}
                      className={`px-2.5 py-1 rounded font-medium transition-all ${
                        pouchView === 'front' ? 'bg-gold text-royal-deep shadow' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Front Pouch
                    </button>
                    <button 
                      onClick={() => setPouchView('back')}
                      className={`px-2.5 py-1 rounded font-medium transition-all ${
                        pouchView === 'back' ? 'bg-gold text-royal-deep shadow' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Back Info
                    </button>
                  </div>
                </div>

                {/* Main Pouch Image with Framer Motion AnimatePresence */}
                <div className="relative w-full max-w-xs sm:max-w-sm h-[300px] sm:h-[360px] flex items-center justify-center py-2">
                  <AnimatePresence mode="wait">
                    {pouchView === 'front' ? (
                      <motion.img 
                        key="front"
                        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        src="/pouch-front.jpg" 
                        alt="SoftBlue Premium Tea Pouch Front View 250g" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                      />
                    ) : (
                      <motion.img 
                        key="back"
                        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        src="/pouch-back.jpg" 
                        alt="SoftBlue Premium Tea Pouch Back View - Nutritional Facts & Brewing Instructions" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Sub-caption */}
                <p className="text-[11px] sm:text-xs text-slate-400 font-serif italic text-center pt-2">
                  {pouchView === 'front' ? 'Single Origin Munnar Tea · 250g Zip-Lock Vacuum Pack' : 'Authentic Nutrition Facts, FSSAI Lic No. 21324188000725'}
                </p>
              </div>

              {/* Responsive Quality Promises Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-xs text-slate-300">
                <div className="glass-panel p-3 rounded-xl border border-white/10">
                  <span className="block font-semibold text-gold">100% Natural</span>
                  <span className="text-[10px] text-slate-400">No Additives</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-white/10">
                  <span className="block font-semibold text-gold">Freshly Ground</span>
                  <span className="text-[10px] text-slate-400">Rich Natural Oil</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-white/10">
                  <span className="block font-semibold text-gold">1,600m Munnar</span>
                  <span className="text-[10px] text-slate-400">Single Estate</span>
                </div>
              </div>

            </div>

            {/* Right Column: Pricing & Bundle Selector */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Header & Rating */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">4.9 / 5.0 (428 Verified Munnar Connoisseur Reviews)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide font-medium">
                  SoftBlue Premium Tea (250g)
                </h3>
                <p className="text-sm text-slate-300 font-light mt-1">
                  Base Price : <strong className="text-gold text-lg">₹299</strong> per 250g pack.
                </p>
              </div>

              {/* Special Bundle Offers Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-gold" />
                    Select Special Bundle Offer
                  </span>
                  <span className="text-[11px] text-slate-400 italic">Limited Time Savings</span>
                </div>

                <div className="space-y-3">
                  {bundleOffers.map((bundle) => {
                    const isSelected = selectedBundle.id === bundle.id;
                    return (
                      <motion.div
                        key={bundle.id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setSelectedBundle(bundle)}
                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-wrap items-center justify-between gap-3 relative ${
                          isSelected 
                            ? 'bg-royal-navy border-gold gold-border-glow' 
                            : 'bg-white/5 border-white/10 hover:border-gold/40'
                        }`}
                      >
                        {/* Popular Badge */}
                        {bundle.popular && (
                          <span className="absolute -top-3 right-4 bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                            Best Value · Save ₹297
                          </span>
                        )}

                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? 'border-gold bg-gold text-royal-deep' : 'border-slate-500'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-white text-xs sm:text-base flex flex-wrap items-center gap-1.5">
                              <span>{bundle.title}</span>
                              {bundle.savings > 0 && (
                                <span className="text-[10px] bg-gold/20 text-gold font-bold px-2 py-0.5 rounded">
                                  {bundle.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{bundle.description}</p>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="text-right shrink-0">
                          <div className="text-base sm:text-lg font-serif font-bold text-gold">
                            ₹{bundle.price}
                          </div>
                          {bundle.originalPrice > bundle.price && (
                            <div className="text-[11px] text-slate-500 line-through">
                              ₹{bundle.originalPrice}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Add to Cart CTA */}
              <div className="pt-2 space-y-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs sm:text-sm uppercase tracking-widest hover:shadow-gold/40 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Reserve Bundle — Add to Bag (₹{selectedBundle.price})</span>
                </motion.button>

                {/* Added Toast Notification */}
                {addedToast && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl text-center font-medium"
                  >
                    ✓ Added "{selectedBundle.title}" to your reserve cart!
                  </motion.div>
                )}
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-400 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <span>Free Courier Shipping Across India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
