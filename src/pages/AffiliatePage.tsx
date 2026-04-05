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
  greyRow: '#f0f2f5',
  greyLine: '#e8eaef',
  text: '#0f172a',
  textMuted: '#64748b',
  textSoft: '#94a3b8',
} as const;

const font = "'Poppins', system-ui, -apple-system, sans-serif";
const sectionPad = {padding: 'clamp(48px, 10vw, 80px) clamp(16px, 4vw, 24px)'} as const;

const CPA_CONDITIONS =
  'Minimum deposit: $500. 2 standard lots (FX, Gold, Oil, BTCUSD, ETHUSD).';

const TIER_COUNTRIES: Record<1 | 2 | 3, string> = {
  1: 'Germany, Denmark, Switzerland, Estonia, Ireland, Italy, Lithuania, France, Finland, Kuwait, Norway, Netherlands, Sweden, Austria, New Zealand, Portugal, United Kingdom',
  2: 'Argentina, Brazil, Chile, Colombia, Hong Kong, Hungary, Malaysia, Mexico, Peru',
  3: 'Costa Rica, Czech Republic, Dominican Republic, Ecuador, Guatemala, Panama, Slovak Republic, Taiwan, Thailand, Uruguay',
};

function useHoverRed() {
  const [h, setH] = useState(false);
  return {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    bg: h ? C.primaryHover : C.primary,
  };
}

function MeetingVisual() {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${C.navySoft} 0%, ${C.navy} 100%)`,
        border: `1px solid ${C.greyLine}`,
        aspectRatio: '4/3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 24px 48px -24px rgba(10, 22, 40, 0.2)',
      }}
    >
      <svg viewBox="0 0 220 180" style={{width: '78%', height: 'auto', display: 'block'}} aria-hidden>
        <rect x="24" y="100" width="172" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <circle cx="70" cy="72" r="22" fill="rgba(255,255,255,0.2)" />
        <circle cx="150" cy="72" r="22" fill="rgba(255,255,255,0.2)" />
        <path d="M48 118h32M140 118h32" stroke={C.primary} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M110 52v24M98 64h24" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
        <rect x="88" y="112" width="44" height="28" rx="6" fill={C.primary} opacity="0.85" />
      </svg>
    </div>
  );
}

function Chevron({open}: {open: boolean}) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={C.textMuted}
      strokeWidth="2"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const AffiliatePage = () => {
  const navigate = useNavigate();
  const joinBtn = useHoverRed();
  const signUpBtn = useHoverRed();
  const applyBtn = useHoverRed();
  const [openTiers, setOpenTiers] = useState<Record<1 | 2 | 3, boolean>>({1: true, 2: false, 3: false});
  const [showPw, setShowPw] = useState(false);

  const toggleTier = (t: 1 | 2 | 3) => {
    setOpenTiers((prev) => ({...prev, [t]: !prev[t]}));
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
                <li style={{fontWeight: 600, color: C.text}}>Affiliate Program</li>
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
                    letterSpacing: '0.14em',
                  }}
                >
                  AFFILIATE PROGRAM
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
                  At Revo Capital, we offer multiple partnership opportunities for global investors. Join our affiliate program to
                  earn competitive commissions and scale your income.
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('affiliate-apply')?.scrollIntoView({behavior: 'smooth'})}
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
                  src="/images/logos/hero-affiliate.svg"
                  alt="Revo Capital affiliate programme"
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

        {/* SECTION 2 — COUNTRY TIERS */}
        <section style={{...sectionPad, background: C.white}}>
          <div style={{maxWidth: 800, margin: '0 auto'}}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 700,
                textAlign: 'center',
                margin: '0 0 12px',
                color: C.navy,
              }}
            >
              Country Tiers
            </h2>
            <p style={{textAlign: 'center', fontSize: 17, color: C.textMuted, margin: '0 0 40px', lineHeight: 1.6}}>
              Unlock your earning potential with our CPA reward structure.
            </p>

            {([1, 2, 3] as const).map((tier) => (
              <div
                key={tier}
                style={{
                  marginBottom: 14,
                  borderRadius: 14,
                  border: `1px solid ${C.greyLine}`,
                  background: C.white,
                  overflow: 'hidden',
                  boxShadow: openTiers[tier] ? '0 12px 32px -16px rgba(10, 22, 40, 0.12)' : '0 4px 16px -8px rgba(10, 22, 40, 0.08)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleTier(tier)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 22px',
                    background: openTiers[tier] ? C.greyLight : C.white,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: font,
                    textAlign: 'left',
                    transition: 'background 0.3s ease',
                  }}
                >
                  <span style={{fontSize: 16, fontWeight: 700, color: C.navy}}>TIER {tier}</span>
                  <Chevron open={openTiers[tier]} />
                </button>
                {openTiers[tier] && (
                  <div
                    style={{
                      padding: '0 22px 22px',
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: C.textMuted,
                      borderTop: `1px solid ${C.greyLine}`,
                      paddingTop: 18,
                    }}
                  >
                    {TIER_COUNTRIES[tier]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — CPA TABLE */}
        <section style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1100, margin: '0 auto', overflowX: 'auto'}}>
            <h2 style={{fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 700, margin: '0 0 28px', color: C.navy, textAlign: 'center'}}>
              CPA structure by tier
            </h2>
            <div style={{borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.greyLine}`, background: C.white}}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse' as const,
                  fontSize: 14,
                  minWidth: 640,
                }}
              >
                <thead>
                  <tr style={{background: C.navy, color: C.white}}>
                    {['Country / Tier', 'CPA conditions', 'Monthly qualified accounts', 'CPA'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '16px 14px',
                          textAlign: 'left' as const,
                          fontWeight: 700,
                          fontSize: 12,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase' as const,
                          borderBottom: `2px solid ${C.primary}`,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(
                    [
                      {tier: 'Tier 1', amounts: ['$650', '$650 + $3,000 bonus', '$650 + $10,000 bonus']},
                      {tier: 'Tier 2', amounts: ['$400', '$400 + $3,000 bonus', '$400 + $10,000 bonus']},
                      {tier: 'Tier 3', amounts: ['$300', '$300 + $3,000 bonus', '$300 + $10,000 bonus']},
                    ] as const
                  ).map((row, ti) => (
                    <React.Fragment key={row.tier}>
                      <tr style={{background: ti % 2 === 0 ? C.greyRow : C.white}}>
                        <td rowSpan={3} style={{padding: '14px 14px', verticalAlign: 'top', fontWeight: 700, color: C.navy, borderBottom: `1px solid ${C.greyLine}`}}>
                          {row.tier}
                        </td>
                        <td rowSpan={3} style={{padding: '14px 14px', verticalAlign: 'top', color: C.textMuted, maxWidth: 280, borderBottom: `1px solid ${C.greyLine}`, lineHeight: 1.55}}>
                          {CPA_CONDITIONS}
                        </td>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, color: C.text}}>01–29</td>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, fontWeight: 600, color: C.navy}}>{row.amounts[0]}</td>
                      </tr>
                      <tr style={{background: ti % 2 === 0 ? C.greyRow : C.white}}>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, color: C.text}}>30–49</td>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, fontWeight: 600, color: C.navy}}>{row.amounts[1]}</td>
                      </tr>
                      <tr style={{background: ti % 2 === 0 ? C.greyRow : C.white}}>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, color: C.text}}>50+</td>
                        <td style={{padding: '14px 14px', borderBottom: `1px solid ${C.greyLine}`, fontWeight: 600, color: C.navy}}>{row.amounts[2]}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                  <tr style={{background: C.greyRow}}>
                    <td style={{padding: '14px 14px', fontWeight: 700, color: C.navy}}>Other countries</td>
                    <td style={{padding: '14px 14px', color: C.textMuted}}>—</td>
                    <td style={{padding: '14px 14px', color: C.textMuted}}>—</td>
                    <td style={{padding: '14px 14px', fontWeight: 700, color: C.primary}}>$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{marginTop: 20, fontSize: 13, color: C.textMuted, lineHeight: 1.6, textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
              The monthly bonus applies only when net deposits are at least 2.5× CPA commission.
            </p>
          </div>
        </section>

        {/* SECTION 4 — HOW IT WORKS */}
        <section style={{...sectionPad, background: C.white}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.1rem)',
                fontWeight: 700,
                textAlign: 'center',
                margin: '0 0 48px',
                color: C.navy,
              }}
            >
              Earn More with Every Referral
            </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start', width: '100%'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 520}}>
                <MeetingVisual />
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
                      title: 'Sign up for our affiliate program',
                      description: 'Register and receive your tracking links and partner resources.',
                      cta: true,
                      ctaLabel: 'SIGN UP',
                    },
                    {
                      title: 'Refer new clients',
                      description: 'Share your link and introduce traders to Revo Capital.',
                    },
                    {
                      title: 'Earn bonuses as they trade',
                      description: 'Qualified activity drives CPA and bonus payouts per programme rules.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHY AFFILIATE (red band, white type + white icon discs / red glyphs) */}
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
              Why Become an{' '}
              <span style={{color: '#ffffff', fontWeight: 800, textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.55)', textUnderlineOffset: '4px'}}>
                Affiliate
              </span>{' '}
              with Revo Capital?
            </h2>
            <p
              style={{
                textAlign: 'center',
                fontSize: 16,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.94)',
                maxWidth: 640,
                margin: '0 auto 48px',
              }}
            >
              Partner with a broker that combines transparent economics, reliable reporting, and tools built for serious
              affiliate growth.
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
                    title: 'CPA + Bonus',
                    desc: 'By partnering with Revo Capital, you can earn CPA plus bonus payouts on each qualified referred customer—aligned with programme rules and your tier.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <path d="M12 4v16M8 9l4-4 4 4M8 15l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Competitive payout structure',
                    desc: 'We offer a clear, competitive payout structure with tiered rewards so stronger performance and volume are reflected in what you earn.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <path d="M4 19V5M4 19h16M7 15l3-3 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 11h4M8 8h6" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Real-time data',
                    desc: 'Accurate, detailed reporting helps you track clicks, registrations, and conversions—so you can optimise campaigns and improve outcomes.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4M7 10l3 3 3-3 4 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Monthly settlement',
                    desc: 'With predictable monthly settlement cycles, qualified commissions are processed on a clear timetable so you can plan your cash flow.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M3 9h18M8 5V3M16 5V3M8 13h2M8 17h4" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Affiliate portal for your needs',
                    desc: 'Our portal is designed around affiliates: creatives, tracking links, performance stats, and account management in one secure hub.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="1.85">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3.6 9h16.8M12 3a15 15 0 010 18" strokeLinecap="round" />
                        <path d="M8 15h8" strokeLinecap="round" />
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

        {/* SECTION 6 — APPLICATION */}
        <section id="affiliate-apply" style={{...sectionPad, background: C.greyLight}}>
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start'}}>
              <div style={{flex: '1 1 300px', minWidth: 280, maxWidth: 480}}>
                <h2 style={{fontSize: 'clamp(1.65rem, 2.5vw, 2rem)', fontWeight: 700, margin: '0 0 16px', color: C.navy}}>
                  Become Our Partner Today
                </h2>
                <p style={{fontSize: 16, lineHeight: 1.65, color: C.textMuted, margin: 0}}>
                  Start your journey with Revo Capital and grow your affiliate business.
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
                  {[
                    {label: 'Name', type: 'text', required: true},
                    {label: 'Email', type: 'email', required: true},
                    {label: 'Phone', type: 'tel', required: true},
                  ].map((f) => (
                    <label key={f.label} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>{f.label}</span>
                      <input
                        type={f.type}
                        required={f.required}
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
                  ))}

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
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Username</span>
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
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>

                  <label style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                    <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>Password</span>
                    <input
                      type={showPw ? 'text' : 'password'}
                      required
                      style={{
                        padding: '14px 16px',
                        borderRadius: 10,
                        border: `1px solid ${C.greyLine}`,
                        fontSize: 15,
                        fontFamily: font,
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = C.primary)}
                      onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
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
                    {showPw ? 'Hide password' : 'Show password'}
                  </button>

                  {['Upload ID proof', 'Upload Address proof'].map((label) => (
                    <label key={label} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>{label}</span>
                      <div
                        style={{
                          border: `2px dashed ${C.greyLine}`,
                          borderRadius: 12,
                          padding: '16px',
                          transition: 'border-color 0.3s ease, background 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${C.primary}88`;
                          e.currentTarget.style.background = C.greyLight;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = C.greyLine;
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <input type="file" style={{width: '100%', fontSize: 14, fontFamily: font}} />
                      </div>
                    </label>
                  ))}

                  {[
                    {
                      label: 'Affiliate of another broker?',
                      options: ['Select', 'Yes', 'No'],
                    },
                    {
                      label: 'Target countries?',
                      options: ['Select', 'Tier 1', 'Tier 2', 'Tier 3', 'Global / mixed'],
                    },
                    {
                      label: 'Expected clients per month?',
                      options: ['Select', '1–10', '11–30', '31–50', '50+'],
                    },
                    {
                      label: 'Experience in forex affiliate?',
                      options: ['Select', 'None', '1–2 years', '3–5 years', '5+ years'],
                    },
                    {
                      label: 'Promotion strategy?',
                      options: ['Select', 'SEO / content', 'Paid ads', 'Social media', 'Email / community', 'Other'],
                    },
                  ].map((d) => (
                    <label key={d.label} style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: C.text}}>{d.label}</span>
                      <select
                        style={{
                          padding: '14px 16px',
                          borderRadius: 10,
                          border: `1px solid ${C.greyLine}`,
                          fontSize: 15,
                          fontFamily: font,
                          background: C.white,
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.primary)}
                        onBlur={(e) => (e.target.style.borderColor = C.greyLine)}
                      >
                        {d.options.map((o) => (
                          <option key={o} value={o === 'Select' ? '' : o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  ))}

                  <label style={{display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', marginTop: 4}}>
                    <input type="checkbox" required style={{marginTop: 4, accentColor: C.primary}} />
                    <span style={{fontSize: 14, color: C.textMuted, lineHeight: 1.5}}>I agree to terms and conditions</span>
                  </label>

                  <button
                    type="submit"
                    {...applyBtn}
                    style={{
                      marginTop: 8,
                      width: '100%',
                      background: applyBtn.bg,
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
                    Apply Now
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
