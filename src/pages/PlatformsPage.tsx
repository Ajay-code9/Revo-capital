import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Globe,
  Smartphone,
  Apple,
  Zap,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TopContactBar } from '../components/TopContactBar';

export const PlatformsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-14 lg:py-16 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                Powerful Trading Technology, <br />
                <span className="text-primary">Built for Performance</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="btn-primary px-10 py-4 rounded-full font-bold flex items-center gap-3">
                  open Live account
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
                <button className="bg-white border-2 border-gray-100 hover:border-primary text-gray-900 px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3">
                  open demo account
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0" />
      </section>

      {/* Platform Intro Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                mt5
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">MetaTrader 5</h2>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-8">
                Advanced Trading. Unmatched Precision. Total Control.
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  MetaTrader 5 (MT5) at Revo Capital Markets delivers a professional-grade trading experience built for speed, precision, and total flexibility. Whether you're just starting out or managing a diverse portfolio, MT5 equips you with powerful tools—real-time market data, customizable charts, and seamless multi-asset access.
                </p>
                <p>
                  Trade Forex, Shares, Commodities, Indices, and Crypto—all in one platform, without restrictions. MT5 supports automated strategies, in-depth technical analysis, and advanced order execution to help you refine your edge and trade with confidence.
                </p>
                <p>
                  Fully compatible across desktop, mobile, and web, MT5 with Revo Capital Markets keeps you connected to global opportunities with institutional-grade infrastructure, competitive pricing, and 100% STP execution.
                </p>
              </div>
              <button className="mt-10 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3">
                Download MetaTrader 5
                <ArrowUpRight size={20} />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-12">
                <img 
                  src="https://picsum.photos/seed/mt5/800/800" 
                  alt="MetaTrader 5 Platform" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Zap className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Execution Speed</div>
                  <div className="text-xl font-bold text-gray-900">0.05 Seconds</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features (Facts Section) */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">MetaTrader 5 Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '10,000+ Products',
              '400:1 Leverage',
              'Raw+Commission or All-In Price Feed',
              '0.01 Minimum Lot Size',
              'No Trading Restrictions',
              '100% STP Execution'
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center gap-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="text-lg font-bold text-gray-900">{fact}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">System Requirements</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The MetaTrader 5 Client Terminal requires Windows 7 or higher. It is also possible to run this software on a Mac OSX.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                <Monitor size={32} className="text-gray-400" />
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                <Apple size={32} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Options Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Download MetaTrader 5</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Access your trading account from any device with our multi-platform MetaTrader 5 solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Desktop', 
                desc: 'Windows & Mac', 
                icon: <Monitor size={32} />, 
                btn: 'Download for Desktop' 
              },
              { 
                title: 'Web', 
                desc: 'Browser Trading', 
                icon: <Globe size={32} />, 
                btn: 'Launch WebTrader' 
              },
              { 
                title: 'Apple', 
                desc: 'iOS & iPadOS', 
                icon: <Apple size={32} />, 
                btn: 'App Store' 
              },
              { 
                title: 'Android', 
                desc: 'Android Devices', 
                icon: <Smartphone size={32} />, 
                btn: 'Google Play' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 text-center flex flex-col items-center group hover:shadow-2xl hover:shadow-gray-200/50 transition-all"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-8">{item.desc}</p>
                <button className="w-full py-4 bg-gray-50 group-hover:bg-primary group-hover:text-white text-gray-900 font-bold rounded-xl transition-all">
                  {item.btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 lg:py-16 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Unlock global financial markets with a single account. Start trading today and grow your investment portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                open live account
              </button>
              <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                open demo account
              </button>
            </div>
          </motion.div>
        </div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </section>

      <Footer />
    </div>
  );
};
