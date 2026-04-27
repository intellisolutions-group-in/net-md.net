"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextMaskProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextMask = ({ children, className, delay = 0 }: TextMaskProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
