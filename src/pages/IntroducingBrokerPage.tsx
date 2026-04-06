import React, {useLayoutEffect, useRef, useState} from 'react';
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
      <img
        src="/images/logos/img-introducing-broker.svg"
        alt="Introducing broker"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>
  );
}

function FeatureIcon({children}: {children: React.ReactNode}) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        border: `1px solid rgba(255,255,255,0.12)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        background: 'rgba(255,255,255,0.04)',
      }}
    >
      {children}
    </div>
  );
}

export const IntroducingBrokerPage = () => {
  const navigate = useNavigate();
  const joinBtn = useHoverRed();
  const submitBtn = useHoverRed();
  const howToLeftRef = useRef<HTMLDivElement>(null);
  const [howToLeftH, setHowToLeftH] = useState<number>();

  useLayoutEffect(() => {
    const el = howToLeftRef.current;
    if (!el) return;
    const update = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) setHowToLeftH(Math.round(h));
    };
    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      color: C.textMuted,
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
                  >
                    Partner
                  </button>
                </li>
                <li style={{color: C.greyLine}}>/</li>
                <li style={{fontWeight: 600, color: C.text}}>Introducing Broker (IB)</li>
              </ol>
            </nav>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 56,
                justifyContent: 'space-between',
              }}
            >
              <div style={{flex: '1 1 320px', minWidth: 280, maxWidth: 560}}>
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
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: C.textMuted,
                    margin: '0 0 36px',
                    maxWidth: 520,
                    fontWeight: 400,
                  }}
                >
                  Join Revo Capital&apos;s Introducing Broker program and unlock powerful earning opportunities with competitive
                  commissions and global reach.
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('ib-join-form')?.scrollIntoView({behavior: 'smooth'})}
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
                    transition: 'background 0.3s ease, transform 0.3s ease',
                    width: '100%',
                    boxShadow: '0 8px 24px -8px rgba(229, 9, 20, 0.45)',
                  }}
                >
                  JOIN US NOW
                </button>
              </div>

              <div style={{flex: '1 1 280px', minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                  src="/images/logos/hero-introducing-broker.svg"
                  alt="Revo Capital Introducing Broker programme"
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

        {/* SECTION 2 — REWARD */}
        <section style={{...sectionPad, background: C.white, textAlign: 'center' as const}}>
          <div style={{maxWidth: 720, margin: '0 auto'}}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                margin: '0 0 16px',
                color: C.navy,
                letterSpacing: '-0.02em',
              }}
            >
              Get Rewarded for Every New Client
            </h2>
            <p style={{fontSize: 17, lineHeight: 1.65, color: C.textMuted, margin: 0, fontWeight: 400}}>
              The more clients you refer, the more you earn with Revo Capital.
            </p>
          </div>
        </section>

        {/* SECTION 3 — HOW TO START */}
        <section style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start', width: '100%'}}>
              <div ref={howToLeftRef} style={{flex: '1 1 300px', minWidth: 280, maxWidth: 520}}>
                <HandshakeVisual />
              </div>

              <div
                style={{
                  flex: '1 1 320px',
                  minWidth: 0,
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 0,
                  ...(howToLeftH != null ? {height: howToLeftH, maxHeight: howToLeftH} : {}),
                }}
              >
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)',
                    fontWeight: 700,
                    margin: '0 0 10px',
                    color: C.navy,
                    flexShrink: 0,
                  }}
                >
                  How to start
                </h2>

                <div
                  style={{
                    flex: 1,
                    minHeight: 0,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    paddingTop: 8,
                    paddingRight: 4,
                    boxSizing: 'border-box',
                  }}
                >
                  <PartnerStepsTimeline
                    titleMode="ib"
                    compact
                    fillHeight={howToLeftH != null}
                    fontFamily={font}
                    primaryColor={C.primary}
                    navy={C.navy}
                    greyLine={C.greyLine}
                    textMuted={C.textMuted}
                    textSoft={C.textSoft}
                    onCtaClick={() => navigate(ROUTES.signup)}
                    steps={[
                    {
                      title: 'Get your IB link and start sharing',
                      description: 'Register to receive your unique introducing broker tracking link.',
                      cta: true,
                      ctaLabel: 'CREATE ACCOUNT',
                    },
                    {
                      title: 'Share your IB link with potential clients',
                      description: 'Use your website, social channels, or direct outreach.',
                    },
                    {
                      title: 'Attract new clients to join Revo Capital',
                      description: 'We support smooth onboarding and compliance checks.',
                    },
                    {
                      title: 'As they trade, your earnings grow',
                      description: 'Rebates reflect client activity according to your agreed structure.',
                    },
                  ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY CHOOSE US */}
        <section style={{...sectionPad, background: C.navy, color: C.white}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                textAlign: 'center',
                margin: '0 0 56px',
                letterSpacing: '-0.02em',
              }}
            >
              Why Become an{' '}
              <span style={{color: C.primary}}>IB</span> with Revo Capital?
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 28,
              }}
            >
              {[
                {
                  title: 'Flexible Rebate Structure',
                  desc: 'Tailored rebate models that align with your client base and trading volumes.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                      <path d="M4 19V5M4 19h16M8 17V9M12 17V7M16 17v-6" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: 'No Cap On Rewards',
                  desc: 'Scale your income as your network grows—no arbitrary ceiling on eligible earnings.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                      <path d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: 'Multi-Tiered Payout Structure',
                  desc: 'Structured tiers that reward deeper networks and sustained client activity.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                      <path d="M4 18h16M4 12h10M4 6h6" strokeLinecap="round" />
                      <circle cx="18" cy="12" r="2" />
                      <circle cx="12" cy="6" r="2" />
                    </svg>
                  ),
                },
                {
                  title: 'Exclusive IB Portal',
                  desc: 'Track referrals, conversions, and payouts in one secure partner dashboard.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M7 20h10M12 18v2" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: C.navySoft,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '32px 28px',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FeatureIcon>{f.icon}</FeatureIcon>
                  <h3 style={{fontSize: 18, fontWeight: 700, margin: '0 0 10px', color: C.white}}>{f.title}</h3>
                  <p style={{fontSize: 14, lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,0.65)', fontWeight: 400}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — JOIN FORM */}
        <section id="ib-join-form" style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 56,
                alignItems: 'flex-start',
              }}
            >
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 480}}>
                <h2 style={{fontSize: 'clamp(1.65rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', color: C.navy}}>
                  Join Revo Capital Now
                </h2>
                <p style={{fontSize: 16, lineHeight: 1.65, color: C.textMuted, margin: 0}}>
                  Complete the Introducing Broker application form and our team will contact you shortly.
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
                <form
                  style={{display: 'flex', flexDirection: 'column', gap: 20}}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
                    <label style={{flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>First Name</span>
                      <input
                        type="text"
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
                    <label style={{flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Last Name</span>
                      <input
                        type="text"
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
                  </div>

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Phone</span>
                    <input
                      type="tel"
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

                  {[
                    {label: 'Upload ID proof', id: 'ib-id'},
                    {label: 'Upload Address proof', id: 'ib-addr'},
                  ].map((u) => (
                    <label key={u.id} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>{u.label}</span>
                      <div
                        style={{
                          border: `2px dashed ${C.greyLine}`,
                          borderRadius: 12,
                          padding: '20px 16px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'border-color 0.3s ease, background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${C.primary}66`;
                          e.currentTarget.style.background = C.greyLight;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = C.greyLine;
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <input type="file" id={u.id} style={{width: '100%', fontSize: 14, fontFamily: font}} />
                      </div>
                    </label>
                  ))}

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Remark</span>
                    <textarea
                      rows={4}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        resize: 'vertical' as const,
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
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
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      fontFamily: font,
                      transition: 'background 0.3s ease',
                      boxShadow: '0 8px 24px -8px rgba(229, 9, 20, 0.4)',
                    }}
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
