'use client';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion/dom/mini';
export function AccentLine() {
  const line = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!line.current || preference.matches) return;
    const animation = animate(
      line.current,
      { transform: ['scaleX(0.12)', 'scaleX(1)'] },
      { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    );
    const stop = () => {
      if (preference.matches) {
        animation.stop();
        if (line.current) line.current.style.transform = 'none';
      }
    };
    preference.addEventListener('change', stop);
    return () => {
      animation.stop();
      preference.removeEventListener('change', stop);
    };
  }, []);
  return <span ref={line} className="accent-line" aria-hidden="true" />;
}
