import React from 'react';
import {Smartphone} from 'lucide-react';

export const AppDownloadSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Desktop: phone sits on right as a full-height visual layer behind content */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block" aria-hidden>
        <img
          src="/images/logos/home_trade.webp"
          alt=""
          className="h-full w-full object-contain object-right"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, #000 0%, #000 44%, rgba(0,0,0,0.88) 57%, rgba(0,0,0,0.36) 76%, rgba(0,0,0,0) 100%)',
        }}
        aria-hidden
      />

      {/* Content stays above background image */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex w-full flex-col justify-start px-5 pb-8 pt-7 sm:pb-9 sm:pl-9 sm:pr-6 sm:pt-8 md:pl-11 lg:w-[56%] lg:pb-10 lg:pl-16 lg:pr-6 lg:pt-9 xl:pl-24 xl:pr-8 2xl:pl-28 2xl:pr-10">
          <h2 className="text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl">
            Where Everything Comes Together
            <span className="text-[#5CE1E6]">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:mt-6 lg:max-w-lg lg:leading-8">
            Pro-grade charts, live market clarity, and friction-light execution in one app—built so you stay sharp on the move, not just at your desk.
          </p>

          <div className="mt-8 w-full max-w-sm sm:max-w-md sm:mt-10 lg:mt-12 lg:max-w-106">
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-[#1f0608] via-[#0a0505] to-[#1a0808] px-4 py-6 shadow-[0_0_0_1px_rgba(255,45,45,0.06)] sm:px-5 sm:py-7 lg:px-5 lg:py-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/18 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl"
                aria-hidden
              />

              <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,9.25rem)_minmax(0,1fr)] md:items-center md:gap-5 lg:gap-6">
                <div className="flex flex-col items-center gap-4 md:items-start md:gap-4">
                  <p className="text-center text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/45 md:text-left">
                    Scan to open
                  </p>
                  <div className="rounded-lg bg-white p-2 shadow-lg shadow-black/40 ring-1 ring-black/20">
                    <img
                      src="/images/logos/qrcode.svg"
                      alt="QR code to download the app"
                      width={168}
                      height={168}
                      className="block h-[128px] w-[128px] sm:h-[142px] sm:w-[142px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="flex max-w-60 items-start gap-2 text-center text-xs leading-snug text-white/85 md:text-left sm:text-sm">
                    <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-[#5CE1E6] sm:h-[1.05rem] sm:w-[1.05rem]" aria-hidden />
                    <span>Scan to download RevoTrader</span>
                  </p>
                </div>

                <div className="flex min-h-0 w-full min-w-0 flex-col justify-center gap-4 border-t border-white/10 pt-7 md:border-t-0 md:border-l md:border-white/10 md:pt-0 md:pl-4 lg:pl-6">
                  <p className="text-center text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.18em] text-white/45 md:text-left">
                    Or download directly
                  </p>
                  <div className="flex w-full flex-col gap-3 sm:gap-3.5">
                    <StoreBadgeLink
                      href="#"
                      src="/images/logos/app_store_btn.svg"
                      alt="Download on the App Store"
                    />
                    <StoreBadgeLink
                      href="#"
                      src="/images/logos/google_play_btn.svg"
                      alt="Get it on Google Play"
                    />
                    <StoreBadgeLink
                      href="#"
                      src="/images/logos/apk_file_btn.svg"
                      alt="Download the APK file"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet fallback: keep phone visible below content */}
        <div className="relative flex w-full min-w-0 shrink-0 justify-end items-start px-5 pb-7 pt-4 sm:px-7 sm:pb-8 sm:pt-5 lg:hidden">
          <img
            src="/images/logos/home_trade.webp"
            alt="Revo trading app — XAUUSD-ECN chart, buy and sell, and navigation"
            className="h-auto w-auto max-h-[min(54vh,440px)] max-w-full shrink-0 object-contain object-right sm:max-h-[min(58vh,480px)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

/** Badge only — no outer border/bg; SVGs keep their own artwork stroke */
function StoreBadgeLink({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      className="flex w-full min-w-0 items-center justify-center rounded-md py-1 opacity-95 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
    >
      <img
        src={src}
        alt={alt}
        width={240}
        height={60}
        className="h-11 w-full max-w-full object-contain object-center sm:h-12 lg:h-13.5"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
