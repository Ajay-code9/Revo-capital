import React from 'react';

const SRC = '/images/logos/logo.png';

type RevoLogoProps = {
  className?: string;
};

/** Official Revo Capital logo (full-colour PNG). Used in navbar, footer, and auth screens. */
export function RevoLogo({className = ''}: RevoLogoProps) {
  return (
    <img
      src={SRC}
      alt="Revo Capital"
      className={`shrink-0 object-contain ${className}`}
      width={400}
      height={140}
      decoding="async"
      fetchPriority="high"
    />
  );
}
