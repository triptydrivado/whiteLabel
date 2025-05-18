import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { CircleAlert } from "lucide-react";
import { TPassengerDetails } from "../passenger-details-form-schema";
import { cn } from "@/lib/utils";
import FlightIcon from "@/assets/svgs/flightIcon";

// Save flight details
const saveFlightDetails = (flightNumber: string, details: any) => {
  sessionStorage.setItem(`flight_${flightNumber}`, JSON.stringify(details));
};

const FlightInput = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [arrivalTime, setArrivalTime] = useState<string | null>(null);

  const methods = useFormContext<TPassengerDetails>();
  const { errors } = methods.formState;
  const isActive = isFocused || flightNumber.length > 0;

  useEffect(() => {
    const initialValue = methods.getValues("flightNumber");
    if (initialValue) setFlightNumber(initialValue);
  }, []);

  useEffect(() => {
    if (arrivalTime) {
      localStorage.setItem("arrival time", arrivalTime);
    } else {
      localStorage.removeItem("arrival time");
    }
  }, [arrivalTime]);

  const booking = JSON.parse(localStorage.getItem("bookingSearchForm") || "{}");

  const validateFlightCoordinates = async (flightNum: string) => {
    setIsChecking(true);
    methods.clearErrors("flightNumber");

    const email = import.meta.env.VITE_DRIVADO_EMAIL;
    const apiKey = import.meta.env.VITE_DRIVADO_KEY;
    const BASE_URL = import.meta.env.VITE_DRIVADO_API;

    const dateObj = booking?.date ? new Date(booking.date) : new Date();
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
      if (!data || data.error || !data.scheduledFlights?.length) {
        throw new Error(data?.error || "Invalid flight number");
      }

      const flightInfo = data.scheduledFlights[0];
      const arrivalFsCode = flightInfo.arrivalAirportFsCode?.toUpperCase();
      const departureFsCode = flightInfo.departureAirportFsCode?.toUpperCase();

      const pickup = booking?.from?.placename?.toUpperCase() || "";
      const dropoff = booking?.to?.placename?.toUpperCase() || "";

      const includesAirport = (str: string) =>
        [
          "AIRPORT",
          "مَطَار",
          "AÉROPORT",
          "AEROPORTO",
          "AEROPUERTO",
          "FLUGHAFEN",
        ].some((word) => str.includes(word));

      const pickupHasAirport = includesAirport(pickup);
      const dropoffHasAirport = includesAirport(dropoff);

      if (
        pickupHasAirport &&
        departureFsCode &&
        !pickup.includes(departureFsCode)
      ) {
        throw new Error(
          "Pickup location must match the flight's departure airport.",
        );
      }

      if (
        dropoffHasAirport &&
        arrivalFsCode &&
        !dropoff.includes(arrivalFsCode)
      ) {
        throw new Error(
          "Dropoff location must match the flight's arrival airport.",
        );
      }

      saveFlightDetails(flightNum, flightInfo);

      if (flightInfo.arrivalTime) {
        const formatted = new Date(flightInfo.arrivalTime).toLocaleString();
        setArrivalTime(formatted);
      } else {
        setArrivalTime(null);
      }

      methods.clearErrors("flightNumber");
    } catch (error: any) {
      setArrivalTime(null);
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
      setArrivalTime(null);
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
      <div
        className={cn(
          "relative h-12 w-full overflow-hidden rounded-lg border border-transparent bg-[#F5F6FA] focus-within:border-[#000000]/50 hover:bg-[#EBECF0] lg:h-14",
          errors.flightNumber ? "border border-drivado-red" : "",
        )}
      >
        <label
          htmlFor="flightNumber"
          className={cn(
            "absolute left-4 text-[8px] font-medium text-[#0D0D0D]/50 transition-all duration-200 hover:cursor-text xl:text-[10px]",
            isActive ? "top-2 opacity-100" : "-top-4 opacity-0",
          )}
        >
          Flight No.
        </label>

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

      {!errors.flightNumber && arrivalTime && (
        <span className="mt-2 flex text-[10px] font-medium text-[#737373] 2xl:text-xs">
          <FlightIcon className="size-3 xl:size-4" />
          <p className="ml-1">Arrival:</p>
          <p className="ml-1 text-green-500">{arrivalTime}</p>
        </span>
      )}

      {errors.flightNumber && (
        <p className="mt-1 text-xs text-drivado-red">
          {errors.flightNumber.message}
        </p>
      )}
    </div>
  );
};

export default FlightInput;
