
"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogData";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  Share2,
  Bookmark,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { staggerTextContainer, staggerTextItem } from "@/utils/animations";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-secondary group-hover:text-primary-600 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="bg-primary-50 p-2 rounded-full text-primary-600"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const blog = blogs.find((b) => b.slug === slug);
  
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the top-ish part of view
      threshold: 0
    });

    const elements = document.querySelectorAll("h2, h3, section[id]");
    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [blog]);

  if (!blog) notFound();

  // Related blogs (simple slice for now)
  const relatedBlogs = blogs.filter(b => b.slug !== slug).slice(0, 3);

  const headings = blog.content
    .filter(s => s.type === 'heading')
    .map((h, i) => ({ id: `section-${i}`, text: h.text }));

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-white transition-colors mb-8 font-bold uppercase tracking-[0.2em] text-xs"
            >
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
            >
              {blog.title.split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-8 text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold border-2 border-white/20">
                  {blog.author[0]}
                </div>
                <div>
                  <p className="text-white font-bold">{blog.author}</p>
                  <p className="text-gray-400 text-xs">Expert Contributor</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/20 hidden md:block" />
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary-500" />
                <span>6 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT LAYOUT ── */}
      <div className="container-custom px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-32 space-y-12">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary-600 rounded-full" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {headings.map((heading, i) => (
                    <a
                      key={i}
                      href={`#${heading.id}`}
                      className={`block py-1 transition-all duration-300 text-sm border-l-2 pl-4 ${
                        activeSection === heading.id 
                          ? "text-primary-600 border-primary-600 font-bold" 
                          : "text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                  <a 
                    href="#faqs" 
                    className={`block py-1 transition-all duration-300 text-sm border-l-2 pl-4 ${
                      activeSection === "faqs" 
                        ? "text-primary-600 border-primary-600 font-bold" 
                        : "text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-200"
                    }`}
                  >
                    Frequently Asked Questions
                  </a>
                </nav>
              </div>

              {/* Related Posts */}
              <div>
                <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary-600 rounded-full" />
                  Related Reading
                </h3>
                <div className="space-y-6">
                  {relatedBlogs.map((related, i) => (
                    <Link 
                      key={i} 
                      href={`/blog/${related.slug}`}
                      className="group block"
                    >
                      <div className="aspect-video rounded-2xl overflow-hidden mb-3">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <h4 className="font-bold text-secondary group-hover:text-primary-600 transition-colors line-clamp-2 text-sm leading-tight">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Article Main Content */}
          <main className="flex-1 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-primary max-w-none"
            >
              {/* Introduction Highlight */}
              <div id="intro" className="bg-primary-50/50 border-l-4 border-primary-600 p-8 rounded-r-3xl mb-12 italic text-xl text-secondary font-medium leading-relaxed">
                {blog.content[0].text}
              </div>

              {/* Dynamic Content Blocks */}
              <div className="space-y-12 text-gray-600">
                {blog.content.slice(1).map((section, index) => {
                  if (section.type === 'heading') {
                    const Tag = `h${section.level || 2}` as any;
                    return (
                      <Tag 
                        key={index} 
                        id={`section-${index}`}
                        className="scroll-mt-32 text-3xl font-bold text-secondary mt-16 mb-8 tracking-tight flex items-center gap-3"
                      >
                        {section.text}
                      </Tag>
                    );
                  }
                  if (section.type === 'paragraph') {
                    return (
                      <p key={index} className="leading-loose text-lg mb-8">
                        {section.text}
                      </p>
                    );
                  }
                  if (section.type === 'list' && section.items) {
                    return (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        {section.items.map((item, i) => (
                          <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                              <ChevronRight size={18} />
                            </div>
                            <span className="font-medium text-secondary">{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>

            {/* ── FAQ SECTION ── */}
            {blog.faqs && (
              <section id="faqs" className="scroll-mt-32 mt-32 pt-20 border-t-2 border-gray-50">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-xl shadow-secondary/20">
                    <HelpCircle size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-secondary uppercase tracking-tight">Expert Q&A</h2>
                    <p className="text-primary-600 font-bold tracking-widest text-sm uppercase">Common Insights & Solutions</p>
                  </div>
                </div>

                <div className="bg-white rounded-4xl border border-gray-100 p-2 md:p-10 shadow-2xl shadow-gray-100/50">
                  {blog.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </section>
            )}


          </main>
        </div>
      </div>

      {/* ── FINAL CTA SECTION ── */}
      <section className="bg-primary-50 py-32 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/50 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white blur-[120px] rounded-full" />
        </div>
        
        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight tracking-tight">
              Ready to Accelerate Your <span className="text-primary-600">Digital Growth?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Don't navigate the complex technology landscape alone. Let Net-MD's experts guide you through every step of your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/contact" className="px-12 py-6 bg-secondary text-white rounded-3xl font-bold text-lg hover:bg-primary-600 transition-all shadow-2xl shadow-secondary/30 w-full sm:w-auto">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="px-12 py-6 bg-white text-secondary border border-gray-200 rounded-3xl font-bold text-lg hover:border-secondary transition-all w-full sm:w-auto">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
