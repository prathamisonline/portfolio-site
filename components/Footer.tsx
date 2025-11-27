import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const nameLetters = "PRATHAM".split("");
  
  // Neon palette for the glow effect
  const glowColors = [
    "#f97316", // Orange
    "#3b82f6", // Blue
    "#10b981", // Emerald
    "#8b5cf6", // Violet
    "#ec4899", // Pink
    "#f59e0b", // Amber
    "#06b6d4", // Cyan
  ];

  return (
    <footer className="relative bg-brand-dark pt-20 pb-10 overflow-hidden border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
                <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
                <ul className="space-y-4">
                    {SOCIAL_LINKS.map((link) => (
                        <li key={link.name}>
                            <a 
                              href={link.url} 
                              target={link.name === 'Email' ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className="text-neutral-500 hover:text-brand-orange transition-colors text-sm font-medium flex items-center group"
                            >
                                {link.name}
                                <svg className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
                {/* Spacer or additional nav columns if needed */}
            </div>

            <div className="col-span-1 md:col-span-1 text-left md:text-right">
                <h4 className="text-white font-bold mb-6 text-lg">Site</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                    Built with React 18, Tailwind CSS, <br/> and Framer Motion.
                    <br /><br />
                    © {new Date().getFullYear()} Pratham Srivastava.
                </p>
            </div>
        </div>

        {/* Massive Name Typography - Interactive Letters */}
        <div className="pt-10 flex justify-center overflow-hidden select-none">
            <div className="flex font-display font-bold text-[15vw] leading-none tracking-tighter whitespace-nowrap">
                {nameLetters.map((letter, index) => (
                    <motion.span
                        key={index}
                        className="text-neutral-800/50 cursor-default relative"
                        whileHover={{ 
                            color: glowColors[index % glowColors.length],
                            textShadow: `0 0 30px ${glowColors[index % glowColors.length]}`,
                            opacity: 1,
                            y: -10
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;