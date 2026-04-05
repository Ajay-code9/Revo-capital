import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send,
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TopContactBar } from '../components/TopContactBar';

export const SupportPage = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: '#' },
  ];

  const offices = [
    {
      title: 'Registered Office',
      address: 'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia',
      icon: <Globe className="text-primary" size={24} />
    },
    {
      title: 'Physical Office',
      address: '33F3+654, Castries - Gros Islet Hwy, Rodney Bay, St. Lucia, Office 20',
      icon: <MapPin className="text-primary" size={24} />
    }
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
                A Forex Broker that you were <span className="text-primary">Waiting for.</span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-10">
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

              <div className="bg-gray-50/50 p-8 lg:p-12 rounded-[2.5rem] border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch with Our Team</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Have questions about trading, need support, or want to explore partnership opportunities? We're here to help you succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Contact + Social Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Call us anytime</p>
              <a href="tel:+447868811937" className="text-xl font-bold text-primary hover:underline">
                +44 7868 811937
              </a>
            </motion.div>

            {/* Social Cards */}
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="text-white">{social.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-6">Follow our updates</p>
                <a href={social.url} className="text-primary font-bold flex items-center gap-2 group/btn">
                  Connect 
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-14 lg:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Offices</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex gap-8 items-start"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  {office.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">Average response time: 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Support</h4>
                    <p className="text-gray-600">Talk to our professional trading experts</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Full name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 7xxx xxxxxx"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject *</label>
                    <input 
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message *</label>
                  <textarea 
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button type="button" className="btn-primary w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
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
