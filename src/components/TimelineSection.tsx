import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timelineEvents = [
  {
    year: '1896',
    title: 'Born in Neuchâtel',
    description: 'Jean William Fritz Piaget was born on August 9 in Neuchâtel, Switzerland, to a medievalist father and a deeply religious mother.',
    icon: '👶',
  },
  {
    year: '1907',
    title: 'The Albino Sparrow',
    description: 'At age 11, Piaget published his first paper on an albino sparrow he observed — launching his scientific career before adolescence.',
    icon: '🐦',
  },
  {
    year: '1918',
    title: 'Doctorate in Zoology',
    description: 'Earned his PhD from the University of Neuchâtel with a dissertation on mollusks, having published over 20 papers by age 21.',
    icon: '🎓',
  },
  {
    year: '1919',
    title: 'Paris & Psychoanalysis',
    description: 'Moved to Paris where he studied under Carl Jung and was influenced by psychoanalysis, shifting his interest toward psychology.',
    icon: '🧠',
  },
  {
    year: '1921',
    title: 'Director at Rousseau Institute',
    description: 'Appointed director of studies at the Jean-Jacques Rousseau Institute in Geneva, where he began studying children\'s thinking.',
    icon: '📚',
  },
  {
    year: '1923',
    title: 'Marriage & Family',
    description: 'Married Valentine Châtenay. They had three children — Jacqueline, Lucienne, and Laurent — who became his first "research subjects."',
    icon: '💍',
  },
  {
    year: '1936',
    title: 'Theory Takes Shape',
    description: 'Published "The Origins of Intelligence in Children," beginning to articulate his groundbreaking theory of cognitive development.',
    icon: '💡',
  },
  {
    year: '1952',
    title: 'The Child\'s Conception',
    description: 'Published major works on how children develop concepts of number, space, time, and causality — reshaping developmental psychology.',
    icon: '📖',
  },
  {
    year: '1955',
    title: 'International Centre',
    description: 'Founded the International Centre of Genetic Epistemology in Geneva, bringing together researchers from multiple disciplines.',
    icon: '🌍',
  },
  {
    year: '1980',
    title: 'Legacy Eternal',
    description: 'Piaget passed away on September 16 in Geneva, leaving behind a revolution in how we understand the developing mind.',
    icon: '⭐',
  },
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-center gap-8 md:gap-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className="glass-card p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-500 group">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="text-2xl">{event.icon}</span>
            <span className="text-indigo-400 font-mono text-sm">{event.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            {event.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex w-4 h-4 rounded-full bg-indigo-500 border-2 border-indigo-300 z-10 shrink-0 pulse-glow"
      />

      {/* Spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="timeline" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">A Life in Mind</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">The Journey</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            From a curious boy watching albino sparrows to the world's foremost expert on how children think.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
