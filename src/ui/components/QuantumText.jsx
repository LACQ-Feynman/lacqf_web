'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNñOPQRSTUVWXYZ0123456789$#@&%*";

export default function QuantumText({ text, className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element || !text || text.includes('Title') || text.includes('Subtitle')) {
      return undefined;
    }

    element.textContent = text;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let iteration = 0;
    let interval = null;

    const startAnimation = () => {
      clearInterval(interval);
      iteration = 0;
      const speed = text.length > 20 ? 1.5 : 0.8;

      interval = window.setInterval(() => {
        const scrambled = text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("");

        // Update only the text node. React does not need to re-render every frame.
        element.textContent = scrambled;

        if (iteration >= text.length) {
          clearInterval(interval);
          element.textContent = text;
        }

        iteration += speed;
      }, 25);
    };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 95%",
      onEnter: startAnimation,
      once: true,
    });

    return () => {
      clearInterval(interval);
      trigger.kill();
      if (element) element.textContent = text;
    };
  }, [text]);

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  );
}
