import React from 'react';

const LAPTOP_WEBP = '/images/logos/laptop-trading-showcase.webp';
const LAPTOP_PNG = '/images/logos/laptop-trading-showcase.png';

export const ReadyForNextMoveSection = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-7xl justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <picture>
          <source srcSet={LAPTOP_WEBP} type="image/webp" />
          <img
            src={LAPTOP_PNG}
            alt="Trading workspace on laptop"
            className="h-auto w-full max-w-5xl object-contain"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
};
