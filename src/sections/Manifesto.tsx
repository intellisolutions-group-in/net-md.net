"use client";

import React from "react";
import { ScrollRevealTypography } from "@/components/ScrollRevealTypography";

export const Manifesto = () => {
  return (
    <section className="bg-zinc-50 overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto">
        <ScrollRevealTypography
          text="Our mission is to simplify complexity. We build digital infrastructures that empower the next generation of global innovators. Engineering excellence is not our goal—it is our baseline. Integrity. Innovation. Scale."
          className="py-64"
        />
      </div>
    </section>
  );
};
