import ContactForm from '@/ui/forms/ContactForm';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Esquerda: Título, descrição e email */}
        <div className="flex flex-col justify-center items-start text-left gap-6 md:pr-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-title flex items-center gap-3 drop-shadow-lg">
            <Mail className="w-8 h-8 text-indigo-500" />
            Fale com a gente
          </h2>
          <p className="text-lg text-gray-300">
            Estamos aqui para esclarecer suas dúvidas, ouvir sugestões ou iniciar uma colaboração com a Liga Nacional de Computação Quântica.
          </p>
          <div className="mt-4">
            <span className="block text-sm text-gray-400 mb-1">E-mail de contato</span>
            <a
              href="mailto:contato@lacqfeynman.org"
              className="inline-block text-indigo-400 font-mono text-lg bg-indigo-900/30 px-3 py-1.5 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/40 transition shadow"
            >
              contato@lacqfeynman.com.br
            </a>
          </div>
        </div>
        {/* Direita: Formulário com visual tecnológico */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500/40 via-indigo-400/10 to-transparent blur-lg opacity-80 animate-pulse z-0" />
          <div className="relative bg-white/80 dark:bg-gray-900/80 border border-indigo-500/30 shadow-2xl rounded-2xl p-8 backdrop-blur-md z-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}