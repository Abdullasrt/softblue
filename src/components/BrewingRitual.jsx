import React from 'react';
import { Flame, Clock, Coffee, Sparkles } from 'lucide-react';

export default function BrewingRitual() {
  const steps = [
    {
      num: "01",
      title: "Measure the Leaf",
      detail: "Add 2-3 teaspoons of SoftBlue tea powder to your teapot.",
      icon: <Sparkles className="w-5 h-5 text-gold" />
    },
    {
      num: "02",
      title: "Infuse with Water",
      detail: "Pour 1 cup (250ml) of freshly boiled spring water over the tea.",
      icon: <Flame className="w-5 h-5 text-gold" />
    },
    {
      num: "03",
      title: "Steep & Awaken",
      detail: "Allow the leaves to steep for 4-5 minutes to unlock full amber notes.",
      icon: <Clock className="w-5 h-5 text-gold" />
    },
    {
      num: "04",
      title: "Savor the Purity",
      detail: "Strain into your favorite cup. Enjoy pure black or with fresh milk & sugar.",
      icon: <Coffee className="w-5 h-5 text-gold" />
    }
  ];

  return (
    <section className="py-20 bg-[#071735] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs text-gold uppercase tracking-widest font-semibold">The Sacred Daily Ritual</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-light">
            How to Brew <span className="italic text-gold">SoftBlue Tea</span>
          </h2>
          <p className="text-sm text-slate-300 font-light">
            Unlock the rich aroma and mountain character of 1,600m Munnar single-origin tea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-serif font-bold text-gold/40 group-hover:text-gold transition-colors">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-royal-navy border border-gold/30 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-serif text-white font-medium mb-2">{step.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{step.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
