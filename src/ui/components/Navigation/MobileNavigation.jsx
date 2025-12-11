import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/ui/components/LanguageDropdown';
import { getTranslationKey } from '@/ui/components/Navigation/translationKeys';

const MobileNavigation = ({
  sections,
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection
}) => {
  const { t } = useLanguage();

  // Centralized mapping via utility

  if (!isMobileMenuOpen) return null;

  return (
    <div
      className="md:hidden mt-4 pb-4 border-t pt-4"
      style={{ borderColor: 'var(--border-light)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
    >
      {/* Simple vertical navigation drawer when the menu is open. */}
      <h3 id="mobile-nav-title" className="sr-only">Menu de navegação móvel</h3>
      <nav
        className="flex flex-col gap-4"
        style={{ color: 'var(--text)' }}
        role="navigation"
        aria-label="Menu mobile"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`text-left transition focus:outline-none focus:rounded ${
              activeSection === section.id ? 'font-semibold' : ''
            }`}
            style={{
              color: activeSection === section.id ? 'var(--primary)' : 'var(--text)'
            }}
            onMouseEnter={(e) => {
              if (activeSection !== section.id) {
                e.target.style.color = 'var(--primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== section.id) {
                e.target.style.color = 'var(--text)';
              }
            }}
            aria-current={activeSection === section.id ? 'page' : undefined}
          >
            {t(getTranslationKey(section.id))}
          </button>
        ))}
      </nav>
      <div className="flex gap-4 mt-4 justify-center">
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default MobileNavigation;