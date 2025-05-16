import { z } from "zod";

// Location Schema
export const searchLocationSchema = z.object({
  description: z.string().min(1),
  place_id: z.string().min(1),
  mainText: z.string().min(1),
  secondaryText: z.string().min(1),
});

// Schema for Api Response
export const searchLocationApiSchema = z.object({
  data: z.array(searchLocationSchema),
});

// Second API call Response
export const latLongSchema = z.object({
  data: z.object({
    lat: z.number(),
    lng: z.number(),

    time: z.string().time(),
    date: z.string().date(),
    isWithinRegion: z.boolean(),
  }),
});

// Inferred Types
export type TSearchLocation = z.infer<typeof searchLocationSchema>;
export type TSearchLocationApi = z.infer<typeof searchLocationApiSchema>;

// Default value
export const DEFAULT_SEARCH_LOCATION: TSearchLocation = {
  description: "",
  mainText: "",
  place_id: "",
  secondaryText: "",
};
