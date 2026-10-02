import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { comparisonPoints } from '../data/teas';
import ReviewSection from '../components/ReviewSection';
import { 
  Sparkles, Leaf, Award, Sun, Droplets, Shield, Check, X, 
  ArrowRight, Mountain, ShieldCheck, ShoppingBag, CheckCircle2
} from 'lucide-react';

export default function WhySoftBluePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featurePillars = [
    {
      icon: Leaf,
      title: "100% Single-Origin Munnar Tea",
      desc: "Harvested strictly from our 1,600m high-altitude tea gardens in Munnar, Kerala. Zero mixing with lowland leaves or unknown commercial estates."
    },
    {
      icon: Award,
      title: "1,600m Alpine Elevation",
      desc: "Grown in high-altitude mountain winds and sub-zero night breezes. Cool temperature naturally slows leaf growth, concentrating rich essential oils and antioxidants."
    },
    {
      icon: Sun,
      title: "5:00 AM Predawn Dew Pluck",
      desc: "Harvested before the morning sun warms the leaves, locking in delicate floral dew and natural aromatic nectar from the top two leaves and bud."
    },
    {
      icon: Droplets,
      title: "Rich Natural Aroma & Amber Liquor",
      desc: "Delivers an unadulterated deep amber cup with authentic malty flavor notes and a velvety clean finish."
    },
    {
      icon: Shield,
      title: "0% Artificial Additives",
      desc: "Zero synthetic fragrances, no artificial food dyes, and zero chemical preservatives. Unadulterated purity in every pouch."
    },
    {
      icon: Sparkles,
      title: "Artisanal Small-Batch Precision",
      desc: "Processed in small batches by master tea artisans who monitor moisture reduction and oxidation with centuries of traditional care."
    }
  ];

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100 font-sans">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* PAGE HEADER BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-5 border-b border-gold/20 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Purity Guide & Quality Standards · Single-Origin Munnar</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            Why <span className="gold-gradient-text italic font-normal">SoftBlue Tea</span>?
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-serif italic leading-relaxed">
            "Not regular commercial tea. Never."
          </p>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Ordinary commercial tea is produced on a mass industrial scale — blending low-altitude leaves from unknown estates with synthetic dyes and artificial flavors. <strong className="text-gold font-medium">SoftBlue is crafted on a foundation of absolute high-altitude purity.</strong>
          </p>
        </motion.div>

        {/* HERO VISUAL HIGHLIGHT CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-panel p-8 sm:p-14 rounded-3xl border border-gold/40 gold-border-glow relative overflow-hidden backdrop-blur-xl shadow-2xl group"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/munnar-dew-dawn.jpg" 
              alt="Munnar Predawn Dew Tea Garden" 
              className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-[#051126]/85 to-[#051126]/70" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider border border-gold/30 backdrop-blur-md">
                <Mountain className="w-3.5 h-3.5 text-gold" />
                <span>1,600m High Altitude Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-light leading-tight">
                High Elevation Slow-Growth Yields <span className="gold-gradient-text italic font-normal">Superior Purity</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                At 1,600 meters elevation in Munnar, Kerala, cooler mountain winds force tea bushes to grow slowly. This natural stress concentrates essential polyphenol antioxidants, delicate amino acids, and exquisite natural oils that low-altitude commercial tea fields cannot match.
              </p>
            </div>

            <div className="lg:col-span-4 bg-royal-navy/90 p-6 rounded-2xl border border-gold/30 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-gold font-serif font-bold text-base border-b border-gold/20 pb-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>SoftBlue Guarantee</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Single-Origin Munnar Estate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Predawn Dew Pluck (5:00 AM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Dust or Fillers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>FSSAI Certified Purity</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 6 FEATURE PILLARS INFOGRAPHIC GRID */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs text-gold uppercase tracking-widest font-semibold block">The 6 Pillars of Excellence</span>
            <h2 className="text-3xl font-serif text-white font-medium">What Sets SoftBlue Apart</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featurePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="glass-panel p-6 rounded-2xl border border-gold/30 gold-glow-hover transition-all duration-300 space-y-3 bg-royal-navy/70 shadow-xl group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center border border-gold/30 shadow group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SIDE-BY-SIDE COMPARISON MATRIX */}
        <div className="glass-panel rounded-3xl border border-gold/30 gold-border-glow overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-gold/20 bg-royal-navy/90 text-center space-y-2">
            <span className="text-xs text-gold uppercase tracking-widest font-semibold">Comparative Analysis</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              SoftBlue 1,600m Munnar vs Commercial Teas
            </h3>
            <p className="text-xs text-slate-300 font-light">
              A transparent breakdown of why single-origin Munnar tea stands in a class of its own.
            </p>
          </div>

          <div className="divide-y divide-gold/10">
            <div className="grid grid-cols-12 bg-[#081b3b] p-4 text-xs font-serif uppercase tracking-widest text-gold font-bold">
              <div className="col-span-4 sm:col-span-3">Purity Metric</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">Regular Commercial Teas</div>
              <div className="col-span-4 sm:col-span-5 text-gold">SoftBlue 1,600m Munnar Tea</div>
            </div>

            {comparisonPoints.map((point, index) => (
              <div 
                key={index}
                className="grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-gold/5 transition-colors"
              >
                <div className="col-span-4 sm:col-span-3 font-serif text-white font-medium pr-2">
                  {point.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-400 font-light flex items-center gap-1.5 pr-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 hidden sm:inline" />
                  <span>{point.regular}</span>
                </div>

                <div className="col-span-4 sm:col-span-5 text-gold font-medium flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 hidden sm:inline" />
                  <span className="text-slate-100">{point.softblue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFIED CONNOISSEUR REVIEWS & TESTIMONIALS */}
        <ReviewSection />

        {/* BOTTOM CALL TO ACTION BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-14 rounded-3xl border border-gold/40 gold-border-glow shadow-2xl text-center space-y-6 bg-gradient-to-r from-[#0c2654] via-[#07193b] to-[#040e21]"
        >
          <div className="inline-flex items-center gap-2 text-xs text-gold uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>Ready To Taste The SoftBlue Difference?</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Taste Pure 1,600m High-Altitude Munnar Harvest
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Reserve your nitrogen-flushed Munnar tea bundle today. Delivered directly from our Munnar & Kochi dispatch hubs across India.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl border border-amber-300/40 inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Shop & Reserve Bundles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
