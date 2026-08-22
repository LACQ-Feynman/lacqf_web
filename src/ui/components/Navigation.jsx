'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import LanguageDropdown from './LanguageDropdown';
import { Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from './ThemeToggle';
import DesktopNavigation from './Navigation/DesktopNavigation';
import MobileNavigation from './Navigation/MobileNavigation';
import { getAssetPath } from '@/utils/assets';
import { usePathname } from 'next/navigation';

const NAV_ROUTES = [
  { id: 'home', path: '/', labelKey: 'home' },
  { id: 'sobre', path: '/sobre', labelKey: 'about' },
  { id: 'eventos', path: '/eventos', labelKey: 'events' },
  { id: 'comunidade', path: '/comunidade', labelKey: 'join' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const progressBarRef = useRef(null);
  const isScrolledRef = useRef(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    let animationFrameId = null;

    const updateScrollState = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const nextIsScrolled = scrollTop > 10;

      if (isScrolledRef.current !== nextIsScrolled) {
        isScrolledRef.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }

      if (pathname !== '/' || !progressBarRef.current) return;

      const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
        : 0;

      progressBarRef.current.style.transform = `scaleX(${progress / 100})`;
      progressBarRef.current.setAttribute('aria-valuenow', progress.toFixed(2));
    };

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;
        updateScrollState();
      });
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathname]);

  return (
    <>
      {pathname === '/' && (
        <div
          ref={progressBarRef}
          className="fixed top-0 left-0 h-1 z-50 scroll-progress-bar"
          style={{ transform: 'scaleX(0)' }}
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={t('scrollProgress')}
        />
      )}
      {/* Accessibility: let keyboard users skip the header quickly */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:border skip-link"
      >
        {t('skipToContent')}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-md border-b py-2 nav-header-scrolled'
          : 'py-4 nav-header-transparent'
          }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-bold font-title focus:outline-none focus:ring-2 focus:rounded nav-link"
            >
              <Image
                src={getAssetPath("/images/lacqf/logo.webp")}
                alt="LACQ Feynman Logo"
                width={32}
                height={32}
                sizes="32px"
                className="w-8 h-8 object-contain"
              />
              <span>LACQ Feynman</span>
            </Link>

            {/* Mobile menu button — toggles an inline drawer below the header */}
            <div className="flex items-center gap-4">
              <div className="md:hidden flex items-center">
                <AnimatedThemeToggler />
              </div>
              <button
                ref={mobileMenuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:rounded mobile-menu-btn"
                aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <div className="hidden md:flex items-center gap-6">
                <DesktopNavigation
                  routes={NAV_ROUTES}
                  pathname={pathname}
                />
                <div className="flex items-center gap-4">
                  <AnimatedThemeToggler />
                  <LanguageDropdown />
                </div>
              </div>
            </div>
          </div>

          {/* The mobile drawer appears below the header when open */}
          <MobileNavigation
            routes={NAV_ROUTES}
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            menuButtonRef={mobileMenuButtonRef}
          />
        </div>
      </header>

      <div className="h-14 md:h-16 lg:h-20" />
    </>
  );
};

export default Navigation;
