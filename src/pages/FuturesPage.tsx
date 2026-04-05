import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhyTradeRevoSection } from '../components/WhyTradeRevoSection';
import { MarketTabs } from '../components/MarketTabs';
import { TopContactBar } from '../components/TopContactBar';
import { FUTURES_CFD_ROWS } from '../data/futuresCfdTable';
import type { IndicesSpecRow } from '../data/indicesPairsTables';

function FuturesChartIcon() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary text-white"
      aria-hidden
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <path d="M8 12V8a4 4 0 0 1 8 0v4" />
        <rect x="6" y="12" width="12" height="8" rx="1" />
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

function FuturesCfdSpecsTable({ rows }: { rows: IndicesSpecRow[] }) {
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
                  <FuturesChartIcon />
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

export const FuturesPage = () => {

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
            Trade <span className="text-primary">Futures</span> CFDs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-10"
          >
            Speculate on the future price of Commodities, energies, and more. Trade global Futures with competitive conditions and transparent expiry dates.
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

      {/* CFD Futures specs table (Indices-style) */}
      <section className="bg-white pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">CFD Futures Trading</h2>
          <p className="mb-10 max-w-4xl text-lg leading-relaxed text-gray-600">
            REVO CAPITAL offers futures CFDs based on futures contracts that are traded, for example, on the Chicago
            Mercantile Exchange (CME). Furthermore, there is no delivery of the underlying asset with futures CFDs.
          </p>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">Futures</h3>
            <DownloadPdfLink />
          </div>

          <FuturesCfdSpecsTable rows={FUTURES_CFD_ROWS} />

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-gray-600">
            <p>Futures are suitable for hedging a portfolio or speculating on price movements.</p>
            <p>
              REVO CAPITAL offers you professional access to Futures CFDs on Indices, Commodities, fuels, precious metals
              and bonds.
            </p>
            <p>Compared to spot CFDs, futures CFDs are ideal instruments for handling larger trading volumes.</p>
          </div>
        </div>
      </section>

      {/* Expiry Info Section */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">TRANSPARENCY</span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Clear Expiry Dates & <br /> <span className="text-primary">Transparent Trading</span>
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            Futures trading involves contracts with specific expiration dates. At REVO CAPITAL, we provide clear
            information about contract expiries so you can manage your positions effectively.
          </p>
          <div className="space-y-8">
            {[
              { title: 'Automatic Rollover', desc: 'We handle contract transitions smoothly to ensure continuous trading.' },
              { title: 'Expiry Notifications', desc: 'Receive alerts before your futures contracts reach their expiration date.' },
              { title: 'No Hidden Fees', desc: 'Trade futures with transparent pricing and no unexpected rollover costs.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Calendar className="text-primary" size={24} aria-hidden />
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
              Start Trading <br /> Futures Today
            </h2>
            <p className="text-xl opacity-90">
              Access global futures markets with a trusted, award-winning broker. Open your account in minutes.
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
