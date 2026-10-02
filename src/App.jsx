import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import WalletPage from './pages/WalletPage';
import ProfilePage from './pages/ProfilePage';
import RareTeasPage from './pages/RareTeasPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';
import WhySoftBluePage from './pages/WhySoftBluePage';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [walletBalance, setWalletBalance] = useState(500); // Default ₹500 SoftBlue Cash credit
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "bundle-4",
      packs: 4,
      weight: "1 KG Reserve Vault",
      title: "4 Packs — 1 KG Reserve Vault",
      price: 899,
      badge: "Save ₹297 · Best Value",
      description: "Our signature 1,600m Munnar high-altitude reserve package. Nitrogen-flushed into 4 individual 250g pouches."
    }
  ]);

  const handleToggleWishlist = (item) => {
    setWishlistItems(prev => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      label: 'Home',
      name: 'Dr. Anand V. Nair',
      phone: '+91 95676 71551',
      address: 'Flat 402, KC Residency, Kakkanad Road',
      city: 'Kochi',
      state: 'Kerala',
      pincode: '682037',
      isDefault: true
    },
    {
      id: 2,
      label: 'Office',
      name: 'Anand Nair (SoftBlue Concierge)',
      phone: '+91 90720 01441',
      address: 'KC Arcade, CSEZ P.O, Kakkanad',
      city: 'Kochi',
      state: 'Kerala',
      pincode: '682037',
      isDefault: false
    }
  ]);

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

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-[#051126] text-slate-100 flex flex-col font-sans selection:bg-gold selection:text-royal-deep">
        
        {/* Navigation Header */}
        <Navbar 
          cartCount={cartCount} 
          walletBalance={walletBalance} 
          wishlistCount={wishlistItems.length}
        />

        {/* Separate Multi-Page Routing */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/why-softblue" 
              element={<WhySoftBluePage />} 
            />
            <Route 
              path="/rare-teas" 
              element={
                <RareTeasPage 
                  wishlistItems={wishlistItems}
                  onToggleWishlist={handleToggleWishlist}
                />
              } 
            />
            <Route 
              path="/shop" 
              element={
                <ShopPage 
                  onAddToCart={handleAddToCart}
                  wishlistItems={wishlistItems}
                  onToggleWishlist={handleToggleWishlist}
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/wishlist" 
              element={
                <WishlistPage 
                  wishlistItems={wishlistItems}
                  onRemoveFromWishlist={handleRemoveFromWishlist}
                  onAddToCart={handleAddToCart}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems}
                  onUpdateQty={handleUpdateQty}
                  onRemoveItem={handleRemoveItem}
                  walletBalance={walletBalance}
                  setWalletBalance={setWalletBalance}
                  savedAddresses={savedAddresses}
                  onOrderSuccess={handleOrderSuccess}
                />
              } 
            />
            <Route 
              path="/wallet" 
              element={
                <WalletPage 
                  walletBalance={walletBalance}
                  setWalletBalance={setWalletBalance}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProfilePage 
                  savedAddresses={savedAddresses}
                  setSavedAddresses={setSavedAddresses}
                  walletBalance={walletBalance}
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
