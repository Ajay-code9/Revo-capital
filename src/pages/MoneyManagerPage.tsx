import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {TopContactBar} from '../components/TopContactBar';
import {PartnerStepsTimeline} from '../components/PartnerStepsTimeline';
import {ROUTES} from '../routes/paths';

const C = {
  primary: '#e50914',
  primaryHover: '#b80710',
  navy: '#0a1628',
  navySoft: '#111d32',
  white: '#ffffff',
  greyLight: '#f4f5f7',
  greyLine: '#e8eaef',
  text: '#0f172a',
  textMuted: '#64748b',
  textSoft: '#94a3b8',
} as const;

const font = "'Poppins', system-ui, -apple-system, sans-serif";
const sectionPad = {padding: 'clamp(48px, 10vw, 80px) clamp(16px, 4vw, 24px)'} as const;

function useHoverRed() {
  const [h, setH] = useState(false);
  return {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    bg: h ? C.primaryHover : C.primary,
  };
}

function HandshakeVisual() {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${C.white} 0%, ${C.greyLight} 100%)`,
        border: `1px solid ${C.greyLine}`,
        aspectRatio: '4/3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 24px 48px -24px rgba(10, 22, 40, 0.15)',
      }}
    >
      <svg viewBox="0 0 200 200" style={{width: '55%', maxWidth: 200, height: 'auto', display: 'block'}} aria-hidden>
        <path
          d="M62 108c-8-10-8-24 2-32l8-7c6-5 14-6 21-3l4 2 18-16c8-7 20-8 29-2l28 20c9 6 12 18 6 28l-2 4c-5 9-16 13-26 9l-6-3-32 36c-6 7-16 8-24 3l-40-28c-8-6-10-17-4-25l2-3z"
          fill="none"
          stroke={C.navy}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M118 82l28 20M96 96l18 14M78 118l24 22"
          fill="none"
          stroke={C.primary}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="100" cy="100" r="78" fill="none" stroke={C.greyLine} strokeWidth="1" strokeDasharray="6 8" opacity="0.6" />
      </svg>
    </div>
  );
}

export const MoneyManagerPage = () => {
  const navigate = useNavigate();
  const joinBtn = useHoverRed();
  const submitBtn = useHoverRed();
  const [accountKind, setAccountKind] = useState<'individual' | 'company'>('individual');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{minHeight: '100vh', background: C.white, fontFamily: font, color: C.text, WebkitFontSmoothing: 'antialiased'}}>
      <TopContactBar />
      <Navbar />

      <main>
        {/* SECTION 1 — HERO */}
        <section
          style={{
            ...sectionPad,
            paddingTop: 96,
            background: `linear-gradient(180deg, color-mix(in srgb, ${C.primary} 16%, ${C.greyLight}) 0%, color-mix(in srgb, ${C.primary} 7%, ${C.white}) 45%, color-mix(in srgb, ${C.primary} 2.5%, ${C.white}) 78%, ${C.white} 100%)`,
          }}
        >
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <nav style={{marginBottom: 32, fontSize: 13, color: C.textMuted}} aria-label="Breadcrumb">
              <ol style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, listStyle: 'none', margin: 0, padding: 0}}>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.partners)}
                    style={{background: 'none', border: 'none', padding: 0, font: 'inherit', color: C.textMuted, cursor: 'pointer'}}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
                  >
                    Partner
                  </button>
                </li>
                <li style={{color: C.greyLine}}>/</li>
                <li style={{fontWeight: 600, color: C.text}}>Money Manager (MAM &amp; PAMM)</li>
              </ol>
            </nav>

            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56, justifyContent: 'space-between'}}>
              <div style={{flex: '1 1 320px', minWidth: 280, maxWidth: 560}}>
                <div
                  style={{
                    display: 'inline-block',
                    marginBottom: 16,
                    padding: '6px 14px',
                    borderRadius: 999,
                    background: 'rgba(229, 9, 20, 0.08)',
                    color: C.primary,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  MONEY MANAGER
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    margin: '0 0 20px',
                    color: C.navy,
                  }}
                >
                  Partner And Grow With Revo Capital
                </h1>
                <p style={{fontSize: 17, lineHeight: 1.65, color: C.textMuted, margin: '0 0 36px', maxWidth: 520}}>
                  At Revo Capital, we provide powerful money management solutions including MAM &amp; PAMM accounts to help you
                  scale your trading business efficiently.
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('mm-join-form')?.scrollIntoView({behavior: 'smooth'})}
                  {...joinBtn}
                  style={{
                    background: joinBtn.bg,
                    color: C.white,
                    border: 'none',
                    borderRadius: 10,
                    padding: '16px 40px',
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    fontFamily: font,
                    transition: 'background 0.3s ease',
                    width: '100%',
                    boxShadow: '0 8px 24px -8px rgba(229, 9, 20, 0.45)',
                  }}
                >
                  JOIN US NOW
                </button>
              </div>
              <div style={{flex: '1 1 280px', minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                  src="/images/logos/hero-partners.svg"
                  alt="Revo Capital money manager and partnership programmes"
                  style={{
                    width: '100%',
                    maxWidth: 300,
                    height: 'auto',
                    maxHeight: 'min(50vh, 360px)',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — MAM & PAMM */}
        <section style={{...sectionPad, background: C.white}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 520}}>
                <h2 style={{fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', fontWeight: 700, margin: '0 0 20px', color: C.navy, lineHeight: 1.2}}>
                  Increase Efficiency with <span style={{color: C.primary}}>MAM &amp; PAMM</span> Accounts
                </h2>
                <p style={{fontSize: 17, lineHeight: 1.65, color: C.textMuted, margin: 0}}>
                  With Revo Capital, you get access to advanced managed account solutions.
                </p>
              </div>
              <div style={{flex: '1 1 320px', minWidth: 280}}>
                <div
                  style={{
                    borderRadius: 16,
                    border: `1px solid ${C.greyLine}`,
                    padding: '24px 22px',
                    marginBottom: 16,
                    background: C.greyLight,
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${C.primary}44`;
                    e.currentTarget.style.boxShadow = '0 8px 24px -12px rgba(10, 22, 40, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.greyLine;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: C.primary, marginBottom: 8}}>MAM</div>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.6, color: C.text}}>
                    Manage multiple client accounts under one master account with flexible allocation.
                  </p>
                </div>
                <div
                  style={{
                    borderRadius: 16,
                    border: `1px solid ${C.greyLine}`,
                    padding: '24px 22px',
                    marginBottom: 20,
                    background: C.white,
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${C.primary}44`;
                    e.currentTarget.style.boxShadow = '0 8px 24px -12px rgba(10, 22, 40, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.greyLine;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: C.primary, marginBottom: 8}}>PAMM</div>
                  <p style={{margin: 0, fontSize: 15, lineHeight: 1.6, color: C.text}}>
                    Pool investor funds into one account and earn based on performance.
                  </p>
                </div>
                <p style={{fontSize: 14, lineHeight: 1.6, color: C.textMuted, margin: 0, fontStyle: 'italic' as const}}>
                  Enjoy full flexibility on fees while we handle backend operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW TO START */}
        <section style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 700, margin: '0 0 40px', color: C.navy, textAlign: 'center'}}>
              How to start
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start', width: '100%'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 520}}>
                <HandshakeVisual />
              </div>
              <div style={{flex: '1 1 320px', minWidth: 0, maxWidth: '100%'}}>
                <PartnerStepsTimeline
                  titleMode="standard"
                  fontFamily={font}
                  primaryColor={C.primary}
                  navy={C.navy}
                  greyLine={C.greyLine}
                  textMuted={C.textMuted}
                  textSoft={C.textSoft}
                  onCtaClick={() => navigate(ROUTES.signup)}
                  steps={[
                    {
                      title: 'Open a MAM or PAMM account',
                      description: 'Apply through Revo Capital and select the managed account model that fits your business.',
                      cta: true,
                      ctaLabel: 'CREATE ACCOUNT',
                    },
                    {
                      title: 'Get your account verified',
                      description: 'Complete KYC and compliance steps with guidance from our team.',
                    },
                    {
                      title: 'Start managing accounts or pooling funds',
                      description: 'Configure allocations, fees, and risk parameters within programme rules.',
                    },
                    {
                      title: 'Start earning based on performance',
                      description: 'Your compensation aligns with results and the structure you agree with clients.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY MONEY MANAGER (img2-style two columns, red band + white type) */}
        <section
          style={{
            ...sectionPad,
            background: C.primary,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                fontWeight: 700,
                textAlign: 'center',
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                lineHeight: 1.2,
                textShadow: '0 1px 2px rgba(0,0,0,0.12)',
              }}
            >
              Why Become a{' '}
              <span
                style={{
                  color: '#ffffff',
                  fontWeight: 800,
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(255,255,255,0.55)',
                  textUnderlineOffset: '4px',
                }}
              >
                Money Manager
              </span>{' '}
              with Revo Capital?
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 16,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.94)',
                maxWidth: 680,
                margin: '0 auto 48px',
              }}
            >
              Run MAM and PAMM-style programmes with infrastructure, reporting, and support that let you focus on clients
              and performance—not back-office noise.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(20px, 3vw, 36px)',
                rowGap: 32,
              }}
            >
              {(
                [
                  {
                    title: 'Efficient account management',
                    desc: 'Centralised workflows to oversee multiple sub-accounts or pooled capital with clarity—so you always know who owns what and how risk is distributed.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <rect x="3" y="4" width="18" height="14" rx="2" />
                        <path d="M7 20h10M12 18v2" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Customisable trading conditions',
                    desc: 'Agree fee markups, splits, and parameters that fit your strategy and your client relationships, within programme and platform rules.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <circle cx="12" cy="12" r="3" />
                        <path
                          d="M12 1v2M12 21v2M4.22 4.22l1.41 1.41M18.37 18.37l1.41 1.41M1 12h2M21 12h2M4.22 19.78l1.41-1.41M18.37 5.63l1.41-1.41"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: 'Real-time reports',
                    desc: 'Monitor performance, exposure, and allocations with timely reporting—so you can communicate clearly with investors and adjust when markets move.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <path d="M3 3v18h18M7 13l4-4 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Flexible funds management',
                    desc: 'Structure MAM-style allocations or PAMM-style pools to match how you operate—without losing sight of compliance and operational guardrails.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <path d="M12 2v20M4 10h16M4 14h16" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Solutions for EAs & manual traders',
                    desc: 'Whether you run EAs or trade manually, Revo Capital supports both styles where platform capabilities allow—so you are not boxed into a single approach.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3zM12 17a4 4 0 100-8 4 4 0 000 8z" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                ] as const
              ).map((f) => (
                <div
                  key={f.title}
                  style={{
                    display: 'flex',
                    gap: 20,
                    alignItems: 'flex-start',
                    padding: '8px 4px',
                    borderRadius: 16,
                    border: '1px solid transparent',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                    e.currentTarget.style.boxShadow = '0 12px 32px -8px rgba(0,0,0,0.2)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      minWidth: 58,
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '2px solid rgba(255,255,255,0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,1)',
                    }}
                  >
                    {f.icon}
                  </div>
                  <div style={{minWidth: 0, paddingTop: 2}}>
                    <h3
                      style={{
                        fontSize: 'clamp(16px, 1.8vw, 18px)',
                        fontWeight: 700,
                        margin: '0 0 10px',
                        color: '#ffffff',
                        lineHeight: 1.3,
                        textShadow: '0 1px 2px rgba(0,0,0,0.15)',
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{fontSize: 15, lineHeight: 1.65, margin: 0, color: 'rgba(255,255,255,0.92)'}}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — JOIN FORM */}
        <section id="mm-join-form" style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 480}}>
                <h2 style={{fontSize: 'clamp(1.65rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', color: C.navy}}>
                  Join Revo Capital Now
                </h2>
                <p style={{fontSize: 16, lineHeight: 1.65, color: C.textMuted, margin: 0}}>
                  Complete the application form to get started as a money manager.
                </p>
              </div>

              <div
                style={{
                  flex: '1 1 320px',
                  minWidth: 280,
                  background: C.white,
                  borderRadius: 20,
                  padding: '40px 36px',
                  boxShadow: '0 24px 56px -32px rgba(10, 22, 40, 0.18)',
                  border: `1px solid ${C.greyLine}`,
                }}
              >
                <form style={{display: 'flex', flexDirection: 'column', gap: 18}} onSubmit={(e) => e.preventDefault()}>
                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Country</span>
                    <select
                      required
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        background: C.white,
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    >
                      <option value="">Select country</option>
                      <option>United Kingdom</option>
                      <option>United Arab Emirates</option>
                      <option>Singapore</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Email</span>
                    <input
                      type="email"
                      required
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>

                  <div>
                    <span style={{display: 'block', fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 8}}>Email verification code</span>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter code"
                        style={{
                          flex: '1 1 160px',
                          minWidth: 0,
                          padding: '14px 16px',
                          borderRadius: 10,
                          border: `1px solid ${C.greyLine}`,
                          fontSize: 15,
                          fontFamily: font,
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.primary)}
                        onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                      />
                      <button
                        type="button"
                        style={{
                          padding: '14px 20px',
                          borderRadius: 10,
                          border: `2px solid ${C.navy}`,
                          background: C.white,
                          color: C.navy,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          cursor: 'pointer',
                          fontFamily: font,
                          transition: 'background 0.3s ease, color 0.3s ease',
                          flex: '1 1 120px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = C.navy;
                          e.currentTarget.style.color = C.white;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = C.white;
                          e.currentTarget.style.color = C.navy;
                        }}
                      >
                        SEND CODE
                      </button>
                    </div>
                  </div>

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Password</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: -10,
                      background: 'none',
                      border: 'none',
                      color: C.primary,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: font,
                    }}
                  >
                    {showPassword ? 'Hide password' : 'Show password'}
                  </button>

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Referred by</span>
                    <input
                      type="text"
                      placeholder="Optional"
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>

                  <div>
                    <span style={{display: 'block', fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 10}}>Account type</span>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 12}}>
                      {(
                        [
                          {value: 'individual' as const, label: 'Individual'},
                          {value: 'company' as const, label: 'Company'},
                        ]
                      ).map((o) => (
                        <label
                          key={o.value}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            cursor: 'pointer',
                            padding: '12px 18px',
                            borderRadius: 10,
                            border: `1px solid ${accountKind === o.value ? C.primary : C.greyLine}`,
                            background: accountKind === o.value ? 'rgba(229, 9, 20, 0.06)' : C.white,
                            transition: 'border-color 0.3s ease, background 0.3s ease',
                          }}
                        >
                          <input
                            type="radio"
                            name="mm-account-type"
                            checked={accountKind === o.value}
                            onChange={() => setAccountKind(o.value)}
                            style={{accentColor: C.primary}}
                          />
                          <span style={{fontSize: 14, fontWeight: 500, color: C.text}}>{o.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label style={{display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer'}}>
                    <input type="checkbox" required style={{marginTop: 4, accentColor: C.primary}} />
                    <span style={{fontSize: 14, color: C.textMuted, lineHeight: 1.5}}>I am not a US resident</span>
                  </label>

                  <label style={{display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer'}}>
                    <input type="checkbox" required style={{marginTop: 4, accentColor: C.primary}} />
                    <span style={{fontSize: 14, color: C.textMuted, lineHeight: 1.5}}>
                      I agree to the terms and conditions and privacy policy
                    </span>
                  </label>

                  <button
                    type="submit"
                    {...submitBtn}
                    style={{
                      marginTop: 8,
                      width: '100%',
                      background: submitBtn.bg,
                      color: C.white,
                      border: 'none',
                      borderRadius: 10,
                      padding: '16px 24px',
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      cursor: 'pointer',
                      fontFamily: font,
                      transition: 'background 0.3s ease',
                      boxShadow: '0 8px 24px -8px rgba(229, 9, 20, 0.4)',
                    }}
                  >
                    CREATE ACCOUNT
                  </button>
                </form>

                <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, paddingTop: 24, borderTop: `1px solid ${C.greyLine}`}}>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.signup)}
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: 10,
                      border: `1px solid ${C.greyLine}`,
                      background: C.white,
                      color: C.text,
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: font,
                      transition: 'border-color 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${C.primary}55`;
                      e.currentTarget.style.background = C.greyLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.greyLine;
                      e.currentTarget.style.background = C.white;
                    }}
                  >
                    Practice Trading
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.login)}
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: 10,
                      border: `1px solid ${C.greyLine}`,
                      background: C.white,
                      color: C.text,
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: font,
                      transition: 'border-color 0.3s ease, background 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${C.primary}55`;
                      e.currentTarget.style.background = C.greyLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.greyLine;
                      e.currentTarget.style.background = C.white;
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
