"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import Link from "next/link";
import { cn } from "@/utils/cn";

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and resilient cloud ecosystems designed for modern growth.",
    number: "01",
  },
  {
    title: "Digital Strategy",
    description: "Expert consulting to navigate the complexities of digital transformation.",
    number: "02",
  },
  {
    title: "Product Design",
    description: "Human-centric interfaces that bridge the gap between vision and reality.",
    number: "03",
  },
  {
    title: "SaaS Development",
    description: "Robust application architectures built with speed and security at the core.",
    number: "04",
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows that redefine productivity and operational efficiency.",
    number: "05",
  },
  {
    title: "Managed Security",
    description: "Zero-trust security frameworks to protect your most valuable digital assets.",
    number: "06",
  },
];

export const Expertise = () => {
  return (
    <section className="py-48 bg-white px-6 overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-32">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-12">
              Engineering the <br />
              <span className="text-primary italic">Next Generation</span>
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-200">
          {services.map((service, index) => (
            <FadeInItem key={service.title}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                className="group relative p-12 border-r border-b border-zinc-200 h-[400px] flex flex-col justify-between transition-colors duration-500"
              >
                <div>
                  <span className="text-2xl font-black text-[#111111]/5 mb-8 block group-hover:text-primary/20 transition-colors">
                    {service.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-[#111111] mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#555555] text-base leading-relaxed max-w-[280px]">
                    {service.description}
                  </p>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    Explore Service
                    <div className="w-12 h-[1px] bg-primary" />
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-primary/0 group-hover:w-8 group-hover:h-8 group-hover:border-primary/40 transition-all duration-700" />
              </motion.div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
