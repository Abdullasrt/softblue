import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function BrandPromise() {
  return (
    <section className="py-20 bg-brand-midnight text-brand-cream relative border-t border-b border-brand-gold/20 overflow-hidden">
      {/* Glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-navy/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-widest mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>The Atelier Guarantee</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-muted to-brand-gold font-normal max-w-4xl mx-auto"
        >
          "The purity of the world's finest teas — from the highlands of Kerala, into your cup. Where authenticity meets world-class standards."
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-xs font-mono tracking-widest text-brand-muted uppercase"
        >
          SoftBlue • Unveil Purity • Sky's the Limit
        </motion.div>
      </div>
    </section>
  );
}
