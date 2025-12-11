import React from "react";
import Image from "next/image";
import { getAssetPath } from '@/utils/assets';

const motivos = [
  {
    titulo: "Pioneirismo em Computação Quântica",
    texto:
      "Feynman foi um dos primeiros a propor o uso de sistemas quânticos para simular fenômenos quânticos, lançando as bases do que hoje conhecemos como computação quântica.",
  },
  {
    titulo: "Popularização da Ciência",
    texto:
      "Com seu talento único para explicar conceitos complexos de forma clara e acessível, Feynman inspirou estudantes e cientistas, alinhando-se à missão de democratizar o conhecimento.",
  },
  {
    titulo: "Curiosidade e Interdisciplinaridade",
    texto:
      "Feynman era conhecido por sua curiosidade insaciável e por conectar diferentes áreas do saber, refletindo o espírito colaborativo da computação quântica.",
  },
  {
    titulo: "Carinho pelo Brasil",
    texto:
      "Feynman tinha grande afeto pelo Brasil e costumava tocar samba nas rodas no Rio de Janeiro, reforçando seu vínculo cultural e humano com o país.",
  },
];

const Patronum = ({ id }) => {
  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)'
      }}
    >
      {/* Subtle animated background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <h2
              className="text-4xl lg:text-5xl font-title font-bold mb-8 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Por que Richard Feynman é nosso patrono?
            </h2>
            <ul className="space-y-6 mb-10">
              {motivos.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl border backdrop-blur-sm"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    background: 'var(--bg-secondary)' + '60',
                    borderColor: 'var(--border-light)'
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-title font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.titulo}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="https://pt.wikipedia.org/wiki/Richard_Feynman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition text-lg"
              style={{
                background: 'linear-gradient(to right, var(--primary), var(--primary-light))'
              }}
            >
              Conheça o legado de Feynman
            </a>
          </div>

          {/* Imagem de Feynman */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: 'var(--feynman-card-bg)' }}>
              <Image
                src={getAssetPath("/images/backgrounds/richard-feynman.webp")}
                alt="Richard Feynman"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-xl -z-10"
              style={{
                background: 'linear-gradient(to bottom right, var(--primary), var(--primary-light))'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patronum;