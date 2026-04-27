"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface ScrollRevealTypographyProps {
  text: string;
  className?: string;
}

export const ScrollRevealTypography = ({ text, className }: ScrollRevealTypographyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative py-32 px-6 flex items-center justify-center min-h-[50vh]", className)}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
          {words.map((word, wordIndex) => {
            const start = wordIndex / words.length;
            const end = (wordIndex + 1) / words.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1],
              [0.15, 1]
            );

            const color = useTransform(
              scrollYProgress,
              [start, start + 0.1],
              ["#3f3f46", "#10b981"]
            );

            const y = useTransform(
              scrollYProgress,
              [start, start + 0.1],
              [20, 0]
            );

            return (
              <motion.span
                key={wordIndex}
                style={{ opacity, color, y }}
                className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
