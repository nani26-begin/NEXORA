"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, X } from "lucide-react";

export function FooterCTA() {
  return (
    <section id="contact" className="relative bg-black pt-40 pb-20 px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-accent/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-10"
          >
            Ready to <span className="text-accent">Join the Future?</span>
          </motion.h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12">
            Secure your presence in the world's most visited destination. 
            Join a network of global visionaries and industry leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
              Lease Now
            </button>
            <button className="px-10 py-5 rounded-full glass border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
              Request Media Kit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-20">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">NEXORA</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              The premier interactive platform for global retail destinations. 
              Powered by innovation, designed for impact.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-accent transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Retail Space</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Tiers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Event Spaces</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Connect</h4>
            <div className="flex gap-4 mb-8">
              {[Globe, X, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full glass hover:bg-accent transition-all group">
                  <Icon className="w-5 h-5 group-hover:text-black" />
                </a>
              ))}
            </div>
            <div className="space-y-4 text-sm text-white/40">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>partner@nexora.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+971 4 362 7500</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <div className="flex flex-col gap-2">
            <p>© 2026 NEXORA Platform. All rights reserved.</p>
            <p>Created by Ajit babu kakumanu</p>
          </div>
          <p>Designed for The Dubai Mall.</p>
        </div>
      </div>
    </section>
  );
}
