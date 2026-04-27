"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Initial load simulation
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 800); // Wait for exit animation
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] transition-all duration-700 ease-in-out",
        isExiting ? "opacity-0 scale-[1.05] pointer-events-none" : "opacity-100 scale-100"
      )}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_0_40px_rgba(16,185,129,0.3)] mb-8 animate-pulse">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* Text */}
        <div className="overflow-hidden mb-2">
          <h1 className="text-3xl font-black text-white tracking-tighter flex items-center gap-1 animate-slide-up">
            Net-<span className="text-primary">MD</span>
          </h1>
        </div>

        {/* Percentage Counter */}
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-6">
          {progress}% Loading Experience
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/10">
          Innovation &sdot; Excellence &sdot; Digital Growth
        </p>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
