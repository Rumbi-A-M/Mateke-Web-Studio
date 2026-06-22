import { useScrollReveal } from '../utils/useScrollReveal';
import { blog } from '../data/content';
import { FiArrowRight } from 'react-icons/fi';

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section className="section blog" id="blog" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal="head">
          <span className="eyebrow">From the studio</span>
          <h2>Recent insights</h2>
          <p>Notes from the work — engineering, design, and process.</p>
        </div>

        <div className="blog__grid">
          {blog.map((b) => (
            <a href="#" className="blog-card" data-reveal="item" key={b.title}>
              <div className={`blog-card__img blog-card__img--${b.img}`} />
              <div className="blog-card__body">
                <span className="blog-card__meta">{b.category} · {b.date}</span>
                <h3>{b.title}</h3>
                <span className="blog-card__read">Read article <FiArrowRight /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
