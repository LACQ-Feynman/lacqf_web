import Image from 'next/image';
import React from 'react';

const sponsors = [
  {
    name: 'Dobslit',
    description: 'Empresa pioneira em Tecnologias Quânticas de Segunda Geração no Brasil.',
    image: '/sponsors/dobslit.png',
  },
  {
    name: 'MultiCortex',
    description: 'Soluções em Inteligência Artificial.',
    image: '/sponsors/multicortex.png',
  },
  {
    name: 'QuantuLoop',
    description: 'Soluções avançadas para preparar a indústria para o futuro quântico.',
    image: '/sponsors/quantuloop.png',
  },
  {
    name: 'Tecnopuc',
    description: 'Parque Científico e Tecnológico da PUCRS.',
    image: '/sponsors/tecnopuc.png',
  },
  {
    name: 'Quantum Coalition',
    description: 'Grupo de estudantes e entusiastas em clubes de computação quântica.',
    image: '/sponsors/qcoalition.png',
  },
  {
    name: 'Nau',
    description: 'Espaço de coworking em Porto Alegre, RS.',
    image: '/sponsors/nau.png',
  },
];

const Sponsors = () => {
  return (
    <section className="bg-zinc-950 dark:bg-black py-24 px-4 sm:px-8 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight font-title">Nossos Patrocinadores</h2>
        <p className="mt-4 text-zinc-400 text-lg max-w-3xl mx-auto">
          A LACQ Feynman conta com a parceria de organizações que compartilham nossa visão para o futuro da computação quântica. Apoiando nossos eventos, pesquisas e formações.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[200px]">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`relative bg-zinc-900 dark:bg-gray-900 rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.02] transition duration-300 shadow-md ${
              index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div className="flex justify-center items-center h-24 mb-4">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                width={96}
                height={96}
                className="object-contain max-h-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white font-title">{sponsor.name}</h3>
              <p className="text-sm text-zinc-400 mt-1">{sponsor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;