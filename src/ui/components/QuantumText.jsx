'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function QuantumText({ text, className = "" }) {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNñOPQRSTUVWXYZ0123456789$#@&%*";

  useEffect(() => {
    // Ensure we are animating the actual text, not a key
    if (!text || text.includes('Title') || text.includes('Subtitle')) {
      return;
    }

    const element = textRef.current;
    if (!element) return;

    let iteration = 0;
    let interval = null;

    const startAnimation = () => {
      clearInterval(interval);
      const speed = text.length > 20 ? 1.5 : 0.8;

      interval = setInterval(() => {
        const scrambled = text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayText(scrambled);

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text); // Final safety set
        }

        iteration += speed;
      }, 25);
    };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 95%",
      onEnter: () => {
        iteration = 0;
        startAnimation();
      },
      once: true
    });

    return () => {
      clearInterval(interval);
      trigger.kill();
    };
  }, [text]);

  return (
    <span ref={textRef} className={className}>
      {displayText}
    </span>
  );
}
