export const DURATIONS: ReadonlyArray<Duration> = Array.from(
  { length: 24 },
  (_, i) => ({ hours: i + 1, equivalentKm: (i + 1) * 20 }),
);

export type Duration = {
  hours: number;
  equivalentKm: number;
};
