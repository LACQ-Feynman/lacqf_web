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

const Events = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-title">
            Eventos Acadêmicos
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Acompanhe os eventos mais importantes da comunidade de Computação Quântica no Brasil.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0 font-title">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition"
                  >
                    Ver detalhes
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t pt-8 border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Mais eventos serão adicionados em breve. Fique atento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
