import { useScrollReveal } from '../utils/useScrollReveal';
import { testimonials } from '../data/content';
import { renderStars } from '../utils/helpers';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className="spotlight testimonials__spot" />
      <div className="container">
        <div className="section-head" data-reveal="head">
          <span className="eyebrow">Client feedback</span>
          <h2>What it's like to work with us</h2>
          <p>We'd rather you hear it from the people who've shipped with us.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" data-reveal="item" key={t.name}>
              <div className="testimonial-card__stars">
                {renderStars(t.rating).map((filled, i) => (
                  <FiStar key={i} className={filled ? 'star star--filled' : 'star'} />
                ))}
              </div>
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">{t.name.charAt(0)}</span>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
