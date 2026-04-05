import React from 'react';
import {motion} from 'motion/react';

const PAYMENT_LOGOS = [
  {src: '/images/logos/visa.svg', alt: 'Visa'},
  {src: '/images/logos/mastercard.svg', alt: 'Mastercard'},
  {src: '/images/logos/paypal.svg', alt: 'PayPal'},
  {src: '/images/logos/skrill.svg', alt: 'Skrill'},
  {src: '/images/logos/neteller.svg', alt: 'Neteller'},
  {src: '/images/logos/googlepay.svg', alt: 'Google Pay'},
] as const;

export const PaymentMethods = () => {
  const row = [...PAYMENT_LOGOS, ...PAYMENT_LOGOS, ...PAYMENT_LOGOS];

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white pt-12 pb-10 lg:pt-14 lg:pb-12">
      <div className="mx-auto mb-8 max-w-7xl px-4 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Why Revo Capital?</span>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
          Multiple payment methods <br />
          for <span className="text-primary">quick withdrawals</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{x: [0, -1200]}}
          transition={{duration: 28, repeat: Infinity, ease: 'linear'}}
          className="flex items-center gap-12 whitespace-nowrap py-4 md:gap-14 lg:gap-16 lg:py-5"
        >
          {row.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto max-h-10 max-w-28 shrink-0 object-contain object-center md:h-11 md:max-h-12 md:max-w-34 lg:h-12"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
