import React, {useLayoutEffect, useRef, useState} from 'react';
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

function DashboardFeatureIcon({children}: {children: React.ReactNode}) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: `${C.primary}18`,
        marginBottom: 12,
        border: `1px solid ${C.primary}44`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

  const featureTabs = [
    {
      title: 'Instant Market Access',
      bullets: ['No installation required', 'Fast execution', 'Always updated'],
    },
    {
      title: 'Comprehensive Markets',
      bullets: ['Forex, indices, metals & more', 'Deep liquidity', 'Competitive spreads'],
    },
    {
      title: 'Professional Tools',
      bullets: ['Advanced charting', 'Multiple order types', 'Risk controls'],
    },
    {
      title: 'Complete Control',
      bullets: ['Positions & orders in one view', 'Real-time account data', 'Secure sessions'],
    },
  ];

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
    {n: 1, title: 'Open Revo Web Trading in your browser', desc: 'Navigate to the platform and load the terminal in one click.'},
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
          gap: 2rem;
          grid-template-columns: 1fr;
          grid-template-areas:
            "dash-img"
            "dash-left"
            "dash-right";
          align-items: start;
        }
        @media (min-width: 1024px) {
          .platforms-dash-grid {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 1.2fr) minmax(0, 1fr);
            grid-template-areas: "dash-left dash-img dash-right";
            align-items: center;
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
          <div style={{maxWidth: 720}}>
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
              Revo Web Trading
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
                margin: '16px 0 0',
                fontSize: 17,
                lineHeight: 1.65,
                color: C.greyLight,
                maxWidth: 560,
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
              alt="Revo web trading dashboard on laptop"
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
              Benefits of Revo Web Trading
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
            <div style={{flex: '1 1 340px', minWidth: 280, maxWidth: 640}}>
              <div className="platforms-how-visual">
                <div className="platforms-how-visual__ring" aria-hidden />
                <div className="platforms-how-visual__inner">
                  <img
                    className="platforms-how-visual__img platforms-how-visual__img--zoom"
                    src="/images/logos/trading-dashboad-white.svg"
                    alt="Revo web trading on laptop"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
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
              {featureTabs.map((tab, idx) => {
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
                {featureTabs[featureTab].bullets.map((line) => (
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
                <div className="platforms-how-visual__inner">
                  <img
                    className="platforms-how-visual__img"
                    src="/images/logos/terminal-photo.svg"
                    alt="Revo web trading platform on laptop"
                    style={{minHeight: 280}}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DASHBOARD FEATURES */}
      <section style={{...sectionPad, background: C.white}}>
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: 48}}>
            <h2 style={{margin: 0, fontSize: 'clamp(1.75rem, 3vw, 2.2rem)', fontWeight: 800, color: C.navy}}>
              Your Trading Dashboard
            </h2>
            <p style={{margin: '12px 0 0', fontSize: 17, color: C.grey}}>
              Explore the core features of Revo Web Trading
            </p>
          </div>

          <div className="platforms-dash-grid">
            <div style={{display: 'flex', flexDirection: 'column', gap: 20, gridArea: 'dash-left'}}>
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
                  <div
                    key={f.t}
                    style={{
                      padding: 20,
                      borderRadius: 14,
                      border: `1px solid ${C.borderSubtle}`,
                      background: C.greyBg,
                      transition,
                    }}
                  >
                    <DashboardFeatureIcon>
                      <Icon size={20} strokeWidth={2} color={C.primary} aria-hidden />
                    </DashboardFeatureIcon>
                    <div style={{fontSize: 16, fontWeight: 700, color: C.navy}}>{f.t}</div>
                    <p style={{margin: '8px 0 0', fontSize: 14, color: C.grey, lineHeight: 1.5}}>{f.d}</p>
                  </div>
                );
              })}
            </div>

            <div style={{gridArea: 'dash-img'}}>
              <div className="platforms-how-visual platforms-how-visual--wide">
                <div className="platforms-how-visual__ring" aria-hidden />
                <div className="platforms-how-visual__inner">
                  <img
                    className="platforms-how-visual__img"
                    src="/images/logos/trading-dashboard-black.svg"
                    alt="Revo web trading dashboard"
                    style={{minHeight: 300}}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: 20, gridArea: 'dash-right'}}>
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
                  <div
                    key={f.t}
                    style={{
                      padding: 20,
                      borderRadius: 14,
                      border: `1px solid ${C.borderSubtle}`,
                      background: C.greyBg,
                      transition,
                    }}
                  >
                    <DashboardFeatureIcon>
                      <Icon size={20} strokeWidth={2} color={C.primary} aria-hidden />
                    </DashboardFeatureIcon>
                    <div style={{fontSize: 16, fontWeight: 700, color: C.navy}}>{f.t}</div>
                    <p style={{margin: '8px 0 0', fontSize: 14, color: C.grey, lineHeight: 1.5}}>{f.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ACCESS ANYWHERE (DARK) */}
      <section
        style={{
          ...sectionPad,
          background: `linear-gradient(180deg, ${C.navy} 0%, #0a1628 100%)`,
        }}
      >
        <div style={{maxWidth: 1180, margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: 48}}>
            <h2 style={{margin: 0, fontSize: 'clamp(1.75rem, 3vw, 2.2rem)', fontWeight: 800, color: C.white}}>
              Access From Anywhere
            </h2>
            <p style={{margin: '12px 0 0', fontSize: 17, color: C.greyLight}}>Built for flexibility and performance</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 40,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                flex: '1 1 280px',
                maxWidth: 440,
                padding: 32,
                borderRadius: 16,
                background: 'rgba(15, 23, 42, 0.5)',
                border: `1px solid ${C.borderSubtle}`,
              }}
            >
              <h3 style={{margin: '0 0 20px', fontSize: 14, fontWeight: 800, letterSpacing: '0.14em', color: C.primary}}>
                SUPPORTED BROWSERS
              </h3>
              {['Chrome', 'Edge', 'Firefox', 'Safari'].map((b) => (
                <div key={b} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, color: C.white, fontSize: 16}}>
                  <span style={{color: C.primary, fontWeight: 700}}>✔</span>
                  {b}
                </div>
              ))}
            </div>
            <div
              style={{
                flex: '1 1 280px',
                maxWidth: 440,
                padding: 32,
                borderRadius: 16,
                background: 'rgba(15, 23, 42, 0.5)',
                border: `1px solid ${C.borderSubtle}`,
              }}
            >
              <h3 style={{margin: '0 0 20px', fontSize: 14, fontWeight: 800, letterSpacing: '0.14em', color: C.primary}}>
                SUPPORTED DEVICES
              </h3>
              {['Desktop', 'Mobile', 'Tablet'].map((b) => (
                <div key={b} style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, color: C.white, fontSize: 16}}>
                  <span style={{color: C.primary, fontWeight: 700}}>✔</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: 40}}>
            <span
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                color: C.greyLight,
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${C.borderSubtle}`,
              }}
            >
              Requirement: Stable internet connection
            </span>
          </div>
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
            Access global markets with Revo Web Trading
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
