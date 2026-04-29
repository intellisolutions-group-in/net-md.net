"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Share2, 
  Calendar,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import ApplyForm from '@/components/ApplyForm';

const JobDetailContent = () => {
  const searchParams = useSearchParams();
  const roleSlug = searchParams.get('role') || 'frontend-developer';

  const jobDetails: Record<string, any> = {
    'frontend-developer': {
      title: "Frontend Developer (React)",
      location: "Remote / On-site / Hybrid",
      type: "Full-Time",
      experience: "Fresher / 1+ Year",
      salary: "Competitive",
      postedDate: "Recent",
      overview: "We are seeking a talented and motivated Frontend Developer to join our growing engineering team. In this role, you will be responsible for creating high-quality, responsive web applications that provide a seamless user experience.",
      responsibilities: [
        "Develop new user-facing features using React.js and Next.js.",
        "Build reusable components and front-end libraries for future use.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize components for maximum performance across devices.",
        "Collaborate with backend developers and UI/UX designers."
      ],
      requiredSkills: [
        "Strong proficiency in JavaScript and ES6+.",
        "Thorough understanding of React.js and its core principles.",
        "Experience with modern CSS-in-JS or Tailwind CSS.",
        "Knowledge of modern authorization mechanisms (JWT).",
        "Familiarity with Git and Agile methodologies."
      ],
      preferredSkills: [
        "Experience with TypeScript.",
        "Familiarity with RESTful APIs and GraphQL.",
        "Knowledge of Next.js and SSR."
      ]
    },
  };

  const job = jobDetails[roleSlug] || jobDetails['frontend-developer'];

  return (
    <div className="pt-32 pb-24 bg-off-white min-h-screen">
      <div className="container-custom px-6">
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 text-primary-600 font-bold mb-10 hover:-translate-x-2 transition-transform"
        >
          <ArrowLeft size={20} /> Back to Openings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-10 border-b border-gray-100">
                <div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{job.title}</h1>
                  <div className="flex flex-wrap gap-6 text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} className="text-primary-500" />
                      {job.experience}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Job Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {job.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Responsibilities</h3>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item: string, i: number) => (
                      <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                        <CheckCircle2 className="text-primary-500 shrink-0 mt-1" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Required Skills</h3>
                  <ul className="space-y-4">
                    {job.requiredSkills.map((item: string, i: number) => (
                      <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                        <CheckCircle2 className="text-primary-500 shrink-0 mt-1" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Preferred Skills</h3>
                  <ul className="space-y-4">
                    {job.preferredSkills.map((item: string, i: number) => (
                      <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                        <CheckCircle2 className="text-primary-500/50 shrink-0 mt-1" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Apply Form Section */}
            <section id="apply-now" className="scroll-mt-24">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-secondary">Apply for this Position</h2>
                <p className="text-gray-600 mt-2">Please fill out the form below and we'll be in touch soon.</p>
              </div>
              <ApplyForm />
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-secondary text-white p-8 rounded-2xl shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold mb-8">Job Summary</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Posted Date</p>
                    <p className="font-bold text-lg">{job.postedDate}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Location</p>
                    <p className="font-bold text-lg">{job.location}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Job Type</p>
                    <p className="font-bold text-lg">{job.type}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <DollarSign className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Salary Range</p>
                    <p className="font-bold text-lg">{job.salary}</p>
                  </div>
                </div>
              </div>
              <a 
                href="#apply-now" 
                className="btn-primary w-full !bg-white !text-secondary hover:!bg-gray-100 !py-4 mt-10 shadow-lg"
              >
                Apply Now
              </a>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
              <h4 className="font-bold text-primary-900 mb-4">Any Questions?</h4>
              <p className="text-primary-800/70 text-sm mb-6">
                If you have any questions regarding the recruitment process, feel free to reach out to our HR team.
              </p>
              <Link href="/contact" className="text-primary-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Contact HR <ArrowLeft className="rotate-180" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobDetail = () => {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
      <JobDetailContent />
    </Suspense>
  );
};

export default JobDetail;
