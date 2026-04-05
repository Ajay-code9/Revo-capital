import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  Calculator, 
  PieChart, 
  LineChart, 
  Calendar, 
  CheckCircle2, 
  Zap,
  Target,
  ShieldCheck,
  BarChart3,
  MousePointer2
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TopContactBar } from '../components/TopContactBar';

export const ToolsPage = () => {
  const tools = [
    {
      title: 'Currency Pip Calculator',
      description: 'Calculate the value of a pip in your account currency for precise position sizing and risk management.',
      icon: <Calculator className="text-white" size={24} />,
      color: 'bg-primary'
    },
    {
      title: 'Position Size Calculator',
      description: 'Determine the optimal position size based on your account balance and risk tolerance.',
      icon: <PieChart className="text-white" size={24} />,
      color: 'bg-blue-600'
    },
    {
      title: 'Gain/Loss Calculator',
      description: 'Calculate potential profit or loss before entering a trade to make informed decisions.',
      icon: <LineChart className="text-white" size={24} />,
      color: 'bg-emerald-600'
    },
    {
      title: 'Economic Calendar',
      description: 'Stay updated with crucial economic events and releases that may impact your trading positions.',
      icon: <Calendar className="text-white" size={24} />,
      color: 'bg-amber-600'
    }
  ];

  const values = [
    { title: 'Real-time calculation accuracy', icon: <Zap size={20} /> },
    { title: 'User-friendly interface', icon: <MousePointer2 size={20} /> },
    { title: 'Designed for beginners & professionals', icon: <Target size={20} /> },
    { title: 'Helps manage risk effectively', icon: <ShieldCheck size={20} /> },
    { title: 'Improves trade planning and execution', icon: <BarChart3 size={20} /> }
  ];

  const steps = [
    { title: 'Select your tool', desc: 'Choose from our range of professional calculators.' },
    { title: 'Input parameters', desc: 'Enter your trading data and account details.' },
    { title: 'Analyze results', desc: 'Get instant, accurate calculations for your trades.' },
    { title: 'Execute with confidence', desc: 'Trade smarter with data-backed decisions.' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-14 lg:py-20 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                Professional Trading Tools for <span className="text-primary">Smarter Decisions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Get the best out of trading with our professional-grade calculators and utilities. Access powerful, easy-to-use tools designed to help you make informed trading decisions, manage risk effectively, and maximize your trading potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="btn-primary px-8 py-4 rounded-full font-bold flex items-center gap-3">
                  Open Live Account 
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
                <button className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-all border border-gray-200">
                  Open Demo Account
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Tools Grid Section */}
      <section className="py-14 lg:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Explore Our Trading Tools</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {tool.description}
                </p>
                <button className="text-primary font-bold flex items-center gap-2 group/btn">
                  Use Tool 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Value Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Built for Precision and <span className="text-primary">Performance</span>
              </h2>
              <div className="space-y-6">
                {values.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-3xl overflow-hidden flex items-center justify-center p-12">
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl" />
                    <div className="flex gap-2">
                      <div className="w-8 h-2 bg-gray-100 rounded-full" />
                      <div className="w-8 h-2 bg-gray-100 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-gray-50 rounded-full" />
                    <div className="w-3/4 h-4 bg-gray-50 rounded-full" />
                    <div className="w-1/2 h-4 bg-primary/20 rounded-full" />
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-50 rounded-xl" />
                    <div className="h-24 bg-primary/10 rounded-xl" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-14 lg:py-16 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How These Tools Help You Trade Better</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Follow these simple steps to integrate our tools into your daily trading routine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </section>

      {/* CTA Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">Ready to Take the Next Step?</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Unlock global financial markets with a single account. Start trading today and grow your investment portfolio.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-3 shadow-xl">
                  Open Live Account 
                  <ArrowUpRight size={20} />
                </button>
                <button className="bg-primary-hover text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Open Demo Account
                </button>
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
