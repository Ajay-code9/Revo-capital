import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Search,
  Menu,
  X,
  BarChart3,
  Bitcoin,
  ArrowUpRight,
  Fuel,
  Gem,
  Wallet,
  LayoutDashboard,
  Handshake,
  Headphones,
  Share2,
  Building2,
  Link2,
  Landmark,
} from 'lucide-react';
import {MARKET_PATHS, PARTNER_PATHS, ROUTES} from '../routes/paths';
import {RevoLogo} from './RevoLogo';
import {Button} from './ui/Button';

function SocialTradingNavLabel({className = ''}: {className?: string}) {
  return (
    <span
      className={`inline-block select-none whitespace-nowrap text-[11px] font-bold leading-tight text-gray-900 pointer-events-none lg:text-[12px] xl:text-[13px] ${className}`}
    >
      Social Trading
      <sup className="ml-0.5 align-baseline text-[8px] font-semibold leading-none tracking-wide text-gray-500 lg:text-[9px]">
        Soon
      </sup>
    </span>
  );
}

export const Navbar = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [isMarketsOpen, setIsMarketsOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);

  const go = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsMarketsOpen(false);
    setIsPartnerOpen(false);
    setMobileMarketsOpen(false);
    setMobilePartnerOpen(false);
  };

  type MarketIcon = React.ComponentType<{size?: number; className?: string; strokeWidth?: number}>;

  const markets: {name: string; path: string; Icon: MarketIcon}[] = [
    {name: 'Forex', path: ROUTES.forex, Icon: TrendingUp},
    {name: 'Indices', path: ROUTES.indices, Icon: BarChart3},
    {name: 'Futures', path: ROUTES.futures, Icon: Fuel},
    {name: 'Crypto', path: ROUTES.crypto, Icon: Bitcoin},
    {name: 'Metals', path: ROUTES.metals, Icon: Gem},
    {name: 'Stocks', path: ROUTES.stocks, Icon: TrendingUp},
  ];

  const partnerProgramItems: {name: string; path: string; Icon: MarketIcon}[] = [
    {name: 'Partner', path: ROUTES.partners, Icon: Handshake},
    {name: 'Introducing Broker', path: ROUTES.partnersIntroducingBroker, Icon: Building2},
    {name: 'Affiliate', path: ROUTES.partnersAffiliate, Icon: Link2},
    {name: 'Money Manager', path: ROUTES.partnersMoneyManager, Icon: Landmark},
  ];

  type MobileNavItem =
    | {kind: 'link'; label: string; path: string; icon: MarketIcon}
    | {kind: 'soon'; label: string; icon: MarketIcon};

  /* Partnership is only the accordion above — do not duplicate here */
  const mobileNavItems: MobileNavItem[] = [
    {kind: 'link', label: 'Account Types', path: ROUTES.accounts, icon: Wallet},
    {kind: 'link', label: 'Platforms', path: ROUTES.platforms, icon: LayoutDashboard},
    {kind: 'soon', label: 'Social Trading', icon: Share2},
    {kind: 'link', label: 'Support', path: ROUTES.support, icon: Headphones},
  ];

  const navText = 'text-[11px] font-bold lg:text-[12px] xl:text-[13px]';

  const navLinkClass = (path: string) =>
    `inline-flex items-center justify-center ${navText} text-gray-900 hover:text-primary transition-all px-2 py-1.5 rounded-full whitespace-nowrap shrink-0 lg:px-2.5 lg:py-2 xl:px-3 ${
      pathname === path ? 'bg-gray-100 text-primary' : ''
    }`;

  const dropdownTriggerClass = (sectionActive: boolean) =>
    `${navText} rounded-full px-2 py-1.5 whitespace-nowrap shrink-0 transition-all flex items-center gap-0.5 lg:gap-1 lg:px-2.5 lg:py-2 xl:px-3 ${
      sectionActive ? 'bg-gray-100 text-primary' : 'text-gray-900 hover:text-primary'
    }`;

  const isMarketsActive = MARKET_PATHS.includes(pathname);
  const isPartnerActive = PARTNER_PATHS.includes(pathname);

  return (
    <nav className="sticky top-0 z-50 w-full max-w-[100vw] bg-white border-b border-gray-100">
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex lg:hidden w-full items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Search size={20} className="text-gray-400" />
              <button
                type="button"
                onClick={() => go(ROUTES.login)}
                className="text-[15px] font-bold text-gray-900"
              >
                Log in
              </button>
            </div>

            <div
              className="absolute left-1/2 flex -translate-x-1/2 cursor-pointer items-center"
              onClick={() => go(ROUTES.home)}
              onKeyDown={(e) => e.key === 'Enter' && go(ROUTES.home)}
              role="button"
              tabIndex={0}
            >
              <RevoLogo className="h-9 w-auto max-w-[min(230px,62vw)] aspect-1432/504 object-contain object-center sm:h-10" />
            </div>

            <button
              type="button"
              className="p-2 -mr-1 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => {
                setIsMobileMenuOpen((o) => !o);
                if (isMobileMenuOpen) setMobileMarketsOpen(false);
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex lg:h-20 lg:w-full lg:min-w-0 lg:items-center lg:gap-3">
            <div
              className="flex min-w-0 flex-1 cursor-pointer items-center justify-start"
              onClick={() => go(ROUTES.home)}
              onKeyDown={(e) => e.key === 'Enter' && go(ROUTES.home)}
              role="button"
              tabIndex={0}
            >
              <RevoLogo className="h-8 w-auto max-w-[min(200px,28vw)] shrink-0 object-contain object-left aspect-1432/504 lg:h-9 xl:h-10 xl:max-w-[220px]" />
            </div>

            <div className="flex min-w-0 shrink-0 flex-nowrap items-center justify-center gap-x-1.5 xl:gap-x-3 2xl:gap-x-4">
              <div
                className="relative group flex h-20 shrink-0 cursor-pointer items-center"
                onMouseEnter={() => setIsMarketsOpen(true)}
                onMouseLeave={() => setIsMarketsOpen(false)}
              >
                <span className={dropdownTriggerClass(isMarketsActive)}>
                  Markets
                  <ChevronDown size={14} className={`shrink-0 transition-transform ${isMarketsOpen ? 'rotate-180' : ''}`} />
                </span>

                <AnimatePresence>
                  {isMarketsOpen && (
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: 10}}
                      className="absolute left-0 top-full z-50 -mt-2 w-[240px] rounded-xl border border-gray-100 bg-white px-4 pb-4 pt-3 dropdown-shadow flex flex-col gap-2"
                    >
                      {markets.map((item) => {
                        const MIcon = item.Icon;
                        return (
                          <div
                            key={item.name}
                            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item cursor-pointer"
                            onClick={() => go(item.path)}
                            onKeyDown={(e) => e.key === 'Enter' && go(item.path)}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                              <MIcon size={20} className="text-white" />
                            </div>
                            <span className="font-bold text-gray-900 group-hover/item:text-primary">{item.name}</span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href={ROUTES.accounts} onClick={(e) => { e.preventDefault(); go(ROUTES.accounts); }} className={navLinkClass(ROUTES.accounts)}>
                Account Types
              </a>
              <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className={navLinkClass(ROUTES.platforms)}>
                Platforms
              </a>
              <div
                className="relative group flex h-20 shrink-0 cursor-pointer items-center"
                onMouseEnter={() => setIsPartnerOpen(true)}
                onMouseLeave={() => setIsPartnerOpen(false)}
              >
                <span className={dropdownTriggerClass(isPartnerActive)}>
                  Partnership
                  <ChevronDown size={14} className={`shrink-0 transition-transform ${isPartnerOpen ? 'rotate-180' : ''}`} />
                </span>

                <AnimatePresence>
                  {isPartnerOpen && (
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: 10}}
                      className="absolute left-0 top-full z-50 -mt-2 min-w-[260px] rounded-xl border border-gray-100 bg-white px-4 pb-4 pt-3 dropdown-shadow flex flex-col gap-2"
                    >
                      {partnerProgramItems.map((item) => {
                        const PIcon = item.Icon;
                        return (
                          <div
                            key={item.path}
                            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item cursor-pointer"
                            onClick={() => go(item.path)}
                            onKeyDown={(e) => e.key === 'Enter' && go(item.path)}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                              <PIcon size={20} className="text-white" />
                            </div>
                            <span className="font-bold text-gray-900 group-hover/item:text-primary whitespace-nowrap">
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span
                className="inline-flex shrink-0 items-center px-1 py-1.5 lg:px-1.5 xl:px-2"
                aria-label="Social Trading, coming soon"
              >
                <SocialTradingNavLabel />
              </span>
              <a
                href={ROUTES.support}
                onClick={(e) => {
                  e.preventDefault();
                  go(ROUTES.support);
                }}
                className={navLinkClass(ROUTES.support)}
              >
                Support
              </a>
            </div>

            <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 pl-1 xl:gap-2.5 xl:pl-2">
              <button
                type="button"
                onClick={() => go(ROUTES.signup)}
                className="flex items-center gap-1.5 rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-[11px] font-bold text-gray-900 transition-all hover:bg-gray-100 lg:gap-2 lg:px-3.5 lg:text-[12px] xl:px-4 xl:text-[13px]"
              >
                <span className="whitespace-nowrap">Sign up</span>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 lg:h-7 lg:w-7">
                  <ArrowUpRight size={14} className="shrink-0 lg:h-4 lg:w-4" />
                </div>
              </button>
              <Button
                onClick={() => go(ROUTES.login)}
                size="sm"
                className="gap-1.5 px-3.5 py-1.5 text-[11px] lg:gap-2 lg:px-4 lg:text-[12px] xl:px-5 xl:text-[13px]"
              >
                <span className="whitespace-nowrap">Login</span>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 lg:h-7 lg:w-7">
                  <ArrowUpRight size={14} className="shrink-0 lg:h-4 lg:w-4" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94]}}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/90 shadow-[0_16px_48px_-16px_rgba(15,23,42,0.18)]"
          >
            <div className="px-3 pb-5 pt-2 max-h-[min(72vh,calc(100dvh-4.5rem))] overflow-y-auto overscroll-contain">
              <p className="px-2 pt-2 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Menu</p>

              {/* Markets accordion */}
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden mb-3">
                <button
                  type="button"
                  id="mobile-markets-trigger"
                  aria-expanded={mobileMarketsOpen}
                  aria-controls="mobile-markets-panel"
                  className={`flex w-full items-center justify-between gap-3 px-3 py-3.5 text-left transition-colors ${
                    isMarketsActive ? 'bg-primary/[0.06]' : 'active:bg-gray-50'
                  }`}
                  onClick={() => setMobileMarketsOpen((v) => !v)}
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25">
                      <BarChart3 size={22} strokeWidth={2.25} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-gray-900 text-[17px] leading-tight">Markets</span>
                      <span className="block text-xs font-medium text-gray-500 mt-0.5">Forex, Indices, Crypto & more</span>
                    </span>
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${mobileMarketsOpen ? 'rotate-180 text-primary' : ''}`}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileMarketsOpen && (
                    <motion.div
                      id="mobile-markets-panel"
                      role="region"
                      aria-labelledby="mobile-markets-trigger"
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94]}}
                      className="overflow-hidden border-t border-gray-100 bg-gray-50/95"
                    >
                      <ul className="space-y-1 px-2 py-3">
                        {markets.map((item) => {
                          const active = pathname === item.path;
                          const MIcon = item.Icon;
                          return (
                            <li key={item.path}>
                              <button
                                type="button"
                                onClick={() => go(item.path)}
                                className={`flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors ${
                                  active ? 'bg-white shadow-sm ring-1 ring-primary/15' : 'hover:bg-white/80 active:bg-white'
                                }`}
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                                  <MIcon size={18} className="text-white" strokeWidth={2.25} />
                                </span>
                                <span className="min-w-0 flex-1 font-bold text-[15px] text-gray-900">{item.name}</span>
                                <ChevronRight size={18} className={active ? 'text-primary' : 'text-gray-300'} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Partner accordion */}
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden mb-3">
                <button
                  type="button"
                  id="mobile-partner-trigger"
                  aria-expanded={mobilePartnerOpen}
                  aria-controls="mobile-partner-panel"
                  className={`flex w-full items-center justify-between gap-3 px-3 py-3.5 text-left transition-colors ${
                    isPartnerActive ? 'bg-primary/[0.06]' : 'active:bg-gray-50'
                  }`}
                  onClick={() => setMobilePartnerOpen((v) => !v)}
                >
                  <span className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25">
                      <Handshake size={22} strokeWidth={2.25} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-gray-900 text-[17px] leading-tight">Partnership</span>
                      <span className="block text-xs font-medium text-gray-500 mt-0.5">IB, Affiliate & Money Manager</span>
                    </span>
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${mobilePartnerOpen ? 'rotate-180 text-primary' : ''}`}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobilePartnerOpen && (
                    <motion.div
                      id="mobile-partner-panel"
                      role="region"
                      aria-labelledby="mobile-partner-trigger"
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94]}}
                      className="overflow-hidden border-t border-gray-100 bg-gray-50/95"
                    >
                      <ul className="space-y-1 px-2 py-3">
                        {partnerProgramItems.map((item) => {
                          const active = pathname === item.path;
                          const PIcon = item.Icon;
                          return (
                            <li key={item.path}>
                              <button
                                type="button"
                                onClick={() => go(item.path)}
                                className={`flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors ${
                                  active ? 'bg-white shadow-sm ring-1 ring-primary/15' : 'hover:bg-white/80 active:bg-white'
                                }`}
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                                  <PIcon size={18} className="text-white" strokeWidth={2.25} />
                                </span>
                                <span className="min-w-0 flex-1 font-bold text-[15px] text-gray-900">{item.name}</span>
                                <ChevronRight size={18} className={active ? 'text-primary' : 'text-gray-300'} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining links */}
              <ul className="space-y-1.5 mb-4">
                {mobileNavItems.map((item) => {
                  if (item.kind === 'soon') {
                    const SoonIcon = item.icon;
                    return (
                      <li key="social-trading-soon">
                        <div
                          className="flex w-full items-center gap-3 px-3 py-3.5 select-none pointer-events-none"
                          aria-label="Social Trading, coming soon"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                            <SoonIcon size={22} strokeWidth={2} />
                          </span>
                          <SocialTradingNavLabel className="flex-1 text-[16px]" />
                        </div>
                      </li>
                    );
                  }
                  const {label, path, icon: Icon} = item;
                  const active = pathname === path;
                  return (
                    <li key={path}>
                      <button
                        type="button"
                        onClick={() => go(path)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3.5 text-left transition-all ${
                          active
                            ? 'border-primary/25 bg-primary/[0.07] shadow-sm'
                            : 'border-gray-100 bg-white shadow-sm hover:border-gray-200 hover:bg-gray-50/80 active:scale-[0.99]'
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                            active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          <Icon size={22} strokeWidth={2} />
                        </span>
                        <span className="min-w-0 flex-1 font-bold text-[16px] text-gray-900">{label}</span>
                        <ChevronRight size={20} className={active ? 'text-primary shrink-0' : 'text-gray-300 shrink-0'} />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-1" />

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => go(ROUTES.login)}
                  className="w-full rounded-full border-2 border-gray-200 bg-white py-3.5 text-[15px] font-bold text-gray-900 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-[0.99]"
                >
                  Log in
                </button>
                <Button onClick={() => go(ROUTES.signup)} className="w-full py-3.5 text-[15px]">
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
