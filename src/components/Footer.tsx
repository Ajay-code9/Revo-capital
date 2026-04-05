import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Facebook, Twitter, Instagram, Linkedin, Youtube} from 'lucide-react';
import {ROUTES} from '../routes/paths';
import {RevoLogo} from './RevoLogo';

export const Footer = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };

  return (
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
              Revo Capital is a global leader in online trading, providing access to 1200+ CFD instruments.
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
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Islamic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Platforms</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  Revo Trader
                </a>
              </li>
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  cTrader
                </a>
              </li>
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  MT4
                </a>
              </li>
              <li>
                <a href={ROUTES.platforms} onClick={(e) => { e.preventDefault(); go(ROUTES.platforms); }} className="hover:text-primary transition-colors">
                  TradingView
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li>
                <a href={ROUTES.tools} onClick={(e) => { e.preventDefault(); go(ROUTES.tools); }} className="hover:text-primary transition-colors">
                  Tools
                </a>
              </li>
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
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 col-span-2 lg:col-span-1">
            <h4 className="font-bold text-gray-900">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>+44 7868 811937</li>
              <li>info@revocp.com</li>
            </ul>
            <div className="mt-6 space-y-4">
              <div>
                <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Registered Office</h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia
                </p>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Physical Office</h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  33F3+654, Castries - Gros Islet Hwy, Rodney Bay, St. Lucia, Office 20
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 space-y-6">
          <div className="text-[11px] text-gray-400 leading-relaxed space-y-4">
            <p>
              Revo Capital is the trading name of Revo Capital Limited, a reputable financial services company licensed under Investment and Legal Services LTD, located at Ground Floor, The Sotheby Building, Saint Lucia. Revo Capital Limited, registered in Saint Lucia (Reg. No. 2025-00585).
            </p>
            <p>
              Risk Warning: Trading leveraged financial instruments such as Forex, CFDs, and Commodities carries a significant risk of loss and may not be suitable for all investors. Due to the high level of leverage, you may lose more than your initial investment. Please ensure you fully understand the risks involved and seek advice from an independent financial advisor if necessary before engaging in any trading activities.
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
  );
};
