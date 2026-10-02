import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sparkles, Phone, ArrowUpRight, Wallet, User, Heart } from 'lucide-react';

export default function Navbar({ cartCount, walletBalance = 500, wishlistCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const isStandalonePage = currentPath === '/cart' || currentPath === '/wallet' || currentPath === '/profile' || currentPath === '/why-softblue' || currentPath === '/rare-teas' || currentPath === '/shop' || currentPath === '/contact' || currentPath === '/wishlist';

  const navLinks = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'rare-teas', label: "World's Rarest Teas", path: '/rare-teas' },
    { id: 'shop', label: 'Shop & Bundles', highlighted: true, path: '/shop' },
    { id: 'why-softblue', label: 'Why SoftBlue', path: '/why-softblue' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isStandalonePage) {
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
      } else {
        if (currentPath === '/cart') setActiveSection('cart');
        if (currentPath === '/wallet') setActiveSection('wallet');
        if (currentPath === '/profile') setActiveSection('profile');
        if (currentPath === '/why-softblue') setActiveSection('why-softblue');
        if (currentPath === '/rare-teas') setActiveSection('rare-teas');
        if (currentPath === '/shop') setActiveSection('shop');
        if (currentPath === '/contact') setActiveSection('contact');
        if (currentPath === '/wishlist') setActiveSection('wishlist');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStandalonePage, currentPath]);

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);

    if (link.path === '/profile' || link.path === '/wallet' || link.path === '/cart' || link.path === '/why-softblue' || link.path === '/rare-teas' || link.path === '/shop' || link.path === '/contact' || link.path === '/wishlist') {
      navigate(link.path);
      return;
    }

    if (link.path === '/') {
      if (isStandalonePage) {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (isStandalonePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(link.id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setActiveSection(link.id);
    const element = document.getElementById(link.id);
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
            onClick={() => {
              if (isStandalonePage) {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} 
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
          <nav className="hidden xl:flex items-center gap-6 text-xs font-medium tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = (currentPath === link.path) || (isStandalonePage ? activeSection === link.id : activeSection === link.id);

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`relative py-1 transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                    isActive 
                      ? 'text-gold font-bold tracking-wider' 
                      : link.highlighted 
                        ? 'text-gold/90 font-semibold hover:text-white' 
                        : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>

                  {link.badge && (
                    <span className="bg-gold text-royal-deep text-[10px] px-1.5 py-0.5 rounded-full font-bold tracking-wider shadow">
                      {link.badge}
                    </span>
                  )}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30 rounded-full animate-fade-in shadow-[0_0_8px_#d4af37]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Profile Icon Button (Right next to cart icon!) */}
            <button 
              onClick={() => navigate('/profile')}
              className={`relative p-2.5 rounded-full border transition-all duration-300 group focus:outline-none ${
                currentPath === '/profile' ? 'bg-gold text-royal-deep border-gold shadow-lg' : 'bg-royal-navy border-gold/30 hover:border-gold text-slate-100 hover:text-gold'
              }`}
              aria-label="User Profile & Saved Addresses"
              title="User Profile & Saved Addresses"
            >
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
            
            {/* Digital Wallet Icon Button */}
            <button
              onClick={() => navigate('/wallet')}
              className={`relative p-2.5 rounded-full border transition-all duration-300 group focus:outline-none ${
                currentPath === '/wallet' ? 'bg-gold text-royal-deep border-gold shadow-lg' : 'bg-royal-navy border-gold/30 hover:border-gold text-slate-100 hover:text-gold'
              }`}
              aria-label="Digital Wallet"
              title={`Digital Wallet (Balance: ₹${walletBalance})`}
            >
              <Wallet className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>

            {/* Wishlist Heart Icon Button */}
            <button
              onClick={() => navigate('/wishlist')}
              className={`relative p-2.5 rounded-full border transition-all duration-300 group focus:outline-none ${
                currentPath === '/wishlist' ? 'bg-gold text-royal-deep border-gold shadow-lg' : 'bg-royal-navy border-gold/30 hover:border-gold text-slate-100 hover:text-gold'
              }`}
              aria-label="View Wishlist Reserve"
              title={`Wishlist Vault (${wishlistCount} saved items)`}
            >
              <Heart className={`w-5 h-5 transition-transform group-hover:scale-110 ${currentPath === '/wishlist' ? 'fill-royal-deep' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-royal-deep font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#051126] shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </button>

        

            {/* Shopping Bag Icon Button */}
            <button 
              onClick={() => navigate('/cart')}
              className={`relative p-2.5 rounded-full border transition-all duration-300 group focus:outline-none ${
                currentPath === '/cart' ? 'bg-gold text-royal-deep border-gold shadow-lg' : 'bg-royal-navy border-gold/30 hover:border-gold text-slate-100 hover:text-gold'
              }`}
              aria-label="View Cart Page"
              title="Open Separate Cart Page"
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
              className="xl:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden glass-panel border-b border-gold/30 px-6 pt-6 pb-8 space-y-5 animate-fade-in shadow-2xl">
            <div className="space-y-3 border-b border-white/10 pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors flex items-center justify-between ${
                    (currentPath === link.path || activeSection === link.id) ? 'text-gold font-bold pl-2 border-l-2 border-gold' : 'text-slate-200 hover:text-gold'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-gold text-royal-deep text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}

              {/* Mobile Profile Link */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/profile');
                }}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors flex items-center justify-between ${
                  currentPath === '/profile' ? 'text-gold font-bold' : 'text-slate-200 hover:text-gold'
                }`}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  <span>Profile & Saved Addresses</span>
                </div>
              </button>
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
