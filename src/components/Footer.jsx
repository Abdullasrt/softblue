import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Sparkles, Globe, Heart, ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030a18] text-slate-300 border-t border-gold/25 pt-16 pb-12 relative overflow-hidden">
      
      {/* SoftBlue Promise Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold/30 gold-border-glow text-center space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>The SoftBlue Promise</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif text-white font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            "The purity of the world's finest teas — from the highlands of Kerala, <span className="gold-gradient-text italic font-normal">into your cup.</span>"
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            SoftBlue is where the authenticity of Munnar meets world-class standards. A world with no compromise on quality or taste — <strong className="text-gold font-medium">where the sky is the only limit.</strong>
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>100% Single Origin Munnar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold" />
              <span>FSSAI Lic. No. 21324188000725</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Zero Artificial Additives</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
        
        {/* Column 1: Brand Info & Logo (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <img src="/logo-white.png" alt="SoftBlue Logo" className="h-10 w-auto  object-contain mx-auto" />

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            SoftBlue is a premium lifestyle brand bringing single-origin 1,600m high-altitude Munnar tea from Kerala to tea lovers worldwide.
          </p>

          <div className="pt-2 text-xs space-y-1 text-slate-300">
            <div className="text-white font-medium">SoftBlue Headquarters</div>
            <div className="text-slate-400">KC Arcade, Kakkanad, CSEZ PO, Kochi – 682037, Kerala, India</div>
            <div className="pt-1 flex items-center gap-2 text-gold font-semibold">
              <a href="https://softblue.in" target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-0.5">
                <span>softblue.in</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a href="mailto:contact@softblue.in" className="hover:underline">
                contact@softblue.in
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-serif text-gold uppercase tracking-widest font-semibold border-b border-gold/20 pb-2">
            Navigation Sitemap
          </h4>

          <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <li>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition-colors">
                Home Overview
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('rare-teas')} className="hover:text-gold transition-colors">
                World's Rarest Teas
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('softblue-story')} className="hover:text-gold transition-colors">
                Munnar Story (1,600m)
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('infographic')} className="hover:text-gold transition-colors">
                Why SoftBlue
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('shop')} className="hover:text-gold transition-colors text-gold font-medium">
                Shop & Bundles
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-colors">
                Contact Concierge
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter Circle Signup (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-serif text-gold uppercase tracking-widest font-semibold border-b border-gold/20 pb-2">
            Join the SoftBlue Circle
          </h4>

          <p className="text-xs text-slate-400 font-light">
            Subscribe for exclusive early access to new Munnar tea harvest flushes & bundle offers.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input 
              required
              type="email" 
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full bg-royal-navy border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
            />
            <button 
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gold text-royal-deep font-bold text-xs uppercase tracking-wider hover:bg-gold-glow transition-all"
            >
              Subscribe
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-[11px] text-emerald-400 font-medium animate-fade-in flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Welcome! Code SOFTPURITY is ready at checkout.</span>
            </p>
          )}
        </div>

      </div>

      {/* Bottom Bar: Copyright & Credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 SoftBlue Premium Tea. All Rights Reserved. Sky's the Limit.</p>
        <p className="flex items-center gap-1.5 text-slate-400 font-serif italic">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
          <span>for Single-Origin Tea Connoisseurs.</span>
        </p>
      </div>

    </footer>
  );
}
