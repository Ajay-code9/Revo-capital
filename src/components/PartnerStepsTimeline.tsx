import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';

export type PartnerTimelineStep = {
  title: string;
  description: string;
  cta?: boolean;
  ctaLabel?: string;
};

type TitleMode = 'ib' | 'standard';

type Props = {
  steps: PartnerTimelineStep[];
  primaryColor?: string;
  navy?: string;
  greyLine?: string;
  textMuted?: string;
  textSoft?: string;
  fontFamily: string;
  titleMode: TitleMode;
  onCtaClick: () => void;
  /** Tighter typography and spacing (e.g. to fit beside a fixed-height visual). */
  compact?: boolean;
  /** Stretch to fill parent and distribute steps vertically (parent should be a flex child with bounded height). */
  fillHeight?: boolean;
};

const DEFAULT_PRIMARY = '#e50914';
const DEFAULT_NAVY = '#0f172a';

function useHoverRed(primary: string, hover: string) {
  const [h, setH] = useState(false);
  return {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    bg: h ? hover : primary,
  };
}

export function PartnerStepsTimeline({
  steps,
  primaryColor = DEFAULT_PRIMARY,
  navy = DEFAULT_NAVY,
  greyLine = '#e2e8f0',
  textMuted = '#64748b',
  textSoft = '#94a3b8',
  fontFamily,
  titleMode,
  onCtaClick,
  compact = false,
  fillHeight = false,
}: Props) {
  const primaryHover = '#b80710';
  const ctaHover = useHoverRed(primaryColor, primaryHover);
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineGeom, setLineGeom] = useState({top: 0, height: 0, left: 14});

  const activeLineEnd = hovered ?? 0;

  const measureLine = useCallback(() => {
    const root = containerRef.current;
    if (!root || steps.length === 0) return;
    const rootRect = root.getBoundingClientRect();
    const first = dotRefs.current[0];
    const end = dotRefs.current[activeLineEnd];
    if (!first || !end) return;
    const fr = first.getBoundingClientRect();
    const er = end.getBoundingClientRect();
    const top = fr.top - rootRect.top + fr.height / 2;
    const endY = er.top - rootRect.top + er.height / 2;
    const centerX = fr.left - rootRect.left + fr.width / 2;
    setLineGeom({top, height: Math.max(endY - top, 6), left: centerX - 1});
  }, [activeLineEnd, steps.length]);

  useLayoutEffect(() => {
    measureLine();
    const ro = new ResizeObserver(() => measureLine());
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measureLine);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measureLine);
    };
  }, [measureLine, hovered, steps]);

  const formatTitle = (index: number) => {
    const n = index + 1;
    const s = steps[index];
    return titleMode === 'ib' ? `${n}. ${s.title}` : `Step ${n}: ${s.title}`;
  };

  const rowGap = compact ? 12 : 18;
  const dotPadTop = compact ? 10 : 18;
  const stepMarginBottom = fillHeight ? 0 : compact ? 12 : 20;
  const cardPad = compact ? '8px 10px 10px' : '16px 18px 18px';
  const titleSize = compact ? 14 : 17;
  const titleMargin = compact ? '0 0 4px' : '0 0 8px';
  const descSize = compact ? 12.5 : 15;
  const descLineHeight = compact ? 1.42 : 1.55;
  /** Keep lift small; first row needs headroom (paddingTop) so top border is not clipped by overflow. */
  const hoverLift = compact ? -2 : -4;
  const ctaMt = compact ? 8 : 16;
  const ctaPad = compact ? '8px 18px' : '12px 28px';
  const ctaFs = compact ? 11 : 12;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        flex: fillHeight ? 1 : undefined,
        minHeight: fillHeight ? 0 : undefined,
        minWidth: 0,
        maxWidth: '100%',
        height: fillHeight ? '100%' : undefined,
        display: 'flex',
        flexDirection: 'column',
        // overflow-x:hidden makes overflow-y compute to auto and clips hover lift / top border on step 1
        overflow: 'visible',
      }}
    >
      {/* Background track + animated progress (aligned to dot centers) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: lineGeom.left,
          top: 0,
          bottom: 0,
          width: 2,
          marginLeft: 0,
          transform: 'translateX(-50%)',
          background: greyLine,
          borderRadius: 1,
          opacity: 0.9,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: lineGeom.left,
          top: lineGeom.top,
          width: 2,
          height: lineGeom.height,
          transform: 'translateX(-50%)',
          background: primaryColor,
          borderRadius: 1,
          boxShadow: `0 0 12px ${primaryColor}66`,
          transition:
            'top 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          flex: fillHeight ? 1 : undefined,
          minHeight: fillHeight ? 0 : undefined,
          justifyContent: fillHeight ? 'space-between' : 'flex-start',
          paddingTop: 12,
          paddingBottom: 10,
          paddingRight: 10,
          boxSizing: 'border-box',
        }}
      >
        {steps.map((step, i) => {
          const isHovered = hovered === i;
          const isDefaultActive = hovered === null && i === 0;
          const dotActive = isHovered || isDefaultActive;
          const dimOthers = hovered !== null && hovered !== i;

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: rowGap,
                alignItems: 'flex-start',
                marginBottom: i < steps.length - 1 ? stepMarginBottom : 0,
                position: 'relative',
                zIndex: isHovered ? 3 : 1,
                flexShrink: 0,
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  width: compact ? 24 : 28,
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: dotPadTop,
                }}
              >
                <div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  style={{
                    width: dotActive ? (compact ? 14 : 16) : compact ? 11 : 13,
                    height: dotActive ? (compact ? 14 : 16) : compact ? 11 : 13,
                    borderRadius: '50%',
                    background: dotActive ? primaryColor : '#cbd5e1',
                    boxShadow: dotActive ? `0 0 0 5px ${primaryColor}28, 0 2px 8px ${primaryColor}44` : 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    flexShrink: 0,
                  }}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: cardPad,
                  borderRadius: compact ? 12 : 14,
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: isHovered ? primaryColor : 'transparent',
                  background: isHovered ? '#ffffff' : 'transparent',
                  transform: !isHovered ? 'none' : i > 0 ? `translateY(${hoverLift}px)` : 'none',
                  boxShadow: isHovered ? '0 16px 40px -16px rgba(15, 23, 42, 0.16)' : 'none',
                  opacity: dimOthers ? 0.42 : 1,
                  boxSizing: 'border-box',
                  transition:
                    'transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.35s ease, border-color 0.25s ease, background 0.35s ease, opacity 0.35s ease',
                }}
              >
                <h3
                  style={{
                    fontSize: titleSize,
                    fontWeight: 700,
                    margin: titleMargin,
                    color: isHovered ? navy : isDefaultActive ? navy : textSoft,
                    transition: 'color 0.3s ease',
                    lineHeight: 1.28,
                    overflowWrap: 'break-word',
                  }}
                >
                  {formatTitle(i)}
                </h3>
                <p
                  style={{
                    fontSize: descSize,
                    lineHeight: descLineHeight,
                    margin: 0,
                    color: isHovered ? navy : isDefaultActive ? textMuted : textSoft,
                    transition: 'color 0.3s ease',
                    overflowWrap: 'break-word',
                  }}
                >
                  {step.description}
                </p>
                {step.cta && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCtaClick();
                    }}
                    {...ctaHover}
                    style={{
                      marginTop: ctaMt,
                      background: ctaHover.bg,
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: ctaPad,
                      fontSize: ctaFs,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      fontFamily,
                      transition: 'background 0.3s ease, transform 0.2s ease',
                      width: '100%',
                    }}
                  >
                    {step.ctaLabel ?? 'CREATE ACCOUNT'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
