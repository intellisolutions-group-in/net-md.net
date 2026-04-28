"use client";

import { motion } from 'framer-motion';
import { staggerTextContainer, staggerTextItem, fadeUp } from '@/utils/animations';

export const BlogHero = () => {
  return (
    <section className="hero bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/blog/blog_hero.png"
          alt="Blog Background"
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary-900/20"></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] border-[40px] border-primary-500 rounded-full border-dashed" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Insights & Articles
          </motion.span>

          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
          >
            {"Latest Trends in Technology and Innovation".split(" ").map((word, i) => (
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
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Stay updated with the latest trends in technology, digital marketing, and business innovation. Our blog provides deep insights into the digital landscape.
          </motion.p>
          
          {/* Optional: Simple Search or Categories could go here */}
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
    </section>
  );
};
