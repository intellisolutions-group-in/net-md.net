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
  HelpCircle,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Section, MagneticButtonWrapper as MagneticButton } from "@/components/Cards";

// --- Helper Components ---

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl border transition-all duration-500 mb-6 overflow-hidden ${isOpen ? 'bg-white border-primary-500 shadow-xl' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className={`text-card-title transition-colors ${isOpen ? '!text-primary-600' : '!text-secondary group-hover:!text-primary-600'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary-600 text-white' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'}`}
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-8 text-paragraph !text-gray-600 !max-w-none opacity-90 border-t border-gray-50 pt-6">
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
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    });

    const elements = document.querySelectorAll("h2, h3, section[id]");
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      observer.current?.disconnect();
    };
  }, [blog]);

  if (!blog) notFound();

  const relatedBlogs = blogs.filter(b => b.slug !== slug).slice(0, 3);
  const headings = blog.content
    .filter(s => s.type === 'heading')
    .map((h, i) => ({ id: `section-${i}`, text: h.text }));

  return (
    <div className="bg-white min-h-screen selection:bg-primary-600 selection:text-white overflow-x-hidden">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left will-change-transform"
        style={{ scaleX }}
      />

      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-center pt-40 pb-32">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0 will-change-transform">
          {/* Mask Reveal Overlay */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-secondary z-20 will-change-transform"
          />

          <img
            src={blog.image}
            alt={blog.title}
            loading="eager"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
        </motion.div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full will-change-transform"
          />
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-50/10 blur-[80px] rounded-full will-change-transform"
          />
        </div>

        <div className="container-custom relative z-10 px-6">
          <motion.div style={{ opacity: heroOpacity }} className="max-w-5xl will-change-transform">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/blog"
                className="text-label !text-primary-400 hover:!text-white transition-all mb-12 flex items-center gap-3 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Insights
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-label !text-primary-400 px-5 py-2 bg-primary-600/20 backdrop-blur-md rounded-full border border-primary-500/30">
                  Business Innovation
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                <span className="text-label !text-gray-400">6 Min Read</span>
              </div>

              <h1 className="text-hero text-white mb-10">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-black text-xl border-2 border-white/20 shadow-2xl shadow-primary-600/30">
                    {blog.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg tracking-tight">{blog.author}</p>
                    <p className="text-label !text-primary-400/60 !tracking-[0.2em]">Industry Strategist</p>
                  </div>
                </div>
                <div className="hidden md:block h-12 w-px bg-white/10" />
                <div className="flex flex-wrap items-center gap-8 md:gap-10 text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-3 cursor-pointer hover:text-primary-400 transition-colors">
                    <Share2 size={16} className="text-primary-500" />
                    Share Story
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT LAYOUT ── */}
      <div className="container-custom px-6 py-32 relative">
        <div className="flex flex-col lg:flex-row gap-24 relative">

          {/* Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-96 shrink-0">
            <div className="sticky top-32 space-y-16">
              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-50">
                  <motion.div
                    className="w-full bg-primary-600 origin-top will-change-transform"
                    style={{ scaleY: scrollYProgress, height: '100%' }}
                  />
                </div>

                <h3 className="text-card-title !text-secondary mb-10 flex items-center gap-3">
                  <Sparkles size={20} className="text-primary-600" />
                  Inside this article
                </h3>
                <nav className="space-y-6">
                  {headings.map((heading, i) => (
                    <a
                      key={i}
                      href={`#${heading.id}`}
                      className={`block transition-all duration-500 text-lg font-bold pl-2 ${activeSection === heading.id
                          ? "text-primary-600 translate-x-2"
                          : "text-gray-400 hover:text-secondary hover:translate-x-1"
                        }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                  <a
                    href="#faqs"
                    className={`block transition-all duration-500 text-lg font-bold pl-2 ${activeSection === "faqs"
                        ? "text-primary-600 translate-x-2"
                        : "text-gray-400 hover:text-secondary hover:translate-x-1"
                      }`}
                  >
                    Expert Q&A
                  </a>
                </nav>
              </motion.div>

              {/* Related Posts */}
              <div className="space-y-10">
                <h3 className="text-card-title !text-secondary flex items-center gap-3">
                  <Globe size={20} className="text-primary-600" />
                  Recommended Reading
                </h3>
                <div className="space-y-10">
                  {relatedBlogs.map((related, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link href={`/blog/${related.slug}`} className="block">
                        <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                          <img
                            src={related.image}
                            alt={related.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <h4 className="text-card-title !text-secondary group-hover:!text-primary-600 !text-lg leading-tight line-clamp-2">
                          {related.title}
                        </h4>
                      </Link>
                    </motion.div>
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
              transition={{ duration: 1 }}
            >
              {/* Introduction Highlight */}
              <motion.div
                id="intro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-12 rounded-[3rem] mb-20 italic text-xl md:text-2xl text-secondary font-medium leading-relaxed border border-gray-100 shadow-inner relative"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-xl border border-gray-100">
                  <Bookmark size={32} />
                </div>
                <span className="text-article-quote block border-none pl-0">
                  {blog.content[0].text}
                </span>
              </motion.div>

              {/* Dynamic Content Blocks */}
              <div className="space-y-20">
                {blog.content.slice(1).map((section, index) => {
                  if (section.type === 'heading') {
                    const Tag = `h${section.level || 2}` as any;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <Tag
                          id={`section-${index}`}
                          className="scroll-mt-32 text-article-subheading !text-secondary mt-24 mb-8 flex items-center gap-6"
                        >
                          <div className="w-12 h-1 bg-primary-600 rounded-full shrink-0"></div>
                          {section.text}
                        </Tag>
                      </motion.div>
                    );
                  }
                  if (section.type === 'paragraph') {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-article-body mb-10"
                      >
                        {section.text}
                      </motion.p>
                    );
                  }
                  if (section.type === 'list' && section.items) {
                    return (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                        {section.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-primary-200 transition-all duration-500 flex items-start gap-6 group will-change-transform"
                          >
                            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                              <Zap size={20} />
                            </div>
                            <span className="text-card-title !text-secondary !text-lg leading-tight">{item}</span>
                          </motion.div>
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
              <section id="faqs" className="scroll-mt-32 mt-40 pt-32 border-t border-gray-100">
                <div className="text-center mb-20">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-label !text-primary-600 mb-6 block"
                  >
                    Deep Learning
                  </motion.span>
                  <h2 className="text-article-heading !text-secondary">Expert Q&A</h2>
                  <p className="text-article-body !text-gray-500 mt-8 max-w-2xl mx-auto">Providing clarity on complex technological shifts and business implementations.</p>
                </div>

                <div className="max-w-4xl mx-auto">
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
      <section className="relative py-40 overflow-hidden bg-secondary text-white">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-600/10 blur-[120px] rounded-full will-change-transform"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary-900/20 blur-[120px] rounded-full will-change-transform"
          />
        </div>

        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto will-change-transform"
          >
            <h2 className="text-hero text-white mb-10">
              Fuel Your Next <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Breakthrough.</span>
            </h2>
            <p className="text-paragraph !text-gray-400 mb-16 mx-auto !max-w-3xl">
              Transforming insights into action. Let's discuss how our strategies can redefine your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-14 py-7 bg-primary-600 text-white rounded-3xl font-black text-xl hover:bg-primary-700 transition-all duration-500 shadow-2xl shadow-primary-600/30 w-full sm:w-auto relative overflow-hidden group/cta"
                >
                  <span className="relative z-10">Start Your Journey</span>
                </Link>
              </MagneticButton>
              <Link
                href="/services"
                className="px-14 py-7 border border-white/10 text-white rounded-3xl font-black text-xl hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
