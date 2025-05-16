import { z } from "zod";

// zod Schemas and constants
import { DURATIONS } from "@/lib/DURATION";
import { countrySchema } from "@/lib/CURRENCIES";
import { DEFAULT_BOOKING, BOOKING_TYPE_VALUES } from "./booking-tabs";
import {
  searchLocationSchema as citySearch,
  DEFAULT_SEARCH_LOCATION,
} from "./search-location";

const commonSchema = z.object({
  from: citySearch,
  time: z.string(),
  date: z.date(),
  currency: countrySchema,
  pax: z
    .number()
    .positive()
    .refine((data) => data !== 0),

  // Additional Attributes for 2nd API Call
  fromLatLong: z.object({
    lat: z.number(),
    lng: z.number(),
    isWithinRegion: z.boolean(),
  }),
  toLatLong: z.object({
    lat: z.number(),
    lng: z.number(),
    isWithinRegion: z.boolean(),
  }),
});

const onewaySchema = z.object({
  bookingType: z.literal(BOOKING_TYPE_VALUES[0]),
  to: citySearch,
});

const hourlySchema = z.object({
  bookingType: z.literal(BOOKING_TYPE_VALUES[1]),
  duration: z
    .number()
    // .max(24, { message: "Duration cannot exceed 24 hours" })
    .refine((data) => {
      const idx = DURATIONS.findIndex((DURATION) => DURATION.hours === data);
      return idx !== -1;
    }),
});

const discriminatedSchema = z.discriminatedUnion("bookingType", [
  onewaySchema,
  hourlySchema,
]);

export const bookingSchema = commonSchema.and(discriminatedSchema);

export type TBookingSchema = z.infer<typeof bookingSchema>;
export const BOOKING_DEFAULT_VALUES: Partial<TBookingSchema> = {
  bookingType: DEFAULT_BOOKING,
  from: DEFAULT_SEARCH_LOCATION,
  to: DEFAULT_SEARCH_LOCATION,
  time: undefined,
  date: undefined,
  currency: {
    abbreviation: "",
    country: "",
    currency: "",
    value: "",
  },
  pax: 1,

  fromLatLong: {
    lat: 0,
    lng: 0,
    isWithinRegion: false,
  },
  toLatLong: {
    lat: 0,
    lng: 0,
    isWithinRegion: false,
  },
};
