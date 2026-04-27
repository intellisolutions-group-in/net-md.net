"use client";

import React from "react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Refined Minimal Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Very Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`, backgroundSize: '60px 60px' }} />

      <div className="container relative z-20 mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <FadeIn delay={0}>
            <div className="inline-block mb-10">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-primary/60 bg-primary/5 px-6 py-2.5 rounded-full border border-primary/10">
                Premium IT Solutions
              </span>
            </div>
          </FadeIn>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] mb-8 tracking-tight uppercase">
            <AnimatedText text="Transforming" delay={0.2} />
            <br />
            <AnimatedText text="Digital" className="text-primary italic" delay={0.4} />
            <br />
            <AnimatedText text="Realities" delay={0.6} />
          </h1>

          <FadeIn delay={1.2}>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              Net-MD scales forward-thinking businesses with expert consulting
              and innovative digital strategies.
            </p>
          </FadeIn>

          <FadeIn delay={1.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/services">
                <Button
                  size="lg"
                  className="group px-10 h-16 text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition-all hover:scale-105 active:scale-95"
                >
                  Explore Services
                  <svg className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 h-16 text-xs font-bold uppercase tracking-wider rounded-full border border-zinc-200 text-[#555555] hover:text-[#111111] hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <FadeIn delay={2.5} duration={1}>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
};
