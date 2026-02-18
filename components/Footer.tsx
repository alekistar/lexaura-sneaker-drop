
import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="px-6 py-16 bg-neutral-dark dark:bg-neutral-dark light:bg-neutral-100 border-t border-neutral-800/50 dark:border-neutral-800/50 light:border-neutral-200" role="contentinfo">
      <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">diamond</span>
              <span className="text-xl font-bold tracking-tighter dark:text-white light:text-neutral-900">LEXAURA P</span>
            </div>
            <p className="text-neutral-500 text-xs max-w-xs text-center md:text-left">
              Redefining luxury through architectural precision and high-performance materials.
            </p>
          </div>
          
          <nav className="flex gap-10" aria-label="Footer links">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest dark:text-white light:text-neutral-900">Social</span>
              <div className="flex gap-6">
                <a className="material-symbols-outlined text-neutral-500 hover:text-primary transition-colors p-2" href="#" aria-label="Follow us on Instagram">brand_family</a>
                <a className="material-symbols-outlined text-neutral-500 hover:text-primary transition-colors p-2" href="#" aria-label="Share LexAura P">share</a>
                <a className="material-symbols-outlined text-neutral-500 hover:text-primary transition-colors p-2" href="#" aria-label="Join our Discord">forum</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest dark:text-white light:text-neutral-900">Legal</span>
              <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
                <button onClick={() => onNavigate('privacy')} className="hover:text-primary focus:text-primary transition-colors py-1">Privacy</button>
                <button onClick={() => onNavigate('terms')} className="hover:text-primary focus:text-primary transition-colors py-1">Terms</button>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="w-full h-px bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-300" aria-hidden="true"></div>
        
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4">
          <p className="text-[10px] text-neutral-700 font-medium tracking-widest uppercase">© 2024 LEXAURA P LABS. ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] text-neutral-700 font-medium tracking-widest uppercase" aria-label="Operating in London, Tokyo, and New York">London / Tokyo / New York</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
