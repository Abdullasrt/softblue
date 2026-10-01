import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ChevronDown, Award, Mountain } from 'lucide-react';

export default function Hero({ onAcquireClick }) {
  const lineVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.25,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const poemLines = [
    "A forest wrapped in mist. Silence.",
    "Before the world wakes up...",
    "That leaf was already picked.",
    "That is SoftBlue."
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-midnight pt-20">
      {/* Background Imagery Layer with Luxury Gradient & Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=2000"
          alt="Munnar Mist Tea Estate"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-110 scale-105 transform animate-pulse duration-[10000ms]"
          style={{ animationDuration: '20s' }}
        />
        {/* Multi-layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-navy/70 to-brand-midnight/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-midnight/40 to-brand-midnight" />
        {/* Subtle decorative grid/line grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20 flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-navy/90 border border-brand-gold/30 backdrop-blur-md mb-8 text-brand-gold shadow-gold-glow"
        >
          <Mountain className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-brand-gold-muted">
            SINGLE-ORIGIN MUNNAR TEA · 1,600 M
          </span>
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
        </motion.div>

        {/* Poetic Narrative - Line by Line Animated Reveal */}
        <div className="space-y-2 sm:space-y-3 mb-10 max-w-3xl">
          {poemLines.map((line, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className={`font-serif leading-tight ${
                index === 3
                  ? 'text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-muted to-brand-gold tracking-wide pt-2'
                  : 'text-2xl sm:text-4xl md:text-5xl font-light text-brand-cream/90 italic'
              }`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm sm:text-base md:text-lg text-brand-gold-muted uppercase tracking-[0.3em] font-light mb-10 border-y border-brand-gold/20 py-2.5 px-8 inline-block backdrop-blur-sm"
        >
          Unveil Purity. Sky's the Limit.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection('harvest')}
            className="w-full sm:w-auto px-9 py-4 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300 border border-brand-gold-muted/40 cursor-pointer"
          >
            Acquire the Harvest
          </button>
          
          <button
            onClick={() => scrollToSection('world-teas')}
            className="w-full sm:w-auto px-8 py-4 rounded bg-brand-navy/60 hover:bg-brand-navy text-brand-sand border border-brand-gold/30 hover:border-brand-gold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>Explore World Teas</span>
          </button>
        </motion.div>

        {/* Estate Specs Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-brand-gold/15 text-center max-w-4xl w-full"
        >
          <div>
            <div className="text-xl sm:text-2xl font-serif text-brand-gold font-bold">1,600 M</div>
            <div className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest mt-1">Mist Elevation</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif text-brand-gold font-bold">Pre-Dawn</div>
            <div className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest mt-1">Selective Harvest</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif text-brand-gold font-bold">Zero</div>
            <div className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest mt-1">Additives & Dust</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif text-brand-gold font-bold">100%</div>
            <div className="text-[10px] sm:text-xs text-brand-muted uppercase tracking-widest mt-1">Single Estate Kerala</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('philosophy')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 2, duration: 1 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
          className="mt-12 text-brand-gold-muted hover:text-brand-gold flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Experience the Purity</span>
          <ChevronDown className="w-4 h-4 text-brand-gold group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
