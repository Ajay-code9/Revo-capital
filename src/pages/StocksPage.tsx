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
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';

const RiskWarningBar = () => (
  <div className="bg-[#F8F9FA] border-b border-gray-200 py-2 px-4 text-[11px] text-gray-500 leading-tight text-center lg:text-left">
    <div className="max-w-7xl mx-auto">
      CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 65% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
    </div>
  </div>
);

const StockTicker = () => {
  const stocks = [
    { name: 'AAPL', price: '185.45', change: '+1.25%', isNegative: false },
    { name: 'MSFT', price: '415.12', change: '+0.85%', isNegative: false },
    { name: 'TSLA', price: '202.45', change: '-2.15%', isNegative: true },
    { name: 'NVDA', price: '824.15', change: '+3.45%', isNegative: false },
    { name: 'AMZN', price: '178.12', change: '+1.12%', isNegative: false },
    { name: 'META', price: '505.45', change: '-0.45%', isNegative: true },
    { name: 'GOOGL', price: '145.12', change: '+0.75%', isNegative: false },
    { name: 'NFLX', price: '605.45', change: '+1.45%', isNegative: false },
  ];

  return (
    <div className="bg-gray-900 py-3 overflow-hidden whitespace-nowrap relative">
      <div className="flex animate-marquee">
        {[...stocks, ...stocks].map((stock, idx) => (
          <div key={idx} className="inline-flex items-center gap-4 px-8 border-r border-white/10">
            <span className="text-white font-bold">{stock.name}</span>
            <span className="text-gray-400 font-medium">${stock.price}</span>
            <span className={`font-bold flex items-center gap-1 ${stock.isNegative ? 'text-primary' : 'text-green-500'}`}>
              {stock.isNegative ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
              {stock.change}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export const StocksPage = () => {
  const stocksList = [
    { name: 'Apple Inc.', symbol: 'AAPL', price: '185.45', change: '+1.25%', isNegative: false, icon: '🍎' },
    { name: 'Microsoft Corp.', symbol: 'MSFT', price: '415.12', change: '+0.85%', isNegative: false, icon: '💻' },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: '178.12', change: '+1.12%', isNegative: false, icon: '📦' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '202.45', change: '-2.15%', isNegative: true, icon: '⚡' },
    { name: 'Meta Platforms', symbol: 'META', price: '505.45', change: '-0.45%', isNegative: true, icon: '♾️' },
    { name: 'NVIDIA Corp.', symbol: 'NVDA', price: '824.15', change: '+3.45%', isNegative: false, icon: '🎮' },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: '145.12', change: '+0.75%', isNegative: false, icon: '🔍' },
    { name: 'Netflix Inc.', symbol: 'NFLX', price: '605.45', change: '+1.45%', isNegative: false, icon: '🎬' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <StockTicker />
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
            Trade Global <span className="text-primary">Stocks</span> CFDs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          >
            Invest in the world's most successful companies. Trade CFDs on hundreds of global stocks with competitive spreads and flexible leverage.
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

      <MarketTabs initialTab="Shares" />

      {/* Stocks Table Section */}
      <section className="pb-14 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10 relative">
            <input 
              type="text" 
              placeholder="Search Stocks..." 
              className="w-full py-4 px-12 rounded-2xl border border-gray-100 focus:outline-none focus:border-primary transition-all text-lg shadow-sm"
            />
            <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Stocks Table */}
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Company</th>
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Symbol</th>
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Price</th>
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Change</th>
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stocksList.map((stock) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{stock.icon}</span>
                        <span className="font-bold text-gray-900">{stock.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-500 font-bold">{stock.symbol}</td>
                    <td className="px-8 py-6 text-right font-bold text-gray-900">${stock.price}</td>
                    <td className={`px-8 py-6 text-right font-bold flex items-center justify-end gap-1 ${stock.isNegative ? 'text-primary' : 'text-green-500'}`}>
                      {stock.isNegative ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
                      {stock.change}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary transition-all">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Looking for more stocks?</p>
            <button className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary transition-colors">
              View all 1200+ instruments <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Trade Stocks Section */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">INVESTMENT</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Own Your Future with <br /> <span className="text-primary">Global Stock Trading</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Global Market Access', desc: 'Trade stocks from major exchanges including NYSE, NASDAQ, and LSE.' },
                  { title: 'Flexible Leverage', desc: 'Maximize your trading potential with leverage up to 5:1 on major stocks.' },
                  { title: 'Dividend Payments', desc: 'Receive dividend adjustments on your long stock CFD positions.' },
                  { title: 'No Hidden Fees', desc: 'Trade stocks with transparent pricing and competitive commission structures.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
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
                  src="https://picsum.photos/seed/stocks-trading/800/600" 
                  alt="Stocks Trading" 
                  className="rounded-[2rem] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start Trading <br /> Global Stocks
            </h2>
            <p className="text-xl opacity-90">
              Join REVO CAPITAL today and start trading stocks with a trusted, award-winning broker.
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
              <img src="https://picsum.photos/seed/platform-stocks/800/600" alt="Platform" className="rounded-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
