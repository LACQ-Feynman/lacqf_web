'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import MagneticWrapper from './MagneticWrapper';
import QuantumText from './QuantumText';

export default function Hero({ id }) {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Unified video source
  const videoSrc = getAssetPath('/videos/hero.webm');

  /* 
  // Future implementation for theme-based videos
  const videoSrc = isDark 
    ? getAssetPath('/videos/Hero dark.mp4') 
    : getAssetPath('/videos/Hero light.mp4');
  */

  return (
    <section
      id={id}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        key={`${videoSrc}-${isDark}`}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: isDark ? 'brightness(0.6)' : 'brightness(0.8)' }}
      >
        <source src={videoSrc} type="video/webm" />
        {/* Fallback for browsers that don't support webm */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-title font-black text-white mb-6 leading-none tracking-tight">
          LACQ FEYNMAN
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
          <QuantumText text="Liga Acadêmica de Computação Quântica" />
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticWrapper>
            <button
              onClick={() => {
                const aboutSection = document.getElementById('whoWeAre');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-10 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/40 flex items-center gap-2"
            >
              {t('exploreButton')}
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </MagneticWrapper>

          <MagneticWrapper>
            <Link
              href="/comunidade"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              {t('joinButton')}
            </Link>
          </MagneticWrapper>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 opacity-50">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }

        .scroll-indicator {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
