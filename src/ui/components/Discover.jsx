import { Youtube, Users, BookOpen } from 'lucide-react';

const YOUTUBE_BG =
  'https://placehold.co/800x600/1a1a2e/ffffff?text=YouTube+LACQ';
const PODCAST_BG =
  'https://placehold.co/800x600/23235b/ffffff?text=Podcast+Quântico';
const INSIDER_BG =
  'https://placehold.co/800x600/1e293b/ffffff?text=Quantum+Insider';

export default function Discover({ id }) {
  // Three call-to-action cards for YouTube, Mentors, and Recommended Materials.
  // Keep the layout responsive and minimal; links open in new tabs.
  return (
    <section
      id={id}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-title font-bold mb-4 discover-title"
          >
            Descubra Mais
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto discover-text"
          >
            Explore nossos canais de conteúdo e mantenha-se atualizado sobre o mundo da computação quântica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* YouTube CTA */}
          <div
            className="relative flex flex-col items-center justify-center p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] rounded-2xl shadow-lg border overflow-hidden group hover:shadow-xl transition-all duration-300 bg-surface border-theme-light"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg mb-4 discover-item-gradient-red"
              >
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <h3
                className="text-2xl font-title font-bold mb-2 discover-title"
              >
                Canal no YouTube
              </h3>
              <p
                className="mb-6 text-center discover-text"
              >
                Assista vídeos, entrevistas e conteúdos exclusivos sobre computação quântica, ciência e tecnologia.
              </p>
              <a
                href="https://www.youtube.com/@lacq_feynman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all text-base group-hover:scale-105 discover-content-gradient-red"
              >
                <Youtube className="w-5 h-5" />
                Inscreva-se
              </a>
            </div>
          </div>
          
          {/* Mentores CTA */}
          <div
            className="relative flex flex-col items-center justify-center p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] rounded-2xl shadow-lg border overflow-hidden group hover:shadow-xl transition-all duration-300 bg-surface border-theme-light"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg mb-4 discover-item-gradient-indigo"
              >
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3
                className="text-2xl font-title font-bold mb-2 discover-title"
              >
                Listão de Mentores
              </h3>
              <p
                className="mb-6 text-center discover-text"
              >
                Conheça nossa rede de mentores e especialistas disponíveis para apoiar sua jornada.
              </p>
              <a
                href="https://shorturl.at/p5Oti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all text-base group-hover:scale-105 discover-content-gradient-indigo"
              >
                <Users className="w-5 h-5" />
                Ver lista
              </a>
            </div>
          </div>
          
          {/* Materiais Indicados CTA */}
          <div
            className="relative flex flex-col items-center justify-center p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] rounded-2xl shadow-lg border overflow-hidden group hover:shadow-xl transition-all duration-300 bg-surface border-theme-light"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg mb-4 discover-item-gradient-purple"
              >
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3
                className="text-2xl font-title font-bold mb-2 discover-title"
              >
                Materiais Indicados
              </h3>
              <p
                className="mb-6 text-center discover-text"
              >
                Seleção de materiais recomendados para estudo e aprofundamento em computação quântica.
              </p>
              <a
                href="https://shorturl.at/BVmTs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 text-base font-title transition-all border-purple-500 text-purple-500 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Acessar materiais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}