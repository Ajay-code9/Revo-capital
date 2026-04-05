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
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg lg:mt-6 lg:max-w-md lg:leading-8">
              Pro-grade charts, live market clarity, and friction-light execution in one app—built so you stay sharp on the move, not just at your desk.
            </p>

            <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-start lg:gap-10">
              <div className="flex shrink-0 flex-col items-center sm:items-start">
                <div className="rounded-lg bg-white p-2 shadow-lg shadow-black/40">
                  <img
                    src="/images/logos/qrcode.svg"
                    alt="QR code to download the app"
                    width={168}
                    height={168}
                    className="block h-[140px] w-[140px] sm:h-[168px] sm:w-[168px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 flex items-center gap-2 text-center text-xs text-white/70 sm:text-left sm:text-sm">
                  <Smartphone className="h-4 w-4 shrink-0 text-white/60" aria-hidden />
                  <span>Scan to download Revo Capital app</span>
                </p>
              </div>

              <div className="min-w-0 flex-1 space-y-3 -ml-2 mt-5 sm:-ml-3 sm:mt-6 lg:-ml-5 lg:mt-8">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="#"
                    className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <img
                      src="/images/logos/appstore.svg"
                      alt="Download on the App Store"
                      width={180}
                      height={54}
                      className="h-12 w-auto max-w-full sm:h-[54px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <a
                    href="#"
                    className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <img
                      src="/images/logos/googleplay.svg"
                      alt="Get it on Google Play"
                      width={180}
                      height={54}
                      className="h-12 w-auto max-w-full sm:h-[54px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex w-full rounded-lg border border-white/90 bg-black p-1.5 sm:col-span-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <img
                      src="/images/logos/apk-file.svg"
                      alt="Download the APK file"
                      width={560}
                      height={54}
                      className="h-12 w-full min-h-[48px] object-fill sm:h-[54px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
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
