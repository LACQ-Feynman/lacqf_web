'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, BookOpen, ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/assets';
import QuantumText from "./QuantumText";
import MagneticWrapper from "./MagneticWrapper";

const WhoWeAre = ({ id }) => {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-title font-bold text-theme-primary leading-tight mb-8">
              <QuantumText text={t('whoWeAreTitle')} />
            </h2>
            <div className="space-y-6 text-lg text-theme-secondary leading-relaxed">
              <p>
                {t('whoWeAreDescription1')}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 grid grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-6">
            <div className="relative">
              <Image
                src={getAssetPath("/images/lacqf/quantum research.webp")}
                alt="Pesquisa colaborativa"
                width={600}
                height={400}
                className="rounded-2xl object-cover shadow-xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src={getAssetPath("/images/lacqf/workshop.webp")}
                  alt="Workshop"
                  width={300}
                  height={200}
                  className="rounded-2xl object-cover shadow-xl w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="relative">
                <Image
                  src={getAssetPath("/images/lacqf/team meeting.webp")}
                  alt="Reuniões em equipe"
                  width={300}
                  height={200}
                  className="rounded-2xl object-cover shadow-xl w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement + CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2rem] border border-theme-light bg-theme-secondary/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-title font-semibold text-theme-primary mb-6">
              {t('whoWeAreMissionTitle')}
            </h3>
            <p className="text-xl text-theme-secondary leading-relaxed mb-10">
              {t('whoWeAreMissionText')}
            </p>
            
            <div className="flex justify-center">
              <MagneticWrapper>
                <Link
                  href="/sobre"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95"
                >
                  {t('knowMoreAbout')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
