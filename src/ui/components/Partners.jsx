'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

import companies from '@/data/mocks/companies.json';
import universities from '@/data/mocks/universities.json';
import leagues from '@/data/mocks/leagues.json';
import master from '@/data/mocks/master.json';
import institutes from '@/data/mocks/institutes.json';
import { getAssetPath } from '@/utils/assets';

const partners = {
  master,
  icts: institutes,
  companies,
  universities,
  leagues,
};

const groupTitleKeys = {
  master: 'partnersGroupMaster',
  icts: 'partnersGroupIcts',
  companies: 'partnersGroupCompanies',
  universities: 'partnersGroupUniversities',
  leagues: 'partnersGroupLeagues',
};

const displayOrder = ['master', 'icts', 'companies', 'universities', 'leagues'];
const partnerCardClass = 'flex items-center justify-center hover:scale-105 transition-transform duration-300 p-6 bg-theme-secondary rounded-xl shadow-lg border border-theme-light';

const PartnerImage = ({ partner, isDark }) => (
  <div className="relative w-[150px] max-w-full h-12 sm:h-14 lg:h-16">
    <Image
      src={getAssetPath((isDark && partner.logoDark) ? partner.logoDark : partner.logo)}
      alt={partner.name}
      fill
      sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 150px"
      loading="lazy"
      className="object-contain transition duration-300"
    />
  </div>
);

export default function Partners({ id }) {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-title font-bold text-theme-primary mb-4">
            {t('partnersTitle')}
          </h2>
          <p className="text-lg text-theme-secondary max-w-3xl mx-auto">
            {t('partnersDescription')}
          </p>
        </div>

        {displayOrder.map((groupKey) => (
          <div key={groupKey} className="mb-16">
            <h3 className="text-2xl font-title font-semibold text-theme-primary text-center mb-10">
              {t(groupTitleKeys[groupKey])}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-12">
              {partners[groupKey].map((partner) => {
                const image = <PartnerImage partner={partner} isDark={isDark} />;

                return partner.url ? (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={partnerCardClass}
                  >
                    {image}
                  </a>
                ) : (
                  <div key={partner.name} className={partnerCardClass}>
                    {image}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
