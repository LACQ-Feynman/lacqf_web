import { Youtube, Mic2, Newspaper } from 'lucide-react';

const YOUTUBE_BG =
  'https://placehold.co/800x600/1a1a2e/ffffff?text=YouTube+LACQ';
const PODCAST_BG =
  'https://placehold.co/800x600/23235b/ffffff?text=Podcast+Quântico';
const INSIDER_BG =
  'https://placehold.co/800x600/1e293b/ffffff?text=Quantum+Insider';

export default function Discover() {
  return (
    <section className="w-full min-h-[340px] py-0 px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
        {/* YouTube CTA */}
        <div
          className="relative flex items-center justify-center min-h-[340px] h-full w-full overflow-hidden group"
        >
          <img
            src={YOUTUBE_BG}
            alt="YouTube LACQ"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent group-hover:from-black/90 transition-all" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 gap-4 w-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600/90 to-red-400/80 shadow-lg mb-2">
              <Youtube className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-title font-bold text-white mb-1 tracking-wide drop-shadow">Canal no YouTube</h3>
            <p className="text-gray-200 mb-2 max-w-xs mx-auto drop-shadow">Assista vídeos, entrevistas e conteúdos exclusivos sobre computação quântica, ciência e tecnologia.</p>
            <a
              href="https://www.youtube.com/@lacq_feynman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all text-lg group-hover:scale-105"
            >
              <Youtube className="w-6 h-6" />
              Inscreva-se
            </a>
          </div>
        </div>
        {/* Podcast CTA */}
        <div
          className="relative flex items-center justify-center min-h-[340px] h-full w-full overflow-hidden group"
        >
          <img
            src={PODCAST_BG}
            alt="Podcast Quântico"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-900/60 to-transparent group-hover:from-black/90 transition-all" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 gap-4 w-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600/90 to-indigo-400/80 shadow-lg mb-2">
              <Mic2 className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-title font-bold text-white mb-1 tracking-wide drop-shadow">Podcast Quântico</h3>
            <p className="text-gray-200 mb-2 max-w-xs mx-auto drop-shadow">Ouça conversas inspiradoras com especialistas, pesquisadores e entusiastas do universo quântico.</p>
            <a
              href="https://open.spotify.com/show/quantico" // Substitua pelo link real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg transition-all text-lg group-hover:scale-105"
            >
              <Mic2 className="w-6 h-6" />
              Ouvir agora
            </a>
          </div>
        </div>
        {/* Quantum Insider CTA */}
        <div
          className="relative flex items-center justify-center min-h-[340px] h-full w-full overflow-hidden group"
        >
          <img
            src={INSIDER_BG}
            alt="Quantum Insider"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-transparent group-hover:from-black/90 transition-all" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 gap-4 w-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-white/90 to-white/70 shadow-lg mb-2 border-2 border-white/70">
              <Newspaper className="w-12 h-12 text-black drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-title font-bold text-white mb-1 tracking-wide drop-shadow">Quantum Insider</h3>
            <p className="text-white mb-2 max-w-xs mx-auto drop-shadow font-medium">
              Clube de conteúdos exclusivos.<br />
              Artigos, tendências e novidades.<br />
              O universo quântico em primeira mão.
            </p>
            <button
              disabled
              className="inline-flex items-center gap-2 px-7 py-2.5 border-2 border-white text-white font-semibold rounded-lg shadow-lg transition-all text-lg opacity-80 cursor-not-allowed bg-transparent font-title tracking-wide"
            >
              <Newspaper className="w-6 h-6" />
              Em breve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 