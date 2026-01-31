import React from 'react';
import Section from './Section';

const OurStory: React.FC = () => {
  return (
    <Section id="story" title="Our Story" subtitle="How it started">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6 text-stone-600 leading-relaxed font-light text-lg">
          <p>
            It started with a chance encounter at a coffee shop in Wynwood. Barron was working on his laptop, 
            Nina was waiting for a friend who was running late. A shared comment about the humidity turned into 
            a conversation that lasted three hours.
          </p>
          <p>
            Five years, three apartments, and countless flights between Miami and New York later, 
            Barron proposed at sunrise on the beach where they had their first proper date.
          </p>
          <p>
            We are so incredibly excited to share our favorite city with our favorite people. Miami is where 
            our story began, and we can't wait to start our next chapter here with you.
          </p>
          <div className="pt-4 font-serif text-2xl text-stone-800 italic">
            - B & N
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-sage-200 transform translate-x-4 translate-y-4 -z-10 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2670&auto=format&fit=crop" 
            alt="Barron and Nina" 
            className="w-full h-[500px] object-cover rounded-sm shadow-md filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </Section>
  );
};

export default OurStory;