"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeInStagger, FadeInItem } from "@/components/FadeIn";

const solutions = [
  {
    title: "SaaS Expertise",
    description: "Deep technical knowledge in building multi-tenant, scalable, and secure software-as-a-service platforms.",
    color: "bg-blue-500",
  },
  {
    title: "Performance Optimization",
    description: "Expertise in Core Web Vitals, speed tuning, and infrastructure efficiency for ultra-fast digital experiences.",
    color: "bg-emerald-500",
  },
  {
    title: "Marketing + Tech Integration",
    description: "Bridging the gap between engineering and marketing with data-driven stacks that drive actual revenue.",
    color: "bg-purple-500",
  },
];

export const FeaturedSolutions = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Featured Solutions"
          title="Strategic Tech Advantages"
          subtitle="We provide high-impact solutions that solve core business problems and accelerate digital growth."
        />

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {solutions.map((sol, index) => (
            <FadeInItem key={sol.title}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-10 h-full rounded-[2.5rem] border border-zinc-200/50 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className={`w-12 h-1.5 ${sol.color} rounded-full mb-8 group-hover:w-20 transition-all duration-500`} />
                <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {sol.description}
                </p>
                
                <div className="mt-10 pt-8 border-t border-zinc-50">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 group-hover:text-primary transition-colors">
                    0{index + 1} / Strategy
                  </span>
                </div>
              </motion.div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
