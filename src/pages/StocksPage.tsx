import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhyTradeRevoSection } from '../components/WhyTradeRevoSection';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';
import { EQUITIES_CFD_ROWS } from '../data/equitiesCfdTable';
import type { IndicesSpecRow } from '../data/indicesPairsTables';

/** Red square, white bull-style mark (compact horns + head silhouette) */
function EquityBullIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white"
      aria-hidden
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
        <path
          d="M7 8.5 5.5 6l-1.2 1 1.4 1.2C4.8 9.8 4 11.8 4 14c0 3 3.5 5.5 8 5.5s8-2.5 8-5.5c0-2.2-.8-4.2-2.2-5.8L19.2 7 18 6l-1.5 2.5C15.5 7.8 13.9 7 12 7s-3.5.8-4.5 1.5L7 8.5Z"
          fill="currentColor"
          opacity={0.95}
        />
        <path
          d="M8.5 6.2c.6-.4 1.2-.7 2-.9M15.5 6.2c-.6-.4-1.2-.7-2-.9"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function DownloadPdfLink() {
  return (
    <a
      href="#"
      className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50 sm:self-auto"
    >
      <FileText size={18} className="shrink-0 text-gray-600" aria-hidden />
      Download PDF
      <ExternalLink size={16} className="shrink-0 text-gray-500" aria-hidden />
    </a>
  );
}

function EquitiesCfdSpecsTable({ rows }: { rows: IndicesSpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Symbol</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Currency Base</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Margin</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Swap Long</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Swap Short</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Spread</th>
            <th className="w-12 px-2 py-3 lg:w-14" aria-label="Expand row" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.symbol} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-4 align-middle lg:px-5">
                <div className="flex items-center gap-3">
                  <EquityBullIcon />
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900">{row.symbol}</div>
                    <div className="text-xs text-gray-500">{row.label}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 align-middle font-medium text-gray-900 lg:px-5">{row.base}</td>
              <td className="px-4 py-4 align-middle text-gray-900 lg:px-5">{row.margin}</td>
              <td className="px-4 py-4 align-middle tabular-nums text-gray-900 lg:px-5">{row.swapLong}</td>
              <td className="px-4 py-4 align-middle tabular-nums text-gray-900 lg:px-5">{row.swapShort}</td>
              <td className="px-4 py-4 align-middle tabular-nums text-gray-900 lg:px-5">{row.spread}</td>
              <td className="px-2 py-4 align-middle text-right text-gray-400">
                <button
                  type="button"
                  className="inline-flex rounded-md p-1 hover:bg-gray-100 hover:text-gray-700"
                  aria-label={`More details for ${row.symbol}`}
                >
                  <ChevronDown size={18} aria-hidden />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
  return (
    <div className="min-h-screen bg-white font-sans">
      <StockTicker />
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
            Invest in the world&apos;s most successful companies. Trade CFDs on hundreds of global Stocks with competitive Spreads and flexible Leverage.
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
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary rounded-full" />
        </div>
      </section>

      <MarketTabs initialTab="Shares" />

      {/* Equities specs table */}
      <section className="bg-white pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Trade Equities Online</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              We offer access to the world&apos;s largest and most popular stocks from the USA, Europe and Asia (Hong
              Kong). Select from +250 CFD Shares and experience a superior order execution with ultra competitive trading
              conditions as low as USD $ 0.25 cents commission charge per Tesla share.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">Equities</h3>
            <DownloadPdfLink />
          </div>

          <EquitiesCfdSpecsTable rows={EQUITIES_CFD_ROWS} />

          <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center text-gray-600">
            <p className="text-lg font-bold text-gray-900">Direct Market Access to Global Equity Markets</p>
            <p>
              Trading equities online means that you can gain the full exposure by speculating the price movements,
              without any physical ownership of the underlying trading instrument.
            </p>
            <p>
              REVO CAPITAL enables you to diversify your investment portfolio to all kinds of regions in the most
              convenient way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trade Stocks Section */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">INVESTMENT</span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Own Your Future with <br /> <span className="text-primary">Global Stock Trading</span>
          </h2>
          <div className="space-y-8">
            {[
              { title: 'Global Market Access', desc: 'Trade Shares from major exchanges including NYSE, NASDAQ, and LSE.' },
              { title: 'Flexible Leverage', desc: 'Maximize your trading potential with Leverage up to 5:1 on major Shares.' },
              { title: 'Dividend Payments', desc: 'Receive dividend adjustments on your long Share CFD positions.' },
              { title: 'No Hidden Fees', desc: 'Trade Shares with transparent pricing and competitive commission structures.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
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
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start Trading <br /> Global Stocks
            </h2>
            <p className="text-xl opacity-90">
              Join REVO CAPITAL today and start trading Shares with a trusted, award-winning broker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl">
                Open Live Account <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          {/* Abstract Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>

      <WhyTradeRevoSection />
      <Footer />
    </div>
  );
};
