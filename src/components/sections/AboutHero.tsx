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
    <section className="hero bg-secondary">
      {/* Background with overlay - matching Home Hero style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about/about_hero.jpg"
          alt="About Net-MD Background"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary-900/20"></div>
      </div>

      {/* Floating Abstract Element - same style as Home Hero */}
      <div className="absolute right-[-10%] top-[-10%] w-1/2 h-full hidden lg:flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[80px] border-primary-500 rounded-full border-dashed" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              About Us
            </motion.span>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              {"We Build Digital Solutions That Drive Growth".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              At Net-MD, we help businesses grow through innovative web development, SEO, and digital marketing strategies.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="btn-primary text-lg px-10 py-5 group shadow-xl shadow-primary-900/20"
              >
                Get Consultation <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>

              <button
                onClick={scrollToContent}
                className="btn-secondary !text-white !border-white/30 hover:!border-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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