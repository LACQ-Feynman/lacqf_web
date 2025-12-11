import React from "react";
import { CalendarDays, ExternalLink } from "lucide-react";

const events = [
  {
    title: "Data Science Summit 2024",
    date: "Outubro 2024",
    link: "https://example.com/data-science-summit",
  },
  {
    title: "VII Workshop de Computação Quântica - UFSC",
    date: "Outubro 2024",
    link: "https://example.com/workshop-quantica-ufsc",
  },
];

const Events = ({ id }) => {
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
            Eventos Acadêmicos
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Acompanhe os eventos mais importantes da comunidade de Computação Quântica no Brasil.
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
                    {event.title}
                  </h3>
                  <div
                    className="flex items-center"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <CalendarDays
                      className="w-5 h-5 mr-2"
                      style={{ color: 'var(--primary)' }}
                    />
                    <span className="font-medium">{event.date}</span>
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
                    Ver detalhes
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
            Mais eventos serão adicionados em breve. Fique atento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
