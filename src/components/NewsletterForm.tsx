"use client";

import React from "react";

export const NewsletterForm = () => {
  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" 
      onSubmit={(e) => e.preventDefault()}
    >
      <input 
        type="email" 
        placeholder="Email address" 
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary flex-1 font-medium"
      />
      <button className="bg-primary text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all">
        Join
      </button>
    </form>
  );
};
