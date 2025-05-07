import { z } from "zod";

// Location Schema
export const searchLocationSchema = z.object({
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
  description: "",
  place_id: "",
  structured_formatting: {
    main_text: "",
    secondary_text: "",
  },
};
