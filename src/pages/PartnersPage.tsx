import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {TopContactBar} from '../components/TopContactBar';
import {ROUTES} from '../routes/paths';

const C = {
  primary: '#e50914',
  primaryHover: '#b80710',
  navy: '#0f172a',
  navyDeep: '#020617',
  white: '#ffffff',
  greyLight: '#f1f5f9',
  greyLine: '#e2e8f0',
  text: '#0f172a',
  textMuted: '#64748b',
} as const;

const font = "'Poppins', system-ui, -apple-system, sans-serif";
const sectionPad = {padding: 'clamp(56px, 8vw, 90px) clamp(16px, 4vw, 28px)'} as const;

function useHoverRed() {
  const [h, setH] = useState(false);
  return {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    bg: h ? C.primaryHover : C.primary,
  };
}

function CardTopVisual({variant}: {variant: 'ib' | 'aff' | 'mm'}) {
  const bg =
    variant === 'ib'
      ? `linear-gradient(145deg, ${C.navy} 0%, #1e293b 100%)`
      : variant === 'aff'
        ? `linear-gradient(145deg, #1e293b 0%, ${C.navy} 100%)`
        : `linear-gradient(145deg, ${C.primary}22 0%, ${C.greyLight} 100%)`;

  return (
    <div
      style={{
        height: 160,
        borderRadius: '14px 14px 0 0',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${C.greyLine}`,
      }}
    >
      {variant === 'ib' && (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="1.6">
          <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {variant === 'aff' && (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="1.6">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" />
        </svg>
      )}
      {variant === 'mm' && (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.6">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinejoin="round" />
          <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export const PartnersPage = () => {
  const navigate = useNavigate();
  const joinHero = useHoverRed();
  const createBtn = useHoverRed();
  const liveBtn = useHoverRed();
  const [accountKind, setAccountKind] = useState<'individual' | 'company'>('individual');
  const [showPassword, setShowPassword] = useState(false);

  const cardBase = {
    background: C.white,
    borderRadius: 16,
    border: `1px solid ${C.greyLine}`,
    overflow: 'hidden' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div style={{minHeight: '100vh', background: C.white, fontFamily: font, color: C.text, WebkitFontSmoothing: 'antialiased'}}>
      <TopContactBar />
      <Navbar />

      <main>
        {/* SECTION 1 — HERO */}
        <section
          style={{
            ...sectionPad,
            paddingTop: 100,
            background: `linear-gradient(180deg, color-mix(in srgb, ${C.primary} 16%, ${C.greyLight}) 0%, color-mix(in srgb, ${C.primary} 7%, ${C.white}) 45%, color-mix(in srgb, ${C.primary} 2.5%, ${C.white}) 78%, ${C.white} 100%)`,
          }}
        >
          <div style={{maxWidth: 1180, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, justifyContent: 'space-between'}}>
              <div style={{flex: '1 1 320px', minWidth: 280, maxWidth: 560}}>
                <h1
                  style={{
                    fontSize: 'clamp(2rem, 4.2vw, 2.85rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                    margin: '0 0 22px',
                    color: C.navy,
                  }}
                >
                  Rise And Grow With Revo Capital
                </h1>
                <p style={{fontSize: 17, lineHeight: 1.7, color: C.textMuted, margin: '0 0 36px', maxWidth: 520}}>
                  At Revo Capital, we offer multiple partnership programs designed to deliver competitive commissions, strong
                  rewards, and scalable growth opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('partner-register')?.scrollIntoView({behavior: 'smooth'})}
                  {...joinHero}
                  style={{
                    background: joinHero.bg,
                    color: C.white,
                    border: 'none',
                    borderRadius: 10,
                    padding: '16px 36px',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    fontFamily: font,
                    transition: 'background 0.3s ease',
                    width: '100%',
                    boxShadow: '0 10px 28px -10px rgba(229, 9, 20, 0.45)',
                  }}
                >
                  JOIN US NOW
                </button>
              </div>
              <div style={{flex: '1 1 280px', minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                  src="/images/logos/hero-partners.svg"
                  alt="Revo Capital partnership programmes"
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

        {/* SECTION 2 — PARTNER TYPES */}
        <section style={{...sectionPad, background: C.white}}>
          <div style={{maxWidth: 1180, margin: '0 auto'}}>
            <div style={{textAlign: 'center', maxWidth: 640, margin: '0 auto 48px'}}>
              <h2 style={{fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 700, margin: '0 0 14px', color: C.navy}}>
                Become Our Partner
              </h2>
              <p style={{fontSize: 17, color: C.textMuted, margin: 0, lineHeight: 1.6}}>
                Choose the partnership model that fits your goals.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 28,
              }}
            >
              {(
                [
                  {
                    variant: 'ib' as const,
                    title: 'Introducing Brokers',
                    subtitle: 'Flexible rebate structure',
                    desc: 'Earn commission on every client trade',
                    btn: 'Become Introducer',
                    path: ROUTES.partnersIntroducingBroker,
                  },
                  {
                    variant: 'aff' as const,
                    title: 'Affiliates',
                    subtitle: 'CPA + Bonus payouts',
                    desc: 'Earn per client acquisition',
                    btn: 'Become Affiliate',
                    path: ROUTES.partnersAffiliate,
                  },
                  {
                    variant: 'mm' as const,
                    title: 'Money Managers',
                    subtitle: 'MAM & PAMM solutions',
                    desc: 'Manage funds and earn performance-based income',
                    btn: 'Become Money Manager',
                    path: ROUTES.partnersMoneyManager,
                  },
                ]
              ).map((c) => (
                <div
                  key={c.title}
                  style={cardBase}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -16px rgba(15, 23, 42, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <CardTopVisual variant={c.variant} />
                  <div style={{padding: '24px 22px 26px', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{fontSize: 20, fontWeight: 700, margin: '0 0 6px', color: C.navy}}>{c.title}</h3>
                    <p style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: C.primary, margin: '0 0 12px'}}>
                      {c.subtitle}
                    </p>
                    <p style={{fontSize: 15, lineHeight: 1.55, color: C.textMuted, margin: '0 0 22px', flex: 1}}>{c.desc}</p>
                    <button
                      type="button"
                      onClick={() => navigate(c.path)}
                      style={{
                        width: '100%',
                        padding: '14px 20px',
                        borderRadius: 10,
                        border: `2px solid ${C.navy}`,
                        background: C.white,
                        color: C.navy,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        cursor: 'pointer',
                        fontFamily: font,
                        transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.navy;
                        e.currentTarget.style.color = C.white;
                        e.currentTarget.style.borderColor = C.navy;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = C.white;
                        e.currentTarget.style.color = C.navy;
                        e.currentTarget.style.borderColor = C.navy;
                      }}
                    >
                      {c.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — PLATFORMS */}
        <section style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1180, margin: '0 auto'}}>
            <div style={{textAlign: 'center', maxWidth: 640, margin: '0 auto 44px'}}>
              <h2 style={{fontSize: 'clamp(1.65rem, 2.8vw, 2.1rem)', fontWeight: 700, margin: '0 0 12px', color: C.navy}}>
                Our Trading Platforms &amp; Tools
              </h2>
              <p style={{fontSize: 16, color: C.textMuted, margin: 0, lineHeight: 1.6}}>
                Access powerful trading platforms and tools across all devices.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
              }}
            >
              {(
                [
                  {label: 'MT4', sub: 'MetaTrader 4', icon: 'mt4'},
                  {label: 'MT5', sub: 'MetaTrader 5', icon: 'mt5'},
                  {label: 'Web Trader', sub: 'Trade in browser', icon: 'web'},
                  {label: 'Mobile App', sub: 'iOS & Android', icon: 'mob'},
                ] as const
              ).map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => navigate(ROUTES.platforms)}
                  style={{
                    padding: '32px 24px',
                    borderRadius: 16,
                    border: `1px solid ${C.greyLine}`,
                    background: C.white,
                    cursor: 'pointer',
                    textAlign: 'center' as const,
                    fontFamily: font,
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${C.primary}55`;
                    e.currentTarget.style.boxShadow = '0 12px 28px -12px rgba(15, 23, 42, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.greyLine;
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      margin: '0 auto 16px',
                      borderRadius: 14,
                      background: `linear-gradient(135deg, rgba(229,9,20,0.12) 0%, rgba(15,23,42,0.06) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.8">
                      {p.icon === 'mt4' || p.icon === 'mt5' ? (
                        <path d="M4 6h16v12H4z M8 10h8M8 14h5" strokeLinecap="round" />
                      ) : p.icon === 'web' ? (
                        <path d="M4 5h16v14H4z M2 9h20M8 5v14" strokeLinecap="round" />
                      ) : (
                        <path d="M8 3h8v18H8z M12 18h.01" strokeLinecap="round" />
                      )}
                    </svg>
                  </div>
                  <div style={{fontSize: 17, fontWeight: 700, color: C.navy}}>{p.label}</div>
                  <div style={{fontSize: 13, color: C.textMuted, marginTop: 6}}>{p.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — JOIN FORM */}
        <section id="partner-register" style={{...sectionPad, background: C.white}}>
          <div style={{maxWidth: 1180, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 460}}>
                <h2 style={{fontSize: 'clamp(1.65rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', color: C.navy}}>
                  Join Revo Capital Now
                </h2>
                <p style={{fontSize: 16, lineHeight: 1.65, color: C.textMuted, margin: 0}}>
                  Fill in the form to join our partnership program and our team will contact you.
                </p>
              </div>

              <div
                style={{
                  flex: '1 1 320px',
                  minWidth: 280,
                  background: C.greyLight,
                  borderRadius: 20,
                  padding: '40px 36px',
                  border: `1px solid ${C.greyLine}`,
                  boxShadow: '0 20px 50px -28px rgba(15, 23, 42, 0.18)',
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
                        background: C.white,
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>

                  <div>
                    <span style={{display: 'block', fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 8}}>
                      Email verification code
                    </span>
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
                          background: C.white,
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
                        background: C.white,
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
                        background: C.white,
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
                            name="partner-account-type"
                            checked={accountKind === o.value}
                            onChange={() => setAccountKind(o.value)}
                            style={{accentColor: C.primary}}
                          />
                          <span style={{fontSize: 14, fontWeight: 500}}>{o.label}</span>
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
                    <span style={{fontSize: 14, color: C.textMuted, lineHeight: 1.5}}>I agree to the privacy policy</span>
                  </label>

                  <button
                    type="submit"
                    {...createBtn}
                    style={{
                      marginTop: 8,
                      width: '100%',
                      background: createBtn.bg,
                      color: C.white,
                      border: 'none',
                      borderRadius: 10,
                      padding: '16px 24px',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      cursor: 'pointer',
                      fontFamily: font,
                      transition: 'background 0.3s ease',
                      boxShadow: '0 10px 28px -10px rgba(229, 9, 20, 0.4)',
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
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: font,
                      color: C.text,
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
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: font,
                      color: C.text,
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

        {/* SECTION 5 — FINAL CTA */}
        <section
          style={{
            ...sectionPad,
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(165deg, ${C.navyDeep} 0%, ${C.navy} 45%, #0c1222 100%)`,
            color: C.white,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: C.primary,
              opacity: 0.07,
              top: '-18%',
              right: '-8%',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: `2px solid rgba(255,255,255,0.06)`,
              bottom: '-12%',
              left: '-5%',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'rgba(229, 9, 20, 0.15)',
              top: '40%',
              left: '15%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1}}>
            <h2 style={{fontSize: 'clamp(1.65rem, 3vw, 2.25rem)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em'}}>
              Start Trading with a Globally Trusted Broker
            </h2>
            <p style={{fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: '0 0 36px'}}>
              Take your trading journey to the next level with Revo Capital.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center'}}>
              <button
                type="button"
                onClick={() => navigate(ROUTES.signup)}
                {...liveBtn}
                style={{
                  background: liveBtn.bg,
                  color: C.white,
                  border: 'none',
                  borderRadius: 10,
                  padding: '16px 32px',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  fontFamily: font,
                  transition: 'background 0.3s ease',
                  minWidth: 200,
                  flex: '1 1 200px',
                  maxWidth: 320,
                  boxShadow: '0 12px 32px -12px rgba(229, 9, 20, 0.5)',
                }}
              >
                Open Live Account
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('partner-register')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  background: 'transparent',
                  color: C.white,
                  border: `2px solid rgba(255,255,255,0.35)`,
                  borderRadius: 10,
                  padding: '16px 32px',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  fontFamily: font,
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                  minWidth: 200,
                  flex: '1 1 200px',
                  maxWidth: 320,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Become a Partner
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
