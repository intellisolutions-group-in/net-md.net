"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-[#111111] py-24 px-6 border-t border-zinc-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-black tracking-tighter uppercase">
                Net-<span className="text-primary italic">MD</span>
              </span>
            </Link>
            <p className="text-base text-[#555555] font-medium leading-relaxed">
              Engineering the next generation of digital infrastructures with integrity and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">About</Link></li>
                <li><Link href="/services" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">Services</Link></li>
                <li><Link href="/contact" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">Social</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">LinkedIn</a></li>
                <li><a href="#" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">Twitter</a></li>
                <li><a href="#" className="text-[#777777] hover:text-[#111111] transition-colors text-sm font-medium">Instagram</a></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">Office</h4>
              <p className="text-[#555555] text-sm font-medium leading-relaxed">
                Cyber City, Hyderabad <br />
                TG 500081, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-[#777777] uppercase tracking-[0.2em]">
            &copy; 2024 Net-MD IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-12 text-[10px] font-bold text-[#777777] uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-[#111111] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#111111] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
