"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CinematicSection } from "../ui/CinematicSection";

const brands = [
  "LOUIS VUITTON", "CHANEL", "HERMÈS", "GUCCI", 
  "PRADA", "ROLEX", "CARTIER", "DIOR", 
  "SAINT LAURENT", "TIFFANY & CO.", "BALENCIAGA", "FENDI"
];

export function RetailLuxury() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <CinematicSection id="retail" className="bg-black py-40">
      <div className="max-w-7xl w-full" ref={containerRef}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gradient">
              The Home of <br /> Luxury
            </h2>
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl">
              Showcasing the world's most coveted brands in an environment 
              crafted for excellence. From the legendary Fashion Avenue to 
              exclusive boutiques.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
              <div className="aspect-[3/4] rounded-2xl bg-[url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-20">
              <div className="aspect-square rounded-2xl bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="aspect-[3/4] rounded-2xl bg-[url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>

        <div className="border-y border-white/10 py-10 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-scroll">
            {[...brands, ...brands].map((brand, i) => (
              <span 
                key={i} 
                className="text-4xl md:text-6xl font-black text-white/5 mx-12 hover:text-accent/40 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </CinematicSection>
  );
}
