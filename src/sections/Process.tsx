"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Deep Discovery",
    description: "We analyze your existing architecture and business workflows to identify high-impact opportunities for digital evolution.",
  },
  {
    number: "02",
    title: "Strategic Design",
    description: "Our architects craft a bespoke technology roadmap that balances immediate efficiency with long-term scalability.",
  },
  {
    number: "03",
    title: "Agile Engineering",
    description: "We implement zero-trust security and high-performance code, building with a focus on resilience and speed.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Continuous refinement and proactive scaling ensure your infrastructure evolves alongside your business growth.",
  },
];

export const Process = () => {
  return (
    <section className="py-48 bg-zinc-50 px-6 overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-32">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
              The Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-12">
              Our Path to <br />
              <span className="text-primary italic">Engineering Success</span>
            </h2>
          </FadeIn>
        </div>

        <div className="relative space-y-24">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[1px] bg-zinc-200 hidden md:block" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative pl-0 md:pl-24">
              <FadeIn delay={index * 0.2}>
                <div className="flex flex-col md:flex-row md:items-center gap-12 group">
                  {/* Step Number Dot */}
                  <div className="hidden md:flex absolute left-0 w-20 h-20 bg-zinc-50 border border-zinc-200 rounded-full items-center justify-center z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500">
                    <span className="text-xl font-black text-[#111111]/20 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight mb-6 group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
