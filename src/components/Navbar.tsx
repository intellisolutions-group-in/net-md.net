"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { servicesData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const isHomePage = pathname === "/";

  // Group services into categories for the dropdown (6 services total)
  const categories = [
    { label: "Development", items: [servicesData[0], servicesData[3]] },
    { label: "Design & Performance", items: [servicesData[1], servicesData[2]] },
    { label: "Growth & Insights", items: [servicesData[4], servicesData[5]] },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-xl border-b border-zinc-200 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>
          <span className="text-2xl font-extrabold tracking-tight text-[#111111]">
            Net-<span className="text-primary">MD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 inline-flex items-center gap-1",
                    pathname === link.href || pathname.startsWith("/services/")
                      ? "text-primary"
                      : "text-[#555555] hover:text-primary"
                  )}
                >
                  {link.name}
                  <motion.svg
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="w-[680px] bg-white/98 backdrop-blur-2xl rounded-2xl border border-zinc-200 shadow-[0_24px_80px_rgba(0,0,0,0.1)] p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {categories.map((cat) => (
                            <div key={cat.label}>
                              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 px-2">
                                {cat.label}
                              </p>
                              <div className="space-y-1">
                                {cat.items.map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="block px-3 py-2.5 rounded-xl text-[#555555] hover:text-[#111111] hover:bg-zinc-50 transition-all duration-200 group/item"
                                  >
                                    <span className="text-sm font-medium">{service.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-4 border-t border-zinc-100">
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
                          >
                            View All Services
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300",
                  pathname === link.href ? "text-primary" : "text-[#555555] hover:text-primary"
                )}
              >
                <motion.span 
                  whileHover={{ y: -2 }}
                  className="inline-block"
                >
                  {link.name}
                </motion.span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-[#111111]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-zinc-200 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-4 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={cn(
                        "text-lg font-bold tracking-wider uppercase transition-colors w-full text-left flex items-center justify-between",
                        pathname.startsWith("/services") ? "text-primary" : "text-[#555555] hover:text-primary"
                      )}
                    >
                      {link.name}
                      <motion.svg
                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                        className="w-4 h-4"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 ml-4 space-y-1 border-l border-zinc-200 pl-4"
                        >
                          {servicesData.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-sm text-[#777777] hover:text-primary transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-primary font-semibold"
                          >
                            View All Services →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold tracking-wider uppercase transition-colors",
                      pathname === link.href ? "text-primary" : "text-[#555555] hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
