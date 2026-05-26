"use client";

import React, { Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Share2, 
  Calendar,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ApplyForm from '@/components/ApplyForm';
import { MagneticButtonWrapper as MagneticButton } from '@/components/Cards';

const JobDetailContent = () => {
  const searchParams = useSearchParams();
  const roleSlug = searchParams.get('role') || 'frontend-developer';

  const jobDetails: Record<string, any> = {
    'frontend-developer': {
      title: "Frontend Developer (React)",
      location: "Bhubaneswar / Remote",
      type: "Full-Time",
      experience: "2-4 Years",
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
        "Thorough understanding of React.js and Next.js.",
        "Experience with Tailwind CSS.",
        "Knowledge of modern Auth (JWT/OAuth).",
        "Familiarity with Git and Agile."
      ],
      preferredSkills: [
        "Experience with TypeScript.",
        "Familiarity with GraphQL.",
        "Knowledge of SSR/SSG patterns."
      ]
    },
    'social-media-manager': {
      title: "Social Media Manager",
      location: "Bhubaneswar",
      type: "Full-Time",
      experience: "2+ Years",
      postedDate: "2 Days Ago",
      overview: "We're looking for a creative Social Media Manager to grow our brand presence across all platforms. You'll lead our social strategy and build community engagement.",
      responsibilities: [
        "Develop and execute social media strategies.",
        "Create engaging content (visuals/copy) for LinkedIn, X, and Instagram.",
        "Monitor social media trends and implement best practices.",
        "Engage with our community and manage influencer relations.",
        "Analyze performance metrics and optimize campaigns."
      ],
      requiredSkills: [
        "Proven experience in social media management.",
        "Excellent copywriting and visual storytelling skills.",
        "Proficiency with social media tools (Buffer, Hootsuite).",
        "Deep understanding of social algorithms."
      ],
      preferredSkills: [
        "Basic graphic design skills (Canva/Figma).",
        "Video editing experience (Reels/Shorts).",
        "Paid social campaign experience."
      ]
    },
    'it-strategy-consultant': {
      title: "IT Strategy Consultant",
      location: "Hybrid (Mumbai)",
      type: "Full-Time",
      experience: "5+ Years",
      postedDate: "1 Week Ago",
      overview: "Help our enterprise clients navigate digital transformation. You will align technology roadmaps with business goals and provide strategic technical leadership.",
      responsibilities: [
        "Conduct technical audits and gap analyses for clients.",
        "Develop long-term digital transformation strategies.",
        "Advise C-level executives on technology investments.",
        "Lead cross-functional teams in implementing solutions.",
        "Identify emerging technology trends relevant to clients."
      ],
      requiredSkills: [
        "Extensive experience in IT consulting or leadership.",
        "Strong business acumen and analytical skills.",
        "Excellent presentation and communication skills.",
        "Understanding of enterprise architecture."
      ],
      preferredSkills: [
        "MBA or equivalent business degree.",
        "Experience with cloud migration strategies.",
        "Project management frameworks (Agile/Scrum)."
      ]
    },
    'cloud-engineer': {
      title: "Cloud Infrastructure Engineer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      experience: "3-6 Years",
      postedDate: "Recent",
      overview: "Architect and manage secure, scalable cloud environments on AWS, Azure, and GCP for our global clients. You will design infrastructure that powers high-availability applications and ensure performance, security, and cost efficiency.",
      responsibilities: [
        "Design and deploy cloud infrastructure on AWS, Azure, and GCP.",
        "Implement CI/CD pipelines and infrastructure-as-code using Terraform or CDK.",
        "Monitor cloud systems for performance, cost, and security compliance.",
        "Lead cloud migration projects from on-premise to cloud environments.",
        "Collaborate with development teams to optimize cloud-native architectures."
      ],
      requiredSkills: [
        "Strong hands-on experience with AWS, Azure, or GCP.",
        "Proficiency with Terraform, Ansible, or CloudFormation.",
        "Experience with Docker, Kubernetes, and container orchestration.",
        "Knowledge of networking, security, and IAM best practices.",
        "Scripting skills in Bash, Python, or PowerShell."
      ],
      preferredSkills: [
        "Deep expertise in AWS/Azure/GCP.",
        "Experience with serverless architectures.",
        "Familiarity with observability tools (Datadog, Grafana)."
      ]
    },
    'seo-strategist': {
      title: "SEO & Content Strategist",
      location: "Remote",
      type: "Full-Time",
      experience: "2-4 Years",
      postedDate: "Recent",
      overview: "Drive organic growth and visibility for our clients through technical SEO, keyword research, and data-driven content strategies. You will own the end-to-end SEO pipeline from audit to execution.",
      responsibilities: [
        "Conduct comprehensive SEO audits and competitor analysis.",
        "Develop and execute keyword strategies aligned with business objectives.",
        "Optimize on-page content and technical SEO elements.",
        "Build high-quality backlink strategies for authority growth.",
        "Track rankings, traffic, and conversions using Google Analytics and Search Console."
      ],
      requiredSkills: [
        "Proven experience in SEO with measurable results.",
        "Proficiency with tools like SEMrush, Ahrefs, or Moz.",
        "Strong understanding of on-page and technical SEO.",
        "Excellent writing and content planning skills.",
        "Familiarity with Google Search Console and Analytics."
      ],
      preferredSkills: [
        "Experience with programmatic SEO.",
        "Basic HTML/CSS knowledge.",
        "Familiarity with CMS platforms (WordPress, Webflow)."
      ]
    },
    'backend-developer': {
      title: "Backend Developer (Node.js)",
      location: "Remote",
      type: "Full-Time",
      experience: "3-5 Years",
      postedDate: "Recent",
      overview: "Design and implement robust APIs and microservices to connect complex software ecosystems seamlessly. You will work on high-throughput systems that serve enterprise clients globally.",
      responsibilities: [
        "Design and build RESTful APIs and GraphQL endpoints.",
        "Architect scalable microservices using Node.js and Express.",
        "Integrate third-party services and payment gateways.",
        "Optimize database queries for PostgreSQL and MongoDB.",
        "Write clean, tested, and well-documented code."
      ],
      requiredSkills: [
        "Strong proficiency in Node.js and Express.js.",
        "Experience with SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
        "Understanding of REST and GraphQL API design principles.",
        "Experience with authentication patterns (JWT, OAuth2).",
        "Familiarity with Docker and cloud deployment."
      ],
      preferredSkills: [
        "Experience with message queues (Redis, RabbitMQ).",
        "Knowledge of TypeScript.",
        "Familiarity with serverless functions (AWS Lambda)."
      ]
    },
    'ui-ux-designer': {
      title: "UI/UX Designer",
      location: "Bhubaneswar",
      type: "Contract",
      experience: "2+ Years",
      postedDate: "Recent",
      overview: "Create stunning visual designs and intuitive user experiences for our enterprise clients. You will translate business requirements into elegant, user-centered interfaces using Figma.",
      responsibilities: [
        "Design user interfaces for web and mobile applications in Figma.",
        "Conduct user research, usability testing, and analysis.",
        "Create wireframes, prototypes, and high-fidelity mockups.",
        "Collaborate with developers to ensure pixel-perfect implementation.",
        "Build and maintain consistent design systems and component libraries."
      ],
      requiredSkills: [
        "Proficiency in Figma with strong portfolio.",
        "Understanding of UX principles and human-centered design.",
        "Experience creating responsive layouts and design systems.",
        "Strong visual design sense — typography, color, layout.",
        "Ability to communicate design decisions clearly."
      ],
      preferredSkills: [
        "Experience with motion design and micro-interactions.",
        "Basic knowledge of HTML/CSS.",
        "Familiarity with accessibility (WCAG) guidelines."
      ]
    }
  };

  const job = jobDetails[roleSlug] || jobDetails['frontend-developer'];

  return (
    <div className="bg-[#f8f9fa] min-h-screen selection:bg-primary-600 selection:text-white pt-32 pb-20">
      <div className="container-custom px-6 mx-auto">
        {/* Back Link */}
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-12 hover:gap-3 transition-all group"
        >
          <ArrowLeft size={16} /> Back to Openings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job Details */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100">
              {/* Job Header */}
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="bg-primary-100/50 text-primary-700 text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-lg mb-6 inline-block">
                    {job.type}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-6">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap gap-8 text-gray-400 font-bold text-sm">
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
                <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:bg-gray-100 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Job Overview */}
              <div className="space-y-16">
                <div>
                  <h3 className="text-xl font-black text-secondary mb-6">Job Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {job.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-secondary mb-8">Responsibilities</h3>
                  <div className="space-y-6">
                    {job.responsibilities.map((res: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1.5 w-5 h-5 bg-primary-100/50 text-primary-700 rounded-full flex items-center justify-center shrink-0 border border-primary-200">
                          <CheckCircle2 size={12} />
                        </div>
                        <p className="text-gray-600 text-lg">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-secondary mb-8">Required Skills</h3>
                  <div className="space-y-6">
                    {job.requiredSkills.map((skill: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1.5 w-5 h-5 bg-primary-100/50 text-primary-700 rounded-full flex items-center justify-center shrink-0 border border-primary-200">
                          <CheckCircle2 size={12} />
                        </div>
                        <p className="text-gray-600 text-lg">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-secondary mb-8">Preferred Skills</h3>
                  <div className="space-y-6">
                    {job.preferredSkills.map((skill: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1.5 w-5 h-5 bg-primary-100/50 text-primary-700 rounded-full flex items-center justify-center shrink-0 border border-primary-200">
                          <CheckCircle2 size={12} />
                        </div>
                        <p className="text-gray-600 text-lg">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div id="apply-now" className="scroll-mt-32">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-secondary tracking-tight mb-4">Apply for this Position</h2>
                <p className="text-gray-500 font-medium">Please fill out the form below and we'll be in touch soon.</p>
              </div>
              <ApplyForm />
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Job Summary Card */}
              <div className="bg-secondary p-10 rounded-[2rem] text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-10 tracking-tight">Job Summary</h3>
                <div className="space-y-10">
                  {[
                    { icon: Calendar, label: "POSTED DATE", value: job.postedDate },
                    { icon: MapPin, label: "LOCATION", value: job.location },
                    { icon: Clock, label: "JOB TYPE", value: job.type }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-500 shrink-0 border border-white/5">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-500 tracking-widest mb-1">{item.label}</p>
                        <p className="font-bold text-lg">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-12 py-5 bg-white text-secondary rounded-xl font-black text-lg hover:bg-primary-500 hover:text-white transition-all duration-500"
                >
                  Apply Now
                </button>
              </div>

              {/* Questions Card */}
              <div className="bg-primary-50/50 p-10 rounded-[2rem] border border-primary-200/50">
                <h3 className="text-xl font-black text-primary-800 mb-4">Any Questions?</h3>
                <p className="text-primary-800/70 font-medium text-sm leading-relaxed mb-8">
                  If you have any questions regarding the recruitment process, feel free to reach out to our HR team.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary-600 font-black text-sm hover:gap-3 transition-all group"
                >
                  Contact HR <ArrowLeft className="rotate-180" size={16} />
                </Link>
              </div>
            </div>
          </aside>
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

