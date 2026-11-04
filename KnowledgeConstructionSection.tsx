import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const factors = [
  {
    icon: '🧬',
    title: 'Maturation',
    subtitle: 'Growth due to hereditary factors',
    description: 'Defines our potential for cognitive development. Biological growth sets the foundation — the brain must be physically ready for each new level of thinking.',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
    accent: 'text-violet-300',
  },
  {
    icon: '🔬',
    title: 'Active Experiences',
    subtitle: 'Manipulation of objects or mental images',
    description: 'Children refine thinking and understanding through physical and mental interaction with their environment. Every action is an experiment.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    accent: 'text-blue-300',
  },
  {
    icon: '🤝',
    title: 'Social Interaction',
    subtitle: 'Sharing ideas and acquiring new understanding',
    description: 'Through dialogue, collaboration, and exposure to different perspectives, children expand their cognitive frameworks beyond solitary experience.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    accent: 'text-emerald-300',
  },
  {
    icon: '⚖️',
    title: 'Equilibration',
    subtitle: 'Making sense of our experiences',
    description: 'The process by which we reconcile how we expect the world to act and how it actually functions. This self-regulating mechanism drives all cognitive development.',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/30',
    accent: 'text-pink-300',
  },
];

export default function KnowledgeConstructionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="knowledge" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">The Foundation</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">How We Construct Knowledge</h2>
          <p className="text-white/40 max-w-3xl mx-auto text-lg">
            Piaget's model explains how we build understanding through four interrelated factors. 
            Cognitive development is not driven by any single force — it emerges from their dynamic interplay.
          </p>
        </motion.div>

        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 md:p-8 mb-12 text-center"
        >
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            <span className="text-indigo-300 font-medium">Development Psychology</span> terms refer to changes in behavior that occur over time, where 
            <span className="text-indigo-300 font-medium"> age is a critical factor</span>. Cognitivists focus on changes in behavior as a function of age — 
            encompassing <span className="text-indigo-300 font-medium">learning, thinking, and reasoning</span>.
          </p>
        </motion.div>

        {/* Four factors grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl border ${factor.borderColor} p-8 group transition-all duration-500`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${factor.color} opacity-50`} />
              
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{factor.icon}</span>
                <h3 className={`text-xl font-bold mb-1 ${factor.accent}`}>
                  {factor.title}
                </h3>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                  {factor.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </div>

              {/* Decorative number */}
              <div className="absolute top-4 right-6 text-6xl font-bold text-white/5">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-white/40 text-sm">All four factors work together through</span>
            <span className="gradient-text font-medium text-sm">Equilibration</span>
            <span className="text-white/40 text-sm">— the master process</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
