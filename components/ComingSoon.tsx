
import React, { useState, useEffect } from 'react';

interface ComingSoonProps {
  path: string;
  onRedirect: () => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ path, onRedirect }) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) {
      onRedirect();
      return;
    }
    const timer = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds, onRedirect]);

  const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center animate-fade-in">
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
        <div className="relative bg-neutral-dark rounded-full w-full h-full flex items-center justify-center border border-primary/30">
          <span className="material-symbols-outlined text-primary text-4xl">construction</span>
        </div>
      </div>
      
      <h2 className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Under Construction</h2>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 italic dark:text-white light:text-neutral-900">
        {formattedPath} Coming Soon
      </h1>
      <p className="max-w-md text-neutral-500 text-lg mb-10 leading-relaxed">
        We are currently refining the {formattedPath} experience for LexAura P. 
        Something extraordinary is being crafted in our lab.
      </p>
      
      <div className="flex flex-col items-center gap-4">
        <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
          Redirecting to main page in <span className="text-primary tabular-nums">{seconds}</span> seconds
        </div>
        <button 
          onClick={onRedirect}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all active:scale-95 uppercase tracking-widest text-xs"
        >
          Return Now
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
