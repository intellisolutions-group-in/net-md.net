"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { staggerTextContainer, staggerTextItem } from '../../utils/animations';

export const AboutHero = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('our-story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero relative min-h-screen flex items-center pt-20 bg-secondary overflow-hidden">
      {/* Background with overlay - matching Home Hero style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about/about_hero.jpg"
          alt="About Net-MD Background"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent"></div>
      </div>

      {/* Floating Abstract Element - same style as Home Hero */}
      <div className="absolute right-[-10%] top-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-10 pointer-events-none z-0">
        <div className="w-[800px] h-[800px] border-[80px] border-primary-500 rounded-full border-dashed" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-label !text-primary-400 mb-4 block"
            >
              Excellence in Innovation
            </motion.span>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerTextContainer}
              className="text-hero text-white mb-8"
            >
              {"We Build Digital Solutions That Drive Growth".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-paragraph !text-gray-400/80 mb-12 !max-w-2xl">
              At Net-MD, we empower forward-thinking businesses through innovative web development, scalable cloud solutions, and performance-driven digital strategies.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="btn-primary text-lg px-10 py-5 group shadow-xl shadow-primary-900/20"
              >
                Get Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={scrollToContent}
                className="btn-secondary !text-white !border-white/30 hover:!border-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
    </section>
  );
};

export default AboutHero;