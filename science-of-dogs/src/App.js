import React, { useState } from 'react';
import './App.css';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa'; // Consolidated imports

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 bg-red-translucent fixed w-full z-10 backdrop-blur-md">
        <a href="#home" className="flex items-center" aria-label="Go to Science of Dogs home">
          {/* Logo */}
          <img src="/logo.png" alt="Science of Dogs Logo" className="h-10 w-10 mr-2 rounded-full md:h-12 md:w-12" />
          <h1 className="text-2xl font-extrabold md:text-3xl">Science of Dogs</h1>
        </a>
        {/* Responsive Navigation */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-0`}
        >
          <a href="#about" className="block md:inline hover:underline">
            About Us
          </a>
          <a href="#philosophy" className="block md:inline hover:underline">
            Philosophy
          </a>
          <a href="#research" className="block md:inline hover:underline">
            Research
          </a>
        </nav>
      </header>  
         
      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {/* Section 1: Hero and Booking with Borders */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center bg-cover px-5 py-24 md:h-screen md:px-8 md:py-0 bordered-section"
          style={{ backgroundImage: "url('/background-hero-booking.png')", backgroundPosition: "center 36%" }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-wide mb-4 md:text-5xl">
              Welcome to <span className="text-red-200">Science of Dogs</span>
            </h1>
            <p className="text-base text-red-300 max-w-2xl mx-auto md:text-lg">
            Canine Neuroscience meets mapping & rewiring of neural pathways for dogs and their humans
            </p>
          </div>
        </section>

        {/* Section 2: About Us with Borders */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-5 py-24 md:h-screen md:px-8 md:py-0 bordered-section"
          style={{ backgroundImage: "url('/background-about.png')", backgroundPosition: "center 36%" }}
        >
          <h2 className="text-3xl font-bold text-center mb-5 md:text-4xl md:mb-6">About Us</h2>
          <p className="text-center text-base leading-relaxed text-red-300 max-w-3xl mx-auto md:text-lg">
            Welcome back to Science of Dogs! This innovative program, led by Kim, is at the cutting edge of dog education, combining neuroscientific research and psychology to provide an unparalleled experience. You'll have access to the best resources and hands-on teaching, ensuring a humane and transformative experience for both you and your canine companion.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.instagram.com/scienceofdogs?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-200"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </section>
    
        {/* Section 3: Philosophy with Borders */}
        <section
          id="philosophy"
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-5 py-24 md:h-screen md:px-8 md:py-0 bordered-section"
          style={{ backgroundImage: "url('/background-philosophy.png')", backgroundPosition: "center 36%" }}
        >
          <h2 className="text-3xl font-bold text-center mb-5 md:text-4xl md:mb-6">Philosophy</h2>
          <p className="text-center text-xl font-bold text-red-200 md:text-2xl">We extract the pain so they can blossom.</p>
          <p className="mt-5 max-w-3xl text-center text-base leading-relaxed text-red-300 md:text-lg">
            The A-B-C method walks a dog through a planned sequence of real-life scenarios with its own family, one controlled step at a time. Each step introduces a specific situation, so Kim can see exactly how the dog responds before moving to the next. This steady, repeatable process builds trust gradually instead of overwhelming the dog all at once.
          </p>
          <div className="mt-10 flex w-full max-w-4xl flex-col items-center gap-4 md:flex-row md:items-stretch md:justify-center">
            <article className="flex w-full max-w-xs flex-col items-center border-2 border-black bg-white p-5 text-center text-black md:w-56">
              <p className="text-xs font-bold uppercase tracking-wide">Step A</p>
              <img src="/A-Person calmly standing near a seated dog.png" alt="A person calmly standing near a seated dog" className="my-3 h-16 w-16 object-contain" />
              <p className="text-sm font-semibold leading-snug">A family member stays near the dog</p>
            </article>
            <p className="text-3xl font-bold text-red-500 md:self-center" aria-hidden="true">&rarr;</p>
            <article className="flex w-full max-w-xs flex-col items-center border-2 border-black bg-white p-5 text-center text-black md:w-56">
              <p className="text-xs font-bold uppercase tracking-wide">Step B</p>
              <img src="/B-Hand repeatedly attaching a leash clip to the collar.png" alt="Hand repeatedly attaching a leash clip to the collar" className="my-3 h-16 w-16 object-contain" />
              <p className="text-sm font-semibold leading-snug">A family member repeats a specific task with the dog</p>
            </article>
            <p className="text-3xl font-bold text-red-500 md:self-center" aria-hidden="true">&rarr;</p>
            <article className="flex w-full max-w-xs flex-col items-center border-2 border-black bg-white p-5 text-center text-black md:w-56">
              <p className="text-xs font-bold uppercase tracking-wide">Step C</p>
              <img src="/C-Three people observing a calm dog.png" alt="Three people observing a calm dog" className="my-3 h-16 w-16 object-contain" />
              <p className="text-sm font-semibold leading-snug">The dog is observed across the full combined scenario</p>
            </article>
          </div>
        </section>

        {/* Section 4: Research */}
        <section
          id="research"
          className="min-h-screen flex flex-col items-center justify-center bg-black px-5 py-24 md:px-8"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-5 md:text-4xl md:mb-6">Research</h2>
            <p className="text-base leading-relaxed text-red-300 md:text-lg">
              Science-informed resources for understanding behavior, learning, and wellbeing.
            </p>
            <img
              src="/Ilustration-research.png"
              alt="Canine neural pathway from sensory input through the thalamus and amygdala to the prefrontal cortex"
              className="mx-auto mt-8 w-full max-w-3xl"
            />
            <div className="mt-10 overflow-x-auto pb-4">
              <div className="flex min-w-max gap-6 text-left">
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">01</p>
                  <h3 className="mt-2 text-xl font-bold">Cortisol</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">A noninvasive measure commonly used in studies of canine stress.</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=dog+salivary+cortisol+stress" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Explore studies</a>
                </article>
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">02</p>
                  <h3 className="mt-2 text-xl font-bold">Aversive Training</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">Comparative welfare research examines the effects of training methods.</p>
                  <a href="https://doi.org/10.1371/journal.pone.0225023" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Read the study</a>
                </article>
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">03</p>
                  <h3 className="mt-2 text-xl font-bold">Aggression and Reactivity</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">Behavior science considers context, communication, and individual history.</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=dog+aggression+reactivity+behavior" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Explore studies</a>
                </article>
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">04</p>
                  <h3 className="mt-2 text-xl font-bold">Normal Dog Behavior</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">Understanding normal canine behavior helps frame support and training.</p>
                  <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Read AVSAB resources</a>
                </article>
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">05</p>
                  <h3 className="mt-2 text-xl font-bold">Longevity</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">Long-term research explores the factors that shape healthy canine aging.</p>
                  <a href="https://dogagingproject.org/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Visit the Dog Aging Project</a>
                </article>
                <article className="w-56 border-t-2 border-red-500 pt-4">
                  <p className="text-sm font-bold text-red-200">06</p>
                  <h3 className="mt-2 text-xl font-bold">Air Quality</h3>
                  <p className="mt-2 text-base leading-relaxed text-red-300">Environmental-health research considers how air pollution affects companion animals.</p>
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=dog+air+pollution+health" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-red-200 hover:underline">Explore studies</a>
                </article>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-red-300">Sources are provided for further reading and should be reviewed before any clinical or training decision.</p>
          </div>
          {/* Do not use the AKC logo without written permission or verified brand-use terms. */}
          {/* Future Case Studies application: https://docs.google.com/forms/d/e/1FAIpQLSfH9e3cd6P6PmE4kmPADj8AuLyEtWH3vmYQ7tJGrA6P-CSiwQ/viewform */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black-translucent backdrop-blur-md text-center py-8">
        <p className="text-lg font-semibold">
          © 2027 Science of Dogs<sup className="text-xs">TM</sup>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
