"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

export const ServicesHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="/images/services/services_hero.png"
          alt="Services Background"
          className="w-full h-full object-cover brightness-[0.2]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/80 to-secondary"></div>
      </motion.div>

      {/* Mesh Gradient Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-600/20 blur-[120px] rounded-full will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 blur-[120px] rounded-full will-change-transform"
        />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl">
          <motion.div style={{ opacity }} className="text-left will-change-transform">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-label !text-primary-400 mb-4 block"
            >
              Our Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-white mb-8"
            >
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">IT Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-paragraph !text-gray-400/80 mb-12 !max-w-2xl"
            >
              Empowering your digital future with tailored consulting, enterprise cloud solutions, and performance-driven development strategies.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Divider */}
      <motion.div 
        animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent will-change-transform"
      ></motion.div>
    </section>
  );
};

export default ServicesHero;
