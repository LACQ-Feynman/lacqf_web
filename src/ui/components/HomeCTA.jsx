'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import QuantumText from './QuantumText';
import MagneticWrapper from './MagneticWrapper';

export default function HomeCTA() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] p-8 md:p-16 border backdrop-blur-xl text-center relative overflow-hidden shadow-2xl transition-colors duration-300"
          style={{ 
            borderColor: 'var(--border-light)',
            backgroundColor: isDark ? 'rgba(22, 20, 34, 0.4)' : 'rgba(248, 247, 252, 0.6)'
          }}
        >
          {/* Subtle Energy Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl md:text-6xl font-title font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              <QuantumText text={t('homeCTATitle')} />
            </h2>
            
            <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('homeCTASubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticWrapper>
                <Link
                  href="/comunidade"
                  className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black text-xl transition-all transform active:scale-95 shadow-xl hover:shadow-primary/30"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF' // Always white text for contrast on purple
                  }}
                >
                  {t('homeCTAButton')}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticWrapper>
            </div>
          </div>

          {/* Decorative Corner Orbs */}
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
