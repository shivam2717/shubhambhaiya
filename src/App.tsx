import React from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import QuotesCarousel from './components/QuotesCarousel';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="circuit-pattern"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <CountdownTimer />
        <EventDetails />
        <QuotesCarousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;