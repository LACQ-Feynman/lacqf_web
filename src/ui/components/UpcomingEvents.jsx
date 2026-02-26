import React from "react";
import { Calendar, Clock, ExternalLink, Video, User, Users, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";
import { getAssetPath } from "@/utils/assets";
import { motion } from "framer-motion";

const upcomingEvents = [
  {
    titleKey: "upcomingEventConexaoTitle",
    subtitleKey: "upcomingEventConexaoSubtitle",
    topicKey: "upcomingEventConexaoTopic",
    dateKey: "upcomingEventConexaoDate",
    timeKey: "upcomingEventConexaoTime",
    meetLinkKey: "upcomingEventConexaoMeetLink",
    descriptionKey: "upcomingEventConexaoDescription",
    lesterBioKey: "upcomingEventConexaoLesterBio",
    vanessaBioKey: "upcomingEventConexaoVanessaBio",
    openingKey: "upcomingEventConexaoOpening",
    moderationKey: "upcomingEventConexaoModeration",
    footerKey: "upcomingEventConexaoFooter",
    link: "https://meet.google.com/gtb-idvs-ipa",
    image: getAssetPath("/images/lacqf/COMO TRANSFORMAR PESQUISA EM NEGÓCIOS.webp"),
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
              {t('upcomingEventsTitle')}
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
                  {/* Diagonal Energy Streak Animation */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                    <motion.div 
                      animate={{ 
                        top: ["-100%", "200%"],
                        left: ["-100%", "200%"],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "linear" 
                      }}
                      className="absolute w-full h-[200%] bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-[35deg] blur-2xl"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row h-full relative z-10">
                    {/* Event Image - Vertical - Backdrop Blur Technique to show full A4 */}
                    {event.image && (
                      <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[700px] overflow-hidden bg-black/20">
                        {/* Layer 1: Blurred Background Fill */}
                        <Image
                          src={event.image}
                          alt=""
                          fill
                          className="object-cover opacity-40 blur-3xl scale-110"
                          aria-hidden="true"
                        />
                        
                        {/* Layer 2: Full Original Image (No crops) */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
                          <div className="relative w-full h-full shadow-2xl">
                            <Image
                              src={event.image}
                              alt={t(event.topicKey)}
                              fill
                              className="object-contain"
                              sizes="(max-width: 1024px) 100vw, 45vw"
                              priority
                            />
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Status Overlay - Pulsing Text Effect */}
                        <div className="absolute top-8 left-8 flex items-center space-x-3 bg-red-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full shadow-xl z-30">
                          <motion.span 
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="relative flex h-3 w-3"
                          >
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                          </motion.span>
                          <span className="text-sm font-black uppercase tracking-[0.2em]">Live Stream</span>
                        </div>
                      </div>
                    )}

                    {/* Content Area */}
                    <div className="flex-1 p-8 lg:p-14 flex flex-col justify-between">
                      <div>
                        <div className="mb-10">
                          <motion.div 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-flex items-center px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6" 
                            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                            <Sparkles className="w-4 h-4 mr-2" />
                            {t('upcomingEventsTitle')}
                          </motion.div>
                          <p className="text-xl font-bold mb-2 tracking-wide" style={{ color: 'var(--primary)' }}>
                            {t(event.subtitleKey)}
                          </p>
                          <h3 className="text-4xl md:text-6xl font-title font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
                            {t(event.titleKey)}
                          </h3>
                        </div>

                        <div className="mb-10 p-8 rounded-3xl border bg-surface/30 backdrop-blur-md border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-inner">
                          <h4 className="text-2xl md:text-3xl font-bold mb-6 flex items-center leading-tight" style={{ color: 'var(--primary)' }}>
                            <ArrowRight className="w-8 h-8 mr-4 text-secondary shrink-0" />
                            {t(event.topicKey)}
                          </h4>
                          <p className="text-xl leading-relaxed mb-10 opacity-90 font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {t(event.descriptionKey)}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center space-x-5 p-4 rounded-2xl bg-background/40 border border-white/5">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 shadow-lg" style={{ color: 'var(--primary)' }}>
                                <Calendar className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Data</p>
                                <p className="text-xl font-bold tracking-tight">{t(event.dateKey)}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-5 p-4 rounded-2xl bg-background/40 border border-white/5">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 shadow-lg" style={{ color: 'var(--primary)' }}>
                                <Clock className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Horário</p>
                                <p className="text-xl font-bold tracking-tight">{t(event.timeKey)}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-6 p-6 rounded-2xl md:col-span-2 bg-secondary/10 border border-secondary/20 shadow-lg">
                              <Video className="w-8 h-8 shrink-0 text-secondary" />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-black uppercase tracking-widest text-secondary opacity-70 mb-2">{t(event.meetLinkKey)}</p>
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl break-all hover:underline font-black text-secondary block truncate">
                                  {event.link}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Speakers Bios */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
                          <div className="group/bio p-6 rounded-3xl bg-surface/40 border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-primary/5">
                            <div className="flex gap-5">
                              <div className="shrink-0">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 transition-transform duration-500 group-hover/bio:rotate-6 shadow-md" style={{ color: 'var(--primary)' }}>
                                  <User className="w-7 h-7" />
                                </div>
                              </div>
                              <p className="text-sm italic leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                                {t(event.lesterBioKey)}
                              </p>
                            </div>
                          </div>
                          <div className="group/bio p-6 rounded-3xl bg-surface/40 border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-primary/5">
                            <div className="flex gap-5">
                              <div className="shrink-0">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 transition-transform duration-500 group-hover/bio:-rotate-6 shadow-md" style={{ color: 'var(--primary)' }}>
                                  <User className="w-7 h-7" />
                                </div>
                              </div>
                              <p className="text-sm italic leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                                {t(event.vanessaBioKey)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Roles */}
                        <div className="flex flex-wrap gap-4 mb-12">
                          <div className="flex items-center px-4 py-2 rounded-xl bg-background/50 border border-white/5 text-sm font-bold shadow-sm" style={{ color: 'var(--text-secondary)' }}>
                            <Users className="w-4 h-4 mr-3 text-primary" />
                            {t(event.openingKey)}
                          </div>
                          <div className="flex items-center px-4 py-2 rounded-xl bg-background/50 border border-white/5 text-sm font-bold shadow-sm" style={{ color: 'var(--text-secondary)' }}>
                            <Users className="w-4 h-4 mr-3 text-primary" />
                            {t(event.moderationKey)}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10">
                        <p className="font-title text-xl font-black tracking-widest uppercase" style={{ color: 'var(--text-primary)' }}>
                          {t(event.footerKey)} 🚀
                        </p>
                        <motion.a
                          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)" }}
                          whileTap={{ scale: 0.95 }}
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white rounded-2xl shadow-2xl transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-light))'
                          }}
                        >
                          {t('joinButton')}
                          <ExternalLink className="ml-4 w-7 h-7" />
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
