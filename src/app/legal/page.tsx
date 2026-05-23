"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/Cards';
import { 
  FileText, 
  Scale, 
  HelpCircle, 
  Briefcase, 
  ShieldAlert, 
  Globe, 
  Mail, 
  Clock, 
  ChevronRight, 
  Zap, 
  Hammer,
  Sparkles,
  BookOpen
} from 'lucide-react';

const SECTIONS = [
  {
    id: "terms",
    icon: Scale,
    title: "1. Terms of Use",
    content: (
      <>
        <p className="mb-4">
          Welcome to the digital portal of <strong>Net-MD Solutions</strong> ("Net-MD," "we," "our," or "us"). These Terms of Use govern your access to and use of our website (net-md.net), as well as any educational resources, articles, and interactive digital interfaces we host.
        </p>
        <p className="mb-4">
          By accessing, browsing, or interacting with our web application, you acknowledge that you have read, understood, and agree to be bound by these terms, alongside our Privacy Policy. If you do not accept these conditions, you are prohibited from utilizing our site.
        </p>
      </>
    )
  },
  {
    id: "ip",
    icon: Hammer,
    title: "2. Intellectual Property Rights",
    content: (
      <>
        <p className="mb-4">
          All materials published or otherwise accessible through our digital interfaces—including, but not limited to, text, code, graphics, interactive micro-animations, digital illustrations, soundscapes, trademarks, logos, and proprietary layout code—are the exclusive intellectual property of <strong>Net-MD Solutions</strong>, unless explicitly stated otherwise.
        </p>
        <p className="mb-4">
          Your access to our platform does not grant you any license or ownership rights. You strictly agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-3 my-6 text-gray-600 font-medium">
          <li>Reproduce, copy, republish, or redistribute our layout styles or content without prior written authorization.</li>
          <li>Decompile, reverse-engineer, or screen-scrape any interactive modules or Custom Cursor assets from our platform.</li>
          <li>Falsely represent any Net-MD IT consulting models, strategy research, or blogs as your own.</li>
        </ul>
      </>
    )
  },
  {
    id: "engagements",
    icon: Briefcase,
    title: "3. Service Engagements & MSAs",
    content: (
      <>
        <p className="mb-4">
          While this website showcases our technical expertise, service catalog, and IT solutions, the formal engagement of Net-MD consulting services is governed exclusively by separate offline agreement structures.
        </p>
        <p className="mb-4">
          All custom software development, cloud operations engineering, and strategy architecture projects are strictly subject to a executed <strong>Master Services Agreement (MSA)</strong> and <strong>Statement of Work (SOW)</strong>. No promotional content on this site constitutes a binding, commercial offer to deliver services.
        </p>
        <div className="bg-primary-50/50 border border-primary-200/50 p-6 rounded-2xl mt-6 flex gap-4">
          <HelpCircle className="text-primary-600 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-secondary mb-1">Corporate Clients Note</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have executed a corporate Master Services Agreement with Net-MD Solutions, the terms of that agreement shall supersede any provisions within these general website Terms of Use.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "disclaimers",
    icon: ShieldAlert,
    title: "4. Disclaimers & Advice",
    content: (
      <>
        <p className="mb-4">
          The content of this website—including insights published in <em>The Digital Evolution Journal</em>, technical case studies, and performance estimations—is provided solely for general informational and research purposes.
        </p>
        <p className="mb-4">
          <strong>No Professional Advice:</strong> No information on this site constitutes binding technical, financial, or cyber-security architecture advice. You should never make critical infrastructural or corporate investment decisions based on the content of this site without first consulting our certified specialists directly.
        </p>
        <p className="mb-4">
          The site is provided on an <strong>"as-is"</strong> and <strong>"as-available"</strong> basis, without any warranties of any kind, whether express or implied, including warranties of continuous system availability, complete accuracy, or fitness for a particular purpose.
        </p>
      </>
    )
  },
  {
    id: "liability",
    icon: FileText,
    title: "5. Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, in no event shall <strong>Net-MD Solutions</strong>, its directors, global officers, senior consulting architects, or affiliate developers be liable for any direct, indirect, incidental, punitive, or consequential damages whatsoever.
        </p>
        <p className="mb-4">
          This includes, without limitation, damages for loss of corporate profits, operational data, network security breaches, system downtime, or business interruptions arising out of or in connection with:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 text-gray-600 font-medium">
          <li>The use or inability to access our digital interfaces.</li>
          <li>Any server telemetry data, application forms, or CV uploads.</li>
          <li>Any external hyper-links pointing to third-party assets or portals.</li>
        </ul>
      </>
    )
  },
  {
    id: "jurisdiction",
    icon: Globe,
    title: "6. Governing Law & Jurisdiction",
    content: (
      <>
        <p className="mb-4">
          These Terms of Use, your access to our website, and any non-contractual disputes arising from our digital platform shall be governed by, and construed in accordance with, the laws of the <strong>Republic of India</strong>, without regard to conflict of law principles.
        </p>
        <p className="mb-4">
          You explicitly submit and agree to the exclusive jurisdiction of the competent courts of <strong>Hyderabad, Telangana, India</strong>, for the adjudication of any legal actions or proceedings associated with this platform.
        </p>
      </>
    )
  },
  {
    id: "contact",
    icon: Mail,
    title: "7. Legal Inquiries",
    content: (
      <>
        <p className="mb-4">
          For any clarifications regarding these Terms of Use, queries regarding digital licenses, or formal legal notices, please write directly to our legal affairs and counsel team:
        </p>
        
        <div className="bg-secondary text-white p-8 rounded-3xl mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-[60px] rounded-full"></div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-primary-500" size={24} /> Corporate Legal Counsel
          </h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p><strong className="text-white">Department:</strong> Legal Affairs & Corporate Governance</p>
            <p><strong className="text-white">Email:</strong> info@net-md.net</p>
          </div>
        </div>
      </>
    )
  }
];

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("terms");
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-white min-h-screen selection:bg-primary-600 selection:text-white overflow-hidden">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: heroY, scale: heroScale }}
            className="w-full h-full will-change-transform opacity-30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary to-secondary"></div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/95 z-10"></div>
          
          {/* Animated Blob */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full z-[11] will-change-transform"
          />
          
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 z-[12] opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container-custom relative z-20 px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-label !text-primary-400 mb-2 block">
              Terms & Conditions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 italic font-display lowercase font-semibold">Framework</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Understand our proprietary intellectual property structures, limits of liability, professional guidelines, and corporate engagement policies.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-[0.1em] mt-4">
              <Clock size={14} className="text-primary-500" />
              <span>Last Updated: May 23, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <Section className="bg-white -mt-12 relative z-30 pb-24 md:pb-40 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sticky Navigation Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100/80 backdrop-blur-md">
              <div className="mb-6 pb-4 border-b border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 flex items-center gap-2">
                  <BookOpen size={14} /> Document Outline
                </span>
                <h3 className="text-lg font-bold text-secondary mt-1">Navigate Legal</h3>
              </div>
              <nav className="space-y-2">
                {SECTIONS.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSection(sec.id);
                        const element = document.getElementById(sec.id);
                        if (element) {
                          const yOffset = -100;
                          const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: yPosition, behavior: 'smooth' });
                        }
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all text-sm group ${
                        isActive 
                          ? 'bg-secondary text-white shadow-xl shadow-secondary/10 translate-x-2' 
                          : 'text-gray-500 hover:text-secondary hover:bg-gray-100/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-secondary transition-colors'} />
                        <span>{sec.title.split('. ')[1]}</span>
                      </div>
                      <ChevronRight size={16} className={`opacity-0 group-hover:opacity-100 transition-all ${isActive ? 'text-primary-500 opacity-100 translate-x-1' : ''}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Interactive Document Body */}
          <div className="flex-grow lg:w-2/3 space-y-16">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon;
              return (
                <motion.article 
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  onViewportEnter={() => setActiveSection(sec.id)}
                  className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200/50 transition-all duration-500 group relative"
                >
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 flex items-center justify-center transition-all duration-500">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 pr-12">
                    {sec.title}
                  </h2>
                  <div className="text-gray-500 leading-relaxed font-medium space-y-4 text-base">
                    {sec.content}
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </Section>
    </div>
  );
}
