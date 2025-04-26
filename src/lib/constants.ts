import { DaySchedule } from '@/types';

export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Day 1',
    date: 'May 28, 2026',
    events: [
      { time: '16:00', title: 'Civil Ceremony at the Citytown' },
      { time: '18:00', title: 'Welcome Gathering at the Castle' },
    ],
  },
  {
    day: 'Day 2',
    date: 'May 29, 2026',
    events: [
      { time: '16:00', title: 'Laic Ceremony' },
      { time: '17:00', title: 'Group Photo Session' },
      { time: '18:00', title: 'Cocktail Reception' },
      { time: '21:00', title: 'Wedding Dinner' },
      { time: '23:30', title: 'Dance Party' },
    ],
  },
  {
    day: 'Day 3',
    date: 'May 30, 2026',
    events: [
      { time: '12:00', title: 'Farewell Brunch' },
    ],
  },
];