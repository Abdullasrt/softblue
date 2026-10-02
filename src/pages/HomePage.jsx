import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Award, ShieldCheck, Leaf, Eye, 
  ChevronLeft, ChevronRight, Star, Zap, ShoppingBag, Crown 
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { bundleOffers } from '../data/teas';

export default function HomePage({ onAddToCart }) {
  const navigate = useNavigate();

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(3); // Start on 4-pack (best value)
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollToShop = () => {
    navigate('/shop');
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bundleOffers.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bundleOffers.length) % bundleOffers.length);
  };

  const currentBundle = bundleOffers[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 250 : -250,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 }
    })
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection onShopClick={scrollToShop} />

      {/* 2. RARE TEAS SEPARATE PAGE TEASER */}
      <section className="py-16 bg-[#071735] relative overflow-hidden text-slate-100 border-y border-gold/15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Editorial Collection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide leading-tight">
            Discover the World's Most <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Rare & Coveted Teas</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            From China's ₹15 Crore Da-Hong Pao mother trees to 24k Yellow Gold Tea Buds and Full Moon Harvests—explore our dedicated editorial gallery.
          </p>

          <div className="pt-2 flex justify-center">
            <button 
              onClick={() => navigate('/rare-teas')}
              className="px-8 py-4 rounded-full bg-gold-gradient text-royal-deep text-xs font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              <Award className="w-4 h-4" />
              <span>Explore World's Rarest Teas </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. AUTO-PLAYING LUXURY PRODUCT SHOWCASE CAROUSEL */}
      <section className="py-20 bg-[#051126] relative overflow-hidden text-slate-100 border-b border-gold/15">
        
        {/* Glow Orbs */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Interactive Reserve Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide">
              SoftBlue <span className="gold-gradient-text italic font-normal">Products Showcase</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-light">
              100% Single-Origin Munnar High-Altitude Reserve Packages
            </p>
          </div>

          {/* SLIDING CAROUSEL CONTAINER */}
          <div 
            className="max-w-4xl mx-auto relative px-2 sm:px-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Arrow Navigation */}
            <button 
              onClick={handlePrevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-panel border border-gold/40 text-gold hover:text-white hover:bg-gold/20 flex items-center justify-center transition-all shadow-2xl hover:scale-110"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={handleNextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-panel border border-gold/40 text-gold hover:text-white hover:bg-gold/20 flex items-center justify-center transition-all shadow-2xl hover:scale-110"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Active Slide Card */}
            <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center overflow-hidden py-2">
              <AnimatePresence custom={direction} mode="wait">
                {currentBundle && (
                  <motion.div
                    key={currentBundle.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full glass-panel p-6 sm:p-10 rounded-3xl border border-gold/40 shadow-2xl gold-border-glow bg-gradient-to-b from-[#082046]/95 via-[#061836]/95 to-[#051126]/95 backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden"
                  >
                    
                    {/* Left Column: Pouch Image Canvas with Hover Scale */}
                    <div className="md:col-span-6 flex flex-col items-center justify-center relative">
                      <div className="w-full h-64 sm:h-72 rounded-2xl bg-royal-navy/80 border border-white/10 p-6 flex items-center justify-center relative group overflow-hidden shadow-inner">
                        
                        {/* Weight Badge */}
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-bold">
                          {currentBundle.weight}
                        </span>

                        {currentBundle.popular && (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold-gradient text-royal-deep text-[10px] font-bold uppercase tracking-wider shadow inline-flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            <span>Best Seller</span>
                          </span>
                        )}

                        <motion.img 
                          whileHover={{ scale: 1.08, rotate: 2 }}
                          transition={{ duration: 0.4 }}
                          src="/pouch-front.jpg" 
                          alt={currentBundle.title} 
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                        />
                      </div>
                    </div>

                    {/* Right Column: Details, Price & CTA */}
                    <div className="md:col-span-6 space-y-5 text-left">
                      
                      <div className="space-y-2">
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-white font-bold ml-1">4.9 / 5</span>
                          <span className="text-slate-400 font-light">(1,480+ Verified Reviews)</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                          {currentBundle.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                          {currentBundle.description}
                        </p>
                      </div>

                      {/* Pricing & Savings */}
                      <div className="p-4 rounded-2xl bg-royal-navy/70 border border-gold/20 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-400 block font-light">Package Price</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-serif font-bold text-gold">₹{currentBundle.price}</span>
                            {currentBundle.savings > 0 && (
                              <span className="text-xs text-slate-400 line-through">₹{currentBundle.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        {currentBundle.savings > 0 && (
                          <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                            Save ₹{currentBundle.savings}
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="pt-1">
                        <button 
                          onClick={() => navigate('/shop')}
                          className="w-full py-3.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Product Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center pt-6 gap-2">
              {bundleOffers.map((bundle, idx) => (
                <button
                  key={bundle.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 bg-gold shadow-md' 
                      : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY SOFTBLUE SEPARATE PAGE TEASER */}
      <section className="py-16 bg-[#071735] relative overflow-hidden text-slate-100 border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>100% Single-Origin Munnar Purity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide leading-tight">
            Why <span className="gold-gradient-text italic font-normal">SoftBlue Tea</span>?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Discover our 6 Pillars of High-Altitude Excellence, predawn harvesting rituals, transparent comparison matrix, and verified connoisseur reviews.
          </p>

          <div className="pt-2 flex justify-center">
            <button 
              onClick={() => navigate('/why-softblue')}
              className="px-8 py-4 rounded-full bg-gold-gradient text-royal-deep text-xs font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              <Leaf className="w-4 h-4" />
              <span>Explore Why SoftBlue </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
