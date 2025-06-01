import React from 'react';
import { motion } from 'framer-motion';
import { getFilteredDates } from '@/lib/utils';

import Header from '../assets/header.webp';
import Flower from '../assets/flower.webp';

const baseDelay = 0.3

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen-support flex flex-col items-center pt-48 md:pt-80">
      <motion.div
        className="absolute top-0 left-0 right-0"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: baseDelay + 0.5 }}
      >
        <img src={Header} className="w-full object-cover" alt="Background" />
      </motion.div>
      <motion.div
        className="text-center mb-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: baseDelay }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-[#414042] leading-relaxed">
            Juliette <span className="font-serif">&</span> Joris
          </h1>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.5, duration: 1 }}
        >
          <div className="h-[1px] w-12 md:w-24 bg-[#414042] opacity-60"></div>
          <p className="text-xl md:text-2xl font-light text-[#414042]">
            <b>{getFilteredDates()} mai 2026</b>
          </p>
          <div className="h-[1px] w-12 md:w-24 bg-[#414042] opacity-60"></div>
        </motion.div>
      </motion.div>
      <motion.div
        className="h-[200px] md:h-auto my-auto -ml-[30px] md:w-[initial]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1.5, duration: 2 }}
      >
        <img src={Flower} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        className=" mb-8 text-center"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 , delay: baseDelay + 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-[#414042]">Notre mariage</h2>
        <p className="text-[#414042]/80 max-w-xl mx-4">
          Nous sommes ravis de partager ces moments précieux avec vous. Cliquez sur les boutons ci-dessous pour 
          connaitre les informations nécessaire pour notre mariage.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection