import React, {useMemo, useState} from 'react';
import {ArrowRight, ChevronDown, ExternalLink, FileText} from 'lucide-react';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {WhyTradeRevoSection} from '../components/WhyTradeRevoSection';
import {MarketTabs} from '../components/MarketTabs';
import {TopContactBar} from '../components/TopContactBar';
import {
  FOREX_PAIR_TABS,
  type ForexPairCategory,
  forexPairIconLines,
} from '../data/forexPairsTables';

export const ForexPage = () => {
  const [pairTab, setPairTab] = useState<ForexPairCategory>('majors');

  const activeTabConfig = useMemo(
    () => FOREX_PAIR_TABS.find((t) => t.id === pairTab) ?? FOREX_PAIR_TABS[0],
    [pairTab],
  );

  return (
    <div className="min-h-screen bg-white font-sans">
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

      {/* Trade Forex Online — majors table (reference layout) */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 lg:max-w-6xl lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">Trade Forex Online</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg">
              With an estimated average daily turnover volume of USD 7 trillion, the foreign exchange market is the
              world&apos;s largest financial market.
            </p>
          </div>

          <div
            className="mt-8 flex w-full justify-center sm:mt-10"
            role="tablist"
            aria-label="Forex pair category"
          >
            <div className="inline-flex w-full max-w-lg rounded-full bg-gray-100 p-1 sm:max-w-xl lg:max-w-2xl">
              {FOREX_PAIR_TABS.map((tab) => {
                const selected = pairTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setPairTab(tab.id)}
                    className={`min-w-0 flex-1 rounded-full px-2 py-2.5 text-center text-[11px] font-semibold transition-all sm:px-3 sm:text-sm ${
                      selected
                        ? 'bg-white text-primary shadow-md shadow-black/8'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {tab.segmentLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold text-gray-900 lg:text-xl">{activeTabConfig.tableHeading}</h3>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50 sm:self-auto"
            >
              <FileText size={18} className="shrink-0 text-gray-600" aria-hidden />
              Download PDF
              <ExternalLink size={16} className="shrink-0 text-gray-500" aria-hidden />
            </a>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm" role="tabpanel">
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
                {activeTabConfig.rows.map((row) => (
                  <tr key={row.symbol} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-4 py-4 align-middle lg:px-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded bg-primary text-center font-bold leading-tight text-white ${row.icon ? 'text-[10px]' : 'text-[8px] sm:text-[9px]'}`}
                        >
                          {forexPairIconLines(row).map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </div>
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
              Place trades on some of the industry&apos;s most popular Forex pairs including EURUSD, GBPUSD and USDJPY with very competitive Spreads.
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

      <WhyTradeRevoSection />
      <Footer />
    </div>
  );
};
