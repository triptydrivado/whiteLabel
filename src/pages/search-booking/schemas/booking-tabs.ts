import { z } from "zod";

export const BOOKING_TYPE_VALUES = ["oneway", "hourly"] as const;
export const bookingType = z.enum(BOOKING_TYPE_VALUES);
export type TBookingType = z.infer<typeof bookingType>;
export const DEFAULT_BOOKING = BOOKING_TYPE_VALUES[0];
