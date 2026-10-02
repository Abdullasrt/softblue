import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { bundleOffers } from '../data/teas';
import { 
  ShoppingBag, Check, ShieldCheck, Sparkles, Star, Eye, Zap, 
  Truck, ArrowRight, Award, Lock, CheckCircle2, RotateCcw,
  Flame, Clock, Coffee, Heart, Filter, Search, SlidersHorizontal,
  RefreshCw, X, Info, Crown
} from 'lucide-react';

export default function ShopPage({ onAddToCart, wishlistItems = [], onToggleWishlist }) {
  const navigate = useNavigate();
  const [addedToast, setAddedToast] = useState(null);
  const [previewBundle, setPreviewBundle] = useState(null); // Modal state for 360 preview
  const [previewTab, setPreviewTab] = useState('front'); // 'front' | 'back'

  // Filtration States
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (bundle, e) => {
    e?.stopPropagation();
    onAddToCart(bundle);
    setAddedToast(bundle.title);
    setTimeout(() => setAddedToast(null), 3000);
  };

  const handleBuyNow = (bundle, e) => {
    e?.stopPropagation();
    onAddToCart(bundle);
    navigate('/cart');
  };

  // Filter and Sort Logic
  const filteredBundles = bundleOffers.filter(bundle => {
    if (filterCategory === 'single' && bundle.packs !== 1) return false;
    if (filterCategory === 'multi' && (bundle.packs < 2 || bundle.packs > 3)) return false;
    if (filterCategory === 'vault' && bundle.packs !== 4) return false;
    if (filterCategory === 'savings' && bundle.savings <= 0) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const titleMatch = bundle.title.toLowerCase().includes(q);
      const weightMatch = bundle.weight.toLowerCase().includes(q);
      const priceMatch = bundle.price.toString().includes(q);
      if (!titleMatch && !weightMatch && !priceMatch) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'savings') return b.savings - a.savings;
    if (a.popular) return -1;
    if (b.popular) return 1;
    return 0;
  });

  const resetFilters = () => {
    setFilterCategory('all');
    setSortBy('popular');
    setSearchQuery('');
  };

  const brewingSteps = [
    {
      num: "01",
      title: "Measure the Leaf",
      detail: "Add 2-3 teaspoons of SoftBlue tea to your vessel.",
      icon: <Sparkles className="w-5 h-5 text-gold" />
    },
    {
      num: "02",
      title: "Infuse with Water",
      detail: "Pour 250ml of freshly boiled 95°C spring water.",
      icon: <Flame className="w-5 h-5 text-gold" />
    },
    {
      num: "03",
      title: "Steep & Awaken",
      detail: "Steep for 4-5 minutes to unlock amber malt notes.",
      icon: <Clock className="w-5 h-5 text-gold" />
    },
    {
      num: "04",
      title: "Savor the Purity",
      detail: "Enjoy pure black or with fresh warm milk.",
      icon: <Coffee className="w-5 h-5 text-gold" />
    }
  ];

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100 font-sans">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* SUCCESS TOAST NOTIFICATION */}
      <AnimatePresence>
        {addedToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2.5 border border-amber-300"
          >
            <CheckCircle2 className="w-4 h-4 text-royal-deep" />
            <span>{addedToast} Added to Cart!</span>
            <button 
              onClick={() => navigate('/cart')}
              className="ml-2 px-3 py-1 bg-royal-deep text-gold rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              View Cart →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* PAGE HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-4 border-b border-gold/20 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Direct Estate Reserve · Single-Origin Munnar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            SoftBlue Tea <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Shop & Reserve Bundles</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Explore our single-origin 1,600m Munnar reserve packages. Nitrogen-sealed in 250g vacuum pouches for unmatched freshness and aroma.
          </p>
        </motion.div>

        {/* INTERACTIVE FILTRATION & SORT BAR */}
        <div className="glass-panel p-4 rounded-2xl border border-gold/30 shadow-xl space-y-4 bg-[#081e42]/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs text-gold font-semibold uppercase tracking-wider hidden sm:inline-flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              {[
                { id: 'all', label: 'All Packs' },
                { id: 'single', label: 'Single Pouch (250g)' },
                { id: 'multi', label: 'Multi-Packs (500g-750g)' },
                { id: 'vault', label: '1 KG Vault' },
                { id: 'savings', label: 'Best Savings' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filterCategory === tab.id
                      ? 'bg-gold text-royal-deep font-bold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input & Sort Selector */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Search Box */}
              <div className="relative flex-1 md:w-52">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-royal-navy/90 border border-gold/25 rounded-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-gold"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="relative shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-royal-navy/90 border border-gold/25 text-gold rounded-full px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="popular">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="savings">Savings: Highest</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* FULL PRODUCT GRID DISPLAY */}
        {filteredBundles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBundles.map((bundle) => {
              const isWishlisted = wishlistItems?.some(i => i.id === bundle.id);

              return (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`glass-panel p-5 rounded-3xl border flex flex-col justify-between relative overflow-hidden group shadow-2xl ${
                    bundle.popular 
                      ? 'border-gold gold-border-glow bg-gradient-to-b from-[#0a234e]/95 via-[#081b3c]/95 to-[#051126]/95' 
                      : 'border-gold/25 hover:border-gold/60 bg-gradient-to-b from-[#081e42]/90 to-[#051126]/90'
                  }`}
                >
                  {/* Top Badges & Wishlist Toggle */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {bundle.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gold-gradient text-royal-deep text-[10px] font-bold uppercase tracking-wider shadow inline-flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          <span>Most Popular</span>
                        </span>
                      )}
                      {bundle.badge && !bundle.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                          {bundle.badge}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist && onToggleWishlist(bundle);
                      }}
                      title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
                      className={`p-2 rounded-full border transition-all ${
                        isWishlisted 
                          ? 'bg-rose-500/20 border-rose-500/60 text-rose-400' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-gold hover:bg-gold/10'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Pouch Image Container with Quick 360 Preview Trigger */}
                  <div className="w-full h-56 rounded-2xl bg-royal-navy/80 border border-white/10 p-3 flex flex-col items-center justify-center relative overflow-hidden mb-4 group-hover:border-gold/30 transition-all">
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-[10px] font-bold">
                      {bundle.weight}
                    </span>

                    <img 
                      src="/pouch-front.jpg" 
                      alt={bundle.title} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Quick Preview Hover Overlay */}
                    <button
                      onClick={() => {
                        setPreviewBundle(bundle);
                        setPreviewTab('front');
                      }}
                      className="absolute inset-x-4 bottom-3 py-1.5 rounded-xl bg-royal-deep/90 border border-gold/40 text-gold text-[11px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-md"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>360° Quick Preview</span>
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-1 text-amber-400 text-[11px]">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-white font-bold ml-1">4.9</span>
                      <span className="text-slate-400 font-light">({bundle.packs * 350}+ sold)</span>
                    </div>

                    <h3 className="font-serif text-white font-medium text-lg leading-snug">
                      {bundle.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {bundle.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-2xl font-serif font-bold text-gold">
                        ₹{bundle.price}
                      </span>
                      {bundle.savings > 0 && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{bundle.originalPrice}
                        </span>
                      )}
                      {bundle.savings > 0 && (
                        <span className="text-[10px] text-emerald-400 font-semibold ml-auto">
                          Save ₹{bundle.savings}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-gold/15">
                    <button
                      onClick={(e) => handleBuyNow(bundle, e)}
                      className="w-full py-2.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5 fill-royal-deep" />
                      <span>Buy Now · ₹{bundle.price}</span>
                    </button>

                    <button
                      onClick={(e) => handleAddToCart(bundle, e)}
                      className="w-full py-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 font-semibold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 space-y-3 bg-royal-navy/40 rounded-3xl border border-white/10 max-w-xl mx-auto">
            <p className="text-sm text-slate-300">No reserve packages match your search filter.</p>
            <button
              onClick={resetFilters}
              className="px-5 py-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold text-xs font-semibold border border-gold/30 inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* 360° QUICK PREVIEW MODAL */}
        <AnimatePresence>
          {previewBundle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-panel max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl relative bg-[#071735]"
              >
                <button 
                  onClick={() => setPreviewBundle(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-royal-navy border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Image Canvas & View Switcher */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="bg-royal-navy rounded-2xl p-6 border border-gold/30 flex items-center justify-center h-64 sm:h-72 relative">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={previewTab}
                          initial={{ opacity: 0, rotateY: -90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          exit={{ opacity: 0, rotateY: 90 }}
                          transition={{ duration: 0.4 }}
                          src={previewTab === 'front' ? '/pouch-front.jpg' : '/pouch-back.jpg'} 
                          alt={previewBundle.title} 
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                        />
                      </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setPreviewTab('front')}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                          previewTab === 'front' ? 'bg-gold text-royal-deep font-bold shadow' : 'bg-white/5 text-slate-300 border border-white/10'
                        }`}
                      >
                        Front View (250g)
                      </button>
                      <button
                        onClick={() => setPreviewTab('back')}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                          previewTab === 'back' ? 'bg-gold text-royal-deep shadow' : 'bg-white/5 text-slate-300 border border-white/10'
                        }`}
                      >
                        Back Info & FSSAI
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Specifications & CTA */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] font-semibold uppercase tracking-widest border border-gold/30">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span>1,600m Munnar Reserve</span>
                      </div>
                      <h3 className="text-2xl font-serif text-white font-medium">
                        {previewBundle.title}
                      </h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {previewBundle.description}
                      </p>
                    </div>

                    <div className="bg-royal-navy/60 p-3 rounded-xl border border-white/10 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-slate-400">Total Weight:</span>
                        <span className="text-gold font-bold">{previewBundle.weight}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-slate-400">Pouches Included:</span>
                        <span className="text-white">{previewBundle.packs} × 250g Pouches</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">FSSAI Licence:</span>
                        <span className="text-slate-300">21324188000725</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-3 pt-2">
                      <span className="text-3xl font-serif font-bold text-gold">₹{previewBundle.price}</span>
                      {previewBundle.savings > 0 && (
                        <span className="text-sm text-slate-400 line-through">₹{previewBundle.originalPrice}</span>
                      )}
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => {
                          onAddToCart(previewBundle);
                          setPreviewBundle(null);
                          navigate('/cart');
                        }}
                        className="w-full py-3 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
                      >
                        <Zap className="w-4 h-4 fill-royal-deep" />
                        <span>Buy Now & Checkout</span>
                      </button>

                      <button
                        onClick={() => {
                          onAddToCart(previewBundle);
                          setPreviewBundle(null);
                          setAddedToast(previewBundle.title);
                          setTimeout(() => setAddedToast(null), 3000);
                        }}
                        className="w-full py-2.5 rounded-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* HOW TO BREW SOFTBLUE TEA SECTION */}
        <div className="py-12 space-y-10 border-t border-gold/20">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs text-gold uppercase tracking-widest font-semibold block">The Daily Steep Ritual</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
              How to Brew <span className="gold-gradient-text italic font-normal">SoftBlue Tea</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Unlock the rich aroma, malt notes, and mountain character of 1,600m Munnar single-origin tea.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brewingSteps.map((step, index) => (
              <div 
                key={index}
                className="glass-panel p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 relative group bg-royal-navy/70 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif font-bold text-gold/40 group-hover:text-gold transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-royal-navy border border-gold/30 flex items-center justify-center shadow">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-serif text-white font-medium mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{step.detail}</p>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM GUARANTEE BANNER */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold/30 text-center space-y-4">
          <Award className="w-10 h-10 text-gold mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
            100% Single-Origin Munnar Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Every pouch is direct-harvested from Munnar's 1,600m high-altitude tea gardens in Kerala. Zero commercial blending, zero synthetic flavors.
          </p>
        </div>

      </div>
    </div>
  );
}
