"use client";

import { motion } from "framer-motion";
import { CinematicSection } from "../ui/CinematicSection";
import { GlassCard } from "../ui/GlassCard";
import { Users, Globe, ShoppingBag, Star } from "lucide-react";

const stats = [
  { label: "Annual Visitors", value: "80M+", icon: Users },
  { label: "Global Brands", value: "1,200+", icon: ShoppingBag },
  { label: "Total Area", value: "12.1M sq ft", icon: Globe },
  { label: "Luxury Tiers", value: "200+", icon: Star },
];

export function WhyProperty() {
  return (
    <CinematicSection id="experience" className="bg-[#080808]">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            The Epicenter of Global Culture
          </motion.h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Located in the heart of Dubai, NEXORA presents a platform that transcends traditional retail,
            connecting the world's most prestigious brands with a global audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="text-center group">
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Map Visualization Placeholder */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-white/10 group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-2">Global Connectivity</h4>
              <p className="text-white/60 text-sm max-w-md">
                Strategically positioned as the gateway between East and West, reaching over 2 billion people within a 4-hour flight.
              </p>
            </div>
            <button className="px-6 py-3 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold hover:bg-accent hover:text-white transition-all">
              View Reach Map
            </button>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
