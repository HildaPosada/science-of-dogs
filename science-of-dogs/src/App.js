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
              Rewiring dogs and their humans.
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
          <p className="text-center text-base leading-relaxed text-red-300 max-w-3xl mx-auto md:text-lg">
            The philosophy of positive dog training is deeply rooted in the science of reinforcement, balancing positive and negative reinforcement to help dogs navigate the complexities of a human-centered world. Positive reinforcement rewards desired behaviors with treats, praise, or play, encouraging repetition and fostering trust. Negative reinforcement, when used appropriately, gently removes discomfort or pressure when a dog responds correctly, reinforcing learning without fear. This approach emphasizes guiding dogs to distinguish between appropriate and inappropriate behaviors, ensuring they can adapt and thrive in human environments.
          </p>
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
