"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {type}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-500" />
              {location}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-primary-500" />
              {experience}
            </div>
          </div>
        </div>

        <div className="shrink-0 mt-4 md:mt-0">
          <Link
            href={`/careers/job-detail?role=${slug}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 hover:bg-primary-600 text-secondary hover:text-white rounded-xl font-bold transition-all w-full md:w-auto"
          >
            View Details <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
