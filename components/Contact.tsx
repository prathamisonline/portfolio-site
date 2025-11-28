import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 container mx-auto max-w-6xl min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-8 leading-tight">
            LET'S <span className="text-neutral-700">BUILD</span><br />
            SOMETHING <span className="text-brand-orange">GREAT</span>
          </h1>
          
          <p className="text-neutral-400 text-xl mb-12 leading-relaxed">
            I'm always open to new opportunities, collaborations, and connections. 
            Feel free to reach out to ask a question, share your project idea, or just say hello.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Email Me</h3>
              <a 
                href="mailto:prathamsrivastavas@gmail.com"
                className="text-2xl md:text-3xl text-white hover:text-brand-orange transition-colors font-light border-b border-neutral-800 pb-1 inline-block hover:border-brand-orange"
              >
                prathamsrivastavas@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Socials</h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-neutral-900"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#393BB2_50%,#f97316_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 group-hover:bg-neutral-800 group-hover:text-white">
                            {social.name}
                        </span>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-900/30 p-8 md:p-10 rounded-3xl border border-neutral-800/50 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder-neutral-600"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder-neutral-600"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder-neutral-600 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#393BB2_50%,#f97316_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className={`relative flex w-full items-center justify-center rounded-xl px-4 py-4 font-bold uppercase tracking-wider transition-all duration-300 ${
                isSent ? 'bg-green-500 text-white' : 'bg-neutral-900 text-white group-hover:bg-neutral-800'
              }`}>
                {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;