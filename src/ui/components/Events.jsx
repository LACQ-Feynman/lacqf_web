import React from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const events = [
  {
    titleKey: "event1Title",
    dateKey: "event1Date",
    link: "https://example.com/data-science-summit",
  },
  {
    titleKey: "event2Title",
    dateKey: "event2Date",
    link: "https://example.com/workshop-quantica-ufsc",
  },
];

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
            <div
              key={idx}
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-light)'
              }}
            >
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
                </div>
              </div>
            </div>
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
