"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-64 px-6 bg-white relative overflow-hidden border-t border-zinc-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse-slow" />

      <div className="container relative z-10 mx-auto text-center">
        <FadeIn>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-12 block">
            The Next Step
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] leading-[1.1] uppercase tracking-tight mb-16">
            <AnimatedText text="Ready to" delay={0.2} /> <br />
            <span className="text-primary italic">
              <AnimatedText text="Elevate?" delay={0.4} />
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="max-w-2xl mx-auto mb-20">
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-medium">
              Join the architects of the future. Let's build something that lasts.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={1.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="group px-10 h-16 text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95 bg-primary text-white border-none"
              >
                Start Your Journey
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </section>
  );
};
