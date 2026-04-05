import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Smartphone, Globe, ArrowRight, Zap } from 'lucide-react';

export const Platforms = () => {
  const platforms = [
    { name: 'Revo Trader', desc: 'Our proprietary platform designed for professional traders.', icon: <Monitor size={32} /> },
    { name: 'cTrader', desc: 'The industry-standard platform for ECN trading and STP execution.', icon: <Smartphone size={32} /> },
    { name: 'MT4', desc: 'The world\'s most popular trading platform for automated trading.', icon: <Globe size={32} /> },
    { name: 'TradingView', desc: 'Advanced charting and social trading integration.', icon: <ArrowRight size={32} /> },
  ];

  return (
    <section className="pt-10 pb-14 lg:pt-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Trade on the world's <br />
              <span className="text-primary">most powerful platforms</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a beginner or a professional, we have the right platform for you. Experience lightning-fast execution and advanced charting tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {platforms.map((platform) => (
                <div key={platform.name} className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative isolate lg:pl-2">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-linear-to-tr from-primary/12 via-primary/4 to-transparent blur-3xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)]">
              <img
                src="/images/logos/right-section.svg"
                alt="Trading Platform"
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 max-w-[min(100%,280px)] rounded-2xl border border-gray-200/70 bg-white/90 p-5 shadow-lg shadow-gray-900/6 backdrop-blur-md sm:-bottom-6 sm:-left-5 sm:max-w-xs sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Zap size={22} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900">Execution Speed</div>
                  <div className="text-xs text-gray-500">Average 0.015s</div>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
