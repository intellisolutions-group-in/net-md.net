import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] p-16 md:p-24 text-center mb-16 relative overflow-hidden text-[#111111]">
          <SectionHeading
            title="Let's Start a Conversation"
            subtitle="Have a project in mind or just want to learn more about our services? Reach out to us today."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded-[40px] p-10 md:p-12 text-[#111111] space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Our Location</p>
                    <p className="text-[#555555] text-sm leading-relaxed">404, Cyber Heights, HITEC City, Hyderabad, Telangana 500081, India</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone Number</p>
                    <p className="text-[#555555] text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email Address</p>
                    <p className="text-[#555555] text-sm">contact@net-md.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Working Hours</p>
                    <p className="text-[#555555] text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold mb-6">Follow Us</p>
              <div className="flex gap-4">
                {["fb", "tw", "li", "ig"].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-all text-xs font-bold uppercase cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-zinc-100">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Full Name</label>
                  <input type="text" placeholder="Arjun Sharma" className="w-full px-6 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input type="email" placeholder="arjun@example.com" className="w-full px-6 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Interested Service</label>
                <select className="w-full px-6 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                  <option>IT Consulting</option>
                  <option>Cloud Solutions</option>
                  <option>Web Development</option>
                  <option>SEO Optimization</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Your Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-6 py-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>

              <Button className="w-full py-5 text-lg shadow-2xl shadow-primary/30">
                Send Message <span>🚀</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
