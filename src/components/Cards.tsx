"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`py-24 relative ${className}`}>
    <div className="container-custom mx-auto px-6">
      {children}
    </div>
  </section>
);

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  slug: string;
}

export const ServiceCard = ({ icon: Icon, title, description, slug }: ServiceCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
  >
    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-secondary">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{description}</p>
    <Link href={`/services/${slug}`} className="flex items-center gap-2 text-primary-600 font-bold group-hover:gap-4 transition-all">
      Learn More <ArrowRight size={20} />
    </Link>
  </motion.div>
);

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  slug: string;
}

export const BlogCard = ({ image, date, title, description, slug }: BlogCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
  >
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <span className="text-primary-600 font-bold text-sm uppercase tracking-widest block mb-4">{date}</span>
      <h3 className="text-2xl font-bold mb-4 text-secondary leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-8 line-clamp-2">{description}</p>
      <Link href={`/blog/${slug}`} className="text-secondary font-bold hover:text-primary-600 transition-colors mt-auto flex items-center gap-2">
        Read Article <ArrowRight size={18} />
      </Link>
    </div>
  </motion.div>
);

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
}

export const StatItem = ({ value, label, suffix = "" }: StatItemProps) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
      <span className="text-primary-500">{value}</span>{suffix}
    </div>
    <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">{label}</div>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
  >
    <div className="flex gap-1 mb-8">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600 italic text-lg leading-relaxed mb-10 flex-grow">"{quote}"</p>
    <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-primary-100">
        <img src={image} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-secondary">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-6 flex items-center justify-between text-left group"
      onClick={onClick}
    >
      <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-primary-600' : 'text-secondary group-hover:text-primary-600'}`}>
        {question}
      </h3>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-white border border-gray-200 text-secondary'}`}>
        <ChevronDown size={20} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-gray-600 leading-relaxed text-lg">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export const ProjectCard = ({ title, category, description, image }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl"
  >
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    <div className="absolute inset-0 p-10 flex flex-col justify-end">
      <span className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-2 block">{category}</span>
      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        {description}
      </p>
      <Link href="/services" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary self-end translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowRight size={24} />
      </Link>
    </div>
  </motion.div>
);

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export const TeamCard = ({ name, role, image }: TeamCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
  >
    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8 text-center">
      <h4 className="text-2xl font-bold text-secondary mb-1">{name}</h4>
      <p className="text-primary-600 font-medium">{role}</p>
    </div>
  </motion.div>
);
