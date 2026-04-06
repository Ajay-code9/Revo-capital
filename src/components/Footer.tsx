import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Facebook, Twitter, Instagram, Linkedin, Youtube} from 'lucide-react';
import {PARTNER_PATHS, ROUTES} from '../routes/paths';
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  REGISTERED_OFFICE_ADDRESS,
  PHYSICAL_OFFICE_ADDRESS,
} from '../constants/companyContact';
import {RevoLogo} from './RevoLogo';
import {StartTradingStepsSection} from './StartTradingStepsSection';

export const Footer = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const showStartTradingSteps = !PARTNER_PATHS.includes(pathname);

  const go = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {showStartTradingSteps && <StartTradingStepsSection />}
      <footer className="bg-white pt-14 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          <div className="col-span-2 space-y-6">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => go(ROUTES.home)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && go(ROUTES.home)}
            >
              <RevoLogo className="h-9 w-auto max-w-[220px] aspect-1432/504 object-contain object-left sm:h-10 sm:max-w-[240px]" />
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Revo Capital is a Global Leader in Online Trading, providing access to 1000+ CFD Instruments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Markets</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.forex} onClick={(e) => { e.preventDefault(); go(ROUTES.forex); }} className="hover:text-primary transition-colors">
                  Forex
                </a>
              </li>
              <li>
                <a href={ROUTES.indices} onClick={(e) => { e.preventDefault(); go(ROUTES.indices); }} className="hover:text-primary transition-colors">
                  Indices
                </a>
              </li>
              <li>
                <a href={ROUTES.futures} onClick={(e) => { e.preventDefault(); go(ROUTES.futures); }} className="hover:text-primary transition-colors">
                  Futures
                </a>
              </li>
              <li>
                <a href={ROUTES.crypto} onClick={(e) => { e.preventDefault(); go(ROUTES.crypto); }} className="hover:text-primary transition-colors">
                  Crypto
                </a>
              </li>
              <li>
                <a href={ROUTES.metals} onClick={(e) => { e.preventDefault(); go(ROUTES.metals); }} className="hover:text-primary transition-colors">
                  Metals
                </a>
              </li>
              <li>
                <a href={ROUTES.stocks} onClick={(e) => { e.preventDefault(); go(ROUTES.stocks); }} className="hover:text-primary transition-colors">
                  Stocks
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Account Types</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.accounts} onClick={(e) => { e.preventDefault(); go(ROUTES.accounts); }} className="hover:text-primary transition-colors">
                  Standard
                </a>
              </li>
              <li>
                <a href={ROUTES.accounts} onClick={(e) => { e.preventDefault(); go(ROUTES.accounts); }} className="hover:text-primary transition-colors">
                  Raw+
                </a>
              </li>
              <li>
                <a href={ROUTES.accounts} onClick={(e) => { e.preventDefault(); go(ROUTES.accounts); }} className="hover:text-primary transition-colors">
                  Elite
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Platforms</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  RevoTrader
                </a>
              </li>
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  Android
                </a>
              </li>
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  iOS
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.support} onClick={(e) => { e.preventDefault(); go(ROUTES.support); }} className="hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href={ROUTES.partners} onClick={(e) => { e.preventDefault(); go(ROUTES.partners); }} className="hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href={ROUTES.support} onClick={(e) => { e.preventDefault(); go(ROUTES.support); }} className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-6">
            <div className="rounded-2xl bg-linear-to-br from-[#2a0505] via-[#8f1010] via-45% to-primary px-6 py-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 lg:px-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
                <div className="space-y-4">
                  <h4 className="font-bold text-white">Contact</h4>
                  <ul className="space-y-3 text-sm text-white/85">
                    <li>
                      <a
                        href={`tel:${COMPANY_PHONE_TEL}`}
                        className="transition-colors hover:text-white hover:underline underline-offset-2"
                      >
                        {COMPANY_PHONE_DISPLAY}
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:support@revocp.com"
                        className="transition-colors hover:text-white hover:underline underline-offset-2"
                      >
                        support@revocp.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-white">Registered Office</h5>
                  <p className="text-xs leading-relaxed text-white/80">{REGISTERED_OFFICE_ADDRESS}</p>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-white">Physical Office</h5>
                  <p className="text-xs leading-relaxed text-white/80">{PHYSICAL_OFFICE_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 space-y-6">
          <div className="text-[11px] text-gray-400 leading-relaxed space-y-4">
            <p>
              Revo Capital is the trading name of Revo Capital Limited, a reputable financial services company
              licensed under Investment and Legal Services LTD, located at {REGISTERED_OFFICE_ADDRESS}. Revo
              Capital Limited, registered in Saint Lucia (Reg. No. 2025-00585).
            </p>
            <p>
              Risk Warning: Trading leveraged financial instruments such as Forex, CFDs, and Commodities carries a significant risk of loss and may not be suitable for all investors. Due to the high level of Leverage, you may lose more than your initial investment. Please ensure you fully understand the risks involved and seek advice from an independent financial advisor if necessary before engaging in any trading activities.
            </p>
            <p>
              Restricted Regions: Revo Capital Limited strictly prohibits providing services to residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan, and any other jurisdictions where such activities are restricted or prohibited by local law.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-50">
            <div className="text-sm text-gray-400">© 2025 Revo Capital. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Risk Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
