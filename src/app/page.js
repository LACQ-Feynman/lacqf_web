import React from "react";

import Hero from "@/ui/components/Hero";
import Partners from "@/ui/components/Partners";
import AboutUs from "@/ui/components/AboutUs";
import Patronum from "@/ui/components/Patronum";
import Discover from "@/ui/components/Discover";
import CoreValues from "@/ui/components/CoreValues";
import Universities from "@/ui/components/Universities";
import JoinUs from "@/ui/components/JoinUs";
import Events from "@/ui/components/Events";
import Contact from "@/ui/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <AboutUs />
      <Patronum />
      <Discover />
      <CoreValues />
      <Universities />
      <JoinUs />
      <Events />
      <Contact /> 
    </>
  );
}
