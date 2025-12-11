import React from 'react';
import {
  Eye,
  FlaskConical,
  GraduationCap,
  Share2,
  Cpu,
  Users,
} from 'lucide-react';
 

const ConventionalCards = ({ values }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {values.map((item, index) => (
      <div
        key={index}
        className="p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 group"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-light)'
        }}
      >
        <div className="flex flex-col items-start gap-6">
          <div
            className="p-3 rounded-xl transition-colors"
            style={{ backgroundColor: 'var(--primary)' + '20' }}
          >
            {item.icon}
          </div>
          <div>
            <h3
              className="text-xl font-title font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.title}
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

 

const CoreValues = ({ id }) => {

  const values = [
    {
      icon: <Eye className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Nossa Visão',
      description:
        'Na LACQ Feynman, buscamos conectar acadêmicos e profissionais apaixonados por computação quântica, promovendo um ambiente colaborativo que impulsiona as tecnologias do futuro.',
    },
    {
      icon: <FlaskConical className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Pesquisa Pioneira',
      description:
        'Somos dedicados ao avanço da pesquisa de ponta em computação quântica, explorando soluções inovadoras para resolver alguns dos desafios mais complexos da área.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Excelência Educacional',
      description:
        'Oferecemos uma ampla variedade de oportunidades educacionais, incluindo workshops, palestras e cursos, para capacitar a próxima geração de líderes e especialistas em computação quântica.',
    },
    {
      icon: <Share2 className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Oportunidades de Networking',
      description:
        'A LACQ Feynman atua como um hub para conectar estudantes, professores e profissionais do setor, promovendo parcerias impactantes e troca de conhecimento.',
    },
    {
      icon: <Cpu className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Inovação na Prática',
      description:
        'Nossos projetos visam ultrapassar os limites da computação quântica, desenvolvendo aplicações práticas capazes de revolucionar indústrias e tecnologias.',
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: 'var(--primary)' }} />,
      title: 'Ambiente Colaborativo',
      description:
        'Acreditamos no poder da colaboração, unindo mentes diversas para fomentar a criatividade e acelerar avanços na pesquisa em computação quântica.',
    },
  ];

  

  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 relative section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-title font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Nossos Valores
          </h2>
          <p
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Paixão por moldar o futuro por meio do conhecimento, inovação e colaboração.
          </p>
        </div>

        <ConventionalCards values={values} />
      </div>
    </section>
  );
};

export default CoreValues;