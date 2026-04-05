import {motion} from 'motion/react';

const STATS = [
  {value: '0.0', label: 'Pip Spreads'},
  {value: '1:4000', label: 'Leverage up to'},
  {value: '0.01', label: 'Micro Lot Trading'},
  {value: '5000+', label: 'Instruments'},
  {value: 'Fast', label: 'Withdrawals'},
  {value: 'Negative', label: 'Balance Protection'},
] as const;

/** Slim stats strip below hero — ref: narrow dark bar, six columns, subtle edge texture. */
export const MarketPricingBanner = () => (
  <section
    className="relative overflow-hidden border-y border-white/6 bg-[#0a0a0a] py-2.5 text-white sm:py-3 lg:py-3"
    aria-label="Key trading conditions"
  >
    {/* Edge texture — faint diagonal hatch (ref: subtle side detail) */}
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-10 opacity-[0.12] sm:w-14"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -20deg,
          transparent,
          transparent 5px,
          rgba(255, 255, 255, 0.14) 5px,
          rgba(255, 255, 255, 0.14) 6px
        )`,
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-10 opacity-[0.12] sm:w-14"
      style={{
        backgroundImage: `repeating-linear-gradient(
          20deg,
          transparent,
          transparent 5px,
          rgba(255, 255, 255, 0.14) 5px,
          rgba(255, 255, 255, 0.14) 6px
        )`,
      }}
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
      <motion.div
        initial={{opacity: 0, y: 6}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-20px'}}
        transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
        className="grid grid-cols-3 gap-x-0 gap-y-2 sm:grid-cols-6 sm:gap-y-0 sm:divide-x sm:divide-white/8"
      >
        {STATS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center px-1.5 py-0.5 text-center sm:px-2 sm:py-0"
          >
            <div className="text-base font-bold tabular-nums leading-none tracking-tight text-primary sm:text-lg lg:text-xl">
              {item.value}
            </div>
            <div className="mt-1 max-w-36 text-[0.625rem] font-semibold uppercase leading-tight tracking-[0.12em] text-white/90 sm:max-w-none sm:text-[0.6875rem] sm:tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
