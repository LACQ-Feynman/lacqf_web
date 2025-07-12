import Image from 'next/image';

import companies from '@/data/mocks/companies.json';
import universities from '@/data/mocks/universities.json';
import leagues from '@/data/mocks/leagues.json';
import master from '@/data/mocks/master.json';
import icts from '@/data/mocks/institutes.json';

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
  universities: 'Universidades',
  institutes: 'Ligas'
};

const displayOrder = ['master', 'icts', 'companies', 'universities', 'institutes'];

export default function Partners() {
  return (
    <section className="bg-black py-24 px-2 sm:px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        {displayOrder.map((groupKey) => (
          <div key={groupKey} className="w-full mb-16">
            <h3 className="text-white text-xl font-semibold text-center mb-8">
              {groupTitles[groupKey]}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mb-8 w-full">
              {partners[groupKey].map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="object-contain grayscale hover:grayscale-0 transition duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center">
          <div className="rounded-full bg-gray-900 px-6 py-3 text-center text-gray-200 text-base shadow-sm w-full max-w-3xl">
            Conheça as empresas e instituições parceiras da LACQ Feynman.
          </div>
        </div>
      </div>
    </section>
  );
} 