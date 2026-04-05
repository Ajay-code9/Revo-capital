import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {MarketCategoryTabs} from './MarketCategoryTabs';
import {ROUTES} from '../routes/paths';

export const MarketTabs = ({initialTab = 'Forex'}: {initialTab?: string}) => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (activeTab === 'Forex') navigate(ROUTES.forex);
    else if (activeTab === 'Indices') navigate(ROUTES.indices);
    else if (activeTab === 'Cryptocurrencies') navigate(ROUTES.crypto);
    else if (activeTab === 'Shares') navigate(ROUTES.stocks);
    else if (activeTab === 'Commodities') navigate(ROUTES.metals);
  };

  const assetData: Record<string, any[]> = {
    'Forex': [
      {
        symbol: '🇪🇺🇺🇸',
        logoSrc: '/images/logos/EURUSD.svg',
        name: 'EURUSD',
        fullName: 'EURUSD',
        price: '1.151685',
        change: '-0.23%',
        isNegative: true,
      },
      {
        symbol: '🇬🇧🇺🇸',
        logoSrc: '/images/logos/GBPUSD.svg',
        name: 'GBPUSD',
        fullName: 'GBPUSD',
        price: '1.31961',
        change: '-0.28%',
        isNegative: true,
      },
      {
        symbol: '🇺🇸🇯🇵',
        logoSrc: '/images/logos/USDJPY.svg',
        name: 'USDJPY',
        fullName: 'USDJPY',
        price: '159.673',
        change: '0.02%',
        isNegative: false,
      },
      {
        symbol: '🇪🇺🇬🇧',
        logoSrc: '/images/logos/EURGBP.svg',
        name: 'EURGBP',
        fullName: 'EURGBP',
        price: '0.87249',
        change: '-0.07%',
        isNegative: true,
      },
    ],
    'Shares': [
      {
        symbol: '🍎',
        logoSrc: '/images/logos/apple.svg',
        name: 'Apple',
        fullName: 'AAPL.US',
        price: '255.345',
        change: '0.17%',
        isNegative: false,
        bgColor: 'bg-black',
      },
      {
        symbol: '📦',
        logoSrc: '/images/logos/amazon.svg',
        name: 'Amazon.com',
        fullName: 'AMZN.US',
        price: '209.74',
        change: '-0.1%',
        isNegative: true,
        bgColor: 'bg-[#F2F2F2]',
      },
      {
        symbol: '🎬',
        logoSrc: '/images/logos/netflix.svg',
        name: 'Netflix',
        fullName: 'NFLX.US',
        price: '98.295',
        change: '3.1%',
        isNegative: false,
        bgColor: 'bg-black',
      },
      {
        symbol: '⚡',
        logoSrc: '/images/logos/tesla.svg',
        name: 'Tesla Motors Inc.',
        fullName: 'TSLA.US',
        price: '361.245',
        change: '-5.16%',
        isNegative: true,
        bgColor: 'bg-[#E31937]',
      },
    ],
    'Indices': [
      {
        symbol: '🇺🇸',
        logoSrc: '/images/logos/SPX500.svg',
        name: 'SPX500',
        fullName: 'SPX500',
        price: '6563.25',
        change: '-0.31%',
        isNegative: true,
      },
      {
        symbol: '🇺🇸',
        logoSrc: '/images/logos/US100.svg',
        name: 'US100',
        fullName: 'US100',
        price: '23956.65',
        change: '-0.36%',
        isNegative: true,
      },
      {
        symbol: '🇺🇸',
        logoSrc: '/images/logos/US30.svg',
        name: 'US30',
        fullName: 'US30',
        price: '46395.2',
        change: '-0.27%',
        isNegative: true,
      },
      {
        symbol: '🇬🇧',
        logoSrc: '/images/logos/UK100.svg',
        name: 'UK 100',
        fullName: 'UK100',
        price: '10453.85',
        change: '0.33%',
        isNegative: false,
      },
    ],
    'Commodities': [
      {
        symbol: '🟡',
        logoSrc: '/images/logos/gold-logo.svg',
        name: 'GOLD',
        fullName: 'XAUUSD',
        price: '4676.315',
        change: '-1.72%',
        isNegative: true,
      },
      {
        symbol: '⚪',
        logoSrc: '/images/logos/silver-logo.svg',
        name: 'SILVER',
        fullName: 'XAGUSD',
        price: '72.989',
        change: '-2.81%',
        isNegative: true,
      },
      {
        symbol: '🛢️',
        logoSrc: '/images/logos/logo-wti.svg',
        name: 'OIL WTI',
        fullName: 'XTIUSD',
        price: '112.285',
        change: '13.31%',
        isNegative: false,
      },
      {
        symbol: '🛢️',
        logoSrc: '/images/logos/logo-brent.svg',
        name: 'OIL BRENT',
        fullName: 'XBRUSD',
        price: '112.405',
        change: '8.67%',
        isNegative: false,
      },
    ],
    'Cryptocurrencies': [
      {
        symbol: '🔷',
        logoSrc: '/images/logos/logo-etheerum.svg',
        name: 'Ethereum',
        fullName: 'XETUSD',
        price: '2066.2',
        change: '0.82%',
        isNegative: false,
        bgColor: 'bg-[#627EEA]',
      },
      {
        symbol: '₿',
        logoSrc: '/images/logos/logo-bitcoin.svg',
        name: 'Bitcoin',
        fullName: 'BTCUSD',
        price: '67323.05',
        change: '0.73%',
        isNegative: false,
        bgColor: 'bg-[#F7931A]',
      },
      {
        symbol: '🐕',
        logoSrc: '/images/logos/logo-dogecoin.svg',
        name: 'Dogecoin',
        fullName: 'DOGEUSD',
        price: '0.09235',
        change: '1.21%',
        isNegative: false,
        bgColor: 'bg-[#C2A633]',
      },
      {
        symbol: 'Ξ',
        logoSrc: '/images/logos/logo-solana.svg',
        name: 'Solana',
        fullName: 'SOLUSD',
        price: '80.875',
        change: '0.87%',
        isNegative: false,
        bgColor: 'bg-black',
      },
    ],
  };

  const currentAssets = assetData[activeTab] || assetData['Forex'];

  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trade</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Top markets at <span className="text-primary">industry-best pricing</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose from 1200+ top CFD instruments across 7 asset classes at the most competitive prices.
          </p>
        </div>

        <MarketCategoryTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Assets grid — whole panel animates on tab change (smooth on mobile) */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            role="tabpanel"
            aria-live="polite"
            initial={
              reduceMotion
                ? {opacity: 0}
                : {opacity: 0, y: 18, filter: 'blur(6px)'}
            }
            animate={{
              opacity: 1,
              y: 0,
              filter: reduceMotion ? 'none' : 'blur(0px)',
              transition: reduceMotion
                ? {duration: 0.2}
                : {
                    opacity: {duration: 0.35, ease: [0.22, 1, 0.36, 1]},
                    y: {duration: 0.4, ease: [0.22, 1, 0.36, 1]},
                    filter: {duration: 0.3},
                  },
            }}
            exit={
              reduceMotion
                ? {opacity: 0, transition: {duration: 0.15}}
                : {
                    opacity: 0,
                    y: -14,
                    filter: 'blur(4px)',
                    transition: {duration: 0.22, ease: [0.4, 0, 1, 1]},
                  }
            }
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={reduceMotion ? {opacity: 0} : {opacity: 0, y: 28, scale: 0.94}}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: reduceMotion
                    ? {duration: 0.2}
                    : {
                        delay: 0.05 + index * 0.055,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      },
                }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className={`h-48 flex items-center justify-center relative ${asset.bgColor || 'bg-[#F2F2F2]'}`}>
                  {asset.badge && (
                    <div className="absolute bottom-4 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                      {asset.badge}
                    </div>
                  )}
                  <motion.div
                    className={asset.logoSrc ? 'flex h-full w-full items-center justify-center px-4' : 'text-6xl'}
                    initial={false}
                    whileHover={{scale: 1.08}}
                    transition={{type: 'spring', stiffness: 400, damping: 22}}
                  >
                    {asset.logoSrc ? (
                      <img
                        src={asset.logoSrc}
                        alt=""
                        width={200}
                        height={80}
                        className="max-h-24 w-auto max-w-[88%] object-contain object-center"
                        loading="lazy"
                        decoding="async"
                        aria-hidden
                      />
                    ) : (
                      asset.symbol
                    )}
                  </motion.div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-lg">{asset.name}</span>
                    <span className="font-bold text-gray-900 text-lg">{asset.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 font-medium">{asset.fullName}</span>
                    <span className={`text-sm font-bold ${asset.isNegative ? 'text-primary' : 'text-[#0066FF]'}`}>
                      {asset.change}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-right">
          <a 
            href="#" 
            onClick={handleViewClick}
            className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-primary transition-colors"
          >
            View {activeTab} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
