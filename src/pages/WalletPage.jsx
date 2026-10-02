import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Wallet, Sparkles, ArrowLeft, ArrowUpRight, ArrowDownLeft, CheckCircle2, PlusCircle, CreditCard, QrCode } from 'lucide-react';

export default function WalletPage({ walletBalance, setWalletBalance }) {
  const navigate = useNavigate();

  const [topUpAmount, setTopUpAmount] = useState('1000');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [toastMessage, setToastMessage] = useState(null);

  const [transactions, setTransactions] = useState([
    {
      id: "TXN-8921",
      type: "CREDIT",
      amount: 500,
      title: "SoftBlue Royal Welcome Bonus",
      date: "Today, 5:30 PM",
      status: "COMPLETED",
      desc: "Exclusive signup credit for single-origin Munnar tea connoisseurs."
    },
    {
      id: "TXN-8840",
      type: "CREDIT",
      amount: 250,
      title: "Munnar Harvest Connoisseur Cashback",
      date: "Yesterday",
      status: "COMPLETED",
      desc: "10% cash reward on 1,600m altitude tea reserve purchase."
    }
  ]);

  const handleAddCash = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(topUpAmount);

    if (isNaN(amountNum) || amountNum <= 0) {
      setToastMessage({ type: 'error', text: 'Please enter a valid top-up amount.' });
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    if (setWalletBalance) {
      setWalletBalance(prev => prev + amountNum);
    }

    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "CREDIT",
      amount: amountNum,
      title: `Wallet Cash Top-Up via ${paymentMethod}`,
      date: "Just Now",
      status: "COMPLETED",
      desc: `Direct instant credit added via ${paymentMethod} payment.`
    };

    setTransactions(prev => [newTxn, ...prev]);
    setToastMessage({ type: 'success', text: `✓ ₹${amountNum.toLocaleString('en-IN')} added to your SoftBlue Wallet!` });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-[85vh] py-16 bg-[#051126] relative overflow-hidden text-slate-100">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold/20 pb-6">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs text-gold hover:text-white uppercase tracking-widest font-semibold transition-colors px-4 py-2 rounded-full glass-panel border border-gold/30 hover:border-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </button>

          <div className="text-center sm:text-right">
            <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Royal Connoisseur Passbook</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-wide">
              SoftBlue <span className="gold-gradient-text italic font-normal">Digital Wallet</span>
            </h1>
          </div>
        </div>

        {/* TOAST MESSAGE */}
        {toastMessage && (
          <div className={`p-4 rounded-2xl text-xs font-semibold text-center border shadow-xl animate-fade-in ${
            toastMessage.type === 'success' 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
              : 'bg-red-500/20 text-red-300 border-red-500/40'
          }`}>
            {toastMessage.text}
          </div>
        )}

        {/* TOP GRID: WALLET CARD & ADD CASH FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Wallet Balance Display Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-gold/50 gold-border-glow shadow-2xl bg-gradient-to-br from-[#0c2654] via-[#07193b] to-[#040e21] flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            {/* Card Watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-10 text-gold font-serif text-9xl pointer-events-none select-none">
              SB
            </div>

            <div className="flex items-center justify-between border-b border-gold/30 pb-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center border border-gold/40 shadow-lg">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gold uppercase tracking-widest font-bold block">SoftBlue Cash</span>
                  <span className="text-white font-serif text-lg font-medium">Connoisseur Wallet</span>
                </div>
              </div>
            </div>

            {/* Balance Display */}
            <div className="space-y-1 z-10">
              <span className="text-xs text-slate-300 font-light uppercase tracking-widest block">Available Balance</span>
              <div className="text-4xl sm:text-6xl font-serif font-bold text-gold gold-gradient-text">
                ₹{walletBalance.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Usable on all 1,600m Munnar Tea Orders at Checkout</span>
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-gold/20 flex flex-wrap items-center justify-between gap-4 z-10">
              <div className="text-xs text-slate-300">
                <span>Account Status: </span>
                <span className="text-gold font-bold">Active · Zero Expiry</span>
              </div>

              <button 
                onClick={() => navigate('/cart')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                <span>Use Cash at Cart</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: ADD CASH TO WALLET FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 shadow-2xl flex flex-col justify-between space-y-6 bg-royal-navy/80"
          >
            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
                <PlusCircle className="w-4 h-4 text-gold" />
                <span>Instant Wallet Top-Up</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">Add Cash to Wallet</h3>
              <p className="text-xs text-slate-300 font-light">
                Load money into your SoftBlue Cash account for seamless 1-click checkout.
              </p>
            </div>

            <form onSubmit={handleAddCash} className="space-y-5">
              
              {/* Quick Amount Buttons */}
              <div className="space-y-2">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold block">Select Top-Up Amount</span>
                <div className="grid grid-cols-4 gap-2">
                  {['500', '1000', '2000', '5000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setTopUpAmount(amt)}
                      className={`py-2.5 rounded-xl border text-xs font-bold transition-all font-mono ${
                        topUpAmount === amt 
                          ? 'bg-gold text-royal-deep border-gold shadow-lg' 
                          : 'bg-white/5 border-white/15 text-slate-300 hover:border-gold/40'
                      }`}
                    >
                      +₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Input */}
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">Or Enter Custom Amount (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gold font-serif font-bold text-sm">₹</span>
                  <input 
                    type="number"
                    min="100"
                    max="50000"
                    value={topUpAmount}
                    onChange={(e) => setTopUpAmount(e.target.value)}
                    className="w-full bg-royal-deep border border-gold/30 rounded-xl pl-8 pr-4 py-2.5 text-sm text-white font-bold font-mono focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              {/* Payment Mode Selector */}
              <div className="space-y-2">
                <span className="text-xs text-slate-300 font-medium block">Select Payment Mode</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('UPI')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      paymentMethod === 'UPI'
                        ? 'bg-gold/15 border-gold text-white'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/30'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <span className="text-xs font-bold block">UPI / QR</span>
                      <span className="text-[10px] text-slate-400">GPay, PhonePe, Paytm</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Card')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      paymentMethod === 'Card'
                        ? 'bg-gold/15 border-gold text-white'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/30'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-gold shrink-0" />
                    <div>
                      <span className="text-xs font-bold block">Credit/Debit Card</span>
                      <span className="text-[10px] text-slate-400">Visa, Mastercard</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Submit Top-Up Button */}
              <button 
                type="submit"
                className="w-full py-4 rounded-full bg-gold-gradient text-royal-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Top-Up ₹{parseFloat(topUpAmount || 0).toLocaleString('en-IN')} Now</span>
              </button>

            </form>
          </motion.div>

        </div>

        {/* TRANSACTION PASSBOOK HISTORY */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gold/20 pb-3">
            <h3 className="text-2xl font-serif text-white font-medium flex items-center gap-2">
              <span>Wallet Transaction Passbook</span>
              <span className="text-xs bg-gold/20 text-gold px-2.5 py-0.5 rounded-full font-sans font-bold">
                {transactions.length} Records
              </span>
            </h3>

            <span className="text-xs text-slate-400 font-light">Real-Time Ledger</span>
          </div>

          <div className="space-y-3">
            {transactions.map((txn) => (
              <div 
                key={txn.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between gap-4 hover:border-gold/40 transition-colors bg-royal-navy/60"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <ArrowDownLeft className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">{txn.title}</h4>
                    <p className="text-xs text-slate-400 font-light">{txn.desc}</p>
                    <span className="text-[10px] text-slate-500">{txn.date} · ID: {txn.id}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-serif font-bold text-emerald-400 block">
                    +₹{txn.amount}
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-emerald-500/20">
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
