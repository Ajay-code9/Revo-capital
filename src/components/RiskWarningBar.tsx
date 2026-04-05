import React from 'react';
import { ChevronUp } from 'lucide-react';

export const RiskWarningBar = () => (
  <div className="bg-[#F8F9FA] border-b border-gray-200 py-3 px-4 text-[12px] text-gray-600 leading-tight relative">
    <div className="max-w-7xl mx-auto flex items-start gap-4">
      <div className="shrink-0 pt-0.5">
        <ChevronUp size={16} className="text-gray-400" />
      </div>
      <div className="flex-1">
        CFDs come with a high risk of losing money rapidly due to leverage. 65% of accounts lose money when trading CFDs with this provider. You should understand how CFDs work and consider if you can take the risk of losing your money.
      </div>
    </div>
  </div>
);
