"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/Cards';
import { services } from './data';
import { ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { ServicesHero } from '@/components/sections/ServicesHero';

const Services = () => {

  return (
    <div>
      <ServicesHero />

      {/* Detailed Services Grid */}
      <Section className="bg-white" id="services-list">
        <div className="space-y-24 px-6">
          {services.map((service, index) => (
            <div key={service.slug} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.slice(0, 4).map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-primary-600 w-5 h-5 shrink-0" />
                      <span className="font-medium text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/services/${service.slug}`} className="btn-primary inline-flex group">
                    Learn More <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="btn-secondary !border-primary-600 !text-primary-600 hover:!bg-primary-600 hover:!text-white py-3 px-6 rounded-xl font-bold transition-all">
                    Get Consultation
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex-1 w-full"
              >
                <div className="bg-off-white p-4 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <p className="text-white font-bold text-xl">{service.title} Excellence</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-white">
        <div className="bg-primary-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mx-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Need a Custom Solution?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">
            Our team is ready to build exactly what you need. Let&apos;s discuss your project today and transform your ideas into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link href="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
              Schedule a Discovery Call
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              Chat with Sales <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
