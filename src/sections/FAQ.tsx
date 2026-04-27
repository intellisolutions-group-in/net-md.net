"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including Finance, Healthcare, E-commerce, and Technology, providing tailored IT solutions for each.",
  },
  {
    question: "How do you ensure data security?",
    answer: "We implement multi-layered security protocols, regular audits, and real-time monitoring to ensure your data remains protected at all times.",
  },
  {
    question: "Can you help with legacy system migration?",
    answer: "Yes, our team experts in seamlessly migrating legacy systems to modern cloud environments with minimal downtime and maximum efficiency.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity, but we follow an agile methodology to deliver incremental value and maintain high speed of delivery.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions"
              align="left"
              className="mb-8"
            />
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Have questions about our services or process? We've compiled a list of commonly asked questions to help you understand how we work.
            </p>
            <Button size="lg" className="px-10 h-16 text-lg font-bold">
              Contact Us
            </Button>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "bg-zinc-50 border-primary/20 shadow-lg" : "bg-white border-zinc-100 hover:border-zinc-200"
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-zinc-100 text-zinc-500"}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
