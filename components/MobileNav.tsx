
import React from 'react';

interface MobileNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentPath, onNavigate }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/5 dark:bg-background-dark/80 light:bg-white/80 backdrop-blur-2xl px-4 pb-8 pt-4" aria-label="Mobile Bottom Navigation">
      <NavItem icon="home" label="Home" active={currentPath === 'home'} onClick={() => onNavigate('home')} />
      <NavItem icon="search" label="Search" active={currentPath === 'search'} onClick={() => onNavigate('search')} />
      <NavItem icon="favorite" label="Wishlist" active={currentPath === 'wishlist'} onClick={() => onNavigate('wishlist')} />
      <NavItem icon="person" label="Profile" active={currentPath === 'profile'} onClick={() => onNavigate('profile')} />
    </nav>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    className={`flex flex-1 flex-col items-center justify-center gap-1 ${active ? 'text-primary' : 'text-neutral-500'} hover:text-primary transition-colors p-2`} 
    onClick={onClick}
    aria-label={label}
    aria-current={active ? 'page' : undefined}
  >
    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{icon}</span>
    <span className="sr-only">{label}</span>
  </button>
);

export default MobileNav;
