"use client";

import { useRef, use } from 'react';
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "../data";
import { CheckCircle, ArrowLeft, Rocket, Search, ShieldCheck, Cpu, TrendingUp, Users, Headphones, ChevronDown } from "lucide-react";
import { useState } from 'react';
import Link from 'next/link';
import { MagneticButtonWrapper as MagneticButton } from '@/components/Cards';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity and scope. Most engagements run 4–16 weeks. We provide a detailed timeline during the discovery phase after understanding your specific requirements." },
  { q: "What technologies do you work with?", a: "We work with a modern, battle-tested stack including React, Next.js, Node.js, Python, AWS, Azure, GCP, Docker, and more. Our team stays current with the latest industry tools to deliver future-proof solutions." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. All projects include a dedicated post-launch support period. We also offer retainer-based maintenance packages to ensure your solution stays secure, optimized, and up-to-date." },
  { q: "How do you ensure data security?", a: "Security is built into every layer of our process. We follow industry best practices including encryption at rest and in transit, and OWASP standards." },
  { q: "Can you integrate with our existing systems?", a: "Absolutely. We specialize in connecting new solutions with legacy systems, third-party APIs, and enterprise platforms. Our API-first approach ensures seamless interoperability across your entire tech ecosystem." },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-label mb-4 block">Got Questions?</span>
          <h2 className="text-section-title text-secondary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-10 py-8 text-left group"
              >
                <span className="text-card-title !text-secondary">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 ml-4 w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-primary-50 flex items-center justify-center text-primary-600 transition-colors duration-300">
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-10 pb-8 text-gray-500 font-medium leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

  return (
    <div className="overflow-x-hidden bg-white selection:bg-primary-600 selection:text-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
      `}</style>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hero Section - Matching Home Hero Rule */}
      <div ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 will-change-transform">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover brightness-[0.2]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/80 to-secondary"></div>
        </motion.div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full will-change-transform"
          />
        </div>

        <div className="container-custom relative z-10 px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="will-change-transform text-left"
            >
              <Link
                href="/services"
                className="text-label !text-primary-400 hover:!text-white mb-8 flex items-center gap-2 transition-all group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
              </Link>
              
              <div className="w-20 h-20 bg-primary-600/20 text-primary-400 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-xl border border-white/10 shadow-2xl">
                <service.icon size={40} />
              </div>
              
              <h1 className="text-hero text-white mb-8">
                {service.title}
              </h1>
              
              <p className="text-paragraph !text-gray-400/80 !max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Description */}
      <section className="bg-white py-32 px-6 relative z-10 overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left Column — Visual Identity */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="will-change-transform"
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-primary-600/30">
                  <service.icon size={36} />
                </div>
                <div>
                  <span className="text-label block mb-1">Service Overview</span>
                  <h2 className="text-section-title text-secondary !text-3xl">{service.title}</h2>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-16 bg-primary-600 rounded-full" />
                <div className="h-1 w-8 bg-primary-300 rounded-full" />
                <div className="h-1 w-4 bg-primary-100 rounded-full" />
              </div>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-3 mb-12">
                {service.features.slice(0, 4).map((feat: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-50 text-primary-700 rounded-full text-sm font-bold border border-primary-100"
                  >
                    <CheckCircle size={14} className="text-primary-500" />
                    {feat}
                  </motion.span>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "150+", label: "Projects Done" },
                  { value: "98%", label: "Satisfaction" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center p-5 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="text-2xl font-bold text-primary-600 mb-1">{s.value}</div>
                    <div className="text-xs font-black uppercase tracking-widest text-gray-400">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column — Description */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="will-change-transform"
            >
              {/* Large decorative quote mark */}
              <div className="text-[8rem] leading-none font-display font-bold text-primary-100 select-none mb-[-2rem]">&ldquo;</div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700 mb-10">
                {service.fullDescription}
              </p>

              {/* Highlight box */}
              <div className="p-8 bg-secondary rounded-3xl border-l-4 border-primary-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-2xl rounded-full" />
                <p className="text-white/80 font-medium leading-relaxed relative z-10">
                  We combine deep technical expertise with strategic business thinking to deliver solutions that not only solve today&apos;s challenges but position you for tomorrow&apos;s opportunities.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-32 px-6 relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-label !text-primary-400 mb-4 block">Advanced Capabilities</span>
              <h2 className="text-section-title !text-white">What we deliver</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feat: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-primary-500/50 transition-all duration-700 will-change-transform"
              >
                <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-xl flex items-center justify-center mb-8">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-card-title mb-4 !text-white">{feat}</h3>
                <div className="w-12 h-1 bg-primary-600/30 rounded-full group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-6 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <span className="text-label !text-primary-600 mb-4 block">Our Impact</span>
            <h2 className="text-section-title text-secondary">Business Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 bg-white shadow-xl text-primary-600 rounded-2xl flex items-center justify-center font-display font-bold text-2xl shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 relative z-10">
                  {i + 1}
                </div>
                <p className="text-card-title !text-gray-700 relative z-10">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-label mb-4 block">How We Work</span>
            <h2 className="text-section-title text-secondary">Our Delivery Process</h2>
          </div>
          <div className="relative">
            {/* Background Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-primary-100" />
            
            {/* Animated Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="hidden lg:block absolute top-12 left-[10%] h-0.5 bg-primary-600 z-0 origin-left shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {["Discovery","Strategy","Design","Development","Testing","Launch & Support"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center will-change-transform"
                >
                  <motion.div
                    initial={{ backgroundColor: "#ffffff", color: "#16a34a", scale: 1 }}
                    whileInView={{ 
                      backgroundColor: ["#ffffff", "#16a34a", "#16a34a"],
                      color: ["#16a34a", "#ffffff", "#ffffff"],
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 20px 40px -10px rgba(22,163,74,0.4)", "0 20px 40px -10px rgba(22,163,74,0.2)"]
                    }}
                    viewport={{ once: false }}
                    transition={{ 
                      delay: 0.5 + (i * 0.4), // Matches the 2s line animation (0.5 start + 2s spread across 5 intervals)
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 12,
                      backgroundColor: "#059669", // Darker green on hover
                      boxShadow: "0 25px 50px -12px rgba(22,163,74,0.5)"
                    }}
                    className="w-24 h-24 rounded-[2rem] bg-white shadow-xl border-2 border-gray-100 flex items-center justify-center text-2xl font-bold text-primary-600 mb-6 relative z-10 cursor-default will-change-transform"
                  >
                    {i + 1}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.7 + (i * 0.4) }}
                    className="text-card-title text-secondary"
                  >
                    {step}
                  </motion.h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-secondary overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <span className="text-label !text-primary-400 mb-4 block">By The Numbers</span>
            <h2 className="text-section-title !text-white">Proven Track Record</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Years of Expertise" },
              { value: "20+", label: "Engineers" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-center p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary-500/40 transition-all duration-500 will-change-transform"
              >
                <div className="text-5xl font-bold text-primary-400 mb-3">{stat.value}</div>
                <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <span className="text-label mb-4 block">Our Advantage</span>
            <h2 className="text-section-title text-secondary">Why Businesses Choose Net-MD</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, title: "Enterprise Security", desc: "Every solution is built with security-first principles, ensuring your data and systems stay protected." },
              { icon: TrendingUp, title: "Scalable Architecture", desc: "Solutions designed to grow with your business, handling increased load without costly overhauls." },
              { icon: Cpu, title: "Cutting-Edge Technology", desc: "We leverage the latest frameworks and tools to deliver modern, future-proof digital products." },
              { icon: Users, title: "Dedicated Team", desc: "A passionate team of experts committed to your success from kickoff to deployment." },
              { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock monitoring and support to ensure your systems run without disruption." },
              { icon: Search, title: "Transparent Reporting", desc: "Real-time dashboards and detailed reports keep you informed on performance and ROI at all times." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gray-50/80 rounded-[2.5rem] border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 group will-change-transform"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-card-title mb-4">{item.title}</h3>
                <p className="text-card-description">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="bg-secondary py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(34,197,94,0.1)_50%,transparent_100%)] will-change-transform"
          />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="will-change-transform"
          >
            <h2 className="text-hero mb-10 text-white">
              Ready to Scale with <br />
              <span className="text-primary-500 italic">{service.title}</span>?
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              <MagneticButton>
                <Link 
                  href="/contact" 
                  className="bg-primary-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-primary-700 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)] relative overflow-hidden group"
                >
                  <span className="relative z-10">Schedule a Strategy Call</span>
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link
                  href="/services"
                  className="bg-white/5 border-2 border-white/10 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex items-center gap-3"
                >
                  View All Services <Rocket size={24} />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}