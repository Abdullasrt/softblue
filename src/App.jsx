import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeaWorldSection from './components/TeaWorldSection';
import SoftBlueConnection from './components/SoftBlueConnection';
import ProductComparison from './components/ProductComparison';
import ProductShop from './components/ProductShop';
import BrewingRitual from './components/BrewingRitual';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const handleAddToCart = (bundle) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === bundle.id);
      if (existing) {
        return prev.map(item => item.id === bundle.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...bundle, quantity: 1 }];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleProceedToCheckout = (finalTotal) => {
    setCheckoutTotal(finalTotal);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const scrollToShop = () => {
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#051126] text-slate-100 flex flex-col font-sans selection:bg-gold selection:text-royal-deep">
      
      {/* Navigation Header */}
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onShopClick={scrollToShop} />
        <TeaWorldSection />
        <SoftBlueConnection onShopClick={scrollToShop} />
        <ProductComparison />
        <ProductShop onAddToCart={handleAddToCart} />
        <BrewingRitual />
        <ReviewSection />
        <ContactSection />
      </main>

      {/* Cart Drawer & Checkout Modal */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        cartItems={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
