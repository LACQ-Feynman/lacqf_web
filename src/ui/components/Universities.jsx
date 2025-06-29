'use client';

import React from "react";

const universityLogos = [
  "/logos/usp.png",
  "/logos/unicamp.png",
  "/logos/ufrj.png",
  "/logos/ufmg.png",
  "/logos/ufpe.png",
  "/logos/ufsc.png",
  // Adicione mais conforme necessário
];

const Universities = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Logos com scroll infinito */}
        <div className="col-span-2 overflow-hidden relative">
          <div className="flex w-max animate-scroll-loop space-x-10">
            {[...universityLogos, ...universityLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 bg-white dark:bg-gray-700 shadow rounded-lg flex items-center justify-center p-4">
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center text-center md:items-center md:text-left justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-title">Sua universidade aqui</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            Traga sua instituição para participar da Liga Nacional de Computação Quântica.
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            Junte-se à Liga
          </a>
        </div>
      </div>
    </section>
  );
};

export default Universities;