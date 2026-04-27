import { Hero } from "@/sections/Hero";
import { Expertise as Services } from "@/sections/Expertise";
import { About } from "@/sections/About";
import { Process } from "@/sections/Process";
import { Testimonials } from "@/sections/Testimonials";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* 1. Hero Section - Bold Value Prop */}
      <Hero />

      {/* 3. Services - Minimal Grid */}
      <Services />

      {/* 4. About - Premium Split Layout */}
      <About />

      {/* 5. Process - Sequential Workflow */}
      <Process />

      {/* 6. Testimonials - Trust Indicators */}
      <Testimonials />

      {/* 7. Call To Action - Conversion Focus */}
      <CTA />
    </main>
  );
}
