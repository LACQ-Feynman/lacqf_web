'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import { IconBrandWhatsapp, IconBrandTiktok } from '@tabler/icons-react';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/lacqfeynman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@lacqfeynman',
    icon: IconBrandTiktok,
    color: 'hover:text-black dark:hover:text-white',
  },
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/Gs7ZFId4iBwKFIrbhDyGIX?mode=gi_t',
    icon: IconBrandWhatsapp,
    color: 'hover:text-green-500',
  },
];

const SocialStack = () => {
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(true);
  const observerRef = useRef();

  useEffect(() => {
    // We hide the stack when contact or footer is visible
    // to avoid overlapping interactive areas.
    const contact = document.getElementById('contato');
    const footer = document.querySelector('footer');
    if (!contact && !footer) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        setHide(isVisible);
      },
      { threshold: 0.1 }
    );
    if (contact) observer.observe(contact);
    if (footer) observer.observe(footer);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hide) {
      setTimeout(() => setVisible(false), 300);
    } else {
      // Use rAF to avoid synchronous setState inside the effect,
      // keeping updates smooth.
      requestAnimationFrame(() => setVisible(true));
    }
  }, [hide]);

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-4 z-40 hidden md:flex flex-col items-center gap-4 bg-white/10 dark:bg-gray-900/40 rounded-2xl p-3 shadow-lg backdrop-blur-md transition-opacity duration-300 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ display: visible ? undefined : 'none' }}
    >
      {socials.map(({ name, href, icon: Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`text-gray-500 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800 rounded-full p-2 transition-all duration-200 ${color}`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default React.memo(SocialStack);