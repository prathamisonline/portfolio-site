import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto min-h-screen">
      <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8">
        <div>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-2">MEMORY LANE</h1>
            <p className="text-neutral-500 uppercase tracking-widest text-sm">Snapshots from my journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item, index) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative aspect-square group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >
                <img 
                    src={item.src} 
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold">{item.location}</p>
                    <p className="text-neutral-400 text-sm">{item.alt}</p>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
