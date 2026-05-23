"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, BarChart, Cloud, Code, Search, Globe, Layers, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const serviceItems = [
  { name: 'IT Consulting', slug: 'it-consulting', icon: BarChart, desc: 'Strategic technology planning' },
  { name: 'Cloud Solutions', slug: 'cloud-solutions', icon: Cloud, desc: 'Scalable cloud infrastructure' },
  { name: 'Web Development', slug: 'web-development', icon: Code, desc: 'High-performance web apps' },
  { name: 'SEO Optimization', slug: 'seo-optimization', icon: Search, desc: 'Organic growth strategies' },
  { name: 'Social Media Marketing', slug: 'social-media-marketing', icon: Globe, desc: 'Brand & community growth' },
  { name: 'API Integration', slug: 'api-integration', icon: Layers, desc: 'Seamless system connectivity' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const lightPages = ['/submissions'];
  const isDark = scrolled || lightPages.includes(pathname);
  const isServicesActive = pathname.startsWith('/services');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav className={`fixed w-full z-[9999] transition-all duration-500 ${isDark ? 'bg-white/95 backdrop-blur-2xl py-3 md:py-4 shadow-[0_4px_40px_rgba(0,0,0,0.08)] border-b border-gray-100/80' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container-custom mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 ${isDark ? 'bg-primary-600 shadow-primary-600/20' : 'bg-primary-500 shadow-primary-500/30'}`}
          >
            <Zap size={24} className="md:w-7 md:h-7" fill="currentColor" />
          </motion.div>
          <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isDark ? 'text-secondary' : 'text-white'}`}>
            Net-<span className="text-primary-500">MD</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            // ── Services gets its own dropdown wrapper ──
            if (link.name === 'Services') {
              return (
                <div
                  key="services"
                  className="relative py-2"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {/* Trigger button — same style as other links */}
                  <button className={`flex items-center gap-1 text-label transition-all duration-500 ${isServicesActive ? '!text-primary-600' : isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/70 hover:text-white'}`}>
                    Services
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex"
                    >
                      <ChevronDown size={13} />
                    </motion.span>
                  </button>

                  {/* Active/hover underline */}
                  <motion.div
                    initial={false}
                    animate={{ width: isServicesActive || servicesOpen ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-primary-500 rounded-full"
                  />

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-gray-100/80 overflow-hidden will-change-transform"
                      >
                        {/* Header */}
                        <div className="px-6 pt-5 pb-4 border-b border-gray-50 bg-gray-50/50">
                          <span className="text-label">Our Services</span>
                          <p className="text-[11px] text-gray-400 font-medium mt-0.5 tracking-normal normal-case">Premium IT solutions for modern businesses</p>
                        </div>

                        {/* 2-col grid */}
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {serviceItems.map((s, i) => (
                            <motion.div
                              key={s.slug}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-primary-50 transition-all duration-300 group"
                              >
                                <div className="w-9 h-9 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                  <s.icon size={17} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-black uppercase tracking-[0.12em] text-secondary group-hover:text-primary-600 transition-colors leading-tight">{s.name}</div>
                                  <div className="text-[11px] text-gray-400 font-medium mt-0.5 normal-case tracking-normal">{s.desc}</div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA footer */}
                        <div className="px-3 pb-3">
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary-600 transition-all duration-300"
                          >
                            View All Services <Zap size={13} fill="currentColor" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // ── All other links render normally ──
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span className={`text-label transition-all duration-500 ${isActive ? '!text-primary-600' : isDark ? 'text-secondary/70 hover:text-secondary' : 'text-white/70 hover:text-white'}`}>
                  {link.name}
                </span>
                <motion.div
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  className="absolute bottom-0 left-0 h-0.5 bg-primary-500 rounded-full group-hover:w-full transition-all duration-500"
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 md:p-3 rounded-xl md:rounded-2xl transition-all duration-500 ${isDark ? 'bg-gray-100 text-secondary hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="md:w-7 md:h-7" /> : <Menu size={24} className="md:w-7 md:h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: '100vh' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-y-auto shadow-2xl"
          >
            <div className="container-custom mx-auto px-4 py-8 md:py-12 flex flex-col gap-6 md:gap-8 pb-32">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.name === 'Services') {
                  return (
                    <div key="mobile-services">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex items-center gap-2 md:gap-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter transition-all duration-500 w-full text-left ${isServicesActive ? 'text-primary-600' : 'text-secondary hover:text-primary-600'}`}
                      >
                        Services
                        <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }}>
                          <ChevronDown size={24} className="md:w-7 md:h-7" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 md:mt-6 ml-2 md:ml-4 flex flex-col gap-4 md:gap-5"
                          >
                            {serviceItems.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                className="flex items-center gap-3 md:gap-4 group"
                              >
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-50 text-primary-600 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                  <s.icon size={16} className="md:w-[18px] md:h-[18px]" />
                                </div>
                                <span className="text-lg md:text-xl font-bold text-secondary/80 group-hover:text-primary-600 transition-colors">{s.name}</span>
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              onClick={() => setIsOpen(false)}
                              className="text-sm font-black text-primary-600 uppercase tracking-widest mt-2"
                            >
                              → View All Services
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter transition-all duration-500 ${isActive ? 'text-primary-600 translate-x-2 md:translate-x-4' : 'text-secondary hover:text-primary-600 hover:translate-x-1 md:hover:translate-x-2'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
