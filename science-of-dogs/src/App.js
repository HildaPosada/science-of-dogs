import React from 'react';
import './App.css';

const App = () => (
  <main className="launch-page">
    <header className="launch-identity" aria-label="Science of Dogs">
      <img src="/logo.png" alt="" className="launch-mark" />
      <span>Science of Dogs</span>
    </header>

    <section className="launch-message" aria-labelledby="launch-title">
      <p className="launch-kicker">Canine neuroscience · humane practice</p>
      <h1 id="launch-title">Coming Soon</h1>
      <p className="launch-copy">Mapping and rewiring neural pathways for dogs and the humans who care for them.</p>
    </section>

    <div className="launch-orbit" aria-hidden="true">
      <div
        className="launch-artwork"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0.04), rgba(5, 5, 5, 0.32)), url('${process.env.PUBLIC_URL}/background-hero-booking.png')`,
        }}
      />
    </div>

    <p className="launch-status">A new experience is taking shape</p>
  </main>
);

export default App;
