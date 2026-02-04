import React, { useRef, useCallback } from 'react';

const HowWeMet: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const goFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Game container — 16:9 on desktop, 4:3 on mobile */}
      <div
        ref={containerRef}
        className="w-full max-w-[960px] relative rounded-sm overflow-hidden shadow-lg border border-stone-200"
      >
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="/game/embed.html"
            title="How We Met — A Pixel Art Game"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        {/* Fullscreen button — mobile only */}
        <button
          onClick={goFullscreen}
          className="md:hidden absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors"
        >
          ⛶ Fullscreen
        </button>
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
        Tap fullscreen for best experience
      </p>
    </div>
  );
};

export default HowWeMet;
