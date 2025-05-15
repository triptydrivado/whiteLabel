// import { useCallback, useRef } from "react";
// import { API, KEY, EMAIL } from "./env";

// export interface Place {
//   _id: string;
//   name: string;
//   category?: "airport" | "hotel" | string;
//   lat: string;
//   lng: string;
//   cityName?: string;
//   country?: string;
// }

// export interface VehiclePrice {
//   price: string;
//   currency: string;
// }

// export interface RazorpayResponse {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// }

// export const debugEnv = () => {
//   console.group("Drivado ENV");
//   console.log("API  :", API || " missing");
//   console.log("KEY  :", KEY ? " set" : " missing");
//   console.log("EMAIL:", EMAIL || " missing");
//   console.groupEnd();
// };

// export interface BookingResponse {
//   success: boolean;
//   message: string;
//   bookingId?: string;
//   data?: Record<string, unknown> | null;
// }

// export interface PassengerDetails {
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;
//   country: string;
//   dial_code: string;
//   flightOrTrain: string;
//   reference: string;
//   specialRequest: string;
// }

// export interface Vehicle {
//   id: string;
//   vehicleName: string;
//   vehicleType: string;
//   description: string;
//   price: number | string;
//   image: string;
//   unit: string;
//   passengeCount: number;
//   luggageCount: number;
// }

// export interface VehiclePriceResponse {
//   success: true;
//   km: number | string;
//   duration: string;
//   vehicleWithPriceArray: Vehicle[];
// }

// export interface BookingDetailsOneWay {
//   sourceLat: string;
//   sourceLng: string;
//   sourcePlaceName: string;
//   destinationLat: string;
//   destinationLng: string;
//   destinationPlaceName: string;
//   date: string; // yyyy-mm-dd
//   time: string; // hh:mm (24h)
//   passenger: number;
//   currency?: string;
// }

// export interface BookingDetailsHourly {
//   sourceLat: string;
//   sourceLng: string;
//   sourcePlaceName: string;
//   date: string; // yyyy-mm-dd
//   time: string; // hh:mm (24h)
//   hour: string; // 1-12
//   passenger: number;
//   currency?: string;
// }

// export function usePlaceSearch() {
//   const timer = useRef<ReturnType<typeof setTimeout>>();

//   return useCallback((q: string, cb: (arr: Place[]) => void) => {
//     clearTimeout(timer.current);

//     if (q.trim().length < 3) {
//       cb([]);
//       return;
//     }

//     timer.current = setTimeout(async () => {
//       try {
//         const url =
//           `${API}/api/apisearchPlacesByName` +
//           `?placeName=${encodeURIComponent(q)}` +
//           `&email=${encodeURIComponent(EMAIL)}`;

//         const res = await fetch(url, { headers: { apikey: KEY } });
//         const json = (await res.json()) as { data?: Place[] };
//         cb(json.data ?? []);
//       } catch {
//         cb([]);
//       }
//     }, 400);
//   }, []);
// }

// export async function generateIdOneway(
//   booking: BookingDetailsOneWay
// ): Promise<{ sId: string }> {
//   const url = `${API}/whiteLeveling/searchIdGenOneWayWL?email=${EMAIL}`;
//   const res = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", apikey: KEY },
//     body: JSON.stringify({ BookingDetails: booking }),
//   });

//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }

// export interface VehiclesOneWay {
//   success: boolean;
//   km: number;
//   duration: string;
//   vehicleWithPriceArray: Vehicle[];
// }

// export async function getVehiclesOneway(
//   sId: string
// ): Promise<VehiclePriceResponse> {
//   const url =
//     `${API}/whiteLeveling/vehiclesWithPriceOW_WL` +
//     `?email=${EMAIL}&searchId=${encodeURIComponent(sId)}`;

//   return fetch(url, { headers: { apikey: KEY } }).then((r) =>
//     r.ok ? r.json() : Promise.reject(new Error(r.statusText))
//   );
// }

// export async function generateIdHourly(
//   booking: BookingDetailsHourly
// ): Promise<{ sId: string }> {
//   const url = `${API}/whiteLeveling/searchIdGenHourlyWL?email=${EMAIL}`;

//   const res = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", apikey: KEY },
//     body: JSON.stringify({ BookingDetails: booking }),
//   });

//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }

// export interface VehiclesHourly {
//   success: boolean;
//   km: string; // "120 km"
//   duration: string; // "6 hours"
//   vehicleWithPriceArray: Vehicle[];
// }

// export async function getVehiclesHourly(
//   sId: string
// ): Promise<VehiclePriceResponse> {
//   const url =
//     `${API}/whiteLeveling/vehiclesWithPriceHourly_WL` +
//     `?searchId=${encodeURIComponent(sId)}` +
//     `&email=${EMAIL}`;

//   return fetch(url, { headers: { apikey: KEY } }).then((r) =>
//     r.ok ? r.json() : Promise.reject(new Error(r.statusText))
//   );
// }

// export async function completeOnewayBooking(
//   searchId: string,
//   vehicleId: string,
//   vehiclePrice: VehiclePrice,
//   passengerDetails: PassengerDetails,
//   paymentResponse?: RazorpayResponse
// ): Promise<BookingResponse> {
//   if (!searchId) {
//     throw new Error("Search ID is required for one-way booking");
//   }

//   if (!vehicleId) {
//     throw new Error("Vehicle ID is required for one-way booking");
//   }

//   const url = `${API}/whiteLeveling/bookOnewayWL?searchId=${encodeURIComponent(
//     searchId
//   )}&email=${encodeURIComponent(EMAIL)}`;

//   // Prepare the request body according to API format
//   const requestBody = {
//     vehicleId,
//     vehiclePrice,
//     passengerDetails,
//     // Include payment information if available
//     paymentInfo: paymentResponse
//       ? {
//           paymentId: paymentResponse.razorpay_payment_id,
//           orderId: paymentResponse.razorpay_order_id,
//           signature: paymentResponse.razorpay_signature,
//           method: "razorpay",
//         }
//       : undefined,
//   };

//   console.log(
//     "One-way booking request body:",
//     JSON.stringify(requestBody, null, 2)
//   );

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         apikey: KEY,
//       },
//       body: JSON.stringify(requestBody),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(errorText || "Failed to complete one-way booking");
//     }

//     const responseData = await response.json();
//     console.log("One-way booking response:", responseData);

//     // Normalize the response format
//     return {
//       success:
//         responseData.success ||
//         (responseData.msg?.includes("success") ? true : false),
//       message: responseData.message || responseData.msg || "",
//       bookingId:
//         responseData.bookingId ||
//         (typeof responseData.data === "object"
//           ? responseData.data?.bookingId
//           : undefined),
//       data: responseData.data,
//     };
//   } catch (error) {
//     console.error("Error completing one-way booking:", error);
//     throw error;
//   }
// }

// export async function completeHourlyBooking(
//   searchId: string,
//   vehicleId: string,
//   passengerDetails: PassengerDetails,
//   paymentResponse?: RazorpayResponse
// ): Promise<BookingResponse> {
//   if (!searchId) {
//     throw new Error("Search ID is required for hourly booking");
//   }

//   if (!vehicleId) {
//     throw new Error("Vehicle ID is required for hourly booking");
//   }

//   // The endpoint is bookHourlyWL according to your documentation
//   const url = `${API}/whiteLeveling/bookHourlyWL?searchId=${encodeURIComponent(
//     searchId
//   )}&email=${encodeURIComponent(EMAIL)}`;

//   // Prepare the request body according to API format
//   const requestBody = {
//     vehicleId,
//     passengerDetails,
//     // Include payment information if available
//     paymentInfo: paymentResponse
//       ? {
//           paymentId: paymentResponse.razorpay_payment_id,
//           orderId: paymentResponse.razorpay_order_id,
//           signature: paymentResponse.razorpay_signature,
//           method: "razorpay",
//         }
//       : undefined,
//   };

//   console.log(
//     "Hourly booking request body:",
//     JSON.stringify(requestBody, null, 2)
//   );

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         apikey: KEY,
//       },
//       body: JSON.stringify(requestBody),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(errorText || "Failed to complete hourly booking");
//     }

//     const responseData = await response.json();
//     console.log("Hourly booking response:", responseData);

//     // Normalize the response format
//     return {
//       success:
//         responseData.success ||
//         (responseData.msg?.includes("success") ? true : false),
//       message: responseData.message || responseData.msg || "",
//       bookingId:
//         responseData.bookingId ||
//         (typeof responseData.data === "object"
//           ? responseData.data?.bookingId
//           : undefined),
//       data: responseData.data,
//     };
//   } catch (error) {
//     console.error("Error completing hourly booking:", error);
//     throw error;
//   }
// }

// if (import.meta.env.DEV) {
//   console.log("Widget constants", { API, KEY, EMAIL });
// }

// const viteEnv =
//   typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : {};

// export const API =
//   // injected by DrivadoLoader in production
//   (window as any).DRIVADO_API ||
//   (window.parent as any)?.DRIVADO_API ||
//   viteEnv.VITE_DRIVADO_API ||
//   "";

// export const KEY =
//   (window as any).DRIVADO_KEY ||
//   (window.parent as any)?.DRIVADO_KEY ||
//   viteEnv.VITE_DRIVADO_KEY ||
//   "";

// export const EMAIL =
//   (window as any).DRIVADO_EMAIL ||
//   (window.parent as any)?.DRIVADO_EMAIL ||
//   viteEnv.VITE_DRIVADO_EMAIL ||
//   "";

// export const debugEnv = () => {
//   console.group("Drivado ENV");
//   console.log("API  :", API || " missing");
//   console.log("KEY  :", KEY ? " set" : " missing");
//   console.log("EMAIL:", EMAIL || " missing");
//   console.groupEnd();
// };
