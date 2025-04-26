import React, { useRef } from 'react';
import { SCHEDULE } from '@/lib/constants';
import { motion, useInView } from 'framer-motion';

import Alliance from '../assets/alliance.png'
import Brunch from '../assets/brunch.png'
import Ceremonie from '../assets/ceremonie.png'
import Champagne from '../assets/champagne.png'
import Depart from '../assets/depart.png'
import Photo from '../assets/photo.png'
import Pizza from '../assets/pizza.png'
import Repas from '../assets/repas.png'
import Soiree from '../assets/soiree.png'

const getEventIcon = (id: string) => {
  if (id === 'mairie') return Alliance;
  if (id === 'chateau') return Pizza;
  if (id === 'ceremonie') return Ceremonie;
  if (id === 'photo') return Photo;
  if (id === 'vin') return Champagne;
  if (id === 'diner') return Repas;
  if (id === 'soiree') return Soiree;
  if (id === 'brunch') return Brunch;
  if (id === 'depart') return Depart;
  return '';
};

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-4xl mx-auto px-4">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-[#414042]">Notre mariage</h2>
        <p className="text-[#414042]/80 max-w-xl mx-auto">
          Nous sommes ravis de partager ces moments précieux avec vous. Voici ce que nous avons prévu pour notre mariage.
        </p>
      </motion.div>

      <div className="space-y-16">
        {SCHEDULE.map((day, dayIndex) => (
          <div key={dayIndex} className="relative">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-serif text-[#414042] mb-1">{day.day}</h3>
              <p className="text-sm text-[#414042]/70">{day.date}</p>
            </motion.div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-px h-full w-[1px] bg-[#414042]/20" />

              <div className="relative space-y-12">
                {day.events.map((event, eventIndex) => {
                  const isLeft = eventIndex % 2 === 0;
                  const Icon = getEventIcon(event.id);
                  const ref = useRef(null);
                  const isInView = useInView(ref, { once: true, margin: "-100px" });
                  
                  return (
                    <motion.div
                      ref={ref}
                      key={eventIndex}
                      className="relative flex items-center"
                      initial={{ 
                        opacity: 0,
                        x: isLeft ? -50 : 50
                      }}
                      animate={{ 
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : (isLeft ? -50 : 50)
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.1 * eventIndex,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {/* Empty space for visual balance */}
                      <div className={`w-1/2 ${isLeft ? 'order-2' : 'order-1'}`} />

                      {/* Center dot */}
                      <div className="z-50 absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#414042]/40" />

                      {/* Horizontal line */}
                      <div 
                        className={`absolute top-1/2 h-[1px] bg-[#414042]/20 w-12 ${
                          isLeft ? 'right-1/2' : 'left-1/2'
                        }`}
                      />

                      {/* Event content */}
                      <div 
                        className={`w-1/2 ${
                          isLeft ? 'order-1 pr-16 text-right' : 'order-2 pl-16'
                        }`}
                      >
                        <time className="block text-lg font-medium text-[#414042] mb-1">
                          {event.time}
                        </time>
                        <h4 className="text-[#414042] text-base">
                          {event.title}
                        </h4>
                      </div>

                      {/* Icon */}
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 ${
                          isLeft ? 'left-[calc(50%+3rem)]' : 'right-[calc(50%+3rem)]'
                        }`}
                      >
                        <img src={Icon} className="w-12 h-12" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;