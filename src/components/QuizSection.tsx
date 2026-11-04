import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What are the four factors that Piaget identified as essential for constructing knowledge?",
    options: [
      "Maturation, Active Experiences, Social Interaction, Equilibration",
      "Genetics, Education, Culture, Practice",
      "Observation, Imitation, Repetition, Memory",
      "Sensation, Perception, Cognition, Metacognition",
    ],
    correct: 0,
    explanation: "Piaget's model identifies four factors: Maturation (hereditary growth), Active Experiences (manipulation of objects/ideas), Social Interaction (sharing ideas), and Equilibration (the process of making sense of experiences).",
  },
  {
    id: 2,
    question: "What is 'assimilation' in Piaget's theory?",
    options: [
      "Creating entirely new schemas from scratch",
      "The tendency to retain an existing schema and force conflicting evidence to fit into it",
      "Revising existing schemas to accommodate new evidence",
      "The process of forgetting outdated information",
    ],
    correct: 1,
    explanation: "Assimilation is the natural tendency to retain an existing schema and try to force conflicting evidence to fit into it. New evidence must conform to the existing schema — like calling a cat a 'dog' because it has four legs.",
  },
  {
    id: 3,
    question: "What does 'accommodation' mean in Piaget's framework?",
    options: [
      "Ignoring new information that doesn't fit",
      "Memorizing facts about the world",
      "Revising the existing schema when new evidence cannot be explained by it",
      "Returning to a previous stage of development",
    ],
    correct: 2,
    explanation: "Accommodation occurs when new evidence surfaces that the existing schema cannot explain, and the child revises the existing schema to accommodate the new evidence — like learning that cats and dogs are different animals.",
  },
  {
    id: 4,
    question: "During which stage does a child develop object permanence?",
    options: [
      "Preoperational stage",
      "Concrete Operations stage",
      "Formal Operations stage",
      "Sensorimotor stage",
    ],
    correct: 3,
    explanation: "Object permanence — understanding that objects exist even when not seen — develops during the Sensorimotor stage (birth to ~1½ years), as infants progress from reflex activity to coordinated sensory-motor actions.",
  },
  {
    id: 5,
    question: "What characterizes the Preoperational stage (ages 1½–7)?",
    options: [
      "Logical thinking with concrete objects",
      "Abstract and hypothetical reasoning",
      "Egocentrism, Animism, and Realism",
      "Systematic scientific thinking",
    ],
    correct: 2,
    explanation: "The Preoperational stage is marked by Egocentrism (inability to see others' viewpoints), Animism (belief that things are alive because they move), and Realism (belief that everything seen is real, nothing fictitious).",
  },
  {
    id: 6,
    question: "What is 'Substitution' in Piaget's model of mental development?",
    options: [
      "Combining multiple ideas into one complex concept",
      "Replacing a less mature idea with a more mature one",
      "Forgetting old information to make room for new",
      "Using physical objects to solve mental problems",
    ],
    correct: 1,
    explanation: "Substitution is a process whereby the child replaces a less mature idea with a more mature one — like upgrading software on a computer.",
  },
  {
    id: 7,
    question: "What is 'Integration' in Piaget's model?",
    options: [
      "Replacing old ideas with new ones",
      "Memorizing information from textbooks",
      "Less mature ideas are brought together to arrive at more complex and abstract concepts",
      "The process of taking tests to measure intelligence",
    ],
    correct: 2,
    explanation: "Integration is a process whereby less mature ideas are brought together to arrive at more complex and abstract concepts — like puzzle pieces combining to reveal a bigger picture.",
  },
  {
    id: 8,
    question: "During which stage can a child understand conservation of number, length, area, and volume?",
    options: [
      "Sensorimotor stage",
      "Preoperational stage",
      "Concrete Operations stage",
      "Formal Operations stage",
    ],
    correct: 2,
    explanation: "In the Concrete Operations stage (ages 7–12), the child understands conservation of numerousness, length, area, and ultimately volume. They can also decenter and think reversibly.",
  },
  {
    id: 9,
    question: "What does 'equilibration' refer to?",
    options: [
      "The physical growth of the brain",
      "The process by which we make sense of our experiences, reconciling expectations with reality",
      "The ability to memorize large amounts of information",
      "The process of social learning from peers",
    ],
    correct: 1,
    explanation: "Equilibration is the process by which we make sense of our experiences, enabling us to reconcile how we expect the world to act and how it actually functions. It is the master process driving cognitive development.",
  },
  {
    id: 10,
    question: "What characterizes the Formal Operations stage (ages 11–15+)?",
    options: [
      "Learning through physical reflexes",
      "Thinking dominated by perception",
      "Logical thinking only with concrete objects",
      "Ability to use abstract rules, think hypothetically, and reason systematically",
    ],
    correct: 3,
    explanation: "In the Formal Operations stage, the system of mental operations reaches equilibrium. The individual can apply logical thoughts to all classes of problems, use abstract rules, think rationally and systematically, and become concerned with the hypothetical, abstract, and the future.",
  },
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const handleAnswer = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { text: "Outstanding! You've mastered Piaget's theory!", emoji: "🏆" };
    if (percentage >= 70) return { text: "Great understanding! You know Piaget well!", emoji: "🌟" };
    if (percentage >= 50) return { text: "Good effort! Review the sections above to strengthen your knowledge.", emoji: "📚" };
    return { text: "Keep learning! Re-read the theory sections and try again.", emoji: "💪" };
  };

  return (
    <section id="quiz" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400/70 text-sm uppercase tracking-[0.3em] mb-4">Test Your Knowledge</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Quiz</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            How well do you understand Piaget's theory of cognitive development? 
            Test yourself with these questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {!quizComplete ? (
            <div className="glass-card p-8 md:p-12">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/40 text-sm">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-indigo-300 text-sm font-medium">
                    Score: {score}/{questions.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].options.map((option, index) => {
                      let optionStyle = 'bg-white/5 border-white/10 hover:border-white/20';
                      
                      if (showExplanation) {
                        if (index === questions[currentQuestion].correct) {
                          optionStyle = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-200';
                        } else if (index === selectedAnswer && index !== questions[currentQuestion].correct) {
                          optionStyle = 'bg-red-500/10 border-red-500/50 text-red-200';
                        } else {
                          optionStyle = 'bg-white/5 border-white/5 opacity-50';
                        }
                      } else if (selectedAnswer === index) {
                        optionStyle = 'bg-indigo-500/10 border-indigo-500/50';
                      }

                      return (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          whileHover={!showExplanation ? { scale: 1.01 } : {}}
                          whileTap={!showExplanation ? { scale: 0.99 } : {}}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${optionStyle}`}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-white/40 shrink-0">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="text-white/70 text-sm md:text-base">{option}</span>
                            {showExplanation && index === questions[currentQuestion].correct && (
                              <span className="ml-auto text-emerald-400">✓</span>
                            )}
                            {showExplanation && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                              <span className="ml-auto text-red-400">✗</span>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className={`p-4 rounded-xl mb-6 ${
                          selectedAnswer === questions[currentQuestion].correct 
                            ? 'bg-emerald-500/10 border border-emerald-500/20' 
                            : 'bg-amber-500/10 border border-amber-500/20'
                        }`}>
                          <p className="text-white/60 text-sm leading-relaxed">
                            <span className="font-bold text-white/80">Explanation: </span>
                            {questions[currentQuestion].explanation}
                          </p>
                        </div>

                        <motion.button
                          onClick={nextQuestion}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium"
                        >
                          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="text-6xl mb-6"
              >
                {getScoreMessage().emoji}
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h3>
              
              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text">
                  {score}/{questions.length}
                </span>
                <p className="text-white/40 mt-2">
                  {Math.round((score / questions.length) * 100)}% correct
                </p>
              </div>

              <p className="text-white/60 mb-8 text-lg">
                {getScoreMessage().text}
              </p>

              {/* Score breakdown */}
              <div className="grid grid-cols-5 gap-2 mb-8 max-w-xs mx-auto">
                {answers.map((answer, i) => (
                  <div
                    key={i}
                    className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm ${
                      answer === questions[i].correct
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <motion.button
                onClick={resetQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium"
              >
                Try Again
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
