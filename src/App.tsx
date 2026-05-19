/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import StarryBackground from './components/StarryBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import { useFadeIn, useNavHighlight } from './hooks/useScrollAnimation';

export default function App() {
  useFadeIn();
  useNavHighlight();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans overflow-hidden relative font-extralight tracking-wide">
      <CustomCursor />
      <StarryBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-screen overflow-y-auto no-scrollbar scroll-smooth pb-24">
        <div className="space-y-12">
          <Hero />
          <About />
          <Portfolio />
          <Philosophy />
          <Contact />
        </div>
        <footer className="text-center py-10 opacity-30 text-[10px] uppercase tracking-[0.3em] font-mono mt-20 border-t border-white/5 pt-10">
          Design by RainTing &bull; 2024 - 2027 Perspective
        </footer>
      </div>
    </div>
  );
}