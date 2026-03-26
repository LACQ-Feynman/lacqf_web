import React from "react";
import { Calendar, Clock, ExternalLink, Video, User, Users, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";
import { motion } from "framer-motion";
import QuantumText from "./QuantumText";

const upcomingEvents = [
  {
    titleKey: "upcomingEventUnisoTitle",
    subtitleKey: "upcomingEventUnisoSubtitle",
    topicKey: "upcomingEventUnisoTopic",
    dateKey: "upcomingEventUnisoDate",
    timeKey: "upcomingEventUnisoTime",
    locationKey: "upcomingEventUnisoLocation",
    descriptionKey: "upcomingEventUnisoDescription",
    footerKey: "upcomingEventUnisoFooter",
    link: "https://share.google/dtB25YcwLd6J2MEFK",
  },
];

const UpcomingEvents = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="py-24 px-4 sm:px-6 lg:px-8 section-gradient-bg overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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

        {upcomingEvents.length > 0 && !upcomingEvents[0].isPlaceholder ? (
          <div className="space-y-12">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div
                  className="rounded-[2rem] overflow-hidden shadow-2xl border relative bg-background/40 backdrop-blur-xl transition-all duration-700"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-light)'
                  }}
                >
                  {/* Energy Streak Animation */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div 
                      animate={{ 
                        top: ["-100%", "200%"],
                        left: ["-100%", "200%"],
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: "linear" 
                      }}
                      className="absolute w-full h-[200%] bg-gradient-to-b from-transparent via-primary/5 to-transparent rotate-[35deg] blur-3xl"
                    />
                  </div>

                  <div className="flex flex-col h-full relative z-10">
                    {/* Full-width content for text-focused cards */}
                    <div className="flex-1 p-8 lg:p-20 text-center flex flex-col items-center">
                      <div className="mb-12">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="inline-flex items-center px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-8" 
                          style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                          <Sparkles className="w-4 h-4 mr-2" />
                          {t('upcomingEventsTitle')}
                        </motion.div>
                        <p className="text-2xl font-bold mb-4 tracking-wide" style={{ color: 'var(--primary)' }}>
                          {t(event.subtitleKey)}
                        </p>
                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-title font-bold mb-8 leading-[1.1] tracking-tighter" style={{ color: 'var(--text-primary)' }}>
                          {t(event.titleKey)}
                        </h3>
                      </div>

                      <div className="mb-12 p-8 lg:p-12 rounded-[2.5rem] border bg-surface/30 backdrop-blur-md border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-inner max-w-4xl mx-auto w-full">
                        <h4 className="text-2xl md:text-4xl font-bold mb-8 flex items-center justify-center leading-tight" style={{ color: 'var(--primary)' }}>
                          <ArrowRight className="w-8 h-8 mr-4 text-secondary shrink-0" />
                          {t(event.topicKey)}
                        </h4>
                        <p className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90 font-medium max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                          {t(event.descriptionKey)}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div className="flex flex-col items-center p-6 rounded-3xl bg-background/40 border border-white/5">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 shadow-lg mb-4" style={{ color: 'var(--primary)' }}>
                              <Calendar className="w-7 h-7" />
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Data</p>
                            <p className="text-xl font-bold tracking-tight">{t(event.dateKey)}</p>
                          </div>
                          
                          <div className="flex flex-col items-center p-6 rounded-3xl bg-background/40 border border-white/5">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 shadow-lg mb-4" style={{ color: 'var(--primary)' }}>
                              <Clock className="w-7 h-7" />
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Horário</p>
                            <p className="text-xl font-bold tracking-tight">{t(event.timeKey)}</p>
                          </div>

                          <div className="flex flex-col items-center p-6 rounded-3xl bg-background/40 border border-white/5 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 shadow-lg mb-4" style={{ color: 'var(--primary)' }}>
                              <MapPin className="w-7 h-7" />
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Localização</p>
                            <p className="text-xl font-bold tracking-tight">{t(event.locationKey)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-10 w-full pt-12 border-t border-white/10">
                        <p className="font-title text-2xl font-black tracking-[0.2em] uppercase" style={{ color: 'var(--text-primary)' }}>
                          {t(event.footerKey)} 🚀
                        </p>
                        <motion.a
                          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124, 58, 237, 0.5)" }}
                          whileTap={{ scale: 0.95 }}
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center px-16 py-8 text-2xl font-black text-white rounded-3xl shadow-2xl transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))'
                          }}
                        >
                          {t('joinEvent')}
                          <ExternalLink className="ml-4 w-8 h-8" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
