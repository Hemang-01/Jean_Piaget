import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ImpactOnLearningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="impact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">From Theory to Practice</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">How Piaget's Theory Impacts Learning</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Piaget's cognitive-developmental theory has profound implications for how we design 
            curriculum and instruction in educational settings.
          </p>
        </motion.div>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/20" />
            <div className="absolute inset-0 border border-indigo-500/20 rounded-3xl" />
            
            <div className="relative p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Curriculum
              </h3>
              <p className="text-indigo-300/70 text-sm uppercase tracking-wider mb-4">
                Developmentally Appropriate Design
              </p>
              
              <p className="text-white/60 leading-relaxed mb-6">
                Educators must plan a <span className="text-indigo-300 font-medium">developmentally appropriate curriculum</span> that 
                enhances their students' logical and conceptual growth. The curriculum must match 
                the child's current stage of cognitive development.
              </p>

              <div className="space-y-3">
                {[
                  'Match content to developmental stage',
                  'Build on existing cognitive structures',
                  'Promote logical and conceptual growth',
                  'Allow for individual differences in pace',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                      <span className="text-indigo-300 text-xs">✓</span>
                    </div>
                    <p className="text-white/50 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Instruction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/20" />
            <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl" />
            
            <div className="relative p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Instruction
              </h3>
              <p className="text-emerald-300/70 text-sm uppercase tracking-wider mb-4">
                Experience-Based Learning
              </p>
              
              <p className="text-white/60 leading-relaxed mb-6">
                Teachers must emphasize the critical role that <span className="text-emerald-300 font-medium">experiences — or interactions 
                with the surrounding environment</span> — play in student learning. Instructors must take into 
                account fundamental concepts like the permanence of objects in establishing cognitive structures.
              </p>

              <div className="space-y-3">
                {[
                  'Emphasize interactions with environment',
                  'Provide hands-on learning experiences',
                  'Consider role of object permanence',
                  'Create cognitive structures through experience',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <span className="text-emerald-300 text-xs">✓</span>
                    </div>
                    <p className="text-white/50 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center glass-card p-8"
        >
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            <span className="text-indigo-300 font-medium">Key Insight:</span> Piaget's theory tells us that children are not passive recipients of knowledge. 
            They actively construct their understanding through interaction with the world. 
            Education must therefore provide rich experiences that challenge and expand their thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
