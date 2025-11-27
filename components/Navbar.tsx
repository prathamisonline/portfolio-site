import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Posts', path: '/posts' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="flex items-center backdrop-blur-md bg-black/50 border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <NavLink to="/" className="mr-8 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-brand-orange transition-colors">
            <path d="M13 3L7 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 11L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 13L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </NavLink>
        
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-brand-orange ${isActive ? 'text-white' : 'text-neutral-400'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
