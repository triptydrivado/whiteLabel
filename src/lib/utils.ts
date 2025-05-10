import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date Format String by Intl API
export const DateFormatter = new Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const getCurrentDate = (dateTime: Date = new Date()) => {
  return DateFormatter.format(dateTime);
};

export const checkDate = (dateString: string) => {
  try {
    const formattedDate = DateFormatter.format(new Date(dateString));
    return formattedDate === dateString;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return false;
  }
};

// Time Format String by Intl API
export const TimeFormatter = new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false, // Explicitly use 24-hour format
});

export const getCurrentTime = (dateTime: Date = new Date()) => {
  return TimeFormatter.format(dateTime);
};

export const checkTime = (timeString: string) => {
  try {
    // Combine with a default date for valid parsing
    const dateTimeString = `1970-01-01T${timeString}`;
    const formattedTime = TimeFormatter.format(new Date(dateTimeString));
    return formattedTime === timeString;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return false;
  }
};
