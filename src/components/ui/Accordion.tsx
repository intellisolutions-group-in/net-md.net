"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const AccordionContext = React.createContext<any>(null);

export const Accordion = ({ children, type = "single", collapsible = true, className }: any) => {
  const [openValue, setOpenValue] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    if (openValue === value) {
      if (collapsible) setOpenValue(null);
    } else {
      setOpenValue(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleItem }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, value, className }: any) => {
  return (
    <div className={cn("border-b", className)} data-value={value}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger = ({ children, value, className }: any) => {
  const { openValue, toggleItem } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all",
        className
      )}
    >
      {children}
      <svg
        className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export const AccordionContent = ({ children, value, className }: any) => {
  const { openValue } = React.useContext(AccordionContext);
  const isOpen = openValue === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn("overflow-hidden text-sm", className)}
        >
          <div className="pb-4 pt-0">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
