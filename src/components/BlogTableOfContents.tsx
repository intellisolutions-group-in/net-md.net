"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/utils/cn";

interface TOCItem {
  id: string;
  label: string;
}

interface BlogTableOfContentsProps {
  items: TOCItem[];
}

export const BlogTableOfContents = ({ items }: BlogTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -70% 0px", // Trigger when element is roughly in the top-middle of the viewport
      threshold: 0,
    });

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => observer.current?.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Space for the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-32 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        In this article
      </p>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={cn(
              "block py-2 text-sm font-bold transition-all duration-300 relative pl-4 border-l-2",
              activeId === item.id
                ? "text-primary border-primary bg-primary/5 translate-x-1"
                : "text-zinc-400 border-transparent hover:text-zinc-600 hover:border-zinc-200"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
