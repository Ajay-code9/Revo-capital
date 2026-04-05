import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Star, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ShieldCheck,
  Award,
  Zap,
  Smartphone,
  Globe,
  Monitor,
  TrendingUp,
  BarChart3,
  Clock,
  Bitcoin,
  Coins,
  LayoutGrid,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';

// --- Shared Components for Forex Page ---

const RiskWarningBar = () => (
  <div className="bg-[#F8F9FA] border-b border-gray-200 py-2 px-4 text-[11px] text-gray-500 leading-tight text-center lg:text-left">
    <div className="max-w-7xl mx-auto">
      CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 65% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
    </div>
  </div>
);

export const ForexPage = () => {
  const topPairs = [
    { name: 'EURUSD', price: '1.151685', change: '-0.23%', isNegative: true, icon: '🇪🇺🇺🇸' },
    { name: 'GBPUSD', price: '1.31961', change: '-0.28%', isNegative: true, icon: '🇬🇧🇺🇸' },
    { name: 'USDJPY', price: '159.673', change: '0.02%', isNegative: false, icon: '🇺🇸🇯🇵' },
    { name: 'EURGBP', price: '0.87249', change: '-0.07%', isNegative: true, icon: '🇪🇺🇬🇧' },
  ];

  const forexList = [
    { name: 'USDTRY', price: '44.58555', change: '0.07%', isNegative: false, icon: '🇺🇸🇹🇷' },
    { name: 'AUDNOK', price: '6.72568', change: '-0.38%', isNegative: true, icon: '🇦🇺🇳🇴' },
    { name: 'USDCAD', price: '1.394525', change: '0.17%', isNegative: false, icon: '🇺🇸🇨🇦' },
    { name: 'NZDJPY', price: '90.871', change: '-0.51%', isNegative: true, icon: '🇳🇿🇯🇵' },
    { name: 'NZDUSD', price: '0.56917', change: '-0.56%', isNegative: true, icon: '🇳🇿🇺🇸' },
    { name: 'USDCZK', price: '21.28985', change: '0.05%', isNegative: false, icon: '🇺🇸🇨🇿' },
    { name: 'USDMXN', price: '17.9001', change: '0.15%', isNegative: false, icon: '🇺🇸🇲🇽' },
    { name: 'USDPLN', price: '3.71365', change: '0.11%', isNegative: false, icon: '🇺🇸🇵🇱' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <RiskWarningBar />
      <TopContactBar className="hidden lg:block" />
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">TRADE</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Forex Trading on CFD at <span className="text-primary">REVO CAPITAL</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Access the world's largest market and speculate on the currency price movements
          </p>
        </div>
      </section>

      <MarketTabs initialTab="Forex" />

      {/* Search + Forex List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-12">
            <input 
              type="text" 
              placeholder="Search Forex" 
              className="w-full py-4 px-12 rounded-full border border-gray-200 focus:outline-none focus:border-primary transition-all text-lg"
            />
            <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {forexList.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-6 bg-white border border-gray-50 rounded-2xl hover:shadow-sm transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-400 uppercase">{item.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{item.price}</div>
                  <div className={`text-sm font-bold ${item.isNegative ? 'text-primary' : 'text-green-500'}`}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <a href="#" className="inline-flex items-center gap-1 font-bold text-gray-900 hover:text-primary transition-colors">
              See all instruments <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Blue Banner Section (Get Started with Forex) - Using REVO CAPITAL Primary Red */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-12 lg:p-20 relative overflow-hidden text-white">
          <div className="relative z-10 lg:w-1/2 space-y-8">
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">MARKETS</span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get started <br />
              with <span className="text-white">Forex</span>
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Place trades on some of the industry's most popular forex pairs including EURUSD, GBPUSD and USDJPY with very competitive spreads.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              With over 70 different currency pairs to choose from including major, minor and exotics, you'll always have good options to choose from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                Try Demo Account <ArrowRight size={20} />
              </button>
            </div>
          </div>
          {/* Abstract 3D Symbols Background */}
          <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:flex items-center justify-center opacity-20 pointer-events-none">
             <div className="text-[20rem] font-black select-none">€£$</div>
          </div>
        </div>
      </section>

      {/* Platforms Banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-[#0A1128] rounded-[2rem] p-12 lg:p-20 relative overflow-hidden text-white">
          <div className="relative z-10 lg:w-1/2 space-y-8">
            <span className="text-sm font-bold uppercase tracking-widest opacity-60">PLATFORMS</span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Trade with <span className="text-primary">bigger volume</span> <br />
              on any platform
            </h2>
            <p className="text-lg opacity-80">
              Trade it on REVO Trader, TradingView, MetaTrader 4 or cTrader.
            </p>
            <div className="flex flex-wrap gap-8 items-center py-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-2xl">R</div>
              <div className="w-12 h-12 bg-red-600 rounded-full" />
              <div className="w-12 h-12 bg-green-600 rounded-lg" />
              <div className="w-12 h-12 bg-blue-600 rounded-md" />
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2">
                <Smartphone size={20} /> App Store
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2">
                <Smartphone size={20} /> Google Play
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2">
                Trade on TradingView
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
            <img 
              src="https://picsum.photos/seed/forex-platform/800/800" 
              alt="Platform Mockup" 
              className="h-full w-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Why REVO CAPITAL Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">WHY REVO CAPITAL?</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Trading <span className="text-primary">made simple</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">Why the Pros prefer REVO CAPITAL?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#F8F9FA] rounded-[2rem] p-12 flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2">
                <img src="https://picsum.photos/seed/why1/400/400" alt="Feature" className="rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Powerful & competitive</h3>
                <p className="text-gray-600 leading-relaxed">
                  Industry leading conditions designed to take your trading to the next level.
                </p>
              </div>
            </div>
            <div className="bg-[#EBF5FF] rounded-[2rem] p-12 flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-1/2">
                <img src="https://picsum.photos/seed/why2/400/400" alt="Feature" className="rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Competitive spreads from as low as 0.1 pips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>No hidden cost. Full transparency.</li>
                  <li>Promotions, bonuses & more.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#003566] rounded-[2rem] p-12 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold leading-tight">
                  Trusted and Scandinavian to the core. At the cutting edge of fintech.
                </h3>
                <p className="opacity-80">
                  Experience a new way of trading, where your needs come first.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-20">
                <Globe size={300} />
              </div>
            </div>
            <div className="bg-[#001D3D] rounded-[2rem] p-12 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold">We are a Multi Award Winning broker</h3>
                <p className="opacity-80">
                  We take pride in what we have achieved, it keeps us motivated.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-center gap-4">
                  <Award size={48} className="text-yellow-500" />
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">Best Forex Trading Platform Global 2022</div>
                </div>
                <div className="flex items-center gap-4">
                  <Award size={48} className="text-yellow-500" />
                  <div className="text-xs uppercase font-bold tracking-widest opacity-60">Best Forex Trading Platform Europe 2022</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trustpilot Bar */}
          <div className="mt-8 bg-[#001D3D] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-[#00b67a] flex items-center justify-center">
                  <Star size={20} className="text-white fill-current" />
                </div>
              ))}
            </div>
            <div className="text-2xl font-bold">We are rated 4.2 out of 5</div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Star size={32} className="text-[#00b67a] fill-current" /> Trustpilot
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Bar */}
      <div className="bg-[#1A1A1A] py-6 text-center text-white font-bold">
        Need help? Get in touch with us <a href="#" className="underline hover:text-primary transition-colors">here</a>
      </div>

      <Footer />
    </div>
  );
};
