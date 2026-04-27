import React from "react";
import { SectionHeading } from "@/components/SectionHeading";

const leaders = [
  { name: "John Doe", role: "CEO & Founder", image: "JD" },
  { name: "Jane Smith", role: "Chief Technology Officer", image: "JS" },
  { name: "Alex Kumar", role: "Head of Operations", image: "AK" },
  { name: "Sarah Chen", role: "Design Director", image: "SC" },
];

export const Leadership = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="THE EXPERTS"
          title="Meet Our Leadership Team"
          subtitle="Driving innovation and excellence through decades of collective experience in global IT markets."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="group">
              <div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden mb-6 relative border border-zinc-200">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold text-4xl">
                  {leader.image}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <div className="flex gap-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary text-[10px]">IN</div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary text-[10px]">TW</div>
                   </div>
                </div>
              </div>
              <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{leader.name}</h4>
              <p className="text-muted text-sm">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
