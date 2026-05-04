"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export function CinematicSection({
  children,
  className,
  id,
  fullHeight = true,
}: CinematicSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative w-full overflow-hidden flex flex-col items-center justify-center px-6 py-20",
        fullHeight && "min-h-screen",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
