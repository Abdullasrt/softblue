import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Sun, Sparkles, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export default function MunnarOrigin() {
  const pillars = [
    {
      title: '1,600 M mist altitude',
      desc: 'High in the Western Ghats, clouds brush the tea leaves daily, slowing growth to build rare aromatic essential oils.'
    },
    {
      title: 'Pre-Dawn Hand Harvest',
      desc: 'Plucked strictly before dawn mist evaporates to lock in peak volatile compounds before harsh midday sun hits.'
    },
    {
      title: 'Zero Blending Philosophy',
      desc: 'Never mixed with cheap lowland tea dust or commercial fillers. 100% single-estate Munnar integrity.'
    },
    {
      title: 'Nitrogen-Sealed Freshness',
      desc: 'Packed within 48 hours of rolling at our Kakkanad atelier to ensure true garden-to-cup purity.'
    }
  ];

  return (
    <section id="origin" className="py-24 bg-brand-navy text-brand-cream relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Ambient Photography Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200"
                alt="Dawn in Munnar Tea Estates Kerala"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-brand-midnight/90 backdrop-blur-md border border-brand-gold/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-mono flex items-center gap-1.5">
                    <Mountain className="w-4 h-4" /> Munnar Highlands, Kerala
                  </span>
                  <span className="text-xs text-brand-gold-muted font-bold font-serif">1,600m</span>
                </div>
                <p className="text-xs text-brand-sand/90 italic font-serif">
                  "Where the mist wraps the mountain before the world awakens."
                </p>
              </div>
            </div>

            {/* Decorative Gold Accent Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand-gold/20 -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Terroir Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Terroir Manifesto</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-brand-cream font-normal leading-tight">
                From Kerala. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-muted to-brand-gold font-bold">
                  To the World.
                </span>
              </h2>
              <div className="text-lg font-serif text-brand-gold-muted italic mt-2">
                Single-Origin · Munnar · 1,600 meters
              </div>
            </div>

            <p className="text-brand-sand/90 text-sm sm:text-base leading-relaxed font-light">
              High up in the mist-draped hills of Munnar, Kerala, tea is harvested under rare climatic gifts: cool mountain winds, rich volcanic soil, and tropical pre-dawn moisture. SoftBlue is crafted exclusively from these high-altitude slopes — zero blending, zero dust, and no artificial flavor enhancement.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-gold/15">
              {pillars.map((pillar, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-brand-cream uppercase tracking-wider font-sans">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Seal of Authenticity Banner */}
            <div className="p-4 rounded-lg bg-brand-midnight/80 border border-brand-gold/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-brand-cream uppercase tracking-wider">
                    Guaranteed Single Estate Purity
                  </div>
                  <div className="text-[11px] text-brand-muted">
                    FSSAI Lic. No. 21324188000725 • Packed in Kakkanad, Kochi
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
