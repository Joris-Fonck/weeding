import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SCHEDULE } from '@/lib/constants';
import { DaySchedule } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a URL with preserved search parameters
 * @param path - The target route path
 * @returns A URL string with preserved search parameters
 */
export function createUrlWithParams(path: string): string {
  const currentParams = new URLSearchParams(window.location.search);
  const hasParams = Array.from(currentParams.keys()).length > 0;
  
  return hasParams ? `${path}?${currentParams.toString()}` : path;
}

/**
 * Filters the schedule based on the "days" URL parameter.
 * @param url - The URL containing the "days" parameter.
 * @returns A filtered schedule.
 */
export function getFilteredSchedule(): DaySchedule[] {
  const days = getDays()

  if (days.length === 0) {
    return SCHEDULE;
  }

  return SCHEDULE.filter((_, index) => days.includes(index + 1));
}

export function getFilteredDates(): string {
  const dates = [29, 30, 31]
  const days = getDays()

  if (days.length === 0) {
    return dates.join(', ').replace(/, ([^,]*)$/, ' & $1');
  }

  return dates.filter((_, index) => days.includes(index + 1)).join(', ').replace(/, ([^,]*)$/, ' & $1');
}

function getDays() {
  const urlParams = new URLSearchParams(new URL(window.location.href).search);

  // Check local storage first
  const storedDays = localStorage.getItem('days');
  const debug = urlParams.get('debug');
  if (storedDays && !debug) {
    const days = storedDays.split(',').map(Number).filter(day => day >= 1 && day <= 3);
    if (days.length > 0) {
      return days;
    }
  }

  const days = urlParams.getAll('days').map(Number).filter(day => day >= 1 && day <= 3);
  if (days.length > 0) {
    // Store the days in local storage for future use
    localStorage.setItem('days', days.join(','));
  }

  return days;
}