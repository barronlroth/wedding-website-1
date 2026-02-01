import React from 'react';
import Section from './Section';
import HowWeMet from './HowWeMet';

const OurStory: React.FC = () => {
  return (
    <Section id="story" title="Our Story" subtitle="How we met">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-6 text-stone-600 leading-relaxed font-light text-lg">
        <p>
          It started on a snowy night in Toronto — a chance meeting that changed everything.
          Walk through our story in 8-bit and see if you can make it to Nina before the raccoons get you.
        </p>
      </div>

      <HowWeMet />

      <div className="max-w-2xl mx-auto text-center mt-14 space-y-6 text-stone-600 leading-relaxed font-light text-lg">
        <p>
          From that first conversation to countless adventures across cities, we knew
          this was something special. We can't wait to celebrate the next chapter with you.
        </p>
        <div className="pt-4 font-serif text-2xl text-stone-800 italic">
          — B & N
        </div>
      </div>
    </Section>
  );
};

export default OurStory;
