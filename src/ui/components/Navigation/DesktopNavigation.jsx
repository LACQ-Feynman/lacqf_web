import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslationKey } from '@/ui/components/Navigation/translationKeys';

const DesktopNavigation = ({ sections, activeSection, scrollToSection }) => {
  const { t } = useLanguage();

  // Centralized mapping via utility

  return (
    <nav
      className="flex gap-6 text-sm font-medium transition-colors duration-300 focus:ring-2 focus:rounded"
      style={{ color: 'var(--text)' }}
      role="navigation"
      aria-label="Menu principal"
    >
      {/* We render section anchors and highlight the active one. */}
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`transition focus:outline-none focus:rounded ${
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
  );
};

export default DesktopNavigation;