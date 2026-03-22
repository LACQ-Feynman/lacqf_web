import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/ui/components/LanguageDropdown';

const MobileNavigation = ({
  routes,
  pathname,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { t } = useLanguage();

  if (!isMobileMenuOpen) return null;

  return (
    <div
      className="md:hidden mt-4 pb-4 border-t pt-4"
      style={{ borderColor: 'var(--border-light)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
    >
      <h3 id="mobile-nav-title" className="sr-only">Menu de navegação móvel</h3>
      <nav
        className="flex flex-col gap-4"
        style={{ color: 'var(--text)' }}
        role="navigation"
        aria-label="Menu mobile"
      >
        {routes.map((route) => (
          <Link
            key={route.id}
            href={route.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left transition focus:outline-none focus:rounded px-4 py-3 rounded-xl hover:bg-primary/10"
            style={{
              color: pathname === route.path ? 'var(--primary)' : 'var(--text)',
              fontWeight: pathname === route.path ? '700' : '500',
              backgroundColor: pathname === route.path ? 'var(--primary)/5' : 'transparent'
            }}
          >
            {t(route.labelKey)}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 mt-6 px-4 justify-between items-center border-t pt-4" style={{ borderColor: 'var(--border-light)' }}>
        <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Idioma</p>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default MobileNavigation;