import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplets, Clock, CupSoda, Sparkles, Feather, Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

export default function BrewingGuide({ onOpenQuiz }) {
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes (240s)

  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const toggleTimer = () => setTimerActive(!timerActive);
  const resetTimer = () => {
    setTimerActive(false);
    setTimeLeft(240);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = Math.min(100, Math.round(((240 - timeLeft) / 240) * 100));

  const steps = [
    {
      num: '01',
      title: 'Water Precision',
      detail: 'Heat fresh spring water to 92°C – 95°C (just off the boil) to preserve volatile aromatic tea oils.',
      icon: Flame
    },
    {
      num: '02',
      title: 'Golden Leaf Measurement',
      detail: 'Add 2-3 teaspoons (approx 2.5g) of SoftBlue tea powder per 250ml fine china cup.',
      icon: Feather
    },
    {
      num: '03',
      title: 'The 4-Minute Infusion',
      detail: 'Steep uninterrupted for 4 minutes. Watch the liquor transform into radiant golden amber.',
      icon: Clock
    },
    {
      num: '04',
      title: 'Royal Milk or Pure Black',
      detail: 'Strain into fine porcelain. Enjoy pure for orchid freshness, or add warm milk for a velvety cup.',
      icon: CupSoda
    }
  ];

  return (
    <section id="brewing" className="py-24 bg-brand-navy text-brand-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#152E63_0%,#050B18_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Daily Ritual</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-cream font-normal"
          >
            How to Prepare SoftBlue Tea
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm sm:text-base mt-3 font-light"
          >
            Mastering the extraction of high-altitude Munnar polyphenols in 4 effortless steps.
          </motion.p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-midnight/80 p-8 rounded-xl border border-brand-gold/20 hover:border-brand-gold/60 backdrop-blur-md relative group transition-all duration-300"
              >
                <div className="text-4xl font-serif font-bold text-brand-gold/20 group-hover:text-brand-gold/50 transition-colors absolute top-4 right-6 font-mono">
                  {item.num}
                </div>

                <div className="w-12 h-12 rounded-full bg-brand-navy border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-serif font-bold text-brand-cream mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Steeping Timer Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-brand-midnight p-6 sm:p-8 rounded-2xl border border-brand-gold/30 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 rounded-full border-2 border-brand-gold/30 flex items-center justify-center flex-shrink-0 overflow-hidden bg-brand-navy">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-600 via-amber-500 to-amber-300 transition-all duration-500 opacity-80"
                style={{ height: `${progressPercent}%` }}
              />
              <span className="relative z-10 font-mono font-bold text-lg text-brand-cream">
                {formatTime(timeLeft)}
              </span>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-gold font-mono">
                Interactive Steeping Companion
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-cream mt-0.5">
                4-Minute Munnar Steep Timer
              </h4>
              <p className="text-xs text-brand-muted mt-1">
                {timeLeft === 0
                  ? '♦ Your SoftBlue Tea is perfectly steeped! Enjoy.'
                  : timerActive
                  ? `Steeping in progress... ${progressPercent}% extracted`
                  : 'Click start when hot water is poured onto tea powder.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTimer}
              className="px-6 py-3 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight text-xs uppercase tracking-widest font-bold shadow-gold-glow flex items-center gap-2 hover:scale-105 transition-all"
            >
              {timerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{timerActive ? 'Pause' : 'Start Steep'}</span>
            </button>
            <button
              onClick={resetTimer}
              className="p-3 rounded border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Sommelier Quiz Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-muted font-medium border-b border-brand-gold/40 pb-1 hover:border-brand-gold transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unsure which pack fits your routine? Take 30s Sommelier Quiz</span>
          </button>
        </div>

      </div>
    </section>
  );
}
