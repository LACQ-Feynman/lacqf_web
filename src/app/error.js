'use client';

import React, { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body className="bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Algo deu errado</h2>
            <p className="text-muted-foreground mb-4">
              Pedimos desculpas, mas ocorreu um erro inesperado.
            </p>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors mr-2"
            >
              Tentar novamente
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
            >
              Recarregar
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}