import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Droplets,
  ExternalLink,
  FileText,
  Gem,
  Network,
  Star,
  Sun,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhyTradeRevoSection } from '../components/WhyTradeRevoSection';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';
import { METALS_CFD_ROWS, type MetalsSpecRow } from '../data/metalsCfdTable';

function MetalChartIcon({ variant }: { variant: MetalsSpecRow['icon'] }) {
  const Icon = variant === 'sun' ? Sun : Network;
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white"
      aria-hidden
    >
      <Icon size={20} strokeWidth={2.2} />
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

function MetalsCfdSpecsTable({ rows }: { rows: MetalsSpecRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Symbol</th>
            <th className="px-4 py-3 font-bold text-gray-900 lg:px-5">Currency Base</th>
            <th className="px-4 py-3 text-center font-bold text-gray-900 lg:px-5">Margin</th>
            <th className="px-4 py-3 text-right font-bold text-gray-900 lg:px-5">Swap Long</th>
            <th className="px-4 py-3 text-right font-bold text-gray-900 lg:px-5">Swap Short</th>
            <th className="px-4 py-3 text-right font-bold text-gray-900 lg:px-5">Spread</th>
            <th className="w-12 px-2 py-3 lg:w-14" aria-label="Expand row" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.symbol} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-4 align-middle lg:px-5">
                <div className="flex items-center gap-3">
                  <MetalChartIcon variant={row.icon} />
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900">{row.symbol}</div>
                    <div className="text-xs text-gray-500">{row.label}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 align-middle font-medium text-gray-900 lg:px-5">{row.base}</td>
              <td className="px-4 py-4 text-center align-middle text-gray-900 lg:px-5">{row.margin}</td>
              <td className="px-4 py-4 text-right align-middle tabular-nums text-gray-900 lg:px-5">
                {row.swapLong}
              </td>
              <td className="px-4 py-4 text-right align-middle tabular-nums text-gray-900 lg:px-5">
                {row.swapShort}
              </td>
              <td className="px-4 py-4 text-right align-middle tabular-nums text-gray-900 lg:px-5">
                {row.spread}
              </td>
              <td className="px-2 py-4 align-middle text-center text-gray-400">
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

      {/* Precious metals specs table */}
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Precious Metals Trading</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Our range for trading precious metals includes the base metals gold, silver, palladium, platinum and
              copper, which we offer at attractive prices. Precious metals provide a good basis for diversifying a
              portfolio with Shares, Indices and bonds.
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">Metals</h3>
            <DownloadPdfLink />
          </div>

          <MetalsCfdSpecsTable rows={METALS_CFD_ROWS} />

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-gray-600">
            <p>In addition, they can reduce major market fluctuations as an admixture in the portfolio.</p>
            <p>Precious metals are often used as an investment in uncertain times.</p>
            <p>
              Especially in an environment characterised by rising inflation, precious metals offer a certain stability of
              value.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trade Metals Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">SAFE HAVEN</span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Premium <span className="text-primary">Commodity Trading</span> <br /> Infrastructure
          </h2>
          <div className="space-y-8">
            {[
              { title: 'Safe-Haven Assets', desc: 'Protect your wealth during market volatility with Gold and Silver trading.' },
              { title: 'Global Energy Demand', desc: 'Trade Brent and WTI Crude Oil to capitalize on global economic trends.' },
              { title: 'Institutional Execution', desc: 'Benefit from ultra-fast execution and deep liquidity on all metals and energies.' },
              { title: 'Flexible Contract Sizes', desc: 'Trade with sizes that suit your strategy, from micro lots to institutional volumes.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 shadow-sm">
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

      <WhyTradeRevoSection />
      <Footer />
    </div>
  );
};
