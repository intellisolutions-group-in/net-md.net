import React from "react";
import { SectionHeading } from "@/components/SectionHeading";

const industries = [
  {
    name: "Finance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.406 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.406-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export const Industries = () => {
  return (
    <section className="py-32 bg-black px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Industries"
          title="Industries We Empower"
          subtitle="We bring specialized domain knowledge to help organizations thrive across diverse sectors."
          dark
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.name}
              className="bg-zinc-900 border border-white/5 p-10 rounded-[32px] text-center group hover:bg-primary transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                {industry.icon}
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-black transition-colors">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
