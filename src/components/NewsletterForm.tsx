"use client";

import React, { useState } from "react";

export const NewsletterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const submissions = JSON.parse(localStorage.getItem("allFormSubmissions") || "[]");
    submissions.push({
      id: Date.now(),
      formType: "Newsletter Form",
      data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem("allFormSubmissions", JSON.stringify(submissions));
    
    setSubmitted(true);
    form.reset();
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" 
      onSubmit={handleSubmit}
    >
      <input 
        type="email" 
        name="email"
        required
        placeholder={submitted ? "Thanks for joining!" : "Email address"} 
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary flex-1 font-medium"
      />
      <button className="bg-primary text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all">
        {submitted ? "Joined" : "Join"}
      </button>
    </form>
  );
};
