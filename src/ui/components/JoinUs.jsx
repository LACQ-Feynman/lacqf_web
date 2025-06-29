'use client'; 

import React, { useState } from 'react';
import { Rocket, Atom, GraduationCap, Users, ChevronDown } from 'lucide-react';

const motivos = [
  {
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    titulo: 'Faça Parte de um Movimento Pioneiro',
    texto:
      'Junte-se a uma comunidade na vanguarda da pesquisa e inovação em computação quântica. Como membro da LACQ Feynman, você fará parte de um grupo dedicado a explorar tecnologias revolucionárias que vão moldar o futuro da computação.',
  },
  {
    icon: <Atom className="w-6 h-6 text-indigo-500" />,
    titulo: 'Acesse Pesquisas de Ponta',
    texto:
      'Participe de projetos avançados e pesquisas em computação quântica, contribuindo para inovações que estão mudando o mundo. A LACQ Feynman oferece uma plataforma para estudantes e profissionais explorarem novas ideias e gerarem impacto real.',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
    titulo: 'Oportunidades Educacionais',
    texto:
      'Oferecemos workshops, palestras e cursos para equipar você com o conhecimento e as habilidades necessárias para se destacar em computação quântica. Esteja você começando ou já com experiência, nossos programas educacionais vão impulsionar seu avanço.',
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    titulo: 'Networking e Colaboração',
    texto:
      'A LACQ Feynman conecta você a especialistas, profissionais do setor e outros estudantes, promovendo oportunidades de colaboração e troca de conhecimento. Construa relações que vão impulsionar seu crescimento acadêmico e profissional.',
  },
];

const JoinUs = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Esquerda: Título */}
        <div className="md:pr-8">
          <h2 className="text-4xl md:text-5xl font-title font-bold text-left text-white mb-6 drop-shadow-lg">
            Por que entrar para a LACQ Feynman?
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-md">
            Descubra os benefícios de fazer parte de uma comunidade inovadora, colaborativa e apaixonada por computação quântica.
          </p>
        </div>
        {/* Direita: FAQ/Accordion */}
        <div className="flex flex-col gap-3 w-full">
          {motivos.map((item, idx) => (
            <div key={item.titulo} className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 focus:outline-none group"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <div className="flex items-center gap-3 text-left">
                  {item.icon}
                  <span className="text-lg font-title font-semibold text-white">{item.titulo}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-5 pb-4 text-gray-300 text-base leading-relaxed transition-all duration-200 ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                style={{overflow: 'hidden'}}
              >
                {item.texto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs; 