import { useState } from 'react';
import { useScrollReveal } from '../utils/useScrollReveal';
import { FiMapPin, FiMail, FiPhone, FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useScrollReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="spotlight contact__spot" />
      <div className="container contact__grid">
        <div data-reveal="item">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's build something that lasts</h2>
          <p className="contact__lead">
            Tell us what you're working on. We reply within one business day, every time.
          </p>

          <ul className="contact__info">
            <li><FiMapPin /> 14 Independence Avenue, Kampala, Uganda</li>
            <li><FiMail /> hello@mateke.studio</li>
            <li><FiPhone /> +256 700 123 456</li>
          </ul>
        </div>

        <form className="contact__form" data-reveal="item" onSubmit={handleSubmit}>
          <div className="contact__row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@company.com" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="New website project" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell us a bit about your project..." required />
          </div>
          <button type="submit" className="btn btn-primary contact__submit">
            {sent ? 'Message sent ✓' : <>Send message <FiSend /></>}
          </button>
        </form>
      </div>
    </section>
  );
}
