"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  },
};

export const AnimatedText = ({ text, className, once = true, delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1">
          <motion.span
            variants={defaultVariants}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
