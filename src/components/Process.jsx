import { useScrollReveal } from '../utils/useScrollReveal';
import { process } from '../data/content';

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section className="section process" id="process" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal="head">
          <span className="eyebrow">How we work</span>
          <h2>A process built for momentum, not meetings</h2>
          <p>Four phases, no surprises. You always know what's shipping next and why.</p>
        </div>

        <div className="process__timeline">
          {process.map((step, i) => (
            <div className="process__step" data-reveal="item" key={step.title}>
              <div className="process__index">{String(i + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
