import React from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowRight, Shield} from 'lucide-react';

/** Default: subtle on red. Focus / typing: white field + dark text. */
const inputClass =
  'w-full rounded-full border border-white/50 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-none placeholder:text-white/65 transition-[background-color,border-color,color,box-shadow] duration-200 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-white/90 focus:ring-offset-2 focus:ring-offset-primary sm:px-5 sm:py-2.5 sm:text-[15px]';

type FloatLogo = {
  src: string;
  className: string;
  delay?: number;
  duration?: number;
  /** Soft white glow following logo silhouette (not a square box) — for low-contrast marks on red */
  whiteHalo?: boolean;
};

const FLOAT_LEFT: FloatLogo[] = [
  {
    src: '/images/logos/floating-logo1.svg',
    className:
      'absolute left-[-6%] top-[6%] w-[3.25rem] sm:left-[-2%] sm:top-[4%] sm:w-[3.75rem] md:w-[4.25rem] -rotate-[20deg]',
    delay: 0,
    duration: 4.2,
  },
  {
    src: '/images/logos/floating-logo2.svg',
    className:
      'absolute left-[4%] top-[42%] w-[3rem] sm:left-[10%] sm:top-[38%] sm:w-[3.5rem] md:w-16 rotate-[12deg]',
    delay: 0.6,
    duration: 5,
  },
  {
    src: '/images/logos/floating-logo3.svg',
    className:
      'absolute -left-[2%] bottom-[8%] w-[2.75rem] sm:left-[2%] sm:bottom-[6%] sm:w-[3.25rem] rotate-[-8deg]',
    delay: 1.1,
    duration: 4.6,
  },
  {
    src: '/images/logos/floating-logo4.svg',
    className:
      'absolute left-[18%] top-[12%] w-[2.5rem] sm:left-[22%] sm:top-[10%] sm:w-12 md:w-14 rotate-[18deg]',
    delay: 0.3,
    duration: 5.4,
  },
];

const FLOAT_RIGHT: FloatLogo[] = [
  {
    src: '/images/logos/floating-logo5.svg',
    className:
      'absolute right-[-4%] top-[10%] w-[2.35rem] sm:right-[2%] sm:top-[8%] sm:w-11 md:w-12 -rotate-[14deg]',
    delay: 0.2,
    duration: 4.8,
  },
  {
    src: '/images/logos/floating-logo6.svg',
    className:
      'absolute right-[8%] top-[36%] w-[2.85rem] sm:right-[14%] sm:top-[32%] sm:w-[3.25rem] md:w-14 rotate-[16deg]',
    delay: 0.9,
    duration: 5.2,
  },
  {
    src: '/images/logos/floating-logo7.svg',
    className:
      'absolute -right-[2%] bottom-[10%] w-[3rem] sm:right-[4%] sm:bottom-[8%] sm:w-[3.5rem] rotate-[-12deg]',
    delay: 0.5,
    duration: 4.4,
  },
  {
    src: '/images/logos/floating-logo8.svg',
    className:
      'absolute right-[20%] top-[6%] w-[3.1rem] sm:right-[26%] sm:top-[4%] sm:w-[3.6rem] md:w-[4rem] rotate-[22deg]',
    delay: 0,
    duration: 5.6,
    whiteHalo: true,
  },
];

function FloatingLogoCluster({items}: {items: FloatLogo[]}) {
  const reduce = useReducedMotion();

  return (
    <>
      {items.map((item, i) => (
        <motion.img
          key={`${item.src}-${i}`}
          src={item.src}
          alt=""
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
          aria-hidden
          className={`${item.className} select-none object-contain ${
            item.whiteHalo
              ? 'filter-[drop-shadow(0_14px_28px_rgba(0,0,0,0.35))_drop-shadow(0_0_1px_rgb(255,255,255))_drop-shadow(0_0_2px_rgb(255,255,255))_drop-shadow(0_0_5px_rgba(255,255,255,0.85))_drop-shadow(0_0_10px_rgba(255,255,255,0.45))]'
              : 'drop-shadow-[0_14px_28px_rgba(0,0,0,0.38)]'
          }`}
          initial={false}
          animate={reduce ? {} : {y: [0, -7, 0]}}
          transition={{
            duration: item.duration ?? 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay ?? 0,
          }}
        />
      ))}
    </>
  );
}

export const CreateAccountBar = () => (
  <section className="relative overflow-x-clip bg-primary py-10 sm:py-11 lg:py-12">
    {/* floating-logo1–8 — edges bleed slightly */}
    <div
      className="pointer-events-none absolute inset-0 z-1 min-h-32 sm:min-h-36"
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 w-[34%] max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
        <div className="relative h-full min-h-[inherit]">
          <FloatingLogoCluster items={FLOAT_LEFT} />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-[34%] max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
        <div className="relative h-full min-h-[inherit]">
          <FloatingLogoCluster items={FLOAT_RIGHT} />
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
        <div className="space-y-2 text-center text-white sm:space-y-2.5 lg:max-w-lg lg:text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
            Start Your Journey
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Create an account</h2>
          <p className="text-xs text-white/85 sm:text-sm lg:text-[15px]">
            Join in minutes — email, password, and you are ready to explore the markets.
          </p>
        </div>

        <div className="w-full min-w-0 lg:max-w-2xl lg:flex-1 xl:max-w-3xl">
          <div className="rounded-2xl border border-white/25 bg-black/10 p-3 shadow-inner shadow-black/10 backdrop-blur-sm sm:rounded-3xl sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3 lg:flex-nowrap lg:items-center">
              <div className="relative min-w-0 flex-1 sm:min-w-[min(100%,11rem)] sm:flex-1 lg:min-w-0">
                <label htmlFor="cta-email" className="sr-only">
                  Email
                </label>
                <input id="cta-email" type="email" autoComplete="email" placeholder="Email" className={inputClass} />
              </div>
              <div className="group relative min-w-0 flex-1 sm:min-w-[min(100%,11rem)] sm:flex-1 lg:min-w-0">
                <label htmlFor="cta-password" className="sr-only">
                  Create Password
                </label>
                <input
                  id="cta-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create Password"
                  className={`${inputClass} pr-10 sm:pr-11`}
                />
                <Shield
                  size={16}
                  strokeWidth={2}
                  className="pointer-events-none absolute right-3.5 top-1/2 z-10 -translate-y-1/2 text-white/55 transition-colors group-focus-within:text-gray-400 sm:right-4"
                  aria-hidden
                />
              </div>
              <button
                type="button"
                className="inline-flex w-full shrink-0 items-center justify-center gap-1 rounded-full bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-primary shadow-md shadow-black/10 transition-all hover:bg-gray-50 sm:w-auto sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs sm:normal-case sm:tracking-normal lg:px-4 lg:py-2"
              >
                <span>Sign up</span>
                <ArrowRight size={14} className="shrink-0" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
