'use client';

import { Calendar } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useReducedMotion } from "framer-motion";
import QuantumText from "./QuantumText";

// Nenhum evento agendado no momento: a seção exibe o estado vazio.
// Para anunciar um novo evento, crie o card com as chaves de tradução
// correspondentes em src/locales/*.json.

const UpcomingEvents = ({ id }) => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-bg overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8 }}
          >
            <h2
              className="text-4xl md:text-6xl font-title font-bold mb-6 tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              <QuantumText text={t('upcomingEventsTitle')} />
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full" />
            <p
              className="text-xl max-w-3xl mx-auto opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('upcomingEventsSubtitle')}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] p-12 md:p-16 text-center border-2 border-dashed overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-light)'
          }}
        >
          <div
            className="w-20 h-20 mx-auto mb-8 rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 12%, transparent)' }}
          >
            <Calendar
              className="w-10 h-10"
              style={{ color: 'var(--primary)' }}
              aria-hidden="true"
            />
          </div>
          <h3
            className="text-2xl md:text-3xl font-title font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('noUpcomingEventsTitle')}
          </h3>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('noUpcomingEventsText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
