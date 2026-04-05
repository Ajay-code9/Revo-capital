import React from 'react';
import { Star, ShieldCheck, Award, Users } from 'lucide-react';

export const AboutUs = () => {
  const reviews = [
    { name: 'John Doe', rating: 5, text: 'The best trading experience I\'ve had. Spreads are tight and execution is fast.' },
    { name: 'Jane Smith', rating: 5, text: 'Customer support is top-notch. They helped me with my withdrawal in minutes.' },
    { name: 'Michael Brown', rating: 5, text: 'I love the Revo Trader platform. It\'s clean and intuitive.' },
  ];

  return (
    <section className="py-14 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-primary">Revo Capital</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a global leader in online trading, providing access to 1200+ CFD instruments. Our mission is to empower traders with the best technology and pricing.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Regulated</div>
                  <div className="text-sm text-gray-500">By top-tier authorities</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Award-Winning</div>
                  <div className="text-sm text-gray-500">Best CFD Broker 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">1M+ Clients</div>
                  <div className="text-sm text-gray-500">Across 150 countries</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">4.8/5 Rating</div>
                  <div className="text-sm text-gray-500">On Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What our clients say</h3>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="space-y-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                    <div className="font-bold text-gray-900">{review.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
