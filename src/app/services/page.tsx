"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { TextMask } from "@/components/TextMask";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ReactNode> = {
  "cms-development": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  "website-revamp-performance": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  "product-design-prototyping": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
  "saas-application-development": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  "digital-marketing": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  "stock-market-insights": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
};

const categories = [
  {
    name: "Engineering & Development",
    services: ["saas-application-development", "cms-development", "website-revamp-performance"],
  },
  {
    name: "Design & Strategy",
    services: ["product-design-prototyping"],
  },
  {
    name: "Growth & Intelligence",
    services: ["digital-marketing", "stock-market-insights"],
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-white flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] animate-pulse-slow" />
        </div>
        
        <div className="container relative z-10 mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] mb-12 block">
              Our Capabilities
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] uppercase tracking-tight mb-12">
              <AnimatedText text="Proven" delay={0.2} /> <br />
              <span className="text-primary italic">
                <AnimatedText text="Excellence" delay={0.4} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="text-lg md:text-xl text-[#555555] leading-loose mb-12 max-w-2xl mx-auto font-medium">
              We deliver industrial-grade IT solutions designed to solve your most 
              complex digital challenges.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Categorized Services */}
      {categories.map((cat, catIdx) => (
        <section key={cat.name} className="py-32 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="container mx-auto">
            <div className="max-w-4xl mb-24">
              <FadeIn>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] mb-8 block">
                  Category 0{catIdx + 1}
                </span>
                <TextMask>
                  <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight">
                    {cat.name}
                  </h2>
                </TextMask>
              </FadeIn>
            </div>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {cat.services.map((slug) => {
                const service = servicesData.find((s) => s.slug === slug);
                if (!service) return null;
                return (
                  <FadeInItem key={service.slug}>
                    <div className="p-12 rounded-[3rem] bg-white border border-zinc-200 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-500 group flex flex-col h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{iconMap[service.slug]}</svg>
                      </div>
                      <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight mb-8 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base text-[#555555] leading-loose font-medium mb-12 flex-grow">
                        {service.intro}
                      </p>
                      
                      <div className="space-y-4 mb-12">
                        {service.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary transition-colors" />
                            <span className="text-sm font-bold text-[#777777] uppercase tracking-widest">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/services/${service.slug}`} className="mt-auto">
                        <Button 
                          variant="outline" 
                          className="w-full h-14 text-xs font-bold uppercase tracking-[0.2em] rounded-full border-zinc-200 text-[#111111] hover:bg-[#111111] hover:text-white transition-all"
                        >
                          Explore Depth
                        </Button>
                      </Link>
                    </div>
                  </FadeInItem>
                );
              })}
            </FadeInStagger>
          </div>
        </section>
      ))}

      {/* 3. Delivery Process */}
      <section className="py-48 bg-white px-6 border-t border-zinc-200">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-32">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#777777] mb-8 block">
                The Method
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-12">
                How We <span className="text-primary italic">Deliver</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-zinc-200 -z-0" />
            
            {[
              { title: "Audit", desc: "Rigorous analysis of existing systems." },
              { title: "Design", desc: "Architecting high-resilience structures." },
              { title: "Deploy", desc: "Precision engineering and integration." },
              { title: "Scale", desc: "Automated growth and performance." },
            ].map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.2}>
                <div className="relative group bg-white z-10 px-4">
                  <div className="w-24 h-24 bg-zinc-50 border border-zinc-200 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500">
                    <span className="text-xl font-black text-zinc-300 group-hover:text-primary transition-colors">0{i+1}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-[#111111] uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-[#555555] text-base leading-loose max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Section */}
      <section className="py-32 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto">
          <FadeInStagger className="flex flex-wrap justify-center items-center gap-16 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <FadeInItem key={i}>
                <span className="text-base font-black text-[#111111] uppercase tracking-[0.5em]">Global_Partner_0{i}</span>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-64 px-6 bg-white relative overflow-hidden border-t border-zinc-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] animate-pulse-slow" />
        
        <div className="container relative z-10 mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] uppercase tracking-tight mb-16">
              <AnimatedText text="Build Your" delay={0.2} /> <br />
              <span className="text-primary italic">
                <AnimatedText text="Advantage" delay={0.4} />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group px-10 h-16 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 bg-primary text-white border-none"
                >
                  Start Discovery
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
