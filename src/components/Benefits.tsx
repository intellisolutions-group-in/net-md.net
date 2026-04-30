"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  BookOpen,
  Code2,
  Users,
  Clock,
  Coffee,
  Sparkles
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Rocket size={24} />,
      title: "Real-world Projects",
      description: "Work on enterprise-level applications that impact millions of users across the globe."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Learning & Mentorship",
      description: "Get guided by industry experts and access to premium learning resources."
    },
    {
      icon: <Code2 size={24} />,
      title: "Modern Tech Stack",
      description: "Build with React, Node.js, Next.js, TypeScript, MongoDB, and modern cloud infrastructure."
    },
    {
      icon: <Users size={24} />,
      title: "Collaborate Team Culture",
      description: "Join a diverse, inclusive, and highly collaborative environment where every voice matters."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Work Environment",
      description: "Enjoy flexible working hours and hybrid/remote options tailored to your needs."
    },
    {
      icon: <Coffee size={24} />,
      title: "Wellness & Perks",
      description: "Comprehensive health insurance, regular team outings, and paid time off."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -10 }}
          className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary-500/30 group transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden will-change-transform"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/0 via-primary-600/5 to-primary-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 will-change-transform"></div>

          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm relative z-10 will-change-transform">
            {item.icon}
          </div>
          
          <h3 className="text-card-title mb-4 group-hover:text-primary-600 transition-colors relative z-10">
            {item.title}
          </h3>
          
          <p className="text-card-description group-hover:text-gray-900 transition-colors relative z-10">
            {item.description}
          </p>

          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="text-primary-400" size={20} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Benefits;
