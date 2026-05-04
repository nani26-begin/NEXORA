"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300",
        isScrolled ? "bg-black/50 backdrop-blur-md py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
        NEXORA
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        {["Experience", "Retail", "Luxury", "Events", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-accent hover:text-white transition-all">
          Book Venue
        </button>
      </div>
    </motion.nav>
  );
}
