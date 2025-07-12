import React from "react";
import Image from "next/image";

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
];

const imagens = [
  {
    src: "https://placehold.co/320x220?text=Feynman+1",
    alt: "Richard Feynman 1",
    width: 320,
    height: 220,
  },
  {
    src: "https://placehold.co/320x220?text=Feynman+2",
    alt: "Richard Feynman 2",
    width: 320,
    height: 220,
  },
  {
    src: "https://placehold.co/320x220?text=Feynman+3",
    alt: "Richard Feynman 3",
    width: 320,
    height: 220,
  },
  {
    src: "https://placehold.co/320x220?text=Feynman+4",
    alt: "Richard Feynman 4",
    width: 320,
    height: 220,
  },
];

const Patronum = () => {
  return (
    <section className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800 overflow-hidden">
      {/* Background Feynman à direita */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="hidden md:block absolute right-0 top-0 h-full w-2/3">
          <Image
            src="/images/backgrounds/richard-feynman.png"
            alt="Richard Feynman background"
            fill
            className="object-cover object-right h-full w-full opacity-40 mix-blend-lighten"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-white mb-6 leading-tight">
            Por que Richard Feynman é nosso patrono?
          </h2>
          <ul className="space-y-4 text-gray-200 text-base mb-8">
            {motivos.map((item) => (
              <li key={item.titulo} className="flex gap-2 items-start">
                <span className="text-indigo-400 mt-1">✔</span>
    <div>
                  <span className="font-semibold text-white">{item.titulo}</span>
                  <br />
                  <span className="text-gray-400">{item.texto}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 ml-6">
            <span className="inline-block bg-indigo-600 text-white font-bold px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition text-lg">
              Conheça o legado de Feynman
            </span>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Patronum;