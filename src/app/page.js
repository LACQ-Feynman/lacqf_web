'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";

import Hero from "@/ui/components/Hero";
import AboutUs from "@/ui/components/AboutUs";
import Patronum from "@/ui/components/Patronum";
import CoreValues from "@/ui/components/CoreValues";
import Universities from "@/ui/components/Universities";
import Events from "@/ui/components/Events";
import Partners from "@/ui/components/Partners";
import MembershipSection from "@/ui/components/MembershipSection";

export default function Home() {
  const sections = useMemo(() => [
    { id: 'about', title: 'About' },
    // Patron and Values are accessible via scroll/context of About
    { id: 'universities', title: 'Universities' },
    { id: 'events', title: 'Events' },
    { id: 'membership', title: 'Join Us' },
    { id: 'sponsors', title: 'Sponsors' },
  ], []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Track scroll progress for the top progress bar.
    // We prefer transform-based updates (scaleX) to avoid layout thrash.
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
        <Navigation sections={sections} />
        <div id="main-content" tabIndex="-1">
          <Hero id="hero" />
          <Partners id="sponsors" />
          <AboutUs id="about" />
          <Patronum id="patronum" />
          <CoreValues id="values" />
          <Universities id="universities" />
          <Events id="events" />
          <MembershipSection id="membership" />
        </div>
      </>
    </Layout>
  );
}
