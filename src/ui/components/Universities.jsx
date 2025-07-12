'use client';

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import universities from '@/data/mocks/universities.json';

const universityLogos = universities.map((university) => university.logo);

const Universities = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Logos com scroll infinito */}
        <div className="col-span-2 overflow-hidden relative">
          <div className="flex w-max animate-scroll-loop space-x-10">
            {universityLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 bg-white dark:bg-gray-700 shadow rounded-lg flex items-center justify-center p-4">
                <img
                  src={logo}
                  alt={`Logo ${universities[index].name}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center text-center md:items-center md:text-left justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-title">{t('universitiesTitle')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            {t('universitiesDescription')}
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            {t('universitiesButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Universities;