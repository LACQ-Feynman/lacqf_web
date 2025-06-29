import React from "react";
import Image from "next/image";
import { ActivitySquare, BookOpen, Briefcase } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight font-title">
              Transformando o futuro da computação
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Conectamos estudantes, pesquisadores e profissionais para criar, educar e inovar em computação quântica no Brasil.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://placehold.co/400x400?text=Imagem+1"
              alt="Pesquisa colaborativa"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-md"
            />
            <div className="flex flex-col gap-4">
              <Image
                src="https://placehold.co/200x200?text=Imagem+2"
                alt="Workshop"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-md"
              />
              <Image
                src="https://placehold.co/200x200?text=Imagem+3"
                alt="Reuniões em equipe"
                width={200}
                height={200}
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-24 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-title">Nossa missão</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fundada em 2024 na Universidade Federal do Rio Grande do Sul (UFRGS), a LACQ Feynman nasceu com o propósito de promover a pesquisa e formação na área da computação quântica.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Buscamos conectar talentos emergentes com o futuro das tecnologias quânticas, construindo um ecossistema vibrante de aprendizagem e inovação.
            </p>
          </div>

          <div className="grid gap-6 text-gray-900 dark:text-white">
            <div>
              <h4 className="text-3xl font-bold">+1.200</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Membros em todo o país</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">+25</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projetos de pesquisa ativos</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">+18</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Workshops realizados</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-12 font-title">
            Oportunidades para estudantes
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <ActivitySquare className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">Projetos de Pesquisa</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Trabalhe em algoritmos, aplicações e teorias quânticas em projetos com professores e profissionais.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">Workshops e Cursos</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Aprenda computação quântica desde os conceitos básicos à programação em plataformas como Qiskit e Cirq.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white font-title">Estágios e Carreira</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Conquiste vagas em centros de pesquisa e startups parceiras por meio da nossa rede de conexões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;