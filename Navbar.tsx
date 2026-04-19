import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-ink/5">
      <div className="flex justify-between items-center px-6 md:px-10 py-6 max-w-[1920px] mx-auto">
        <Link to="/" className="font-serif text-lg md:text-2xl font-light tracking-tight hover:opacity-70 transition-opacity">
          Freeze Your Moments
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => {
            const isExternal = item.href.startsWith('http');
            const isAnchor = item.href.includes('#');
            
            if (isAnchor && !isExternal) {
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-brand-ink/60 hover:text-brand-ink transition-colors duration-300"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link 
                key={item.label}
                to={item.href}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-brand-ink' : 'text-brand-ink/60 hover:text-brand-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <motion.a 
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-secondary text-brand-bg px-6 md:px-8 py-3 rounded-full font-sans text-xs tracking-widest uppercase font-medium inline-block text-center"
        >
          Inquire
        </motion.a>
      </div>
    </nav>
  );
}
