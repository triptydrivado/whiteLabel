// import COUNTRY_CODES from "@/constant/utils/CURRENCIES";
// import { min } from "date-fns";
import { z } from "zod";
// export const PASSENGER-DETAILS =
// const passengerDetails = z.
export const PASSENGER_SALUTATIONS = [
  "Mr.",
  "Mrs.",
  "Ms.",
  "Dr.",
  "Prof.",
  "H.E.",
] as const;
// export const salutationSchema = z.enum(PASSENGER_SALUTATIONS);
export const passengerDetailsSchema = z.object({
  // isPassenger: z
  //   .string()
  //   .refine((data) => data === "true" || data === "false")
  //   .transform((data) => {
  //     return data === "true" ? true : false;
  //   }),
  salutation: z.enum(PASSENGER_SALUTATIONS),
  firstName: z.string().min(3, "Enter at least 3 characters"),
  lastName: z.string().min(3, "Enter at least 3 characters"),
  referenceNumber:z.string().min(5,"Enter atleast 5 numbers"),
  // countryCode: z
  //   .string()
  //   .transform((data) =>
  //     COUNTRY_CODES.findIndex((country) => country.value === data),
  //   )
  //   .refine((data) => data !== -1)
  //   .transform((data) => COUNTRY_CODES[data].value),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter valid phone number",
  }),
  email: z.string().email("Email ID must be valid"),
  flightNumber: z
    .string()
    .refine(
      (data) => data.length >= 3 || data.length === 0,
      "Enter valid flight number",
    ),

  splRequest: z
    .string()
    .refine(
      (data) => data.length >= 3 || data.length === 0,
      "Enter your special request",
    ),

  consent: z.boolean().refine((data) => !!data),
});

export type TPassengerDetails = z.infer<typeof passengerDetailsSchema>;
export type TSalutations = TPassengerDetails["salutation"];

export const PASSENGER_DEFAULT_VALUES: Readonly<TPassengerDetails> = {
  // isPassenger: true,
  salutation: "Mr.",
  firstName: "",
  lastName: "",
  // countryCode: "",
  contactNumber: "",
  email: "",
  referenceNumber:"",
  flightNumber: "",
  splRequest: "",
  consent: false,
};

export type PassengerDetailsKey = keyof TPassengerDetails;
