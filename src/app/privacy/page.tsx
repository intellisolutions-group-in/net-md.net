"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/Cards';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  FileText, 
  Database, 
  Mail, 
  Clock, 
  ChevronRight, 
  Zap, 
  AlertCircle,
  Sparkles,
  BookOpen
} from 'lucide-react';

const SECTIONS = [
  {
    id: "introduction",
    icon: FileText,
    title: "1. Introduction & Scope",
    content: (
      <>
        <p className="mb-4">
          At <strong>Net-MD Solutions</strong> ("we," "our," or "us"), we are deeply committed to protecting the privacy, confidentiality, and integrity of your personal data. This Privacy Policy outlines how we collect, use, store, and safeguard your information when you visit our website (net-md.net), engage with our premium consulting and technology services, or communicate with us.
        </p>
        <p className="mb-4">
          We operate in compliance with leading global data protection standards, including the General Data Protection Regulation (<strong>GDPR</strong>) and the California Consumer Privacy Act (<strong>CCPA</strong>). By accessing our services, you acknowledge and agree to the terms described in this policy.
        </p>
        <div className="bg-primary-50/50 border border-primary-200/50 p-6 rounded-2xl mt-6 flex gap-4">
          <AlertCircle className="text-primary-600 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-secondary mb-1">Important Notice</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Please read this document carefully. If you do not agree with any terms within this policy, please discontinue use of our platform and consulting services immediately.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "collection",
    icon: Database,
    title: "2. Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We only collect personal information that is necessary to fulfill your requests, improve your digital experience, or deliver our high-end consulting solutions. The data we collect falls into two main categories:
        </p>
        
        <h4 className="text-lg font-bold text-secondary mt-8 mb-4">A. Information You Voluntarily Provide</h4>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-600 font-medium">
          <li><strong>Identity Details:</strong> Your name, professional title, and organization when you fill out contact or application forms.</li>
          <li><strong>Contact Information:</strong> Email address, phone number, and physical business address.</li>
          <li><strong>Professional Submissions:</strong> Resumes, cover letters, portfolio URLs, and workspace narratives uploaded via our Careers and Contact modules.</li>
        </ul>

        <h4 className="text-lg font-bold text-secondary mt-8 mb-4">B. Information Collected Automatically</h4>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-600 font-medium">
          <li><strong>Usage and Device Telemetry:</strong> IP addresses, browser types, operating systems, referring URLs, and device screen specifications.</li>
          <li><strong>Behavioral Analytics:</strong> Pages visited, duration of stay, hover actions, click streams, and custom cursor telemetry.</li>
        </ul>
      </>
    )
  },
  {
    id: "processing",
    icon: UserCheck,
    title: "3. How We Process Data",
    content: (
      <>
        <p className="mb-4">
          Net-MD Solutions utilizes state-of-the-art server infrastructure and secure pipelines to process your information. Our primary legal bases and business purposes for processing include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h5 className="font-bold text-secondary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span> Service Provision
            </h5>
            <p className="text-sm text-gray-500 leading-relaxed">
              To evaluate consulting inquiries, execute master services agreements, and process candidate job applications seamlessly.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h5 className="font-bold text-secondary mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span> Platform Optimization
            </h5>
            <p className="text-sm text-gray-500 leading-relaxed">
              To analyze performance metrics, improve our interactive web application, and curate customized research updates.
            </p>
          </div>
        </div>
        <p className="mb-4">
          We strictly adhere to a **no-sell** policy. We will never sell, lease, or rent your personal identity data to third-party brokers, advertisement networks, or external research firms.
        </p>
      </>
    )
  },
  {
    id: "security",
    icon: Lock,
    title: "4. Data Security & Storage",
    content: (
      <>
        <p className="mb-4">
          The protection of your corporate and personal assets is of paramount importance to Net-MD. We employ military-grade administrative, technical, and physical security measures, including:
        </p>
        <ul className="space-y-4 my-6">
          {[
            "AES-256 encryption in-transit via TLS 1.3 and at-rest across all primary database nodes.",
            "Isolated containerized workloads hosted on hyper-secure global cloud providers (AWS/GCP) with continuous threat mitigation.",
            "Strict role-based access control (RBAC), ensuring that only authorized consulting architects have access to sensitive metrics.",
            "Bi-weekly vulnerability assessments, automated penetration tests, and third-party compliance audits."
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 font-medium text-sm leading-relaxed">
              <span className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4">
          While we execute industry-leading security practices, no transmission method over the internet can guarantee absolute risk mitigation. We continuously monitor and respond proactively to any emerging digital threats.
        </p>
      </>
    )
  },
  {
    id: "rights",
    icon: Shield,
    title: "5. Your Legal Rights",
    content: (
      <>
        <p className="mb-4">
          Depending on your regional jurisdiction (such as European Economic Area or California), you are granted robust rights regarding your personal information under GDPR and CCPA:
        </p>
        
        <div className="space-y-4 my-8">
          {[
            { title: "Right to Access", desc: "You may request full copies of all personal and telemetry data we hold on your identity." },
            { title: "Right to Rectification", desc: "You have the right to request immediate correction of inaccurate or incomplete details." },
            { title: "Right to Erasure (Forget Me)", desc: "You can request complete deletion of all records and historic submissions from our database." },
            { title: "Right to Portability", desc: "You can request that we transfer your structured data directly to another firm or digital repository." }
          ].map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
              <h5 className="font-bold text-secondary mb-1 text-sm">{item.title}</h5>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mb-4">
          To invoke any of these statutory rights, please submit a formal request to our security and compliance officer via email at <strong className="text-primary-600">info@net-md.net</strong>.
        </p>
      </>
    )
  },
  {
    id: "contact",
    icon: Mail,
    title: "6. Contact & DPO",
    content: (
      <>
        <p className="mb-4">
          If you have any questions, concerns, or feedback regarding our privacy infrastructure, data handling pipelines, or this policy document, you can connect directly with our designated Data Protection Officer:
        </p>
        
        <div className="bg-secondary text-white p-8 rounded-3xl mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-[60px] rounded-full"></div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-primary-500" size={24} /> Privacy & Compliance HQ
          </h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p><strong className="text-white">Officer:</strong> Head of Information Security & DPO</p>
            <p><strong className="text-white">Email:</strong> info@net-md.net</p>
          </div>
        </div>
      </>
    )
  }
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
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
              Governance & Integrity
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 italic font-display lowercase font-semibold">Policy</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Transparent protocols, robust security frameworks, and proactive data management systems. Learn how we safeguard your professional digital assets.
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
                <h3 className="text-lg font-bold text-secondary mt-1">Navigate Policy</h3>
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
