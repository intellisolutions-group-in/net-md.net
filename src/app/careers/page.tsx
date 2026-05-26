"use client";

import React, { useState, useRef, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Plus,
  Sparkles
} from 'lucide-react';
import JobCard from '@/components/JobCard';
import Benefits from '@/components/Benefits';
import { MagneticButtonWrapper as MagneticButton } from '@/components/Cards';

const HiringStep = memo(({ step, index }: { step: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    className="text-center group will-change-transform"
  >
    <motion.div 
      whileInView={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
      className="w-32 h-32 bg-white rounded-[2.5rem] shadow-xl border-4 border-gray-50 flex items-center justify-center text-4xl font-black text-primary-600 mx-auto mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg] relative will-change-transform"
    >
      {step.number}
      <div className="absolute inset-0 rounded-[2.5rem] bg-primary-600 opacity-0 group-hover:animate-ping group-hover:opacity-10 transition-opacity"></div>
    </motion.div>
    <h3 className="text-card-title mb-4 !text-secondary group-hover:!text-primary-600">{step.title}</h3>
    <p className="text-paragraph !text-gray-600 !opacity-80 px-4">{step.description}</p>
  </motion.div>
));
HiringStep.displayName = "HiringStep";

const CareersPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jobs = [
    { title: "Frontend Developer (React)", experience: "2-4 Years", location: "Bhubaneswar / Remote", type: "Full-Time", slug: "frontend-developer", description: "Build beautiful, high-performance user interfaces for our web development clients using React and modern CSS." },
    { title: "IT Strategy Consultant", experience: "5+ Years", location: "Hybrid (Mumbai)", type: "Full-Time", slug: "it-strategy-consultant", description: "Help enterprise clients navigate digital transformation and align their technology roadmap with business goals." },
    { title: "Cloud Infrastructure Engineer", experience: "3-6 Years", location: "Remote / Hybrid", type: "Full-Time", slug: "cloud-engineer", description: "Architect and manage secure, scalable cloud environments on AWS, Azure, and GCP for our global clients." },
    { title: "SEO & Content Strategist", experience: "2-4 Years", location: "Remote", type: "Full-Time", slug: "seo-strategist", description: "Drive organic growth and visibility for our clients through technical SEO, keyword research, and data-driven content strategies." },
    { title: "Social Media Manager", experience: "2+ Years", location: "Bhubaneswar", type: "Full-Time", slug: "social-media-manager", description: "Build brand authority and community engagement through creative social media campaigns and influencer outreach." },
    { title: "Backend Developer (Node.js)", experience: "3-5 Years", location: "Remote", type: "Full-Time", slug: "backend-developer", description: "Design and implement robust APIs and microservices to connect complex software ecosystems seamlessly." },
    { title: "UI/UX Designer", experience: "2+ Years", location: "Bhubaneswar", type: "Contract", slug: "ui-ux-designer", description: "Create stunning visual designs and intuitive user experiences for our enterprise clients. Proficiency in Figma is required." }
  ];

  const faqs = [
    { q: "Do you hire freshers?", a: "Yes, we regularly hire talented freshers through our graduate trainee program. We look for strong foundations in computer science and a passion for learning." },
    { q: "What technologies do you use?", a: "Our primary stack includes React/Next.js for frontend, Node.js/Express for backend, and MongoDB/PostgreSQL for databases. We also use AWS for cloud infrastructure." },
    { q: "Is remote work available?", a: "Absolutely! We offer remote, hybrid, and on-site work options depending on the role and project requirements." },
    { q: "How long does the hiring process take?", a: "The entire process usually takes 2-3 weeks from the initial screening to the final offer, depending on the availability of candidates." }
  ];

  const hiringSteps = [
    { number: "01", title: "Apply Online", description: "Submit your resume and portfolio through our careers portal." },
    { number: "02", title: "Technical Screening", description: "A quick call with our HR team and technical assessment." },
    { number: "03", title: "Interview", description: "Technical and cultural rounds to assess your skills and fit for the role." },
    { number: "04", title: "Offer Letter", description: "If everything aligns, we'll extend an offer and welcome you to the team." }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-primary-600 selection:text-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #f6a18d; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #e27a67; }
      `}</style>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Background Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary-600/5 blur-[120px] rounded-full will-change-transform"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full will-change-transform"
        />
      </div>

      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-secondary">
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0 will-change-transform">
          <img
            src="/images/careers/hero.png"
            alt="Join Our Team"
            loading="eager"
            className="w-full h-full object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/80 to-secondary"></div>
        </motion.div>

        {/* Tech Grid & Particles */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-primary-600/20 rounded-full border border-primary-500/30 text-label mb-8 backdrop-blur-sm"
            >
              <Sparkles size={14} /> Join the Evolution
            </motion.div>
            
            <h1 className="text-hero text-white mb-8">
              Shape the Future <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">With Us</span>
            </h1>
            
            <p className="text-paragraph !text-gray-300 mx-auto !max-w-3xl mb-16">
              Build real-world IT solutions using modern technologies. We're looking for passionate individuals to shape the future of technology in a collaborative, high-growth environment.
            </p>
            
            <div className="flex justify-center">
              <MagneticButton>
                <a 
                  href="#openings" 
                  className="group relative bg-primary-600 text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 hover:bg-primary-700 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)]"
                >
                  <span className="relative z-10">View Open Positions</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent will-change-transform"
        />
      </section>

      {/* Why Work With Us Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="container-custom px-6">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label !text-primary-600 mb-4 block"
            >
              Culture & Growth
            </motion.span>
            <h2 className="text-section-title text-secondary">Why Work With Us?</h2>
          </div>
          <Benefits />
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-32 bg-off-white relative z-10">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-label !text-primary-600 mb-4 block">Opportunities</span>
              <h2 className="text-section-title text-secondary">Current Openings</h2>
              <p className="text-paragraph !text-gray-600 mt-6 !opacity-80">
                Explore our current job openings and find the perfect role for your next career move.
              </p>
            </div>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search for roles..."
                className="pl-12 pr-6 py-5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none w-full md:w-96 shadow-sm transition-all text-lg font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-32 bg-white overflow-hidden relative z-10">
        <div className="container-custom px-6">
          <div className="text-center mb-24">
            <span className="text-label !text-primary-600 mb-4 block">The Journey</span>
            <h2 className="text-section-title text-secondary">Our Hiring Process</h2>
            <p className="text-paragraph !text-gray-600 mt-6 !opacity-80">A simple and transparent process to help you join our team.</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-16 left-0 w-full h-[2px] bg-gray-100 hidden lg:block overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-primary-500 origin-left will-change-transform"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {hiringSteps.map((step, index) => (
                <HiringStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-off-white relative z-10">
        <div className="container-custom px-6 max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-label !text-primary-600 mb-4 block">Support</span>
            <h2 className="text-section-title text-secondary">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[2rem] border overflow-hidden transition-all duration-500 will-change-transform ${openFaq === index ? 'bg-white border-primary-500 shadow-xl' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-card-title transition-colors ${openFaq === index ? '!text-primary-600' : '!text-secondary group-hover:!text-primary-600'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === index ? 'bg-primary-600 text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600'}`}>
                    <Plus size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-10 pb-10 text-paragraph !text-gray-600 !opacity-90 border-t border-gray-50 pt-8">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
