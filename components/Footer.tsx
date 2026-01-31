import React from 'react';
import { COUPLE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 text-center">
      <h2 className="font-serif text-3xl text-stone-200 mb-6">{COUPLE_NAME}</h2>
      <p className="text-xs tracking-[0.2em] uppercase mb-8">October 3, 2026 • Miami, FL</p>
      <div className="text-xs text-stone-600">
        &copy; 2026. Made with love.
      </div>
    </footer>
  );
};

export default Footer;