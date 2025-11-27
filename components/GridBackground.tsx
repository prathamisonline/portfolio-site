import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GridBackground: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate particles only on client to avoid hydration mismatch
  const particles = isMounted ? Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1, // 1px to 4px
    duration: Math.random() * 20 + 10, // 10s to 30s
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.1,
  })) : [];

  return (
    <div className={`min-h-screen w-full bg-[#050505] relative ${className}`}>
      {/* Grid Pattern - Custom CSS for fine control */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px),
                            linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          // Fade out grid at the bottom
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      />

      {/* Top Shadow / Gradient Overlay */}
      {/* This creates the dark fade from the top requested */}
      <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-0" />
      
      {/* Subtle Top Spotlight Glow */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Bubbles Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
            }}
            initial={{ top: '110%', opacity: 0 }}
            animate={{ 
              top: '-10%', 
              opacity: [0, p.opacity, 0] 
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;