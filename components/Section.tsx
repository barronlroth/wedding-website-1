import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  altBg?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", altBg = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${altBg ? 'bg-stone-100' : 'bg-stone-50'} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          {subtitle && (
            <span className="text-sage-600 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold block mb-3">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-sage-400 mx-auto mt-6"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;