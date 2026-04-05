import React from 'react';
import {Smartphone, Mail, MapPin} from 'lucide-react';

/** Registered office — shown in header; keep in sync with legal docs if you change it. */
const OFFICE_ADDRESS =
  '28 Oktovriou 237, Lophitis Business Center II, Limassol 3035, Cyprus';

type TopContactBarProps = {
  className?: string;
};

export const TopContactBar = ({className = ''}: TopContactBarProps) => (
  <div
    className={['bg-white border-b border-gray-100 py-2 px-4', className].filter(Boolean).join(' ')}
  >
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 text-[11px] text-gray-600 sm:text-xs lg:flex-row lg:items-start lg:justify-between lg:gap-6">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-start">
        <div className="flex items-center gap-1.5">
          <Smartphone size={14} className="shrink-0 text-gray-400" aria-hidden />
          <a href="tel:+35722276710" className="font-medium text-primary hover:underline">
            +357 22 276710
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={14} className="shrink-0 text-gray-400" aria-hidden />
          <a href="mailto:info@revocp.com" className="font-medium text-primary hover:underline">
            info@revocp.com
          </a>
        </div>
      </div>
      <div className="flex max-w-xl items-start gap-1.5 text-center lg:text-right">
        <MapPin size={14} className="mt-0.5 hidden shrink-0 text-gray-400 sm:block" aria-hidden />
        <span>{OFFICE_ADDRESS}</span>
      </div>
    </div>
  </div>
);
