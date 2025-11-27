import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "Supabase", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vercel"] }
];

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-5xl min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-8">ABOUT ME</h1>
        
        <div className="prose prose-xl prose-invert text-neutral-400">
            <p className="text-2xl text-white font-light leading-relaxed mb-8">
                I'm Pratham, a creative developer with a knack for building immersive web experiences.
            </p>
            <p className="mb-6">
                I started my journey by editing simple HTML/CSS templates and quickly fell in love with the power of JavaScript. Fast forward to today, I've had the privilege of building software for a 
                <span className="text-brand-orange mx-1">fintech startup</span>, a 
                <span className="text-brand-orange mx-1">marketing agency</span>, and currently focused on 
                <span className="text-brand-orange mx-1">freelance innovation</span>.
            </p>
            <p>
                When I'm not pushing pixels, you'll find me exploring new coffee shops, hiking through the mountains, or tinkering with AI models to optimize my workflow.
            </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
            {/* Abstract Tech Visual */}
            <div className="aspect-square rounded-full border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-[80%] h-[80%] rounded-full border border-neutral-800 animate-spin-slow opacity-30"></div>
                <div className="absolute w-[60%] h-[60%] rounded-full border border-neutral-700 animate-spin-slow opacity-50" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                <div className="text-6xl font-bold text-white bg-neutral-900 rounded-full w-32 h-32 flex items-center justify-center z-10">
                    PS
                </div>
            </div>
        </div>

        <div className="space-y-12">
            {skills.map((skillGroup, idx) => (
                <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                >
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map(item => (
                            <span key={item} className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-lg border border-neutral-800 text-sm hover:border-brand-orange transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
