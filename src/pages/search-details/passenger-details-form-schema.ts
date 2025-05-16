
import { z } from "zod";

export const PASSENGER_SALUTATIONS = [
  "Mr.",
  "Mrs.",
  "Ms.",
  "Dr.",
  "Prof.",
  "H.E.",
] as const;

// Main schema for passenger details
export const passengerDetailsSchema = z.object({
  salutation: z.enum(PASSENGER_SALUTATIONS),
  firstName: z.string().min(3, "Enter at least 3 characters"),
  lastName: z.string().min(3, "Enter at least 3 characters"),
  referenceNumber: z.string().min(5, "Enter atleast 5 numbers"),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter valid phone number",
  }),
  email: z.string().email("Email ID must be valid"),
  flightNumber: z
    .string()
    .refine(
      (data) => data.length >= 3 || data.length === 0,
      "Enter valid flight number",
    )
    .optional(),
  splRequest: z
    .string()
    .refine(
      (data) => data.length >= 3 || data.length === 0,
      "Enter your special request",
    )
    .optional(),
  consent: z.boolean().refine((data) => !!data),
});

// Extended schema for internal use that includes flight details
export const extendedPassengerDetailsSchema = passengerDetailsSchema.extend({
  _flightDetails: z.any().optional(),  // For storing flight API response data
});

export type TPassengerDetails = z.infer<typeof passengerDetailsSchema>;
export type TExtendedPassengerDetails = z.infer<typeof extendedPassengerDetailsSchema>;
export type TSalutations = TPassengerDetails["salutation"];

export const PASSENGER_DEFAULT_VALUES: Readonly<TPassengerDetails> = {
  salutation: "Mr.",
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  referenceNumber: "",
  flightNumber: "",
  splRequest: "",
  consent: false,
};

export type PassengerDetailsKey = keyof TPassengerDetails;