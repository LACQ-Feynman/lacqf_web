'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";

import Hero from "@/ui/components/Hero";
import WhoWeAre from "@/ui/components/WhoWeAre";
import AboutUs from "@/ui/components/AboutUs";
import Partners from "@/ui/components/Partners";
import UpcomingEvents from "@/ui/components/UpcomingEvents";
import HomeCTA from "@/ui/components/HomeCTA";

export default function Home() {
  const sections = useMemo(() => [
    { id: 'whoWeAre', title: 'Quem Somos' },
    { id: 'about', title: 'Quantum Coalition' },
    { id: 'sponsors', title: 'Parceiros' },
    { id: 'upcomingEvents', title: 'Próximos Eventos' },
    { id: 'membership', title: 'Junte-se' },
  ], []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Track scroll progress for the top progress bar.
    let scrollThrottled = false;

    const handleScroll = () => {
      if (!scrollThrottled) {
        scrollThrottled = true;
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const progress = (scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
          setScrollProgress(progress);
          scrollThrottled = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <>
        {/* Progress bar */}
        <div
          className="fixed top-0 left-0 h-1 z-50 scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Progresso de rolagem"
        />
        <Navigation />
        <div id="main-content" tabIndex="-1">
          <Hero id="hero" />
          <WhoWeAre id="whoWeAre" />
          <AboutUs id="about" />
          <Partners id="sponsors" />
          <UpcomingEvents id="upcomingEvents" />
          <HomeCTA id="membership" />
        </div>
      </>
    </Layout>
  );
}
