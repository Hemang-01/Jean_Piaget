import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contributions = [
  {
    icon: '🧬',
    title: 'Genetic Epistemology',
    description: 'Founded an entirely new field studying the origins and development of knowledge. Piaget asked: "How does knowledge grow?"',
    detail: 'By studying how children\'s understanding evolves, Piaget revealed that knowledge is not simply transmitted but constructed through interaction with the environment.',
  },
  {
    icon: '🔄',
    title: 'Assimilation & Accommodation',
    description: 'Discovered two fundamental processes by which we adapt our mental structures to fit new experiences.',
    detail: 'Assimilation: fitting new information into existing schemas. Accommodation: modifying schemas when new information doesn\'t fit. Together, they drive cognitive equilibrium.',
  },
  {
    icon: '🏗️',
    title: 'Constructivism',
    description: 'Revolutionized education by showing that children actively construct knowledge rather than passively receiving it.',
    detail: 'His constructivist theory transformed teaching methods worldwide, emphasizing hands-on learning, discovery, and the importance of allowing children to explore.',
  },
  {
    icon: '⚖️',
    title: 'Equilibration',
    description: 'Proposed that cognitive development is driven by the need to achieve balance between existing understanding and new experiences.',
    detail: 'When children encounter information that doesn\'t fit their current understanding (disequilibrium), they are motivated to adapt their thinking to restore balance.',
  },
  {
    icon: '🎯',
    title: 'Schemas',
    description: 'Introduced the concept of mental frameworks (schemas) that organize and interpret information about the world.',
    detail: 'Schemas are the building blocks of thought — like mental filing systems that help us categorize and understand our experiences.',
  },
  {
    icon: '📊',
    title: 'Clinical Method',
    description: 'Developed an innovative interview technique to probe children\'s reasoning, revealing the logic behind their "wrong" answers.',
    detail: 'His clinical interviews showed that children\'s errors weren\'t random but revealed systematic differences in how they think about the world.',
  },
];

export default function ContributionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="contributions" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Mind & Method</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Key Contributions</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Ideas that transformed psychology, education, and our understanding of human thought.
          </p>
        </motion.div>

        {/* Contributions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 group hover:border-indigo-500/30 transition-all duration-500"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-white/30 text-xs leading-relaxed border-t border-white/5 pt-3">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '60+', label: 'Years of Research' },
            { number: '70+', label: 'Published Books' },
            { number: '4', label: 'Stages of Development' },
            { number: '∞', label: 'Impact on Education' },
          ].map((stat, i) => (
            <div key={i} className="text-center glass-card p-6">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
