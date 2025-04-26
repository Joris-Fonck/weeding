import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-16 md:py-24">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-[#414042] leading-relaxed">
            Juliette <span className="font-serif">&</span> Joris
          </h1>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="h-[1px] w-12 md:w-24 bg-[#414042] opacity-60"></div>
          <p className="text-xl md:text-2xl font-light text-[#414042]">May 29, 2026</p>
          <div className="h-[1px] w-12 md:w-24 bg-[#414042] opacity-60"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection