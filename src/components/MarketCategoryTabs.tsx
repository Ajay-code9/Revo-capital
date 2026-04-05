import React from 'react';
import {LayoutGroup, motion} from 'motion/react';

interface MarketCategoryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  {name: 'Forex'},
  {name: 'Shares'},
  {name: 'Indices'},
  {name: 'Commodities'},
  {name: 'Cryptocurrencies', short: 'Crypto'},
] as const;

function tabIsActive(activeTab: string, tabName: string) {
  const a = activeTab.toLowerCase();
  const t = tabName.toLowerCase();
  if (a === t) return true;
  if (tabName === 'Shares' && (a === 'stocks' || a === 'shares')) return true;
  if (tabName === 'Commodities' && (a === 'metals' || a === 'commodities')) return true;
  if (tabName === 'Cryptocurrencies' && (a === 'crypto' || a === 'cryptocurrencies')) return true;
  return false;
}

export const MarketCategoryTabs = ({activeTab, onTabChange}: MarketCategoryTabsProps) => {
  return (
    <div className="mb-12 w-full min-w-0">
      {/* Full-width scroller: min-w-0 lets flex parents shrink so overflow-x works; inner w-max stays as wide as tabs */}
      <div
        className={`
          w-full min-w-0 overflow-x-auto overflow-y-visible overscroll-x-contain
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          pb-1 -mx-1 px-3 sm:mx-0 sm:px-0
        `}
      >
        <div className="flex w-max min-w-full justify-center sm:min-w-0 sm:w-auto sm:justify-center mx-auto">
          <LayoutGroup id="market-category-tabs">
            <div
              className={`
                flex flex-nowrap items-center gap-0.5 sm:gap-1 shrink-0
                bg-[#F8F9FA] py-1 pl-2 pr-3 sm:p-1.5 sm:pl-1.5 sm:pr-1.5
                rounded-2xl sm:rounded-full
                border border-gray-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]
                sm:flex-wrap sm:justify-center
              `}
            >
              {tabs.map((tab) => {
                const isActive = tabIsActive(activeTab, tab.name);
                const label = 'short' in tab && tab.short ? (
                  <>
                    <span className="sm:hidden">{tab.short}</span>
                    <span className="hidden sm:inline">{tab.name}</span>
                  </>
                ) : (
                  tab.name
                );
                return (
                  <motion.button
                    key={tab.name}
                    type="button"
                    onClick={() => onTabChange(tab.name)}
                    whileTap={{scale: 0.97}}
                    className={`
                      relative shrink-0 rounded-full px-3 py-2.5 sm:px-7 sm:py-2.5
                      text-[13px] sm:text-sm font-semibold outline-none transition-colors duration-200
                      focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2
                      ${isActive ? 'text-gray-900 z-[1]' : 'text-gray-400 hover:text-gray-600 z-0'}
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="market-tab-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-gray-900/5"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                          mass: 0.85,
                        }}
                      />
                    )}
                    <span className="relative z-[2] whitespace-nowrap">{label}</span>
                  </motion.button>
                );
              })}
              {/* Trailing inset so last tab is never clipped by rounded border / viewport */}
              <span className="shrink-0 w-1 sm:hidden" aria-hidden />
            </div>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};
