import React from 'react';
import Section from './Section';
import { WITHJOY_RSVP_URL, WEDDING_DATE, VENUE_NAME } from '../constants';

const RSVP: React.FC = () => {

  return (
    <Section id="rsvp" title="RSVP" subtitle="Kindly reply by September 1st, 2026" altBg>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-stone-600 mb-8 text-lg leading-relaxed">
          We're using WithJoy to manage our guest list and RSVPs. Click below to let us know if you'll be joining us for our special day.
        </p>
        
        <div className="bg-white p-8 md:p-12 shadow-lg rounded-sm">
          <div className="mb-8">
            <svg className="w-12 h-12 mx-auto text-sage-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-serif text-2xl text-stone-800 mb-2">You're Invited</h3>
            <p className="text-stone-500 text-sm">
              {WEDDING_DATE} • {VENUE_NAME}, Miami
            </p>
          </div>

          <a 
            href={WITHJOY_RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-800 text-white py-4 px-12 uppercase tracking-[0.2em] text-xs hover:bg-sage-600 transition-colors duration-300"
          >
            RSVP Now
          </a>

          <p className="text-stone-400 text-xs mt-6">
            You'll be redirected to WithJoy to complete your RSVP
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/50 p-6 rounded-sm">
            <h4 className="font-medium text-stone-800 mb-2">Multiple Events</h4>
            <p className="text-stone-500 text-sm">RSVP for the wedding, rehearsal dinner, and welcome party all in one place.</p>
          </div>
          <div className="bg-white/50 p-6 rounded-sm">
            <h4 className="font-medium text-stone-800 mb-2">Dietary Preferences</h4>
            <p className="text-stone-500 text-sm">Let us know about any dietary restrictions or meal preferences.</p>
          </div>
          <div className="bg-white/50 p-6 rounded-sm">
            <h4 className="font-medium text-stone-800 mb-2">Plus Ones</h4>
            <p className="text-stone-500 text-sm">Easily add your plus one's information when you RSVP.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RSVP;
