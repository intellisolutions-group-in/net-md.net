"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  stagger?: boolean;
  once?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  direction = "up",
  className,
  stagger = false,
  once = true,
}: FadeInProps) => {
  const directionOffset = direction === "up" ? y : direction === "down" ? -y : 0;
  const xOffset = direction === "left" ? y : direction === "right" ? -y : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directionOffset,
        x: xOffset
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1], // ease-in-out premium feel
        staggerChildren: stagger ? 0.1 : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInItem = ({ children, y = 20, className }: { children: React.ReactNode, y?: number, className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};
