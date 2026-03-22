'use client';

import React, { useEffect } from 'react';

/**
 * According to Next.js App Router conventions:
 * - `error.js` should NOT contain <html> and <body> tags as it renders inside the layout.
 * - `global-error.js` MUST contain <html> and <body> tags as it replaces the root layout.
 * 
 * Since this file is named `error.js`, we remove the root tags to avoid hydration errors.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Captured error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[70vh] w-full">
      <div className="text-center p-8 max-w-md bg-surface border border-border rounded-[2rem] shadow-2xl">
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-3xl font-title font-bold text-primary mb-4">Algo deu errado</h2>
        <p className="text-text-secondary mb-8 text-lg">
          Pedimos desculpas, mas ocorreu um erro inesperado no processamento quântico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Tentar novamente
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-secondary text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-secondary/20"
          >
            Recarregar
          </button>
        </div>
      </div>
    </div>
  );
}
