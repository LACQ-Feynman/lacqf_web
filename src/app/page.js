import React from "react";

import Hero from "@/ui/components/Hero";
import AboutUs from "@/ui/components/AboutUs";
import Discover from "@/ui/components/Discover";
import CoreValues from "@/ui/components/CoreValues";
import Universities from "@/ui/components/Universities";
import Events from "@/ui/components/Events";
import Sponsors from "@/ui/components/Sponsors";
import Contact from "@/ui/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Discover />
      <CoreValues />
      <Universities />
      <Events />
      <Sponsors />
      <Contact /> 
    </>
  );
}
