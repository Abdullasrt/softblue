import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Quote } from 'lucide-react';

export default function PhilosophyIntro() {
  return (
    <section id="philosophy" className="py-24 bg-brand-cream text-brand-slate relative overflow-hidden">
      {/* Subtle Background Ornament */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-25">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-gold-muted/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Editorial Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[1px] w-12 bg-brand-gold"></div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">
            An Editorial Note on Extraordinary Teas
          </span>
          <div className="h-[1px] w-12 bg-brand-gold"></div>
        </motion.div>

        {/* Large Decorative Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 text-brand-gold/40"
        >
          <Quote className="w-12 h-12" />
        </motion.div>

        {/* Main Editorial Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-8 font-serif"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-brand-navy">
            Why does the world pay so much for a single cup of tea?
          </h2>

          <div className="text-lg sm:text-xl md:text-2xl text-brand-muted font-light leading-relaxed max-w-3xl mx-auto italic">
            "Tea is not just a beverage — some are history, some are secrets, some are a single perfect moment.
            Look at some of the world's rarest teas — it's not just taste that sets them apart. It's rarity, craftsmanship, origin, and purity."
          </div>
        </motion.div>

        {/* Bottom Decorative Crest */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-3" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted font-mono">
            SOFTBLUE ATELIER • KERALA 1,600M
          </span>
        </motion.div>
      </div>
    </section>
  );
}
