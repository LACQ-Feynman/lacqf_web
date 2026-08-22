'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import universities from '@/data/mocks/universities.json';
import { getAssetPath } from '@/utils/assets';
import { EXTERNAL_LINKS } from '@/utils/links';
import QuantumText from "./QuantumText";

const Universities = ({ id }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const carouselRef = useRef(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || typeof IntersectionObserver === 'undefined') {
      setIsCarouselVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsCarouselVisible(entry.isIntersecting),
      { rootMargin: '200px 0px' }
    );
    observer.observe(carousel);

    return () => observer.disconnect();
  }, []);

  const universityLogos = universities.map((university) => 
    getAssetPath((isDark && university.logoDark) ? university.logoDark : university.logo)
  );

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-title font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            <QuantumText text={t('universitiesTitle')} />
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('universitiesDescription')}
          </p>
        </div>

        {/* Infinite-scroll strip of university logos */}
        <div
          ref={carouselRef}
          className="overflow-hidden mb-16 relative"
          role="region"
          aria-label={t('universitiesCarouselLabel')}
        >
          <div className={`flex w-max ${isCarouselVisible ? 'animate-scroll-loop' : ''} space-x-8 sm:space-x-12 py-4`}>
            {[...universityLogos, ...universityLogos].map((logo, index) => {
              const isDuplicate = index >= universityLogos.length;

              return (
              <div
                key={`${logo}-${index}`}
                aria-hidden={isDuplicate || undefined}
                className="flex-shrink-0 w-28 h-14 sm:w-36 sm:h-16 md:w-40 md:h-20 shadow-lg rounded-xl flex items-center justify-center p-3 sm:p-4 border"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-light)'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={isDuplicate ? '' : `${t('universityLogoPrefix')} ${universities[index % universities.length].name}`}
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a
            href={EXTERNAL_LINKS.whatsapp.community}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition font-title text-lg"
            style={{
              background: 'linear-gradient(to right, var(--primary), var(--primary-light))'
            }}
          >
            {t('universitiesButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Universities;