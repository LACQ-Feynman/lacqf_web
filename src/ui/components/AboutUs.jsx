'use client';

import React from "react";
import Image from "next/image";
import { ActivitySquare, BookOpen, Briefcase } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-title font-bold text-theme-primary leading-tight mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-theme-secondary mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
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

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative">
              <Image
                src="https://placehold.co/600x400?text=Quantum+Research"
                alt="Pesquisa colaborativa"
                width={600}
                height={400}
                className="rounded-2xl object-cover shadow-xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://placehold.co/300x200?text=Workshop"
                  alt="Workshop"
                  width={300}
                  height={200}
                  className="rounded-2xl object-cover shadow-xl w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://placehold.co/300x200?text=Team+Meeting"
                  alt="Reuniões em equipe"
                  width={300}
                  height={200}
                  className="rounded-2xl object-cover shadow-xl w-full h-full"
                  loading="lazy"
                />
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
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('researchTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('researchDescription')}
              </p>
            </div>

            <div className="bg-theme-secondary p-8 rounded-2xl shadow-lg border border-theme-light hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('workshopsTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('workshopsDescription')}
              </p>
            </div>

            <div className="bg-theme-secondary p-8 rounded-2xl shadow-lg border border-theme-light hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-title font-semibold text-theme-primary">{t('careerTitle')}</h4>
              </div>
              <p className="text-theme-secondary leading-relaxed">
                {t('careerDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;