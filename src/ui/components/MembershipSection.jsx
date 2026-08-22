'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Rocket,
    Atom,
    GraduationCap,
    Users,
    ChevronDown,
    BookOpen,
    MessageCircle
} from 'lucide-react';
import { IconBrandWhatsapp, IconBrandYoutube } from '@tabler/icons-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { EXTERNAL_LINKS } from '@/utils/links';

const MembershipSection = ({ id }) => {
    const [openIdx, setOpenIdx] = useState(0);
    const { t } = useLanguage();
    const reducedMotion = useReducedMotion();

    const whatsappGroupLink = EXTERNAL_LINKS.whatsapp.community;

    // Get base path for GitHub Pages compatibility
    const basePath = process.env.BASE_PATH || '';

    const motivos = [
        {
            icon: <Rocket className="w-6 h-6 text-primary" />,
            titulo: t('pioneerTitle'),
            texto: t('pioneerText'),
        },
        {
            icon: <Atom className="w-6 h-6 text-primary" />,
            titulo: t('researchTitle'),
            texto: t('researchText'),
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-primary" />,
            titulo: t('educationTitle'),
            texto: t('educationText'),
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            titulo: t('networkingTitle'),
            texto: (
                <div className="space-y-4">
                    <p>{t('networkingText')}</p>
                    {/* PC CTA: Only visible on large screens */}
                    <div className="hidden lg:block">
                        <a
                            href={whatsappGroupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                        >
                            <IconBrandWhatsapp className="w-4 h-4" aria-hidden="true" />
                            {t('whatsappGroupButton')}
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    const resources = [
        {
            titleKey: 'resourceYoutube',
            icon: <IconBrandYoutube className="w-5 h-5" />,
            link: EXTERNAL_LINKS.youtube,
            color: "red"
        },
        {
            titleKey: 'resourceMentors',
            icon: <Users className="w-5 h-5" />,
            link: EXTERNAL_LINKS.mentors,
            color: "indigo"
        },
        {
            titleKey: 'resourceMaterials',
            icon: <BookOpen className="w-5 h-5" />,
            link: EXTERNAL_LINKS.materials,
            color: "purple"
        }
    ];

    return (
        <section
            id={id}
            className="py-20 px-4 sm:px-6 lg:px-8 relative section-gradient-bg overflow-hidden"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-title font-bold mb-4">
                        <span className="text-primary">{t('joinCommunityTitle').split(' ')[0]}</span> {t('joinCommunityTitle').substring(t('joinCommunityTitle').indexOf(' ') + 1)}
                    </h2>
                    <p className="text-lg text-theme-secondary max-w-2xl mx-auto mb-8">
                        {t('joinCommunitySubtitle')}
                    </p>

                    {/* Mobile CTA: Only visible on small screens */}
                    <div className="lg:hidden mb-8">
                        <div className="inline-block p-4 rounded-2xl bg-surface border border-border shadow-sm">
                            <p className="text-sm font-medium mb-3">{t('whatsappGroupCTA')}</p>
                            <a
                                href={whatsappGroupLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-95"
                            >
                                <IconBrandWhatsapp className="w-6 h-6" aria-hidden="true" />
                                {t('whatsappGroupButton')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content: Split Layout (Reasons + WhatsApp CTA) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

                    {/* Left Column: Why Join (Accordion) */}
                    <div className="space-y-8">
                        <div className="mb-6">
                            <h3 className="text-2xl font-title font-semibold mb-2 flex items-center gap-2">
                                <Rocket className="w-6 h-6 text-primary" />
                                {t('whyLACQFTitle')}
                            </h3>
                            <p className="text-theme-secondary">
                                {t('whyLACQFSubtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {motivos.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    layout
                                    transition={{
                                        layout: {
                                            duration: reducedMotion ? 0 : 0.35,
                                            ease: [0.16, 1, 0.3, 1],
                                        },
                                    }}
                                    className={`border rounded-xl overflow-hidden ${openIdx === idx ? 'bg-surface border-primary/30 shadow-md' : 'bg-surface/50 border-border/50 hover:bg-surface'
                                        }`}
                                >
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between gap-4 px-6 py-4 focus:outline-none"
                                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                        aria-expanded={openIdx === idx}
                                        aria-controls={`membership-panel-${idx}`}
                                    >
                                        <div className="flex items-center gap-4 text-left">
                                            <div className={`p-2 rounded-lg transition-colors ${openIdx === idx ? 'bg-primary/10 text-primary' : 'bg-theme-secondary text-theme-secondary'}`}>
                                                {item.icon}
                                            </div>
                                            <span className={`text-base font-semibold ${openIdx === idx ? 'text-theme-primary' : 'text-theme-secondary'}`}>
                                                {item.titulo}
                                            </span>
                                        </div>
                                        <motion.span
                                            animate={{ rotate: openIdx === idx ? 180 : 0 }}
                                            transition={{ duration: reducedMotion ? 0 : 0.25 }}
                                            className="flex"
                                            aria-hidden="true"
                                        >
                                            <ChevronDown className={`w-5 h-5 ${openIdx === idx ? 'text-primary' : 'text-theme-secondary'}`} />
                                        </motion.span>
                                    </button>
                                    <AnimatePresence initial={false} mode="sync">
                                        {openIdx === idx && (
                                            <motion.div
                                                key={`membership-panel-${idx}`}
                                                id={`membership-panel-${idx}`}
                                                initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                                transition={{
                                                    height: { duration: reducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] },
                                                    opacity: { duration: reducedMotion ? 0 : 0.2 },
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5 pt-0 text-theme-secondary text-sm leading-relaxed pl-[4.5rem]">
                                                    {item.texto}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: WhatsApp Community Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-primary rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-surface border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center">
                            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <IconBrandWhatsapp className="w-12 h-12 text-success" aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-title font-bold mb-4">
                                {t('joinCommunityTitle')}
                            </h3>
                            <p className="text-theme-secondary mb-10 leading-relaxed">
                                {t('whatsappGroupCTA')}
                            </p>
                            <a 
                                href={whatsappGroupLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-green-600/20 transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                {t('whatsappGroupButton')}
                                <MessageCircle className="ml-2 w-6 h-6" aria-hidden="true" />
                            </a>
                            
                            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-theme-secondary opacity-60">
                                <Users className="w-4 h-4" />
                                <span>{t('activeMembersLabel')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Strip: Resources (Discover More) */}
                <div className="border-t border-border pt-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Logo + Text Section - Left */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-center sm:text-left">
                            <div className="relative w-[200px] max-w-full h-12 shrink-0">
                                <Image
                                    src={`${basePath}/images/lacqf/logo completa.webp`}
                                    alt="LACQ Feynman Logo Completa"
                                    fill
                                    sizes="200px"
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-xl font-title font-semibold mb-1">{t('exploreMoreTitle')}</h4>
                                <p className="text-sm text-theme-secondary">{t('exploreMoreSubtitle')}</p>
                            </div>
                        </div>

                        {/* Resources Section - Right */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            {resources.map((res, idx) => {
                                const colorClasses = {
                                    red: "bg-red-500/10 text-red-500 hover:shadow-red-500/5",
                                    indigo: "bg-indigo-500/10 text-indigo-500 hover:shadow-indigo-500/5",
                                    purple: "bg-purple-500/10 text-purple-500 hover:shadow-purple-500/5"
                                };
                                const activeColorClass = colorClasses[res.color];

                                return (
                                    <a
                                        key={idx}
                                        href={res.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-xl bg-surface border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 w-full sm:w-auto ${activeColorClass.replace('bg-', 'hover:shadow-')}`}
                                    >
                                        <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform ${activeColorClass.split(' ').slice(0, 2).join(' ')}`}>
                                            {res.icon}
                                        </div>
                                        <span className="font-medium text-sm group-hover:text-theme-primary text-theme-secondary transition-colors">
                                            {t(res.titleKey)}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MembershipSection;
