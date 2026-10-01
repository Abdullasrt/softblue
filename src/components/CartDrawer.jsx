import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onProceedToCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((acc, item) => acc + (item.savings * item.quantity), 0);
  const finalTotal = subtotal;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#071735] border-l border-gold/30 w-full max-w-md h-full flex flex-col shadow-2xl relative">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-gold/20 flex items-center justify-between bg-royal-navy">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h3 className="text-xl font-serif text-white font-medium">Your SoftBlue Reserve</h3>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-royal-deep px-5 py-3 border-b border-white/5 text-xs text-slate-300">
          <div className="flex justify-between mb-1">
            <span>Free Express Courier Shipping</span>
            <span className="text-emerald-400 font-semibold">UNLOCKED ✓</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 to-gold w-full"></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4 text-slate-400">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-lg font-serif">Your shopping bag is empty.</p>
              <p className="text-xs">Experience single-origin Munnar tea purity today.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-2xl border border-white/10 flex gap-4 items-center">
                <div className="w-16 h-20 bg-royal-navy rounded-xl p-1 flex items-center justify-center shrink-0 border border-gold/20">
                  <img src="/pouch-front.jpg" alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{item.title}</h4>
                  <p className="text-xs text-gold">₹{item.price} per bundle</p>
                  
                  {/* Quantity selector */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center bg-royal-navy border border-white/15 rounded-lg text-xs">
                      <button 
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 text-white font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-slate-300 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-500 hover:text-red-400 text-xs p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-serif font-bold text-white">₹{item.price * item.quantity}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gold/20 bg-royal-navy space-y-4">
            
            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-medium">₹{subtotal}</span>
              </div>

              {totalSavings > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>Bundle Savings</span>
                  <span>-₹{totalSavings}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-400 font-semibold uppercase">FREE</span>
              </div>

              <div className="flex justify-between text-base text-white font-serif font-bold pt-2 border-t border-white/10">
                <span>Total Amount</span>
                <span className="text-gold">₹{finalTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={() => {
                onClose();
                onProceedToCheckout(finalTotal);
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Proceed to Luxury Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
