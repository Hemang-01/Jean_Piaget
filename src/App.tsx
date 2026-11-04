import { useEffect, useState, useRef } from 'react';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import StagesSection from './components/StagesSection';
import ContributionsSection from './components/ContributionsSection';
import QuotesSection from './components/QuotesSection';
import LegacySection from './components/LegacySection';
import Navigation from './components/Navigation';
import NeuralBackground from './components/NeuralBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <NeuralBackground />
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <StagesSection />
      <ContributionsSection />
      <QuotesSection />
      <LegacySection />
      
      {/* Footer */}
      <footer className="relative py-12 text-center border-t border-white/5">
        <p className="text-white/30 text-sm">
          A tribute to Jean Piaget (1896–1980) — The father of developmental psychology
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <span className="text-white/20 text-xs">Genetic Epistemology</span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-white/20 text-xs">Constructivism</span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-white/20 text-xs">Cognitive Development</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
