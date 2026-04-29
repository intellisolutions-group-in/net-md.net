"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Section,
  ServiceCard,
  BlogCard,
  StatItem,
  TestimonialCard,
  FaqItem,
  ProjectCard
} from '@/components/Cards';
import { staggerTextContainer, staggerTextItem } from '../utils/animations';
import {
  Shield,
  Cloud,
  BarChart,
  Globe,
  Zap,
  Users,
  Laptop,
  Search,
  Code,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Database,
  Smartphone,
  Layers,
  TrendingUp,
  Award,
  Building2,
  HeartPulse,
  ShoppingBag,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { blogs } from '@/data/blogData';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    { slug: "it-consulting", icon: BarChart, title: "IT Consulting", description: "Strategic technology planning to align your IT infrastructure with your long-term business goals." },
    { slug: "cloud-solutions", icon: Cloud, title: "Cloud Solutions", description: "Seamless migration, management, and optimization of your cloud infrastructure for maximum scalability." },
    { slug: "web-development", icon: Code, title: "Web Development", description: "Custom, high-performance web applications built with modern frameworks to drive user engagement." },
    { slug: "seo-optimization", icon: Search, title: "SEO Optimization", description: "Data-driven strategies to boost your organic visibility and drive high-quality traffic to your site." },
    { slug: "social-media-marketing", icon: Globe, title: "Social Media Marketing", description: "Building brand authority and community engagement through targeted social media campaigns." },
    { slug: "api-integration", icon: Layers, title: "API Integration", description: "Connecting your software ecosystem with robust, secure, and efficient API solutions." },
  ];

  const stats = [
    { value: "500", label: "Projects Completed", suffix: "+" },
    { value: "250", label: "Happy Clients", suffix: "+" },
    { value: "12", label: "Years Experience", suffix: "+" },
    { value: "50", label: "Tech Experts", suffix: "+" },
  ];

  const processSteps = [
    { title: "Discovery", description: "We dive deep into your business needs and project requirements." },
    { title: "Planning", description: "Creating a detailed roadmap and architecture for your solution." },
    { title: "Development", description: "Agile execution with regular updates and quality assurance." },
    { title: "Deployment", description: "Launching your project with full support and monitoring." },
  ];

  const testimonials = [
    {
      quote: "Net-MD transformed our digital presence. Their cloud solutions scaled our operations by 200% within six months.",
      author: "Rajesh Varma",
      role: "CTO, TechFlow India",
      image: "/images/testimonials/customer1.png"
    },
    {
      quote: "The best IT consulting partner we've ever worked with. Their strategic approach saved us thousands in overhead.",
      author: "Sneha Kapoor",
      role: "CEO, Innovate Solutions",
      image: "/images/testimonials/customer2.png"
    },
    {
      quote: "Highly professional team. Their SEO strategies moved us to the first page for our most competitive keywords.",
      author: "Vikram Singh",
      role: "Marketing Director, GlobalX",
      image: "/images/testimonials/customer3.png"
    }
  ];



  const industries = [
    { icon: Building2, name: "Finance" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: ShoppingBag, name: "E-commerce" },
    { icon: Rocket, name: "Startups" },
  ];

  const techLogos = [
    { name: "React", icon: Laptop },
    { name: "Node.js", icon: Code },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Next.js", icon: Zap },
    { name: "Tailwind", icon: Globe },
  ];

  const faqs = [
    { q: "What IT services do you offer?", a: "We offer a full range of services including IT consulting, cloud migration, web development, cybersecurity, and digital marketing." },
    { q: "How do you handle project management?", a: "We use an Agile methodology with weekly check-ins and a dedicated project manager for every client." },
    { q: "Can you help with legacy system migration?", a: "Yes, we specialize in modernizing legacy systems and migrating them to secure cloud environments." },
    { q: "What industries do you serve?", a: "We serve finance, healthcare, e-commerce, and startups, among others." },
  ];



  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/home_hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Excellence in Technology
            </motion.span>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
              {"Transforming Ideas into Digital Reality".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Net-MD empowers forward-thinking businesses with expert IT consulting, scalable cloud infrastructure, and innovative digital strategies.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/services" className="btn-primary text-lg px-10 py-5 group shadow-xl shadow-primary-900/20">
                Explore Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary !text-white !border-white/30 hover:!border-white hover:!bg-white/10 text-lg px-10 py-5">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:flex items-center justify-center opacity-20 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border-[60px] border-primary-600/30 rounded-full border-dashed"
          />
        </div>
      </section>

      {/* Services Section */}
      <Section className="bg-white" id="services">
        <div className="text-center mb-20 px-6">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Expertise</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-3xl md:text-5xl font-bold mt-4 text-secondary"
          >
            {"Our Specialized Services".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            We deliver end-to-end technology solutions designed to solve complex business problems and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-off-white" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/who-we-are.png"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-600 rounded-3xl -z-10 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Top Rated</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Agency 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div>
              <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Core Values</span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerTextContainer}
                className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-secondary"
              >
                {"Why Industry Leaders Trust Net-MD".split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            <div className="space-y-8">
              {[
                { icon: TrendingUp, title: "Data-Driven Approach", desc: "Every solution we build is backed by rigorous analysis and measurable performance metrics." },
                { icon: Shield, title: "Uncompromising Security", desc: "We integrate enterprise-grade security protocols into every layer of your technology stack." },
                { icon: Zap, title: "Agile Innovation", desc: "Our team stays at the forefront of emerging technologies to keep your business ahead of the curve." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 border border-gray-100 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-secondary py-20 px-6">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <Section className="bg-white" id="process">
        <div className="text-center mb-20 px-6">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Workflow</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-3xl md:text-5xl font-bold mt-4 text-secondary"
          >
            {"How We Deliver Results".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="relative px-6">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-4 border-gray-50 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies Section */}
      <section className="py-12 bg-off-white px-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
            {techLogos.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default"
              >
                <tech.icon size={28} className="text-secondary" />
                <span className="font-bold text-lg text-secondary">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Industries Served */}
      <Section className="bg-secondary text-white overflow-hidden relative" id="industries">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="text-center mb-20 px-6 relative z-10">
          <span className="text-primary-400 font-bold tracking-widest uppercase text-sm">Sector Expertise</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-3xl md:text-5xl font-bold mt-4"
          >
            {"Industries We Empower".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 relative z-10">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-primary-600/20 rounded-full flex items-center justify-center text-primary-400 mx-auto mb-8 group-hover:scale-110 transition-transform">
                <industry.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white" id="testimonials">
        <div className="text-center mb-20 px-6">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Feedback</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-3xl md:text-5xl font-bold mt-4 text-secondary"
          >
            {"What Our Clients Say".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Blog Section */}
      <Section className="bg-off-white" id="blog">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-6">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Insights</span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-3xl md:text-5xl font-bold mt-4 text-secondary"
            >
              {"Latest Tech Trends".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          <Link href="/blog" className="text-primary-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform py-3">
            View All Posts <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      {/* <Section className="bg-white" id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Questions</span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-secondary leading-tight"
            >
              {"Frequently Asked Questions".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our support team for specialized assistance.
            </p>
            <Link href="/contact" className="btn-secondary !border-primary-600 !text-primary-600">
              Contact Support
            </Link>
          </div>
          <div className="bg-off-white p-10 rounded-3xl border border-gray-100">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </Section> */}

      {/* CTA Section */}
      <section className="bg-primary-600 py-24 relative overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-10">
          <Globe className="w-[800px] h-[800px] absolute -right-64 -top-64" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              {"Ready to Accelerate Your Digital Transformation?".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
              Join the ranks of high-performing companies that trust Net-MD for their mission-critical technology needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-white text-primary-700 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all active:scale-95 inline-flex items-center gap-2">
                Start Your Journey Today <Rocket size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
