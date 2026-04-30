"use client";

import { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Rocket, Globe, Shield, Cloud, BarChart, Code, Search, Layers, TrendingUp, Award, Building2, HeartPulse, ShoppingBag, GraduationCap, CheckCircle2, Calendar, MessageSquare, Plus } from 'lucide-react';
import {
  Section,
  ServiceCard,
  BlogCard,
  StatItem,
  TestimonialCard,
  FaqItem,
  ProjectCard,
  MagneticButtonWrapper as MagneticButton,
  TiltCardWrapper as TiltCard
} from '@/components/Cards';
import { staggerTextContainer, staggerTextItem } from '../utils/animations';
import Link from 'next/link';
import { blogs } from '@/data/blogData';

// --- Optimized Helper Components ---

const CountUp = memo(({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
});
CountUp.displayName = "CountUp";

const Home = () => {
  // --- Data Definitions ---
  const services = [
    { slug: "it-consulting", icon: BarChart, title: "IT Consulting", description: "Strategic technology planning to align your IT infrastructure with your long-term business goals." },
    { slug: "cloud-solutions", icon: Cloud, title: "Cloud Solutions", description: "Seamless migration, management, and optimization of your cloud infrastructure for maximum scalability." },
    { slug: "web-development", icon: Code, title: "Web Development", description: "Custom, high-performance web applications built with modern frameworks to drive user engagement." },
    { slug: "seo-optimization", icon: Search, title: "SEO Optimization", description: "Data-driven strategies to boost your organic visibility and drive high-quality traffic to your site." },
    { slug: "social-media-marketing", icon: Globe, title: "Social Media Marketing", description: "Building brand authority and community engagement through targeted social media campaigns." },
    { slug: "api-integration", icon: Layers, title: "API Integration", description: "Connecting your software ecosystem with robust, secure, and efficient API solutions." },
  ];

  const stats = [
    { value: "500", label: "Projects Completed", suffix: "+" },
    { value: "250", label: "Happy Clients", suffix: "+" },
    { value: "12", label: "Years Experience", suffix: "+" },
    { value: "50", label: "Tech Experts", suffix: "+" },
  ];

  const processSteps = [
    { title: "Discovery", description: "We dive deep into your business needs and project requirements." },
    { title: "Planning", description: "Creating a detailed roadmap and architecture for your solution." },
    { title: "Development", description: "Agile execution with regular updates and quality assurance." },
    { title: "Deployment", description: "Launching your project with full support and monitoring." },
  ];

  const testimonials = [
    { quote: "Net-MD transformed our digital presence. Their cloud solutions scaled our operations by 200% within six months.", author: "Rajesh Varma", role: "CTO, TechFlow India" },
    { quote: "The best IT consulting partner we've ever worked with. Their strategic approach saved us thousands in overhead.", author: "Sneha Kapoor", role: "CEO, Innovate Solutions" },
    { quote: "Highly professional team. Their SEO strategies moved us to the first page for our most competitive keywords.", author: "Vikram Singh", role: "Marketing Director, GlobalX" },
    { quote: "Exceptional service and support. Their web development team delivered a high-performance app ahead of schedule.", author: "Ananya Iyer", role: "Product Manager, StartupScale" },
    { quote: "Their API integration solutions streamlined our entire internal process. A game-changer for our efficiency.", author: "Amit Patel", role: "Operations Head, LogisticsPro" },
    { quote: "Net-MD provided incredible insight into our cybersecurity needs. We feel much more secure after their audit.", author: "Priya Sharma", role: "IT Manager, SecureBank" }
  ];

  const industries = [
    { icon: Building2, name: "Finance" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: ShoppingBag, name: "E-Commerce" },
    { icon: GraduationCap, name: "Education" },
  ];

  const techLogos = [
    { name: 'AWS', icon: Cloud },
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Zap },
    { name: 'Python', icon: BarChart },
    { name: 'Docker', icon: Layers },
  ];

  // --- State & Hooks ---
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollYProgress } = useScroll();
  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "center 30%"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // --- Optimized Testimonial Loop ---
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div className="overflow-x-hidden selection:bg-primary-600 selection:text-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
      `}</style>

      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 will-change-transform">
          <img
            src="/images/home/home_hero.jpg"
            alt="Hero Background"
            loading="eager"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent"></div>
          
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent mix-blend-overlay will-change-transform"
          />
        </motion.div>

        <div className="container-custom relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl will-change-transform"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-label !text-primary-400 mb-4 block"
            >
              Excellence in Technology
            </motion.span>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerTextContainer}
              className="text-hero text-white mb-8"
            >
              {"Transforming Ideas into Digital Reality".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-paragraph !text-gray-300 mb-12 !max-w-2xl"
            >
              Net-MD empowers forward-thinking businesses with expert IT consulting, scalable cloud infrastructure, and innovative digital strategies.
            </motion.p>
            <div className="flex flex-wrap gap-6">
              <MagneticButton>
                <Link
                  href="/services"
                  className="btn-primary text-lg px-10 py-5 group shadow-xl shadow-primary-900/40 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-secondary !text-white !border-white/30 hover:!border-white hover:!bg-white/10 text-lg px-10 py-5 transition-all"
                >
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-20 pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative will-change-transform"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="w-[600px] h-[600px] border-[60px] border-primary-600/30 rounded-full border-dashed will-change-transform"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-[400px] h-[400px] m-auto border-[30px] border-white/20 rounded-full border-dotted will-change-transform"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)] animate-pulse"></div>
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="text-center group will-change-transform"
            >
              <div className="text-stat-number text-white mb-4 transition-transform duration-500 group-hover:scale-110 will-change-transform">
                <span className="text-primary-500">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-label !text-gray-400">{stat.label}</div>
              <div className="w-12 h-1 bg-primary-600/30 mx-auto mt-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary-600"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-off-white overflow-hidden" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative will-change-transform"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white will-change-transform"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="/images/about/who-we-are.png"
                alt="Team Collaboration"
                loading="lazy"
                className="w-full h-full object-cover will-change-transform"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 bg-white p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hidden md:block border border-gray-100 backdrop-blur-xl bg-white/90 z-20 will-change-transform"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/30">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-secondary tracking-tight">Top Rated</h4>
                  <p className="text-label !text-gray-400">Leading Agency 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="will-change-transform"
            >
              <span className="text-label flex items-center gap-2">
                <div className="w-10 h-0.5 bg-primary-600"></div> Core Values
              </span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerTextContainer}
                className="text-section-title mt-6 text-secondary"
              >
                {"Why Industry Leaders Trust Net-MD".split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>

            <div className="space-y-10">
              {[
                { icon: TrendingUp, title: "Data-Driven Approach", desc: "Every solution we build is backed by rigorous analysis and measurable performance metrics." },
                { icon: Shield, title: "Uncompromising Security", desc: "We integrate enterprise-grade security protocols into every layer of your technology stack." },
                { icon: Zap, title: "Agile Innovation", desc: "Our team stays at the forefront of emerging technologies to keep your business ahead of the curve." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-8 group will-change-transform"
                >
                  <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 border border-gray-100 shrink-0 group-hover:rotate-6 will-change-transform">
                    <item.icon size={28} />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-card-title mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h4>
                    <p className="text-card-description">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white" id="services">
        <div className="text-center mb-24 px-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 bg-primary-50 text-label rounded-full border border-primary-100 inline-block mb-6"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerTextContainer}
            className="text-section-title text-secondary"
          >
            {"Our Specialized Services".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-paragraph mt-8 mx-auto"
          >
            We deliver end-to-end technology solutions designed to solve complex business problems and drive measurable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="will-change-transform"
            >
              <TiltCard className="h-full">
                <ServiceCard {...service} />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white" id="process">
        <div ref={processRef} className="container-custom mx-auto">
          <div className="text-center mb-24 px-6">
            <span className="text-label mb-4 block">Our Workflow</span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerTextContainer}
              className="text-section-title text-secondary"
            >
              {"How We Deliver Results".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="relative px-6 max-w-6xl mx-auto">
            <div className="absolute top-12 left-0 w-full h-1 bg-gray-100 hidden lg:block overflow-hidden rounded-full z-0">
              <motion.div
                style={{ scaleX: processProgress, originX: 0 }}
                className="w-full h-full bg-primary-600 shadow-[0_0_15px_rgba(34,197,94,0.5)] will-change-transform"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  className="text-center group will-change-transform"
                >
                  <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl border-4 border-gray-50 flex items-center justify-center text-3xl font-bold text-primary-600 mx-auto mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[12deg] group-hover:scale-110 will-change-transform">
                    {i + 1}
                  </div>
                  <h3 className="text-card-title mb-5 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                  <p className="text-card-description">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section className="bg-secondary text-white overflow-hidden relative" id="industries">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(34,197,94,0.15),transparent_70%)] will-change-transform"
          />
        </div>

        <div className="text-center mb-24 px-6 relative z-10">
          <span className="text-label !text-primary-400 mb-4 block">Sector Expertise</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerTextContainer}
            className="text-section-title text-white"
          >
            {"Industries We Empower".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 relative z-10">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white/5 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] will-change-transform"
            >
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.15 }}
                className="w-24 h-24 bg-primary-600/20 rounded-[2rem] flex items-center justify-center text-primary-400 mx-auto mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-xl will-change-transform"
              >
                <industry.icon size={44} />
              </motion.div>
              <h3 className="text-2xl font-bold tracking-tight text-white">{industry.name}</h3>
              <div className="w-12 h-1 bg-primary-600 mx-auto mt-8 opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white overflow-hidden" id="testimonials">
        <div className="text-center mb-24 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-label"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerTextContainer}
            className="text-section-title mt-6 text-secondary"
          >
            {"Trusted by Innovative Teams".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div 
          className="relative px-6 max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden min-h-[450px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -100 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full will-change-transform"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <TestimonialCard {...testimonials[activeTestimonial]} />
                  <div className="hidden md:block">
                    <TestimonialCard {...testimonials[(activeTestimonial + 1) % testimonials.length]} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-16">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${activeTestimonial === i ? 'w-12 bg-primary-600 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'}`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <MagneticButton>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary-600 hover:text-white transition-all shadow-xl active:scale-90"
                >
                  <ChevronLeft size={28} />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary-600 hover:text-white transition-all shadow-xl active:scale-90"
                >
                  <ChevronRight size={28} />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Section */}
      <Section className="bg-off-white" id="blog">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label"
            >
              Industry Insights
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerTextContainer}
              className="text-section-title mt-6 text-secondary"
            >
              {"Latest Tech Trends".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          <MagneticButton>
            <Link 
              href="/blog" 
              className="bg-white text-secondary px-8 py-4 rounded-2xl text-label flex items-center gap-3 hover:bg-primary-600 hover:text-white transition-all shadow-lg group"
            >
              Explore Knowledge Base <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="will-change-transform"
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <section className="py-24 bg-white px-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
            {techLogos.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ opacity: 1, scale: 1.1, y: -5 }}
                className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default will-change-transform"
              >
                <tech.icon size={28} className="text-secondary" />
                <span className="text-label !text-secondary">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-40 relative overflow-hidden px-6">
        <motion.div 
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 will-change-transform"
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto will-change-transform"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerTextContainer}
              className="text-hero text-white mb-10"
            >
              {"Ready to Accelerate Your Digital Transformation?".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-paragraph !text-gray-400 mb-16 mx-auto"
            >
              Join the ranks of high-performing companies that trust Net-MD for their mission-critical technology needs.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-8">
              <MagneticButton>
                <Link 
                  href="/contact" 
                  className="bg-primary-600 text-white px-16 py-7 rounded-3xl font-bold text-xl hover:bg-white hover:text-secondary transition-all duration-500 shadow-2xl shadow-primary-600/30 inline-flex items-center gap-4 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your Journey Today</span>
                  <Rocket size={28} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-white/20 skew-x-12 will-change-transform"
                  />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Home;
