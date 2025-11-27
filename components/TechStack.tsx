import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-center text-white mb-20 uppercase tracking-tighter leading-none relative z-20"
      >
        One Universe. <br className="md:hidden" /> Infinite Possibilities.
      </motion.h2>

      <div className="relative flex items-center justify-center py-10 md:py-20 mb-12 w-full max-w-5xl">
        {/* Breathing Animation Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-neutral-800/50 rounded-full"
                    initial={{ width: '150px', height: '150px', opacity: 0.8 }}
                    animate={{ 
                        width: ['250px', '450px', '700px'], 
                        height: ['250px', '450px', '700px'], 
                        opacity: [0.5, 0.2, 0] 
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: "easeOut"
                    }}
                    style={{ zIndex: 0 }}
                />
             ))}
             {/* Ambient Glow */}
             <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full z-0"
             />
        </div>

        {/* Icons Container */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-10 relative z-10">
            {/* VS Code */}
            <IconWrapper label="VS Code">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 text-[#007ACC]">
                    <path fill="currentColor" d="M23.5 6.7c-.4-.3-1-.5-1.6-.4l-6.9 5.2L4.3 1.5c-.4-.4-.9-.4-1.3-.1L.2 3.6C-.1 3.8-.1 4.2.2 4.4L5.5 10 .2 15.6c-.3.3-.2.7.1.9l2.8 2.2c.4.3.9.3 1.3-.1l10.7-10 6.9 5.2c.6.4 1.3.3 1.6-.1l.9-1.3c.4-.5.4-1.2 0-1.7l-1-.9zM16 17l-3.3-2V9l3.3-2v10z"/>
                    <path fill="currentColor" d="M16 17l-3.3-2V9l3.3-2v10z" opacity="0.2"/>
                </svg>
            </IconWrapper>
            
            {/* Node.js */}
            <IconWrapper label="Node.js">
                <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-10 md:h-10 text-[#339933]" fill="currentColor">
                    <path d="M16 0L2.8 7.5v15L16 30l13.2-7.5v-15L16 0zm10 20.8l-10 5.7-10-5.7V9.2l10-5.7 10 5.7v11.6z"/>
                    <path d="M16 23l-7-4v-7l7-4 7 4v7l-7 4z"/>
                </svg>
            </IconWrapper>
            
            {/* TypeScript */}
            <IconWrapper label="TypeScript">
                <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-10 md:h-10">
                    <rect width="128" height="128" rx="16" fill="#3178C6"/>
                    <path fill="#FFF" d="M72.3 89.4c0-2.3.5-3.8 2.1-5.1 2.3-1.8 5.7-2.3 9.4-2.5l5.5-.3c2.9-.2 4.1-.7 4.1-2.1 0-1.2-.5-1.9-2.7-1.9-1.9 0-3.9.5-6.1 1.6l-2.6-4.5c2.7-1.6 6.1-2.4 9.9-2.4 4.5 0 7.8 1.1 9.7 3.2 1.9 2.1 2.8 5.2 2.8 9.2v14.9h-6.2v-3.2c-2.3 2.5-5.3 3.8-8.9 3.8-3.4 0-6.1-1-7.9-2.9-1.8-1.9-2.7-4.4-2.7-7.4zm7.3.3c0 2 .6 3.5 1.7 4.6 1.1 1.1 2.8 1.6 5 1.6 2.6 0 5-1 7.1-3.1V86.5c-1.3.3-3 .5-5.1.7-2.1.1-3.6.5-4.6 1.4-.9.8-1.4 1.9-1.4 3.3zM46.7 99.6v-5.2H32.4v-31h-6.2v31H12v5.2h34.7z"/>
                </svg>
            </IconWrapper>

            {/* Center Main Icon (JavaScript) */}
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-neutral-900 border border-neutral-700/50 flex items-center justify-center shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] relative z-20 group"
            >
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F7DF1E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="flex flex-col items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20 text-[#F7DF1E]" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M3 3h18v18H3V3z" fill="#000" opacity="0"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <rect width="24" height="24" fill="transparent"/>
                        <path d="M5 3h14v18H5V3z" fill="transparent"/>
                    </svg>
                    <span className="font-display font-bold text-5xl md:text-7xl text-[#F7DF1E] z-10">JS</span>
                 </div>
            </motion.div>

            {/* React */}
            <IconWrapper label="React">
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 md:w-10 md:h-10 text-[#61DAFB]">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                </svg>
            </IconWrapper>
            
            {/* Next.js */}
            <IconWrapper label="Next.js">
                <svg viewBox="0 0 180 180" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M120.012 119.525L60.0312 42H50V138H60.0312V62.475L120.012 140V140C123.345 137.769 126.521 135.32 129.52 132.675V42H120.012V119.525ZM90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM90 16.5625C130.554 16.5625 163.438 49.4462 163.438 90C163.438 130.554 130.554 163.438 90 163.438C49.4462 163.438 16.5625 130.554 16.5625 90C16.5625 49.4462 49.4462 16.5625 90 16.5625Z" />
                </svg>
            </IconWrapper>
            
            {/* N8N */}
            <IconWrapper label="n8n">
                <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-[#EA4B71]" fill="currentColor">
                    <path d="M12.72 2.454l7.665 4.417a2.536 2.536 0 0 1 1.268 2.196v8.835a2.535 2.535 0 0 1-1.268 2.196l-7.665 4.417a2.536 2.536 0 0 1-2.536 0L2.519 20.1A2.536 2.536 0 0 1 1.25 17.902V9.067a2.535 2.535 0 0 1 1.269-2.196l7.665-4.417a2.536 2.536 0 0 1 2.536 0zm0 3.098L6.876 8.918 12.72 12.29l5.845-3.371-5.845-3.367zm0 12.896l5.845-3.367v-5.49L12.72 12.86l-5.844-3.37v5.49l5.844 3.37z" />
                </svg>
            </IconWrapper>
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed relative z-20"
      >
        With over 4 years of experience building for the web. JavaScript (or TypeScript)
        and React remains my preferred tools for web applications. The adaptability and
        extensive ecosystem empower me to deliver rapid and scalable solutions with ease.
      </motion.p>
    </section>
  );
};

const IconWrapper: React.FC<{ children: React.ReactNode, label: string }> = ({ children, label }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="group flex flex-col items-center gap-2"
    >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-all duration-300 shadow-lg hover:border-brand-orange/30 group-hover:bg-neutral-800">
            {children}
        </div>
        <span className="text-xs text-neutral-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">
            {label}
        </span>
    </motion.div>
);

export default TechStack;