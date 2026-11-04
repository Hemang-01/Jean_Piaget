import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const concepts = [
  {
    id: 'schemata',
    title: 'Schemata',
    subtitle: 'Our Existing Understandings',
    icon: '🗂️',
    color: 'from-amber-500 to-orange-500',
    description: 'Schemata refer to our existing understandings — the mental frameworks we use to organize and interpret the world. They are like cognitive blueprints that guide our thinking.',
    process: [
      'A child develops a schema (e.g., "all four-legged animals are dogs")',
      'The schema works well for familiar situations',
      'Eventually, the child\'s understandings are challenged by new experiences',
      'This creates disequilibrium — a state of cognitive imbalance',
      'The child must resolve this and return to equilibrium',
    ],
    visual: (
      <div className="relative w-full h-48 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-32 h-32 rounded-2xl bg-amber-500/10 border-2 border-amber-400/30 flex items-center justify-center"
        >
          <span className="text-4xl">🗂️</span>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-40 h-40 rounded-2xl border border-amber-400/10"
        />
      </div>
    ),
  },
  {
    id: 'assimilation',
    title: 'Assimilation',
    subtitle: 'Fitting New Evidence Into Existing Schema',
    icon: '📥',
    color: 'from-blue-500 to-cyan-500',
    description: 'The natural tendency to retain an existing schema and try to force conflicting evidence to fit into it. New evidence must conform to the existing schema — the world is interpreted through what we already know.',
    process: [
      'Child encounters new information or experience',
      'The existing schema is applied to interpret it',
      'New evidence is forced to fit the current understanding',
      'The schema remains unchanged',
      'Example: A child sees a cat and calls it "dog" because it has four legs',
    ],
    visual: (
      <div className="relative w-full h-48 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center"
          >
            <span className="text-2xl">🐱</span>
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-400 text-2xl"
          >
            →
          </motion.div>
          <div className="w-20 h-20 rounded-xl bg-blue-500/10 border-2 border-blue-400/30 flex items-center justify-center">
            <span className="text-2xl">🐕</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    subtitle: 'Revising Schema to Fit New Evidence',
    icon: '🔄',
    color: 'from-emerald-500 to-teal-500',
    description: 'When new evidence surfaces that the existing schema cannot explain, the child revises the existing schema to accommodate the new evidence. This is how genuine cognitive growth occurs.',
    process: [
      'New evidence cannot be explained by the existing schema',
      'Disequilibrium occurs — the child is confused',
      'The child modifies or creates a new schema',
      'The new schema can now account for the evidence',
      'Example: Child learns cats and dogs are different — creates a new "cat" schema',
    ],
    visual: (
      <div className="relative w-full h-48 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <span className="text-2xl">🐱</span>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="text-emerald-400 text-2xl"
          >
            ⟳
          </motion.div>
          <div className="flex flex-col gap-2">
            <div className="w-14 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
              <span className="text-sm">🐕</span>
            </div>
            <div className="w-14 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
              <span className="text-sm">🐱</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SchemataSection() {
  const [activeConcept, setActiveConcept] = useState('schemata');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const activeData = concepts.find(c => c.id === activeConcept)!;

  return (
    <section id="schemata" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Core Mechanisms</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Schemata, Assimilation & Accommodation</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            The three key processes through which we build and refine our understanding of the world.
          </p>
        </motion.div>

        {/* Concept selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {concepts.map((concept) => (
            <motion.button
              key={concept.id}
              onClick={() => setActiveConcept(concept.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeConcept === concept.id
                  ? `bg-gradient-to-r ${concept.color} text-white shadow-lg`
                  : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="mr-2">{concept.icon}</span>
              {concept.title}
            </motion.button>
          ))}
        </div>

        {/* Active concept display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{activeData.icon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {activeData.title}
                    </h3>
                    <p className={`text-sm bg-gradient-to-r ${activeData.color} bg-clip-text text-transparent font-medium`}>
                      {activeData.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-6">
                  {activeData.description}
                </p>

                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Process</p>
                  <div className="space-y-2">
                    {activeData.process.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`text-xs font-mono bg-gradient-to-r ${activeData.color} bg-clip-text text-transparent mt-0.5 shrink-0`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-white/50 text-sm">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="flex items-center justify-center">
                {activeData.visual}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Equilibrium diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 glass-card p-8 text-center"
        >
          <h4 className="text-lg font-bold text-white mb-4">The Cycle of Equilibrium</h4>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              Equilibrium
            </span>
            <span className="text-white/30">→</span>
            <span className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300">
              New Experience
            </span>
            <span className="text-white/30">→</span>
            <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              Disequilibrium
            </span>
            <span className="text-white/30">→</span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
              Assimilation / Accommodation
            </span>
            <span className="text-white/30">→</span>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              New Equilibrium ✓
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
