"use client";

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Section, MagneticButtonWrapper as MagneticButton } from '@/components/Cards';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { Facebook, Instagram } from '@/components/SocialIcons';
import { useState, useRef } from 'react';

// --- Internal Helper Components ---

const FormInput = ({ label, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="space-y-3 group">
      <label className="form-label group-focus-within:text-primary-600 transition-colors">
        {label}
      </label>
      <motion.div
        animate={{ 
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused ? '0 20px 40px -12px rgba(34, 197, 94, 0.15)' : '0 0px 0px rgba(0,0,0,0)'
        }}
        className="relative will-change-transform"
      >
        <input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-6 py-4 rounded-2xl border transition-all duration-500 outline-none font-bold text-secondary placeholder:text-gray-300 ${
            isFocused ? 'border-primary-500 bg-white' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
          }`}
        />
        <motion.div 
          initial={false}
          animate={{ width: isFocused ? '100%' : '0%' }}
          className="absolute bottom-0 left-0 h-0.5 bg-primary-500 rounded-full"
        />
      </motion.div>
    </div>
  );
};

const FormSelect = ({ label, options, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-3 group">
      <label className="form-label group-focus-within:text-primary-600 transition-colors">
        {label}
      </label>
      <motion.div
        animate={{ 
          scale: isFocused ? 1.02 : 1,
        }}
        className="relative will-change-transform"
      >
        <select
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-6 py-4 rounded-2xl border transition-all duration-500 outline-none font-bold text-secondary appearance-none cursor-pointer ${
            isFocused ? 'border-primary-500 bg-white' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
          }`}
        >
          {options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </motion.div>
    </div>
  );
};

const FormTextarea = ({ label, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-3 group">
      <label className="form-label group-focus-within:text-primary-600 transition-colors">
        {label}
      </label>
      <motion.div
        animate={{ 
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused ? '0 20px 40px -12px rgba(34, 197, 94, 0.15)' : '0 0px 0px rgba(0,0,0,0)'
        }}
        className="relative will-change-transform"
      >
        <textarea
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-6 py-4 rounded-2xl border transition-all duration-500 outline-none font-bold text-secondary placeholder:text-gray-300 resize-none min-h-[160px] ${
            isFocused ? 'border-primary-500 bg-white' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
          }`}
        />
      </motion.div>
    </div>
  );
};

const ChevronDown = ({ size, className }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'it-consulting',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const formDataInstance = new FormData(form);
    const data = Object.fromEntries(formDataInstance);

    const submissions = JSON.parse(localStorage.getItem("allFormSubmissions") || "[]");
    submissions.push({
      id: Date.now(),
      formType: "Contact Form",
      data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem("allFormSubmissions", JSON.stringify(submissions));

    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', service: 'it-consulting', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-primary-600 selection:text-white overflow-hidden">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Contact Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: heroY, scale: heroScale }}
            className="w-full h-full will-change-transform"
          >
            <img
              src="/images/contact/contact_hero.png"
              alt="Contact Background"
              loading="eager"
              className="w-full h-full object-cover brightness-[0.2]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-secondary/90 to-secondary z-10"></div>
          
          {/* Animated Blobs */}
          <motion.div
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full z-[11] will-change-transform"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 60, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary-500/10 blur-[100px] rounded-full z-[11] will-change-transform"
          />
          
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 z-[12] opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container-custom relative z-20 px-4 md:px-6">
          <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 will-change-transform text-left"
          >
            <span className="text-label !text-primary-400 mb-2 md:mb-4 block">
              Connect With Us
            </span>
            <h1 className="text-hero text-white mb-6 md:mb-8">
              Let&apos;s Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 italic">Conversation</span>
            </h1>
            <p className="text-paragraph !text-gray-400/80 mb-8 md:mb-12 !max-w-2xl">
              Whether you have a specific project or just a seed of an idea, our experts are ready to help you navigate the digital landscape.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      <Section className="bg-white -mt-12 md:-mt-24 relative z-30 pb-20 md:pb-40 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] md:shadow-[0_64px_128px_-32px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 bg-secondary p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between will-change-transform"
          >
            {/* Sidebar Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 space-y-12 md:space-y-16">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">Reach Out <br /> <span className="text-primary-500">Directly</span></h3>
                <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">Our strategists are ready to discuss your next big breakthrough.</p>
              </div>

              <div className="space-y-8 md:space-y-12">
                {[
                  { icon: MapPin, title: "Our Headquarters", text: "4th Binarius, Deepak Complex, National Games Road, Shastrinagar, Yerawada, Pune, Maharashtra 411006" },
                  { icon: Phone, title: "Give Us a Call", text: "+91 70415 50664" },
                  { icon: Mail, title: "Send an Email", text: "info@net-md.net" },
                  { icon: Clock, title: "Business Hours", text: "Mon - Fri: 10:00 AM - 7:00 PM" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 md:gap-6 group cursor-default will-change-transform"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 text-primary-500 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="will-change-transform"
                      >
                        <item.icon size={20} className="md:w-6 md:h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary-400/70 mb-1">{item.title}</h4>
                      <p className="text-white text-base md:text-lg font-bold group-hover:text-primary-400 transition-colors">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10 flex items-center justify-between">
                <h4 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary-400/70">Connect Socially</h4>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/people/Net-MD/61591657355515/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 text-white rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <Facebook size={18} className="md:w-5 md:h-5" />
                  </a>
                  <a href="https://www.instagram.com/netmd_/?fbclid=IwY2xjawS7JbZleHRuA2FlbQIxMQBicmlkETJLRTlYazVYb3dJanV1bXFBc3J0YwZhcHBfaWQBMAABHrsm_ZIADAWI3Hm1lNT-EiqEeRbHYi0FHPKjch_27Bt2qHa2m8G0E7h9a8HX_aem_qTntnCs3A12fnGRIIXPd4A" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 text-white rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <Instagram size={18} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <div className="flex-1 p-8 md:p-16 lg:p-24 relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-10 will-change-transform"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-50 text-primary-600 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-primary-600/10 border border-primary-100">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                      className="will-change-transform"
                    >
                      <CheckCircle2 size={48} className="md:w-16 md:h-16" />
                    </motion.div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Transmission Received</h3>
                    <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                      Thank you for reaching out. A specialist will review your inquiry and connect with you within 24 hours.
                    </p>
                  </div>
                  <MagneticButton>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-10 py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary-600 transition-all"
                    >
                      Send Another Message
                    </button>
                  </MagneticButton>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-12 will-change-transform"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <FormInput
                      label="Your Identity"
                      required
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <FormInput
                      label="Digital Reach"
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <FormSelect
                    label="Core Interest"
                    name="service"
                    value={formData.service}
                    onChange={(e: any) => setFormData({ ...formData, service: e.target.value })}
                    options={[
                      { value: 'it-consulting', label: 'IT Consulting & Strategy' },
                      { value: 'digital-marketing', label: 'Digital Growth Engine' },
                      { value: 'cloud-solutions', label: 'Enterprise Cloud' },
                      { value: 'cyber-security', label: 'Security Infrastructure' },
                      { value: 'other', label: 'General Inquiry' },
                    ]}
                  />

                  <FormTextarea
                    label="The Narrative"
                    required
                    name="message"
                    placeholder="Tell us about your mission..."
                    value={formData.message}
                    onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <MagneticButton className="w-full">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full py-4 md:py-6 bg-primary-600 text-white rounded-xl md:rounded-2xl text-base md:text-lg font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-3 md:gap-4 hover:bg-secondary transition-all duration-500 shadow-2xl shadow-primary-600/20 group relative overflow-hidden"
                    >
                      
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin w-5 h-5 md:w-6 md:h-6" />
                      ) : (
                        <>
                          Dispatch Message <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>

    
    </div>
  );
};

export default Contact;
