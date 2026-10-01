import React from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_DATA } from '../data/mockData';
import { Check, X, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-24 bg-brand-sand text-brand-slate relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Purity Architecture</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-navy font-normal"
          >
            Not Ordinary Tea. <span className="italic font-light">Never.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm sm:text-base mt-4 font-light"
          >
            Most commercial teas are mass-processed dust collected from multiple lowland gardens. SoftBlue represents an uncompromising single-origin benchmark.
          </motion.p>
        </div>

        {/* Comparison Grid Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-cream rounded-2xl border border-brand-gold/20 shadow-luxury overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-brand-midnight text-brand-cream p-4 sm:p-6 border-b border-brand-gold/20 items-center">
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-gold-muted font-mono">
              Dimension / Criteria
            </div>
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-muted text-center flex items-center justify-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-400 hidden sm:inline" />
              <span>Mass Commercial Tea</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-gold text-center flex items-center justify-center gap-1.5 bg-brand-navy/80 py-2 px-3 rounded-lg border border-brand-gold/40">
              <ShieldCheck className="w-4 h-4 text-brand-gold hidden sm:inline" />
              <span>SoftBlue Single-Origin</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-brand-gold/10">
            {COMPARISON_DATA.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 p-4 sm:p-6 items-center transition-colors ${
                  item.highlight ? 'bg-brand-gold/5' : 'hover:bg-brand-sand/50'
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 pr-2">
                  <div className="text-xs sm:text-sm font-semibold text-brand-navy uppercase tracking-wider font-sans">
                    {item.feature}
                  </div>
                </div>

                {/* Commercial Tea */}
                <div className="col-span-4 sm:col-span-4 px-2 text-center">
                  <div className="flex flex-col items-center justify-center gap-1 text-xs text-brand-muted leading-relaxed">
                    <X className="w-4 h-4 text-rose-400 flex-shrink-0 mb-1" />
                    <span>{item.commercial}</span>
                  </div>
                </div>

                {/* SoftBlue */}
                <div className="col-span-4 sm:col-span-4 px-2 text-center bg-brand-navy/5 py-3 rounded-lg border border-brand-gold/30 shadow-sm">
                  <div className="flex flex-col items-center justify-center gap-1 text-xs sm:text-sm font-medium text-brand-navy leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mb-1 font-bold" />
                    <span className="font-semibold text-brand-navy">{item.softblue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Footer Summary */}
          <div className="bg-brand-sand p-6 text-center border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-brand-muted text-left">
              * Based on physical tea leaf size, elevation testing, and laboratory chemical analysis for polyphenol & L-theanine retention.
            </div>
            <a
              href="#harvest"
              className="px-6 py-2.5 rounded bg-brand-navy text-brand-gold text-xs uppercase tracking-widest font-semibold hover:bg-brand-midnight transition-colors border border-brand-gold/30 flex-shrink-0"
            >
              Taste The Difference
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
