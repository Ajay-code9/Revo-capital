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

/** lg+ nowrap so these awards stay 3 single lines each (no 4th wrap inside a <p>) */
const NOWRAP_LG_INDICES = new Set([1, 3, 6]);

export const TradingAchievements = () => {
  return (
    <section className="bg-[#ffffff] py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-3 sm:px-5 lg:px-6">
        <h2 className="mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight tracking-tight text-[#333] sm:text-3xl lg:text-[2rem] lg:leading-snug xl:text-[2.25rem]">
          Trade With An Award Winning Broker
        </h2>

        {/* Equal columns + one gap value on lg so spacing between badges is uniform */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-y-10 lg:mt-14 lg:grid-cols-7 lg:gap-y-0">
          {AWARDS.map((award, index) => {
            const nowrapLg = NOWRAP_LG_INDICES.has(index);
            return (
            <div
              key={index}
              className="flex min-w-0 flex-col items-center text-center transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:opacity-95"
            >
              <GoldenLeafIcon />
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[1px] text-black sm:text-sm">
                WINNER
              </p>
              <div className={awardCopyWrapClass}>
                {award.lines.map((line, i) => (
                  <p
                    key={i}
                    className={
                      (line.tone === 'muted'
                        ? 'text-[12px] font-normal leading-tight text-[#888] sm:text-[13px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px]'
                        : 'text-[12px] font-medium leading-tight text-[#555] sm:text-[13px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px]') +
                      (nowrapLg ? ' lg:whitespace-nowrap' : '')
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
