import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const legacyItems = [
  {
    icon: '🎓',
    title: 'Education Reform',
    description: 'His constructivist approach transformed classrooms worldwide, emphasizing active learning, discovery, and child-centered education.',
  },
  {
    icon: '🧪',
    title: 'Developmental Psychology',
    description: 'Established developmental psychology as a major field of study, inspiring generations of researchers including Vygotsky, Bruner, and Kohlberg.',
  },
  {
    icon: '📱',
    title: 'Modern Learning Theory',
    description: 'His ideas influence modern educational technology, curriculum design, and our understanding of how people learn at every age.',
  },
  {
    icon: '🌐',
    title: 'UNESCO & Global Impact',
    description: 'Served as Director of the International Bureau of Education at UNESCO, shaping educational policy across nations.',
  },
];

export default function LegacySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="legacy" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Eternal Impact</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">His Legacy</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Piaget's work continues to shape how we understand learning, development, and the nature of human thought.
          </p>
        </motion.div>

        {/* Legacy cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {legacyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className="glass-card p-8 group hover:border-indigo-500/30 transition-all duration-500"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final tribute */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-pink-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,126,234,0.1),transparent_70%)]" />
          
          <div className="relative p-12 md:p-20 text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                <span className="text-3xl">🧠</span>
              </div>
            </motion.div>

            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              "Children are not less intelligent than adults — 
              <br className="hidden md:block" />
              <span className="gradient-text"> they think differently.</span>"
            </h3>
            
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed mb-8">
              Jean Piaget showed us that a child's mind is not an incomplete adult mind, 
              but a qualitatively different way of understanding the world. His work reminds us 
              that every child is a scientist, philosopher, and architect of their own reality.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/30">
              <span>Neuchâtel, 1896</span>
              <span className="text-indigo-400/50">→</span>
              <span>Geneva, 1980</span>
            </div>
          </div>
        </motion.div>

        {/* Awards section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-sm uppercase tracking-wider mb-6">Recognition</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Erasmus Prize (1968)',
              'Balzan Prize (1978)',
              'UNESCO Director',
              'Sonning Prize (1972)',
            ].map((award, i) => (
              <motion.span
                key={award}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-sm bg-white/5"
              >
                🏆 {award}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
