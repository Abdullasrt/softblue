import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { rareTeasData } from '../data/teas';
import { 
  Award, Compass, Sparkles, ChevronDown, ChevronUp, ShieldCheck, 
  ArrowRight, Eye, ShoppingBag, Thermometer, Clock, 
  Coffee, CheckCircle2
} from 'lucide-react';

export default function RareTeasPage() {
  const navigate = useNavigate();
  const [expandedTeaId, setExpandedTeaId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '₹1.2 Cr+', label: 'World Auction Record', sub: 'Da Hong Pao Mother Trees' },
    { value: '6 Micro-Batches', label: 'Curated Rarest Teas', sub: 'Single-estate global rarities' },
    { value: '1,600m - 2,400m', label: 'Alpine Elevation', sub: 'Cold mountain mist terroirs' },
    { value: '100% Pure', label: 'Unadulterated Integrity', sub: 'Zero artificial blending' }
  ];

  const filteredTeas = rareTeasData;

  const toggleExpand = (id) => {
    setExpandedTeaId(expandedTeaId === id ? null : id);
  };

  const getSteepingDetails = (id) => {
    switch (id) {
      case 'da-hong-pao':
        return { temp: '95°C', time: '4-5 Mins', vessel: 'Yixing Clay Teapot', notes: 'Malty, Roasted Mineral, Wild Orchid' };
      case 'yellow-gold-buds':
        return { temp: '85°C', time: '3 Mins', vessel: 'Crystal Glass Teacup', notes: 'Honeyed Dew, Subtle Metallic Luster' };
      case 'manohari-gold':
        return { temp: '90°C', time: '3 Mins', vessel: 'Fine Bone China', notes: 'Pure Cocoa Malt, Wild Honey Nectar' };
      case 'makaibari-silver-tips':
        return { temp: '80°C', time: '4 Mins', vessel: 'Porcelain Gaiwan', notes: 'Ethereal Muscatel, Peach Blossom' };
      case 'gyokuro':
        return { temp: '60°C', time: '2 Mins', vessel: 'Shiboridashi Teapot', notes: 'Deep Velvet Umami, Sweet Ocean Mist' };
      case 'nilgiri-frost':
        return { temp: '88°C', time: '3 Mins', vessel: 'Glass Infuser Pitcher', notes: 'Crisp Citrus Nectar, Winter Frost Sweetness' };
      default:
        return { temp: '90°C', time: '3 Mins', vessel: 'Porcelain Teapot', notes: 'High-Altitude Floral & Malty Notes' };
    }
  };

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100 font-sans">
      
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* PAGE HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-5 border-b border-gold/20 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Editorial Gallery · The World's Luxury Tea Vault</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            The World's Most <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">Rare & Exclusive Teas</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-serif italic leading-relaxed">
            "Tea is not just a beverage — some are history, some are secrets, some are a single perfect moment."
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            A curated chronicle of the world's most coveted single-estate harvests. Beyond taste, their true luxury stems from <strong className="text-gold font-medium">elevation, extreme climate, ancient craftsmanship, and uncompromised purity</strong>.
          </p>
        </motion.div>

        {/* STATS BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-panel border border-gold/30 gold-border-glow bg-royal-navy/60 shadow-2xl backdrop-blur-xl"
        >
          {stats.map((st, i) => (
            <div key={i} className="text-center space-y-1 p-3 border-r border-gold/15 last:border-r-0">
              <div className="text-xl sm:text-3xl font-serif text-gold font-bold tracking-tight">{st.value}</div>
              <div className="text-xs text-white font-semibold uppercase tracking-wider">{st.label}</div>
              <div className="text-[11px] text-slate-400 font-light">{st.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* EDITORIAL MAGAZINE GALLERY */}
        <div className="space-y-24 pt-4">
          <AnimatePresence mode="wait">
            {filteredTeas.map((tea, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedTeaId === tea.id;
              const steepInfo = getSteepingDetails(tea.id);

              return (
                <motion.div
                  key={tea.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-gold/15 last:border-b-0`}
                >
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group">
                      <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
                        <img 
                          src={tea.image} 
                          alt={tea.name}
                          className="w-full h-full object-cover filter brightness-95" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#051126]/85 backdrop-blur-md border border-gold/40 text-gold text-xs font-mono font-medium tracking-wider flex items-center gap-1.5 shadow-lg">
                          <Award className="w-3.5 h-3.5" />
                          <span>{tea.badge || tea.origin}</span>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#051126]/90 backdrop-blur-md border border-gold/30 flex items-center justify-between shadow-2xl">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 block font-mono">Estimated Auction Val.</span>
                            <span className="text-xl font-serif text-gold font-bold">{tea.priceTag || tea.price}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] uppercase tracking-widest text-slate-400 block font-mono">Harvest / Age</span>
                            <span className="text-xs font-serif text-white">{tea.age || tea.elevation}</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-gold/20 -z-10 hidden sm:block pointer-events-none" />
                    </div>
                  </div>

                  {/* Lore & Details Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold font-mono">
                        <Compass className="w-3.5 h-3.5 text-gold" />
                        <span>{tea.subtitle || tea.tagline}</span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal leading-tight">
                        {tea.name}
                      </h2>

                      <p className="text-sm font-serif text-gold/90 italic">
                        "{tea.rarity || tea.rarityReason}"
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                      {tea.description}
                    </p>

                    {tea.highlights && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {tea.highlights.map((hl, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[11px] font-mono border border-gold/20 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-gold" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Steeping Quick Stats */}
                    <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-royal-navy/70 border border-gold/20 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Thermometer className="w-4 h-4 text-gold shrink-0" />
                        <div>
                          <div className="text-[10px] text-slate-400 font-mono">Water Temp</div>
                          <div className="font-semibold text-white">{steepInfo.temp}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-300">
                        <Clock className="w-4 h-4 text-gold shrink-0" />
                        <div>
                          <div className="text-[10px] text-slate-400 font-mono">Steep Duration</div>
                          <div className="font-semibold text-white">{steepInfo.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-300">
                        <Coffee className="w-4 h-4 text-gold shrink-0" />
                        <div>
                          <div className="text-[10px] text-slate-400 font-mono">Recommended</div>
                          <div className="font-semibold text-white truncate">{steepInfo.vessel}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => toggleExpand(tea.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
                      >
                        <Eye className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                        <span>{isExpanded ? 'Hide Heritage Story' : 'Read Heritage Story'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Accordion Heritage Story */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="p-6 rounded-2xl bg-royal-navy/90 border border-gold/30 space-y-4 backdrop-blur-md shadow-inner text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                            <div className="flex items-center justify-between border-b border-gold/20 pb-2">
                              <div className="flex items-center gap-2 text-gold font-serif font-medium">
                                <ShieldCheck className="w-4 h-4 text-gold" />
                                <span>Historical Lore & Plucking Ritual</span>
                              </div>
                              <span className="text-[10px] font-mono text-gold/80 uppercase">Origin: {tea.origin}</span>
                            </div>
                            <p className="italic text-slate-300 leading-relaxed">
                              "{tea.story}"
                            </p>
                            <div className="pt-2 flex flex-wrap gap-4 text-[11px] font-mono text-gold/80 border-t border-gold/15">
                              <span>📍 Terroir: {tea.origin}</span>
                              <span>🏔 Harvest Window: {tea.age || tea.elevation}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-gold/40 gold-border-glow text-center space-y-6 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>SoftBlue High-Altitude Equivalent</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif text-white font-light tracking-wide max-w-3xl mx-auto">
            Experience Single-Origin Purity from <span className="gold-gradient-text italic font-normal">Munnar Slopes</span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            While these global auction rarities fetch lakhs per kilogram, SoftBlue brings you 1,600m single-origin Munnar tea harvested predawn at accessible luxury prices.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 rounded-full bg-gold-gradient text-royal-deep text-xs sm:text-sm font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore SoftBlue Shop & Bundles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
