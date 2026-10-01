import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CupSoda, Heart, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function SommelierQuizModal({ isOpen, onClose, onSelectRecommendedBundle }) {
  const [step, setStep] = useState(1);
  const [timeOfDay, setTimeOfDay] = useState('');
  const [drinkingStyle, setDrinkingStyle] = useState('');
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleCalculate = (style) => {
    setDrinkingStyle(style);
    
    let bundleId = 'pack-2';
    let recommendationName = 'Duo Reserve Pack (500g)';
    let matchDesc = 'Ideal for your daily ritual. Delivers 250 cups of uncompromised pre-dawn Munnar purity.';

    if (style === 'family' || style === 'heavy') {
      bundleId = 'pack-4';
      recommendationName = '1 KG Connoisseur Vault';
      matchDesc = 'The ultimate stash. 500 cups with maximum savings (Save ₹297) and complimentary express shipping.';
    } else if (style === 'solo') {
      bundleId = 'pack-1';
      recommendationName = 'Single Signature Pouch (250g)';
      matchDesc = 'Perfect 125-cup introduction to high-altitude 1,600m Munnar tea.';
    }

    setResult({ bundleId, recommendationName, matchDesc });
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setTimeOfDay('');
    setDrinkingStyle('');
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-brand-midnight/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-brand-navy border border-brand-gold/40 rounded-2xl shadow-floating z-10 p-6 sm:p-8 text-brand-cream overflow-hidden"
      >
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-brand-midnight text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Quiz Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>SoftBlue Atelier Sommelier</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-brand-cream">
            Find Your Ideal Harvest Reserve
          </h3>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="text-xs uppercase tracking-wider text-brand-gold-muted text-center font-mono">
              Question 1 of 2: When do you enjoy your primary cup?
            </div>

            <div className="space-y-3">
              {[
                { id: 'dawn', label: 'Pre-Dawn & Early Morning', desc: 'Seeking sharp focus and crisp malt aroma to start the day.' },
                { id: 'afternoon', label: 'Mid-day & Afternoon Tea', desc: 'Smooth, comforting reset with or without royal milk.' },
                { id: 'evening', label: 'Evening Relaxation', desc: 'Mellow soothing steep with delicate floral undertones.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTimeOfDay(opt.id);
                    setStep(2);
                  }}
                  className="w-full p-4 rounded-xl border border-brand-gold/20 hover:border-brand-gold bg-brand-midnight/60 hover:bg-brand-midnight text-left transition-all group"
                >
                  <div className="text-sm font-bold font-serif text-brand-cream group-hover:text-brand-gold">
                    {opt.label}
                  </div>
                  <div className="text-xs text-brand-muted mt-1">
                    {opt.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="text-xs uppercase tracking-wider text-brand-gold-muted text-center font-mono">
              Question 2 of 2: How many cups are brewed daily in your home?
            </div>

            <div className="space-y-3">
              {[
                { id: 'solo', label: '1 - 2 Cups Daily (Solo Ritual)', desc: 'Approx 125 cups per month.' },
                { id: 'duo', label: '3 - 4 Cups Daily (Duo & Work)', desc: 'Approx 250 cups per month.' },
                { id: 'family', label: '5+ Cups Daily (Family / Office)', desc: 'Approx 375 - 500 cups per month.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleCalculate(opt.id)}
                  className="w-full p-4 rounded-xl border border-brand-gold/20 hover:border-brand-gold bg-brand-midnight/60 hover:bg-brand-midnight text-left transition-all group"
                >
                  <div className="text-sm font-bold font-serif text-brand-cream group-hover:text-brand-gold">
                    {opt.label}
                  </div>
                  <div className="text-xs text-brand-muted mt-1">
                    {opt.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && result && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-gold font-mono mb-1">
                Sommelier Recommendation:
              </div>
              <h4 className="text-2xl font-serif font-bold text-brand-cream">
                {result.recommendationName}
              </h4>
              <p className="text-xs text-brand-sand/90 leading-relaxed mt-2 max-w-sm mx-auto">
                {result.matchDesc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  onSelectRecommendedBundle(result.bundleId);
                  onClose();
                }}
                className="w-full py-3.5 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight font-bold text-xs uppercase tracking-[0.2em] shadow-gold-glow hover:scale-[1.02] transition-all"
              >
                Select {result.recommendationName}
              </button>

              <button
                onClick={resetQuiz}
                className="text-xs text-brand-muted hover:text-brand-gold transition-colors flex items-center justify-center gap-1.5 mx-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
