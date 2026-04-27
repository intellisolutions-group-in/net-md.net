import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const cases = [
  {
    title: "Tech Startup Success",
    category: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    link: "/case-studies/startup",
  },
  {
    title: "FinTech Innovation",
    category: "Cybersecurity & Data",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    link: "/case-studies/fintech",
  },
  {
    title: "Retail Transformation",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    link: "/case-studies/retail",
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-32 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading
            label="Case Studies"
            title="Success Stories"
            align="left"
            className="mb-0"
          />
          <Link 
            href="/case-studies" 
            className="text-primary font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-8"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <Link 
              key={item.title} 
              href={item.link}
              className="group relative block aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.category}
                </p>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
