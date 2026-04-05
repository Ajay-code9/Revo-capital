import React from 'react';

/** Shared asset for award rows — use this path anywhere the golden leaf should appear */
export const GOLDEN_LEAF_SRC = '/images/logos/goldenleaf.svg';

function GoldenLeafIcon() {
  return (
    <img
      src={GOLDEN_LEAF_SRC}
      alt=""
      width={48}
      height={48}
      className="mx-auto block h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
      loading="lazy"
      decoding="async"
      aria-hidden
    />
  );
}

type LineTone = 'body' | 'muted';

type AwardBlock = {
  lines: [{text: string; tone: LineTone}, {text: string; tone: LineTone}, {text: string; tone: LineTone}];
};

/** Exactly 3 lines each — matches reference layout; last line often muted for region/suffix */
const AWARDS: AwardBlock[] = [
  {
    lines: [
      {text: 'WINNER 2024 Best', tone: 'body'},
      {text: 'Copy Trading Broker', tone: 'body'},
      {text: '— Global', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2024 Best', tone: 'body'},
      {text: 'IB/Affiliate Program', tone: 'body'},
      {text: 'Provider — Colombia', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2024 Best', tone: 'body'},
      {text: 'Execution Quality —', tone: 'body'},
      {text: 'Europe', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2024 Top 100 Trusted', tone: 'body'},
      {text: 'Financial institution Award -', tone: 'body'},
      {text: 'Global', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2024 Top', tone: 'body'},
      {text: 'Multi-Asset Broker', tone: 'body'},
      {text: '— Asia Pacific', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2023 Best', tone: 'body'},
      {text: 'Trading Platform —', tone: 'body'},
      {text: 'Asia', tone: 'muted'},
    ],
  },
  {
    lines: [
      {text: 'WINNER 2024 Most', tone: 'body'},
      {text: 'Transparent Broker', tone: 'body'},
      {text: '— Money Expo - Mexico', tone: 'muted'},
    ],
  },
];

const awardCopyWrapClass =
  'mt-2 flex w-full min-w-0 max-w-full flex-col gap-0.5 px-0.5 text-center sm:px-1';

export const TradingAchievements = () => {
  return (
    <section className="bg-[#ffffff] py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-3 sm:px-5 lg:px-6">
        <h2 className="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight tracking-tight text-[#333] sm:text-3xl lg:text-[2rem] lg:leading-snug xl:text-[2.25rem]">
          Trade With An Award Winning Broker
        </h2>

        {/* 4th column gets extra fr on lg+ so "Top 100 Trusted" block stays 3 visual lines */}
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-4 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,2.15fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-1.5 lg:gap-y-0 xl:gap-x-2.5 2xl:gap-x-3">
          {AWARDS.map((award, index) => {
            const isCenterWide = index === 3;
            return (
            <div
              key={index}
              className="flex min-w-0 flex-col items-center text-center transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:opacity-95"
            >
              <GoldenLeafIcon />
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[1px] text-black sm:text-sm">
                WINNER
              </p>
              <div
                className={
                  awardCopyWrapClass + (isCenterWide ? ' lg:px-0' : '')
                }
              >
                {award.lines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      (line.tone === 'muted'
                        ? 'text-[12px] font-normal leading-tight text-[#888] sm:text-[13px] lg:text-[12px] xl:text-[13px]'
                        : 'text-[12px] font-medium leading-tight text-[#555] sm:text-[13px] lg:text-[11.5px] xl:text-[12.5px] 2xl:text-[13px]') +
                      (isCenterWide ? ' lg:whitespace-nowrap' : '')
                    }
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
