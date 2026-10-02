import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, Globe, Clock, ShieldCheck, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    topic: 'General Inquiry', 
    message: '' 
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    'General Inquiry',
    'Bespoke Tasting Reserve',
    'Corporate & Luxury Gifting',
    'Bulk Estate Orders',
    'Press & Media'
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactForm({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });
    }, 6000);
  };

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100 font-sans">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-5 border-b border-gold/20 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>SoftBlue Concierge · Bespoke Tea Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            Contact <span className="gold-gradient-text italic font-normal">SoftBlue Concierge</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions about our single-origin 1,600m Munnar tea harvests, corporate gifting, or custom orders? Our dedicated tea concierge team is at your service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headquarters Details & Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Headquarters Location Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 gold-border-glow space-y-6">
              <div className="flex items-center gap-3.5 border-b border-gold/20 pb-4">
                <div className="w-11 h-11 rounded-2xl bg-gold/15 text-gold flex items-center justify-center border border-gold/30 shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white font-medium">SoftBlue Headquarters</h3>
                  <p className="text-xs text-slate-400 font-mono">Kochi & Munnar Hubs, Kerala, India</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                KC Arcade, Kakkanad, CSEZ PO <br />
                Kochi – 682037, Kerala, India
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href="mailto:contact@softblue.in" className="text-white hover:text-gold transition-colors font-medium">
                    contact@softblue.in
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href="tel:+919567671551" className="text-slate-200 hover:text-gold transition-colors font-medium">
                    +91 95676 71551
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/919072001441" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-gold font-medium hover:underline">
                    +91 90720 01441
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gold shrink-0" />
                  <a 
                    href="https://softblue.in" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gold font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>softblue.in</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Concierge Hours Card */}
            <div className="glass-panel p-6 rounded-3xl border border-gold/20 space-y-3">
              <div className="flex items-center gap-2.5 text-gold font-serif font-medium text-sm border-b border-gold/15 pb-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Concierge Hours (IST)</span>
              </div>
              <div className="text-xs text-slate-300 space-y-1 font-light">
                <div className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="text-white font-medium">9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday:</span>
                  <span>Limited Support</span>
                </div>
              </div>
            </div>

            {/* FSSAI Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-royal-navy/70 border border-gold/20 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
              <div>
                <div className="font-semibold text-white">FSSAI Certified Estate Brand</div>
                <div className="text-[11px] text-slate-400 font-mono">Lic No. 21324188000725</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold/30 gold-border-glow shadow-2xl relative">
              
              <h3 className="text-xl sm:text-2xl font-serif text-white font-normal mb-2">
                Send Message to Our Tea Concierge
              </h3>
              <p className="text-xs text-slate-300 font-light mb-6">
                Complete the inquiry form below. A tea specialist will respond within 2 hours during operational hours.
              </p>

              {/* SUCCESS NOTIFICATION */}
              {contactSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-serif text-white font-medium">Inquiry Received</h4>
                  <p className="text-xs text-emerald-200 font-light leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{contactForm.name || 'Valued Guest'}</span>. Your inquiry regarding <span className="text-gold">{contactForm.topic}</span> has been dispatched to our Munnar concierge desk.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  
                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold font-mono mb-2">
                      Inquiry Subject
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((tp) => (
                        <button
                          key={tp}
                          type="button"
                          onClick={() => setContactForm({ ...contactForm, topic: tp })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                            contactForm.topic === tp
                              ? 'bg-gold text-royal-deep font-bold shadow-md'
                              : 'bg-white/5 text-slate-300 border border-white/10 hover:border-gold/40'
                          }`}
                        >
                          {tp}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-royal-deep border border-gold/25 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-royal-deep border border-gold/25 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">
                      Phone / WhatsApp Number (Optional)
                    </label>
                    <input 
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-royal-deep border border-gold/25 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1.5">
                      Your Message or Custom Request *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-royal-deep border border-gold/25 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
