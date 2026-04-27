import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogs";
import { NewsletterForm } from "@/components/NewsletterForm";

const BLOGS_PER_PAGE = 6;

export async function generateStaticParams() {
  const totalPages = Math.ceil(blogsData.length / BLOGS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    pageNumber: (i + 1).toString(),
  }));
}

export default async function BlogListingPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;
  const currentPage = parseInt(pageNumber);
  const totalPages = Math.ceil(blogsData.length / BLOGS_PER_PAGE);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = blogsData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555555]">Latest Insights & Updates</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] uppercase tracking-tight leading-[1.1] mb-8">
            Our <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-[#555555] max-w-2xl mx-auto leading-loose font-medium">
            Discover expert perspectives on technology, design, and financial markets.
            Page {currentPage} of {totalPages}.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {currentBlogs.map((blog, index) => (
              <article
                key={blog.slug}
                className="group bg-white rounded-[2.5rem] border border-zinc-200 overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-zinc-50 border-b border-zinc-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/5">
                      {blog.category}
                    </span>
                    <span className="text-xs text-[#777777] font-bold">{blog.readTime}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-[#111111] mb-4 group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h2>

                  <p className="text-[#555555] text-sm leading-loose mb-10 flex-1 line-clamp-3 font-medium">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-zinc-50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-[#777777] border border-zinc-200">NM</div>
                      <span className="text-xs font-bold text-[#777777]">{blog.date}</span>
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-[#111111] text-xs font-bold uppercase tracking-[0.2em] hover:text-primary hover:gap-4 transition-all"
                    >
                      Read Article
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Pagination Controls ────────────────────────────────── */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev */}
            {currentPage > 1 ? (
              <Link
                href={`/blog/page/${currentPage - 1}`}
                className="w-16 h-16 rounded-2xl border border-zinc-200 flex items-center justify-center text-[#111111] hover:border-primary hover:text-primary transition-all bg-white hover:shadow-xl group"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            ) : (
              <div className="w-16 h-16 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-200 bg-zinc-50 cursor-not-allowed">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            )}

            {/* Numbers */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog/page/${pageNum}`}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-sm transition-all ${currentPage === pageNum
                      ? "bg-primary text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] border-transparent"
                      : "bg-white border border-zinc-200 text-[#777777] hover:border-primary hover:text-primary"
                    }`}
                >
                  {pageNum}
                </Link>
              ))}
            </div>

            {/* Next */}
            {currentPage < totalPages ? (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                className="w-16 h-16 rounded-2xl border border-zinc-200 flex items-center justify-center text-[#111111] hover:border-primary hover:text-primary transition-all bg-white hover:shadow-xl group"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div className="w-16 h-16 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-200 bg-zinc-50 cursor-not-allowed">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA Footer ─────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 text-center px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight mb-6">Never miss an update.</h2>
          <p className="text-[#555555] text-base mb-10 leading-loose font-medium">Subscribe to our newsletter and get the latest insights delivered straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
