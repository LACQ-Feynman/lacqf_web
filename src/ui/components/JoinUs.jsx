'use client'; 

import React, { useState } from 'react';
import { Rocket, Atom, GraduationCap, Users, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JoinUs = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLanguage();

  const motivos = [
    {
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
      titulo: t('pioneerTitle'),
      texto: t('pioneerText'),
    },
    {
      icon: <Atom className="w-6 h-6 text-indigo-500" />,
      titulo: t('researchTitle'),
      texto: t('researchText'),
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
      titulo: t('educationTitle'),
      texto: t('educationText'),
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      titulo: t('networkingTitle'),
      texto: t('networkingText'),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Esquerda: Título */}
        <div className="md:pr-8">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-left text-white mb-6 drop-shadow-lg">
            {t('joinUsTitle')}
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-md">
            {t('joinUsDescription')}
          </p>
        </div>
        {/* Direita: FAQ/Accordion */}
        <div className="flex flex-col gap-3 w-full">
          {motivos.map((item, idx) => (
            <div key={item.titulo} className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 focus:outline-none group"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <div className="flex items-center gap-3 text-left">
                  {item.icon}
                  <span className="text-lg font-title font-semibold text-white">{item.titulo}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-5 pb-4 text-gray-300 text-base leading-relaxed transition-all duration-200 ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                style={{overflow: 'hidden'}}
              >
                {item.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs; 