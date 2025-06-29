import React from 'react';
import {
  Eye,
  FlaskConical,
  GraduationCap,
  Share2,
  Cpu,
  Users,
} from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Eye className="w-6 h-6 text-indigo-600" />,
      title: 'Nossa Visão',
      description:
        'Na LACQ Feynman, buscamos conectar acadêmicos e profissionais apaixonados por computação quântica, promovendo um ambiente colaborativo que impulsiona as tecnologias do futuro.',
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-indigo-600" />,
      title: 'Pesquisa Pioneira',
      description:
        'Somos dedicados ao avanço da pesquisa de ponta em computação quântica, explorando soluções inovadoras para resolver alguns dos desafios mais complexos da área.',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: 'Excelência Educacional',
      description:
        'Oferecemos uma ampla variedade de oportunidades educacionais, incluindo workshops, palestras e cursos, para capacitar a próxima geração de líderes e especialistas em computação quântica.',
    },
    {
      icon: <Share2 className="w-6 h-6 text-indigo-600" />,
      title: 'Oportunidades de Networking',
      description:
        'A LACQ Feynman atua como um hub para conectar estudantes, professores e profissionais do setor, promovendo parcerias impactantes e troca de conhecimento.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      title: 'Inovação na Prática',
      description:
        'Nossos projetos visam ultrapassar os limites da computação quântica, desenvolvendo aplicações práticas capazes de revolucionar indústrias e tecnologias.',
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: 'Ambiente Colaborativo',
      description:
        'Acreditamos no poder da colaboração, unindo mentes diversas para fomentar a criatividade e acelerar avanços na pesquisa em computação quântica.',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-title">Nossos Valores</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Paixão por moldar o futuro por meio do conhecimento, inovação e colaboração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-gray-700 dark:text-gray-300">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-title">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed pl-9">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;