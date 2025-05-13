import { z } from "zod";

// Location Schema
export const searchLocationSchema = z.object({
  _id: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  lat: z.string().min(1),
  lng: z.string().min(1),
  iata: z.string().min(1),
  cityName: z.string().min(1),
  cityId: z.string().min(1),
  country: z.string().min(1),

  description: z.string().min(1),
  place_id: z.string().min(1),
  structured_formatting: z.object({
    main_text: z.string().min(1),
    secondary_text: z.string().min(1).optional(),
  }),
});

// Schema for Api Response
export const searchLocationApiSchema = z.array(searchLocationSchema);

// Inferred Types
export type TSearchLocation = z.infer<typeof searchLocationSchema>;
export type TSearchLocationApi = z.infer<typeof searchLocationApiSchema>;

// Default value
export const DEFAULT_SEARCH_LOCATION: TSearchLocation = {
  _id: "",
  name: "",
  category: "",
  lat: "",
  lng: "",
  iata: "",
  cityName: "",
  cityId: "",
  country: "",

  description: "",
  place_id: "",
  structured_formatting: {
    main_text: "",
    secondary_text: "",
  },
};
