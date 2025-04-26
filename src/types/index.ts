export interface TimelineEvent {
  time: string;
  title: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  events: TimelineEvent[];
}