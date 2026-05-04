"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover cinematic-video"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-at-night-with-bright-lights-28261-large.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient"
        >
          NEXORA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-10 max-w-2xl mx-auto"
        >
          "Not Just a Mall. A Global Platform."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-accent transition-all transform hover:scale-105">
            Explore Destination
          </button>
          <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
            Partner With Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase mb-2">Scroll to Discover</span>
        <ChevronDown className="text-white/40 w-6 h-6" />
      </motion.div>
    </section>
  );
}
