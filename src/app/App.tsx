import { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Navigation } from './components/Navigation';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { IntroScreen } from './components/IntroScreen';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
