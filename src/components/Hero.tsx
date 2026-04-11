import React, {useEffect, useRef, useState} from 'react';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {ArrowRight, MessageCircle} from 'lucide-react';
import {Button} from './ui/Button';

const HERO_MAIN_SRC = '/images/logos/hero-section-homepage.svg';

const TWO_PI = Math.PI * 2;

/** One full anticlockwise lap (~seconds); all icons share one phase → equal angular gap always */
const ORBIT_PERIOD_SEC = 360;
/** θ decreases ⇒ anticlockwise around the hero (x right, y down). */
const ORBIT_OMEGA = -TWO_PI / ORBIT_PERIOD_SEC;
/** ~half visual radius of a coin on screen (px), used for orbit inset */
const ORBIT_ICON_HALF_PX = 26;
/** Very slow self-spin on each icon’s axis (rad/s); ~0.009 ≈ one full turn ~700s */
const SELF_SPIN_BASE = 0.009;
/**
 * Intro: icon 0 at centre first; when k−1 starts flying to orbit, icon k pops in at centre (fan spread).
 * Each icon then moves along a curved path straight to its final orbit slot — no left staging line.
 */
const FLOAT_INTRO_INITIAL_DELAY_SEC = 0.12;
const FLOAT_INTRO_ASSEMBLE_STAGGER_SEC = 0.38;
/** Centre → orbit flight duration */
const FLOAT_INTRO_FLY_TO_ORBIT_SEC = 0.52;

function clamp01(t: number) {
  return Math.min(1, Math.max(0, t));
}

function easeInOutCubic(t: number) {
  const c = clamp01(t);
  return c < 0.5 ? 4 * c * c * c : 1 - (-2 * c + 2) ** 3 / 2;
}

/** Vertical spread at centre so visible icons don’t sit on one pixel before they fly out. */
function introCentreFanOffsetY(i: number, n: number, ry: number) {
  if (n <= 1) return 0;
  const amp = Math.min(ry * 0.24, 76);
  return ((i - (n - 1) / 2) / (n - 1)) * amp;
}

type FloatIntroSchedule = {
  flyStart: number[];
  flyEnd: number[];
  introEnd: number;
};

function computeFloatIntroSchedule(n: number): FloatIntroSchedule {
  const t0 = FLOAT_INTRO_INITIAL_DELAY_SEC;
  const S = FLOAT_INTRO_ASSEMBLE_STAGGER_SEC;
  const D = FLOAT_INTRO_FLY_TO_ORBIT_SEC;

  const flyStart = Array.from({length: n}, (_, i) => t0 + i * S);
  const flyEnd = flyStart.map((s) => s + D);
  const introEnd = flyEnd[n - 1] + 0.08;
  return {flyStart, flyEnd, introEnd};
}

function floatIntroTotalDurationSec(n: number) {
  return computeFloatIntroSchedule(n).introEnd;
}

/** Quadratic Bezier with outward bulge — reads as cutting across an arc into orbit. */
function introArcPoint(ax: number, ay: number, bx: number, by: number, t: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  let nx = -dy / len;
  let ny = dx / len;
  if (nx * mx + ny * my < 0) {
    nx *= -1;
    ny *= -1;
  }
  const bulge = len * 0.34;
  const cx = mx + nx * bulge;
  const cy = my + ny * bulge;
  const u = 1 - t;
  return {
    x: u * u * ax + 2 * u * t * cx + t * t * bx,
    y: u * u * ay + 2 * u * t * cy + t * t * by,
  };
}

/**
 * Vertical semi-axis of the orbit (same as the old circular radius): half diagonal of the hero
 * box, inset for icon size.
 */
function heroOrbitRadiusPx(w: number, h: number) {
  const circumRadius = Math.hypot(w, h) * 0.5;
  const r = circumRadius - ORBIT_ICON_HALF_PX * 0.92;
  return Math.max(Math.min(w, h) * 0.18, r);
}

/** Horizontal semi-axis = ry × this; <1 narrows orbit width, height (ry) unchanged */
const ORBIT_ELLIPSE_RX_SCALE = 0.65;

function heroOrbitEllipseAxes(w: number, h: number) {
  const ry = heroOrbitRadiusPx(w, h);
  const rx = ry * ORBIT_ELLIPSE_RX_SCALE;
  return {rx, ry};
}

function wrapAngle(a: number) {
  return ((a % TWO_PI) + TWO_PI) % TWO_PI;
}

const HERO_ORBIT_LOGOS: {src: string; baseTiltDeg: number}[] = [
  {src: '/images/logos/floating-logo1.svg', baseTiltDeg: -14},
  {src: '/images/logos/floating-logo2.svg', baseTiltDeg: 10},
  {src: '/images/logos/floating-logo3.svg', baseTiltDeg: -8},
  {src: '/images/logos/floating-logo4.svg', baseTiltDeg: 14},
  {src: '/images/logos/floating-logo5.svg', baseTiltDeg: -11},
  {src: '/images/logos/floating-logo6.svg', baseTiltDeg: 16},
  {src: '/images/logos/floating-logo7.svg', baseTiltDeg: -9},
  {src: '/images/logos/floating-logo8.svg', baseTiltDeg: 18},
];

const HERO_FLOAT_GLITTER_CSS = `
  .hero-float-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2.75rem;
    height: 2.75rem;
    isolation: isolate;
    will-change: transform;
  }
  @media (min-width: 640px) {
    .hero-float-wrap { width: 3rem; height: 3rem; }
  }
  @media (min-width: 768px) {
    .hero-float-wrap { width: 3.5rem; height: 3.5rem; }
  }
  .hero-float-inner {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 520px;
    transform-style: preserve-3d;
  }
  .hero-float-levitate {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    transform-style: preserve-3d;
    animation: hero-float-levitate 4.1s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  .hero-float-conic-aura {
    position: absolute;
    inset: -42%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.38;
    background: conic-gradient(
      from 0deg,
      rgba(220, 38, 38, 0.45),
      rgba(255, 255, 255, 0.15),
      rgba(250, 204, 21, 0.2),
      rgba(255, 255, 255, 0.25),
      rgba(220, 38, 38, 0.35),
      transparent 140deg,
      rgba(220, 38, 38, 0.25),
      rgba(255, 255, 255, 0.12),
      rgba(220, 38, 38, 0.45)
    );
    filter: blur(10px);
    animation: hero-float-aura-spin 26s linear infinite;
    animation-delay: var(--hero-float-delay, 0s);
    transform-origin: 50% 50%;
    will-change: transform;
  }
  .hero-float-pulse-ring {
    position: absolute;
    inset: -14%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow:
      0 0 14px rgba(220, 38, 38, 0.22),
      0 0 32px rgba(255, 255, 255, 0.14),
      inset 0 0 18px rgba(255, 255, 255, 0.22);
    animation: hero-float-ring-pulse 3.2s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  .hero-float-tumbler {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    transform-style: preserve-3d;
    animation: hero-float-tumble 7s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  .hero-float-coin-img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: translateZ(12px);
    animation: hero-float-coin-sparkle 4.5s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  .hero-float-shimmer {
    position: absolute;
    inset: -10%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    opacity: 0.72;
    transform: translateZ(18px);
    background: linear-gradient(
      118deg,
      transparent 0%,
      transparent 40%,
      rgba(255, 255, 255, 0.55) 47%,
      rgba(255, 252, 240, 0.95) 50%,
      rgba(255, 255, 255, 0.6) 53%,
      transparent 62%,
      transparent 100%
    );
    background-size: 280% 280%;
    mix-blend-mode: soft-light;
    animation: hero-float-shimmer-sweep 2.6s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  .hero-float-shimmer-2 {
    position: absolute;
    inset: -14%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 3;
    opacity: 0.35;
    transform: translateZ(22px);
    background: linear-gradient(
      -65deg,
      transparent 35%,
      rgba(255, 255, 255, 0.25) 48%,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.3) 52%,
      transparent 65%
    );
    background-size: 240% 240%;
    mix-blend-mode: overlay;
    animation: hero-float-shimmer-sweep-rev 3.4s ease-in-out infinite;
    animation-delay: calc(var(--hero-float-delay, 0s) + 0.6s);
  }
  .hero-float-sparkles {
    position: absolute;
    inset: -5%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 4;
    transform: translateZ(24px);
    opacity: 0.5;
    background: radial-gradient(circle at 28% 22%, rgba(255, 255, 255, 0.98) 0%, transparent 1.1%),
      radial-gradient(circle at 72% 35%, rgba(255, 255, 255, 0.9) 0%, transparent 1%),
      radial-gradient(circle at 45% 78%, rgba(255, 252, 240, 0.95) 0%, transparent 1.05%),
      radial-gradient(circle at 82% 68%, rgba(255, 255, 255, 0.82) 0%, transparent 0.95%);
    background-size: 100% 100%;
    animation: hero-float-sparkle-twinkle 2.1s ease-in-out infinite;
    animation-delay: var(--hero-float-delay, 0s);
  }
  @keyframes hero-float-levitate {
    0%, 100% { transform: translateY(-4px); }
    50% { transform: translateY(5px); }
  }
  @keyframes hero-float-aura-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes hero-float-tumble {
    0%, 100% { transform: rotateX(6deg) rotateY(-11deg); }
    25% { transform: rotateX(-4deg) rotateY(8deg); }
    50% { transform: rotateX(5deg) rotateY(10deg); }
    75% { transform: rotateX(-6deg) rotateY(-7deg); }
  }
  @keyframes hero-float-ring-pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.92; transform: scale(1.05); }
  }
  @keyframes hero-float-coin-sparkle {
    0%, 100% {
      filter: drop-shadow(0 5px 14px rgba(0, 0, 0, 0.2))
        drop-shadow(0 0 10px rgba(220, 38, 38, 0.16));
    }
    33% {
      filter: drop-shadow(0 7px 20px rgba(0, 0, 0, 0.22))
        drop-shadow(0 0 22px rgba(255, 255, 255, 0.45))
        drop-shadow(0 0 14px rgba(220, 38, 38, 0.22));
    }
    66% {
      filter: drop-shadow(0 5px 16px rgba(0, 0, 0, 0.19))
        drop-shadow(0 0 16px rgba(250, 204, 21, 0.2))
        drop-shadow(0 0 10px rgba(220, 38, 38, 0.18));
    }
  }
  @keyframes hero-float-shimmer-sweep {
    0% { background-position: 120% 40%; }
    100% { background-position: -20% 60%; }
  }
  @keyframes hero-float-shimmer-sweep-rev {
    0% { background-position: -30% 70%; }
    100% { background-position: 130% 30%; }
  }
  @keyframes hero-float-sparkle-twinkle {
    0%, 100% { opacity: 0.35; transform: translateZ(24px) scale(1); }
    40% { opacity: 0.95; transform: translateZ(24px) scale(1.08); }
    55% { opacity: 0.5; transform: translateZ(24px) scale(1.02); }
  }
  .hero-orbit-glitter-off .hero-float-levitate,
  .hero-orbit-glitter-off .hero-float-conic-aura,
  .hero-orbit-glitter-off .hero-float-tumbler,
  .hero-orbit-glitter-off .hero-float-pulse-ring,
  .hero-orbit-glitter-off .hero-float-coin-img,
  .hero-orbit-glitter-off .hero-float-shimmer,
  .hero-orbit-glitter-off .hero-float-shimmer-2,
  .hero-orbit-glitter-off .hero-float-sparkles {
    animation: none !important;
  }
  .hero-orbit-glitter-off .hero-float-conic-aura {
    opacity: 0.12;
    transform: none;
    filter: blur(8px);
  }
  .hero-orbit-glitter-off .hero-float-tumbler {
    transform: none;
  }
  .hero-orbit-glitter-off .hero-float-levitate {
    transform: none;
  }
  .hero-orbit-glitter-off .hero-float-coin-img {
    transform: none;
    filter: drop-shadow(0 5px 14px rgba(0, 0, 0, 0.2))
      drop-shadow(0 0 12px rgba(220, 38, 38, 0.14));
  }
  .hero-orbit-glitter-off .hero-float-shimmer { opacity: 0.22; }
  .hero-orbit-glitter-off .hero-float-shimmer-2 { opacity: 0.12; }
  .hero-orbit-glitter-off .hero-float-sparkles { opacity: 0.15; }
  .hero-orbit-glitter-off .hero-float-pulse-ring { opacity: 0.35; }
  @media (prefers-reduced-motion: reduce) {
    .hero-float-levitate,
    .hero-float-conic-aura,
    .hero-float-tumbler,
    .hero-float-pulse-ring,
    .hero-float-coin-img,
    .hero-float-shimmer,
    .hero-float-shimmer-2,
    .hero-float-sparkles {
      animation: none !important;
    }
    .hero-float-conic-aura { opacity: 0.1; transform: none; }
    .hero-float-tumbler,
    .hero-float-levitate { transform: none; }
    .hero-float-coin-img {
      transform: none;
      filter: drop-shadow(0 5px 14px rgba(0, 0, 0, 0.2))
        drop-shadow(0 0 12px rgba(220, 38, 38, 0.12));
    }
    .hero-float-shimmer { opacity: 0.2; }
    .hero-float-shimmer-2 { opacity: 0.1; }
    .hero-float-sparkles { opacity: 0.12; transform: none; }
    .hero-float-pulse-ring { opacity: 0.3; }
  }
`;

function paintOrbitalIcons(
  theta: Float64Array,
  spinRad: Float64Array,
  w: number,
  h: number,
  wrapRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  introElapsedSec: number,
  skipIntro: boolean,
) {
  const n = HERO_ORBIT_LOGOS.length;
  const {rx, ry} = heroOrbitEllipseAxes(w, h);
  const sch = computeFloatIntroSchedule(n);
  const introEnd = sch.introEnd;
  const D = FLOAT_INTRO_FLY_TO_ORBIT_SEC;

  for (let i = 0; i < n; i++) {
    const wrap = wrapRefs.current[i];
    if (!wrap) continue;
    const t = theta[i];
    const ox = rx * Math.cos(t);
    const oy = ry * Math.sin(t);
    const yCentreFan = introCentreFanOffsetY(i, n, ry);

    const visible = skipIntro || i === 0 || introElapsedSec >= sch.flyStart[i - 1];
    wrap.style.opacity = visible ? '1' : '0';

    let x: number;
    let y: number;
    let scaleMult: number;

    if (skipIntro) {
      x = ox;
      y = oy;
      scaleMult = 1;
    } else if (!visible) {
      x = 0;
      y = 0;
      scaleMult = 0.36;
    } else {
      const T = introElapsedSec;
      const fs = sch.flyStart[i];
      const fe = sch.flyEnd[i];
      const waitStart = i === 0 ? 0 : sch.flyStart[i - 1];
      const waitDur = Math.max(1e-6, fs - waitStart);

      if (T < fs) {
        x = 0;
        y = yCentreFan;
        const pop = easeInOutCubic((T - waitStart) / waitDur);
        scaleMult = 0.34 + 0.2 * pop;
      } else if (T < fe) {
        const p = easeInOutCubic((T - fs) / D);
        const pt = introArcPoint(0, yCentreFan, ox, oy, p);
        x = pt.x;
        y = pt.y;
        scaleMult = 0.54 + 0.46 * p;
      } else {
        x = ox;
        y = oy;
        scaleMult = 1;
      }
    }

    const depth = (Math.sin(t) + 1) / 2;
    const scale = scaleMult * (0.9 + 0.14 * depth);
    const orbitWobble = (t * 180) / Math.PI * 0.035;
    const spinDeg = (spinRad[i] * 180) / Math.PI;
    const tilt = HERO_ORBIT_LOGOS[i].baseTiltDeg + orbitWobble + spinDeg;
    const introActive = !skipIntro && introElapsedSec < introEnd - 0.02;
    const z = introActive ? 26 + i : 15 + Math.round(depth * 40);
    wrap.style.zIndex = String(z);
    wrap.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${tilt}deg) scale(${scale})`;
  }
}

type OrbitAnimState = {orbitPhase: number; spinRad: Float64Array};

/**
 * Elliptical path; single shared phase so every icon stays at exactly 360°/8 apart. Very slow
 * orbit + slow per-icon spin on its own axis.
 */
function HeroOrbitalFloats({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const reduce = useReducedMotion();
  const [box, setBox] = useState({w: 0, h: 0});
  const [floatReady, setFloatReady] = useState(!!reduce);
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dimsRef = useRef({w: 0, h: 0});
  const animRef = useRef<OrbitAnimState | null>(null);

  useEffect(() => {
    if (reduce) setFloatReady(true);
  }, [reduce]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      dimsRef.current = {w: r.width, h: r.height};
      setBox({w: r.width, h: r.height});
    });
    ro.observe(el);
    const r = el.getBoundingClientRect();
    dimsRef.current = {w: r.width, h: r.height};
    setBox({w: r.width, h: r.height});
    return () => ro.disconnect();
  }, [containerRef]);

  useEffect(() => {
    if (reduce) return;

    const n = HERO_ORBIT_LOGOS.length;
    const spinRad = new Float64Array(n);
    const spinOmega = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      spinRad[i] = (i / n) * TWO_PI;
      const dir = i % 2 === 0 ? 1 : -1;
      spinOmega[i] = dir * SELF_SPIN_BASE;
    }
    animRef.current = {orbitPhase: 0, spinRad};

    const theta = new Float64Array(n);
    let rafId = 0;
    let last = performance.now();
    let introStartMs: number | null = null;

    const introDoneAt = floatIntroTotalDurationSec(n);

    const step = (now: number) => {
      const ph = animRef.current;
      if (!ph) return;

      let dt = (now - last) / 1000;
      last = now;
      dt = Math.min(0.045, Math.max(0, dt));

      const {w, h} = dimsRef.current;
      if (w < 48 || h < 48) return;

      if (introStartMs === null) introStartMs = now;
      const introElapsedSec = (now - introStartMs) / 1000;

      if (introElapsedSec >= introDoneAt) {
        ph.orbitPhase = wrapAngle(ph.orbitPhase + ORBIT_OMEGA * dt);
      }

      for (let i = 0; i < n; i++) {
        ph.spinRad[i] += spinOmega[i] * dt;
        theta[i] = wrapAngle(ph.orbitPhase + (i / n) * TWO_PI);
      }

      paintOrbitalIcons(theta, ph.spinRad, w, h, wrapRefs, introElapsedSec, false);
    };

    const loop = (now: number) => {
      step(now);
      rafId = requestAnimationFrame(loop);
    };

    step(performance.now());
    setFloatReady(true);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      animRef.current = null;
    };
  }, [reduce, containerRef]);

  const staticStyles: React.CSSProperties[] | null =
    reduce && box.w > 48 && box.h > 48
      ? HERO_ORBIT_LOGOS.map((item, i) => {
          const {rx, ry} = heroOrbitEllipseAxes(box.w, box.h);
          const t = (i / HERO_ORBIT_LOGOS.length) * TWO_PI;
          const x = rx * Math.cos(t);
          const y = ry * Math.sin(t);
          const depth = (y / ry + 1) / 2;
          const scale = 0.9 + 0.14 * depth;
          const orbitWobble = (t * 180) / Math.PI * 0.035;
          const tilt = item.baseTiltDeg + orbitWobble;
          const z = 15 + Math.round(depth * 40);
          return {
            zIndex: z,
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${tilt}deg) scale(${scale})`,
          };
        })
      : null;

  const layerVisible = box.w >= 48 && floatReady;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[20] overflow-visible transition-opacity duration-150 ${layerVisible ? 'opacity-100' : 'opacity-0'} ${reduce ? 'hero-orbit-glitter-off' : ''}`}
      aria-hidden
    >
      <style>{HERO_FLOAT_GLITTER_CSS}</style>
      {HERO_ORBIT_LOGOS.map((item, i) => (
        <div
          key={item.src}
          ref={(el) => {
            wrapRefs.current[i] = el;
          }}
          className="hero-float-wrap"
          style={{
            ...(staticStyles ? staticStyles[i] : undefined),
            ['--hero-float-delay' as string]: `${i * 0.38}s`,
          }}
        >
          <div className="hero-float-inner">
            <div className="hero-float-levitate">
              <div className="hero-float-conic-aura" aria-hidden />
              <div className="hero-float-pulse-ring" aria-hidden />
              <div className="hero-float-tumbler">
                <img
                  src={item.src}
                  alt=""
                  width={80}
                  height={80}
                  loading="eager"
                  decoding="async"
                  className="hero-float-coin-img max-w-none select-none"
                  draggable={false}
                />
                <div className="hero-float-shimmer" aria-hidden />
                <div className="hero-float-shimmer-2" aria-hidden />
                <div className="hero-float-sparkles" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
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

export const Hero = () => {
  const heroVisualRef = useRef<HTMLDivElement>(null);

  return (
  <section className="relative overflow-x-visible overflow-y-hidden bg-white pt-5 pb-10 sm:pt-6 sm:pb-11 lg:pt-7 lg:pb-14">
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
            <Button size="lg" className="px-10 py-4 text-lg lg:px-12">
              Get Started <ArrowRight size={20} />
            </Button>
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
            <div
              ref={heroVisualRef}
              className="relative w-full max-w-[min(100%,420px)] overflow-visible sm:max-w-[min(100%,480px)] lg:max-w-[min(100%,520px)]"
            >
              <img
                src={HERO_MAIN_SRC}
                alt="Revo Capital — web and mobile trading"
                width={628}
                height={797}
                loading="eager"
                decoding="async"
                className="relative z-10 block h-auto w-full object-contain"
              />
              <HeroOrbitalFloats containerRef={heroVisualRef} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="fixed bottom-6 right-6 z-100">
      <Button size="icon" className="h-14 w-14" aria-label="Open chat">
        <MessageCircle size={28} fill="white" />
      </Button>
    </div>
  </section>
  );
};
