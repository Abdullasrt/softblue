import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function MobileStickyCTA({ onAcquireClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero (300px)
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-brand-midnight/95 backdrop-blur-md border-t border-brand-gold/30 shadow-2xl flex items-center justify-between gap-3 animate-fadeIn">
      <div>
        <div className="text-[10px] text-brand-gold uppercase tracking-widest font-mono">
          Single-Origin Munnar (250g)
        </div>
        <div className="text-sm font-bold text-brand-cream font-serif">
          From ₹299 <span className="text-[10px] font-sans font-normal text-emerald-400">(Free Ship)</span>
        </div>
      </div>

      <button
        onClick={onAcquireClick}
        className="px-5 py-2.5 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight text-xs uppercase tracking-widest font-bold shadow-gold-glow flex items-center gap-1.5"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Acquire Reserve</span>
      </button>
    </div>
  );
}
