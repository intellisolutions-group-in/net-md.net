"use client";

import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, MagneticButtonWrapper as MagneticButton } from '@/components/Cards';
import { services } from './data';
import { ChevronRight, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ServicesHero } from '@/components/sections/ServicesHero';

const ServiceItem = memo(({ service, index }: { service: any, index: number }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <div 
      ref={sectionRef}
      className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 will-change-transform"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 bg-primary-50 text-primary-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-primary-100/50 will-change-transform"
        >
          <service.icon size={40} />
        </motion.div>
        
        <h2 className="text-section-title mb-8 text-secondary tracking-tight">
          {service.title}
        </h2>
        
        <p className="text-paragraph mb-10">
          {service.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {service.features.slice(0, 4).map((feature: string, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group/item will-change-transform"
            >
              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover/item:bg-primary-600 group-hover/item:text-white transition-all duration-300">
                <CheckCircle size={14} />
              </div>
              <span className="font-bold text-secondary group-hover/item:text-primary-600 transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          <MagneticButton>
            <Link 
              href={`/services/${service.slug}`} 
              className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary-600 transition-all duration-500 shadow-xl shadow-secondary/10 hover:shadow-primary-600/20 group"
            >
              Learn More <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>
        </div>
      </motion.div>

      <motion.div
        style={{ y }}
        className="flex-1 w-full relative will-change-transform"
      >
        <motion.div 
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white p-6 rounded-[3rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative z-10 group will-change-transform"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative">
            <motion.img
              style={{ scale }}
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <p className="font-bold text-2xl tracking-tight">Market Leader</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className={`absolute -z-10 w-64 h-64 blur-3xl opacity-20 rounded-full animate-pulse ${index % 2 === 0 ? '-top-10 -right-10 bg-primary-400' : '-bottom-10 -left-10 bg-accent'}`}></div>
      </motion.div>
    </div>
  );
});
ServiceItem.displayName = "ServiceItem";

const Services = () => {
  return (
    <div className="overflow-x-hidden selection:bg-primary-600 selection:text-white bg-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #16a34a; }
      `}</style>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <ServicesHero />

      {/* Detailed Services Grid */}
      <Section className="bg-white relative z-10" id="services-list">
        <div className="space-y-40 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
