'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

export default function MagneticWrapper({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const boundsRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handlePointerEnter = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse' || !ref.current) return;
    boundsRef.current = ref.current.getBoundingClientRect();
  };

  const handlePointerMove = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse' || !boundsRef.current) return;

    const { clientX, clientY } = event;
    const { width, height, left, top } = boundsRef.current;
    x.set((clientX - (left + width / 2)) * strength);
    y.set((clientY - (top + height / 2)) * strength);
  };

  const resetPosition = () => {
    boundsRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
