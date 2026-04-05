import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, useReducedMotion} from 'motion/react';
import {MarketCategoryTabs} from './MarketCategoryTabs';

function formatForexBidAsk(midStr: string, pair: string): {bid: string; ask: string} {
  const m = Number(midStr);
  if (Number.isNaN(m)) return {bid: midStr, ask: midStr};
  if (pair.toUpperCase().includes('JPY')) {
    const spread = 0.08;
    return {
      bid: (m - spread / 2).toFixed(3),
      ask: (m + spread / 2).toFixed(3),
    };
  }
  const spread = 0.00022;
  return {
    bid: (m - spread / 2).toFixed(5),
    ask: (m + spread / 2).toFixed(5),
  };
}

export const MarketTabs = ({initialTab = 'Forex'}: {initialTab?: string}) => {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const assetData: Record<string, any[]> = {
    'Forex': [
      {
        symbol: '🇪🇺🇺🇸',
        logoSrc: '/images/logos/EURUSD.svg',
        name: 'EURUSD',
        fullName: 'EURUSD',
        subtitle: 'Euro vs US Dollar',
        price: '1.151685',
        change: '-0.23%',
        isNegative: true,
        gradient: 'linear-gradient(180deg, #c60b2d 0%, #1a0521 100%)',
      },
      {
        symbol: '🇬🇧🇺🇸',
        logoSrc: '/images/logos/GBPUSD.svg',
        name: 'GBPUSD',
        fullName: 'GBPUSD',
        subtitle: 'British Pound vs US Dollar',
        price: '1.31961',
        change: '-0.28%',
        isNegative: true,
        gradient: 'linear-gradient(180deg, #0044cc 0%, #020a30 100%)',
      },
      {
        symbol: '🇺🇸🇯🇵',
        logoSrc: '/images/logos/USDJPY.svg',
        name: 'USDJPY',
        fullName: 'USDJPY',
        subtitle: 'US Dollar vs Japanese Yen',
        price: '159.673',
        change: '0.02%',
        isNegative: false,
        gradient: 'linear-gradient(180deg, #1e1b4b 0%, #a50021 100%)',
      },
    ],
    'Shares': [
      {
        symbol: '🍎',
        logoSrc: '/images/logos/apple.svg',
        name: 'AAPL.US',
        fullName: 'AAPL.US',
        subtitle: 'Apple Inc',
        bid: '255.91',
        ask: '255.94',
        change: '+0.17%',
        isNegative: false,
        gradient: 'linear-gradient(90deg, #7a7f87 0%, #5c6066 100%)',
      },
      {
        symbol: '🔤',
        name: 'GOOG.US',
        fullName: 'GOOG.US',
        subtitle: 'Alphabet Inc',
        logoText: 'Alphabet',
        logoBadgeBg: '#e53935',
        bid: '294.3',
        ask: '294.34',
        change: '-0.12%',
        isNegative: true,
        gradient: 'linear-gradient(90deg, #e53935 0%, #120814 100%)',
      },
      {
        symbol: '∞',
        name: 'META.US',
        fullName: 'META.US',
        subtitle: 'Meta Platforms Inc',
        iconLetter: '∞',
        logoBadgeBg: '#1877f2',
        bid: '574.48',
        ask: '574.53',
        change: '+0.22%',
        isNegative: false,
        gradient: 'linear-gradient(90deg, #1877f2 0%, #0a1020 100%)',
      },
    ],
    'Indices': [
      {
        symbol: '🇺🇸',
        name: 'US500',
        fullName: 'US500',
        bid: '6568.41',
        ask: '6569.02',
        change: '-0.31%',
        isNegative: true,
        gradient: 'linear-gradient(135deg, #E65100 0%, #1A0033 100%)',
      },
      {
        symbol: '🇬🇧',
        name: 'UK100',
        fullName: 'UK100',
        bid: '10457.2',
        ask: '10458.2',
        change: '+0.33%',
        isNegative: false,
        gradient: 'linear-gradient(135deg, #E65100 0%, #1A0033 100%)',
      },
      {
        symbol: '🇩🇪',
        name: 'DE40',
        fullName: 'DE40',
        bid: '23206.35',
        ask: '23208.95',
        change: '+0.32%',
        isNegative: false,
        gradient: 'linear-gradient(135deg, #E65100 0%, #1A0033 100%)',
      },
    ],
    'Commodities': [
      {
        symbol: '🛢️',
        name: 'UKOIL',
        fullName: 'UKOIL',
        subtitle: 'Brent OIL CFD',
        bid: '106.094',
        ask: '106.123',
        change: '+0.09%',
        isNegative: false,
        gradient: 'linear-gradient(135deg, #ff4500 0%, #1a0b2e 100%)',
      },
      {
        symbol: '🛢️',
        name: 'USOIL',
        fullName: 'USOIL',
        subtitle: 'WTI OIL CFD',
        bid: '103.826',
        ask: '103.938',
        change: '+0.07%',
        isNegative: false,
        gradient: 'linear-gradient(135deg, #ff4500 0%, #1a0b2e 100%)',
      },
      {
        symbol: '⛽',
        name: 'Gasoil',
        fullName: 'Gasoil',
        subtitle: 'Low Sulphur Gasoil CFD',
        bid: '1452.7',
        ask: '1455.84',
        change: '+0.11%',
        isNegative: false,
        gradient: 'linear-gradient(135deg, #ff4500 0%, #1a0b2e 100%)',
      },
    ],
    'Cryptocurrencies': [
      {
        symbol: '₿',
        logoSrc: '/images/logos/logo-bitcoin.svg',
        name: 'BTCUSD',
        fullName: 'BTCUSD',
        subtitle: 'Bitcoin vs US Dollar',
        bid: '66968.5',
        ask: '67012.8',
        change: '+0.73%',
        isNegative: false,
        gradient: 'linear-gradient(180deg, #e88a28 0%, #1f0f18 100%)',
      },
      {
        symbol: '🔷',
        logoSrc: '/images/logos/logo-etheerum.svg',
        name: 'ETHUSD',
        fullName: 'ETHUSD',
        subtitle: 'Ethereum vs US Dollar',
        bid: '2040.68',
        ask: '2043.12',
        change: '+0.82%',
        isNegative: false,
        gradient: 'linear-gradient(180deg, #2563eb 0%, #020a30 100%)',
      },
      {
        symbol: 'Ł',
        name: 'LTCUSD',
        fullName: 'LTCUSD',
        subtitle: 'Litecoin vs US Dollar',
        iconLetter: 'Ł',
        bid: '52.77',
        ask: '52.88',
        change: '+0.15%',
        isNegative: false,
        gradient: 'linear-gradient(180deg, #5a7089 0%, #0d1526 100%)',
      },
    ],
  };

  const currentAssets = assetData[activeTab] || assetData['Forex'];
  const isForexTab = activeTab === 'Forex';
  const isCryptoTab = activeTab === 'Cryptocurrencies';
  const isSharesTab = activeTab === 'Shares';
  const isIndicesTab = activeTab === 'Indices';
  const isCommoditiesTab = activeTab === 'Commodities';
  const isGradientTab =
    isForexTab || isCryptoTab || isSharesTab || isIndicesTab || isCommoditiesTab;

  const gridClass = isGradientTab
    ? 'grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-6'
    : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4';

  const renderAssetCard = (asset: (typeof currentAssets)[number], index: number) => (
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
      className={
        isGradientTab
          ? 'group cursor-pointer overflow-hidden rounded-[18px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)]'
          : 'group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl'
      }
    >
      {isGradientTab && asset.gradient ? (
        <div
          className="flex h-full min-h-[280px] flex-col p-5 text-white sm:min-h-[300px] sm:p-7 lg:p-8"
          style={{background: asset.gradient as string}}
        >
          <div className="relative flex flex-1 flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1 pr-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90">
                  {isCryptoTab
                    ? 'Crypto'
                    : isSharesTab
                      ? 'Shares'
                      : isIndicesTab
                        ? 'Indices'
                        : isCommoditiesTab
                          ? 'Commodities'
                          : 'Forex'}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-[1.65rem]">
                  {asset.name}
                </h3>
                {!isIndicesTab ? (
                  <p className="mt-1.5 text-sm font-medium leading-snug text-white/80">
                    {(asset as {subtitle?: string}).subtitle ?? asset.fullName}
                  </p>
                ) : null}
              </div>
              {isIndicesTab || isCommoditiesTab ? null : isSharesTab ? (
                (() => {
                  const a = asset as {
                    logoSrc?: string;
                    logoText?: string;
                    iconLetter?: string;
                    logoBadgeBg?: string;
                  };
                  if (a.logoSrc) {
                    return (
                      <div className="relative mt-0.5 shrink-0 rounded-full border-2 border-white/45 bg-white p-2 shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:p-2.5">
                        <img
                          src={a.logoSrc}
                          alt=""
                          width={96}
                          height={96}
                          className="h-12 w-12 object-contain sm:h-[3.35rem] sm:w-[3.35rem]"
                          loading="lazy"
                          decoding="async"
                          aria-hidden
                        />
                      </div>
                    );
                  }
                  if (a.logoText) {
                    return (
                      <div
                        className="relative mt-0.5 flex h-[3.35rem] w-[3.35rem] shrink-0 items-center justify-center rounded-full border-2 border-white/35 px-1.5 text-center text-[9px] font-bold leading-tight tracking-tight text-white shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:h-15 sm:w-15 sm:text-[10px]"
                        style={{backgroundColor: a.logoBadgeBg ?? '#e53935'}}
                        aria-hidden
                      >
                        {a.logoText}
                      </div>
                    );
                  }
                  return (
                    <div
                      className="relative mt-0.5 flex h-[3.35rem] w-[3.35rem] shrink-0 items-center justify-center rounded-full border-2 border-white/35 text-2xl font-light text-white shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:h-15 sm:w-15 sm:text-3xl"
                      style={{backgroundColor: a.logoBadgeBg ?? '#1877f2'}}
                      aria-hidden
                    >
                      {a.iconLetter ?? '∞'}
                    </div>
                  );
                })()
              ) : isCryptoTab ? (
                <div className="relative mt-0.5 flex shrink-0 items-center">
                  <div className="relative z-1 rounded-full border-2 border-white/45 bg-white p-2 shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:p-2.5">
                    {(asset as {logoSrc?: string}).logoSrc ? (
                      <img
                        src={(asset as {logoSrc: string}).logoSrc}
                        alt=""
                        width={96}
                        height={96}
                        className="h-12 w-12 object-contain sm:h-[3.35rem] sm:w-[3.35rem]"
                        loading="lazy"
                        decoding="async"
                        aria-hidden
                      />
                    ) : (
                      <span className="flex h-12 w-12 items-center justify-center text-xl font-bold text-slate-700 sm:h-[3.35rem] sm:w-[3.35rem] sm:text-2xl">
                        {(asset as {iconLetter?: string}).iconLetter ?? 'Ł'}
                      </span>
                    )}
                  </div>
                  <div
                    className="-ml-4 mt-1.5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 bg-white text-xl shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:-ml-5 sm:h-12 sm:w-12 sm:text-2xl"
                    aria-hidden
                  >
                    🇺🇸
                  </div>
                </div>
              ) : asset.logoSrc ? (
                <div className="relative mt-0.5 shrink-0 rounded-full border-2 border-white/45 bg-white p-2 shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:p-2.5">
                  <img
                    src={asset.logoSrc}
                    alt=""
                    width={96}
                    height={96}
                    className="h-12 w-12 object-contain sm:h-[3.35rem] sm:w-[3.35rem]"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </div>
              ) : null}
            </div>
            <div className="mt-auto border-t border-white/25 pt-5">
              {(() => {
                const a = asset as {bid?: string; ask?: string; price?: string; name: string};
                const hasExplicit = a.bid != null && a.bid !== '' && a.ask != null && a.ask !== '';
                const {bid, ask} = hasExplicit
                  ? {bid: String(a.bid), ask: String(a.ask)}
                  : formatForexBidAsk(a.price ?? '', a.name);
                return (
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Bid</p>
                      <p className="mt-1.5 text-xl font-bold tabular-nums tracking-tight sm:text-2xl">{bid}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">Ask</p>
                      <p className="mt-1.5 text-xl font-bold tabular-nums tracking-tight sm:text-2xl">{ask}</p>
                    </div>
                  </div>
                );
              })()}
              <div className="mt-3 flex justify-end border-t border-white/15 pt-3">
                <span
                  className={`text-sm font-bold tabular-nums ${
                    asset.isNegative ? 'text-red-200' : 'text-sky-200'
                  }`}
                >
                  {asset.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : isGradientTab ? null : (
        <>
          <div className={`relative flex h-48 items-center justify-center ${asset.bgColor || 'bg-[#F2F2F2]'}`}>
            {asset.badge && (
              <div className="absolute bottom-4 z-10 rounded-full bg-black px-3 py-1 text-[10px] font-bold text-white">
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
          <div className="space-y-4 p-8">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">{asset.name}</span>
              <span className="text-lg font-bold text-gray-900">{asset.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">{asset.fullName}</span>
              <span className={`text-sm font-bold ${asset.isNegative ? 'text-primary' : 'text-[#0066FF]'}`}>
                {asset.change}
              </span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Live Pricing on <span className="text-primary">Popular Markets</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            View real-time bid and ask prices for a curated selection of top-traded instruments. Choose from
            over 1,500 CFDs across Forex, Shares, Indices, Commodities, Crypto, and ETFs.
          </p>
        </div>

        <MarketCategoryTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <p className="mx-auto mb-1.5 mt-5 max-w-4xl text-center text-sm leading-snug text-gray-500 sm:mt-6">
          *Please note that the pricing mentioned below specifically applies to Elite account type
        </p>

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
            className={gridClass}
          >
            {currentAssets.map((asset, index) => renderAssetCard(asset, index))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
