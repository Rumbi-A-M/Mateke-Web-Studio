import { useState } from 'react';
import { nav, socials } from '../data/content';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import { SiDribbble } from 'react-icons/si';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  dribbble: SiDribbble,
};

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__newsletter">
          <div>
            <h3>Get studio notes in your inbox</h3>
            <p>One short email a month. No fluff, unsubscribe anytime.</p>
          </div>
          <form onSubmit={handleSubscribe} className="footer__newsletter-form">
            <input type="email" placeholder="you@company.com" required disabled={subscribed} />
            <button type="submit" className="btn btn-primary" disabled={subscribed}>
              {subscribed ? 'Subscribed ✓' : <>Subscribe <FiArrowRight /></>}
            </button>
          </form>
        </div>

        <div className="footer__bottom">
          <div className="footer__brand">
            <span className="navbar__logo-mark">M</span>
            <span>Mateke<span className="navbar__logo-dim">.studio</span></span>
          </div>

          <nav className="footer__links">
            {nav.map((item) => (
              <a key={item.to} href={`#${item.to}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.to)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.icon}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__legal">
          © {new Date().getFullYear()} Mateke Web Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
