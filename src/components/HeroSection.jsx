import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Sparkles, Compass, ShieldCheck, Sun, Feather, Wind, MessageSquare } from 'lucide-react';

export default function HeroSection({ onShopClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-24">
      
      {/* Visual Background - Snow-Capped Mountain Tea Plantation at Dawn with Subtle Zoom Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
          src="/munnar-snow-dawn.jpg" 
          alt="Snow capped mountain mist tea foliage in Munnar at dawn" 
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Layered Gradient Overlays for Deep Royal Blue luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-[#051126]/65 to-[#0b1b3d]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-[#051126]/90" />
      </div>

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Altitude & Origin Pill */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold/40 text-gold text-xs sm:text-sm tracking-widest uppercase mb-8 shadow-xl">
          <Mountain className="w-4 h-4 text-gold" />
          <span>Single-Origin Munnar Tea · 1,600 m Elevation</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping ml-1"></span>
        </motion.div>

        {/* Main Tagline */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-serif font-light tracking-tight text-white leading-tight mb-6">
          SoftBlue <span className="italic text-gold font-normal">Premium Tea</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-serif italic text-slate-200 tracking-wide mb-10 max-w-3xl mx-auto">
          "Unveil Purity. <span className="gold-gradient-text font-semibold not-italic">Sky's the Limit</span>"
        </motion.p>

        {/* REFACTORED HERO CARD - ULTRA LUXURY STORYTELLING DISPLAY */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.015, y: -4 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto mb-10 border border-gold/40 gold-border-glow text-center space-y-6 relative overflow-hidden group shadow-[0_20px_50px_rgba(5,17,38,0.8)] bg-gradient-to-b from-[#081d40]/90 via-[#061633]/90 to-[#051126]/95 backdrop-blur-xl"
        >
          {/* Ambient Glowing Orbs Inside Card */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/15 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/25 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Header Row inside Card */}
          <div className="flex items-center justify-between border-b border-gold/25 pb-4">
            <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span>The Dawn Harvest Ritual</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[11px] text-gold font-medium">
              <Sun className="w-3 h-3 text-gold" />
              <span>5:00 AM Pluck</span>
            </div>
          </div>

          {/* Poetic Narrative */}
          <div className="font-serif text-lg sm:text-2xl leading-relaxed text-slate-100 font-light space-y-2 py-2">
            <p className="text-slate-300 italic">A forest wrapped in mist. <span className="text-white font-normal not-italic">Silence.</span></p>
            <p className="text-slate-200 italic">Before the world wakes up...</p>
            <p className="text-gold font-medium text-xl sm:text-3xl pt-2 font-serif">
              That tender leaf was already picked.
            </p>
            <div className="pt-3">
              <p className="text-xl sm:text-3xl font-serif font-semibold tracking-wider gold-gradient-text uppercase">
                That is SoftBlue.
              </p>
            </div>
          </div>

          {/* Bottom Card Metric Pills */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gold/20 text-left">
            <div className="bg-[#051126]/70 p-2.5 sm:p-3 rounded-xl border border-gold/20 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-sans">Terroir</span>
              <span className="text-xs sm:text-sm font-serif text-gold font-semibold">1,600m Altitude</span>
            </div>
            <div className="bg-[#051126]/70 p-2.5 sm:p-3 rounded-xl border border-gold/20 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-sans">Harvest</span>
              <span className="text-xs sm:text-sm font-serif text-gold font-semibold">Predawn Plucked</span>
            </div>
            <div className="bg-[#051126]/70 p-2.5 sm:p-3 rounded-xl border border-gold/20 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-sans">Purity</span>
              <span className="text-xs sm:text-sm font-serif text-gold font-semibold">100% Single Origin</span>
            </div>
          </div>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From the high-altitude tea gardens of Munnar, Kerala, at approximately <strong className="text-white font-medium">1,600 meters above sea level</strong>, comes a truly single-origin premium tea — carefully selected from the early morning harvest. <span className="text-gold italic font-serif">No compromise on purity.</span>
        </motion.p>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onShopClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-royal-deep font-bold text-base uppercase tracking-widest shadow-2xl hover:shadow-gold/40 transition-all duration-300 group"
          >
            <span> Experience the Purity</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-slate-200 hover:text-gold border border-gold/30 hover:border-gold text-sm tracking-wider uppercase transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            <span>Contact Us</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-10 border-t border-white/10 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>100% Single Origin</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mountain className="w-4 h-4 text-gold" />
            <span>1,600m Munnar Peak</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Early Morning Pluck</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Zero Additives</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
