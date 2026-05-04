"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CinematicSection } from "../ui/CinematicSection";
import { GlassCard } from "../ui/GlassCard";
import { Calendar, MapPin, Zap, CheckCircle2 } from "lucide-react";

const spaces = [
  { id: "atrium", name: "The Grand Atrium", capacity: "5000+", type: "Mega Event", price: "$25k/day" },
  { id: "fashion", name: "Fashion Catwalk", capacity: "1000+", type: "Runway/Launch", price: "$15k/day" },
  { id: "waterfront", name: "Waterfront Plaza", capacity: "10000+", type: "Outdoor Concert", price: "$40k/day" },
];

export function EventsBooking() {
  const [selectedSpace, setSelectedSpace] = useState(spaces[0]);
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 3000);
  };

  return (
    <CinematicSection id="events" className="bg-[#080808]">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              A Stage for <br /> <span className="text-accent">Global Events</span>
            </h2>
            <p className="text-white/60 text-lg mb-12">
              From international fashion weeks to blockbuster movie premieres and global product launches. 
              Our interactive platform allows you to select and secure the perfect space for your brand activation.
            </p>

            <div className="space-y-4">
              {spaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpace(space)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    selectedSpace.id === space.id 
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]" 
                      : "border-white/10 hover:border-white/30 bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-xl">{space.name}</h4>
                      <p className="text-white/50 text-sm">{space.type}</p>
                    </div>
                    {selectedSpace.id === space.id && <Zap className="text-accent w-5 h-5 animate-pulse" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-8 border-white/20 bg-white/5 backdrop-blur-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-black/40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-accent/20 absolute animate-ping" />
                  <MapPin className="w-12 h-12 text-accent" />
                </div>
                {/* Simulated Map/Space view */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/50 uppercase tracking-widest text-xs">Capacity</span>
                  <span className="font-bold text-lg">{selectedSpace.capacity} guests</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white/50 uppercase tracking-widest text-xs">Starting From</span>
                  <span className="font-bold text-lg text-accent">{selectedSpace.price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Check Dates</span>
                  </div>
                  <button 
                    onClick={handleBook}
                    className="bg-white text-black font-bold py-4 rounded-xl hover:bg-accent transition-all relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isBooked ? (
                        <motion.div 
                          key="success"
                          initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5" /> Secured
                        </motion.div>
                      ) : (
                        <motion.span key="idle" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}>
                          Book Space
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </GlassCard>
            
            {/* Floating UI element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass p-6 rounded-2xl hidden md:block"
            >
              <p className="text-xs text-white/50 mb-2 uppercase tracking-tighter">Current Occupancy</p>
              <p className="text-2xl font-bold">18%</p>
              <div className="w-24 h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </CinematicSection>
  );
}
