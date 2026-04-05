import React from 'react';
import {Link} from 'react-router-dom';
import {motion, useReducedMotion} from 'motion/react';
import {ROUTES} from '../routes/paths';

const STEPS = [
  {
    num: '1',
    title: 'REGISTER',
    desc: 'Open a live account and start trading in just minutes.',
  },
  {
    num: '2',
    title: 'FUND',
    desc: 'Fund your account using a wide range of funding methods.',
  },
  {
    num: '3',
    title: 'TRADE',
    desc: 'Access 1000+ instruments across all asset classes',
  },
] as const;

const VIEWPORT = {once: true, margin: '-10% 0px -10% 0px' as const, amount: 0.25 as const};
const EASE = [0.22, 1, 0.36, 1] as const;

/** Straight horizontal arrow — uniform shaft + triangular head (desktop) */
function StepArrowRight({className = ''}: {className?: string}) {
  return (
    <svg
      className={`shrink-0 text-primary drop-shadow-[0_0_14px_rgba(255,45,45,0.45)] ${className}`}
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 4 14 L 78 14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M 78 4 L 116 14 L 78 24 Z" fill="currentColor" />
    </svg>
  );
}

/** Straight vertical arrow — uniform shaft + triangular head (mobile) */
function StepArrowDown({className = ''}: {className?: string}) {
  return (
    <svg
      className={`shrink-0 text-primary drop-shadow-[0_0_14px_rgba(255,45,45,0.45)] ${className}`}
      viewBox="0 0 28 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 14 4 L 14 78"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M 4 78 L 14 116 L 24 78 Z" fill="currentColor" />
    </svg>
  );
}

function FlowReveal({
  children,
  delay,
  deep = false,
  className = '',
}: {
  children: React.ReactNode;
  delay: number;
  /** Stronger offset: feels like emerging from behind the previous block */
  deep?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const hidden = deep
    ? {opacity: 0, x: -88, y: -28, scale: 0.9}
    : {opacity: 0, x: -36, y: 12, scale: 0.97};
  const shown = {opacity: 1, x: 0, y: 0, scale: 1};

  return (
    <motion.div
      className={className}
      initial={reduce ? shown : hidden}
      whileInView={shown}
      viewport={VIEWPORT}
      transition={{
        duration: deep ? 0.36 : 0.42,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

function StepBlock({step}: {step: (typeof STEPS)[number]}) {
  return (
    <div className="flex w-full max-w-md flex-row items-start gap-4 sm:gap-5 lg:max-w-none">
      <span className="select-none bg-linear-to-b from-[#FFD4D4] via-primary to-[#2a0404] bg-clip-text text-7xl font-bold leading-none tracking-tight text-transparent sm:text-8xl lg:text-[5.25rem] xl:text-[6rem] 2xl:text-[6.5rem]">
        {step.num}
      </span>
      <div className="min-w-0 pt-1 lg:pt-3">
        <h3 className="text-lg font-bold tracking-wide text-white sm:text-xl">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-[15px]">{step.desc}</p>
      </div>
    </div>
  );
}

export const StartTradingStepsSection = () => {
  const reduce = useReducedMotion();
  const t = {
    s1: 0,
    a1: 0.3,
    s2: 0.52,
    a2: 0.78,
    s3: 1.02,
    cta: 1.32,
  };

  return (
    <section className="relative overflow-hidden bg-black py-16 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('/images/logos/BGStart-Trading.svg')"}}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-tight"
          initial={reduce ? {opacity: 1, y: 0} : {opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={VIEWPORT}
          transition={{duration: 0.45, ease: EASE}}
        >
          Start Trading in 3 Simple Steps
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 justify-items-center gap-8 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <FlowReveal delay={t.s1} deep={false} className="w-full justify-self-center lg:justify-self-stretch">
            <StepBlock step={STEPS[0]} />
          </FlowReveal>

          <FlowReveal delay={t.a1} deep className="flex items-center justify-center lg:pt-10">
            <StepArrowRight className="hidden h-9 w-28 lg:block xl:h-10 xl:w-32" />
            <StepArrowDown className="h-24 w-9 lg:hidden" />
          </FlowReveal>

          <FlowReveal delay={t.s2} deep className="w-full justify-self-center lg:justify-self-stretch">
            <StepBlock step={STEPS[1]} />
          </FlowReveal>

          <FlowReveal delay={t.a2} deep className="flex items-center justify-center lg:pt-10">
            <StepArrowRight className="hidden h-9 w-28 lg:block xl:h-10 xl:w-32" />
            <StepArrowDown className="h-24 w-9 lg:hidden" />
          </FlowReveal>

          <FlowReveal delay={t.s3} deep className="w-full justify-self-center lg:justify-self-stretch">
            <StepBlock step={STEPS[2]} />
          </FlowReveal>
        </div>

        <motion.div
          className="mt-14 flex justify-center lg:mt-16"
          initial={reduce ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={VIEWPORT}
          transition={{duration: 0.45, delay: reduce ? 0 : t.cta, ease: EASE}}
        >
          <Link
            to={ROUTES.signup}
            className="btn-primary inline-flex min-h-[48px] items-center justify-center rounded-lg px-10 py-3 text-base font-bold"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
