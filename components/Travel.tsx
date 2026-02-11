import React from 'react';
import Section from './Section';
import { HOTELS } from '../constants';
import { Plane, Car } from 'lucide-react';

const Travel: React.FC = () => {
  return (
    <Section id="travel" title="Travel & Stay" subtitle="Getting to Miami">
      
      {/* Logistics */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
        <div className="bg-stone-50 p-8 rounded-lg text-center border border-stone-100">
          <Plane className="w-10 h-10 mx-auto text-sage-500 mb-4" />
          <h3 className="font-serif text-xl mb-3">Air Travel</h3>
          <p className="text-stone-600 text-sm">
            <strong className="text-stone-800">MIA</strong> (Miami Int'l) is 20 mins away.<br/>
            <strong className="text-stone-800">FLL</strong> (Fort Lauderdale) is 45-60 mins away.
          </p>
        </div>
        <div className="bg-stone-50 p-8 rounded-lg text-center border border-stone-100">
          <Car className="w-10 h-10 mx-auto text-sage-500 mb-4" />
          <h3 className="font-serif text-xl mb-3">Getting Around</h3>
          <p className="text-stone-600 text-sm">
            Coconut Grove is walkable, but we recommend Uber/Lyft to the venue. 
            Valet parking will be provided at the venue.
          </p>
        </div>
      </div>

      {/* Hotels */}
      <div className="text-center mb-12">
        <h3 className="font-serif text-2xl mb-6">Accommodations</h3>
        <p className="text-stone-500 mb-10 max-w-2xl mx-auto italic">
          Room block information coming soon.
        </p>
        
        {/* HIDDEN: Hotel cards - will restore once room blocks are confirmed
        <div className="grid md:grid-cols-3 gap-6">
          {HOTELS.map((hotel, index) => (
            <a 
              key={index}
              href={hotel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100"
            >
              <div className="text-sage-400 text-xs font-bold mb-4 tracking-widest">{hotel.priceRange}</div>
              <h4 className="font-serif text-xl text-stone-800 mb-3 group-hover:text-sage-700 transition-colors">
                {hotel.name}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {hotel.description}
              </p>
              <span className="text-xs uppercase tracking-widest border-b border-sage-300 pb-1 text-sage-700">Book Now</span>
            </a>
          ))}
        </div>
        */}
      </div>
    </Section>
  );
};

export default Travel;