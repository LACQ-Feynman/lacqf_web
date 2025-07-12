'use client';

import React from "react";
import Image from "next/image";
import { ActivitySquare, BookOpen, Briefcase } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight font-title">
              {t('aboutTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://placehold.co/400x400?text=Imagem+1"
              alt="Pesquisa colaborativa"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-md"
            />
            <div className="flex flex-col gap-4">
              <Image
                src="https://placehold.co/200x200?text=Imagem+2"
                alt="Workshop"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-md"
              />
              <Image
                src="https://placehold.co/200x200?text=Imagem+3"
                alt="Reuniões em equipe"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-24 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-title">{t('missionTitle')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('missionText1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('missionText2')}
            </p>
          </div>

          <div className="grid gap-6 text-gray-900 dark:text-white">
            <div>
              <h4 className="text-3xl font-bold">{t('membersCount')}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('membersLabel')}</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">{t('projectsCount')}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('projectsLabel')}</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">{t('workshopsCount')}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('workshopsLabel')}</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12 font-title">
            {t('opportunitiesTitle')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <ActivitySquare className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">{t('researchTitle')}</h4>
              </div>
              <p className="text-sm leading-relaxed">
                {t('researchDescription')}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">{t('workshopsTitle')}</h4>
              </div>
              <p className="text-sm leading-relaxed">
                {t('workshopsDescription')}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">{t('careerTitle')}</h4>
              </div>
              <p className="text-sm leading-relaxed">
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