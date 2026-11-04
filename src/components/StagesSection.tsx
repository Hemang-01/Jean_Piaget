import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const stages = [
  {
    id: 1,
    name: 'Sensorimotor',
    age: 'Birth – 1½ years',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500/30',
    bgClass: 'stage-card-1',
    icon: '👁️',
    description: 'Development from reflex activity to sensorimotor ways of solving problems. The infant progresses from simple reflexes to coordinated actions and the beginnings of thought.',
    subPoints: [
      'Development from Reflex Activity to Sensori-Motor Ways of Solving a Problem',
      'Coordination of Sensory-Motor Actions',
      'Primitive Ways of Anticipating Future Events',
      'The First Signs of Curiosity',
      'Tendency to Imitate or Repeat Behavior or Actions of Models',
      'Perception of Objects and People',
      'Practical Intelligence',
    ],
    keyConcepts: ['Object Permanence', 'Reflexes', 'Imitation', 'Cause & Effect'],
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 rounded-full bg-violet-500/30 absolute"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 rounded-full border-2 border-violet-400/40 absolute"
        />
        <span className="text-4xl relative z-10">👶</span>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Preoperational',
    age: '1½ – 7 years',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    bgClass: 'stage-card-2',
    icon: '🎨',
    description: 'During the first half of this stage, extremely rapid development of language occurs. The child\'s thought is dominated by perception, and thinking is marked by egocentrism, animism, and realism.',
    subPoints: [
      'Extremely rapid development of language occurs',
      'The child\'s thought is dominated by perception',
      'Egocentrism — inability to see from others\' point of view',
      'Animism — belief that things are alive because they are moving',
      'Realism — belief that all they see is real, nothing is fictitious',
    ],
    keyConcepts: ['Egocentrism', 'Animism', 'Realism', 'Language Development'],
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center gap-2">
        {['🌙', '⭐', '🌈', '🦄', '✨'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="text-2xl"
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    name: 'Concrete Operations',
    age: '7 – 12 years',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    bgClass: 'stage-card-3',
    icon: '🧩',
    description: 'Logical thinking using concrete objects occurs during this stage. The child\'s egocentrism waves and they are able to take others\' viewpoints. Conservation, classification, and serial arrangement become possible.',
    subPoints: [
      'Logical thinking using concrete objects occurs',
      'Child\'s egocentrism waves — able to take others\' viewpoint',
      'Understands conservation of numerousness, length, area, and ultimately volume',
      'Decentering and reversibility of thought',
      'Capacity to classify, group, and arrange objects serially',
    ],
    keyConcepts: ['Conservation', 'Classification', 'Seriation', 'Reversibility'],
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n, i) => (
            <motion.div
              key={n}
              initial={{ height: 20 }}
              animate={{ height: [20, 20 + i * 15, 20] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              className="w-8 bg-emerald-500/30 rounded-t-sm border border-emerald-400/30"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: 'Formal Operations',
    age: '11 – 15+ years',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/30',
    bgClass: 'stage-card-4',
    icon: '🔬',
    description: 'The system of mental operations has reached a degree of equilibrium. The adolescent can apply logical thoughts to all classes of problems, use abstract rules, and think systematically about the hypothetical and future.',
    subPoints: [
      'System of mental operation has reached a degree of equilibrium',
      'Ability to apply logical thoughts to all classes of problems',
      'Ability to use abstract rules to solve a whole class of problems',
      'Formal thought is rational and systematic',
      'Becomes concerned with the hypothetical, abstract, and the future',
    ],
    keyConcepts: ['Abstract Reasoning', 'Hypothetical Thinking', 'Deductive Logic', 'Metacognition'],
    visual: (
      <div className="relative w-full h-40 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-2 border-pink-400/40 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute w-14 h-14 border-2 border-pink-300/30 rounded-lg"
        />
        <span className="text-3xl absolute">∞</span>
      </div>
    ),
  },
];

export default function StagesSection() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="stages" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Cognitive Architecture</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Stages of Cognitive Development</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Piaget proposed that children move through four universal stages of cognitive development, 
            each building upon the last like floors of a building.
          </p>
        </motion.div>

        {/* Stage selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stages.map((stage, index) => (
            <motion.button
              key={stage.id}
              onClick={() => setActiveStage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStage === index
                  ? `bg-gradient-to-r ${stage.color} text-white shadow-lg`
                  : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="mr-2">{stage.icon}</span>
              {stage.name}
            </motion.button>
          ))}
        </div>

        {/* Active stage display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${stages[activeStage].bgClass} rounded-3xl p-8 md:p-12`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{stages[activeStage].icon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {stages[activeStage].name}
                    </h3>
                    <p className={`text-sm bg-gradient-to-r ${stages[activeStage].color} bg-clip-text text-transparent font-medium`}>
                      {stages[activeStage].age}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed mb-6">
                  {stages[activeStage].description}
                </p>

                <div className="mb-6">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Key Characteristics</p>
                  <div className="space-y-2">
                    {stages[activeStage].subPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className={`text-xs font-mono bg-gradient-to-r ${stages[activeStage].color} bg-clip-text text-transparent mt-0.5 shrink-0`}>
                          {i + 1}.
                        </span>
                        <p className="text-white/50 text-sm">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stages[activeStage].keyConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/60"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Visual */}
              <div className="flex items-center justify-center">
                {stages[activeStage].visual}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStage === index ? 'w-8 bg-indigo-400' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
