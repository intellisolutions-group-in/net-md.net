"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  experience: string;
  location: string;
  type: string;
  slug: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, experience, location, type, slug, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] transition-all group relative overflow-hidden will-change-transform"
    >
      {/* Animated Left Border Highlight */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top will-change-transform"></div>

      {/* Sweep Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 will-change-transform"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-50 text-label !text-primary-600 px-4 py-1.5 rounded-full border border-primary-100 flex items-center gap-2">
              <Zap size={12} /> {type}
            </span>
          </div>
          <h3 className="text-card-title mb-4 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-card-description mb-8 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-8 text-gray-500 font-bold text-sm tracking-wide">
            <div className="flex items-center gap-3 group/info">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-primary-500 group-hover/info:bg-primary-500 group-hover/info:text-white transition-all duration-300">
                <MapPin size={16} />
              </div>
              {location}
            </div>
            <div className="flex items-center gap-3 group/info">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-primary-500 group-hover/info:bg-primary-500 group-hover/info:text-white transition-all duration-300">
                <Briefcase size={16} />
              </div>
              {experience}
            </div>
          </div>
        </div>

        <div className="shrink-0 mt-4 md:mt-0">
          <Link
            href={`/careers/job-detail?role=${slug}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-white hover:bg-primary-600 rounded-2xl font-bold transition-all w-full md:w-auto shadow-lg shadow-secondary/10 hover:shadow-primary-600/30 group/btn"
          >
            View Details 
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="will-change-transform"
            >
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
