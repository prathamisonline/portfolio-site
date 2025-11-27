import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { POSTS } from '../constants';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/posts');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-3xl min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <NavLink to="/posts" className="inline-flex items-center text-sm text-neutral-500 hover:text-brand-orange transition-colors mb-8 group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Posts
        </NavLink>

        <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full">
                {post.category}
            </span>
            <span className="text-neutral-500 text-sm">
                {post.date} • {post.readTime}
            </span>
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-xl prose-invert prose-neutral max-w-none">
            {post.content?.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="text-2xl font-bold text-white mt-12 mb-6">{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('- ')) {
                     return (
                        <ul key={idx} className="list-disc pl-5 space-y-2 mb-6 text-neutral-300">
                             {paragraph.split('\n').map((item, i) => (
                                 <li key={i}>{item.replace('- ', '')}</li>
                             ))}
                        </ul>
                     )
                }
                return <p key={idx} className="text-neutral-300 leading-relaxed mb-6">{paragraph}</p>
            })}
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800">
            <h3 className="text-white font-bold mb-4">Share this post</h3>
            <div className="flex gap-4">
                 <button className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-400 hover:text-white hover:border-brand-orange transition-colors">
                    Twitter
                 </button>
                 <button className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-400 hover:text-white hover:border-brand-orange transition-colors">
                    LinkedIn
                 </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostDetail;