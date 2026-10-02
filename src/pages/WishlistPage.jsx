import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, ShoppingBag, Trash2, ArrowRight, Sparkles, Award, 
  ShieldCheck, Compass, CheckCircle2 
} from 'lucide-react';

export default function WishlistPage({ 
  wishlistItems = [], 
  onRemoveFromWishlist, 
  onAddToCart 
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMoveToCart = (item) => {
    onAddToCart(item);
    if (onRemoveFromWishlist) {
      onRemoveFromWishlist(item.id);
    }
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
          className="text-center max-w-4xl mx-auto space-y-4 border-b border-gold/20 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/30 shadow-lg">
            <Heart className="w-3.5 h-3.5 text-gold fill-gold animate-pulse" />
            <span>Curated Personal Collection · Wishlist Vault</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide leading-tight">
            Your Saved <span className="gold-gradient-text italic font-normal">Wishlist Reserve</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Keep track of your favorite 1,600m single-origin Munnar tea packages and legendary rare harvests. Transfer them to your cart whenever you are ready to order.
          </p>
        </motion.div>

        {/* EMPTY WISHLIST VIEW */}
        {wishlistItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-10 sm:p-16 rounded-3xl border border-gold/30 text-center space-y-6 max-w-2xl mx-auto shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto border border-gold/40 shadow-inner">
              <Heart className="w-9 h-9 text-gold" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif text-white font-medium">
                Your Wishlist is Empty
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                You haven't saved any tea reserve packages or rare harvests yet. Explore our collection and click the heart icon to save your favorites.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/shop')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Shop & Bundles</span>
              </button>

              <button
                onClick={() => navigate('/rare-teas')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel text-slate-200 hover:text-gold border border-gold/30 hover:border-gold text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>Explore World's Rarest Teas</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* FILLED WISHLIST GRID */
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-gold/15 pb-4">
              <span className="text-xs text-gold uppercase tracking-wider font-mono">
                Saved Items ({wishlistItems.length})
              </span>
              <button 
                onClick={() => wishlistItems.forEach(item => onRemoveFromWishlist && onRemoveFromWishlist(item.id))}
                className="text-xs text-slate-400 hover:text-rose-400 transition-colors underline"
              >
                Clear All Saved Items
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {wishlistItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-3xl p-6 border border-gold/30 gold-glow-hover flex flex-col justify-between space-y-6 relative group bg-royal-navy/70 shadow-xl"
                  >
                    {/* Delete Icon Button */}
                    <button
                      onClick={() => onRemoveFromWishlist && onRemoveFromWishlist(item.id)}
                      className="absolute top-5 right-5 p-2 rounded-full bg-royal-navy/80 border border-gold/20 text-slate-400 hover:text-rose-400 hover:border-rose-400/50 transition-colors focus:outline-none z-10"
                      title="Remove from Wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Content Section */}
                    <div className="space-y-4">
                      
                      {/* Image Thumbnail Canvas */}
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-royal-navy to-[#071630] border border-gold/20 flex items-center justify-center p-4">
                        <img 
                          src={item.image || '/pouch-front.jpg'} 
                          alt={item.title || item.name}
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" 
                        />
                        {item.badge && (
                          <span className="absolute top-3 left-3 bg-gold text-royal-deep text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="space-y-1">
                        <div className="text-[11px] text-gold font-mono uppercase tracking-widest">
                          {item.weight || item.origin || '1,600m Munnar Harvest'}
                        </div>
                        <h3 className="text-xl font-serif text-white font-normal truncate">
                          {item.title || item.name}
                        </h3>
                        <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-4 border-t border-gold/15 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] uppercase text-slate-400 font-mono">Price</div>
                        <div className="text-xl font-serif text-gold font-bold">
                          ₹{item.price || item.priceTag}
                        </div>
                      </div>

                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="px-5 py-2.5 rounded-full bg-gold-gradient text-royal-deep text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Cart</span>
                      </button>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
