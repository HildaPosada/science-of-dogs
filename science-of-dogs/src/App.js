import React, { useEffect, useMemo, useState } from 'react';
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
    category: 'Stress',
    description: 'A noninvasive measure commonly used in studies of canine stress.',
    meaning: 'Stress chemistry can change attention, recovery, and how available a dog is for learning.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+salivary+cortisol+stress',
  },
  {
    title: 'Aversive Training',
    category: 'Learning',
    description: 'Comparative welfare research examines the effects of training methods.',
    meaning: 'How we teach can affect both immediate behavior and the dog’s emotional welfare.',
    label: 'Read the study',
    href: 'https://doi.org/10.1371/journal.pone.0225023',
  },
  {
    title: 'Aggression and Reactivity',
    category: 'Behavior',
    description: 'Behavior science considers context, communication, and individual history.',
    meaning: 'A visible reaction is information about the dog’s state—not a complete description of the dog.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+aggression+reactivity+behavior',
  },
  {
    title: 'Normal Dog Behavior',
    category: 'Behavior',
    description: 'Understanding typical canine behavior helps frame humane support and training.',
    meaning: 'Recognizing species-typical behavior helps separate a problem from a normal canine need.',
    label: 'Read AVSAB resources',
    href: 'https://avsab.org/resources/position-statements/',
  },
  {
    title: 'Longevity',
    category: 'Health',
    description: 'Long-term research explores the factors that shape healthy canine aging.',
    meaning: 'Genetics, environment, relationships, and daily care all contribute to how dogs age.',
    label: 'Visit the project',
    href: 'https://dogagingproject.org/',
  },
  {
    title: 'Air Quality',
    category: 'Environment',
    description: 'Environmental-health research considers how air pollution affects companion animals.',
    meaning: 'The spaces dogs share with us can influence respiratory health and long-term wellbeing.',
    label: 'Explore studies',
    href: 'https://pubmed.ncbi.nlm.nih.gov/?term=dog+air+pollution+health',
  },
];

const pathwayStages = [
  {
    name: 'Sensory input',
    short: 'Notice',
    description: 'A sound, sight, smell, touch, or internal sensation enters the nervous system.',
  },
  {
    name: 'Thalamus',
    short: 'Relay',
    description: 'Sensory information is rapidly routed toward systems that help the dog respond.',
  },
  {
    name: 'Amygdala',
    short: 'Assess',
    description: 'Emotional significance and possible threat are evaluated using biology and experience.',
  },
  {
    name: 'Prefrontal cortex',
    short: 'Regulate',
    description: 'When the dog has enough safety and capacity, flexible evaluation and learned responses become more available.',
  },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePathway, setActivePathway] = useState(0);
  const [researchFilter, setResearchFilter] = useState('All');
  const closeMenu = () => setIsMenuOpen(false);
  const researchFilters = ['All', ...new Set(researchTopics.map((topic) => topic.category))];
  const visibleResearch = useMemo(
    () => researchFilter === 'All' ? researchTopics : researchTopics.filter((topic) => topic.category === researchFilter),
    [researchFilter],
  );

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
            <p className="eyebrow">Canine neuroscience · humane practice</p>
            <h1>Understand the nervous system.<br />Transform the relationship.</h1>
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

        <section id="about" className="scene scene-about" style={{ backgroundImage: "url('/background-about.png')" }}>
          <div className="content-panel" data-reveal>
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
          <div className="method-content">
            <div className="section-intro" data-reveal>
              <p className="eyebrow">The A–B–C method</p>
              <h2>We extract the pain<br />so they can blossom.</h2>
              <p>
                A planned sequence of real-life scenarios reveals how a dog responds—one controlled step at a time, without overwhelming the nervous system.
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
            <p>Science-informed resources for understanding canine behavior, learning, stress, and wellbeing.</p>
          </div>

          <section className="pathway-experience" aria-labelledby="pathway-title" data-reveal>
            <div className="pathway-copy">
              <p className="eyebrow">From stimulus to response</p>
              <h3 id="pathway-title">Behavior begins inside the nervous system.</h3>
              <p>Select each stage to follow one simplified route through the canine brain.</p>
            </div>
            <div className="pathway-panel">
              <div className="pathway-steps" role="tablist" aria-label="Canine neural pathway">
                {pathwayStages.map((stage, index) => (
                  <React.Fragment key={stage.name}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={activePathway === index}
                      aria-controls="pathway-explanation"
                      className={`pathway-step ${activePathway === index ? 'is-active' : ''}`}
                      onClick={() => setActivePathway(index)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{stage.name}</strong>
                      <small>{stage.short}</small>
                    </button>
                    {index < pathwayStages.length - 1 && <span className="pathway-line" aria-hidden="true">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <div id="pathway-explanation" className="pathway-explanation" role="tabpanel" aria-live="polite">
                <span>{pathwayStages[activePathway].short}</span>
                <p>{pathwayStages[activePathway].description}</p>
              </div>
              <p className="pathway-takeaway">Behavior is a nervous-system response—not a character flaw.</p>
            </div>
          </section>

          <figure className="research-figure" data-reveal>
            <img src="/Ilustration-research.png" alt="Canine neural pathway from sensory input through the thalamus and amygdala to the prefrontal cortex" />
            <figcaption>A conceptual illustration of sensory, emotional, and evaluative processing. The complete neural system is more complex.</figcaption>
          </figure>

          <div className="research-toolbar" data-reveal>
            <div>
              <p className="eyebrow">Research library</p>
              <h3>Start with the question.</h3>
            </div>
            <div className="filter-list" aria-label="Filter research by topic">
              {researchFilters.map((filter) => (
                <button type="button" className={researchFilter === filter ? 'is-active' : ''} onClick={() => setResearchFilter(filter)} key={filter} aria-pressed={researchFilter === filter}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="research-grid" data-reveal>
            {visibleResearch.map((topic) => (
              <article className="research-card" key={topic.title}>
                <span className="research-number">{topic.category}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <details>
                  <summary>What this means for your dog</summary>
                  <p>{topic.meaning}</p>
                </details>
                <a href={topic.href} target="_blank" rel="noopener noreferrer">
                  {topic.label} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="source-note">Sources are provided for further reading and should be reviewed before any clinical or training decision.</p>
        </section>

        <section className="case-study-section" aria-labelledby="case-study-title">
          <div className="case-study-visual" style={{ backgroundImage: "url('/background-philosophy.png')" }} role="img" aria-label="Dog and human relationship represented against the existing philosophy artwork" />
          <div className="case-study-copy" data-reveal>
            <p className="eyebrow">Case study · coming soon</p>
            <h2 id="case-study-title">Thirteen bites were not the whole story.</h2>
            <p className="case-study-lead">A longitudinal look at what changes when behavior is interpreted as communication rather than defiance.</p>
            <dl className="case-study-facts">
              <div><dt>Observe</dt><dd>Context, triggers, health, and unmet needs</dd></div>
              <div><dt>Interpret</dt><dd>The nervous-system state beneath the behavior</dd></div>
              <div><dt>Support</dt><dd>Safety, capacity, and repeatable learning</dd></div>
            </dl>
            <p className="case-study-note">The complete case study will be published only after its timeline and outcomes have been documented for responsible review.</p>
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
