"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ApplyForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    const submissions = JSON.parse(localStorage.getItem("allFormSubmissions") || "[]");
    const newSubmission = {
      id: Date.now(),
      formType: "career",
      data,
      submittedAt: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    localStorage.setItem("allFormSubmissions", JSON.stringify(submissions));
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 bg-white rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-bold text-secondary mb-4">✅ Form submitted successfully</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Thank you for your interest. Our recruitment team will review your profile and get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
          <input 
            required
            type="text" 
            name="name"
            placeholder="John Doe"
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <input 
            required
            type="email" 
            name="email"
            placeholder="john@example.com"
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
          <input 
            required
            type="tel" 
            name="phone"
            placeholder="+91 00000 00000"
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Portfolio / LinkedIn / GitHub</label>
          <input 
            type="url" 
            name="portfolio"
            placeholder="https://..."
            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message / Cover Letter</label>
        <textarea 
          name="message"
          rows={4}
          placeholder="Tell us why you're a great fit..."
          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full !py-4 text-lg shadow-xl shadow-primary-900/20 mt-4">
        Submit Application <Send size={20} />
      </button>
    </form>
  );
};

export default ApplyForm;
