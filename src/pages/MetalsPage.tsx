import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Star, 
  Award, 
  Zap, 
  Monitor, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  LayoutGrid, 
  ArrowUpRight,
  CheckCircle2,
  Gem,
  Flame,
  Droplets
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';

export const MetalsPage = () => {
  const highlightedMetals = [
    { name: 'Gold', symbol: 'XAUUSD', price: '2,085.50', change: '+0.45%', isNegative: false, color: 'from-amber-400 to-amber-600', icon: <Gem /> },
    { name: 'Silver', symbol: 'XAGUSD', price: '23.15', change: '+0.12%', isNegative: false, color: 'from-gray-300 to-gray-500', icon: <Star /> },
    { name: 'Brent Oil', symbol: 'UKOIL', price: '82.45', change: '+0.15%', isNegative: false, color: 'from-gray-700 to-gray-900', icon: <Droplets /> },
  ];

  const metalsList = [
    { name: 'Platinum', symbol: 'XPTUSD', price: '885.45', change: '-0.25%', isNegative: true },
    { name: 'Palladium', symbol: 'XPDUSD', price: '945.12', change: '+1.15%', isNegative: false },
    { name: 'WTI Oil', symbol: 'USOIL', price: '78.12', change: '-0.22%', isNegative: true },
    { name: 'Natural Gas', symbol: 'NGAS', price: '1.85', change: '+1.45%', isNegative: false },
    { name: 'Copper', symbol: 'XCUUSD', price: '3.85', change: '-0.05%', isNegative: true },
    { name: 'Aluminum', symbol: 'XALUSD', price: '2,245.00', change: '+0.32%', isNegative: false },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopContactBar className="hidden lg:block" />
      <Navbar />

      {/* Hero Section */}
      <section className="py-14 lg:py-16 text-center bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block"
          >
            MARKETS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Trade <span className="text-primary">Precious Metals</span> & Energies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          >
            Diversify your portfolio with Gold, Silver, and Energies. Benefit from safe-haven assets and global energy demand with institutional-grade execution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button type="button" className="btn-primary px-10 py-4 rounded-full font-bold flex items-center gap-2">
              Open Live Account <ArrowUpRight size={20} />
            </button>
            <button className="bg-white border border-gray-200 text-gray-900 px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
              Try Demo Account <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary rounded-full" />
        </div>
      </section>

      <MarketTabs initialTab="Commodities" />

      {/* Highlighted Metals Cards */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedMetals.map((metal, idx) => (
              <motion.div 
                key={metal.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-[2.5rem] p-10 text-white bg-gradient-to-br ${metal.color} shadow-2xl group`}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {React.cloneElement(metal.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold opacity-80 uppercase tracking-widest">{metal.symbol}</div>
                      <div className="text-3xl font-black">{metal.name}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm opacity-60 font-bold uppercase mb-1">Live Price</div>
                      <div className="text-4xl font-bold">${metal.price}</div>
                    </div>
                    <div className={`px-4 py-2 rounded-full font-bold text-sm bg-white/20 backdrop-blur-md ${metal.isNegative ? 'text-red-200' : 'text-green-200'}`}>
                      {metal.change}
                    </div>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metals List Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-12">
            <input 
              type="text" 
              placeholder="Search Metals & Energies..." 
              className="w-full py-4 px-12 rounded-2xl border border-gray-100 focus:outline-none focus:border-primary transition-all text-lg shadow-sm"
            />
            <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {metalsList.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-400 uppercase font-medium">{item.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${item.price}</div>
                  <div className={`text-sm font-bold ${item.isNegative ? 'text-primary' : 'text-green-500'}`}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors">
              See all commodities <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Trade Metals Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">SAFE HAVEN</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Premium <span className="text-primary">Commodity Trading</span> <br /> Infrastructure
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Safe-Haven Assets', desc: 'Protect your wealth during market volatility with Gold and Silver trading.' },
                  { title: 'Global Energy Demand', desc: 'Trade Brent and WTI Crude Oil to capitalize on global economic trends.' },
                  { title: 'Institutional Execution', desc: 'Benefit from ultra-fast execution and deep liquidity on all metals and energies.' },
                  { title: 'Flexible Contract Sizes', desc: 'Trade with sizes that suit your strategy, from micro lots to institutional volumes.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/gold-bars/800/600" 
                  alt="Gold Trading" 
                  className="rounded-[2rem] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start Trading <br /> Metals & Energies
            </h2>
            <p className="text-xl opacity-90">
              Diversify your portfolio with REVO CAPITAL. Access global commodity markets with a trusted broker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl">
                Open Live Account <ArrowUpRight size={20} />
              </button>
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                Try Demo Account <ArrowRight size={20} />
              </button>
            </div>
          </div>
          {/* Abstract Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>

      {/* Account Steps Section (Reused) */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open Your Trading Account <br /> & <span className="text-primary">Start Investing Today</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tell us about yourself', desc: 'Fill the welcome form & Submit your KYC from given list' },
              { step: '02', title: 'Welcome to Platform', desc: 'Find your credentials to access CRM.' },
              { step: '03', title: 'Choose your Account', desc: 'Select your account type that suits your trading pattern' },
              { step: '04', title: 'Start trading with us', desc: 'Check your email for credentials and Start your journey' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section (Reused) */}
      <section className="py-14 lg:py-16 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="lg:w-1/2 space-y-8">
            <span className="text-primary font-bold uppercase tracking-widest">TRADING PLATFORM</span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Trade Smarter with the <br /> <span className="text-primary">Right Platform</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Low Fixed Spreads & Negative Balance Protection for a seamless trading experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Single Click Trading.', 'Custom Trading Templates.', 'Available on iOS, Android & Windows.', 'Preinstalled Indicators.'].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <span className="text-gray-300 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-gray-800 p-4 rounded-3xl border border-white/10 shadow-2xl">
              <img src="https://picsum.photos/seed/platform-metals/800/600" alt="Platform" className="rounded-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
