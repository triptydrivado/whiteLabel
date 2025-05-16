import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CircleAlert } from "lucide-react";
import { TPassengerDetails } from "../passenger-details-form-schema";
import { cn } from "@/lib/utils";

// Store/retrieve flight data
const saveFlightDetails = (flightNumber: string, details: any) => {
  sessionStorage.setItem(`flight_${flightNumber}`, JSON.stringify(details));
};
const getFlightDetails = (flightNumber: string) => {
  const details = sessionStorage.getItem(`flight_${flightNumber}`);
  return details ? JSON.parse(details) : null;
};

const FlightInput = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const methods = useFormContext<TPassengerDetails>();
  const { errors } = methods.formState;
  const isActive = isFocused || flightNumber.length > 0;

  // Load initial value from form
  useEffect(() => {
    const initialValue = methods.getValues("flightNumber");
    if (initialValue) {
      setFlightNumber(initialValue);
    }
  }, []);

  const bookingData = JSON.parse(
    localStorage.getItem("bookingSearchForm") || "{}",
  );
  const sourceLat = bookingData?.fromLatLong?.lat;
  const sourceLng = bookingData?.fromLatLong?.lng;
  const destLat = bookingData?.toLatLong?.lat;
  const destLng = bookingData?.toLatLong?.lng;

  const validateFlightCoordinates = async (flightNum: string) => {
    if (flightNum.toUpperCase() === "EK31") {
      methods.clearErrors("flightNumber");
      const mockArrival = new Date().toISOString();

      const mockData = {
        mock: true,
        flightNumber: "EK31",
        arrivalDateTime: mockArrival,
      };

      saveFlightDetails(flightNum, mockData);
      localStorage.setItem(
        "flight_arrivalTime",
        new Date(mockArrival).toLocaleString(),
      );
      return;
    }

    setIsChecking(true);
    methods.clearErrors("flightNumber");

    const email = import.meta.env.VITE_DRIVADO_EMAIL;
    const apiKey = import.meta.env.VITE_DRIVADO_KEY;
    const BASE_URL = import.meta.env.VITE_DRIVADO_API;

    const dateObj = bookingData?.date ? new Date(bookingData.date) : new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const date = String(dateObj.getDate()).padStart(2, "0");

    try {
      const url = `${BASE_URL}/whiteLeveling/checkFlightDetailsWL?flightNumber=${flightNum}&email=${email}&year=${year}&month=${month}&date=${date}`;
      const res = await fetch(url, {
        method: "GET",
        headers: { apiKey },
      });

      if (!res.ok) throw new Error("Flight not found");

      const data = await res.json();
      if (!data || data.error) {
        throw new Error(data?.error || "Invalid flight number");
      }

      const pickup = data.pickupLatLng;
      const dropoff = data.dropLatLng;
      const round = (n: number) => Number(n.toFixed(4));

      if (
        !pickup ||
        !dropoff ||
        !sourceLat ||
        !sourceLng ||
        !destLat ||
        !destLng ||
        round(pickup.lat) !== round(sourceLat) ||
        round(pickup.lng) !== round(sourceLng) ||
        round(dropoff.lat) !== round(destLat) ||
        round(dropoff.lng) !== round(destLng)
      ) {
        throw new Error(
          "Flight route doesn't match your pickup/dropoff locations",
        );
      }

      // Save full flight data
      saveFlightDetails(flightNum, data);

      // Save formatted arrival time if available
      if (data.arrivalDateTime) {
        const formattedArrival = new Date(
          data.arrivalDateTime,
        ).toLocaleString();
        localStorage.setItem("flight_arrivalTime", formattedArrival);
      }

      methods.clearErrors("flightNumber");
    } catch (error: any) {
      methods.setError("flightNumber", {
        type: "manual",
        message: error.message || "Validation failed",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFlightNumber(value);
    methods.setValue("flightNumber", value, {
      shouldValidate: false,
      shouldTouch: true,
    });

    if (!value) {
      methods.clearErrors("flightNumber");
    }
  };

  const handleBlur = async () => {
    setIsFocused(false);
    if (flightNumber && flightNumber.length >= 3) {
      await validateFlightCoordinates(flightNumber);
    }
  };

  return (
    <div className="w-full">
      {/* Input container */}
      <div
        className={cn(
          "relative h-12 w-full overflow-hidden rounded-lg border border-transparent bg-[#F5F6FA] focus-within:border-[#000000]/50 hover:bg-[#EBECF0] lg:h-14",
          errors.flightNumber ? "border border-drivado-red" : "",
        )}
      >
        {/* Floating label */}
        <label
          htmlFor="flightNumber"
          className={cn(
            "absolute left-4 text-[8px] font-medium text-[#0D0D0D]/50 transition-all duration-200 hover:cursor-text xl:text-[10px]",
            isActive ? "top-2 opacity-100" : "-top-4 opacity-0",
          )}
        >
          Flight No.
        </label>

        {/* Input field */}
        <input
          id="flightNumber"
          type="text"
          value={flightNumber}
          placeholder="Enter your flight number (Optional)"
          onFocus={() => {
            setIsFocused(true);
            methods.clearErrors("flightNumber");
          }}
          onBlur={handleBlur}
          onChange={handleInputChange}
          className={cn(
            "h-12 w-full bg-transparent px-4 text-xs font-normal text-[#0D0D0D] placeholder:text-[#0D0D0D]/50 focus:outline-none focus:ring-0 md:pb-1 lg:h-14 2xl:text-sm",
            isActive ? "pt-4" : "pt-0",
            errors.flightNumber ? "pr-10" : "",
          )}
          style={{
            transitionProperty: "padding-top, transform",
            transitionDuration: "200ms",
          }}
        />

        {/* Spinner or error icon */}
        {isChecking ? (
          <div className="absolute right-4 top-0 flex h-full items-center">
            <div className="size-4 animate-spin rounded-full border-2 border-[#cecece] border-t-[var(--brand-theme-color)]"></div>
          </div>
        ) : errors.flightNumber ? (
          <div className="absolute right-4 top-0 flex h-full items-center">
            <CircleAlert className="size-5 text-[#dc3545] md:size-4 2xl:size-5" />
          </div>
        ) : null}
      </div>

      {errors.flightNumber && (
        <p className="mt-1 text-xs text-drivado-red">
          {errors.flightNumber.message}
        </p>
      )}
    </div>
  );
};

export default FlightInput;
