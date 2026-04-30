"use client";

import { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Section, 
  TeamCard, 
  TiltCardWrapper as TiltCard, 
  MagneticButtonWrapper as MagneticButton 
} from '@/components/Cards';
import { Target, Eye, Award, CheckCircle2, Users, Globe, TrendingUp, Shield, Zap, ArrowRight, Sparkles, Rocket, Search, Code, Cpu } from 'lucide-react';
import Link from 'next/link';
import { AboutHero } from '@/components/sections/AboutHero';
import { staggerTextContainer, staggerTextItem } from '@/utils/animations';

// --- Optimized Helper Components ---

const CountUp = memo(({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[,+]/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = Math.ceil(target / totalSteps);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
});
CountUp.displayName = "CountUp";

const About = () => {
  const team = [
    { name: "Arjun Sharma", role: "CEO & Founder", image: "/images/team/ceo.png" },
    { name: "Priya Patel", role: "Chief Technology Officer", image: "/images/team/cto.png" },
    { name: "Rohan Gupta", role: "Head of Marketing", image: "/images/team/marketing.png" },
    { name: "Ananya Iyer", role: "Lead Systems Architect", image: "/images/team/architect.png" },
  ];

  const storyRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const storyScale = useTransform(storyScroll, [0, 0.5], [1.1, 1]);
  const storyOpacity = useTransform(storyScroll, [0, 0.3], [0, 1]);

  return (
    <div className="overflow-x-hidden selection:bg-primary-600 selection:text-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
      `}</style>

      <AboutHero />

      {/* Our Story Section */}
      <Section className="bg-white overflow-hidden" id="our-story">
        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="will-change-transform"
          >
            <span className="text-label">Our Story</span>
            <div className="overflow-hidden mt-4 mb-8">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerTextContainer}
                className="text-section-title mt-4 mb-8 text-secondary"
              >
                {"Pioneering Digital Excellence Since 2012".split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
            <p className="text-paragraph mb-6">
              Founded in a small workspace with a big vision, Net-MD has grown into a leading IT solutions provider. We believe that technology should be an enabler, not a barrier.
            </p>
            <p className="text-paragraph mb-10">
              Our team consists of industry veterans and young innovators who share a common goal: to deliver world-class technology services that drive real business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Certified Specialists",
                "Scalable Solutions",
                "Customer-Centric",
                "Award Winning Agency"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-4 group will-change-transform"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-secondary group-hover:text-primary-600 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              style={{ scale: storyScale, opacity: storyOpacity }}
              className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 will-change-transform"
            >
              <img
                src="/images/about/our_story.jpg"
                alt="Our Story"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-primary-600 text-white p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block cursor-default group overflow-hidden will-change-transform"
            >
              <motion.div 
                className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"
              />
              <p className="text-6xl font-bold font-display mb-2">12+</p>
              <p className="text-label !text-white !opacity-80">Years of Innovation</p>
            </motion.div>

            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl -z-0 opacity-50 animate-pulse"></div>
          </div>
        </div>
      </Section>
      
      {/* Methodology Section */}
      <Section className="bg-secondary text-white relative overflow-hidden py-32">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-accent to-primary-600"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label !text-primary-400"
            >
              How We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-section-title mt-4"
            >
              The Net-MD <span className="text-primary-500">Methodology</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Discovery", desc: "We dive deep into your business objectives, current infrastructure, and pain points to define a clear roadmap.", step: "01" },
              { icon: Target, title: "Strategy", desc: "Our architects design scalable, secure, and future-proof digital strategies tailored to your specific goals.", step: "02" },
              { icon: Code, title: "Execution", desc: "Our expert engineering teams bring the vision to life using cutting-edge technology and agile best practices.", step: "03" },
              { icon: Rocket, title: "Optimization", desc: "We continuously monitor, maintain, and evolve your solutions to ensure peak performance and security.", step: "04" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative will-change-transform"
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] h-full transition-all duration-500 hover:bg-white/10 hover:border-primary-500/50 hover:-translate-y-2">
                  <div className="text-primary-500 font-display font-bold text-6xl opacity-10 absolute top-6 right-8 group-hover:opacity-20 transition-opacity">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary-600/20 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-card-title mb-4 !text-white">{item.title}</h3>
                  <p className="text-card-description !text-gray-400 !opacity-80">
                    {item.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/20 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-off-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <TiltCard className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-primary-200 group cursor-default relative overflow-hidden h-full will-change-transform"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/5 blur-3xl group-hover:bg-primary-500/10 transition-colors duration-500"></div>
              <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                <Target size={40} />
              </div>
               <h3 className="text-card-title mb-6">Our Mission</h3>
              <p className="text-card-description mb-8">
                To empower organizations by delivering innovative and reliable IT solutions that simplify complex challenges and foster sustainable growth in a digital-first world.
              </p>
              <div className="flex items-center gap-2 text-primary-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Direct Impact</span>
                <ArrowRight size={18} />
              </div>
            </motion.div>
          </TiltCard>

          <TiltCard className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-accent/10 group cursor-default relative overflow-hidden h-full will-change-transform"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500"></div>
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                <Eye size={40} />
              </div>
               <h3 className="text-card-title mb-6">Our Vision</h3>
              <p className="text-card-description mb-8">
                To be the global benchmark for digital transformation, recognized for our commitment to excellence, integrity, and the success of our clients.
              </p>
              <div className="flex items-center gap-2 text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Future Focused</span>
                <ArrowRight size={18} />
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <div className="text-center mb-20 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-50 text-label mb-4"
          >
            The Minds Behind Net-MD
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerTextContainer}
            className="text-section-title text-secondary"
          >
            {"Meet Our Leadership Team".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-4">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="will-change-transform"
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Achievements / Stats Section */}
      <Section className="bg-secondary text-white overflow-hidden relative py-32">
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-600 rounded-full blur-[120px] will-change-transform"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center px-6 relative z-10">
          {[
            { icon: Award, label: "Awards Won", value: "24", suffix: "" },
            { icon: Users, label: "Happy Clients", value: "450", suffix: "+" },
            { icon: Globe, label: "Countries Served", value: "15", suffix: "" },
            { icon: CheckCircle2, label: "Projects Completed", value: "1200", suffix: "+" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group will-change-transform"
            >
              <div className="w-20 h-20 bg-white/5 text-primary-400 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[15deg]">
                <item.icon size={32} />
              </div>
              <div className="text-stat-number mb-4">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <p className="text-label !text-gray-400">{item.label}</p>
              
              <div className="mt-6 w-12 h-1 bg-primary-600/20 mx-auto rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-primary-600 shadow-[0_0_10px_#22c55e] will-change-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
