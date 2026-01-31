import React from 'react';
import { WEDDING_DATE, LOCATION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-90">
          We are getting married
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 tracking-tight">
          Barron <span className="italic font-light text-sage-200 mx-2">&</span> Nina
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm md:text-lg tracking-widest font-light">
          <span>{WEDDING_DATE}</span>
          <span className="hidden md:inline w-1 h-1 bg-white rounded-full opacity-60"></span>
          <span>{LOCATION}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;