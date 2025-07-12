'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Atom, ChevronsDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-4 pb-16 sm:pt-8 sm:pb-20">
      {/* <Image
        src="https://placehold.co/1200x800?text=Hero+BG"
        alt="Ambiente de trabalho tecnológico"
        fill
        className="object-cover object-center opacity-20 pointer-events-none"
        priority
      /> */}

      <div className="relative z-10 w-full max-w-2xl px-4 sm:px-10 flex flex-col items-start justify-center text-left mx-0 sm:mx-16 bg-white/80 dark:bg-gray-900/80 rounded-xl backdrop-blur-md py-6 sm:py-8 gap-4 sm:gap-7">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-semibold text-indigo-400 mb-1 tracking-wide uppercase"
        >
          {t('heroSubtitle')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl sm:text-4xl md:text-5xl font-title text-gray-900 dark:text-white leading-tight drop-shadow-lg mb-1 sm:mb-2"
        >
          <span className="block mb-1">{t('heroTitle1')}</span>
          <span className="block mb-1">{t('heroTitle2')}</span>
          <span className="block text-indigo-500">{t('heroTitle3')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm sm:text-base text-gray-900 dark:text-white font-bold mb-2 sm:mb-2"
        >
          {t('heroDescription')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 pt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="#explorar"
            className="flex items-center gap-2 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition text-base min-w-[140px] justify-center"
            style={{ boxShadow: 'none' }}
          >
            <Play className="w-5 h-5" />
            {t('exploreButton')}
          </Link>
          <Link
            href="#contato"
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition text-base min-w-[150px] justify-center"
            style={{ boxShadow: 'none' }}
          >
            <Atom className="w-5 h-5" />
            {t('joinButton')}
          </Link>
        </motion.div>
      </div>

      {/* Seta animada para baixo (chevrons duplo) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex flex-col items-center">
        <ChevronsDown className="w-16 h-16 text-indigo-400 animate-bounce" />
      </div>
    </section>
  );
}