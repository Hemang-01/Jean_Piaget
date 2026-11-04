import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { questionSets, QuestionSet } from '../quizData';

export default function QuizSection() {
  const [currentSet, setCurrentSet] = useState<QuestionSet | null>(null);
  const [usedSets, setUsedSets] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Initialize with a random set
  useEffect(() => {
    if (!currentSet) {
      selectNewSet();
    }
  }, []);

  const selectNewSet = () => {
    let availableSets = questionSets.filter(set => !usedSets.includes(set.id));
    
    // If all sets have been used, reset the used sets
    if (availableSets.length === 0) {
      setUsedSets([]);
      availableSets = questionSets;
    }
    
    // Select a random set from available ones
    const randomIndex = Math.floor(Math.random() * availableSets.length);
    const newSet = availableSets[randomIndex];
    
    setCurrentSet(newSet);
    setUsedSets(prev => [...prev, newSet.id]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers(new Array(newSet.questions.length).fill(null));
  };

  const handleAnswer = (optionIndex: number) => {
    if (showExplanation || !currentSet) return;
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    
    if (optionIndex === currentSet.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (!currentSet) return;
    
    if (currentQuestion < currentSet.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    selectNewSet();
  };

  const getScoreMessage = () => {
    if (!currentSet) return { text: "", emoji: "" };
    const percentage = (score / currentSet.questions.length) * 100;
    if (percentage >= 90) return { text: "Outstanding! You've mastered Piaget's theory!", emoji: "🏆" };
    if (percentage >= 70) return { text: "Great understanding! You know Piaget well!", emoji: "🌟" };
    if (percentage >= 50) return { text: "Good effort! Review the sections above to strengthen your knowledge.", emoji: "📚" };
    return { text: "Keep learning! Re-read the theory sections and try again.", emoji: "💪" };
  };

  if (!currentSet) return null;

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
            Test yourself with these questions. Each attempt features a unique set!
          </p>
          <div className="mt-4 text-xs text-white/30">
            Set {currentSet.id} of {questionSets.length} • {questionSets.length - usedSets.length} sets remaining
          </div>
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
                    Question {currentQuestion + 1} of {currentSet.questions.length}
                  </span>
                  <span className="text-indigo-300 text-sm font-medium">
                    Score: {score}/{currentSet.questions.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={{ width: `${((currentQuestion + 1) / currentSet.questions.length) * 100}%` }}
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
                    {currentSet.questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {currentSet.questions[currentQuestion].options.map((option, index) => {
                      let optionStyle = 'bg-white/5 border-white/10 hover:border-white/20';
                      
                      if (showExplanation) {
                        if (index === currentSet.questions[currentQuestion].correct) {
                          optionStyle = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-200';
                        } else if (index === selectedAnswer && index !== currentSet.questions[currentQuestion].correct) {
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
                            {showExplanation && index === currentSet.questions[currentQuestion].correct && (
                              <span className="ml-auto text-emerald-400">✓</span>
                            )}
                            {showExplanation && index === selectedAnswer && index !== currentSet.questions[currentQuestion].correct && (
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
                          selectedAnswer === currentSet.questions[currentQuestion].correct 
                            ? 'bg-emerald-500/10 border border-emerald-500/20' 
                            : 'bg-amber-500/10 border border-amber-500/20'
                        }`}>
                          <p className="text-white/60 text-sm leading-relaxed">
                            <span className="font-bold text-white/80">Explanation: </span>
                            {currentSet.questions[currentQuestion].explanation}
                          </p>
                        </div>

                        <motion.button
                          onClick={nextQuestion}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium"
                        >
                          {currentQuestion < currentSet.questions.length - 1 ? 'Next Question →' : 'See Results'}
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
                  {score}/{currentSet.questions.length}
                </span>
                <p className="text-white/40 mt-2">
                  {Math.round((score / currentSet.questions.length) * 100)}% correct
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
                      answer === currentSet.questions[i].correct
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
                Try Again with New Questions
              </motion.button>
              
              <p className="text-white/30 text-xs mt-4">
                {questionSets.length - usedSets.length} more unique question sets available
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
