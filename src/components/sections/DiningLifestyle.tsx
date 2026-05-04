"use client";

import { motion } from "framer-motion";
import { CinematicSection } from "../ui/CinematicSection";
import { GlassCard } from "../ui/GlassCard";
import { Utensils, Coffee, Pizza, Sparkles } from "lucide-react";

const venues = [
  { 
    name: "Fashion Avenue Lounge", 
    type: "Fine Dining", 
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    icon: Sparkles 
  },
  { 
    name: "The Waterfront Grill", 
    type: "Casual & Views", 
    image: "https://images.unsplash.com/photo-1550966841-3ee7adac1668?q=80&w=800",
    icon: Utensils 
  },
  { 
    name: "Boutique Brews", 
    type: "Specialty Coffee", 
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    icon: Coffee 
  },
];

export function DiningLifestyle() {
  return (
    <CinematicSection className="bg-[#050505]">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Lifestyle Redefined</h2>
            <p className="text-white/60 text-lg">
              A curated selection of over 200 dining concepts, from Michelin-starred 
              excellence to artisanal cafes with breathtaking views of the Dubai Fountain.
            </p>
          </div>
          <button className="hidden md:block px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold mt-8">
            View All Dining
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
            >
              <img 
                src={venue.image} 
                alt={venue.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <venue.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-white">{venue.name}</h3>
                <p className="text-white/60 text-sm">{venue.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CinematicSection>
  );
}
