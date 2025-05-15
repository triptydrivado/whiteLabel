import { z } from "zod";

// Location Schema
export const searchLocationSchema = z.object({
  _id: z.string().min(1),
  name: z.string().min(1),
  lat: z.string().min(1),
  lng: z.string().min(1),

  category: z.string().min(1),
  // giataId: z.string().min(1),
  cityName: z.string().min(1),
  cityId: z.string().min(1),
  country: z.string().min(1),

  // address: z.object({
  //   addressOne: z.string(),
  //   addressTwo: z.string(),
  //   addressThree: z.string().optional(),
  //   street: z.string(),
  //   streetNumber: z.string(),
  //   cityName: z.string(),
  //   postalCode: z.string(),
  // }),
});

// Schema for Api Response
export const searchLocationApiSchema = z.object({
  data: z.array(searchLocationSchema),
});

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
  // giataId: "",
  cityName: "",
  cityId: "",
  country: "",
  // address: {
  //   addressOne: "",
  //   addressTwo: "",
  //   cityName: "",
  //   postalCode: "",
  //   street: "",
  //   streetNumber: "",
  //   addressThree: "",
  // },
};
