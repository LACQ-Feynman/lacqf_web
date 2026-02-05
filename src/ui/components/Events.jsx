import React, { useState } from "react";
import { CalendarDays, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/assets";

const events = [
  {
    titleKey: "event3Title",
    dateKey: "event3Date",
    descriptionKey: "event3Description",
    image: getAssetPath("/images/lacqf/Summer Schoo.webp"),
  },
  {
    titleKey: "event4Title",
    dateKey: "event4Date",
    descriptionKey: "event4Description",
    image: getAssetPath("/images/lacqf/Quantum Year Wrap-Up.webp"),
  },
  {
    titleKey: "event1Title",
    dateKey: "event1Date",
    descriptionKey: "event1Description",
  },
  {
    titleKey: "event2Title",
    dateKey: "event2Date",
    descriptionKey: "event2Description",
  },
];

const EventCard = ({ event }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-light)'
      }}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3
              className="text-xl font-title font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {t(event.titleKey)}
            </h3>
            <div
              className="flex items-center"
              style={{ color: 'var(--text-muted)' }}
            >
              <CalendarDays
                className="w-5 h-5 mr-2"
                style={{ color: 'var(--primary)' }}
              />
              <span className="font-medium">{t(event.dateKey)}</span>
            </div>
          </div>
          <div className="md:ml-4">
            {event.link ? (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg shadow-md hover:shadow-lg transition"
                style={{
                  background: 'linear-gradient(to right, var(--primary), var(--primary-dark))'
                }}
              >
                {t('eventsDetails')}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            ) : (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, var(--primary), var(--primary-dark))'
                }}
              >
                {t('eventsDetails')}
                {isExpanded ? (
                  <ChevronUp className="ml-2 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-2 w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className={`pt-8 border-t mt-8 flex flex-col items-center gap-8 ${event.image ? 'lg:flex-row lg:items-start' : 'text-center'}`}
                style={{ borderColor: 'var(--border-light)' }}
              >
                {event.image && (
                  <div className="w-full lg:w-1/2 aspect-video relative rounded-xl overflow-hidden shadow-inner flex-shrink-0 group">
                    <Image
                      src={event.image}
                      alt={t(event.titleKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className={`flex-1 ${!event.image ? 'max-w-3xl mx-auto' : ''}`}>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t(event.descriptionKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Events = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-title font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('pastEventsTitle')}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('pastEventsSubtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>

        <div
          className="mt-16 text-center border-t pt-8"
          style={{
            borderColor: 'var(--border-light)',
            color: 'var(--text-muted)'
          }}
        >
          <p>
            {t('eventsComingSoon')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;

