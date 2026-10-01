import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { WORLD_TEAS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Info, Eye, Sparkles, MapPin, Award } from 'lucide-react';

export default function WorldOfTeaGallery({ onSelectTea }) {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="world-teas" className="py-24 bg-brand-midnight text-brand-cream relative overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#152E63_0%,#070F23_70%)] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3705_1px,transparent_1px),linear-gradient(to_bottom,#d4af3705_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-gold/15 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Pantheon of Extraordinary Harvests</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-cream font-normal"
            >
              The World of Rare Teas
            </motion.h2>
          </div>

          <p className="text-brand-muted text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light">
            Before SoftBlue was created, we studied the world's most prized leaves — from Wuyi cliffside trees to Darjeeling full moon harvests.
          </p>
        </div>

        {/* Quick Filter Tabs for Desktop */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8 border-b border-brand-gold/10">
          <span className="text-xs uppercase tracking-widest text-brand-gold/70 mr-3 flex-shrink-0 font-mono">
            Explore:
          </span>
          {WORLD_TEAS.map((tea, idx) => (
            <button
              key={tea.id}
              onClick={() => {
                setActiveTab(idx);
                if (scrollContainerRef.current) {
                  const cardWidth = 380;
                  scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                }
              }}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider flex-shrink-0 transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-brand-gold text-brand-midnight font-bold shadow-gold-glow'
                  : 'bg-brand-navy/60 text-brand-sand hover:text-brand-gold border border-brand-gold/20'
              }`}
            >
              <span>{tea.flag}</span> <span className="ml-1.5">{tea.name}</span>
            </button>
          ))}
        </div>

        {/* Carousel Slider Controls */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 rounded-full border border-brand-gold/30 hover:border-brand-gold bg-brand-navy/80 text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 rounded-full border border-brand-gold/30 hover:border-brand-gold bg-brand-navy/80 text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Cards Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pt-2"
        >
          {WORLD_TEAS.map((tea, idx) => (
            <motion.div
              key={tea.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-none w-[320px] sm:w-[380px] bg-brand-navy/60 rounded-xl border border-brand-gold/20 hover:border-brand-gold/60 backdrop-blur-md overflow-hidden snap-start flex flex-col justify-between group transition-all duration-500 hover:shadow-gold-glow"
            >
              {/* Visual Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tea.visual}
                  alt={tea.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                
                {/* Flag & Rarity Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-2xl bg-brand-midnight/80 p-1.5 rounded-full shadow">{tea.flag}</span>
                  <span className="text-[10px] uppercase tracking-widest bg-brand-midnight/90 text-brand-gold border border-brand-gold/30 px-3 py-1 rounded-full font-mono">
                    {tea.rarity}
                  </span>
                </div>

                {/* Valuation Tag */}
                <div className="absolute bottom-4 right-4 bg-brand-midnight/90 text-brand-gold-muted border border-brand-gold/40 px-3 py-1 rounded text-xs font-serif font-bold">
                  Valuation: {tea.valuation}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-gold-muted uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{tea.provenance}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-brand-cream group-hover:text-brand-gold transition-colors mb-2">
                    {tea.name}
                  </h3>

                  <p className="text-xs italic text-brand-gold/90 mb-3 font-serif">
                    "{tea.tagline}"
                  </p>

                  <p className="text-xs text-brand-muted leading-relaxed mb-4 line-clamp-3">
                    {tea.story}
                  </p>
                </div>

                {/* Tasting Notes Chips */}
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 mb-2 font-mono">
                    Tasting Profile:
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tea.notes.map((note, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-[10px] bg-brand-midnight text-brand-sand px-2.5 py-1 rounded-full border border-brand-gold/15"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={() => onSelectTea(tea)}
                    className="w-full py-2.5 rounded bg-brand-midnight hover:bg-brand-gold text-brand-gold hover:text-brand-midnight border border-brand-gold/30 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Legend</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Bridge at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-midnight to-brand-navy border border-brand-gold/30 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-brand-cream/90 italic leading-relaxed max-w-4xl mx-auto mb-4">
            "Trees rooted in rocky cliffs. Leaves awakened beneath moonlit skies. Buds touched with gold. Tea that grows in darkness. Flavors shaped by cold mountain nights..."
          </p>

          <div className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-gold font-bold tracking-wide">
            This is just the beginning. SoftBlue carries that same spirit of purity and character — from the hills of Kerala.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
