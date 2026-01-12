import Image from 'next/image';

import companies from '@/data/mocks/companies.json';
import universities from '@/data/mocks/universities.json';
import leagues from '@/data/mocks/leagues.json';
import master from '@/data/mocks/master.json';
import icts from '@/data/mocks/institutes.json';
import { getAssetPath } from '@/utils/assets';

const partners = {
  master: master,
  icts: icts,
  companies: companies,
  universities: universities,
  institutes: leagues
};

const groupTitles = {
  master: 'Parceiros',
  icts: 'ICTs',
  companies: 'Empresas',
  universities: 'Universidades de nossos membros',
  institutes: 'Ligas'
};

const displayOrder = ['master', 'icts', 'companies', 'universities', 'institutes'];

export default function Partners({ id }) {
  // Partner logos grouped by type; images use Next's optimizer.
  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-title font-bold text-theme-primary mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-theme-secondary max-w-3xl mx-auto">
            Conheça as empresas e instituições parceiras da LACQ Feynman.
          </p>
        </div>

        {displayOrder.map((groupKey) => (
          <div key={groupKey} className="mb-16">
            <h3 className="text-2xl font-title font-semibold text-theme-primary text-center mb-10">
              {groupTitles[groupKey]}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-12">
              {partners[groupKey].map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-300 p-6 bg-theme-secondary rounded-xl shadow-lg border border-theme-light"
                >
                  <Image
                    src={getAssetPath(partner.logo)}
                    alt={partner.name}
                    width={150}
                    height={100}
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 150px"
                    className="object-contain transition duration-300 max-h-12 sm:max-h-14 lg:max-h-16"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
