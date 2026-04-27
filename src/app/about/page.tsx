"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { ScrollRevealTypography } from "@/components/ScrollRevealTypography";
import { TextMask } from "@/components/TextMask";
import { Button } from "@/components/ui/Button";

const milestones = [
  { year: "2012", title: "The Foundation", desc: "Established in Hyderabad by a group of engineers with a mission to simplify digital complexity for global enterprises." },
  { year: "2016", title: "Global Reach", desc: "Expanded operations to the European and North American markets, partnering with Fortune 500 organizations." },
  { year: "2020", title: "R&D Initiative", desc: "Launched our state-of-the-art Innovation Lab in Cyber City, focusing on AI and zero-trust cloud architectures." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as a premier strategic technology partner for large-scale digital transformations." },
];

const team = [
  { name: "Aarav Sharma", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
  { name: "Priya Patel", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  { name: "Rohan Mehta", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { name: "Ishaan Malhotra", role: "Lead Solution Architect", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Sanya Gupta", role: "Head of Digital Strategy", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Kabir Singh", role: "VP of Product Development", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
];

const AboutPage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-white flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[140px] animate-pulse-slow" />
        </div>
        
        <div className="container relative z-10 mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8 block">
              Our Identity
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] uppercase tracking-tight mb-12">
              <AnimatedText text="Global Tech" delay={0.2} /> <br />
              <span className="text-primary italic">
                <AnimatedText text="Indian Heart" delay={0.4} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              A premier technology collective dedicated to building high-performance 
              digital infrastructures for the next generation of global innovators.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Who We Are (Split Layout) */}
      <section className="py-64 px-6 border-t border-zinc-100 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <FadeIn>
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group">
                  <motion.div
                    whileInView={{ scale: 1.1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/images/who-we-are.png"
                      alt="Net-MD Culture"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            <div>
              <FadeIn>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
                  The Story
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-16">
                  Founded in <br />
                  <span className="text-primary italic">Hyderabad</span>
                </h2>
              </FadeIn>
              
              <div className="space-y-12">
                <FadeIn delay={0.2}>
                  <p className="text-lg md:text-xl text-[#666666] leading-relaxed font-medium">
                    Net-MD began as a response to the growing complexity of enterprise systems. 
                    We recognized that businesses didn't just need more code—they needed 
                    better architecture and strategic foresight.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-base text-[#555555] leading-relaxed font-medium">
                    From our headquarters in Cyber City, we coordinate complex digital 
                    transformations for global clients who prioritize reliability and 
                    uncompromising engineering excellence.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-64 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn direction="right">
              <div className="p-16 rounded-[4rem] bg-zinc-50 border border-zinc-100 group hover:border-primary/20 transition-all duration-500 h-full relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <TextMask>
                    <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight mb-6">Our Mission</h3>
                  </TextMask>
                  <p className="text-base text-[#666666] leading-relaxed font-medium">
                    To empower businesses with scalable technology that drives measurable impact. 
                    We convert operational challenges into competitive advantages through precision 
                    engineering and strategic innovation.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="p-16 rounded-[4rem] bg-primary p-12 text-white h-full relative overflow-hidden group shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-12 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <TextMask>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Our Vision</h3>
                  </TextMask>
                  <p className="text-base text-white/80 leading-relaxed font-medium">
                    To be the global benchmark for digital excellence. We envision a future 
                    where Net-MD is the primary architect of digital transformation, recognized 
                    worldwide for bridging the gap between human and machine potential.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Journey Timeline */}
      <section ref={timelineRef} className="py-64 px-6 bg-white border-t border-zinc-100 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-48 text-center mx-auto">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8 block">
                History
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight">
                Our <span className="text-primary italic">Journey</span>
              </h2>
            </FadeIn>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 -translate-x-1/2">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="w-full h-full bg-primary origin-top shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              />
            </div>

            <div className="space-y-48">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 text-left ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                      <span className="text-3xl font-black text-primary italic mb-4 block">{m.year}</span>
                      <h4 className="text-2xl font-black text-[#111111] uppercase tracking-tight mb-4">{m.title}</h4>
                      <p className="text-[#666666] text-base leading-relaxed max-w-md ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}">{m.desc}</p>
                    </FadeIn>
                  </div>
                  <div className="w-12 h-12 bg-white border-4 border-primary rounded-full z-10 absolute left-[30px] md:left-1/2 -translate-x-1/2 shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values Grid */}
      <section className="py-64 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-48">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
                Foundations
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight">
                Core <br />
                <span className="text-primary italic">Values</span>
              </h2>
            </FadeIn>
          </div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "Every line of code is measured and tested for mechanical resilience." },
              { title: "Integrity", desc: "Honest assessments and ethical engineering at every layer." },
              { title: "Innovation", desc: "Challenging the status quo with emerging global technologies." },
              { title: "Agility", desc: "Pivoting without friction in a rapidly evolving tech landscape." },
              { title: "Scale", desc: "Architecting foundations that grow from zero to infinity." },
              { title: "People-First", desc: "Technology should ultimately serve and empower the human experience." },
            ].map((v) => (
              <FadeInItem key={v.title}>
                <div className="p-12 rounded-[3.5rem] bg-zinc-50 border border-zinc-100 hover:border-primary/20 hover:translate-y-[-10px] transition-all duration-500 group h-full">
                  <h4 className="text-xl md:text-2xl font-black text-[#111111] uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">{v.title}</h4>
                  <p className="text-[#666666] text-base leading-relaxed font-medium">{v.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 6. Meet The Team (Indian Representation) */}
      <section className="py-64 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-48 text-center mx-auto">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8 block">
                The Collective
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight">
                Our <span className="text-primary italic">Leadership</span>
              </h2>
            </FadeIn>
          </div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            {team.map((member) => (
              <FadeInItem key={member.name}>
                <div className="group h-full flex flex-col">
                  <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden mb-12 shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-auto px-4">
                    <h4 className="text-2xl font-black text-[#111111] uppercase tracking-tight mb-4">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>


      {/* 8. Closing Statement */}
      <section className="py-64 bg-white px-6 border-t border-zinc-100">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1.5}>
              <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight leading-[1.2] mb-16">
                "Our excellence is defined not by the complexity we build, but by the 
                <span className="text-primary italic"> clarity </span> we create."
              </h2>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="w-24 h-[1px] bg-primary/40 mx-auto" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-64 px-6 bg-white relative overflow-hidden border-t border-zinc-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] animate-pulse-slow" />
        
        <div className="container relative z-10 mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] uppercase tracking-tight mb-16">
              <AnimatedText text="Partner" delay={0.2} /> <br />
              <span className="text-primary italic">
                <AnimatedText text="With Us" delay={0.4} />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group px-10 h-16 text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 bg-primary text-white border-none"
                >
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
