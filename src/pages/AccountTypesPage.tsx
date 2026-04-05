import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  ShieldCheck,
  Zap,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TopContactBar } from '../components/TopContactBar';

export const AccountTypesPage = () => {
  const accountTypes = [
    {
      name: 'Standard Account',
      minDeposit: '$25',
      recurringDeposit: '$25',
      spread: 'from 1.8',
      commission: 'N/A',
      leverage: 'Up to 400',
      isPopular: false,
    },
    {
      name: 'Raw+ Account',
      minDeposit: '$100',
      recurringDeposit: '$100',
      spread: 'from 1.2',
      commission: 'N/A',
      leverage: 'Up to 200',
      isPopular: true,
    },
    {
      name: 'Elite Account',
      minDeposit: '$500',
      recurringDeposit: '$100',
      spread: 'from 0.3',
      commission: '10 USD',
      leverage: 'Up to 100',
      isPopular: false,
    }
  ];

  const commonSpecs = [
    { label: 'Base Currency', value: 'USD' },
    { label: 'Min Internal Transfer', value: '$1' },
    { label: 'Margin Call', value: '50%' },
    { label: 'Stop Out', value: '20%' },
    { label: 'Asset Classes', value: 'Forex, Indices, Metals, Energies, Stocks CFD, Crypto, Futures' },
    { label: 'Max Open Positions', value: '100 Positions' },
    { label: 'Max Lot Size', value: '100' },
    { label: 'Min Lot Size', value: '0.01' },
    { label: 'Negative Balance Protection', value: 'Yes' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopContactBar className="hidden lg:block" />
      <Navbar />

      {/* Hero Section */}
      <section className="py-14 lg:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block"
          >
            ACCOUNT TYPES
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Tailored Accounts for <span className="text-primary">Every Trader</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          >
            Whether you're a beginner, professional, or institutional trader, Revo Capital offers account types designed to match your trading style. Benefit from low Spreads, fast execution, and flexible conditions—trade the way you want.
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
            <button className="bg-gray-50 border border-gray-200 text-gray-900 px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
              Open Demo Account <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary rounded-full" />
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accountTypes.map((acc, idx) => (
              <motion.div 
                key={acc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-sm border ${acc.isPopular ? 'border-primary ring-4 ring-primary/5' : 'border-gray-100'} relative flex flex-col`}
              >
                {acc.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{acc.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{acc.minDeposit}</span>
                    <span className="text-gray-400 text-sm font-medium">Min Deposit</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500">Min Recurring Deposit</span>
                    <span className="font-bold text-gray-900">{acc.recurringDeposit}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500">Minimum Spread</span>
                    <span className="font-bold text-gray-900">{acc.spread}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500">Commission</span>
                    <span className="font-bold text-gray-900">{acc.commission}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-50">
                    <span className="text-gray-500">Leverage</span>
                    <span className="font-bold text-gray-900">{acc.leverage}</span>
                  </div>
                  
                  {/* Common Specs */}
                  {commonSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 border-b border-gray-50">
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="font-bold text-gray-900 text-sm text-right max-w-[150px]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${acc.isPopular ? 'btn-primary text-white' : 'bg-gray-900 text-white hover:bg-black'}`}>
                  Get Started <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center bg-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Unlock global financial markets with a single account. Start trading today and grow your investment portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
                Open Live Account <ArrowUpRight size={20} />
              </button>
              <button className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                Open Demo Account <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Abstract Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>

      <Footer />
    </div>
  );
};
