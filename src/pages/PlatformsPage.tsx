import React, {useLayoutEffect, useRef, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {useNavigate} from 'react-router-dom';
import {
  Globe,
  Zap,
  LineChart,
  ClipboardList,
  ShieldCheck,
  MonitorSmartphone,
  LayoutList,
  ChartCandlestick,
  ArrowLeftRight,
  Wallet,
  AppWindow,
  Flame,
  Compass,
  Monitor,
  Smartphone,
  Tablet,
  Wifi,
  Sparkles,
} from 'lucide-react';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {TopContactBar} from '../components/TopContactBar';
import {ROUTES} from '../routes/paths';

const C = {
  primary: '#e50914',
  primaryHover: '#b80710',
  navy: '#020617',
  navyMid: '#0f172a',
  white: '#ffffff',
  grey: '#64748b',
  greyLight: '#94a3b8',
  greyBg: '#f1f5f9',
  borderSubtle: 'rgba(148, 163, 184, 0.15)',
} as const;

const font = "'Poppins', system-ui, -apple-system, sans-serif";

const sectionPad = {
  padding: 'clamp(70px, 10vw, 100px) clamp(16px, 4vw, 40px)',
} as const;

const transition = 'all 0.3s ease';

/** Key Features section: left tabs + right preview (paths under /public/images/logos/) */
const KEY_FEATURE_TABS = [
  {
    title: 'Instant Market Access',
    bullets: ['No installation required', 'Fast execution', 'Always updated'],
    imageSrc: '/images/logos/KeyFeatures1.svg',
    imageAlt: 'RevoTrader — instant market access',
    frameBg: C.white,
  },
  {
    title: 'Comprehensive Markets',
    bullets: ['Forex, indices, metals & more', 'Deep liquidity', 'Competitive spreads'],
    imageSrc: '/images/logos/KeyFeatures2.svg',
    imageAlt: 'RevoTrader — comprehensive markets',
    frameBg: C.white,
  },
  {
    title: 'Professional Tools',
    bullets: ['Advanced charting', 'Multiple order types', 'Risk controls'],
    imageSrc: '/images/logos/KeyFeatures3.svg',
    imageAlt: 'RevoTrader — professional trading tools',
    frameBg: C.white,
  },
  {
    title: 'Complete Control',
    bullets: ['Positions & orders in one view', 'Real-time account data', 'Secure sessions'],
    imageSrc: '/images/logos/KeyFeatures4.svg',
    imageAlt: 'RevoTrader — account and order control',
    frameBg: C.white,
  },
] as const;

function DashboardFeatureIcon({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  /** Smaller tile for dashboard side cards (image-focused layout) */
  compact?: boolean;
}) {
  return (
    <div
      style={{
        width: compact ? 32 : 44,
        height: compact ? 32 : 44,
        borderRadius: compact ? 8 : 12,
        background: 'rgba(229, 9, 20, 0.1)',
        marginBottom: compact ? 8 : 14,
        border: '1px solid rgba(229, 9, 20, 0.2)',
        boxShadow: compact ? '0 1px 2px rgba(229, 9, 20, 0.06)' : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function Placeholder({
  label,
  ratio = '16/10',
  minH = 280,
}: {
  label: string;
  ratio?: string;
  minH?: number;
}) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        minHeight: minH,
        width: '100%',
        borderRadius: 16,
        background: `linear-gradient(145deg, ${C.navyMid} 0%, ${C.navy} 100%)`,
        border: `1px solid ${C.borderSubtle}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: C.greyLight,
        fontFamily: font,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase' as const,
        boxShadow: '0 24px 64px -24px rgba(2, 6, 23, 0.6)',
      }}
    >
      {label}
    </div>
  );
}

export const PlatformsPage = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [benefitHover, setBenefitHover] = useState<number | null>(null);
  const [featureTab, setFeatureTab] = useState(0);
  const [ctaHover, setCtaHover] = useState(false);
  const [heroCtaHover, setHeroCtaHover] = useState(false);
  const [accessCtaHover, setAccessCtaHover] = useState(false);
  const [howStepHover, setHowStepHover] = useState<number | null>(null);
  const howTimelineRef = useRef<HTMLDivElement>(null);
  const howDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [howLine, setHowLine] = useState({top: 0, height: 0, left: 14});

  const howActiveIndex = howStepHover !== null ? howStepHover : 0;

  const keyFeatureIndex = Math.min(
    Math.max(featureTab, 0),
    KEY_FEATURE_TABS.length - 1,
  );
  const activeKeyFeature = KEY_FEATURE_TABS[keyFeatureIndex];

  const benefits = [
    {
      title: 'Zero Installation',
      desc: 'Launch the platform instantly from any modern browser—no downloads or setup.',
      icon: Globe,
    },
    {
      title: 'Real-Time Execution',
      desc: 'Low-latency routing designed for responsive fills when markets move fast.',
      icon: Zap,
    },
    {
      title: 'Advanced Charting',
      desc: 'Professional charts, timeframes, and drawing tools built for serious analysis.',
      icon: LineChart,
    },
    {
      title: 'Multiple Order Types',
      desc: 'Market, limit, stop, and more—structure entries and exits your way.',
      icon: ClipboardList,
    },
    {
      title: 'Risk Management Tools',
      desc: 'Stops, limits, and visibility into exposure to help you stay in control.',
      icon: ShieldCheck,
    },
    {
      title: 'Multi-Device Access',
      desc: 'Trade from desktop, tablet, or mobile with a consistent web experience.',
      icon: MonitorSmartphone,
    },
  ];

  const howSteps = [
    {n: 1, title: 'Open RevoTrader in your browser', desc: 'Navigate to the platform and load the terminal in one click.'},
    {n: 2, title: 'Log in with your account', desc: 'Use your Revo Capital credentials to access your workspace.'},
    {n: 3, title: 'Analyze charts and markets', desc: 'Review instruments, watchlists, and technical studies in real time.'},
    {n: 4, title: 'Place trades and manage positions', desc: 'Execute orders and monitor P&L from a unified dashboard.'},
  ];

  useLayoutEffect(() => {
    const measure = () => {
      const root = howTimelineRef.current;
      const first = howDotRefs.current[0];
      const end = howDotRefs.current[howActiveIndex];
      if (!root || !first || !end) return;
      const rr = root.getBoundingClientRect();
      const fr = first.getBoundingClientRect();
      const er = end.getBoundingClientRect();
      const top = fr.top - rr.top + fr.height / 2;
      const endY = er.top - rr.top + er.height / 2;
      const left = fr.left - rr.left + fr.width / 2;
      setHowLine({top, height: Math.max(endY - top, 6), left});
    };
    measure();
    const rootEl = howTimelineRef.current;
    const ro = new ResizeObserver(() => measure());
    if (rootEl) ro.observe(rootEl);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [howActiveIndex]);

  return (
    <div style={{minHeight: '100vh', background: C.white, fontFamily: font, color: C.navy, WebkitFontSmoothing: 'antialiased'}}>
      <style>{`
        .platforms-dash-grid {
          display: grid;
          gap: clamp(20px, 4vw, 32px);
          grid-template-columns: 1fr;
          grid-template-areas:
            "dash-img"
            "dash-left"
            "dash-right";
          align-items: start;
        }
        @media (min-width: 1024px) {
          .platforms-dash-grid {
            grid-template-columns: minmax(160px, 0.52fr) minmax(360px, 1.96fr) minmax(160px, 0.52fr);
            grid-template-areas: "dash-left dash-img dash-right";
            align-items: center;
            gap: clamp(14px, 2.5vw, 28px) clamp(12px, 2vw, 22px);
          }
        }
        .platforms-dash-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          width: 100%;
          max-width: 228px;
        }
        .platforms-dash-side--left {
          margin-left: auto;
          margin-right: 0;
        }
        .platforms-dash-side--right {
          margin-right: auto;
          margin-left: 0;
        }
        @media (max-width: 1023px) {
          .platforms-dash-side {
            max-width: none;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        .platforms-dash-card {
          padding: 12px 13px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow:
            0 1px 2px rgba(15, 23, 42, 0.04),
            0 6px 16px -6px rgba(15, 23, 42, 0.08);
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .platforms-dash-card:hover {
          box-shadow:
            0 4px 12px -4px rgba(15, 23, 42, 0.1),
            0 16px 36px -12px rgba(229, 9, 20, 0.12);
          border-color: rgba(229, 9, 20, 0.22);
          transform: translateY(-2px);
        }
        .platforms-dash-card__title {
          font-size: 13px;
          font-weight: 700;
          color: ${C.navy};
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .platforms-dash-card__desc {
          margin: 6px 0 0;
          font-size: 12px;
          color: ${C.grey};
          line-height: 1.5;
        }
        .platforms-dash-visual-wrap {
          width: 100%;
          max-width: min(100%, 820px);
          margin: 0 auto;
          align-self: center;
        }
        /* Soft spotlight behind device — Revo tint */
        .platforms-dash-device-shell {
          position: relative;
          padding: clamp(20px, 4vw, 40px) clamp(12px, 3vw, 24px);
          border-radius: 36px;
          background: radial-gradient(ellipse 75% 65% at 50% 38%, rgba(229, 9, 20, 0.09) 0%, transparent 58%),
            radial-gradient(ellipse 90% 55% at 50% 85%, rgba(15, 23, 42, 0.05) 0%, transparent 50%);
        }
        /* Very light grey tablet chassis */
        .platforms-dash-tablet {
          position: relative;
          width: 100%;
          padding: 14px 16px 18px;
          border-radius: 26px;
          background: linear-gradient(180deg, #ffffff 0%, #fafbfc 28%, #f4f5f7 55%, #eef0f3 100%);
          box-shadow:
            0 0 0 1px rgba(148, 163, 184, 0.22),
            0 1px 0 rgba(255, 255, 255, 1) inset,
            0 -1px 0 rgba(148, 163, 184, 0.12) inset,
            0 12px 40px -16px rgba(15, 23, 42, 0.14),
            0 4px 16px -8px rgba(15, 23, 42, 0.08);
        }
        .platforms-dash-tablet__camera {
          width: 40px;
          height: 5px;
          border-radius: 100px;
          margin: 0 auto 11px;
          background: linear-gradient(180deg, #e8ecf0 0%, #d1d9e0 100%);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.95),
            inset 0 -1px 2px rgba(15, 23, 42, 0.08);
        }
        /* Screen recess on light bezel */
        .platforms-dash-tablet__screen {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #e2e8f0;
          line-height: 0;
          box-shadow:
            0 0 0 1px rgba(15, 23, 42, 0.1),
            inset 0 2px 6px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.65);
        }
        .platforms-dash-tablet__img {
          width: 100%;
          height: auto;
          display: block;
          vertical-align: top;
          transform: translateZ(0);
        }
        .platforms-dash-tablet__chin {
          width: 128px;
          height: 4px;
          border-radius: 100px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.35) 50%, transparent 100%);
          opacity: 0.9;
        }
        .platforms-key-feature-img-host {
          display: grid;
          width: 100%;
          line-height: 0;
        }
        .platforms-key-feature-img-host > * {
          grid-area: 1 / 1;
          align-self: start;
          justify-self: stretch;
        }
        .platforms-key-feature-img-host .platforms-key-feature-img {
          width: 100%;
          height: auto;
          max-height: none;
          object-fit: contain;
          object-position: center top;
          display: block;
        }
        @media (prefers-reduced-motion: reduce) {
          .platforms-dash-card:hover {
            transform: none;
          }
        }
        @keyframes platforms-how-border-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .platforms-how-visual {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
          padding: 3px;
          border-radius: 18px;
          overflow: hidden;
        }
        .platforms-how-visual--wide {
          max-width: none;
        }
        .platforms-how-visual__ring {
          position: absolute;
          inset: -120%;
          z-index: 0;
          background: conic-gradient(
            from 0deg,
            #e50914,
            rgba(229, 9, 20, 0.2) 14%,
            #e50914 28%,
            rgba(229, 9, 20, 0.12) 42%,
            #ff4d4d 56%,
            rgba(229, 9, 20, 0.18) 70%,
            #e50914 84%,
            rgba(229, 9, 20, 0.25) 100%
          );
          animation: platforms-how-border-spin 4.8s linear infinite;
        }
        .platforms-how-visual__inner {
          position: relative;
          z-index: 1;
          border-radius: 15px;
          overflow: hidden;
          background: #ffffff;
        }
        .platforms-how-visual__img {
          width: 100%;
          height: auto;
          min-height: 0;
          object-fit: contain;
          display: block;
        }
        .platforms-how-visual__img--zoom {
          transform: scale(1.14);
          transform-origin: center center;
        }
        @media (prefers-reduced-motion: reduce) {
          .platforms-how-visual__ring {
            animation: none;
          }
        }
        .platforms-access-section {
          position: relative;
          overflow: hidden;
        }
        .platforms-access-bg {
          pointer-events: none;
          position: absolute;
          inset: 0;
        }
        .platforms-access-bg::before {
          content: '';
          position: absolute;
          width: min(720px, 90vw);
          height: min(420px, 55vh);
          top: -18%;
          right: -12%;
          background: radial-gradient(ellipse, rgba(229, 9, 20, 0.22) 0%, transparent 68%);
        }
        .platforms-access-bg::after {
          content: '';
          position: absolute;
          width: min(560px, 85vw);
          height: min(380px, 50vh);
          bottom: -28%;
          left: -18%;
          background: radial-gradient(ellipse, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
        }
        .platforms-access-grid-pattern {
          pointer-events: none;
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.7) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 85% 75% at 50% 35%, black 0%, transparent 72%);
        }
      `}</style>
      <TopContactBar />
      <Navbar />

      {/* SECTION 1 — HERO (DARK) */}
      <section
        style={{
          ...sectionPad,
          paddingBottom: 'clamp(100px, 14vw, 140px)',
          background: `linear-gradient(165deg, ${C.navy} 0%, #0a1628 45%, ${C.navyMid} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '55%',
            height: '80%',
            background: `radial-gradient(ellipse at center, ${C.primary}18 0%, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1}}>
          <div
            style={{
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                color: C.white,
              }}
            >
              RevoTrader
            </h1>
            <p
              style={{
                margin: '20px 0 0',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.92)',
              }}
            >
              Trade Global Markets from Your Browser
            </p>
            <p
              style={{
                margin: '16px auto 0',
                fontSize: 17,
                lineHeight: 1.65,
                color: C.greyLight,
                maxWidth: 560,
                width: '100%',
              }}
            >
              No downloads. No delays. Just powerful trading experience at your fingertips.
            </p>
            <button
              type="button"
              onClick={() => navigate(ROUTES.signup)}
              onMouseEnter={() => setHeroCtaHover(true)}
              onMouseLeave={() => setHeroCtaHover(false)}
              style={{
                marginTop: 36,
                padding: '16px 36px',
                borderRadius: 999,
                border: 'none',
                cursor: 'pointer',
                fontFamily: font,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: C.white,
                background: heroCtaHover ? C.primaryHover : C.primary,
                boxShadow: `0 16px 40px -12px ${C.primary}66`,
                transition,
              }}
            >
              START TRADING NOW
            </button>
          </div>

          <div
            style={{
              marginTop: 'clamp(48px, 8vw, 72px)',
              marginBottom: -80,
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <img
              src="/images/logos/laptop-screen.svg"
              alt="RevoTrader dashboard on laptop"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 'min(76vh, 720px)',
                objectFit: 'contain',
                display: 'block',
                transform: 'scale(1.06)',
                transformOrigin: 'center top',
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENEFITS (DARK GRID) */}
      <section
        style={{
          ...sectionPad,
          paddingTop: 'clamp(100px, 12vw, 140px)',
          background: `linear-gradient(180deg, #0a1628 0%, ${C.navy} 100%)`,
        }}
      >
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div style={{textAlign: 'center', maxWidth: 640, margin: '0 auto 56px'}}>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.02em',
              }}
            >
              Benefits of RevoTrader
            </h2>
            <p style={{margin: '14px 0 0', fontSize: 17, color: C.greyLight, lineHeight: 1.6}}>
              Trade directly from your browser with powerful features
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 24,
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={b.title}
                onMouseEnter={() => setBenefitHover(i)}
                onMouseLeave={() => setBenefitHover(null)}
                style={{
                  padding: '28px 24px',
                  borderRadius: 16,
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: `1px solid ${benefitHover === i ? `${C.primary}55` : C.borderSubtle}`,
                  boxShadow:
                    benefitHover === i
                      ? `0 20px 48px -16px rgba(0,0,0,0.45), 0 0 0 1px ${C.primary}33`
                      : '0 12px 32px -20px rgba(0,0,0,0.35)',
                  transform: benefitHover === i ? 'translateY(-8px)' : 'translateY(0)',
                  transition,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `linear-gradient(145deg, ${C.primary}22, ${C.primary}08)`,
                    border: `1px solid ${C.primary}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    marginBottom: 18,
                  }}
                >
                  <b.icon size={24} strokeWidth={2} color="#f8fafc" />
                </div>
                <h3 style={{margin: 0, fontSize: 18, fontWeight: 700, color: C.white}}>{b.title}</h3>
                <p style={{margin: '10px 0 0', fontSize: 14, lineHeight: 1.55, color: C.grey}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW TO START */}
      <section style={{...sectionPad, background: C.white}}>
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 56,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                flex: '1 1 340px',
                minWidth: 280,
                maxWidth: 640,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/logos/How-Start.svg"
                alt="RevoTrader trading dashboard"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  background: 'transparent',
                }}
              />
            </div>
            <div style={{flex: '1 1 320px', minWidth: 280}}>
              <h2
                style={{
                  margin: '0 0 32px',
                  fontSize: 'clamp(1.65rem, 3vw, 2.1rem)',
                  fontWeight: 800,
                  color: C.navy,
                  letterSpacing: '-0.02em',
                }}
              >
                How to Start
              </h2>
              <div
                ref={howTimelineRef}
                style={{
                  position: 'relative',
                  overflow: 'visible',
                  paddingTop: 12,
                  paddingBottom: 10,
                  paddingRight: 10,
                }}
                onMouseLeave={() => setHowStepHover(null)}
              >
                {/* Match PartnerStepsTimeline: full-height grey track + animated red progress */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: howLine.left,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: '#e2e8f0',
                    borderRadius: 1,
                    transform: 'translateX(-50%)',
                    opacity: 0.9,
                    zIndex: 0,
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: howLine.left,
                    top: howLine.top,
                    width: 2,
                    height: howLine.height,
                    background: C.primary,
                    borderRadius: 1,
                    transform: 'translateX(-50%)',
                    boxShadow: `0 0 12px ${C.primary}66`,
                    transition:
                      'top 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1,
                  }}
                />
                {howSteps.map((s, i) => {
                  const active = i === howActiveIndex;
                  const explicitHover = howStepHover === i;
                  const dimOthers = howStepHover !== null && howStepHover !== i;
                  return (
                    <div
                      key={s.n}
                      role="presentation"
                      onMouseEnter={() => setHowStepHover(i)}
                      style={{
                        display: 'flex',
                        gap: 18,
                        alignItems: 'flex-start',
                        marginBottom: s.n < 4 ? 20 : 0,
                        position: 'relative',
                        zIndex: explicitHover ? 3 : 2,
                        cursor: 'default',
                        opacity: dimOthers ? 0.42 : 1,
                        boxSizing: 'border-box',
                        transition: 'opacity 0.35s ease',
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          flexShrink: 0,
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: 18,
                        }}
                      >
                        <div
                          ref={(el) => {
                            howDotRefs.current[i] = el;
                          }}
                          style={{
                            width: active ? 16 : 13,
                            height: active ? 16 : 13,
                            borderRadius: '50%',
                            background: active ? C.primary : '#cbd5e1',
                            boxShadow: active
                              ? `0 0 0 5px ${C.primary}28, 0 2px 8px ${C.primary}44`
                              : 'none',
                            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                            flexShrink: 0,
                          }}
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                          padding: '16px 18px 18px',
                          borderRadius: 14,
                          borderWidth: 2,
                          borderStyle: 'solid',
                          borderColor: active ? C.primary : 'transparent',
                          background: explicitHover ? C.white : active ? `${C.primary}08` : 'transparent',
                          transform: explicitHover && i > 0 ? 'translateY(-4px)' : 'none',
                          boxShadow: explicitHover ? '0 16px 40px -16px rgba(15, 23, 42, 0.16)' : 'none',
                          boxSizing: 'border-box',
                          transition:
                            'transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.35s ease, border-color 0.25s ease, background 0.35s ease',
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            color: active ? C.primary : C.greyLight,
                            marginBottom: 6,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          STEP {s.n}
                        </div>
                        <div
                          style={{
                            fontSize: 17,
                            fontWeight: 700,
                            color: active ? C.navy : C.greyLight,
                            marginBottom: 6,
                            lineHeight: 1.28,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {s.title}
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 14,
                            lineHeight: 1.55,
                            color: active ? C.grey : C.greyLight,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => navigate(ROUTES.login)}
                onMouseEnter={() => setAccessCtaHover(true)}
                onMouseLeave={() => setAccessCtaHover(false)}
                style={{
                  marginTop: 32,
                  width: '100%',
                  maxWidth: 400,
                  padding: '16px 28px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: font,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: C.white,
                  background: accessCtaHover ? C.primaryHover : C.primary,
                  boxShadow: `0 12px 32px -8px ${C.primary}55`,
                  transition,
                }}
              >
                ACCESS PLATFORM NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES */}
      <section style={{...sectionPad, background: C.greyBg}}>
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: 48}}>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(1.75rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: C.navy,
              }}
            >
              Key Features
            </h2>
            <p style={{margin: '12px 0 0', fontSize: 17, color: C.grey}}>Access global markets seamlessly</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 480}}>
              {KEY_FEATURE_TABS.map((tab, idx) => {
                const active = idx === featureTab;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setFeatureTab(idx)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left' as const,
                      padding: '18px 20px',
                      marginBottom: 10,
                      borderRadius: 12,
                      border: active ? `2px solid ${C.primary}` : `1px solid ${C.borderSubtle}`,
                      background: active ? C.white : 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      fontFamily: font,
                      transition,
                      boxShadow: active ? '0 12px 32px -12px rgba(2,6,23,0.12)' : 'none',
                    }}
                  >
                    <span style={{fontSize: 16, fontWeight: 700, color: active ? C.primary : C.navy}}>{tab.title}</span>
                  </button>
                );
              })}
              <div
                style={{
                  marginTop: 24,
                  padding: '24px',
                  borderRadius: 16,
                  background: C.white,
                  border: `1px solid ${C.borderSubtle}`,
                }}
              >
                {activeKeyFeature.bullets.map((line) => (
                  <div
                    key={line}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      marginBottom: 12,
                      fontSize: 15,
                      color: C.navyMid,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{color: C.primary, fontWeight: 800, flexShrink: 0}}>✔</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{flex: '1 1 300px', minWidth: 280}}>
              <div className="platforms-how-visual">
                <div className="platforms-how-visual__ring" aria-hidden />
                <div
                  className="platforms-how-visual__inner"
                  style={{
                    background: activeKeyFeature.frameBg,
                    transition: 'background 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <div className="platforms-key-feature-img-host">
                    <AnimatePresence mode="sync" initial={false}>
                      <motion.img
                        key={activeKeyFeature.imageSrc}
                        className="platforms-how-visual__img platforms-key-feature-img"
                        src={activeKeyFeature.imageSrc}
                        alt={activeKeyFeature.imageAlt}
                        loading="eager"
                        decoding="async"
                        initial={reduceMotion ? {opacity: 1} : {opacity: 0}}
                        animate={{opacity: 1}}
                        exit={reduceMotion ? {opacity: 1} : {opacity: 0}}
                        transition={
                          reduceMotion
                            ? {duration: 0}
                            : {duration: 0.7, ease: [0.16, 1, 0.32, 1]}
                        }
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DASHBOARD FEATURES */}
      <section style={{...sectionPad, background: C.white}}>
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 56px)'}}>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
                fontWeight: 800,
                color: C.navy,
                letterSpacing: '-0.03em',
              }}
            >
              Your Trading Dashboard
            </h2>
            <p style={{margin: '14px auto 0', fontSize: 17, color: C.grey, maxWidth: 520, lineHeight: 1.55}}>
              Explore the core features of RevoTrader
            </p>
          </div>

          <div className="platforms-dash-grid">
            <div className="platforms-dash-side platforms-dash-side--left" style={{gridArea: 'dash-left'}}>
              {(
                [
                  {
                    t: 'Market Watch',
                    d: 'Track symbols, spreads, and session activity at a glance.',
                    Icon: LayoutList,
                  },
                  {
                    t: 'Chart Panel',
                    d: 'Multi-timeframe charts with indicators and drawing tools.',
                    Icon: ChartCandlestick,
                  },
                  {
                    t: 'Trading Panel',
                    d: 'Place and modify orders with clear execution feedback.',
                    Icon: ArrowLeftRight,
                  },
                ] as const
              ).map((f) => {
                const Icon = f.Icon;
                return (
                  <div key={f.t} className="platforms-dash-card">
                    <DashboardFeatureIcon compact>
                      <Icon size={17} strokeWidth={2} color={C.primary} aria-hidden />
                    </DashboardFeatureIcon>
                    <div className="platforms-dash-card__title">{f.t}</div>
                    <p className="platforms-dash-card__desc">{f.d}</p>
                  </div>
                );
              })}
            </div>

            <div className="platforms-dash-visual-wrap" style={{gridArea: 'dash-img'}}>
              <div className="platforms-dash-device-shell">
                <div className="platforms-dash-tablet">
                  <div className="platforms-dash-tablet__camera" aria-hidden />
                  <div className="platforms-dash-tablet__screen">
                    <img
                      className="platforms-dash-tablet__img"
                      src="/images/logos/crm-image.svg"
                      alt="RevoTrader trading dashboard"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="platforms-dash-tablet__chin" aria-hidden />
                </div>
              </div>
            </div>

            <div className="platforms-dash-side platforms-dash-side--right" style={{gridArea: 'dash-right'}}>
              {(
                [
                  {
                    t: 'Account Overview',
                    d: 'Balance, equity, margin, and exposure in one snapshot.',
                    Icon: Wallet,
                  },
                  {
                    t: 'Positions & Orders',
                    d: 'Monitor open trades, pending orders, and history.',
                    Icon: ClipboardList,
                  },
                ] as const
              ).map((f) => {
                const Icon = f.Icon;
                return (
                  <div key={f.t} className="platforms-dash-card">
                    <DashboardFeatureIcon compact>
                      <Icon size={17} strokeWidth={2} color={C.primary} aria-hidden />
                    </DashboardFeatureIcon>
                    <div className="platforms-dash-card__title">{f.t}</div>
                    <p className="platforms-dash-card__desc">{f.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ACCESS ANYWHERE (DARK) */}
      <section
        className="platforms-access-section"
        style={{
          ...sectionPad,
          paddingBottom: 'clamp(44px, 6.5vw, 64px)',
          background: `linear-gradient(180deg, ${C.navy} 0%, #070d18 42%, #0a1628 100%)`,
        }}
      >
        <div className="platforms-access-bg" aria-hidden />
        <div className="platforms-access-grid-pattern" aria-hidden />
        <div style={{maxWidth: 1180, margin: '0 auto', position: 'relative', zIndex: 1}}>
          <motion.div
            initial={reduceMotion ? false : {opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={
              reduceMotion ? {duration: 0} : {duration: 0.55, ease: [0.16, 1, 0.32, 1]}
            }
            style={{textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 44px)'}}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 14,
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: 'rgba(248, 250, 252, 0.85)',
                background: 'rgba(229, 9, 20, 0.12)',
                border: '1px solid rgba(229, 9, 20, 0.28)',
              }}
            >
              <Sparkles size={14} color={C.primary} aria-hidden />
              Cross-platform
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
                fontWeight: 800,
                color: C.white,
                letterSpacing: '-0.03em',
              }}
            >
              Access From Anywhere
            </h2>
            <p
              style={{
                margin: '14px auto 0',
                maxWidth: 480,
                fontSize: 17,
                lineHeight: 1.55,
                color: C.greyLight,
              }}
            >
              Built for flexibility and performance—open RevoTrader in your browser on the devices you already use.
            </p>
          </motion.div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(20px, 3vw, 28px)',
              alignItems: 'stretch',
            }}
          >
            {(
              [
                {
                  title: 'Supported browsers',
                  rows: [
                    {label: 'Chrome', Icon: Globe},
                    {label: 'Edge', Icon: AppWindow},
                    {label: 'Firefox', Icon: Flame},
                    {label: 'Safari', Icon: Compass},
                  ] as const,
                },
                {
                  title: 'Supported devices',
                  rows: [
                    {label: 'Desktop', Icon: Monitor},
                    {label: 'Mobile', Icon: Smartphone},
                    {label: 'Tablet', Icon: Tablet},
                  ] as const,
                },
              ] as const
            ).map((block, blockIdx) => (
              <motion.div
                key={block.title}
                initial={reduceMotion ? false : {opacity: 0, y: 28}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-50px'}}
                transition={
                  reduceMotion
                    ? {duration: 0}
                    : {duration: 0.55, delay: blockIdx * 0.06, ease: [0.16, 1, 0.32, 1]}
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {y: -5, transition: {duration: 0.22, ease: [0.16, 1, 0.32, 1]}}
                }
                style={{
                  padding: 'clamp(22px, 3.5vw, 30px)',
                  borderRadius: 20,
                  background:
                    'linear-gradient(155deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 40%, rgba(2,6,23,0.55) 100%)',
                  border: '1px solid rgba(148, 163, 184, 0.22)',
                  boxShadow:
                    '0 4px 28px -10px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 18px',
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    color: C.primary,
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {block.title}
                </h3>
                <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
                  {block.rows.map(({label, Icon}, rowIdx) => (
                    <li
                      key={label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        marginBottom: rowIdx === block.rows.length - 1 ? 0 : 14,
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 42,
                          height: 42,
                          flexShrink: 0,
                          borderRadius: 12,
                          background: 'rgba(229, 9, 20, 0.14)',
                          border: '1px solid rgba(229, 9, 20, 0.22)',
                          color: C.primary,
                        }}
                      >
                        <Icon size={20} strokeWidth={2} aria-hidden />
                      </span>
                      <span style={{color: C.white, fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em'}}>
                        {label}
                      </span>
                      <span
                        style={{
                          marginLeft: 'auto',
                          color: C.primary,
                          fontSize: 13,
                          fontWeight: 800,
                        }}
                        aria-hidden
                      >
                        ✓
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={reduceMotion ? false : {opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={reduceMotion ? {duration: 0} : {duration: 0.45, delay: 0.12}}
            style={{textAlign: 'center', marginTop: 'clamp(24px, 4vw, 32px)'}}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '11px 22px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(226, 232, 240, 0.92)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 8px 24px -12px rgba(0,0,0,0.35)',
              }}
            >
              <Wifi size={17} strokeWidth={2} color={C.primary} aria-hidden />
              Stable internet connection required
            </span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section
        style={{
          ...sectionPad,
          position: 'relative',
          minHeight: 380,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${C.navyMid} 0%, ${C.navy} 50%, #1e293b 100%)`,
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.75) 50%, rgba(2,6,23,0.88) 100%)',
            zIndex: 1,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.35,
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        />
        <div style={{position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720, padding: '0 16px'}}>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: C.primary,
              textTransform: 'uppercase' as const,
            }}
          >
            Banner placeholder — replace with image
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: C.white,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Trade?
          </h2>
          <p style={{margin: '16px 0 0', fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55}}>
            Access global markets with RevoTrader
          </p>
          <button
            type="button"
            onClick={() => navigate(ROUTES.signup)}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              marginTop: 32,
              padding: '16px 40px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              fontFamily: font,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: C.white,
              background: ctaHover ? C.primaryHover : C.primary,
              boxShadow: `0 16px 40px -10px ${C.primary}88`,
              transition,
              width: '100%',
              maxWidth: 320,
            }}
          >
            START TRADING NOW
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
