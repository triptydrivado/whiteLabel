import { useCallback, useRef } from "react";
import { API, KEY, EMAIL } from "@/config/api";

export interface Place {
  _id: string;
  name: string;
  category?: "airport" | "hotel" | string;
  lat: string;
  lng: string;
  cityName?: string;
  country?: string;
}

export interface Vehicle {
  id: string;
  vehicleName: string;
  vehicleType: string;
  description: string;
  price: number | string;
  image: string;
  unit: string;
  passengeCount: number;
  luggageCount: number;
}

export interface VehiclePriceResponse {
  success: true;
  km: number | string;
  duration: string;
  vehicleWithPriceArray: Vehicle[];
}

export interface BookingDetailsOneWay {
  sourceLat: string;
  sourceLng: string;
  sourcePlaceName: string;
  destinationLat: string;
  destinationLng: string;
  destinationPlaceName: string;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm (24h)
  passenger: number;
}

export interface BookingDetailsHourly {
  sourceLat: string;
  sourceLng: string;
  sourcePlaceName: string;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm (24h)
  hour: string; // 1-12
  passenger: number;
}

export function usePlaceSearch() {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return useCallback((q: string, cb: (arr: Place[]) => void) => {
    clearTimeout(timer.current);

    if (q.trim().length < 3) {
      cb([]);
      return;
    }

    timer.current = setTimeout(async () => {
      try {
        const url =
          ${API}/api/apisearchPlacesByName +
          ?placeName=${encodeURIComponent(q)} +
          &email=${encodeURIComponent(EMAIL)};

        const res = await fetch(url, { headers: { apikey: KEY } });
        const json = (await res.json()) as { data?: Place[] };
        cb(json.data ?? []);
      } catch {
        cb([]);
      }
    }, 400);
  }, []);
}

export async function generateIdOneway(
  booking: BookingDetailsOneWay
): Promise<{ sId: string }> {
  const url = ${API}/api/searchIdGenerateOneway?email=${EMAIL};

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: KEY },
    body: JSON.stringify({ BookingDetails: booking }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export interface VehiclesOneWay {
  success: boolean;
  km: number;
  duration: string;
  vehicleWithPriceArray: Vehicle[];
}

export async function getVehiclesOneway(
  sId: string
): Promise<VehiclePriceResponse> {
  const url =
    ${API}/api/vehiclesWithPriceOneWay +
    ?email=${EMAIL}&searchId=${encodeURIComponent(sId)};

  return fetch(url, { headers: { apikey: KEY } }).then((r) =>
    r.ok ? r.json() : Promise.reject(new Error(r.statusText))
  );
}

export async function generateIdHourly(
  booking: BookingDetailsHourly
): Promise<{ sId: string }> {
  const url = ${API}/api/searchIdGenerateHourly?email=${EMAIL};

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: KEY },
    body: JSON.stringify({ BookingDetails: booking }),
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export interface VehiclesHourly {
  success: boolean;
  km: string; // "120 km"
  duration: string; // "6 hours"
  vehicleWithPriceArray: Vehicle[];
}

export function getVehiclesHourly(sId: string): Promise<VehiclePriceResponse> {
  const url =
    ${API}/api/vehiclesWithPriceHourly +
    ?searchId=${encodeURIComponent(sId)} +
    &email=${EMAIL};

  return fetch(url, { headers: { apikey: KEY } }).then((r) =>
    r.ok ? r.json() : Promise.reject(new Error(r.statusText))
  );
}

if (import.meta.env.DEV) {
  console.log("Widget constants", { API, KEY, EMAIL });
}