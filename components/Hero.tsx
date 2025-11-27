import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { RESUME_LINK } from '../constants';

const QUOTES = [
  {
    id: 1,
    l1_first: "TURNING", l1_second: "IDEAS",
    l2_first: "INTO", l2_second: "REALITY"
  },
  {
    id: 2,
    l1_first: "WRITING", l1_second: "CODE",
    l2_first: "THAT", l2_second: "MATTERS"
  },
  {
    id: 3,
    l1_first: "SHAPING", l1_second: "VISIONS",
    l2_first: "INTO", l2_second: "PIXELS"
  }
];

const Hero: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 3500); // Change quote every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentQuote = QUOTES[currentQuoteIndex];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6">
      <div className="max-w-4xl w-full text-center space-y-8 z-10 flex flex-col items-center">
        
        {/* Fixed height container to prevent layout shifts during transitions */}
        <div className="h-[200px] md:h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentQuote.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-6xl md:text-9xl tracking-tighter text-white leading-[0.9] whitespace-nowrap"
            >
              {currentQuote.l1_first} <span className="text-neutral-600">{currentQuote.l1_second}</span>
              <br />
              {currentQuote.l2_first} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">{currentQuote.l2_second}</span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-neutral-400 text-lg md:text-xl font-light tracking-wide"
        >
          Select area. Build future.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
      >
        <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-none">
                Hi! I'm <span className="text-brand-orange">Pratham</span>,<br/>
                I love making things<br/>
                that help people do<br/>
                their thing.
            </h2>
        </div>
        
        <div className="space-y-6">
            <p className="text-neutral-400 leading-relaxed text-lg">
                I'm a senior frontend engineer and full stack developer based in India, specializing in building pixel-perfect, engaging, and accessible digital experiences.
            </p>
            <p className="text-neutral-400 leading-relaxed text-lg">
                As a passionate engineer and also a total nerd, I enjoy building software in the sweet spot where design, problem-solving, and engineering meet.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
                <NavLink to="/about" className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-brand-orange transition-colors group">
                    More About Me 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
                </NavLink>

                <a 
                  href={RESUME_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors text-sm"
                >
                  Download Resume
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;