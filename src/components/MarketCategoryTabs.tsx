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
    <div className="mb-0 w-full min-w-0">
      <div
        className={`
          w-full min-w-0 overflow-x-auto overflow-y-visible overscroll-x-contain
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          pb-1 -mx-1 px-3 sm:mx-0 sm:px-0
        `}
      >
        <div className="mx-auto flex w-max min-w-full justify-center sm:min-w-0 sm:w-auto sm:justify-center">
          <LayoutGroup id="market-category-tabs">
            <div
              className={`
                flex flex-nowrap items-center gap-1 p-1
                rounded-full bg-gray-100/95
                ring-1 ring-gray-200/80
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]
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
                    whileTap={{scale: 0.98}}
                    className={`
                      relative shrink-0 rounded-full px-4 py-2.5 sm:px-7 sm:py-2.5
                      text-[13px] sm:text-sm outline-none transition-colors duration-200
                      focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2
                      ${isActive ? 'z-1 font-bold text-white' : 'z-0 font-medium text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="market-tab-pill"
                        className="absolute inset-0 rounded-full bg-primary shadow-[0_2px_12px_-4px_rgba(255,45,45,0.42),0_1px_3px_rgba(0,0,0,0.08)]"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 34,
                          mass: 0.85,
                        }}
                      />
                    )}
                    <span className="relative z-2 whitespace-nowrap">{label}</span>
                  </motion.button>
                );
              })}
              <span className="w-1 shrink-0 sm:hidden" aria-hidden />
            </div>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};
