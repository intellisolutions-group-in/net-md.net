"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/Cards';
import { 
  Building, 
  Cpu, 
  HeartHandshake, 
  ShieldCheck, 
  Award, 
  Users, 
  Mail, 
  Clock, 
  ChevronRight, 
  Zap, 
  HelpCircle,
  Sparkles,
  BookOpen
} from 'lucide-react';

const SECTIONS = [
  {
    id: "overview",
    icon: Building,
    title: "1. Corporate Governance Framework",
    content: (
      <>
        <p className="mb-4">
          At <strong>Net-MD Solutions</strong>, we believe that robust corporate governance is the foundation of sustainable long-term value creation. Our governance frameworks are built upon principles of absolute transparency, corporate integrity, rigorous accountability, and fair stakeholder engagement.
        </p>
        <p className="mb-4">
          Our board of directors and senior leadership team are committed to steering the organization with a futuristic perspective, ensuring we maintain the highest standards of regulatory compliance and professional business conduct across all regional markets we serve.
        </p>
      </>
    )
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "2. Compliance & Standards",
    content: (
      <>
        <p className="mb-4">
          In an era of hyper-connected systems and digital volatility, compliance is not merely a legal checkbox—it is a core business differentiator. Net-MD adheres to a comprehensive range of international standards and frameworks to protect client infrastructure:
        </p>
        <ul className="space-y-4 my-6">
          {[
            { standard: "ISO/IEC 27001 Practice Standards", desc: "Our software development life cycles and cloud deployment methodologies align with the strict information security management standards of ISO 27001." },
            { standard: "SOC 2 Type II Auditing Readiness", desc: "We enforce strict operational controls, continuous monitoring, and infrastructure logging to guarantee system confidentiality and processing integrity." },
            { standard: "GDPR & CCPA Alignment", desc: "Our web platforms and databases use strict 'privacy-by-design' configurations, granting users comprehensive authority over their telemetry and professional files." }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100/60">
              <span className="w-8 h-8 rounded-xl bg-primary-50 text-primary-600 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">
                {i + 1}
              </span>
              <div>
                <h5 className="font-bold text-secondary mb-1 text-sm">{item.standard}</h5>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: "ai-ethics",
    icon: Cpu,
    title: "3. Responsible AI & Engineering",
    content: (
      <>
        <p className="mb-4">
          As a premier technology consultancy, we actively architect and integrate machine learning and artificial intelligence systems. We believe AI should serve as an amplifier of human capability, not a substitute for human accountability. Our <strong>Responsible AI Engineering Code</strong> strictly mandates:
        </p>
        <ul className="list-disc pl-6 space-y-3 my-6 text-gray-600 font-medium">
          <li><strong>Algorithmic Fairness:</strong> We proactively test and mitigate dataset biases in predictive modeling workflows to prevent discriminatory outcomes.</li>
          <li><strong>Explainable Architectures (XAI):</strong> We prioritize transparent neural networks and clear decision-making trees, ensuring clients understand how algorithmic deductions are made.</li>
          <li><strong>Data Sovereignty:</strong> Client proprietary data is never used to train generalized third-party models or foundation models without explicit consent.</li>
        </ul>
      </>
    )
  },
  {
    id: "esg",
    icon: HeartHandshake,
    title: "4. Environmental & Social Ethics (ESG)",
    content: (
      <>
        <p className="mb-4">
          Net-MD Solutions is dedicated to a green, inclusive digital future. We understand that computing power has real-world environmental implications. Our Environmental, Social, and Governance (<strong>ESG</strong>) targets include:
        </p>
        <ul className="space-y-4 my-6">
          {[
            "Optimizing cloud container topologies and virtual machine usage to reduce server energy waste across AWS and GCP nodes.",
            "Promoting a completely paperless, digital-first operational model across all administrative departments and consulting hubs.",
            "Fostering continuous learning by providing technical mentorship, local coding bootcamps, and open-source contributions."
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-600 font-medium text-sm leading-relaxed">
              <span className="w-6 h-6 rounded-lg bg-primary-50 text-primary-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: "accountability",
    icon: Users,
    title: "5. Board Accountability",
    content: (
      <>
        <p className="mb-4">
          Our governance structure ensures independent oversight of corporate practices. Board committees focus systematically on audit, risk evaluation, talent acquisition, and technological innovation.
        </p>
        <p className="mb-4">
          This division of responsibilities guarantees that executive strategies are stress-tested, corporate risks are continually audited, and our long-term vision is consistently aligned with ethical excellence.
        </p>
      </>
    )
  },
  {
    id: "whistleblower",
    icon: Mail,
    title: "6. Violation Reporting & Ethics Hotline",
    content: (
      <>
        <p className="mb-4">
          We maintain a strict zero-tolerance policy against corruption, bribery, conflicts of interest, and data manipulation. Employees, consulting clients, and stakeholders are encouraged to report any ethical violations.
        </p>
        <p className="mb-4">
          Reports can be filed anonymously. We guarantee comprehensive protection from retaliation for any whistleblower reporting in good faith.
        </p>
        
        <div className="bg-secondary text-white p-8 rounded-3xl mt-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-[60px] rounded-full"></div>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-primary-500" size={24} /> Integrity & Ethics Channel
          </h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p><strong className="text-white">Department:</strong> Ethics Committee & Whistleblower Bureau</p>
            <p><strong className="text-white">Secure Email:</strong> info@net-md.net</p>
            <p><strong className="text-white">Confidentiality:</strong> Encrypted, anonymous submission protocols enforced.</p>
          </div>
        </div>
      </>
    )
  }
];

export default function GovernancePage() {
  const [activeSection, setActiveSection] = useState("overview");
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
              Leadership & Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none uppercase">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 italic font-display lowercase font-semibold">Governance</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Discover our core leadership policies, ethical codes of engineering, environmental responsibility agendas, and board committee structures.
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
                <h3 className="text-lg font-bold text-secondary mt-1">Navigate Governance</h3>
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
