import React, { useState } from 'react';
import './App.css';
import { FaArrowRight, FaBars, FaInstagram, FaTimes } from 'react-icons/fa';

const methodSteps = [
  {
    id: 'A',
    image: '/A-Person calmly standing near a seated dog.png',
    alt: 'A person calmly standing near a seated dog',
    title: 'Establish safety',
    description: 'A family member stays near the dog at a comfortable distance.',
  },
  {
    id: 'B',
    image: '/B-Hand repeatedly attaching a leash clip to the collar.png',
    alt: 'A hand repeatedly attaching a leash clip to a dog collar',
    title: 'Repeat one task',
    description: 'A family member repeats one specific interaction with the dog.',
  },
  {
    id: 'C',
    image: '/C-Three people observing a calm dog.png',
    alt: 'Three people observing a calm dog together',
    title: 'Observe the whole',
    description: 'The dog is observed across the full combined scenario.',
  },
];

const researchTopics = [
  {
    title: 'Cortisol',
    description: 'A noninvasive measure commonly used in studies of canine stress.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+salivary+cortisol+stress',
  },
  {
    title: 'Aversive Training',
    description: 'Comparative welfare research examines the effects of training methods.',
    label: 'Read the study',
    href: 'https://doi.org/10.1371/journal.pone.0225023',
  },
  {
    title: 'Aggression and Reactivity',
    description: 'Behavior science considers context, communication, and individual history.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+aggression+reactivity+behavior',
  },
  {
    title: 'Normal Dog Behavior',
    description: 'Understanding typical canine behavior helps frame humane support and training.',
    label: 'Read AVSAB resources',
    href: 'https://avsab.org/resources/position-statements/',
  },
  {
    title: 'Longevity',
    description: 'Long-term research explores the factors that shape healthy canine aging.',
    label: 'Visit the project',
    href: 'https://dogagingproject.org/',
  },
  {
    title: 'Air Quality',
    description: 'Environmental-health research considers how air pollution affects companion animals.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+air+pollution+health',
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a href="#home" className="brand" aria-label="Go to Science of Dogs home" onClick={closeMenu}>
          <img src="/logo.png" alt="" className="brand-mark" />
          <span>Science of Dogs</span>
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav id="site-navigation" className={`site-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#philosophy" onClick={closeMenu}>Method</a>
          <a href="#research" onClick={closeMenu}>Research</a>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="scene scene-hero" style={{ backgroundImage: "url('/background-hero-booking.png')" }}>
          <div className="hero-content">
            <p className="eyebrow">Canine neuroscience · humane practice</p>
            <h1>Understand the nervous system.<br />Transform the relationship.</h1>
            <p className="hero-copy">
              Mapping and rewiring neural pathways for dogs and the humans who care for them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#philosophy">Explore the method <FaArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href="#research">View the research</a>
            </div>
          </div>
          <span className="scroll-cue" aria-hidden="true">Scroll to explore</span>
        </section>

        <section id="about" className="scene scene-about" style={{ backgroundImage: "url('/background-about.png')" }}>
          <div className="content-panel">
            <p className="eyebrow">The practice</p>
            <h2>Science made humane.</h2>
            <p>
              Led by Kim, Science of Dogs combines canine neuroscience, psychology, and careful observation to understand behavior at its source—not simply suppress its symptoms.
            </p>
            <p>
              Families learn through controlled, hands-on experiences designed to build trust and create lasting change for both dog and human.
            </p>
            <a
              href="https://www.instagram.com/scienceofdogs?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label="Follow Science of Dogs on Instagram"
            >
              <FaInstagram aria-hidden="true" /> Follow the work
            </a>
          </div>
        </section>

        <section id="philosophy" className="scene scene-method" style={{ backgroundImage: "url('/background-philosophy.png')" }}>
          <div className="section-intro">
            <p className="eyebrow">The A–B–C method</p>
            <h2>We extract the pain<br />so they can blossom.</h2>
            <p>
              A planned sequence of real-life scenarios reveals how a dog responds—one controlled step at a time, without overwhelming the nervous system.
            </p>
          </div>

          <ol className="method-grid" aria-label="Three stages of the A-B-C method">
            {methodSteps.map((step, index) => (
              <li className="method-step" key={step.id}>
                <div className="method-card">
                  <span className="step-number">0{index + 1}</span>
                  <span className="step-label">Step {step.id}</span>
                  <img src={step.image} alt={step.alt} />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < methodSteps.length - 1 && <FaArrowRight className="method-arrow" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </section>

        <section id="research" className="research-section">
          <div className="section-intro research-intro">
            <p className="eyebrow">Evidence before assumption</p>
            <h2>Research</h2>
            <p>Science-informed resources for understanding canine behavior, learning, stress, and wellbeing.</p>
          </div>

          <figure className="research-figure">
            <img
              src="/Ilustration-research.png"
              alt="Canine neural pathway from sensory input through the thalamus and amygdala to the prefrontal cortex"
            />
            <figcaption>How sensory information moves through emotional and evaluative pathways.</figcaption>
          </figure>

          <div className="research-grid">
            {researchTopics.map((topic, index) => (
              <article className="research-card" key={topic.title}>
                <span className="research-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <a href={topic.href} target="_blank" rel="noopener noreferrer">
                  {topic.label} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="source-note">Sources are provided for further reading and should be reviewed before any clinical or training decision.</p>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home" className="footer-brand">Science of Dogs</a>
        <p>Canine neuroscience for humane transformation.</p>
        <p className="copyright">© 2026 Science of Dogs<sup>TM</sup>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
