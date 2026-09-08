import React, { useEffect, useState } from 'react';
import './App.css';
import { FaArrowRight, FaBars, FaInstagram, FaTimes } from 'react-icons/fa';

const methodSteps = [
  {
    id: 'A',
    image: '/A-Person calmly standing near a seated dog.png',
    alt: 'A person calmly standing near a seated dog',
    title: 'Establish safety',
    description: 'A family member stays nearby, close enough to be present and far enough for the dog to remain at ease.',
  },
  {
    id: 'B',
    image: '/B-Hand repeatedly attaching a leash clip to the collar.png',
    alt: 'A hand repeatedly attaching a leash clip to a dog collar',
    title: 'Repeat one task',
    description: 'One small interaction is repeated, allowing pattern and response to become visible.',
  },
  {
    id: 'C',
    image: '/C-Three people observing a calm dog.png',
    alt: 'Three people observing a calm dog together',
    title: 'Observe the whole',
    description: 'The separate observations are brought together, and the dog is considered as a whole.',
  },
];

const researchTopics = [
  {
    title: 'Cortisol',
    image: '/research-cortisol.webp',
    imagePosition: '68% center',
    category: 'Stress',
    description: 'A quiet chemical record of stress, often measured without disturbing the dog.',
    meaning: 'Stress chemistry can alter attention, recovery, and a dog’s capacity to learn.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+salivary+cortisol+stress',
  },
  {
    title: 'Aversive Training',
    image: '/research-aversive.webp',
    category: 'Learning',
    description: 'Welfare research asks what different methods teach beyond the behavior we can see.',
    meaning: 'How we teach can shape both the immediate response and the emotional life beneath it.',
    label: 'Read the study',
    href: 'https://doi.org/10.1371/journal.pone.0225023',
  },
  {
    title: 'Aggression and Reactivity',
    image: '/research-reactivity.webp',
    category: 'Behavior',
    description: 'Behavior becomes more legible when context, communication, and personal history are allowed into the frame.',
    meaning: 'A reaction tells us something about a dog’s present state. It does not tell us everything about the dog.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+aggression+reactivity+behavior',
  },
  {
    title: 'Normal Dog Behavior',
    image: '/research-normal.webp',
    category: 'Behavior',
    description: 'Not everything inconvenient is abnormal, and not every difference needs correcting.',
    meaning: 'Recognizing ordinary canine needs helps us distinguish distress from the simple fact of being a dog.',
    label: 'Read AVSAB resources',
    href: 'https://avsab.org/resources/position-statements/',
  },
  {
    title: 'Longevity',
    image: '/research-longevity.webp',
    category: 'Health',
    description: 'Long-term research follows the many small conditions from which a canine life is made.',
    meaning: 'Genes matter, but so do environment, relationships, daily care, and time.',
    label: 'Visit the project',
    href: 'https://dogagingproject.org/',
  },
  {
    title: 'Air Quality',
    image: '/research-air-quality.webp',
    category: 'Environment',
    description: 'Environmental health begins with the air that dogs and humans quietly share.',
    meaning: 'The ordinary atmosphere of a home can shape respiratory health and long-term wellbeing.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+air+pollution+health',
  },
];

const pathwayStages = [
  {
    name: 'Sensory input',
    short: 'Notice',
    description: 'A sound, a scent, a movement, a touch. The world arrives before the dog has decided what it means.',
  },
  {
    name: 'Thalamus',
    short: 'Relay',
    description: 'The signal is carried onward, quickly and without commentary, toward the systems that prepare a response.',
  },
  {
    name: 'Amygdala',
    short: 'Assess',
    description: 'Biology meets memory. The nervous system asks its oldest practical question: is this safe?',
  },
  {
    name: 'Prefrontal cortex',
    short: 'Regulate',
    description: 'With enough safety and capacity, the dog gains access to choice, flexibility, and what experience has taught.',
  },
];

const pathwayScenes = [
  ...pathwayStages,
  {
    name: 'The whole response',
    short: 'Understand',
    description: 'What we call behavior is the visible end of an invisible conversation among biology, experience, and the present moment.',
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePathway, setActivePathway] = useState(0);
  const closeMenu = () => setIsMenuOpen(false);

  const navigateToMethod = (event) => {
    event.preventDefault();
    closeMenu();
    window.history.replaceState(null, '', '#philosophy');
    requestAnimationFrame(() => {
      document.querySelector('.method-content')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scenes = document.querySelectorAll('[data-pathway-scene]');
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActivePathway(Number(entry.target.dataset.pathwayScene));
      }),
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
    );
    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

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
          <a href="#philosophy" onClick={navigateToMethod}>Philosophy</a>
          <a href="#research" onClick={closeMenu}>Research</a>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="scene scene-hero" style={{ backgroundImage: "url('/background-hero-booking.png')" }}>
          <div className="hero-content">
            <p className="eyebrow">Canine neuroscience · practiced with care</p>
            <h1>Behavior has a history.<br />Change begins by listening.</h1>
            <p className="hero-copy">
              Mapping and rewiring neural pathways for dogs and the humans who care for them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#philosophy" onClick={navigateToMethod}>Explore the philosophy <FaArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href="#research">View the research</a>
            </div>
          </div>
          <span className="scroll-cue" aria-hidden="true">Scroll to explore</span>
        </section>

        <section id="about" className="scene scene-about" style={{ backgroundImage: "url('/background-about-editorial.webp')" }}>
          <div className="content-panel" data-reveal>
            <p className="eyebrow">The practice</p>
            <h2>To look closely is to care better.</h2>
            <p>
              Led by Kim, Science of Dogs brings neuroscience, psychology, and careful observation into the same room. Behavior is treated not as an offense to be corrected, but as information to be understood.
            </p>
            <p>
              In calm, structured experiences, families learn to notice what urgency often conceals. Trust grows through attention, and change becomes something dog and human can make together.
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

        <section id="philosophy" className="scene scene-method" style={{ backgroundImage: "url('/background-philosophy-editorial.webp')" }}>
          <div className="method-content">
            <div className="section-intro" data-reveal>
              <p className="eyebrow">The A–B–C method</p>
              <h2>We extract the pain<br />so they can blossom.</h2>
              <p>
                Real life is introduced in careful increments. Each phase makes the dog’s response easier to read without asking the nervous system to carry more than it can hold.
              </p>
            </div>

            <ol className="method-grid" aria-label="Three phases of the A-B-C method" data-reveal>
              {methodSteps.map((step, index) => (
                <li className="method-step" key={step.id}>
                  <div className="method-card">
                    <span className="step-number">0{index + 1}</span>
                    <span className="step-label">Phase {step.id}</span>
                    <img src={step.image} alt={step.alt} />
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < methodSteps.length - 1 && <FaArrowRight className="method-arrow" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="research" className="research-section">
          <div className="section-intro research-intro" data-reveal>
            <p className="eyebrow">Evidence before assumption</p>
            <h2>Research</h2>
            <p>Research begins where certainty ends. These studies invite a closer look at behavior, learning, stress, and the conditions in which dogs live.</p>
          </div>

          <section className={`cinematic-pathway pathway-scene-${activePathway}`} aria-labelledby="pathway-title">
            <div className="pathway-sticky">
              <figure className="pathway-visual">
                <img src="/illustration-research.webp" alt="Conceptual canine neural pathway from sensory input through the thalamus and amygdala to the prefrontal cortex" />
              </figure>
              <div className="pathway-story" aria-live="polite">
                <p className="eyebrow">{pathwayScenes[activePathway].short} · {String(activePathway + 1).padStart(2, '0')}</p>
                <h3 id="pathway-title">{pathwayScenes[activePathway].name}</h3>
                <p>{pathwayScenes[activePathway].description}</p>
                <div className="pathway-progress" aria-label={`Pathway scene ${activePathway + 1} of ${pathwayScenes.length}`}>
                  {pathwayScenes.map((scene, index) => <span className={index <= activePathway ? 'is-active' : ''} key={scene.name} />)}
                </div>
              </div>
              {activePathway === pathwayScenes.length - 1 && <p className="pathway-final">Behavior is a nervous-system response, not a character flaw.</p>}
            </div>
            <div className="pathway-scroll-track" aria-hidden="true">
              {pathwayScenes.map((scene, index) => <div data-pathway-scene={index} key={scene.name} />)}
            </div>
          </section>
          <p className="pathway-disclaimer">This is a teaching model of one pathway. A living nervous system is more complex, more connected, and less tidy.</p>

          <div className="research-grid" data-reveal>
            {researchTopics.map((topic, index) => (
              <article
                className="research-card"
                style={{
                  '--card-image': `url(${topic.image})`,
                  '--card-image-position': topic.imagePosition || 'center',
                }}
                key={topic.title}
              >
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

        <section className="case-study-section" aria-labelledby="case-study-title">
          <div className="case-study-visual" style={{ backgroundImage: "url('/background-case-study-editorial.webp')" }} role="img" aria-label="Two dogs positioned around a sculptural dandelion" />
          <div className="case-study-copy" data-reveal>
            <p className="eyebrow">Case study · coming soon</p>
            <h2 id="case-study-title">Thirteen bites were not the whole story.</h2>
            <p className="case-study-lead">Thirteen bites can look like a conclusion. We treated them as the beginning of a question: what had the behavior been trying to say?</p>
            <dl className="case-study-facts">
              <div><dt>Observe</dt><dd>Context, triggers, health, and unmet needs</dd></div>
              <div><dt>Interpret</dt><dd>The nervous-system state beneath the behavior</dd></div>
              <div><dt>Support</dt><dd>Safety, capacity, and repeatable learning</dd></div>
            </dl>
            <p className="case-study-note">The complete case study will be published when its timeline and outcomes have been documented carefully enough to deserve the reader’s trust.</p>
          </div>
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
