import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Headphones, Laptop, Smartphone} from 'lucide-react';
import {ROUTES} from '../routes/paths';

function BentoLaptopChartsVisual() {
  return (
    <div
      className="pointer-events-none relative mx-auto flex h-44 w-full max-w-[260px] items-end justify-center pb-1"
      aria-hidden
    >
      <div className="absolute bottom-18 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-20">
        <div className="flex h-14 w-6 flex-col justify-end rounded-md bg-linear-to-t from-gray-400 to-gray-200 shadow-md" />
        <div className="flex h-20 w-6 flex-col justify-end rounded-md bg-linear-to-t from-primary/85 to-primary/45 shadow-md" />
        <div className="flex h-16 w-6 flex-col justify-end rounded-md bg-linear-to-t from-slate-500 to-slate-300 shadow-md" />
        <div className="flex h-12 w-6 flex-col justify-end rounded-md bg-linear-to-t from-primary to-rose-300 shadow-md" />
      </div>
      <Laptop
        className="relative z-10 h-28 w-28 text-gray-800 drop-shadow-xl sm:h-32 sm:w-32"
        strokeWidth={1.05}
      />
    </div>
  );
}

function BentoSupportVisual() {
  return (
    <div
      className="pointer-events-none relative mt-6 flex min-h-[200px] flex-1 items-center justify-center lg:mt-0 lg:min-h-[240px]"
      aria-hidden
    >
      <div className="absolute right-[8%] top-[12%] rounded-lg border border-primary/25 bg-white px-2 py-1 text-[10px] font-bold text-primary shadow-md">
        BUY
      </div>
      <div className="absolute bottom-[28%] left-[6%] rounded-lg border border-primary/25 bg-white px-2 py-1 text-[10px] font-bold text-primary shadow-md">
        SELL
      </div>
      <div className="relative flex items-end gap-3 sm:gap-4">
        <Laptop
          className="h-24 w-24 text-gray-800 drop-shadow-xl sm:h-28 sm:w-28"
          strokeWidth={1.05}
        />
        <div className="relative mb-1 rounded-2xl border-2 border-gray-800 bg-white p-1.5 shadow-xl">
          <Smartphone className="h-20 w-20 text-gray-700 sm:h-24 sm:w-24" strokeWidth={1.1} />
        </div>
      </div>
      <Headphones
        className="absolute -right-2 bottom-[18%] h-16 w-16 text-gray-700/90 drop-shadow-lg sm:right-4"
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
          <article className="relative flex min-h-[280px] flex-col overflow-visible rounded-4xl bg-primary p-8 shadow-sm ring-1 ring-black/5 sm:min-h-[300px] sm:p-10 lg:col-span-7 lg:min-h-[320px]">
            <div
              className="pointer-events-none absolute -right-1 -top-7 z-20 w-[min(56vw,204px)] sm:-right-2 sm:-top-9 sm:w-[252px] lg:-right-3 lg:-top-10 lg:w-[300px]"
              aria-hidden
            >
              <img
                src="/images/logos/Ultra-Low.svg"
                alt=""
                className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-30 flex max-w-xl flex-col justify-center pr-29 sm:max-w-2xl sm:pr-36 lg:pr-44">
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ultra-Low Latency
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                Execute trades in milliseconds with our high-performance infrastructure.
              </p>
              <Link
                to={ROUTES.signup}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/95"
              >
                Start Trading
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>

          <article className="relative flex min-h-[280px] flex-col overflow-visible rounded-4xl bg-[#0F172A] p-8 shadow-sm ring-1 ring-primary/15 sm:min-h-[300px] sm:p-10 lg:col-span-5 lg:min-h-[320px]">
            <div
              className="pointer-events-none absolute -right-3 -top-8 z-20 w-[min(44vw,152px)] sm:-right-5 sm:-top-11 sm:w-[184px] lg:-right-6 lg:-top-12 lg:w-[208px]"
              aria-hidden
            >
              <img
                src="/images/logos/Instant-Withdrawals.svg"
                alt=""
                className="h-auto w-full object-contain"
                width={208}
                height={208}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-30 mt-auto flex flex-col pt-4 pr-27 sm:pr-32 lg:pr-36">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Instant Withdrawals</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Access your funds instantly with our automated withdrawal system.
              </p>
              <Link
                to={ROUTES.accounts}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>

          {/* Row 2 — narrow left / wide right */}
          <article className="flex min-h-[280px] flex-col overflow-hidden rounded-4xl bg-gray-50 p-8 shadow-sm ring-1 ring-primary/10 sm:min-h-[300px] sm:p-10 lg:col-span-4 lg:min-h-[300px]">
            <BentoLaptopChartsVisual />
            <div className="mt-auto pt-4">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Segregated Accounts</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Your funds are kept in top-tier banks, separate from our company assets.
              </p>
            </div>
          </article>

          <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-4xl bg-red-50/90 p-8 shadow-sm ring-1 ring-primary/15 sm:min-h-[300px] sm:p-10 lg:col-span-8 lg:min-h-[300px] lg:flex-row lg:items-stretch lg:gap-6">
            <div className="relative z-10 flex max-w-lg flex-col justify-center lg:flex-1">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">24/7 Expert Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                Our dedicated team is always here to help you with any questions.
              </p>
              <Link
                to={ROUTES.support}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <BentoSupportVisual />
          </article>
        </div>
      </div>
    </section>
  );
};
