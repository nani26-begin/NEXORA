"use client";

import { motion } from "framer-motion";
import { CinematicSection } from "../ui/CinematicSection";
import { PlayCircle, Info } from "lucide-react";

const attractions = [
  {
    title: "Dubai Aquarium",
    desc: "A window to the ocean's depths.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-fish-swimming-in-the-blue-water-of-an-aquarium-4112-large.mp4"
  },
  {
    title: "The Ice Rink",
    desc: "Olympic-sized cool in the desert.",
    image: "https://images.unsplash.com/photo-1517177646641-83fe182e4093?q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-person-ice-skating-at-night-42416-large.mp4"
  },
  {
    title: "Reel Cinemas",
    desc: "Cinematic luxury reimagined.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800",
    video: "https://assets.mixkit.co/videos/preview/mixkit-audience-in-a-movie-theater-looking-at-the-screen-4054-large.mp4"
  }
];

export function Entertainment() {
  return (
    <CinematicSection className="bg-black">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">Unforgettable Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {attractions.map((attr, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] glass border-white/5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={attr.image} 
                  alt={attr.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{attr.title}</h3>
                  <button className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/50">{attr.desc}</p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                  <button className="flex-1 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-accent transition-all">
                    Explore
                  </button>
                  <button className="px-5 py-3 rounded-xl glass text-white font-bold text-sm hover:bg-white/10 transition-all">
                    Partner
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
}
