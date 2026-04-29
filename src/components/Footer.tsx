"use client";

import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-accent to-primary-600"></div>

      <div className="container-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Net-<span className="text-primary-500">MD</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering global enterprises with cutting-edge IT consulting, cloud solutions, and transformative digital strategies since 2012.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary-500">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary-500">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'IT Consulting', slug: 'it-consulting' },
                { name: 'Cloud Solutions', slug: 'cloud-solutions' },
                { name: 'Web Development', slug: 'web-development' },
                { name: 'SEO Optimization', slug: 'seo-optimization' },
                { name: 'Social Media', slug: 'social-media-marketing' },
                { name: 'API Integration', slug: 'api-integration' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={`/services/${item.slug}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-primary-500">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  123 Tech Square, Cyber City,<br />Hyderabad, TG 500081
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={20} />
                </div>
                <p className="text-gray-400 text-sm">
                  +91 40 1234 5678<br />
                  +91 98765 43210
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={20} />
                </div>
                <p className="text-gray-400 text-sm">
                  hello@net-md.com<br />
                  support@net-md.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} Net-MD IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
