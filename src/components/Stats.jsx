import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/useScrollReveal';
import { stats } from '../data/content';

export default function Stats() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal="item"]',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      );

      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: target,
                duration: 1.6,
                ease: 'power2.out',
                snap: { innerText: 1 },
                onUpdate: function () {
                  el.textContent = Math.round(el.innerText).toLocaleString();
                },
              }
            );
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div className="stats__item" data-reveal="item" key={s.label}>
            <div className="stats__value">
              <span ref={(el) => (numberRefs.current[i] = el)}>0</span>
              <span className="stats__suffix">{s.suffix}</span>
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
