import React from 'react';
import { motion } from 'framer-motion';
import { comparisonPoints } from '../data/teas';
import { CheckCircle2, XCircle, Sparkles, Shield, Award, Droplets, Sun, Leaf, Check, X } from 'lucide-react';

export default function ProductComparison() {
  return (
    <section id="infographic" className="py-24 bg-[#071735] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Purity Infographic & Quality Metrics</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-wide">
            Not regular tea. <span className="gold-gradient-text italic font-normal">Never.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Ordinary tea can be produced on a mass scale, with varying origins, grades, and synthetic processing methods. <br className="hidden sm:inline" />
            <strong className="text-white font-medium">SoftBlue is created with a vastly different philosophy.</strong>
          </p>
        </motion.div>

        {/* 6 Feature Grid Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">Single-Origin Munnar Tea</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              100% harvested from the pristine estate slopes of Munnar, Kerala. Zero mixing or regional dilution.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">1,600 m Elevation</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Grown at high altitudes where cool misty temperatures slow leaf growth, intensifying natural oils.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">Early Morning Pluck</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Selected before the intense midday sun warms the leaves, preserving delicate essential notes.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">Rich Natural Aroma</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Unrivaled amber liquor depth with subtle floral malt notes that captivate the senses upon steeping.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">No Artificial Additives</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              0% preservatives, synthetic colors, or chemical aromas. Pure unadulterated tea leaves.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white font-medium">Expertly Artisanal Crafted</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Master tea artisans monitor moisture reduction and oxidation precision in small batches.
            </p>
          </div>

        </div>

        {/* 3-COLUMN QUALITY METRIC TABLE */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 border border-gold/30 shadow-2xl overflow-hidden">
          
          <div className="mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-serif text-white font-medium">Quality Metric Breakdown</h3>
              <p className="text-xs text-slate-400">Direct comparison across 3 core standards of production.</p>
            </div>
            <span className="text-xs text-gold uppercase tracking-widest font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
              Side-By-Side Comparison
            </span>
          </div>

          {/* Desktop & Tablet 3-Column Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="border-b border-gold/30 text-xs font-semibold uppercase tracking-widest">
                  {/* Column 1: Metric Header */}
                  <th className="w-3/12 py-4 px-5 text-slate-300 font-serif text-sm">
                    Quality Pillar
                  </th>
                  {/* Column 2: Regular Commercial Tea Header */}
                  <th className="w-4/12 py-4 px-5 text-slate-400 opacity-70 bg-white/5 rounded-tl-xl">
                    Regular Mass Commercial Tea
                  </th>
                  {/* Column 3: SoftBlue Premium Tea Header */}
                  <th className="w-5/12 py-4 px-5 text-gold font-serif text-base bg-royal-navy border-t-2 border-x border-gold/40 rounded-t-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                      <span>SoftBlue Premium Tea</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                {comparisonPoints.map((item, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors group">
                    {/* Column 1: Feature */}
                    <td className="py-4 px-5 font-medium text-white group-hover:text-gold transition-colors font-serif text-base">
                      {item.feature}
                    </td>

                    {/* Column 2: Regular Tea */}
                    <td className="py-4 px-5 text-slate-400 bg-white/5 font-light">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{item.regular}</span>
                      </div>
                    </td>

                    {/* Column 3: SoftBlue Premium Tea (Highlighted) */}
                    <td className="py-4 px-5 text-white font-medium bg-royal-navy/70 border-x border-gold/30 group-hover:bg-royal-navy">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/50 text-gold flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-gold-light font-sans leading-snug">{item.softblue}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile 3-Column Card Layout */}
          <div className="md:hidden space-y-4">
            {comparisonPoints.map((item, index) => (
              <div key={index} className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
                <div className="text-sm font-serif text-gold font-medium border-b border-white/10 pb-2">
                  {item.feature}
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {/* Column 2: Regular */}
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block font-semibold">Regular Commercial</span>
                    <p className="text-slate-300 font-light flex items-start gap-1">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{item.regular}</span>
                    </p>
                  </div>

                  {/* Column 3: SoftBlue */}
                  <div className="bg-royal-navy p-3 rounded-xl border border-gold/30 space-y-1">
                    <span className="text-[10px] text-gold uppercase block font-bold">SoftBlue 1600m</span>
                    <p className="text-white font-medium flex items-start gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span className="text-gold-light">{item.softblue}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
