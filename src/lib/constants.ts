import { DaySchedule } from '@/types';

export const SCHEDULE: DaySchedule[] = [
  {
    date: '29 mai 2026',
    events: [
      { time: '16:00', title: 'Cérémonie civile à la mairie de St-Erblon', id: 'mairie' },
      { time: '18:00', title: 'Soirée au calme', id: 'chateau' },
    ],
  },
  {
    date: '30 mai 2026',
    events: [
      { time: '16:00', title: 'Cérémonie laique', id: 'ceremonie' },
      { time: '17:00', title: 'Session photo', id: 'photo' },
      { time: '17:45', title: 'Vin d\'honneur', id: 'vin' },
      { time: '20:30', title: 'Diner à table', id: 'diner' },
      { time: 'Après le diner', title: 'Fiesta', id: 'soiree' },
    ],
  },
  {
    date: '31 mai 2026',
    events: [
      { time: '12:00', title: 'Brunch', id: 'brunch' },
      { time: 'Quand vous voulez', title: 'Départ', id: 'depart' },
    ],
  },
];