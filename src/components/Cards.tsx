"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, Calendar, Clock, User, Plus } from 'lucide-react';
import Link from 'next/link';

// --- Utility Components ---

export const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`hidden lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const MagneticButtonStatic = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`lg:hidden ${className}`}>{children}</div>
);

export const MagneticButtonWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <>
    <MagneticButton className={className}>{children}</MagneticButton>
    <MagneticButtonStatic className={className}>{children}</MagneticButtonStatic>
  </>
);

export const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: "var(--rotate-x)",
        rotateY: "var(--rotate-y)",
        transformStyle: "preserve-3d",
        "--rotate-x": rotateX,
        "--rotate-y": rotateY,
      } as any}
      className={`relative transition-all duration-200 ease-linear will-change-transform hidden lg:block ${className}`}
    >
      <div style={{ transform: "translate3d(0, 0, 50px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const TiltCardStatic = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`lg:hidden ${className}`}>{children}</div>
);

export const TiltCardWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <>
    <TiltCard className={className}>{children}</TiltCard>
    <TiltCardStatic className={className}>{children}</TiltCardStatic>
  </>
);

// --- Main Components ---

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`py-32 relative ${className}`}>
    <div className="container-custom mx-auto px-6">
      {children}
    </div>
  </section>
);

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
  author?: string;
  date?: string;
}

export const BlogCard = ({ image, title, description, slug, author, date }: BlogCardProps) => (
  <TiltCardWrapper className="h-full">
    <div
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 h-full flex flex-col group relative will-change-transform"
    >
      <div className="aspect-video overflow-hidden relative">
        <motion.div
          initial={{ x: "0%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0 bg-secondary z-20 will-change-transform"
        />

        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8 }}
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover will-change-transform"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
      </div>

      <div className="p-10 flex-grow flex flex-col relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Clock size={12} className="text-primary-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">6 Min Read</span>
          </div>

        <h3 className="text-card-title mb-4">
          {title}
        </h3>

        <p className="text-card-description mb-8 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-black border border-primary-100">
              {author ? author[0] : "N"}
            </div>
            <span className="text-label !text-secondary">{author || "Net-MD Expert"}</span>
          </div>

          <MagneticButtonWrapper>
            <Link
              href={`/blog/${slug}`}
              className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all duration-500 shadow-2xl shadow-secondary/10 hover:shadow-primary-600/30 group/btn"
            >
              <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </MagneticButtonWrapper>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/10 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"></div>
    </div>
  </TiltCardWrapper>
);

export const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className={`rounded-[2rem] border transition-all duration-500 mb-6 overflow-hidden ${isOpen ? 'bg-white border-primary-500 shadow-2xl' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
    <button
      className="w-full px-10 py-8 flex items-center justify-between text-left group"
      onClick={onClick}
    >
      <h3 className={`text-card-title transition-colors ${isOpen ? '!text-primary-600' : '!text-secondary group-hover:!text-primary-600'}`}>
        {question}
      </h3>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary-600 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600'}`}
      >
        <Plus size={24} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="px-10 pb-10 text-card-description border-t border-gray-50 pt-8">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Stats & Testimonials ---

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

export const StatItem = ({ value, label, suffix = "" }: StatItemProps) => (
  <div className="text-center">
    <div className="text-stat-number text-white mb-4">
      <span className="text-primary-500">{value}</span>{suffix}
    </div>
    <div className="text-label opacity-60">{label}</div>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full relative overflow-hidden group will-change-transform"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/50 rounded-bl-[5rem] -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110 will-change-transform"></div>

    <div className="flex gap-1 mb-10 relative z-10">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-6 h-6 text-primary-500 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    <p className="text-paragraph italic !text-gray-600 mb-12 flex-grow relative z-10 font-medium opacity-90">
      &ldquo;{quote}&rdquo;
    </p>

    <div className="flex items-center gap-5 border-t border-gray-50 pt-10 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white font-bold text-xl">
        {author[0]}
      </div>
      <div>
        <h4 className="text-card-title !text-secondary !text-lg">{author}</h4>
        <p className="text-label !text-primary-600">{role}</p>
      </div>
    </div>
  </motion.div>
);

// --- Services & Project Cards ---

export const ServiceCard = ({ icon: Icon, title, description, slug }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 group h-full flex flex-col relative overflow-hidden will-change-transform"
  >
    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 will-change-transform"></div>
    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-inner will-change-transform">
      <Icon size={32} />
    </div>
    <h3 className="text-card-title mb-6">{title}</h3>
    <p className="text-card-description mb-10 flex-grow">{description}</p>
    <Link href={`/services/${slug}`} className="flex items-center gap-3 text-label !text-primary-600 group-hover:gap-5 transition-all">
      Discover More <ArrowRight size={18} />
    </Link>
  </motion.div>
);

export const ProjectCard = ({ title, category, description, image }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl will-change-transform"
  >
    <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform" />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700"></div>
    <div className="absolute inset-0 p-12 flex flex-col justify-end">
      <span className="text-label !text-primary-400 mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">{category}</span>
      <h3 className="text-card-title text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 will-change-transform">{title}</h3>
      <p className="text-card-description !text-gray-300 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 delay-150 will-change-transform">
        {description}
      </p>
      <MagneticButtonWrapper className="self-end">
        <Link href="/services" className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200 shadow-2xl">
          <ArrowRight size={28} />
        </Link>
      </MagneticButtonWrapper>
    </div>
  </motion.div>
);

export const TeamCard = ({ name, role, image }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 will-change-transform"
  >
    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
      <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 will-change-transform" />
      <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <div className="p-10 text-center">
      <h4 className="text-card-title !text-secondary mb-2">{name}</h4>
      <p className="text-label !text-primary-600">{role}</p>
    </div>
  </motion.div>
);
