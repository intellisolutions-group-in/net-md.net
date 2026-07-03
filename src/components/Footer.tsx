"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden relative">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary-600 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-primary-900 blur-[120px] rounded-full"
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Animated Top Line */}
      <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent z-10"
      />

      <div className="container-custom mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-10"
          >
            <Link href="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center"
              >
                <Image
                  src="/images/Logo-02.png"
                  alt="Net-MD Logo"
                  width={152}
                  height={40}
                  className="h-9 w-auto md:h-10 object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-card-description !text-gray-400">
              Architecting the digital future. We provide high-end consulting and innovative technology solutions for global market leaders.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-label !text-primary-500 mb-6 md:mb-10">Explore</h4>
            <ul className="space-y-4 md:space-y-6">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-footer-link flex items-center gap-3 group">
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-label !text-primary-500 mb-6 md:mb-10">Expertise</h4>
            <ul className="space-y-4 md:space-y-6">
              {[
                { name: 'IT Strategy', slug: 'it-consulting' },
                { name: 'Cloud Ops', slug: 'cloud-solutions' },
                { name: 'Digital Core', slug: 'web-development' },
                { name: 'Search Intelligence', slug: 'seo-optimization' },
                { name: 'Experience Design', slug: 'api-integration' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={`/services/${item.slug}`} className="text-footer-link flex items-center gap-3 group">
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-label !text-primary-500 mb-6 md:mb-10">Connect</h4>
            <ul className="space-y-6 md:space-y-8">
              {[
                { icon: MapPin, text: "4th Binarius, Deepak Complex, National Games Road, Shastrinagar, Yerawada, Pune, Maharashtra 411006" },
                { icon: Mail, text: "info@net-md.net" },
                { icon: Phone, text: "+91 70415 50664" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 md:gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 border border-white/10 shadow-lg">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-footer-link !text-gray-400 group-hover:!text-white">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/5 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-center md:text-left"
        >
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.1em]">
            © 2000-{currentYear} Net-MD Solutions. Crafted for the future.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm font-bold uppercase tracking-[0.1em]">
            {['Privacy', 'Legal', 'Governance'].map((text) => (
              <Link key={text} href={`/${text.toLowerCase()}`} className="text-gray-500 hover:text-primary-500 transition-colors relative group">
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
