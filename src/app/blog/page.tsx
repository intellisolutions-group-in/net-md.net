"use client";

import { motion } from 'framer-motion';
import { Section, BlogCard } from '@/components/Cards';
import BlogHero from '@/components/sections/BlogHero';
import { blogs } from '@/data/blogData';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Scroll to top of blog list on page change
  useEffect(() => {
    const element = document.getElementById('blog-posts');
    if (element && currentPage > 1) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-primary-600 selection:text-white">
      {/* Blog Hero Section */}
      <BlogHero />

      {/* Blog Grid Section */}
      <Section id="blog-posts" className="bg-white py-32 px-6 relative z-10">
        <motion.div 
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
        >
          {currentBlogs.map((blog, index) => (
            <motion.div
              key={`${blog.slug}-${currentPage}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 } }
              }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary-600 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <div className="flex items-center gap-2 md:gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl font-bold transition-all text-sm md:text-base flex items-center justify-center ${
                    currentPage === i + 1 
                      ? "bg-primary-600 text-white shadow-xl shadow-primary-600/30 scale-110" 
                      : "bg-white text-secondary border border-gray-100 hover:border-primary-500"
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary hover:bg-primary-600 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        )}
      </Section>

      {/* Global Aesthetics (Redundant since it's in layout, but kept if needed for page-specific feel) */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default Blog;
