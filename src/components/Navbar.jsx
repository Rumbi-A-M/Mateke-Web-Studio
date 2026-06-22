import { useEffect, useRef, useState } from 'react';
import { gsap } from '../utils/useScrollReveal';
import { nav, socials } from '../data/content';
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi';
import { SiDribbble } from 'react-icons/si';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  dribbble: SiDribbble,
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const items = navRef.current?.querySelectorAll('[data-stagger]');
    if (!items?.length) return;
    gsap.fromTo(
      items,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;
    if (open) {
      gsap.set(sidebarRef.current, { display: 'flex' });
      gsap.set(overlayRef.current, { display: 'block' });
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(sidebarRef.current, { x: '-100%' }, { x: '0%', duration: 0.45, ease: 'power3.out' });
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.25 });
      gsap.to(sidebarRef.current, {
        x: '-100%',
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(sidebarRef.current, { display: 'none' });
          gsap.set(overlayRef.current, { display: 'none' });
        },
      });
    }
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#top" className="navbar__logo" data-stagger onClick={(e) => { e.preventDefault(); scrollToId('top'); }}>
            <span className="navbar__logo-mark">M</span>
            <span>Mateke<span className="navbar__logo-dim">.studio</span></span>
          </a>

          <nav className="navbar__links">
            {nav.map((item) => (
              <button key={item.to} data-stagger onClick={() => handleNavClick(item.to)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar__right">
            <div className="navbar__socials">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" data-stagger aria-label={s.icon}>
                    <Icon />
                  </a>
                );
              })}
            </div>
            <button className="btn btn-primary navbar__cta" data-stagger onClick={() => handleNavClick('contact')}>
              Start a project
            </button>
            <button className="navbar__burger" data-stagger onClick={() => setOpen(true)} aria-label="Open menu">
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div ref={overlayRef} className="sidebar-overlay" style={{ display: 'none' }} onClick={() => setOpen(false)} />
      <aside ref={sidebarRef} className="sidebar" style={{ display: 'none' }}>
        <button className="sidebar__close" onClick={() => setOpen(false)} aria-label="Close menu">
          <FiX size={22} />
        </button>
        <nav className="sidebar__links">
          {nav.map((item) => (
            <button key={item.to} onClick={() => handleNavClick(item.to)}>{item.label}</button>
          ))}
        </nav>
        <button className="btn btn-primary" onClick={() => handleNavClick('contact')}>Start a project</button>
        <div className="sidebar__socials">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.icon}>
                <Icon />
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
