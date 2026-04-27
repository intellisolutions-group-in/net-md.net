import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const posts = [
  {
    title: "AI in Modern Business",
    category: "Technology",
    date: "April 12, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Discover how machine learning is reshaping decision-making across global industries.",
  },
  {
    title: "The Future of Cloud",
    category: "Cloud",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    description: "Exploring the next generation of serverless architecture and hybrid cloud strategies.",
  },
  {
    title: "Cyber Security Trends",
    category: "Security",
    date: "April 08, 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Critical security measures every enterprise needs to implement in a remote-first world.",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-32 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading
            label="Blog"
            title="Latest Tech Trends"
            align="left"
            className="mb-0"
          />
          <Link
            href="/blog"
            className="text-primary font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-8"
          >
            Read All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">
                  {post.category}
                </div>
              </div>
              <div className="p-10">
                <p className="text-muted text-xs font-medium mb-4">{post.date}</p>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted leading-relaxed mb-8">
                  {post.description}
                </p>
                <Link href="/blog" className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors group/btn">
                  Read More
                  <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
