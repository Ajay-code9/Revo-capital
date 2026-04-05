import React from 'react';
import {Smartphone, Mail, MapPin} from 'lucide-react';
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  PHYSICAL_OFFICE_ADDRESS,
} from '../constants/companyContact';

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
          <a href={`tel:${COMPANY_PHONE_TEL}`} className="font-medium text-primary hover:underline">
            {COMPANY_PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={14} className="shrink-0 text-gray-400" aria-hidden />
          <a href="mailto:support@revocp.com" className="font-medium text-primary hover:underline">
            support@revocp.com
          </a>
        </div>
      </div>
      <div className="flex max-w-xl items-start gap-1.5 text-center lg:text-right">
        <MapPin size={14} className="mt-0.5 hidden shrink-0 text-gray-400 sm:block" aria-hidden />
        <span>{PHYSICAL_OFFICE_ADDRESS}</span>
      </div>
    </div>
  </div>
);
