'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const whatsappNumber = '5599999999999'; // Replace with the actual number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const FloatingWhatsapp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 dark:bg-indigo-500 shadow-lg hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all duration-200 border-4 border-white/80 dark:border-gray-900/80">
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" />
      </div>
    </a>
  );
};

export default React.memo(FloatingWhatsapp); 