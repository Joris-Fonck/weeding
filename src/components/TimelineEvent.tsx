import React from 'react';
import { TimelineEvent as TimelineEventType } from '@/types';

interface TimelineEventProps {
  event: TimelineEventType;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-2 min-w-[60px]">
          <div className="h-[1px] w-3 bg-[#414042] opacity-60 mt-3"></div>
          <span className="text-sm font-medium text-[#414042]">{event.time}</span>
        </div>
        <p className="text-[#414042] leading-relaxed">{event.title}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;