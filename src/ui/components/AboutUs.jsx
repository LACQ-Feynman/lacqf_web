'use client';

import React from "react";
import Image from "next/image";
import { ActivitySquare, BookOpen, Briefcase, ExternalLink } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/assets';

const AboutUs = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-title font-bold text-theme-primary leading-tight mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-theme-secondary mb-6 leading-relaxed">
              {t('aboutDescription')}
            </p>
            <a
              href="https://www.quantumcoalition.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg shadow-md hover:shadow-lg transition mb-8"
              style={{
                background: 'linear-gradient(to right, var(--primary), var(--primary-dark))'
              }}
            >
              {t('quantumCoalitionLink')}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
              <div className="text-center p-6 bg-theme-tertiary/50 rounded-xl border border-theme-light">
                <h4 className="text-3xl font-bold text-primary">{t('membersCount')}</h4>
                <p className="text-sm text-theme-muted mt-2">{t('membersLabel')}</p>
              </div>
              <div className="text-center p-6 bg-theme-tertiary/50 rounded-xl border border-theme-light">
                <h4 className="text-3xl font-bold text-primary">{t('projectsCount')}</h4>
                <p className="text-sm text-theme-muted mt-2">{t('projectsLabel')}</p>
              </div>
              <div className="text-center p-6 bg-theme-tertiary/50 rounded-xl border border-theme-light">
                <h4 className="text-3xl font-bold text-primary">{t('workshopsCount')}</h4>
                <p className="text-sm text-theme-muted mt-2">{t('workshopsLabel')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-title font-bold text-theme-primary text-center mb-16">
            {t('opportunitiesTitle')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-theme-secondary p-8 rounded-2xl shadow-lg border border-theme-light hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <ActivitySquare className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('opportunitiesResearchTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('opportunitiesResearchDescription')}
              </p>
            </div>

            <div className="bg-theme-secondary p-8 rounded-2xl shadow-lg border border-theme-light hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('opportunitiesWorkshopsTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('opportunitiesWorkshopsDescription')}
              </p>
            </div>

            <div className="bg-theme-secondary p-8 rounded-2xl shadow-lg border border-theme-light hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('opportunitiesCareerTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('opportunitiesCareerDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;