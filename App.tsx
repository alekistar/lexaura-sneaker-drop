
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Waitlist from './components/Waitlist';
import Features from './components/Features';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ComingSoon from './components/ComingSoon';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const navigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPath(path);
  };

  const renderContent = () => {
    if (currentPath === 'home') {
      return (
        <>
          <Hero />
          <Waitlist />
          <Features />
        </>
      );
    }
    return <ComingSoon path={currentPath} onRedirect={() => setCurrentPath('home')} />;
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} onNavigate={navigate} currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
      <MobileNav currentPath={currentPath} onNavigate={navigate} />
      <div className="h-24 md:hidden"></div>
    </div>
  );
};

export default App;
