import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-indigo-500/10"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Brain icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center pulse-glow">
              <svg className="w-12 h-12 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C9 2 7 4 7 6.5C7 4 5 3 3.5 4C2 5 2 7 3 8.5C1.5 9 1 10.5 1.5 12C2 13.5 3.5 14 5 13.5C4 15 4.5 17 6 18C7.5 19 9 18.5 10 17.5V22H14V17.5C15 18.5 16.5 19 18 18C19.5 17 20 15 19 13.5C20.5 14 22 13.5 22.5 12C23 10.5 22.5 9 21 8.5C22 7 22 5 20.5 4C19 3 17 4 17 6.5C17 4 15 2 12 2Z" />
              </svg>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-indigo-300/70 text-sm uppercase tracking-[0.3em] mb-4"
          >
            1896 — 1980
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Jean</span>
            <br />
            <span className="text-white">Piaget</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            The architect of how children think — a pioneer who revealed that young minds 
            are not empty vessels, but <span className="text-indigo-300">active builders of knowledge</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/60 bg-white/5">
              🧠 Developmental Psychologist
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/60 bg-white/5">
              🇨🇭 Swiss Epistemologist
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/60 bg-white/5">
              📚 Genetic Epistemology
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/30 text-sm flex flex-col items-center gap-2"
            >
              <span>Scroll to explore</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
