import React from 'react';
import {
  Eye,
  FlaskConical,
  GraduationCap,
  Share2,
  Cpu,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
 

const ConventionalCards = ({ values }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {values.map((item, index) => (
      <div
        key={index}
        className="p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 group"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-light)'
        }}
      >
        <div className="flex flex-col items-start gap-6">
          <div
            className="p-3 rounded-xl transition-colors"
            style={{ backgroundColor: 'var(--primary)' + '20' }}
          >
            {item.icon}
          </div>
          <div>
            <h3
              className="text-xl font-title font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.title}
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

 

const CoreValues = ({ id }) => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Eye className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('visionTitle'),
      description: t('visionText'),
    },
    {
      icon: <FlaskConical className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('researchTitle'),
      description: t('researchText'),
    },
    {
      icon: <GraduationCap className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('educationTitle'),
      description: t('educationText'),
    },
    {
      icon: <Share2 className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('networkingTitle'),
      description: t('networkingText'),
    },
    {
      icon: <Cpu className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('innovationTitle'),
      description: t('innovationText'),
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: t('collaborationTitle'),
      description: t('collaborationText'),
    },
  ];

  

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 relative section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-title font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('valuesTitle')}
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('valuesSubtitle')}
          </p>
        </div>

        <ConventionalCards values={values} />
      </div>
    </section>
  );
};

export default CoreValues;
