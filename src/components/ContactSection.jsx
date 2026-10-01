import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, Globe, Clock, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [contactSent, setContactSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactForm({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#051126] relative overflow-hidden border-t border-gold/20">
      
      {/* Background Aura */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-royal-navy/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Connect with SoftBlue</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-wide">
            Contact <span className="gold-gradient-text italic font-normal">SoftBlue Tea</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Have questions about our single-origin 1,600m Munnar harvest, corporate gifting, or custom orders? Our tea concierge is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Location Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 gold-border-glow space-y-5">
              <div className="flex items-center gap-3 border-b border-gold/20 pb-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-white font-medium">SoftBlue Headquarters</h3>
                  <p className="text-xs text-slate-400">Kochi & Munnar, Kerala, India</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                KC Arcade, Kakkanad, CSEZ PO <br />
                Kochi – 682037, Kerala, India
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href="mailto:contact@softblue.in" className="text-white hover:text-gold transition-colors font-medium">
                    contact@softblue.in
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <a href="tel:+919567671551" className="text-slate-200 hover:text-gold transition-colors">
                    +91 95 67 67 1551
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/919072001441" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white font-medium hover:underline">
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
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Concierge Availability</span>
              </div>
              <p className="text-slate-300 font-light">
                Monday – Saturday: <strong className="text-white">9:00 AM – 7:00 PM IST</strong> <br />
                Direct WhatsApp assistance available 24/7 for order tracking.
              </p>
            </div>

          </div>

          {/* Right Side: Interactive Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-2xl font-serif text-white font-medium">Send a Message to SoftBlue</h3>
              <p className="text-xs text-slate-400">Fill in your details below for a prompt response from our tea team.</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Your Full Name *</label>
                  <input 
                    required
                    type="text" 
                   
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Email Address *</label>
                  <input 
                    required
                    type="email" 
                   
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                   
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Inquiry Topic</label>
                  <select 
                    value={contactForm.topic}
                    onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                    className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bundle Order & Shipping">Bundle Order & Shipping</option>
                    <option value="Corporate Gifting & Bulk">Corporate Gifting & Bulk</option>
                    <option value="Press & Partnership">Press & Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Your Message *</label>
                <textarea 
                  required
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-royal-navy border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.01] transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </button>

              {contactSent && (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl text-center text-xs font-semibold animate-fade-in flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thank you! Your message has been sent directly to contact@softblue.in.</span>
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
