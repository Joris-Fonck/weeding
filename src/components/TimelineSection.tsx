import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SCHEDULE } from '@/lib/constants';
import { motion } from 'framer-motion';

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-5xl mx-auto px-4">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-[#414042]">Our Celebration</h2>
        <p className="text-[#414042]/80 max-w-xl mx-auto">
          We're excited to share our special moments with you. Here's what we have planned for our wedding celebration.
        </p>
      </motion.div>
      
      <ScrollArea className="h-[700px] md:h-auto pr-4">
        <div className="space-y-16">
          {SCHEDULE.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * dayIndex }}
              >
                <h3 className="text-2xl font-serif text-[#414042] mb-1">{day.day}</h3>
                <p className="text-sm text-[#414042]/70">{day.date}</p>
              </motion.div>

              <div className="relative">
                {/* Center line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-[#414042]/20" />
                
                <div className="relative">
                  {day.events.map((event, eventIndex) => {
                    const isLeft = eventIndex % 2 === 0;
                    
                    return (
                      <motion.div
                        key={eventIndex}
                        className={`relative flex items-center mb-8 last:mb-0 ${
                          isLeft ? 'justify-end' : 'justify-start'
                        }`}
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * eventIndex }}
                      >
                        <div className={`w-[calc(50%-1rem)] ${isLeft ? 'mr-8' : 'ml-8'}`}>
                          {/* Timeline dot */}
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#414042]/40"
                               style={{ 
                                 [isLeft ? 'right' : 'left']: 'calc(-1rem - 8px)',
                               }} 
                          />
                          
                          {/* Card */}
                          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <time className="text-lg font-medium text-[#414042] block mb-2">
                              {event.time}
                            </time>
                            <h4 className="text-[#414042] text-lg">{event.title}</h4>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default TimelineSection;