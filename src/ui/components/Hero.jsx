'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-zinc-900 to-indigo-900 text-white min-h-[90vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Liga Nacional de Computação Quântica
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 mb-8"
        >
          Conectando mentes brilhantes no Brasil ao futuro da tecnologia e da informação quântica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#sobre"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-xl bg-indigo-600 hover:bg-indigo-500 transition shadow-lg"
          >
            Saiba mais
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
