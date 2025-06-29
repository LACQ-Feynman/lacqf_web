'use client';

import { Atom, CircuitBoard, SquareFunction, Infinity as InfinityIcon } from 'lucide-react';

export default function QuantumIconsBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none">
      {/* Canto superior esquerdo */}
      <Atom className="w-32 h-32 text-indigo-500 opacity-10 absolute top-0 left-0 animate-float-slow" style={{ animationDelay: '0s' }} />
      {/* Canto superior direito */}
      <CircuitBoard className="w-40 h-40 text-green-400 opacity-10 absolute top-4 right-0 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      {/* Canto inferior esquerdo */}
      <SquareFunction className="w-28 h-28 text-purple-400 opacity-10 absolute bottom-0 left-4 animate-float-slow" style={{ animationDelay: '2.5s' }} />
      {/* Canto inferior direito */}
      <InfinityIcon className="w-36 h-36 text-orange-400 opacity-10 absolute bottom-8 right-8 animate-float-slow" style={{ animationDelay: '3.5s' }} />
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); opacity: 0.10; }
          50% { transform: translateY(-18px); opacity: 0.18; }
          100% { transform: translateY(0px); opacity: 0.10; }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 