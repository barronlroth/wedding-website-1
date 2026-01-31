import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Details from './components/Details';
import Travel from './components/Travel';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

function App() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <OurStory />
      <Details />
      <Travel />
      <Registry />
      <RSVP />
      <Footer />
      <Concierge />
    </div>
  );
}

export default App;