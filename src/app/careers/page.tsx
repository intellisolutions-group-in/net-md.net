"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Search,
  Plus,
  Minus
} from 'lucide-react';
import Link from 'next/link';
import JobCard from '@/components/JobCard';
import Benefits from '@/components/Benefits';

const CareersPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jobs = [
    {
      title: "Frontend Developer (React)",
      experience: "2-4 Years",
      location: "Bhubaneswar / Remote",
      type: "Full-Time",
      slug: "frontend-developer",
      description: "We are looking for a skilled Frontend Developer who is passionate about building beautiful, high-performance user interfaces using React and modern CSS."
    },
    {
      title: "Backend Developer (Node.js)",
      experience: "3-5 Years",
      location: "Hybrid (Pune)",
      type: "Full-Time",
      slug: "backend-developer",
      description: "Join our core platform team to build scalable microservices, optimize database performance, and architect robust backend solutions."
    },
    {
      title: "Full Stack Developer (MERN)",
      experience: "1-3 Years",
      location: "Remote",
      type: "Full-Time",
      slug: "fullstack-developer",
      description: "A versatile role for someone who loves working across the stack. You'll handle everything from MongoDB schema design to React state management."
    },
    {
      title: "UI/UX Designer",
      experience: "2+ Years",
      location: "Bhubaneswar",
      type: "Contract",
      slug: "ui-ux-designer",
      description: "Create stunning visual designs and intuitive user experiences for our enterprise clients. Proficiency in Figma and design systems is required."
    }
  ];

  const faqs = [
    {
      q: "Do you hire freshers?",
      a: "Yes, we regularly hire talented freshers through our graduate trainee program. We look for strong foundations in computer science and a passion for learning."
    },
    {
      q: "What technologies do you use?",
      a: "Our primary stack includes React/Next.js for frontend, Node.js/Express for backend, and MongoDB/PostgreSQL for databases. We also use AWS for cloud infrastructure."
    },
    {
      q: "Is remote work available?",
      a: "Absolutely! We offer remote, hybrid, and on-site work options depending on the role and project requirements."
    },
    {
      q: "How long does the hiring process take?",
      a: "The entire process usually takes 2-3 weeks from the initial screening to the final offer, depending on the availability of candidates."
    }
  ];

  const hiringSteps = [
    { number: "01", title: "Apply Online", description: "Submit your resume and portfolio through our careers portal." },
    { number: "02", title: "Technical Screening", description: "A quick call with our HR team and technical assessment." },
    { number: "03", title: "Interview", description: "Technical and cultural rounds to assess your skills and fit for the role." },
    { number: "04", title: "Offer Letter", description: "If everything aligns, we'll extend an offer and welcome you to the team." }
  ];

  return (
    <div className="bg-off-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/careers/hero.png" 
            alt="Join Our Team" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/80 to-secondary"></div>
        </div>
        
        <div className="container-custom relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-400 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Careers at Net-MD</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Build real-world IT solutions using modern technologies like React, Node.js, and MongoDB. We're looking for passionate individuals to shape the future of technology.
            </p>
            <div className="flex justify-center">
              <a href="#openings" className="btn-primary px-10 py-4 text-lg shadow-2xl shadow-primary-900/40">
                View Open Positions <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Culture & Growth</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-4">Why Work With Us?</h2>
            <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
          </div>
          <Benefits />
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Opportunities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-4">Current Openings</h2>
              <p className="text-gray-600 text-lg">
                Explore our current job openings and find the perfect role for your next career move.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for roles..." 
                className="pl-12 pr-6 py-4 rounded-xl border border-gray-200 focus:border-primary-500 outline-none w-full md:w-80 shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-4">Our Hiring Process</h2>
            <p className="text-gray-600">A simple and transparent process to help you join our team.</p>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-100 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {hiringSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-gray-50 flex items-center justify-center text-3xl font-black text-primary-600 mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-secondary">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed px-4">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-lg font-bold text-secondary">{faq.q}</span>
                  <div className="text-primary-600">
                    {openFaq === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Don't see a role that fits?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Send us your resume anyway! We're always on the lookout for talented individuals.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-lg flex items-center gap-2 transition-all">
              Submit Resume <Mail size={20} />
            </Link>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>
    </div>
  );
};

export default CareersPage;
