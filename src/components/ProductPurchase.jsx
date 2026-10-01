import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUNDLE_TIERS, RADAR_SPECS } from '../data/mockData';
import { 
  Check, ShieldCheck, Truck, RefreshCw, Sparkles, Heart, Package, Star, 
  MessageCircle, Gift, Sliders, Flame, Award, Clock, ChevronRight, Eye, Info, CheckCircle2, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProductPurchase({ onAddToCart, onOpenQuiz }) {
  const [selectedBundleId, setSelectedBundleId] = useState('pack-2'); // Default Duo Reserve
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);
  const [dailyCups, setDailyCups] = useState(2); // Stepper for yield calculator
  const [activeDetailTab, setActiveDetailTab] = useState('terroir'); // 'terroir' | 'brewing' | 'nutrition' | 'shipping'
  const [isAdding, setIsAdding] = useState(false);

  const selectedTier = BUNDLE_TIERS.find((tier) => tier.id === selectedBundleId);

  // Images Gallery
  const productImages = [
    {
      id: 'front',
      title: 'Front Packaging (250g)',
      src: '/assets/pouch-front.jpg',
      badge: 'Signature Front'
    },
    {
      id: 'back',
      title: 'Back Specs & Directions',
      src: '/assets/pouch-back.jpg',
      badge: 'Nutritional & Directions'
    },
    {
      id: 'liquor',
      title: 'Single-Origin Brewed Cup',
      src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1000',
      badge: 'Amber Gold Liquor'
    },
    {
      id: 'estate',
      title: 'Munnar High Slopes',
      src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1000',
      badge: '1,600m Origin'
    }
  ];

  const handleAcquire = () => {
    setIsAdding(true);
    
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FAF8F5', '#0B1B3D', '#E8D8A6']
    });

    setTimeout(() => {
      onAddToCart({
        ...selectedTier,
        includeGiftWrap
      });
      setIsAdding(false);
    }, 400);
  };

  // Calculate stash duration based on daily cups
  const calculateDaysDuration = (servings) => {
    const totalServings = parseInt(servings) || 125;
    return Math.floor(totalServings / dailyCups);
  };

  return (
    <section id="harvest" className="py-24 bg-brand-cream text-brand-slate relative overflow-hidden">
      {/* Subtle Background Radial & Watermark */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-muted/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Atelier Harvest Reserve</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-navy font-normal"
          >
            Acquire the Single-Origin Harvest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm sm:text-base mt-3 font-light"
          >
            Hand-plucked at 1,600 meters elevation in Munnar, Kerala. Nitrogen-sealed within 48 hours to lock in peak volatile polyphenols.
          </motion.p>

          {/* Live Reserve Status Ticker */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy text-brand-gold text-[11px] font-mono border border-brand-gold/30 shadow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Batch #MNR-2026 • Plucked Pre-Dawn • Only 18 Connoisseur Vaults Remaining Today</span>
          </div>
        </div>

        {/* Product Atelier Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Multi-View Gallery & Sensory Radar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 lg:sticky lg:top-28"
          >
            {/* Main Stage Display Card */}
            <div className="bg-gradient-to-b from-brand-sand via-brand-cream to-brand-sand p-6 sm:p-10 rounded-2xl border border-brand-gold/30 shadow-luxury text-center relative group overflow-hidden">
              
              {/* Badges on Showcase */}
              <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-2">
                <span className="bg-brand-navy text-brand-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-mono border border-brand-gold/30 shadow">
                  {productImages[activeImageIndex].badge}
                </span>
                <span className="bg-brand-gold text-brand-midnight font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-gold-glow">
                  Munnar 1,600m
                </span>
              </div>

              {/* Main Image View */}
              <div className="relative h-[380px] sm:h-[440px] flex items-center justify-center py-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src={productImages[activeImageIndex].src}
                    alt={productImages[activeImageIndex].title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                </AnimatePresence>
              </div>

              {/* Interactive Thumbnail Selector Bar */}
              <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-brand-gold/15">
                {productImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 rounded-lg p-1 border-2 overflow-hidden transition-all duration-300 ${
                      activeImageIndex === idx
                        ? 'border-brand-gold ring-2 ring-brand-gold/30 shadow-gold-glow bg-white'
                        : 'border-brand-gold/20 hover:border-brand-gold/50 bg-brand-cream'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Organoleptic Sensory Analysis Box */}
            <div className="p-6 rounded-2xl bg-brand-sand border border-brand-gold/30 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-brand-navy">
                <span className="flex items-center gap-2 font-bold text-brand-gold">
                  <Sliders className="w-4 h-4 text-brand-gold" /> Organoleptic Terroir Rating
                </span>
                <span className="text-[10px] text-brand-muted font-sans">Lab Tested Polyphenols</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RADAR_SPECS.map((spec, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-sans font-medium text-brand-navy">
                      <span>{spec.label}</span>
                      <span className="font-mono text-brand-gold font-bold">{spec.score}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-brand-sand-dark overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold rounded-full"
                        style={{ width: `${spec.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Bundle Tiers & Stash Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Header reviews & quiz launcher */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-navy">4.98 / 5.0</span>
                  <span className="text-xs text-brand-muted">(1,420 Verified Reviews)</span>
                </div>

                <button
                  onClick={onOpenQuiz}
                  className="text-xs text-brand-gold hover:text-brand-navy font-semibold underline underline-offset-4 flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Take Sommelier Quiz</span>
                </button>
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-navy">
                Select Harvest Bundle Reserve
              </h3>
              <p className="text-xs text-brand-muted mt-1">
                Prices include taxes. Complimentary pan-India express shipping included on 2+ packs.
              </p>
            </div>

            {/* Interactive Stash Yield Duration Calculator */}
            <div className="p-4 rounded-xl bg-brand-navy text-brand-cream border border-brand-gold/30 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-brand-gold uppercase tracking-widest font-mono font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Custom Stash Duration Calculator
                </span>
                <span className="text-brand-gold-muted font-mono font-bold">
                  {dailyCups} {dailyCups === 1 ? 'Cup' : 'Cups'} / Day
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-brand-muted font-mono">1 Cup</span>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={dailyCups}
                  onChange={(e) => setDailyCups(parseInt(e.target.value))}
                  className="w-full accent-brand-gold cursor-pointer"
                />
                <span className="text-xs text-brand-muted font-mono">6 Cups</span>
              </div>

              <div className="text-xs text-brand-sand/90 font-serif italic text-center pt-1 border-t border-brand-gold/15">
                "Your selected <strong className="text-brand-gold">{selectedTier?.title}</strong> will supply you for approximately <strong className="text-brand-gold">{calculateDaysDuration(selectedTier?.servings)} days</strong>."
              </div>
            </div>

            {/* 4 Interactive Bundle Cards */}
            <div className="space-y-4">
              {BUNDLE_TIERS.map((tier) => {
                const isSelected = selectedBundleId === tier.id;
                const durationDays = calculateDaysDuration(tier.servings);
                
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedBundleId(tier.id)}
                    className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-brand-gold bg-brand-sand/90 shadow-gold-glow ring-1 ring-brand-gold/50'
                        : 'border-brand-gold/20 bg-brand-cream hover:border-brand-gold/40 hover:bg-brand-sand/40'
                    }`}
                  >
                    {/* Badge */}
                    {tier.badge && (
                      <div className="absolute -top-3 right-6">
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow ${tier.badgeColor}`}>
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-4">
                      {/* Radio & Title */}
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? 'border-brand-gold bg-brand-gold' : 'border-brand-muted'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-brand-midnight" />}
                        </div>

                        <div>
                          <div className="text-base font-serif font-bold text-brand-navy flex items-center gap-2">
                            <span>{tier.title}</span>
                            <span className="text-xs font-sans text-brand-muted font-normal">({tier.weight})</span>
                          </div>
                          
                          <div className="text-xs text-brand-muted mt-1 leading-relaxed">
                            {tier.description}
                          </div>

                          <div className="flex items-center gap-3 mt-2 text-[11px] font-mono">
                            <span className="text-brand-gold font-bold">{tier.servings} ({tier.unitPriceText})</span>
                            <span className="text-emerald-700 font-semibold">• Supply for ~{durationDays} Days</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Price Column */}
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold font-sans text-brand-navy">
                          ₹{tier.price}
                        </div>
                        {tier.savings > 0 ? (
                          <div className="space-y-0.5">
                            <div className="text-xs text-brand-muted line-through font-mono">
                              ₹{tier.originalPrice}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Save ₹{tier.savings}
                            </div>
                          </div>
                        ) : (
                          <div className="text-[10px] text-brand-muted font-mono">MRP ₹{tier.price}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gift Box Checkbox */}
            <div className="p-4 rounded-xl bg-brand-sand border border-brand-gold/30 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="w-4 h-4 accent-brand-gold rounded cursor-pointer"
                />
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <Gift className="w-4 h-4 text-brand-gold" />
                  <span>Include Gold-Embossed Atelier Presentation Box & Custom Note</span>
                </div>
              </label>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-mono font-bold">
                Free Gift Packaging
              </span>
            </div>

            {/* Selected Reserve Summary */}
            <div className="p-4 rounded-lg bg-brand-navy text-brand-cream border border-brand-gold/30 flex items-center justify-between shadow-lg">
              <div>
                <div className="text-xs text-brand-gold uppercase tracking-widest font-mono">Reserve Selected:</div>
                <div className="text-sm font-bold font-serif">{selectedTier?.title} ({selectedTier?.weight})</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-brand-gold font-sans">₹{selectedTier?.price}</div>
                {selectedTier?.savings > 0 && (
                  <div className="text-[10px] text-emerald-400 font-mono">Instant Savings ₹{selectedTier.savings}</div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAcquire}
                disabled={isAdding}
                className="w-full py-4 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight font-extrabold text-sm uppercase tracking-[0.2em] shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-[1.02] transition-all duration-300 border border-brand-gold-muted/40 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isAdding ? (
                  <span>Securing Reserve...</span>
                ) : (
                  <>
                    <Package className="w-4 h-4 text-brand-midnight" />
                    <span>Acquire the Harvest — ₹{selectedTier?.price}</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/919072001441?text=Hello%20SoftBlue,%20I%20want%20to%20order%20the%20${encodeURIComponent(selectedTier?.title)}%20(${encodeURIComponent(selectedTier?.weight)})%20for%20₹${selectedTier?.price}.${includeGiftWrap ? '%20(Please%20include%20Complimentary%20Gift%20Box)' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant Order via WhatsApp Concierge</span>
              </a>
            </div>

            {/* Interactive Accordion / Tabbed Specs */}
            <div className="pt-6 border-t border-brand-gold/20">
              <div className="flex border-b border-brand-gold/20 gap-4">
                {[
                  { id: 'terroir', label: 'Terroir & Origin' },
                  { id: 'brewing', label: 'Brewing Directions' },
                  { id: 'nutrition', label: 'Nutritional Facts' },
                  { id: 'shipping', label: 'Shipping & Freshness' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDetailTab(tab.id)}
                    className={`pb-2 text-xs font-semibold uppercase tracking-wider transition-all relative ${
                      activeDetailTab === tab.id
                        ? 'text-brand-gold border-b-2 border-brand-gold font-bold'
                        : 'text-brand-muted hover:text-brand-navy'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="py-4 text-xs text-brand-muted leading-relaxed">
                {activeDetailTab === 'terroir' && (
                  <p>
                    Harvested exclusively at 1,600 meters in Munnar, Kerala. Hand-picked pre-dawn to retain essential volatile aromatic oils before sunlight causes leaf oxidation. 100% single-estate purity with zero dust or low-altitude blending.
                  </p>
                )}
                {activeDetailTab === 'brewing' && (
                  <p>
                    Add 2-3 teaspoons (2.5g) of SoftBlue tea powder per 250ml cup. Pour 92°C – 95°C water and steep for 4 to 5 minutes. Strain into fine porcelain. Enjoy pure for orchid freshness, or add warm milk & raw sugar for a royal cup.
                  </p>
                )}
                {activeDetailTab === 'nutrition' && (
                  <p>
                    Serving Size: 1 Cup (2g makes 100ml). Calories: 10 | Calories from fat: 0 | Total Fat: 0g (0%) | Trans Fat: 0g | Sodium: 0mg | Total Carbohydrate: 2g (1%) | Protein: 0g. High in natural antioxidant polyphenols & L-Theanine.
                  </p>
                )}
                {activeDetailTab === 'shipping' && (
                  <p>
                    Direct from Munnar estate & packed at Kakkanad, Kochi. Nitrogen-sealed in airtight 250g pouches for 12 months peak freshness. Free express pan-India dispatch on 2+ packs. Orders placed before 2 PM dispatched same day.
                  </p>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
