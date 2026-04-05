import React from 'react';
import {CheckCircle2} from 'lucide-react';

const BENEFITS = [
  {
    title: 'Deep Liquidity',
    desc: 'Execute large orders with minimal slippage across global markets.',
  },
  {
    title: 'Competitive Spreads',
    desc: 'Trade with some of the tightest Spreads in the industry, starting from 0.4 points.',
  },
  {
    title: 'Flexible Leverage',
    desc: 'Maximize your market exposure with Leverage up to 20:1 on major instruments.',
  },
  {
    title: 'No Commissions',
    desc: 'Transparent pricing with zero commission fees on all account types.',
  },
] as const;

/** Sits above Footer (Start Trading in 3 Simple Steps) on market pages */
export const WhyTradeRevoSection = () => (
  <section className="bg-gray-50 py-14 lg:py-16">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">BENEFITS</span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Why Trade with <br /> <span className="text-primary">REVO CAPITAL?</span>
          </h2>
          <div className="space-y-6">
            {BENEFITS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
                  <CheckCircle2 className="text-primary" size={24} aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="/images/logos/fav-icon.svg"
            alt="Revo Capital"
            className="h-auto w-full max-w-lg object-contain"
            width={734}
            height={491}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);
