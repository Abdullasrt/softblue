import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { rareTeasData } from '../data/teas';
import { Award, Compass, Sparkles, X, ShieldCheck } from 'lucide-react';

export default function TeaWorldSection() {
  const [selectedTeaModal, setSelectedTeaModal] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="rare-teas" className="py-24 bg-[#071735] relative overflow-hidden">
      
      {/* Ambient Background Lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The World of Luxury Tea</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide">
            Why does the world pay so much for a <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">single cup of tea?</span>
          </h2>

          <p className="text-lg text-slate-300 font-serif italic leading-relaxed">
            "Tea is not just a beverage — some are history, some are secrets, some are a single perfect moment."
          </p>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Look at some of the world's rarest teas — it's not just taste that sets them apart. It's <strong className="text-slate-200 font-medium">rarity, craftsmanship, origin, and purity</strong>.
          </p>
        </motion.div>

        {/* LUXURY CARDS GRID (6 Rare Teas) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rareTeasData.map((tea) => (
            <motion.div
              key={tea.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedTeaModal(tea)}
              className="glass-panel rounded-3xl border border-gold/30 gold-glow-hover shadow-2xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden border-b border-gold/20">
                  <img 
                    src={tea.image} 
                    alt={tea.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-royal-deep/90 backdrop-blur-md border border-gold/40 text-gold px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    <span>{tea.badge}</span>
                  </div>

                  {/* Valuation Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 bg-royal-deep/90 backdrop-blur-md p-3 rounded-xl border border-gold/30 flex items-center justify-between group-hover:border-gold transition-colors">
                    <span className="text-[10px] text-slate-300 uppercase tracking-widest font-sans">Valuation</span>
                    <span className="text-sm font-serif font-bold text-gold">{tea.priceTag}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5 text-gold" />
                      <span>{tea.origin}</span>
                    </div>

                    <h3 className="text-2xl font-serif text-white font-medium group-hover:text-gold transition-colors leading-snug">
                      {tea.name}
                    </h3>
                    
                    <p className="text-xs text-gold/90 font-serif italic">
                      "{tea.subtitle}"
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                    {tea.description}
                  </p>

                  {/* Highlights Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tea.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-royal-navy border border-gold/20 text-slate-300 px-2.5 py-0.5 rounded-full">
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gold font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                <span>Explore Deep Lore & History</span>
                <span className="text-lg font-serif">→</span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* DEEP TEA LORE MODAL */}
      {selectedTeaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-gold/40 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedTeaModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-royal-navy border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-gold/30">
              <img src={selectedTeaModal.detailImage || selectedTeaModal.image} alt={selectedTeaModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-serif text-white">{selectedTeaModal.name}</h3>
                <p className="text-gold font-serif italic">{selectedTeaModal.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
              <div className="grid grid-cols-2 gap-4 bg-royal-navy p-4 rounded-xl border border-gold/20 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase">Origin</span>
                  <span className="text-gold font-medium">{selectedTeaModal.origin}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase">Auction Record</span>
                  <span className="text-gold font-medium">{selectedTeaModal.priceTag}</span>
                </div>
              </div>

              <p className="text-base font-serif text-slate-200">{selectedTeaModal.description}</p>
              <p className="text-slate-300">{selectedTeaModal.story}</p>
            </div>

            <button 
              onClick={() => setSelectedTeaModal(null)}
              className="w-full py-3 rounded-full bg-gold text-royal-deep font-semibold uppercase text-xs tracking-wider hover:bg-gold-glow transition-colors"
            >
              Close Story
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
