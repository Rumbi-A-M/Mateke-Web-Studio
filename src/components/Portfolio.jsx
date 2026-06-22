import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useScrollReveal } from '../utils/useScrollReveal';
import { portfolio } from '../data/content';
import { hexToRgba } from '../utils/helpers';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section className="section portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal="head">
          <span className="eyebrow">Selected work</span>
          <h2>Real products, real traffic, real stakes</h2>
          <p>A handful of platforms we've designed, built, and kept running in production.</p>
        </div>
      </div>

      <div className="portfolio__swiper-wrap" data-reveal="item">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={1.08}
          grabCursor
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            940: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.6 },
          }}
          className="portfolio__swiper"
        >
          {portfolio.map((p) => (
            <SwiperSlide key={p.title}>
              <a
                href={p.url}
                target={p.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="portfolio-card"
                style={{ '--card-accent': p.color, background: `linear-gradient(160deg, ${hexToRgba(p.color, 0.16)}, transparent 60%)` }}
              >
                <div className="portfolio-card__top">
                  <span className="portfolio-card__category">{p.category}</span>
                  <FiArrowUpRight className="portfolio-card__arrow" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="portfolio-card__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
