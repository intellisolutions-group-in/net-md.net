"use client";

import { motion } from 'framer-motion';
import { Section, TeamCard } from '@/components/Cards';
import { Target, Eye, Award, CheckCircle2, Users, Globe, TrendingUp, Shield, Zap } from 'lucide-react';

import { AboutHero } from '@/components/sections/AboutHero';
import { textReveal, staggerTextContainer, staggerTextItem } from '@/utils/animations';

const About = () => {
  const team = [
    { name: "Arjun Sharma", role: "CEO & Founder", image: "/images/team/ceo.png" },
    { name: "Priya Patel", role: "Chief Technology Officer", image: "/images/team/cto.png" },
    { name: "Rohan Gupta", role: "Head of Marketing", image: "/images/team/marketing.png" },
    { name: "Ananya Iyer", role: "Lead Systems Architect", image: "/images/team/architect.png" },
  ];

  return (
    <div>
      <AboutHero />

      {/* Intro Section */}
      <Section className="bg-white" id="our-story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          <div>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Story</span>
            <div className="overflow-hidden mt-4 mb-8">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerTextContainer}
                className="text-4xl md:text-5xl font-bold"
              >
                {"Pioneering Digital Excellence Since 2012".split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in a small workspace with a big vision, Net-MD has grown into a leading IT solutions provider. We believe that technology should be an enabler, not a barrier.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team consists of industry veterans and young innovators who share a common goal: to deliver world-class technology services that drive real business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified Specialists",
                "Scalable Solutions",
                "Customer-Centric",
                "Award Winning Agency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary-600 w-5 h-5" />
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/our_story.jpg"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-8 rounded-xl hidden md:block">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm">Years of Innovation</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-off-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-primary-100 group cursor-default"
          >
            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              <Target size={32} />
            </div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-2xl font-bold mb-4 text-secondary"
            >
              {"Our Mission".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.h3>
            <p className="text-gray-600 leading-relaxed">
              To empower organizations by delivering innovative and reliable IT solutions that simplify complex challenges and foster sustainable growth in a digital-first world.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-accent/10 group cursor-default"
          >
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Eye size={32} />
            </div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerTextContainer}
              className="text-2xl font-bold mb-4 text-secondary"
            >
              {"Our Vision".split(" ").map((word, i) => (
                <motion.span key={i} variants={staggerTextItem} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global benchmark for digital transformation, recognized for our commitment to excellence, integrity, and the success of our clients.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <div className="text-center mb-16 px-6">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">The Experts</span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerTextContainer}
            className="text-3xl md:text-4xl mt-2 font-bold"
          >
            {"Meet Our Leadership Team".split(" ").map((word, i) => (
              <motion.span key={i} variants={staggerTextItem} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          {team.map((member, i) => (
            <div key={i}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </Section>

      {/* Why-choos-us */}
      <Section className="bg-off-white" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          <div className="relative">
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
          </div>

          <div className="space-y-10">
            <div>
              <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Core Values</span>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerTextContainer}
                className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-secondary"
              >
                {"Why Industry Leaders Trust Net-MD".split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <div className="space-y-8">
              {[
                { icon: TrendingUp, title: "Data-Driven Approach", desc: "Every solution we build is backed by rigorous analysis and measurable performance metrics." },
                { icon: Shield, title: "Uncompromising Security", desc: "We integrate enterprise-grade security protocols into every layer of your technology stack." },
                { icon: Zap, title: "Agile Innovation", desc: "Our team stays at the forefront of emerging technologies to keep your business ahead of the curve." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 border border-gray-100 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>


      {/* Achievements */}
      <Section className="bg-secondary text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
          {[
            { icon: Award, label: "Awards Won", value: "24" },
            { icon: Users, label: "Happy Clients", value: "450+" },
            { icon: Globe, label: "Countries Served", value: "15" },
            { icon: CheckCircle2, label: "Projects Completed", value: "1,200+" },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-primary-600/20 text-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} />
              </div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={staggerTextContainer}
                className="text-3xl font-bold"
              >
                {item.value.split(" ").map((word, i) => (
                  <motion.span key={i} variants={staggerTextItem} className="inline-block mr-1">
                    {word}
                  </motion.span>
                ))}
              </motion.h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
};

export default About;
