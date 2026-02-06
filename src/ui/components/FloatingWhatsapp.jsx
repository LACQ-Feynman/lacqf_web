'use client';

import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const whatsappLink = "https://chat.whatsapp.com/Gs7ZFId4iBwKFIrbhDyGIX?mode=gi_t";

const FloatingWhatsapp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre no grupo do WhatsApp"
      className="fixed bottom-6 left-6 z-50 group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-105 hover:bg-green-600 transition-all duration-200 border-4 border-white/80 dark:border-gray-900/80">
        <IconBrandWhatsapp className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
      </div>
    </a>
  );
};

export default React.memo(FloatingWhatsapp); 