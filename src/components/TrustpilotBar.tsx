import React from 'react';
import { Star } from 'lucide-react';

export const TrustpilotBar = () => (
  <div className="bg-white border-b border-gray-100 py-4 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-gray-900">Trustpilot</span>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
              <Star size={10} className="text-white fill-current" />
            </div>
          ))}
        </div>
      </div>
      <div className="h-4 w-px bg-gray-200 hidden sm:block" />
      <div className="text-sm text-gray-500 hidden sm:block">
        TrustScore <span className="font-bold text-gray-900">4.8</span> | <span className="font-bold text-gray-900">1,245</span> reviews
      </div>
    </div>
  </div>
);
