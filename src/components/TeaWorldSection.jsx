import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rareTeasData } from '../data/teas';
import { Award, Compass, Sparkles, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

export default function TeaWorldSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expandedTeaId, setExpandedTeaId] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Rare Teas' },
    { id: 'LEGEND', label: 'Imperial Legends' },
    { id: 'GOLD', label: '24k & Golden Buds' },
    { id: 'HARVEST', label: 'Lunar & Frost Harvest' }
  ];

  const getFilteredTeas = () => {
    if (selectedCategory === 'LEGEND') {
      return rareTeasData.filter(t => t.id === 'da-hong-pao' || t.id === 'gyokuro');
    }
    if (selectedCategory === 'GOLD') {
      return rareTeasData.filter(t => t.id === 'yellow-gold-buds' || t.id === 'manohari-gold');
    }
    if (selectedCategory === 'HARVEST') {
      return rareTeasData.filter(t => t.id === 'makaibari-silver-tips' || t.id === 'nilgiri-frost');
    }
    return rareTeasData;
  };

  const filteredTeas = getFilteredTeas();

  const toggleExpand = (id) => {
    setExpandedTeaId(expandedTeaId === id ? null : id);
  };

  return (
    <section id="rare-teas" className="py-24 bg-[#071735] relative overflow-hidden text-slate-100">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Editorial Portfolio · The World of Luxury Tea</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            Why does the world pay so much for a <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">single cup of tea?</span>
          </h2>

          <p className="text-lg text-slate-200 font-serif italic leading-relaxed">
            "Tea is not just a beverage — some are history, some are secrets, some are a single perfect moment."
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            A curated chronicle of the world's most coveted single-estate harvests. Beyond taste, their true luxury stems from <strong className="text-gold font-medium">rarity, elevation, craftsmanship, and uncompromised purity</strong>.
          </p>
        </motion.div>

        {/* CATEGORY FILTER SELECTOR */}
        <div className="flex justify-center">
          <div className="glass-panel p-1.5 rounded-full border border-gold/30 inline-flex flex-wrap items-center justify-center gap-2 bg-royal-navy/80 shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gold text-royal-deep shadow-lg scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* CARDLESS EDITORIAL MAGAZINE LAYOUT */}
        <div className="space-y-20 pt-4">
          <AnimatePresence mode="wait">
            {filteredTeas.map((tea, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedTeaId === tea.id;

              return (
                <motion.div
                  key={tea.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-gold/20 pb-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
                      <img 
                        src={tea.image} 
                        alt={tea.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-[#051126]/30 to-transparent opacity-80" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 bg-royal-deep/90 backdrop-blur-md border border-gold/40 text-gold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg">
                        <Award className="w-4 h-4 text-gold" />
                        <span>{tea.badge}</span>
                      </div>

                      {/* Valuation Tag */}
                      <div className="absolute bottom-4 left-4 right-4 bg-royal-navy/90 backdrop-blur-md p-4 rounded-2xl border border-gold/30 flex items-center justify-between">
                        <span className="text-xs text-slate-300 uppercase tracking-widest font-sans">Auction Valuation</span>
                        <span className="text-base font-serif font-bold text-gold">{tea.priceTag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Narrative Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
                        <Compass className="w-4 h-4 text-gold" />
                        <span>{tea.origin}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light leading-tight">
                        {tea.name}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gold font-serif italic">
                        "{tea.subtitle}"
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                      {tea.description}
                    </p>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tea.highlights.map((item, idx) => (
                        <span key={idx} className="text-xs bg-royal-navy/90 border border-gold/20 text-slate-200 px-3 py-1 rounded-full font-sans">
                          ✦ {item}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Inline Lore Accordion */}
                    <div className="pt-3">
                      <button
                        onClick={() => toggleExpand(tea.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors py-2 px-4 rounded-full bg-white/5 border border-gold/30 hover:border-gold"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{isExpanded ? 'Hide Heritage Lore' : 'Read Deep Heritage Lore'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-4 p-5 rounded-2xl bg-royal-navy/90 border border-gold/30 space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed overflow-hidden"
                          >
                            <h4 className="text-sm font-serif text-white font-medium border-b border-gold/20 pb-2 flex items-center justify-between">
                              <span>Historical Chronicle & Craftsmanship</span>
                              <span className="text-gold text-xs font-mono">{tea.age || 'Traditional Harvest'}</span>
                            </h4>
                            <p className="italic font-serif text-slate-200 text-sm">
                              "{tea.story}"
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* SOFTBLUE MUNNAR TERROIR BRIDGE BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold/40 gold-border-glow shadow-2xl bg-gradient-to-r from-[#0c2654] via-[#07193b] to-[#040e21] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>SoftBlue Munnar Terroir Promise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              High-Altitude Purity is the Secret of World-Renowned Teas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Just like the world's most prized mother trees and mountain frost harvests, SoftBlue tea is hand-plucked at <strong className="text-white">1,600m altitude in Munnar, Kerala</strong> before dawn — preserving 100% single-origin nectar and floral aroma without additives.
            </p>
          </div>

          <a
            href="#shop"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2 shrink-0 border border-amber-300/40"
          >
            <span>Experience SoftBlue Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

    </section>
  );
}


