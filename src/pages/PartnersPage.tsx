import React from 'react';
import { 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  Headphones, 
  ShieldCheck,
  Layout,
  Smartphone,
  Monitor,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Grow with Revo Capital. <br />
              <span className="text-primary">Partner for Success.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Join a global network of partners and unlock unlimited earning potential with a fast-growing trading platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="btn-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm">
                open Live account
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-lg font-bold transition-all uppercase tracking-wider text-sm">
                open demo account
              </button>
            </div>
          </div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Why Partner Section */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Partner with REVO CAPITAL?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-primary" size={32} />,
                title: "High Commission Structure",
                desc: "Maximize your earnings with one of the most competitive and rewarding commission models in the industry."
              },
              {
                icon: <Zap className="text-primary" size={32} />,
                title: "Fast & Transparent Payouts",
                desc: "Get your earnings quickly and reliably with our streamlined, transparent withdrawal process."
              },
              {
                icon: <BarChart3 className="text-primary" size={32} />,
                title: "Real-Time Tracking Dashboard",
                desc: "Monitor your referrals, conversions, and commissions in real-time with our advanced partner portal."
              },
              {
                icon: <Globe className="text-primary" size={32} />,
                title: "Global Market Access",
                desc: "Offer your clients access to a wide range of global financial markets and over 1200+ CFD instruments."
              },
              {
                icon: <Headphones className="text-primary" size={32} />,
                title: "Dedicated Partner Support",
                desc: "Receive personalized assistance from our expert partnership managers to help you grow your business."
              },
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: "Advanced Trading Infrastructure",
                desc: "Leverage our robust technology and ultra-fast execution to provide a superior experience for your clients."
              }
            ].map((item, index) => (
              <div key={index} className="p-10 bg-[#F8F9FA] rounded-2xl border border-gray-100 hover:border-primary/20 transition-all group">
                <div className="mb-8 p-4 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-14 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Start Your Partnership in 4 Simple Steps</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tell us about yourself", desc: "Fill out our simple application form to get started." },
              { step: "02", title: "Welcome to Platform", desc: "Get access to your dedicated partner portal and marketing tools." },
              { step: "03", title: "Choose your Account", desc: "Select the partnership model that best fits your business goals." },
              { step: "04", title: "Start trading with us", desc: "Begin referring clients and start earning commissions immediately." }
            ].map((item, index) => (
              <div key={index} className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-4xl font-black text-primary/10 mb-6">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="text-gray-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-14 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Built for Growth</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Our partnership program is designed to scale with your ambitions, providing the tools and support you need at every stage.
              </p>
              <div className="space-y-6">
                {[
                  "Multi-tier commission models",
                  "Custom referral tracking links",
                  "Marketing support & creatives",
                  "High conversion trading environment",
                  "Instant onboarding"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-primary" size={16} />
                    </div>
                    <span className="text-lg font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-red-700 rounded-3xl p-12 text-white relative z-10 overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Scale Your Business</h3>
                  <p className="text-white/80 mb-8 text-lg leading-relaxed">
                    Access premium marketing materials, landing pages, and banners designed to convert your traffic into active traders.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-sm text-white/60">Tracking</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                      <div className="text-3xl font-bold mb-2">Instant</div>
                      <div className="text-sm text-white/60">Reporting</div>
                    </div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 transform rotate-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section (Reused Style) */}
      <section className="py-14 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Trade Smarter with the Right Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Low Fixed Spreads & Negative Balance Protection for a seamless trading experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap size={24} />, title: "Single Click Trading" },
              { icon: <Layout size={24} />, title: "Custom Trading Templates" },
              { icon: <Smartphone size={24} />, title: "Available on iOS, Android & Windows" },
              { icon: <Monitor size={24} />, title: "Preinstalled Indicators & Analysis Tools" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#001D3D] rounded-[2.5rem] p-12 lg:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">Ready to Grow with Us?</h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Partner with REVO CAPITAL and build a scalable income stream in global financial markets.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button type="button" className="btn-primary px-10 py-5 rounded-xl font-bold uppercase tracking-wider">
                  open live account
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-xl font-bold transition-all uppercase tracking-wider">
                  open demo account
                </button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 lg:py-16 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10 tracking-tight">Start Your Partnership Journey Today</h2>
          <button className="bg-white text-primary hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl shadow-black/20">
            👉 Become a Partner <ArrowRight size={24} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
