
import React from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onNavigate, currentPath }) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 glass-panel" role="navigation" aria-label="Main Navigation">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
        <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">diamond</span>
        <span className="text-lg font-bold tracking-tighter dark:text-white light:text-neutral-900">LEXAURA P</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          <button 
            onClick={() => onNavigate('drops')} 
            className={`hover:text-primary focus-visible:text-primary transition-colors py-2 ${currentPath === 'drops' ? 'text-primary' : ''}`}
          >
            Drops
          </button>
          <button 
            onClick={() => onNavigate('lab')} 
            className={`hover:text-primary focus-visible:text-primary transition-colors py-2 ${currentPath === 'lab' ? 'text-primary' : ''}`}
          >
            Lab
          </button>
          <button 
            onClick={() => onNavigate('archives')} 
            className={`hover:text-primary focus-visible:text-primary transition-colors py-2 ${currentPath === 'archives' ? 'text-primary' : ''}`}
          >
            Archives
          </button>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onToggleTheme}
            className="material-symbols-outlined hover:text-primary focus-visible:text-primary transition-colors p-2 text-neutral-500 dark:text-neutral-400"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </button>
          <button className="material-symbols-outlined hover:text-primary focus-visible:text-primary transition-colors p-2 text-neutral-500 dark:text-neutral-400" aria-label="Search Products">search</button>
          <button 
            onClick={() => onNavigate('cart')}
            className="material-symbols-outlined hover:text-primary focus-visible:text-primary transition-colors p-2 text-neutral-500 dark:text-neutral-400" 
            aria-label="View Shopping Bag"
          >
            shopping_bag
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
