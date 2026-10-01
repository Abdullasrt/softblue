import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'rare-teas', label: "World's Rarest Teas" },
    { id: 'softblue-story', label: 'The Munnar Story' },
    { id: 'infographic', label: 'Why SoftBlue' },
    { id: 'shop', label: 'Shop & Bundles', highlighted: true },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll spy & glass header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Luxury Announcement Header */}
      <div className="bg-gradient-to-r from-royal-deep via-[#0d2243] to-royal-deep text-gold-light py-2 px-4 text-[11px] sm:text-xs tracking-widest uppercase text-center border-b border-gold/25 flex items-center justify-center gap-3 relative z-50">
        <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
        <span className="truncate">
          Single-Origin Munnar Tea · 1,600m Elevation · Free Express Courier Shipping Across India
        </span>
        <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0 hidden sm:inline" />
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#051126]/90 backdrop-blur-xl shadow-2xl border-b border-gold/25 py-3' 
          : 'bg-[#051126]/70 backdrop-blur-md py-5 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="SoftBlue Home"
          >
            <img 
              src="/logo-white.png" 
              alt="SoftBlue Logo" 
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1 transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                    link.highlighted 
                      ? 'text-gold font-semibold hover:text-white' 
                      : isActive 
                        ? 'text-gold font-semibold' 
                        : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>

                  {link.badge && (
                    <span className="bg-gold/20 text-gold text-[9px] px-1.5 py-0.5 rounded font-bold tracking-widest border border-gold/30">
                      {link.badge}
                    </span>
                  )}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Utilities */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Buy CTA */}
            <button 
              onClick={() => scrollToSection('shop')}
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-royal-deep transition-all duration-300 shadow-md"
            >
              <span>Experience Purity</span>
            </button>

            {/* Shopping Bag Button */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-royal-navy border border-gold/30 hover:border-gold text-slate-100 hover:text-gold transition-all duration-300 group focus:outline-none"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-gold text-royal-deep font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#051126] shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-gold/30 px-6 pt-6 pb-8 space-y-5 animate-fade-in shadow-2xl">
            <div className="space-y-3 border-b border-white/10 pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors flex items-center justify-between ${
                    activeSection === link.id ? 'text-gold font-bold' : 'text-slate-200 hover:text-gold'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-gold/20 text-gold text-[10px] px-2 py-0.5 rounded font-semibold">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="pt-2 space-y-3">
              <a 
                href="https://wa.me/919072001441" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-royal-navy border border-gold/30 text-xs text-gold font-semibold"
              >
                <span>WhatsApp Tea Concierge</span>
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </a>

              <a 
                href="tel:+919567671551"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+91 95 67 67 1551</span>
                </div>
                <span className="text-[10px] text-slate-500">Munnar HQ</span>
              </a>
            </div>

          </div>
        )}
      </header>
    </>
  );
}
