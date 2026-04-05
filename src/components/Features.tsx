import React from 'react';
import {Headphones, Laptop, Smartphone} from 'lucide-react';

function BentoLaptopChartsVisual() {
  return (
    <div
      className="pointer-events-none relative mx-auto flex h-44 w-full max-w-[260px] items-end justify-center overflow-hidden pb-1"
      aria-hidden
    >
      <div className="absolute bottom-18 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-20">
        <div className="flex h-14 w-6 flex-col justify-end rounded-md bg-linear-to-t from-white/35 to-white/10 shadow-md shadow-black/40" />
        <div className="flex h-20 w-6 flex-col justify-end rounded-md bg-linear-to-t from-primary to-primary/60 shadow-md shadow-black/40" />
        <div className="flex h-16 w-6 flex-col justify-end rounded-md bg-linear-to-t from-white/30 to-white/8 shadow-md shadow-black/40" />
        <div className="flex h-12 w-6 flex-col justify-end rounded-md bg-linear-to-t from-primary/90 to-primary/50 shadow-md shadow-black/40" />
      </div>
      <Laptop
        className="relative z-10 h-28 w-28 text-primary drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:h-32 sm:w-32"
        strokeWidth={1.05}
      />
    </div>
  );
}

function BentoSupportVisual() {
  return (
    <div
      className="pointer-events-none relative mt-6 flex min-h-[200px] flex-1 items-center justify-center overflow-hidden px-1 pb-1 lg:mt-0 lg:min-h-[240px]"
      aria-hidden
    >
      <div className="absolute right-[6%] top-[10%] rounded-lg border border-white/40 bg-white/95 px-2 py-1 text-[10px] font-bold text-primary shadow-lg shadow-black/20">
        BUY
      </div>
      <div className="absolute bottom-[26%] left-[5%] rounded-lg border border-white/40 bg-white/95 px-2 py-1 text-[10px] font-bold text-primary shadow-lg shadow-black/20">
        SELL
      </div>
      <div className="relative flex items-end gap-3 sm:gap-4">
        <Laptop
          className="h-24 w-24 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:h-28 sm:w-28"
          strokeWidth={1.05}
        />
        <div className="relative mb-1 rounded-2xl border-2 border-white/85 bg-white/15 p-1.5 shadow-xl shadow-black/20 backdrop-blur-[2px]">
          <Smartphone className="h-20 w-20 text-white sm:h-24 sm:w-24" strokeWidth={1.1} />
        </div>
      </div>
      <Headphones
        className="absolute bottom-[16%] right-2 h-16 w-16 text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)] sm:right-5"
        strokeWidth={1.1}
      />
    </div>
  );
}

export const Features = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Why choose us
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
            Elevate{' '}
            <span className="bg-linear-to-r from-rose-500 via-primary to-red-900 bg-clip-text text-transparent">
              Your Trading Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Everything you need to succeed in the global markets.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Row 1 — wide left / narrow right */}
          <article className="relative flex min-h-[300px] flex-col overflow-hidden rounded-4xl bg-primary p-8 shadow-sm ring-1 ring-black/5 sm:min-h-[320px] sm:p-10 lg:col-span-7 lg:min-h-[340px] lg:flex-row lg:items-stretch lg:gap-8">
            <div className="relative z-10 flex flex-1 flex-col justify-center lg:min-w-0 lg:max-w-[min(100%,28rem)] xl:max-w-[32rem]">
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem] xl:text-[2.5rem]">
                Ultra-Low Latency
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg sm:leading-relaxed">
                Execute trades in milliseconds with our high-performance infrastructure.
              </p>
            </div>
            <div
              className="pointer-events-none relative mt-8 flex min-h-[160px] w-full shrink-0 items-center justify-center overflow-hidden sm:min-h-[180px] lg:mt-0 lg:min-h-0 lg:flex-1 lg:max-w-[min(48%,20rem)] xl:max-w-[22rem]"
              aria-hidden
            >
              <img
                src="/images/logos/Ultra-Low.svg"
                alt=""
                className="max-h-[200px] w-full max-w-full object-contain object-center drop-shadow-[0_16px_36px_rgba(0,0,0,0.22)] sm:max-h-[220px] lg:max-h-[min(100%,260px)] lg:object-right"
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="relative flex min-h-[300px] flex-col overflow-hidden rounded-4xl bg-[#0F172A] p-8 shadow-sm ring-1 ring-primary/15 sm:min-h-[320px] sm:p-10 lg:col-span-5 lg:min-h-[320px] lg:flex-row lg:items-stretch lg:gap-6">
            <div className="relative z-10 order-2 mt-6 flex flex-1 flex-col justify-end lg:order-1 lg:mt-0 lg:justify-center lg:min-w-0">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Instant Withdrawals</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Access your funds instantly with our automated withdrawal system.
              </p>
            </div>
            <div
              className="pointer-events-none relative order-1 flex min-h-[140px] w-full shrink-0 items-center justify-center overflow-hidden sm:min-h-[160px] lg:order-2 lg:min-h-0 lg:flex-1 lg:max-w-[min(48%,11rem)] xl:max-w-[12.5rem]"
              aria-hidden
            >
              <img
                src="/images/logos/Instant-Withdrawals.svg"
                alt=""
                className="max-h-[160px] w-full max-w-full object-contain object-center sm:max-h-[180px] lg:max-h-[min(100%,220px)] lg:object-contain lg:object-right"
                width={208}
                height={208}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          {/* Row 2 — narrow left / wide right */}
          <article className="flex min-h-[280px] flex-col overflow-hidden rounded-4xl bg-black p-8 shadow-sm ring-1 ring-white/10 sm:min-h-[300px] sm:p-10 lg:col-span-4 lg:min-h-[300px]">
            <BentoLaptopChartsVisual />
            <div className="mt-auto pt-4">
              <h3 className="text-xl font-bold text-white sm:text-2xl">Segregated Accounts</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Your funds are kept in top-tier banks, separate from our company assets.
              </p>
            </div>
          </article>

          <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-4xl bg-primary p-8 shadow-sm ring-1 ring-black/10 sm:min-h-[300px] sm:p-10 lg:col-span-8 lg:min-h-[300px] lg:flex-row lg:items-stretch lg:gap-6">
            <div className="relative z-10 flex max-w-lg flex-col justify-center lg:flex-1">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">24/7 Expert Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                Our dedicated team is always here to help you with any questions.
              </p>
            </div>
            <BentoSupportVisual />
          </article>
        </div>
      </div>
    </section>
  );
};
