import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, CheckCircle2, ThumbsUp, MessageSquarePlus, X, Send, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const reviewsData = [
  {
    id: 1,
    name: "Dr. Meera Nambiar",
    location: "Bangalore, India",
    rating: 5,
    date: "September 24, 2026",
    title: "Unmatched Morning Clarity & Pure Amber Aroma",
    review: "Having tasted tea from Darjeeling and Assam for years, SoftBlue's 1,600m Munnar single-origin is a revelation. The early morning plucking really makes a difference — there's zero harsh bitterness, just a rich malt floral aroma that lingers delightfully.",
    verified: true,
    bundlePurchased: "4 Packs / 1 KG — Grand Edition",
    category: "Taste & Aroma",
    helpfulCount: 42
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "September 18, 2026",
    title: "True Luxury Experience in Every Cup",
    review: "SoftBlue stands toe-to-toe with luxury European tea houses. The zip-lock pouch retains full leaf moisture and oil, and the deep royal blue packaging makes it a prized gift for family and clients. Worth every rupee.",
    verified: true,
    bundlePurchased: "3 Packs — Connoisseur Set",
    category: "Gift & Packaging",
    helpfulCount: 29
  },
  {
    id: 3,
    name: "Ananya Roy",
    location: "Kolkata, West Bengal",
    rating: 5,
    date: "September 12, 2026",
    title: "Authentic Single-Origin Munnar Terroir",
    review: "You can literally taste the cold mountain mist of 1,600m Munnar in the brew. No artificial flavors or coloring added — pure unadulterated tea leaves processed with artisanal care. My family is officially hooked!",
    verified: true,
    bundlePurchased: "2 Packs — Twin Reserve",
    category: "Single-Origin Munnar",
    helpfulCount: 38
  },
  {
    id: 4,
    name: "Siddharth K. Nair",
    location: "Kochi, Kerala",
    rating: 5,
    date: "August 29, 2026",
    title: "Direct From Munnar — Superior Freshness",
    review: "Living in Kerala, I know good Munnar tea when I smell it. SoftBlue's early 5 AM harvest selection ensures high L-theanine smoothness. Express delivery arrived at my doorstep in 24 hours.",
    verified: true,
    bundlePurchased: "4 Packs / 1 KG — Grand Edition",
    category: "Single-Origin Munnar",
    helpfulCount: 51
  },
  {
    id: 5,
    name: "Priya Sundaram",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    date: "August 20, 2026",
    title: "Subtle Floral Malt Notes with Fresh Milk",
    review: "The brewing instructions on the pouch are spot-on. 4 minutes in 95°C water creates a glowing amber infusion that pairs beautifully with warm milk. Highly recommended for daily morning tea rituals.",
    verified: true,
    bundlePurchased: "1 Pack — Single Origin",
    category: "Taste & Aroma",
    helpfulCount: 19
  },
  {
    id: 6,
    name: "Rajesh Iyer",
    location: "New Delhi, NCR",
    rating: 5,
    date: "August 15, 2026",
    title: "Elegant Gift for Tea Aficionados",
    review: "Ordered the 4-pack bundle as corporate hampers. Every single client complimented the smooth finish and gold-accented packaging. SoftBlue has set a new benchmark for Indian luxury tea.",
    verified: true,
    bundlePurchased: "4 Packs / 1 KG — Grand Edition",
    category: "Gift & Packaging",
    helpfulCount: 33
  }
];

export default function ReviewSection() {
  const [reviewsList, setReviewsList] = useState(reviewsData);
  const [helpfulLiked, setHelpfulLiked] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    title: '',
    review: '',
    bundlePurchased: '2 Packs — Twin Reserve'
  });
  const [submittedToast, setSubmittedToast] = useState(false);

  const filteredReviews = reviewsList;

  useEffect(() => {
    if (!isAutoPlaying || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, filteredReviews.length]);

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredReviews.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const toggleHelpful = (id) => {
    setHelpfulLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const createdReview = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'India',
      rating: Number(newReview.rating),
      date: 'Just now',
      title: newReview.title,
      review: newReview.review,
      verified: true,
      bundlePurchased: newReview.bundlePurchased,
      category: 'Taste & Aroma',
      helpfulCount: 1
    };

    setReviewsList([createdReview, ...reviewsList]);
    setCurrentIndex(0);
    setSubmittedToast(true);
    setTimeout(() => {
      setSubmittedToast(false);
      setReviewModalOpen(false);
      setNewReview({ name: '', location: '', rating: 5, title: '', review: '', bundlePurchased: '2 Packs — Twin Reserve' });
    }, 2000);
  };

  const currentReview = filteredReviews[currentIndex % filteredReviews.length] || filteredReviews[0];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <section id="reviews" className="py-6 sm:py-8 bg-[#071735] relative overflow-hidden border border-gold/30 rounded-2xl my-4 shadow-2xl gold-border-glow shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
      
      {/* Glow Aura Backgrounds */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] font-semibold uppercase tracking-widest border border-gold/30">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>Verified Connoisseur Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-white font-light tracking-wide">
            Stories from <span className="gold-gradient-text italic font-normal">Discerning Tea Lovers</span>
          </h2>

          {/* Compact Aggregate Rating & Write Review Bar */}
          <div className="glass-panel max-w-md mx-auto p-2.5 px-4 rounded-xl border border-gold/30 flex items-center justify-between shadow-[0_8px_25px_rgba(0,0,0,0.4)] mt-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-gold">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-300 font-light hidden sm:inline">(428 Reviews)</span>
            </div>

            <button 
              onClick={() => setReviewModalOpen(true)}
              className="px-3 py-1 rounded-full bg-gold text-royal-deep font-bold text-[10px] uppercase tracking-wider hover:bg-gold-glow transition-all flex items-center gap-1 shadow-lg"
            >
              <MessageSquarePlus className="w-3 h-3" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* SLIDING CAROUSEL CONTAINER */}
        <div className="max-w-3xl mx-auto relative px-2 sm:px-10">
          
          {/* Compact Navigation Arrows */}
          <button 
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full glass-panel border border-gold/40 text-gold hover:text-white hover:bg-gold/20 flex items-center justify-center transition-all shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button 
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full glass-panel border border-gold/40 text-gold hover:text-white hover:bg-gold/20 flex items-center justify-center transition-all shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Active Compact Review Slide */}
          <div className="relative min-h-[180px] flex items-center justify-center overflow-hidden py-1">
            <AnimatePresence custom={direction} mode="wait">
              {currentReview && (
                <motion.div
                  key={currentReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full glass-panel p-4 sm:p-6 rounded-2xl border border-gold/40 shadow-[0_15px_35px_rgba(0,0,0,0.7)] gold-border-glow bg-gradient-to-b from-[#081f44]/95 to-[#051126]/95 backdrop-blur-md space-y-3 relative"
                >
                  {/* Header Row inside Card */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/15 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(currentReview.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-gold font-serif italic">5.0 / 5</span>
                    </div>

                    {currentReview.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified Buyer</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                      "{currentReview.title}"
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light italic">
                      "{currentReview.review}"
                    </p>
                  </div>

                  {/* Footer Row inside Card */}
                  <div className="pt-3 border-t border-gold/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-white font-serif font-medium">{currentReview.name}</span>
                      <span className="text-slate-400 font-light text-[11px] ml-2">· {currentReview.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-gold bg-gold/10 px-2.5 py-0.5 rounded-md border border-gold/20 font-medium">
                        {currentReview.bundlePurchased}
                      </span>

                      <button 
                        onClick={() => toggleHelpful(currentReview.id)}
                        className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                          helpfulLiked[currentReview.id] 
                            ? 'bg-gold text-royal-deep font-bold border-gold' 
                            : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{currentReview.helpfulCount + (helpfulLiked[currentReview.id] ? 1 : 0)}</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center pt-3">
            <div className="flex items-center gap-1.5">
              {filteredReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex % filteredReviews.length === idx 
                      ? 'w-6 bg-gold shadow-md' 
                      : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Write a Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="glass-panel max-w-lg w-full rounded-2xl p-6 border border-gold/40 shadow-2xl relative">
            <button 
              onClick={() => setReviewModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-full bg-royal-navy border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            {!submittedToast ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gold text-[10px] font-semibold uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Share Your SoftBlue Experience</span>
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">Write a Connoisseur Review</h3>
                </div>

                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Your Rating</label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Your Full Name *</label>
                      <input 
                        required
                        type="text" 
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">City / Location</label>
                      <input 
                        type="text" 
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Bundle Purchased</label>
                    <select 
                      value={newReview.bundlePurchased}
                      onChange={(e) => setNewReview({ ...newReview, bundlePurchased: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                    >
                      <option value="1 Pack — Single Origin">1 Pack — Single Origin (250g)</option>
                      <option value="2 Packs — Twin Reserve">2 Packs — Twin Reserve (500g)</option>
                      <option value="3 Packs — Connoisseur Set">3 Packs — Connoisseur Set (750g)</option>
                      <option value="4 Packs / 1 KG — Grand Edition">4 Packs / 1 KG — Grand Edition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Review Headline *</label>
                    <input 
                      required
                      type="text" 
                      value={newReview.title}
                      onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Your Detailed Review *</label>
                    <textarea 
                      required
                      rows="3"
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      className="w-full bg-royal-navy border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Verified Review</span>
                  </button>

                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif text-white">Review Submitted!</h3>
                <p className="text-xs text-slate-300">
                  Thank you, {newReview.name}. Your verified review has been published.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
