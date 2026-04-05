import React from 'react';

const SRC = '/images/logos/revo-logo.svg';

/**
 * Header/footer logo filled with theme `primary` (#FF2D2D from @theme).
 * CSS mask uses the SVG alpha so the visible fill always matches `--color-primary`.
 */
const maskStyle: React.CSSProperties = {
  WebkitMaskImage: `url(${SRC})`,
  maskImage: `url(${SRC})`,
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
};

type RevoLogoProps = {
  className?: string;
};

export function RevoLogo({ className = '' }: RevoLogoProps) {
  return (
    <span
      className={`inline-block shrink-0 bg-primary ${className}`}
      style={maskStyle}
      role="img"
      aria-label="Revo Capital"
    />
  );
}
