import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticWrapper from '../MagneticWrapper';

const DesktopNavigation = ({ routes, pathname }) => {
  const { t } = useLanguage();

  return (
    <nav
      className="flex gap-8 text-sm font-medium transition-colors duration-300 focus:ring-2 focus:rounded items-center"
      style={{ color: 'var(--text)' }}
      role="navigation"
      aria-label="Menu principal"
    >
      {routes.map((route) => (
        <MagneticWrapper key={route.id} strength={0.2}>
          <Link
            href={route.path}
            className="transition-all duration-200 focus:outline-none focus:rounded hover:text-primary relative py-1"
            style={{
              color: pathname === route.path ? 'var(--primary)' : 'var(--text)',
              fontWeight: pathname === route.path ? '700' : '500'
            }}
            aria-current={pathname === route.path ? 'page' : undefined}
          >
            {t(route.labelKey)}
            {pathname === route.path && (
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 rounded-full" 
                style={{ backgroundColor: 'var(--primary)' }}
              />
            )}
          </Link>
        </MagneticWrapper>
      ))}
    </nav>
  );
};

export default DesktopNavigation;