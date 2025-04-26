import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TimelineEvent as TimelineEventType } from '@/types';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  event: TimelineEventType;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ event, index }) => {
  return (
    <motion.div
      className="mb-6 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <time className="text-sm font-medium text-[#414042]/70">{event.time}</time>
          <h4 className="text-lg text-[#414042] mt-1">{event.title}</h4>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimelineCard;