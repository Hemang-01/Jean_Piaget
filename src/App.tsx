import { useEffect, useState, useRef } from 'react';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import KnowledgeConstructionSection from './components/KnowledgeConstructionSection';
import SchemataSection from './components/SchemataSection';
import MentalDevelopmentSection from './components/MentalDevelopmentSection';
import StagesSection from './components/StagesSection';
import ContributionsSection from './components/ContributionsSection';
import ImpactOnLearningSection from './components/ImpactOnLearningSection';
import QuotesSection from './components/QuotesSection';
import LegacySection from './components/LegacySection';
import QuizSection from './components/QuizSection';
import Navigation from './components/Navigation';
import NeuralBackground from './components/NeuralBackground';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <NeuralBackground />
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <KnowledgeConstructionSection />
      <SchemataSection />
      <MentalDevelopmentSection />
      <StagesSection />
      <ContributionsSection />
      <ImpactOnLearningSection />
      <QuotesSection />
      <LegacySection />
      <QuizSection />
      
      {/* Footer */}
      <footer className="relative py-12 text-center border-t border-white/5">
        <p className="text-white/30 text-sm">
          A tribute to Jean Piaget (1896–1980) — The father of developmental psychology
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <span className="text-white/20 text-xs">Genetic Epistemology</span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-white/20 text-xs">Constructivism</span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-white/20 text-xs">Cognitive Development</span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-white/20 text-xs">Content by On Purpose Associates</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
