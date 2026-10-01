import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mountain, Sun, ShieldCheck, Sparkles, Wind, CheckCircle2, ArrowRight, Droplets, Feather, Compass, MapPin } from 'lucide-react';

export default function SoftBlueConnection({ onShopClick }) {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const pillars = [
    {
      id: "altitude",
      icon: Mountain,
      badge: "1,600M Elevation",
      title: "Alpine Mist Terroir",
      subtitle: "Cold Mountain Winds & High Altitude",
      description: "Perched high in the mist-clad hills of Munnar, Kerala at 1,600 meters altitude. Sub-zero mountain breezes and dense morning fog naturally slow leaf growth, concentrating rich essential oils and complex antioxidant profiles.",
      image: "/munnar-snow-dawn.jpg",
      metric: "1,600 M",
      metricLabel: "Peak Elevation",
      features: ["Sub-zero night breeze", "Rich mineral soil", "Slow-grown leaf density"]
    },
    {
      id: "harvest",
      icon: Sun,
      badge: "5:00 AM Harvest",
      title: "Predawn Nectar Pluck",
      subtitle: "Hand-Picked Before First Sunlight",
      description: "Master pluckers navigate the quiet slopes at 5:00 AM. Only the top two tender leaves and a young bud are selected before the morning sun evaporates the fragile floral dew and essential aromatic compounds.",
      image: "/tea-sunlight-macro.jpg",
      metric: "5:00 AM",
      metricLabel: "Predawn Harvest",
      features: ["Top two leaves & bud", "Zero heat degradation", "Hand-crafted selection"]
    },
    {
      id: "purity",
      icon: ShieldCheck,
      badge: "100% Single Origin",
      title: "Unblended Pure Character",
      subtitle: "Zero Blends · Zero Artificial Flavors",
      description: "Commercial teas blend leaves from multiple regions and add artificial aromas. SoftBlue remains 100% single-estate Munnar tea—unblended, unadulterated, and true to its native Kerala terroir in every steep.",
      image: "/munnar-dew-dawn.jpg",
      metric: "100%",
      metricLabel: "Single Estate Purity",
      features: ["0% Artificial flavors", "0% Commercial filler", "Full estate traceability"]
    }
  ];

  return (
    <section id="softblue-story" className="py-28 bg-[#051126] relative overflow-hidden text-slate-100 border-t border-gold/20">
      
      {/* Dynamic Background Ambient Light Glowing Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Mountain Fog Overlay Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <img 
          src="/munnar-snow-dawn.jpg" 
          alt="Munnar Mist Terroir Background" 
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051126] via-transparent to-[#051126]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg"
          >
            <Compass className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span>The Munnar Story</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif text-white font-light tracking-wide leading-tight"
          >
            Born in Mountain Mist. <br />
            <span className="gold-gradient-text italic font-normal">Nurtured at 1,600 Meters.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            From the high-altitude peaks of Munnar, Kerala, comes a tea shaped by alpine mist, virgin mineral soil, and centuries of single-estate heritage.
          </motion.p>
        </div>

        {/* POETIC LEGACY STORY CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 sm:p-14 rounded-3xl border border-gold/40 gold-border-glow text-center space-y-8 relative overflow-hidden shadow-2xl bg-gradient-to-b from-[#081b3b]/90 to-[#051126]/90"
        >
          {/* Subtle Decorative Quote Symbol */}
          <div className="absolute top-4 left-6 text-gold/10 font-serif text-8xl pointer-events-none select-none">“</div>
          <div className="absolute bottom-4 right-6 text-gold/10 font-serif text-8xl pointer-events-none select-none">”</div>

          <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>Poetry of the Peaks</span>
          </div>

          <div className="font-serif text-xl sm:text-3xl text-slate-200 leading-relaxed font-light space-y-3 max-w-3xl mx-auto">
            <p className="italic text-slate-300 hover:text-white transition-colors">Trees rooted in rocky alpine cliffs.</p>
            <p className="italic text-slate-300 hover:text-white transition-colors">Leaves awakened beneath moonlit mist.</p>
            <p className="italic text-gold font-normal text-2xl sm:text-4xl drop-shadow">Buds touched with morning gold.</p>
            <p className="italic text-slate-300 hover:text-white transition-colors">Tea that slow-grows in mountain darkness.</p>
            <p className="italic text-slate-300 hover:text-white transition-colors">Flavors shaped by cold mountain nights.</p>
          </div>

          <div className="pt-6 border-t border-gold/25 max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-3xl font-serif text-gold font-medium tracking-wide">
              SoftBlue carries that exact spirit of purity — untouched, untamed, directly from Munnar.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Every leaf is a testament to Kerala's rich tea heritage, crafted without compromise for those who seek the extraordinary.
            </p>
          </div>
        </motion.div>

        {/* 3 CRAFT PILLARS - ELEGANT VISUAL CARDS GRID */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold/20 pb-4 gap-4">
            <div>
              <span className="text-xs text-gold uppercase tracking-widest font-semibold flex items-center gap-2">
                <Wind className="w-4 h-4 text-gold" />
                Craft & Terroir
              </span>
              <h3 className="text-3xl font-serif text-white font-medium mt-1">
                The 3 Pillars of SoftBlue Purity
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-md">
              Hover over each pillar to explore the high-altitude alchemy that defines our single-origin flavor profile.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isHovered = activeCardIndex === idx;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                  className={`glass-panel rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-xl ${
                    isHovered 
                      ? 'border-gold/70 gold-border-glow -translate-y-2 bg-[#091f42]/90' 
                      : 'border-gold/30 bg-[#071630]/70 hover:border-gold/50'
                  }`}
                >
                  {/* Image Container with Top Badge */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071630] via-transparent to-black/40" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-[#051126]/90 border border-gold/40 text-gold px-3 py-1 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                      <IconComponent className="w-3.5 h-3.5 text-gold" />
                      <span>{pillar.badge}</span>
                    </div>


                    {/* Dynamic Metric Overlay on Image */}
                    <div className="absolute bottom-4 left-4 right-4 glass-panel px-4 py-2.5 rounded-xl border border-gold/30 flex items-center justify-between backdrop-blur-md">
                      <span className="text-xs text-slate-300 font-medium">{pillar.subtitle}</span>
                      <span className="text-sm font-serif font-bold text-gold">{pillar.metric}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-2xl font-serif text-white font-medium group-hover:text-gold transition-colors flex items-center justify-between">
                        <span>{pillar.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Feature Checkpoints */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* HIGH IMPACT METRICS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl bg-gradient-to-r from-[#071733] via-[#0b2247] to-[#071733] grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20"
        >
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gold gold-gradient-text block">
              1,600 M
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
              Munnar Elevation
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gold gold-gradient-text block">
              5:00 AM
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
              Predawn Plucking
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gold gold-gradient-text block">
              100%
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
              Single Estate Munnar
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gold gold-gradient-text block">
              0%
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
              Blends or Additives
            </span>
          </div>
        </motion.div>

        {/* CALL TO ACTION & HERITAGE PROMISE */}
        <div className="text-center space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 text-xs text-gold uppercase tracking-widest font-semibold">
            <Feather className="w-4 h-4 text-gold" />
            <span>Taste Pure High-Altitude Tea</span>
          </div>
          
          <h3 className="text-2xl sm:text-4xl font-serif text-white font-light">
            Ready to experience the unadulterated flavor of Munnar?
          </h3>

          <div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShopClick}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest shadow-2xl hover:shadow-gold/40 transition-all duration-300 border border-amber-300/40"
            >
              <span>Reserve Your Munnar Harvest</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
