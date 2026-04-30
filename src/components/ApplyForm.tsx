"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, Upload } from 'lucide-react';

const ApplyForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

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

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="text-center py-24 px-12 bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className="w-24 h-24 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
        >
          <CheckCircle size={48} />
        </motion.div>
        <h3 className="text-4xl font-bold text-secondary mb-6 tracking-tight">Application Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-10 text-xl leading-relaxed font-medium opacity-80">
          Thank you for your interest in joining Net-MD. Our recruitment team will review your profile and reach out within 2-3 business days.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="text-primary-600 font-bold hover:underline"
        >
          Submit another application
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-10 bg-white p-8 md:p-14 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div className="space-y-3">
          <label className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ml-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none font-bold text-secondary placeholder:text-gray-300 focus:border-primary-500 focus:bg-white transition-all duration-300"
          />
        </div>
        {/* Email */}
        <div className="space-y-3">
          <label className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ml-1">Email Address</label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@example.com"
            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none font-bold text-secondary placeholder:text-gray-300 focus:border-primary-500 focus:bg-white transition-all duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Phone */}
        <div className="space-y-3">
          <label className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ml-1">Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+91 00000 00000"
            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none font-bold text-secondary placeholder:text-gray-300 focus:border-primary-500 focus:bg-white transition-all duration-300"
          />
        </div>
        {/* Portfolio */}
        <div className="space-y-3">
          <label className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ml-1">Portfolio / LinkedIn / Github</label>
          <input
            type="url"
            name="portfolio"
            placeholder="https://..."
            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none font-bold text-secondary placeholder:text-gray-300 focus:border-primary-500 focus:bg-white transition-all duration-300"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3">
        <label className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase ml-1">Message / Cover Letter</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us why you're a great fit for this role..."
          className="w-full px-6 py-5 rounded-xl border border-gray-100 bg-gray-50/50 outline-none font-bold text-secondary placeholder:text-gray-300 focus:border-primary-500 focus:bg-white transition-all duration-300 resize-none"
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        disabled={isSubmitting}
        type="submit"
        className="w-full py-5 bg-primary-600 text-white rounded-xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-primary-600/20 hover:bg-primary-700 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={24} /> Processing...
          </>
        ) : (
          <>
            Submit Application <Send size={20} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ApplyForm;
