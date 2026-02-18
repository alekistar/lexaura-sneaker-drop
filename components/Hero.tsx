
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center pt-12 pb-20 px-6 text-center overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full hero-glow -z-10 opacity-60" aria-hidden="true"></div>
      
      <div className="animate-fade-in-up">
        <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">Limited Edition Drop</h2>
        <h1 id="hero-title" className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 italic dark:text-white light:text-neutral-900">LEXAURA P</h1>
      </div>

      <div className="relative w-full max-w-lg mb-12 hover:scale-105 transition-transform duration-500 cursor-pointer group">
        <img 
          alt="Luxury LexAura P black sneaker profile" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(173,43,238,0.3)] group-hover:drop-shadow-[0_30px_80px_rgba(173,43,238,0.5)] transition-all duration-500"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV0qhbKZ5-3PpGlXmkgANxGfhH0h6nbRUi_5pFlNM62IS_R3LBDxFsUck_XijaDwD9s73kfA6FzEhH2kPoYfLbwN2xuswX9fFv0zVaaDe66Wo0f_q9qV2VvdAa-tL5Hk5ftq-czwzC0opl59vST7z9rM47P7RhasCKNsqIo2NfCBmntTgD1tEM9xali5tofxdtC-e6zA47gMnH2LGJb_7dyfI2O90NcHRM3Ea7IUB8P4at8NR5HFIz5nkIKYnVFERphNKMU0nxSiCH" 
          width="512"
          height="512"
          loading="eager"
        />
      </div>

      <p className="max-w-md text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
        The apex of luxury streetwear. Crafted with aerospace-grade carbon fiber and reflective precision thread. Designed for the LexAura P pioneer.
      </p>

      {/* Countdown Timer */}
      <div className="flex gap-4 mb-12" role="timer" aria-live="polite" aria-label={`Drop countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}>
        <TimerBlock value={timeLeft.days} label="Days" />
        <TimerBlock value={timeLeft.hours} label="Hours" />
        <TimerBlock value={timeLeft.minutes} label="Mins" />
        <TimerBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </section>
  );
};

const TimerBlock: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center bg-neutral-dark dark:bg-neutral-dark light:bg-white border border-primary/20 rounded-lg p-4 min-w-[75px] md:min-w-[90px] shadow-sm">
    <span className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 mt-1">{label}</span>
  </div>
);

export default Hero;
