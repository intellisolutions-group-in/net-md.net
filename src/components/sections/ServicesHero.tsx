"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { staggerTextContainer, staggerTextItem, fadeUp } from '@/utils/animations';

export const ServicesHero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-list');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/services_hero.png"
          alt="Services Background"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary-900/20"></div>
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
              Our Services
            </motion.span>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              {"Digital Solutions Designed to Grow Your Business".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            >
              We offer web development, SEO, and digital marketing services to help your business succeed online.
            </motion.p>

            {/* Buttons removed per request */}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
    </section>
  );
};
