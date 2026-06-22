import { useEffect, useRef } from 'react';
import { gsap } from '../utils/useScrollReveal';
import { heroLines } from '../data/content';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

export default function Hero() {
  const lineRefs = useRef([]);
  const cursorRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      heroTextRef.current.querySelectorAll('[data-hero-item]'),
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
    );

    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const full = heroLines[i];
      tl.to(
        {},
        {
          duration: full.length * 0.014,
          ease: 'none',
          onStart: () => {
            line.style.opacity = 1;
          },
          onUpdate: function () {
            const p = this.progress();
            const chars = Math.round(p * full.length);
            line.textContent = full.slice(0, chars);
          },
        },
        i === 0 ? '+=0.4' : '+=0.05'
      );
    });

    tl.to(cursorRef.current, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true }, '+=0.2');

    return () => tl.kill();
  }, []);

  return (
    <section id="top" className="hero">
      <div className="spotlight hero__spot-1" />
      <div className="spotlight hero__spot-2" />

      <div className="container hero__grid">
        <div className="hero__text" ref={heroTextRef}>
          <span className="eyebrow" data-hero-item>Web · Product · DevOps studio</span>
          <h1 data-hero-item>
            We design and ship <span className="hero__highlight">software that earns its keep.</span>
          </h1>
          <p className="hero__sub" data-hero-item>
            Mateke Web Studio is a small, senior team that builds fast websites, durable products,
            and the infrastructure underneath them — for founders who'd rather launch than wait.
          </p>
          <div className="hero__actions" data-hero-item>
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get Started <FiArrowRight />
            </a>
            <a href="#portfolio" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <FiPlay /> See Our Work
            </a>
          </div>
        </div>

        <div className="hero__terminal" data-hero-item>
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">mateke — zsh</span>
            </div>
            <div className="terminal__body">
              {heroLines.map((line, i) => (
                <div className="terminal__line" key={i}>
                  <span ref={(el) => (lineRefs.current[i] = el)} style={{ opacity: 0 }} />
                  {i === heroLines.length - 1 && <span ref={cursorRef} className="terminal__cursor">▍</span>}
                </div>
              ))}
            </div>
          </div>
          <svg className="hero__box-anim" viewBox="0 0 400 400" aria-hidden="true">
            <rect x="40" y="40" width="100" height="100" rx="12" className="box box-a" />
            <rect x="180" y="90" width="80" height="80" rx="12" className="box box-b" />
            <rect x="260" y="220" width="110" height="110" rx="12" className="box box-c" />
            <rect x="70" y="220" width="70" height="70" rx="12" className="box box-d" />
          </svg>
        </div>
      </div>
    </section>
  );
}
