import React from "react";
import { cn } from "@/utils/cn";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeading = ({
  label,
  title,
  subtitle,
  align = "center",
  centered,
  className,
  dark = false,
}: SectionHeadingProps) => {
  const effectiveAlign = centered ? "center" : align;

  return (
    <div
      className={cn(
        "mb-16 space-y-6",
        effectiveAlign === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      {label && (
        <FadeIn>
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            {label}
          </span>
        </FadeIn>
      )}
      
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight",
          dark ? "text-white" : "text-[#111111]"
        )}
      >
        <AnimatedText text={title} />
      </h2>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "text-base md:text-lg font-medium leading-relaxed max-w-2xl",
              effectiveAlign === "center" ? "mx-auto" : "",
              dark ? "text-zinc-400" : "text-[#555555]"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
};
