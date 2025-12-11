'use client'; 

import React, { useState } from 'react';
import { Rocket, Atom, GraduationCap, Users, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JoinUs = ({ id }) => {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLanguage();

  const motivos = [
    {
      icon: <Rocket className="w-8 h-8 text-primary-500" />,
      titulo: t('pioneerTitle'),
      texto: t('pioneerText'),
    },
    {
      icon: <Atom className="w-8 h-8 text-primary-500" />,
      titulo: t('researchTitle'),
      texto: t('researchText'),
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
      titulo: t('educationTitle'),
      texto: t('educationText'),
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      titulo: t('networkingTitle'),
      texto: t('networkingText'),
    },
  ];

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title and description */}
          <div className="order-2 lg:order-1">
            <h2
              className="text-4xl md:text-5xl font-title font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('joinUsTitle')}
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('joinUsDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition text-center"
                style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))' }}
              >
                {t('joinButton')}
              </a>
              <a
                href="#discover"
                className="px-8 py-4 font-semibold rounded-xl shadow-md hover:shadow-lg border transition text-center"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--primary)',
                  borderColor: 'var(--primary)' + '30'
                }}
              >
                {t('exploreButton')}
              </a>
            </div>
          </div>
          
          {/* Right: FAQ/Accordion */}
          <div className="order-1 lg:order-2">
            <div
              className="rounded-2xl shadow-lg border p-6"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-light)'
              }}
            >
              <h3
                className="text-2xl font-title font-semibold mb-6 text-center"
                style={{ color: 'var(--text-primary)' }}
              >
                Por que se juntar a nós?
              </h3>
              <div className="flex flex-col gap-4">
                {motivos.map((item, idx) => (
                  <div
                    key={item.titulo}
                    className="border rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      background: 'var(--bg-tertiary)' + '50',
                      borderColor: 'var(--border-light)'
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 focus:outline-none group"
                      onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                      aria-expanded={openIdx === idx}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: 'var(--primary)' + '20' }}
                        >
                          {React.cloneElement(item.icon, { style: { color: 'var(--primary)' } })}
                        </div>
                        <span
                          className="text-lg font-title font-semibold"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {item.titulo}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                        style={{ color: 'var(--primary)' }}
                      />
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      className={`text-base leading-relaxed transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                      style={{
                        overflow: 'hidden',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item.texto}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;