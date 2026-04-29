"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/Cards';
import { Mail, Phone, MapPin, Send, Globe, Clock } from 'lucide-react';
import { useState } from 'react';
import { staggerTextContainer, staggerTextItem } from '@/utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'it-consulting',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataInstance = new FormData(form);
    const data = Object.fromEntries(formDataInstance);

    const submissions = JSON.parse(localStorage.getItem("allFormSubmissions") || "[]");
    submissions.push({
      id: Date.now(),
      formType: "Contact Form",
      data,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem("allFormSubmissions", JSON.stringify(submissions));

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'it-consulting', message: '' });
    }, 5000);
  };

  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <div className="hero bg-primary-600 text-white px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact/contact_hero.png"
            alt="Contact Background"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-900/40 to-secondary/20"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe className="w-[800px] h-[800px] absolute -right-64 -top-64" />
        </div>
        <div className="container-custom relative z-10 text-center mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {"Let's Start a Conversation".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to learn more about our services? Reach out to us today.
          </p>
        </div>
      </div>

      <Section className="bg-white -mt-16 relative z-20 pb-24 px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-secondary p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400 text-sm">404, Cyber Heights, HITEC City, Hyderabad, Telangana 500081, India</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-gray-400 text-sm">contact@net-md.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form Area */}
          <div className="flex-1 p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold text-secondary">✅ Form submitted successfully</h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for reaching out to Net-MD. We&apos;ve received your inquiry and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Arjun Sharma"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="arjun@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Interested Service</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="it-consulting">IT Consulting</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Send Message <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Interactive Map */}
      <Section className="bg-off-white pb-24 px-6">
        <div className="rounded-[2rem] overflow-hidden h-[450px] border border-gray-200 relative shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.299635398246!2d78.376852!3d17.4477196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e250109915%3A0x3344667a4e61066!2sCyber%20Heights!5e0!3m2!1sen!2sin!4v1714392000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Net-MD Office Location"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
