export interface TimelineEvent {
  time: string;
  title: string;
  id: string
}

export interface DaySchedule {
  date: string;
  events: TimelineEvent[];
}