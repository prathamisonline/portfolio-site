import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-display font-bold text-6xl text-white mb-4">POSTS</h1>
        <p className="text-neutral-500">Thoughts on development, design, and tech.</p>
      </motion.div>

      <div className="space-y-6">
        {POSTS.map((post, index) => (
            <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/80 transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2 md:mb-0">
                        {post.category}
                    </span>
                    <span className="text-neutral-500 text-sm tabular-nums">
                        {post.date} • {post.readTime}
                    </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {post.title}
                </h2>
                
                <p className="text-neutral-400 leading-relaxed mb-6">
                    {post.excerpt}
                </p>

                <NavLink to={`/posts/${post.id}`} className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider">
                    Read Article
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </NavLink>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;