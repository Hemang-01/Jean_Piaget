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
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-2 border-indigo-500/30 pulse-glow"
              >
                <img
                  src="https://image.qwenlm.ai/generated-images/413e1d69-5dec-47b3-bf9d-1f9b2829aec7/_result.png"
                  alt="Jean Piaget - Swiss Developmental Psychologist"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Glow ring */}
              <div className="absolute inset-0 w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full border border-indigo-400/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-indigo-300/70 text-sm uppercase tracking-[0.3em] mb-4"
          >
            1896 — 1980 • Swiss Cognitive-Developmental Psychologist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Jean</span>
            <br />
            <span className="text-white">Piaget</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            The architect of how children think — a pioneer who revealed that young minds 
            are not empty vessels, but <span className="text-indigo-300">active builders of knowledge</span>. 
            His cognitive-developmental theory transformed our understanding of learning, thinking, and reasoning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <span className="px-4 py-2 rounded-full border border-white/10 text-white/60 bg-white/5">
              🧠 Cognitive-Developmental Psychologist
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
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/30 text-sm flex flex-col items-center gap-2"
            >
              <span>Scroll to explore his theory</span>
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
