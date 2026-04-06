import React from 'react';
import {ArrowUpRight, ChevronDown, ExternalLink, FileText} from 'lucide-react';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {WhyTradeRevoSection} from '../components/WhyTradeRevoSection';
import {MarketTabs} from '../components/MarketTabs';
import {TopContactBar} from '../components/TopContactBar';
import {
  CASH_INDICES_ROWS,
  FUTURE_INDICES_ROWS,
  type IndicesSpecRow,
} from '../data/indicesPairsTables';

function IndicesChartIcon() {
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
        <path d="M3 17 8 11l4 4 9-9" />
        <path d="M14 7h7v7" />
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

function IndicesSpecsTable({rows}: {rows: IndicesSpecRow[]}) {
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
                  <IndicesChartIcon />
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

export const IndicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopContactBar className="hidden lg:block" />
      <Navbar />

      <section className="relative overflow-hidden bg-white py-14 text-center lg:py-16">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">MARKETS</span>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-7xl">
            Trade Global <span className="text-primary">Indices</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600">
            Speculate on the performance of the World&apos;s Stock Markets. Access Major Global Indices with
            competitive Spreads and flexible Leverage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="btn-primary flex items-center gap-2 rounded-full px-10 py-4 font-bold"
            >
              Open Live Account <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary" />
        </div>
      </section>

      <MarketTabs initialTab="Indices" />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Cash Future Indices Trading
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg">
            A stock index is a statistical measure designed to track the performance of a basket of related stocks.
            Trade Cash Indices for tight Spreads and flexible sizing, or Futures for standardized contracts on major
            benchmarks.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-14 px-4 lg:mt-14 lg:space-y-16 lg:px-6">
          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold text-gray-900 lg:text-xl">Cash Indices</h3>
              <DownloadPdfLink />
            </div>
            <IndicesSpecsTable rows={CASH_INDICES_ROWS} />
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-bold text-gray-900 lg:text-xl">Future Indices</h3>
              <DownloadPdfLink />
            </div>
            <IndicesSpecsTable rows={FUTURE_INDICES_ROWS} />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 lg:py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary p-12 text-center text-white lg:p-20">
          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
              Ready to Trade the <br /> World&apos;s Markets?
            </h2>
            <p className="text-xl opacity-90">
              Join REVO CAPITAL today and start trading global Indices with a trusted, award-winning broker.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-primary shadow-xl transition-all hover:bg-gray-100"
              >
                Open Live Account <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />
        </div>
      </section>

      <WhyTradeRevoSection />
      <Footer />
    </div>
  );
};
