import React from 'react';
import {Link} from 'react-router-dom';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {ROUTES} from '../routes/paths';

type FloatLogo = {
  src: string;
  className: string;
  delay?: number;
  duration?: number;
  whiteHalo?: boolean;
};

/** Positions nudged toward center so sides feel less empty */
const FLOAT_LEFT: FloatLogo[] = [
  {
    src: '/images/logos/floating-logo1.svg',
    className:
      'absolute left-[6%] top-[8%] w-[3.25rem] sm:left-[12%] sm:top-[6%] sm:w-[3.75rem] md:left-[14%] md:w-[4.25rem] -rotate-[20deg]',
    delay: 0,
    duration: 4.2,
  },
  {
    src: '/images/logos/floating-logo2.svg',
    className:
      'absolute left-[18%] top-[44%] w-[3rem] sm:left-[24%] sm:top-[40%] sm:w-[3.5rem] md:left-[26%] md:w-16 rotate-[12deg]',
    delay: 0.6,
    duration: 5,
  },
  {
    src: '/images/logos/floating-logo3.svg',
    className:
      'absolute left-[10%] bottom-[10%] w-[2.75rem] sm:left-[16%] sm:bottom-[8%] sm:w-[3.25rem] md:left-[18%] rotate-[-8deg]',
    delay: 1.1,
    duration: 4.6,
  },
  {
    src: '/images/logos/floating-logo4.svg',
    className:
      'absolute left-[28%] top-[14%] w-[2.5rem] sm:left-[34%] sm:top-[12%] sm:w-12 md:left-[36%] md:w-14 rotate-[18deg]',
    delay: 0.3,
    duration: 5.4,
  },
];

const FLOAT_RIGHT: FloatLogo[] = [
  {
    src: '/images/logos/floating-logo5.svg',
    className:
      'absolute right-[8%] top-[12%] w-[2.35rem] sm:right-[14%] sm:top-[10%] sm:w-11 md:right-[16%] md:w-12 -rotate-[14deg]',
    delay: 0.2,
    duration: 4.8,
  },
  {
    src: '/images/logos/floating-logo6.svg',
    className:
      'absolute right-[18%] top-[38%] w-[2.85rem] sm:right-[24%] sm:top-[34%] sm:w-[3.25rem] md:right-[26%] md:w-14 rotate-[16deg]',
    delay: 0.9,
    duration: 5.2,
  },
  {
    src: '/images/logos/floating-logo7.svg',
    className:
      'absolute right-[10%] bottom-[12%] w-[3rem] sm:right-[16%] sm:bottom-[10%] sm:w-[3.5rem] md:right-[18%] rotate-[-12deg]',
    delay: 0.5,
    duration: 4.4,
  },
  {
    src: '/images/logos/floating-logo8.svg',
    className:
      'absolute right-[28%] top-[8%] w-[3.1rem] sm:right-[34%] sm:top-[6%] sm:w-[3.6rem] md:right-[36%] md:w-[4rem] rotate-[22deg]',
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
              : 'drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]'
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
  <section className="relative overflow-x-clip border-y border-primary bg-black py-10 sm:py-11 lg:py-12">
    <div
      className="pointer-events-none absolute inset-0 z-1 min-h-32 sm:min-h-36"
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 w-[46%] max-w-[min(100%,300px)] sm:max-w-[340px] md:max-w-[380px]">
        <div className="relative h-full min-h-[inherit]">
          <FloatingLogoCluster items={FLOAT_LEFT} />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-[46%] max-w-[min(100%,300px)] sm:max-w-[340px] md:max-w-[380px]">
        <div className="relative h-full min-h-[inherit]">
          <FloatingLogoCluster items={FLOAT_RIGHT} />
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center sm:gap-7">
        <div className="space-y-2 sm:space-y-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Start Your Journey
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            <span className="inline-block bg-linear-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] sm:drop-shadow-[0_0_28px_rgba(255,255,255,0.5)]">
              Create an account
            </span>
          </h2>
          <p className="text-xs text-white/75 sm:text-sm lg:text-[15px]">
            Join in minutes — email, password, and you are ready to explore the markets.
          </p>
        </div>

        <Link
          to={ROUTES.signup}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-primary/90 bg-white px-8 py-2.5 text-sm font-bold text-primary shadow-[0_0_20px_-4px_rgba(255,45,45,0.45)] transition-all hover:border-primary hover:bg-white hover:shadow-[0_0_24px_-4px_rgba(255,45,45,0.55)] sm:px-10 sm:py-3 sm:text-base"
        >
          <span>Sign up</span>
          <ArrowRight size={18} className="shrink-0" aria-hidden />
        </Link>
      </div>
    </div>
  </section>
);
