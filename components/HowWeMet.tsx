import React from 'react';

const HowWeMet: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Game container with 16:9 aspect ratio */}
      <div className="w-full max-w-[960px] relative rounded-sm overflow-hidden shadow-lg border border-stone-200">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="/game/embed.html"
            title="How We Met — A Pixel Art Game"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allow="autoplay"
          />
        </div>
      </div>

      {/* Controls hint — desktop */}
      <p className="mt-4 text-stone-400 text-sm tracking-wide text-center font-light hidden md:block">
        <span className="inline-block px-2 py-0.5 bg-stone-100 rounded text-stone-500 text-xs font-mono mr-1">→</span> walk
        <span className="mx-2 text-stone-300">·</span>
        <span className="inline-block px-2 py-0.5 bg-stone-100 rounded text-stone-500 text-xs font-mono mr-1">↑</span> jump
        <span className="mx-2 text-stone-300">·</span>
        <span className="inline-block px-2 py-0.5 bg-stone-100 rounded text-stone-500 text-xs font-mono mr-1">space</span> throw snowballs
      </p>
      {/* Controls hint — mobile */}
      <p className="mt-4 text-stone-400 text-sm tracking-wide text-center font-light md:hidden">
        Use the on-screen controls · Rotate for best experience
      </p>
      <p className="mt-1 text-stone-400 text-xs tracking-wide text-center font-light">
        Tap the game to start
      </p>
    </div>
  );
};

export default HowWeMet;
