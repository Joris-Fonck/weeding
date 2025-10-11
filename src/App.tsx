import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import Navigation from '@/components/Navigation';
import Apartment from '@/components/Apartment';
import Other from '@/components/Other';
import Footer from '@/components/Footer';

import Record from './components/Record';
import Header from './assets/header.webp';
import { motion } from 'framer-motion';
import { Toaster } from './components/ui/toaster';

const baseDelay = 0.3

function App() {
  useEffect(() => {
    document.title = 'Juliette & Joris | Mariage Mai 2026';
    
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }
  }, []);

  const isRecord = window.location.pathname === '/record';

  return (
    <Router>
      <div className="min-h-screen-support bg-[#f4f4f5] text-[#414042]">
        <main className="container mx-auto">
          <motion.div
            className="absolute top-0 left-0 right-0 z-0"
            {...(!isRecord
              ? {
                  initial: { opacity: 0, y: -100 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1.8, delay: baseDelay + 0.5 },
                }
              : {})}
          >
            <img src={Header} className="w-full object-cover" alt="Background" />
          </motion.div>
          {!isRecord && (
            <>
              <HeroSection />
              <Navigation />
            </>
          )}
          <Routes>
            <Route path="/" element={<TimelineSection />} />
            <Route path="/apartment" element={<Apartment />} />
            <Route path="/other" element={<Other />} />
            <Route path="/record" element={<Record />} />
          </Routes>
          {!isRecord && <Footer />}
          <Toaster />
        </main>
      </div>
    </Router>
  );
}

export default App;