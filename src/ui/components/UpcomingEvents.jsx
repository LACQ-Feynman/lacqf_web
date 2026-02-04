import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const upcomingEvents = [
  {
    titleKey: "upcomingEvent1Title",
    dateKey: "upcomingEvent1Date",
    timeKey: "upcomingEvent1Time",
    locationKey: "upcomingEvent1Location",
    link: "#",
    isPlaceholder: true,
  },
];

const UpcomingEvents = ({ id }) => {
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
            {t('upcomingEventsTitle')}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('upcomingEventsSubtitle')}
          </p>
        </div>

        {upcomingEvents.length > 0 && !upcomingEvents[0].isPlaceholder ? (
          <div className="space-y-8">
            {upcomingEvents.map((event, idx) => (
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
                      className="text-xl font-title font-semibold mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t(event.titleKey)}
                    </h3>
                    <div className="space-y-2">
                      <div
                        className="flex items-center"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Calendar
                          className="w-5 h-5 mr-2"
                          style={{ color: 'var(--primary)' }}
                        />
                        <span className="font-medium">{t(event.dateKey)}</span>
                      </div>
                      <div
                        className="flex items-center"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Clock
                          className="w-5 h-5 mr-2"
                          style={{ color: 'var(--primary)' }}
                        />
                        <span className="font-medium">{t(event.timeKey)}</span>
                      </div>
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
        ) : (
          <div
            className="rounded-2xl p-12 text-center border-2 border-dashed"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-light)'
            }}
          >
            <Calendar
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: 'var(--primary)' }}
            />
            <h3
              className="text-2xl font-title font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('noUpcomingEventsTitle')}
            </h3>
            <p
              className="text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('noUpcomingEventsText')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
