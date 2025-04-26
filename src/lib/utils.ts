import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SCHEDULE } from '@/lib/constants';
import { DaySchedule } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Filters the schedule based on the "days" URL parameter.
 * @param url - The URL containing the "days" parameter.
 * @returns A filtered schedule.
 */
export function getFilteredSchedule(): DaySchedule[] {
  const urlParams = new URLSearchParams(new URL(window.location.href).search);
  const days = urlParams.getAll('days').map(Number).filter(day => day >= 1 && day <= 3);

  if (days.length === 0) {
    return SCHEDULE;
  }

  return SCHEDULE.filter((_, index) => days.includes(index + 1));
}

export function getFilteredDates(): string {
  const dates = [29, 30, 31]
  const urlParams = new URLSearchParams(new URL(window.location.href).search);
  const days = urlParams.getAll('days').map(Number).filter(day => day >= 1 && day <= 3);

  if (days.length === 0) {
    return dates.join(', ').replace(/, ([^,]*)$/, ' & $1');
  }

  return dates.filter((_, index) => days.includes(index + 1)).join(', ').replace(/, ([^,]*)$/, ' & $1');
}