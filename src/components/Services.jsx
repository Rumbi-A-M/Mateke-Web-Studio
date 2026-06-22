import { useScrollReveal } from '../utils/useScrollReveal';
import { services } from '../data/content';
import { FiCode, FiLayout, FiEdit3, FiServer, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

const iconMap = {
  code: FiCode,
  layout: FiLayout,
  'pen-tool': FiEdit3,
  server: FiServer,
  smartphone: FiSmartphone,
  'trending-up': FiTrendingUp,
};

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="spotlight services__spot" />
      <div className="container">
        <div className="section-head" data-reveal="head">
          <span className="eyebrow">What we do</span>
          <h2>Services built around shipping, not slide decks</h2>
          <p>Every engagement ends in something live — a product, a pipeline, a brand — not a deck of recommendations nobody acts on.</p>
        </div>

        <div className="services__grid">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div className="service-card" data-reveal="item" key={s.title}>
                <div className="service-card__icon"><Icon size={22} /></div>
                <h3>{s.title}</h3>
                <p className="line-clamp-3">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
