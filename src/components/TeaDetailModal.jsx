import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Award, Flame, Sparkles, Compass } from 'lucide-react';

export default function TeaDetailModal({ tea, onClose }) {
  if (!tea) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-brand-midnight/85 backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-brand-navy rounded-2xl border border-brand-gold/40 shadow-2xl overflow-hidden z-10 text-brand-cream"
      >
        {/* Modal Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={tea.visual}
            alt={tea.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-brand-midnight/80 text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-brand-gold font-mono uppercase tracking-widest mb-1">
                <span>{tea.flag}</span>
                <span>{tea.provenance}</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-cream">
                {tea.name}
              </h3>
            </div>
            <div className="text-right bg-brand-midnight/90 px-3 py-1.5 rounded border border-brand-gold/30 text-xs font-serif font-bold text-brand-gold-muted">
              {tea.valuation}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-sm font-serif italic text-brand-gold/90 border-l-2 border-brand-gold pl-3 py-1">
            "{tea.tagline}"
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
              The Legend & Provenance
            </h4>
            <p className="text-xs sm:text-sm text-brand-sand/90 leading-relaxed font-light">
              {tea.story}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold/15">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 font-mono mb-1">
                Harvest Elevation:
              </div>
              <div className="text-sm font-bold text-brand-cream font-serif">{tea.elevation}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 font-mono mb-1">
                Rarity Tier:
              </div>
              <div className="text-sm font-bold text-brand-cream font-serif">{tea.rarity}</div>
            </div>
          </div>

          {/* Tasting Notes */}
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
              Palate & Aromatic Profile
            </div>
            <div className="flex flex-wrap gap-2">
              {tea.notes.map((note, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-brand-midnight text-brand-gold-muted px-3 py-1.5 rounded-full border border-brand-gold/20"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal Brewing */}
          <div className="p-4 rounded-lg bg-brand-midnight border border-brand-gold/20 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2 text-brand-gold">
              <Flame className="w-4 h-4" />
              <span className="font-semibold">Brewing Spec:</span>
            </div>
            <div className="text-brand-sand font-mono">{tea.brewing}</div>
          </div>

          {/* Footer CTA */}
          <div className="pt-2 text-center">
            <a
              href="#harvest"
              onClick={onClose}
              className="w-full py-3 rounded bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-midnight text-xs uppercase tracking-widest font-bold shadow-gold-glow inline-block"
            >
              Taste The Kerala Single-Origin Equivalent — SoftBlue
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
