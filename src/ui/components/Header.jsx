'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LanguageDropdown from './LanguageDropdown';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);

      // Muda o header após ~95vh (mais seguro para cobrir heróis maiores)
      setIsScrolledPastHero(scrollTop > window.innerHeight * 0.95);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializa corretamente no carregamento
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra de progresso no topo */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cabeçalho */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300
          ${isScrolledPastHero
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white'
            : 'bg-transparent text-white'}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold">
              LACQ Feynman
            </Link>

            <div className="flex items-center gap-6">
              <nav
                className={`hidden md:flex gap-6 text-sm font-medium transition-colors duration-300`}
              >
                <Link href="#about" className="hover:text-indigo-400 transition">Sobre</Link>
                <Link href="#universities" className="hover:text-indigo-400 transition">Patrono</Link>
                <Link href="#events" className="hover:text-indigo-400 transition">Eventos</Link>
                <Link href="#sponsors" className="hover:text-indigo-400 transition">Patrocinadores</Link>
                <Link href="#contact" className="hover:text-indigo-400 transition">Contato</Link>
              </nav>
              <ThemeToggle />
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Preenche espaço do header */}
      <div className="h-16" />
    </>
  );
};

export default Header;