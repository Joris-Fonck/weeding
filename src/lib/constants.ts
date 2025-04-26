import { DaySchedule } from '@/types';

export const SCHEDULE: DaySchedule[] = [
  {
    day: 'Jour 1',
    date: '28 mai 2026',
    events: [
      { time: '16:00', title: 'Ceremonie civil à la mairie de St-Erblon', id: 'mairie' },
      { time: '18:00', title: 'Welcome Gathering at the Castle', id: 'chateau' },
    ],
  },
  {
    day: 'Jour 2',
    date: '29 mai 2026',
    events: [
      { time: '16:00', title: 'Ceremonie laïc', id: 'ceremonie' },
      { time: '17:00', title: 'Session photo', id: 'photo' },
      { time: '18:00', title: 'Vin d\'honneur', id: 'vin' },
      { time: '21:00', title: 'Diner à table', id: 'diner' },
      { time: '23:30', title: 'Soirée dansante', id: 'soiree' },
    ],
  },
  {
    day: 'Jour 3',
    date: '30 mai 2026',
    events: [
      { time: '12:00', title: 'Brunch', id: 'brunch' },
      { time: 'Quand vous voulez', title: 'Départ', id: 'depart' },
    ],
  },
];