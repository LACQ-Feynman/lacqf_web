'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width={props.size || 24} height={props.size || 24} {...props}>
    <path d="M28.5 11.7c-2.2 0-4-1.8-4-4V3.5c0-0.3-0.2-0.5-0.5-0.5h-3.2c-0.3 0-0.5 0.2-0.5 0.5v18.2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5-0.2 0.5-0.5v-3.2c0-0.3-0.2-0.5-0.5-0.5-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8v-7.7c1.2 0.7 2.6 1.1 4 1.1 0.3 0 0.5-0.2 0.5-0.5v-3.2c0-0.3-0.2-0.5-0.5-0.5z" />
  </svg>
);

const DiscordIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 24} height={props.size || 24} {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1836 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lacq-feynman/?viewAsMember=true',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/seu-instagram',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@lacqfeynman',
    icon: TikTokIcon,
    color: 'hover:text-black dark:hover:text-white',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/seu-facebook',
    icon: Facebook,
    color: 'hover:text-blue-800',
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