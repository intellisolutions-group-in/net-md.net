"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  BookOpen, 
  Code2, 
  Users, 
  Clock,
  Coffee
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-off-white p-8 rounded-2xl hover:bg-primary-600 group transition-colors duration-300 shadow-sm hover:shadow-xl"
        >
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 group-hover:text-primary-100 transition-colors leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Benefits;
