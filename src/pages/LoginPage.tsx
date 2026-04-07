import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  EyeOff,
  ArrowLeft,
  Mail,
  Lock,
  Chrome,
  Apple,
  Facebook
} from 'lucide-react';
import { ROUTES } from '../routes/paths';
import { RevoLogo } from '../components/RevoLogo';
import {Button} from '../components/ui/Button';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
      {/* Left Side: Visual Content */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gray-900 lg:flex lg:items-center lg:justify-center lg:p-16">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl"
          >
            <div className="mb-10">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/10">
                <ShieldCheck className="text-primary" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                Secure <span className="text-primary">Access</span> to Your Portfolio
              </h2>
              <p className="text-gray-400 text-lg">
                Log in to your account and manage your trades with precision and speed.
              </p>
            </div>

            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <p className="text-gray-300 text-sm">Two-factor authentication enabled for maximum security.</p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <p className="text-gray-300 text-sm">Encrypted data transmission and secure storage.</p>
              </div>
            </div>

            <div className="mt-12 text-white/40 text-xs font-bold uppercase tracking-widest">
              Trusted by 10,000+ Traders
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[5%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 scale-90 lg:scale-100"
        >
          <div className="text-xs text-white font-bold">Real-time Data Feed</div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[12%] left-[5%] bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 scale-90 lg:scale-100"
        >
          <div className="text-xs text-white font-bold">Instant Execution</div>
        </motion.div>
      </div>

      {/* Right Side: Form */}
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
            Back to Home <ArrowRight size={18} />
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
                Welcome <span className="text-primary">Back</span>
              </h1>
              <p className="text-gray-500">
                Log in to your REVO CAPITAL account to continue your trading journey.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <button type="button" className="text-xs text-primary font-bold hover:underline">Forgot Password?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="accent-primary w-4 h-4" />
                <label htmlFor="remember" className="text-sm text-gray-500 font-medium cursor-pointer">
                  Remember me for 30 days
                </label>
              </div>

              <Button type="button" className="w-full rounded-xl py-4 text-lg group">
                Login <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
                  <span className="bg-white px-4 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                  <Chrome size={20} className="text-gray-600" />
                </button>
                <button className="flex items-center justify-center py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                  <Apple size={20} className="text-gray-600" />
                </button>
                <button className="flex items-center justify-center py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                  <Facebook size={20} className="text-blue-600" />
                </button>
              </div>

              <p className="text-center text-gray-500 font-medium">
                Don't have an account?{" "}
                <button type="button" onClick={() => navigate(ROUTES.signup)} className="text-primary font-bold hover:underline">Sign Up</button>
              </p>
            </form>
          </motion.div>

          <div className="mt-12 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="text-primary" size={20} />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your security is our priority. We use industry-standard encryption to protect your data and transactions.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
