
import React, { useState } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    alert(`Thanks for signing up! We've added ${email} to the LexAura P inner circle.`);
    setEmail('');
  };

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-transparent to-neutral-dark/80 dark:to-neutral-dark/80 light:to-neutral-200/50" aria-labelledby="waitlist-heading">
      <div className="max-w-xl mx-auto text-center">
        <h3 id="waitlist-heading" className="text-3xl font-bold mb-4 uppercase tracking-tight dark:text-white light:text-neutral-900">Join the Inner Circle</h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-base mb-10 max-w-md mx-auto">
          Be the first to receive the private access link before the LexAura P public drop.
        </p>
        <form onSubmit={handleJoin} className="flex flex-col md:flex-row gap-3">
          <label htmlFor="waitlist-email" className="sr-only">Email Address</label>
          <input 
            id="waitlist-email"
            className="flex-grow bg-neutral-dark dark:bg-neutral-dark light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 px-6 text-white light:text-neutral-900 placeholder:text-neutral-600 outline-none transition-all" 
            placeholder="Enter your email" 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
          />
          <button 
            type="submit"
            className="bg-primary hover:bg-primary/90 focus:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg transition-all active:scale-95 uppercase tracking-widest text-sm shadow-lg shadow-primary/20"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
