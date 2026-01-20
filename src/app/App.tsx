import { useState } from 'react';
import Hero from './components/hero';
import Features from './components/features';
import Navigation from './components/navigation';
import Stats from './components/stats';
import Pricing from './components/pricing';
import Footer from './components/footer';
import IntroScreen from './components/intro-screen';

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
