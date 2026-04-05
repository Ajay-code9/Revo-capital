import React from 'react';
import {Smartphone} from 'lucide-react';

export const AppDownloadSection = () => {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:items-stretch lg:gap-0">
        <div className="max-w-xl px-4 py-14 sm:px-6 lg:max-w-none lg:px-8 lg:py-20 xl:py-24">
            <h2 className="text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl">
              Where Everything Comes Together
              <span className="text-[#5CE1E6]">.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:mt-6 lg:leading-8">
              Pro-grade charts, live market clarity, and friction-light execution in one app—built so you stay sharp on the move, not just at your desk.
            </p>

            <div className="mt-10 sm:mt-12 lg:mt-14">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1f0608] via-black to-[#140303] p-6 sm:p-8 md:p-9 lg:p-10">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
                  aria-hidden
                />

                <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-10">
                  <div className="flex w-full shrink-0 flex-col items-center gap-4 md:w-auto md:items-start md:gap-5">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45 md:text-left">
                      Scan to open
                    </p>
                    <div className="rounded-xl bg-white p-2.5 shadow-xl shadow-black/40 ring-1 ring-black/20">
                      <img
                        src="/images/logos/qrcode.svg"
                        alt="QR code to download the app"
                        width={168}
                        height={168}
                        className="block h-[148px] w-[148px] sm:h-[168px] sm:w-[168px]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="flex max-w-[16rem] items-start gap-2.5 text-center text-sm leading-snug text-white/80 md:text-left md:text-base">
                      <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#5CE1E6]" aria-hidden />
                      <span>Scan to download RevoTrader</span>
                    </p>
                  </div>

                  <div className="flex min-h-0 w-full min-w-0 flex-col justify-center gap-4 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:pl-10">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45 md:text-left">
                      Or download directly
                    </p>
                    <div className="mx-auto flex w-full max-w-md flex-col gap-3.5 sm:max-w-none sm:gap-4 md:mx-0">
                      <a
                        href="#"
                        className="flex h-16 w-full min-w-0 items-center justify-center rounded-lg sm:h-18 lg:h-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                      >
                        <img
                          src="/images/logos/app_store_btn.svg"
                          alt="Download on the App Store"
                          width={180}
                          height={54}
                          className="h-full w-full max-h-16 object-contain object-center sm:max-h-18 lg:max-h-20"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <a
                        href="#"
                        className="flex h-16 w-full min-w-0 items-center justify-center rounded-lg sm:h-18 lg:h-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                      >
                        <img
                          src="/images/logos/google_play_btn.svg"
                          alt="Get it on Google Play"
                          width={180}
                          height={54}
                          className="h-full w-full max-h-16 object-contain object-center sm:max-h-18 lg:max-h-20"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <a
                        href="#"
                        className="flex h-16 w-full min-w-0 items-center justify-center rounded-lg sm:h-18 lg:h-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                      >
                        <img
                          src="/images/logos/apk_file_btn.svg"
                          alt="Download the APK file"
                          width={169}
                          height={48}
                          className="h-full w-full max-h-16 object-contain object-center sm:max-h-18 lg:max-h-20"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Full section height on lg+; image flush top/bottom, square corners */}
        <div className="relative min-h-[min(52vh,420px)] w-full lg:min-h-0">
          <img
            src="/images/logos/home_trade.webp"
            alt="Revo trading app — XAUUSD-ECN chart, buy and sell, and navigation"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
