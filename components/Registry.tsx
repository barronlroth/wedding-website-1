import React from 'react';
import Section from './Section';
import { Gift } from 'lucide-react';

const Registry: React.FC = () => {
  return (
    <Section id="registry" title="Registry" subtitle="Your presence is present enough">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-stone-600 mb-12 leading-relaxed">
          The most important gift to us is having you share in our special day. 
          But if you wish to contribute in some other way, we would love a few pennies to put in our pot 
          for our honeymoon home after tying the knot!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-sage-100 transition-colors duration-300">
               <Gift className="w-8 h-8 text-stone-400 group-hover:text-sage-500" />
            </div>
            <span className="font-serif text-xl border-b border-transparent group-hover:border-sage-400 transition-all">Zola</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-sage-100 transition-colors duration-300">
               <Gift className="w-8 h-8 text-stone-400 group-hover:text-sage-500" />
            </div>
            <span className="font-serif text-xl border-b border-transparent group-hover:border-sage-400 transition-all">Crate & Barrel</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Registry;