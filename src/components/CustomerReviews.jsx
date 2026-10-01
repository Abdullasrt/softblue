import React from 'react';
import { motion } from 'framer-motion';
import { REALISTIC_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-brand-sand border-t border-b border-brand-sand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Connoisseur Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy font-normal">
            Voices from the Atelier
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-xs font-bold text-brand-navy font-sans">4.98 / 5.0 Rating</span>
            <span className="text-xs text-brand-muted font-sans">• 1,420+ Verified Indian Tea Lovers</span>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REALISTIC_REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-cream p-7 rounded-2xl border border-brand-sand-dark shadow-card-lift flex flex-col justify-between relative group hover:border-brand-gold/40 transition-all duration-300"
            >
              <div>
                {/* Header Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-brand-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] text-brand-muted font-mono">{rev.date}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-brand-navy mb-2 leading-snug">
                  "{rev.title}"
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed font-light mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-brand-sand-dark flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" title="Verified Buyer" />
                  </div>
                  <div className="text-[10px] text-brand-muted font-mono">{rev.city}</div>
                </div>

                <span className="text-[10px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-mono border border-emerald-200">
                  Verified Order
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
