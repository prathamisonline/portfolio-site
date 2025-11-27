import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-4">WORK</h1>
        <p className="text-neutral-400 text-xl max-w-2xl mb-16">
          A selection of projects that showcase my passion for building robust and scalable web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 mb-6">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
            </div>
            
            <div className="flex flex-col space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Work;
