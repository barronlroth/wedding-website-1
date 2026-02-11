import React from 'react';
import Section from './Section';
import { TIMELINE, VENUE_NAME, VENUE_ADDRESS } from '../constants';
import { Clock, MapPin, Wine, Music, Heart, Moon } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5" />,
  Martini: <Wine className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />
};

const Details: React.FC = () => {
  return (
    <Section id="details" title="The Celebration" subtitle="October 3, 2026" altBg>
      
      {/* Venue Info */}
      <div className="flex flex-col items-center mb-20 text-center">
        <MapPin className="w-8 h-8 text-sage-600 mb-4" />
        <h3 className="font-serif text-3xl text-stone-800 mb-2">{VENUE_NAME}</h3>
        <p className="text-stone-500 font-light mb-8 max-w-md">{VENUE_ADDRESS}</p>
        <img 
          src="/images/villa-woodbine.jpg"
          alt="Coconut Grove" 
          className="w-full max-w-4xl h-80 md:h-96 object-cover rounded-sm shadow-xl mb-8"
        />
        <div className="max-w-2xl text-stone-600 leading-relaxed">
          <p>
            Nestled in the heart of Coconut Grove, our venue is a private mansion designed in the 1930s. 
            With its Spanish-arch styling and lush tropical gardens, it sets the perfect scene for our 
            "Tropical Black Tie" affair.
          </p>
        </div>
      </div>

      {/* Timeline - HIDDEN (not deleted, can be restored) */}
      {false && (
      <div className="max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl text-center mb-12">Order of Events</h3>
        <div className="relative border-l border-sage-300 ml-4 md:ml-0 md:pl-0 space-y-12">
          {TIMELINE.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center group">
              
              {/* Dot */}
              <div className="absolute left-[-5px] top-1 md:left-1/2 md:transform md:-translate-x-1/2 w-2.5 h-2.5 bg-white border-2 border-sage-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Time (Left on Desktop) */}
              <div className="md:text-right mb-2 md:mb-0">
                <span className="inline-block px-3 py-1 bg-sage-50 text-sage-800 text-xs font-bold tracking-widest uppercase rounded-full">
                  {event.time}
                </span>
              </div>

              {/* Content (Right on Desktop) */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100">
                <div className="flex items-center gap-3 mb-2 text-sage-600">
                  {event.icon && iconMap[event.icon]}
                  <h4 className="font-serif text-xl text-stone-800">{event.title}</h4>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </Section>
  );
};

export default Details;