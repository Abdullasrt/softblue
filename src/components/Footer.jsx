import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Sparkles, Heart, ShieldCheck, Award, ArrowUpRight, Wallet, User, ShoppingBag, Compass } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

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

      {/* Main Refactored Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Column 1: Brand Info, Headquarters & Concierge (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <img src="/logo-white.png" alt="SoftBlue Logo" className="h-11 w-auto object-contain mx-auto lg:mx-0" />

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-xl">
            SoftBlue is a luxury lifestyle tea brand bringing single-origin 1,600m high-altitude Munnar tea directly from our estate slopes in Kerala to discerning tea connoisseurs worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-royal-navy/70 border border-gold/20 space-y-1.5">
              <div className="text-gold font-serif font-semibold text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Munnar HQ & Concierge</span>
              </div>
              <div className="text-slate-300 font-light leading-relaxed">
                KC Arcade, Kakkanad, CSEZ PO, Kochi – 682037, Kerala, India
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-royal-navy/70 border border-gold/20 space-y-1.5">
              <div className="text-gold font-serif font-semibold text-sm flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-gold" />
                <span>Direct Contact</span>
              </div>
              <div className="text-slate-300 space-y-1 font-light">
                <div>Phone: +91 95 67 67 1551</div>
                <div>WhatsApp: +91 90 72 00 1441</div>
                <div>Email: <a href="mailto:contact@softblue.in" className="text-gold hover:underline">contact@softblue.in</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Luxury Navigation Sitemap (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <h4 className="text-xs font-serif text-gold uppercase tracking-widest font-semibold border-b border-gold/20 pb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold" />
            <span>Navigation Sitemap</span>
          </h4>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <button 
              onClick={() => navigate('/')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <span>Home Overview</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/rare-teas')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <span>World's Rarest Teas</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/shop')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/30 hover:border-gold text-gold font-bold transition-all text-left flex items-center justify-between group shadow"
            >
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-gold" />
                <span>Shop & Bundles</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </button>

            <button 
              onClick={() => navigate('/why-softblue')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/20 hover:border-gold text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <span>Why SoftBlue</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/wishlist')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-gold" />
                <span>Wishlist Vault</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/contact')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <span>Contact Concierge</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/wallet')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-gold" />
                <span>Digital Wallet</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>

            <button 
              onClick={() => navigate('/profile')} 
              className="p-3 rounded-xl bg-royal-navy/50 border border-gold/15 hover:border-gold/40 text-slate-200 hover:text-gold transition-all text-left flex items-center justify-between group"
            >
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold" />
                <span>Customer Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" />
            </button>
          </div>
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
