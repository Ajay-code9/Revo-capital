import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Star, 
  Award, 
  Zap, 
  Globe, 
  Monitor, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  LayoutGrid, 
  ArrowUpRight,
  CheckCircle2,
  Bitcoin,
  Coins,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarketTabs } from '../components/MarketTabs';

const RiskWarningBar = () => (
  <div className="bg-[#F8F9FA] border-b border-gray-200 py-2 px-4 text-[11px] text-gray-500 leading-tight text-center lg:text-left">
    <div className="max-w-7xl mx-auto">
      CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 65% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
    </div>
  </div>
);

export const CryptoPage = () => {
  const topCryptos = [
    { name: 'BTCUSD', fullName: 'Bitcoin', price: '62,450.50', change: '+2.45%', isNegative: false, icon: <Bitcoin className="text-orange-500" /> },
    { name: 'ETHUSD', fullName: 'Ethereum', price: '3,450.12', change: '+1.85%', isNegative: false, icon: <Coins className="text-blue-500" /> },
    { name: 'SOLUSD', fullName: 'Solana', price: '135.45', change: '+5.12%', isNegative: false, icon: <Zap className="text-purple-500" /> },
    { name: 'XRPUSD', fullName: 'Ripple', price: '0.6245', change: '-0.45%', isNegative: true, icon: <Globe className="text-blue-400" /> },
  ];

  const cryptoList = [
    { name: 'LTCUSD', fullName: 'Litecoin', price: '85.45', change: '+0.15%', isNegative: false },
    { name: 'ADAUSD', fullName: 'Cardano', price: '0.5845', change: '-1.22%', isNegative: true },
    { name: 'DOTUSD', fullName: 'Polkadot', price: '8.12', change: '+2.45%', isNegative: false },
    { name: 'DOGEUSD', fullName: 'Dogecoin', price: '0.1452', change: '+10.45%', isNegative: false },
    { name: 'AVAXUSD', fullName: 'Avalanche', price: '42.15', change: '+3.12%', isNegative: false },
    { name: 'LINKUSD', fullName: 'Chainlink', price: '18.45', change: '-0.10%', isNegative: true },
    { name: 'MATICUSD', fullName: 'Polygon', price: '0.9845', change: '+1.45%', isNegative: false },
    { name: 'UNIUSD', fullName: 'Uniswap', price: '12.15', change: '-2.15%', isNegative: true },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <RiskWarningBar />
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
            Trade <span className="text-primary">Cryptocurrencies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          >
            Access the fast-growing crypto market with REVO CAPITAL. Trade Bitcoin, Ethereum, and other major altcoins with 24/7 market access and competitive spreads.
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

      <MarketTabs initialTab="Cryptocurrencies" />

      {/* Live Price Cards */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCryptos.map((crypto, idx) => (
              <motion.div 
                key={crypto.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {React.cloneElement(crypto.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${crypto.isNegative ? 'bg-red-50 text-primary' : 'bg-green-50 text-green-600'}`}>
                    {crypto.isNegative ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
                    {crypto.change}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900">{crypto.name}</h3>
                  <p className="text-sm text-gray-400 font-medium">{crypto.fullName}</p>
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-gray-900">${crypto.price}</div>
                </div>
                {/* Mini Trend Indicator Background */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50">
                  <div className={`h-full ${crypto.isNegative ? 'bg-primary' : 'bg-green-500'}`} style={{ width: '60%' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto List Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-12">
            <input 
              type="text" 
              placeholder="Search Cryptocurrencies..." 
              className="w-full py-4 px-12 rounded-2xl border border-gray-100 focus:outline-none focus:border-primary transition-all text-lg shadow-sm"
            />
            <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cryptoList.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <Coins size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-400 uppercase font-medium">{item.fullName}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${item.price}</div>
                  <div className={`text-sm font-bold flex items-center justify-end gap-1 ${item.isNegative ? 'text-primary' : 'text-green-500'}`}>
                    {item.isNegative ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors">
              See all crypto pairs <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Trade Crypto Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">ADVANTAGES</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Next-Gen <span className="text-primary">Crypto Trading</span> <br /> Experience
              </h2>
              <div className="space-y-6">
                {[
                  { title: '24/7 Trading', desc: 'The crypto market never sleeps. Trade your favorite digital assets any time, any day.' },
                  { title: 'Deep Liquidity', desc: 'Benefit from institutional-grade liquidity for fast execution on all crypto pairs.' },
                  { title: 'Secure & Regulated', desc: 'Trade with peace of mind on a platform that prioritizes security and transparency.' },
                  { title: 'Advanced Charting', desc: 'Use professional analysis tools to track crypto trends and execute precise trades.' }
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
              <div className="bg-gray-900 p-8 rounded-[3rem] shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Bitcoin className="text-white" />
                    </div>
                    <div className="text-white font-bold text-xl">Live Market Feed</div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex justify-between items-center">
                        <div className="w-24 h-4 bg-white/10 rounded-full" />
                        <div className="w-16 h-4 bg-green-500/20 rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                     <img src="https://picsum.photos/seed/crypto-chart/600/300" alt="Chart" className="rounded-xl opacity-60" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Ready to Join the <br /> Crypto Revolution?
            </h2>
            <p className="text-xl opacity-90">
              Start trading Bitcoin and other major cryptocurrencies with REVO CAPITAL. Secure, fast, and reliable.
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
              <img src="https://picsum.photos/seed/platform-crypto/800/600" alt="Platform" className="rounded-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
