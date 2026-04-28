"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "../data";
import { CheckCircle, ArrowLeft, ChevronRight, MessageCircle } from "lucide-react";
import { use } from "react";


export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary"></div>
        </div>
        <div className="container-custom relative z-10 px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 text-sm font-bold uppercase tracking-widest mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-primary-600/20 text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <service.icon size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full Description */}
      <section className="bg-white py-24 px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-secondary">What We Deliver</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{service.fullDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-off-white py-24 px-6">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-secondary">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feat: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <CheckCircle size={20} />
                </div>
                <span className="font-bold text-secondary">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24 px-6">
        <div className="container-custom max-w-4xl mx-auto">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12 text-secondary">Business Benefits</h2>
          <div className="space-y-6">
            {service.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-8 bg-off-white rounded-2xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Our team of experts is ready to build a tailored {service.title.toLowerCase()} solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
              Schedule a Call
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              Chat with Experts <MessageCircle size={20} />
            </Link>
            <Link href="/services" className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center gap-2">
              All Services <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
