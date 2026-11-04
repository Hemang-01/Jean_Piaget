import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MentalDevelopmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="paths" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Two Paths Forward</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Mental Development</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Piaget identified two distinct paths through which cognitive development progresses — 
            each representing a different way the mind grows and evolves.
          </p>
        </motion.div>

        {/* Two paths */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Substitution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-indigo-900/20" />
            <div className="absolute inset-0 border border-violet-500/20 rounded-3xl" />
            
            <div className="relative p-8 md:p-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-6"
              >
                <span className="text-3xl">🔄</span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Substitution
              </h3>
              <p className="text-violet-300/70 text-sm uppercase tracking-wider mb-4">
                Replace & Upgrade
              </p>
              
              <p className="text-white/60 leading-relaxed mb-6">
                A process whereby the child <span className="text-violet-300 font-medium">replaces a less mature idea with a more mature one</span>. 
                The old understanding is discarded entirely in favor of a more sophisticated version.
              </p>

              {/* Visual process */}
              <div className="flex items-center gap-3">
                <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-white/30 text-xs mb-1">Before</p>
                  <p className="text-white/70 text-sm">Less mature idea</p>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-violet-400 text-xl"
                >
                  →
                </motion.div>
                <div className="flex-1 p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-center">
                  <p className="text-violet-300/70 text-xs mb-1">After</p>
                  <p className="text-violet-200 text-sm">More mature idea</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-white/40 text-sm italic">
                  "The old way of thinking is replaced — like upgrading software on a computer."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/20" />
            <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl" />
            
            <div className="relative p-8 md:p-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6"
              >
                <span className="text-3xl">🧩</span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Integration
              </h3>
              <p className="text-emerald-300/70 text-sm uppercase tracking-wider mb-4">
                Combine & Synthesize
              </p>
              
              <p className="text-white/60 leading-relaxed mb-6">
                A process whereby <span className="text-emerald-300 font-medium">less mature ideas are brought together</span> to arrive at 
                more complex and abstract concepts. Multiple existing ideas merge to form something greater.
              </p>

              {/* Visual process */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                    <p className="text-white/60 text-xs">Idea A</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                    <p className="text-white/60 text-xs">Idea B</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-emerald-400 text-xl"
                >
                  +
                </motion.div>
                <div className="flex-1 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <p className="text-emerald-300/70 text-xs mb-1">Result</p>
                  <p className="text-emerald-200 text-sm">Complex concept</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-white/40 text-sm italic">
                  "Ideas combine like puzzle pieces to reveal a bigger picture."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center glass-card p-6"
        >
          <p className="text-white/50 text-sm">
            Both paths work together — sometimes we <span className="text-violet-300">replace</span> old ideas, 
            and sometimes we <span className="text-emerald-300">combine</span> them to build richer understanding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
