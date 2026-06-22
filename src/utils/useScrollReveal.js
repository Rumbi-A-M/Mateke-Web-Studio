import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal({ y = 40, stagger = 0.08, duration = 0.9 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const head = el.querySelectorAll('[data-reveal="head"]');
    const items = el.querySelectorAll('[data-reveal="item"]');

    const ctx = gsap.context(() => {
      if (head.length) {
        gsap.fromTo(
          head,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        );
      }
      if (items.length) {
        gsap.fromTo(
          items,
          { y: y * 0.8, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 78%' },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [y, stagger, duration]);

  return ref;
}

export { gsap, ScrollTrigger };
