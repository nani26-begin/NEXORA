import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyProperty } from "@/components/sections/WhyProperty";
import { RetailLuxury } from "@/components/sections/RetailLuxury";
import { DiningLifestyle } from "@/components/sections/DiningLifestyle";
import { Entertainment } from "@/components/sections/Entertainment";
import { EventsBooking } from "@/components/sections/EventsBooking";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyProperty />
      <RetailLuxury />
      <DiningLifestyle />
      <Entertainment />
      <EventsBooking />
      <FooterCTA />
    </main>
  );
}

