import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "Intelligence is what you use when you don't know what to do: when neither innateness nor learning is enough.",
    context: 'On the nature of intelligence',
  },
  {
    text: "The principal goal of education is to create individuals who are capable of doing new things, not simply repeating what other generations have done.",
    context: 'On the purpose of education',
  },
  {
    text: "Every time you teach a child something, you keep them from inventing it themselves.",
    context: 'On discovery learning',
  },
  {
    text: "To express the same idea in still another way, I think that human knowledge is essentially constructive.",
    context: 'On constructivism',
  },
  {
    text: "What we see, we change. What we hear, we interpret. What we lack, we add. It is with these additions that we construct our 'reality.'",
    context: 'On perception and reality',
  },
  {
    text: "The child appears to be a humble philosopher, seeking to understand the world through their own reasoning.",
    context: 'On the child as thinker',
  },
];

export default function QuotesSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const nextQuote = () => setActiveQuote((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section id="quotes" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">In His Words</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">Timeless Wisdom</h2>
        </motion.div>

        {/* Quote display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card p-10 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 left-8 quote-mark">"</div>
            <div className="absolute bottom-4 right-8 quote-mark rotate-180">"</div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-3xl text-white/80 leading-relaxed font-light italic mb-8">
                  "{quotes[activeQuote].text}"
                </p>
                <p className="text-indigo-400/70 text-sm">
                  — {quotes[activeQuote].context}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
              <button
                onClick={prevQuote}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                ←
              </button>
              <div className="flex gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQuote(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeQuote === i ? 'w-6 bg-indigo-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextQuote}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
