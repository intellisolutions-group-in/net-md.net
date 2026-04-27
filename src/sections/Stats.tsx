"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "IT Professionals", value: "500+" },
  { label: "Successful Projects", value: "250+" },
  { label: "Global Presence", value: "10+" },
  { label: "Expert Consultants", value: "50+" },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-[#09090b] border-y border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500">
              {stat.value}
            </div>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
