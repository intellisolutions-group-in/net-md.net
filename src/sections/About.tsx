"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

export const About = () => {
  return (
    <section className="py-48 bg-zinc-50 overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <FadeIn>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <motion.div
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/who-we-are.png"
                    alt="Who We Are"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </motion.div>

                {/* Floating Stat Card */}
                <div className="absolute bottom-12 right-12 bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl flex flex-col gap-2 max-w-[200px]">
                  <span className="text-4xl font-black text-zinc-900 tracking-tighter">12+</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 leading-tight">
                    Years of Engineering Excellence
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Background Accent */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-12">
                We bridge the gap <br />
                <span className="text-primary italic">Between Vision</span> <br />
                And Reality
              </h2>
            </FadeIn>

            <div className="space-y-12">
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-medium">
                  Net-MD is a boutique IT consultancy focused on high-performance digital solutions.
                  We don't just build software; we engineer competitive advantages.
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <FadeIn delay={0.4}>
                  <div>
                    <h4 className="text-base font-black text-[#111111] uppercase tracking-wider mb-4">Integrity</h4>
                    <p className="text-[#555555] leading-relaxed">
                      Transparent communication and ethical engineering at every step of the process.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div>
                    <h4 className="text-base font-black text-[#111111] uppercase tracking-wider mb-4">Innovation</h4>
                    <p className="text-[#555555] leading-relaxed">
                      Leveraging cutting-edge technologies to solve complex architectural challenges.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.8}>
                <div className="pt-8">
                  <div className="w-24 h-[1px] bg-primary/20 mb-8" />
                  <p className="text-[#777777] font-bold uppercase tracking-widest text-xs">
                    Net-MD &copy; 2024
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
