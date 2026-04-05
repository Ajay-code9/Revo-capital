import React from 'react';
import {Apple, Smartphone} from 'lucide-react';

function GooglePlayGlyph({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#EA4335" d="M3.04 3.65c-.12.21-.19.45-.19.7v15.3c0 .25.07.49.19.7l8.55-8.65L3.04 3.65z" />
      <path fill="#FBBC04" d="M16.81 15.41 11.59 20.6l8.55-4.9c.8-.46 1.27-1.32 1.27-2.25v-.18l-4.6-2.86z" />
      <path fill="#34A853" d="M3.04 20.35c.12.21.28.39.48.52l8.07-8.07-8.55-8.65c-.2.13-.36.31-.48.52v15.68z" />
      <path fill="#4285F4" d="M16.81 8.59 20.41 5.73c-.8-.46-1.8-.46-2.6 0l-8.22 4.7 5.22 5.19 2.21-1.37z" />
    </svg>
  );
}

function AndroidGlyph({className}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M17.6 9.48c-.47 0-.86.38-.86.86v4.15c0 .47.38.86.86.86.47 0 .86-.38.86-.86v-4.15c0-.48-.39-.86-.86-.86zm-11.2 0c-.47 0-.86.38-.86.86v4.15c0 .47.38.86.86.86.47 0 .86-.38.86-.86v-4.15c0-.48-.39-.86-.86-.86zm5.69-6.86 1.03-1.89a.34.34 0 0 0-.13-.45.34.34 0 0 0-.45.13L10.65 2.7a5.89 5.89 0 0 0-5.4 3.35H18.8a5.89 5.89 0 0 0-5.4-3.35l-1.31-2.43a.34.34 0 0 0-.45-.13.34.34 0 0 0-.13.45l1.03 1.89c-.84.38-1.58.95-2.16 1.67H9.07c-.2 0-.36.16-.36.36s.16.36.36.36h1.04v1.43H7.31c-.2 0-.36.16-.36.36s.16.36.36.36h2.8v1.43H9.07c-.2 0-.36.16-.36.36s.16.36.36.36h1.04v1.43H7.31c-.2 0-.36.16-.36.36s.16.36.36.36h2.8v1.08c0 .47.38.86.86.86.47 0 .86-.38.86-.86v-1.08h2.8c.2 0 .36-.16.36-.36s-.16-.36-.36-.36h-2.8v-1.43h1.04c.2 0 .36-.16.36-.36s-.16-.36-.36-.36h-1.04v-1.43h2.8c.2 0 .36-.16.36-.36s-.16-.36-.36-.36h-2.8V9.5h1.04c.2 0 .36-.16.36-.36s-.16-.36-.36-.36h-1.04V7.35h-1.43V5.92h1.04c.2 0 .36-.16.36-.36s-.16-.36-.36-.36h-1.04V4.13c0-1.02-.83-1.86-1.86-1.86-.56 0-1.06.25-1.4.65z" />
    </svg>
  );
}

const storeBtnClass =
  'flex min-h-[52px] w-full items-center gap-3 rounded-lg border border-white/90 bg-black px-4 py-2.5 text-left text-white transition-colors hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400';

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

              <div className="min-w-0 flex-1 space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a href="#" className={storeBtnClass}>
                    <Apple className="h-8 w-8 shrink-0" strokeWidth={1.25} aria-hidden />
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[10px] font-medium uppercase tracking-wide text-white/80">
                        Download on the
                      </span>
                      <span className="block text-sm font-semibold">App Store</span>
                    </span>
                  </a>
                  <a href="#" className={storeBtnClass}>
                    <GooglePlayGlyph className="h-7 w-7 shrink-0" />
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[10px] font-medium uppercase tracking-wide text-white/80">
                        GET IT ON
                      </span>
                      <span className="block text-sm font-semibold">Google Play</span>
                    </span>
                  </a>
                </div>
                <a href="#" className={`${storeBtnClass} sm:col-span-2`}>
                  <AndroidGlyph className="h-7 w-7 shrink-0 text-[#3DDC84]" />
                  <span className="text-sm font-semibold">Download the APK File</span>
                </a>
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
