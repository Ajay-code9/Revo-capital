import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Eye, 
  EyeOff,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import { ROUTES } from '../routes/paths';
import { RevoLogo } from '../components/RevoLogo';
import {Button} from '../components/ui/Button';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const benefits = [
    {
      icon: <Zap className="text-primary" size={20} />,
      title: "Fast Account Setup",
      desc: "Get your trading account ready in under 3 minutes."
    },
    {
      icon: <ShieldCheck className="text-primary" size={20} />,
      title: "Secure Environment",
      desc: "Advanced encryption and multi-layer security protocols."
    },
    {
      icon: <Globe className="text-primary" size={20} />,
      title: "Global Market Access",
      desc: "Trade 1000+ assets across global financial markets."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
      {/* Left Side: Form */}
      <div className="relative flex w-full flex-col justify-center overflow-y-auto p-8 lg:w-1/2 lg:p-16">
        <div className="absolute top-8 left-8 right-8 z-10 flex items-center justify-between gap-4">
          <motion.button
            type="button"
            onClick={() => navigate(ROUTES.home)}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex shrink-0 items-center rounded-lg outline-none ring-primary/40 focus-visible:ring-2"
            aria-label="Revo Capital home"
          >
            <RevoLogo className="h-8 w-auto max-w-[min(200px,48vw)] aspect-1432/504 object-contain object-left sm:h-9 sm:max-w-[220px]" />
          </motion.button>
          <motion.button
            type="button"
            onClick={() => navigate(ROUTES.home)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex shrink-0 items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft size={18} /> Back to Home
          </motion.button>
        </div>

        <div className="max-w-md mx-auto w-full pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Start Your <span className="text-primary">Trading Journey</span> Today
              </h1>
              <p className="text-gray-500">
                Join thousands of traders worldwide and access global markets with premium conditions.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+44 7xxx xxxxxx"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none bg-white">
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>United Arab Emirates</option>
                    <option>Singapore</option>
                    <option>Australia</option>
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-gray-400 pointer-events-none" size={18} />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Account Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none bg-white">
                    <option>Standard Account</option>
                    <option>Raw+ Account</option>
                    <option>Elite Account</option>
                  </select>
                  <ChevronDown className="absolute right-4 bottom-3.5 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-3.5 text-gray-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 bottom-3.5 text-gray-400 hover:text-primary transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="terms" className="mt-1 accent-primary w-4 h-4" />
                <label htmlFor="terms" className="text-sm text-gray-500 leading-relaxed">
                  I agree to the <span className="text-primary font-semibold cursor-pointer">Terms of Service</span> and <span className="text-primary font-semibold cursor-pointer">Privacy Policy</span>.
                </label>
              </div>

              <Button type="button" className="w-full rounded-xl py-4 text-lg group">
                Create Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-gray-500 font-medium">
                Already have an account?{" "}
                <button type="button" onClick={() => navigate(ROUTES.login)} className="text-primary font-bold hover:underline">Login</button>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Visual Content */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative overflow-hidden items-center justify-center p-16">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Experience the <span className="text-primary">Next Level</span> of Trading
              </h2>
              <p className="text-gray-400 text-lg">
                Join a world-class platform designed for precision, speed, and reliability.
              </p>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-gray-900" 
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm font-medium">
                Join <span className="text-white font-bold">10,000+</span> active traders
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 scale-90 lg:scale-100"
        >
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-green-500" size={20} />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Status</div>
            <div className="text-sm text-white font-bold">System Online</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[5%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 scale-90 lg:scale-100"
        >
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <Zap className="text-primary" size={20} />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Execution</div>
            <div className="text-sm text-white font-bold">0.01s Latency</div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};
