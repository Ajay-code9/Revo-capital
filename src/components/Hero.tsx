import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {ArrowRight, MessageCircle} from 'lucide-react';

const HERO_MAIN_SRC = '/images/logos/hero-section-homepage.svg';

type HeroFloatLogo = {
  src: string;
  /** Anchored to the hero image frame (`relative` wrapper = img bounds) */
  className: string;
  delay: number;
  /** Slower loops — calm, readable drift */
  duration: number;
  /** Organic motion: multi-point paths (px), not a single back-and-forth */
  xPath: number[];
  yPath: number[];
  times: number[];
};

/** floating-logo1–8: hug hero artboard edges; paths are closed loops with varied rhythm */
const HERO_FLOAT_LOGOS: HeroFloatLogo[] = [
  {
    src: '/images/logos/floating-logo1.svg',
    className:
      'absolute -left-[5%] top-[6%] z-20 w-[2.65rem] -rotate-[18deg] sm:w-[3rem] md:w-[3.35rem]',
    delay: 0,
    duration: 11,
    xPath: [0, 5, -3, 7, -4, 2, 0],
    yPath: [0, -5, 4, -3, 6, -2, 0],
    times: [0, 0.18, 0.34, 0.52, 0.68, 0.86, 1],
  },
  {
    src: '/images/logos/floating-logo2.svg',
    className:
      'absolute -left-[6%] top-[30%] z-30 w-[2.5rem] rotate-[10deg] sm:w-[2.85rem] md:w-12',
    delay: 1.1,
    duration: 13,
    xPath: [0, -4, 6, -2, 5, -5, 0],
    yPath: [0, 6, -4, 5, -3, 4, 0],
    times: [0, 0.22, 0.38, 0.54, 0.7, 0.88, 1],
  },
  {
    src: '/images/logos/floating-logo3.svg',
    className:
      'absolute -left-[4%] top-[54%] z-20 w-[2.4rem] -rotate-[8deg] sm:w-[2.75rem] md:w-12',
    delay: 0.4,
    duration: 12,
    xPath: [0, 6, 2, -5, 4, -3, 0],
    yPath: [0, 3, -6, 4, -5, 3, 0],
    times: [0, 0.2, 0.36, 0.5, 0.66, 0.82, 1],
  },
  {
    src: '/images/logos/floating-logo4.svg',
    className:
      'absolute -left-[5%] bottom-[10%] z-30 w-[2.55rem] rotate-[14deg] sm:w-[2.9rem] md:w-[3.1rem]',
    delay: 2,
    duration: 10.5,
    xPath: [0, -5, 4, -6, 3, 5, 0],
    yPath: [0, -4, -6, 3, 5, -3, 0],
    times: [0, 0.17, 0.33, 0.5, 0.67, 0.84, 1],
  },
  {
    src: '/images/logos/floating-logo5.svg',
    className:
      'absolute -right-[5%] top-[7%] z-30 w-[2.4rem] -rotate-[12deg] sm:w-[2.75rem] md:w-12',
    delay: 0.65,
    duration: 11.5,
    xPath: [0, -6, 4, -3, 6, -4, 0],
    yPath: [0, 5, -3, 6, -4, 3, 0],
    times: [0, 0.19, 0.35, 0.51, 0.67, 0.85, 1],
  },
  {
    src: '/images/logos/floating-logo6.svg',
    className:
      'absolute -right-[6%] top-[32%] z-20 w-[2.7rem] rotate-[15deg] sm:w-[3rem] md:w-[3.25rem]',
    delay: 1.6,
    duration: 12.5,
    xPath: [0, 5, -7, 3, -4, 6, 0],
    yPath: [0, -5, 4, -6, 5, -3, 0],
    times: [0, 0.21, 0.37, 0.53, 0.69, 0.87, 1],
  },
  {
    src: '/images/logos/floating-logo7.svg',
    className:
      'absolute -right-[4%] top-[56%] z-30 w-[2.55rem] -rotate-[10deg] sm:w-[2.9rem] md:w-[3.1rem]',
    delay: 0.25,
    duration: 10,
    xPath: [0, -4, -6, 5, -3, 4, 0],
    yPath: [0, 4, -5, 3, -6, 4, 0],
    times: [0, 0.16, 0.32, 0.48, 0.64, 0.8, 1],
  },
  {
    src: '/images/logos/floating-logo8.svg',
    className:
      'absolute -right-[5%] bottom-[11%] z-20 w-[2.6rem] rotate-[20deg] sm:w-[3rem] md:w-[3.2rem]',
    delay: 1.35,
    duration: 13.5,
    xPath: [0, 4, -5, 6, -3, -4, 0],
    yPath: [0, -6, 3, -4, 5, -2, 0],
    times: [0, 0.2, 0.36, 0.52, 0.68, 0.84, 1],
  },
];

function HeroFloatingLogos() {
  const reduce = useReducedMotion();

  return (
    <>
      {HERO_FLOAT_LOGOS.map((item, i) => (
        <motion.img
          key={`${item.src}-${i}`}
          src={item.src}
          alt=""
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
          aria-hidden
          className={`${item.className} pointer-events-none select-none object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] will-change-transform`}
          initial={false}
          animate={
            reduce
              ? {}
              : {
                  x: item.xPath,
                  y: item.yPath,
                }
          }
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
            times: item.times,
          }}
        />
      ))}
    </>
  );
}

/** Only these three words cycle; rest of the headline is fixed. */
const ROTATING_WORDS = ['confidence', 'speed', 'precision'] as const;

const wordTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as const,
};

function RotatingHeroHeadline() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const word = ROTATING_WORDS[reduceMotion ? 0 : index];

  const enter = reduceMotion
    ? {}
    : {opacity: 0, y: 28, rotateX: -65};
  const animate = reduceMotion
    ? {}
    : {opacity: 1, y: 0, rotateX: 0};
  const exit = reduceMotion
    ? {}
    : {opacity: 0, y: -22, rotateX: 50};

  return (
    <h1
      className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl xl:text-7xl"
      style={{perspective: 900}}
    >
      Trade Global Markets with{' '}
      <span className="relative inline-block min-h-[1.1em] align-baseline text-primary capitalize">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            initial={enter}
            animate={animate}
            exit={exit}
            transition={wordTransition}
            className="inline-block origin-bottom"
            style={{transformStyle: 'preserve-3d'}}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}

export const Hero = () => (
  <section className="relative overflow-hidden bg-white py-12 lg:py-16">
    <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div className="order-1 space-y-6 text-center lg:space-y-8 lg:text-left">
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
          >
            <RotatingHeroHeadline />
          </motion.div>

          <motion.p
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.15, duration: 0.45}}
            className="mx-auto max-w-xl text-base leading-relaxed text-gray-500 lg:mx-0 lg:text-lg"
          >
            Trade CFDs on Forex, Indices, Shares, Commodities, Crypto and ETFs with Tight Spreads and a Platform built for Serious Traders—on Web and Mobile.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.22, duration: 0.45}}
            className="flex justify-center lg:justify-start"
          >
            <button
              type="button"
              className="btn-primary flex items-center gap-2 rounded-full px-10 py-4 text-lg font-bold lg:px-12"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.28}}
            className="flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="text-xl font-bold text-gray-900">Excellent</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className={`flex h-6 w-6 items-center justify-center rounded-sm text-white ${star === 5 ? 'bg-gray-200' : 'bg-[#00B67A]'}`}
                >
                  <span className="text-[14px]">★</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative order-2 mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: 'easeOut', delay: 0.3}}
            className="relative z-20 flex min-h-[320px] items-center justify-center sm:min-h-[400px] lg:min-h-[480px] lg:justify-end lg:pr-2"
          >
            {/* Wrapper = exact hero image box so floats sit on the artboard border */}
            <div className="relative w-full max-w-[min(100%,420px)] sm:max-w-[min(100%,480px)] lg:max-w-[min(100%,520px)]">
              <img
                src={HERO_MAIN_SRC}
                alt="Revo Capital — web and mobile trading"
                width={628}
                height={797}
                loading="eager"
                decoding="async"
                className="relative z-10 block h-auto w-full object-contain"
              />
              <HeroFloatingLogos />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="fixed bottom-6 right-6 z-100">
      <button
        type="button"
        className="btn-primary flex h-14 w-14 items-center justify-center rounded-full"
        aria-label="Open chat"
      >
        <MessageCircle size={28} fill="white" />
      </button>
    </div>
  </section>
);
