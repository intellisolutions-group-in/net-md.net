"use client";

import React from "react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO at InnovateX",
    content: "Net-MD transformed our legacy infrastructure into a high-performance cloud environment. Their expertise is unmatched.",
  },
  {
    name: "David Chen",
    role: "Founder, Peak Systems",
    content: "The strategy provided by Net-MD helped us scale globally within months. Exceptional engineering partnership.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Digital, RetailPro",
    content: "Seamless integration and expert guidance. They truly understand the nuances of modern digital transformation.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-48 bg-white px-6 overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-32">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-8 block">
              Voices
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-[1.2] uppercase tracking-tight mb-12">
              Trusted by <br />
              <span className="text-primary italic">Industry Leaders</span>
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <FadeInItem key={t.name}>
              <div className="flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-[1px] bg-primary/40 mb-12 group-hover:w-24 transition-all duration-500" />
                  <p className="text-lg md:text-xl text-[#111111] font-medium leading-relaxed mb-12 italic">
                    "{t.content}"
                  </p>
                </div>
                <div>
                  <h5 className="text-base font-black text-[#111111] uppercase tracking-wider mb-2">{t.name}</h5>
                  <p className="text-xs font-bold text-[#777777] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
