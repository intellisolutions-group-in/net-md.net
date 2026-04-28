
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, BlogCard } from '@/components/Cards';
import { BlogHero } from '@/components/sections/BlogHero';
import { blogs } from '@/data/blogData';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div>
      <BlogHero />

      {/* Blog Grid */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {currentBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white shadow-lg shadow-primary-900/10'}`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${currentPage === num ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20 scale-110' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white shadow-lg shadow-primary-900/10'}`}
            >
              Next
            </button>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Blog;
