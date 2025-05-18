import { useEffect, useState } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import Popup from "@/components/ui/popup";
// Custom Components
import BookingTypeTabs from "./components/booking-type-tabs";
import CitySearch from "./components/city-search";
import Duration from "./components/duration";
import BookingDate from "./components/booking-date";
import BookingTime from "./components/booking-time";
import Currency from "./components/currency";
import PassengerCount from "./components/passenger-count";
import { z } from "zod";

// Custom Types and Zod Schemas
import { type TBookingSchema } from "./schemas/booking-form";
import { Button } from "@/components/ui/button";
import { format, parse } from "date-fns";
import { useNavigate } from "react-router-dom";

const baseStyle = "input-base-style";
export default function DesktopBookingSearchForm() {
  const methods = useFormContext<TBookingSchema>();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Booking type tab: 'Oneway' | 'Hourly'
  const bookingType = methods.watch("bookingType");

  console.log("form", methods.getValues());

  const handleSubmit: SubmitHandler<TBookingSchema> = async (data) => {
    setLoading(true);
    const bookingType = data.bookingType;

    const BASE_URL = import.meta.env.VITE_DRIVADO_API;
    const email = "techsupport10@drivado.com";
    const apiKey = import.meta.env.VITE_DRIVADO_KEY;

    function formatToHHMM(timeString: string): string {
      const parsedTime = parse(
        timeString,
        timeString.includes(":") && timeString.split(":").length === 3
          ? "HH:mm:ss"
          : "HH:mm",
        new Date(),
      );
      return format(parsedTime, "HH:mm");
    }

    try {
      const payload: Record<string, any> = {
        BookingDetails: {
          sourceLat: data.fromLatLong.lat.toString(),
          sourceLng: data.fromLatLong.lng.toString(),
          sourcePlaceName: data.from.mainText,
          date: format(data.date, "yyyy-MM-dd"),
          time: formatToHHMM(data.time),
          passenger: data.pax,
          currency: data.currency.currency,
        },
      };

      if (bookingType === "oneway") {
        payload.BookingDetails.destinationLat = data.toLatLong.lat.toString();
        payload.BookingDetails.destinationLng = data.toLatLong.lng.toString();
        payload.BookingDetails.destinationPlaceName = data.to.secondaryText;
      } else if (bookingType === "hourly") {
        payload.BookingDetails.hour = data.duration.toString();
      }

      console.log("submitting data-------->", data);

      const searchIdEndpoint =
        bookingType === "oneway"
          ? `${BASE_URL}/whiteLeveling/searchIdGenOneWayWL?email=${email}`
          : `${BASE_URL}/whiteLeveling/searchIdGenHourlyWL?email=${email}`;

      const response = await fetch(searchIdEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: apiKey,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("searchId response ---->", result);

      const parseResult = z.object({ sId: z.string() }).safeParse(result);
      if (!parseResult.success) {
        console.log("Error", parseResult.error);
        throw new Error("Search ID not found");
      }

      const sId = parseResult.data.sId;

      localStorage.setItem(
        "validatedData",
        JSON.stringify({ sId, bookingType }),
      );
      localStorage.setItem("bookingSearchForm", JSON.stringify(data));

      const vehicleEndpoint =
        bookingType === "hourly"
          ? `${BASE_URL}/whiteLeveling/vehiclesWithPriceHourly_WL?searchId=${sId}&email=${email}`
          : `${BASE_URL}/whiteLeveling/vehiclesWithPriceOW_WL?searchId=${sId}&email=${email}`;

      const vehicleResponse = await fetch(vehicleEndpoint, {
        headers: {
          apiKey: apiKey,
        },
      });

      if (!vehicleResponse.ok) {
        const errorBody = await vehicleResponse.json();
        throw new Error(` ${errorBody.error}`);
      }

      const vehicleData = await vehicleResponse.json();
      localStorage.setItem("vehicleList", JSON.stringify(vehicleData));
      console.log("Fetched vehicle list:", vehicleData);
      navigate("/select-vehicle");
    } catch (error: any) {
      let message = "Something went wrong!";
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "object" && error?.message) {
        message = String(error.message);
      }
      setErrorMessage(message);
      setShowPopup(true);
      console.error("Submission error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // const email = import.meta.env.VITE_DRIVADO_Email;

  // const BASE_URL = import.meta.env.VITE_DRIVADO_API;

  useEffect(() => {
    const shouldRefresh = localStorage.getItem("silentRefresh");

    if (location.pathname === "/select-vehicle" && shouldRefresh === "true") {
      console.log("Silent refresh triggered");

      // Do whatever silent refresh logic you want:
      // - Fetch vehicles again
      // - Force component updates
      // - Reset some cached state

      // ✅ Then reset the flag
      localStorage.removeItem("silentRefresh");
    }
  }, [location.pathname]);

  return (
    <form
      onSubmit={methods.handleSubmit(handleSubmit)}
      className="mx-auto w-full max-w-full flex-1 px-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
    >
      {/* Book Mark Section */}
      <div className="w-76 items-center justify-between space-y-2 rounded-2xl bg-white px-[0.625rem] py-[0.625rem] text-black shadow-[0px_5px_10px_0px_rgba(89,27,27,0.05)] xl:px-3 xl:pt-3">
        <div className="">
          <BookingTypeTabs className="relative" />
        </div>

        {/* From */}
        <>
          <CitySearch
            label="from"
            name="from"
            baseStyle={baseStyle}
            className="w-full flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
          />
        </>

        {/* To */}
        {bookingType === "oneway" && (
          <>
            <CitySearch
              label="to"
              name="to"
              baseStyle={baseStyle}
              className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
            />
          </>
        )}

        {/* Duration */}
        {bookingType === "hourly" && (
          <>
            <Duration
              label="Duration"
              name="duration"
              baseStyle={baseStyle}
              className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
            />
          </>
        )}

        {/* Booking Date */}
        <>
          <BookingDate
            label="date"
            name="date"
            baseStyle={baseStyle}
            className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
          />
        </>

        {/* Booking Time */}
        <>
          <BookingTime
            label="time"
            name="time"
            baseStyle={baseStyle}
            className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
          />
        </>

        {/* Currency */}
        <>
          <Currency
            label="currency"
            name="currency"
            baseStyle={baseStyle}
            className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
          />
        </>

        {/* Passenger Count */}
        <>
          <PassengerCount
            label="pax"
            name="pax"
            baseStyle={baseStyle}
            className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
          />
        </>

        {/* Search Button */}
        <div className="pt-3">
          <Button
            disabled={loading}
            className="w-full shrink-0 bg-[var(--brand-theme-color)] text-[var(--brand-hover-btn-text)]"
          >
            <div className="rounded-lg p-[0.625rem]">
              {/* <Link to="/search-results" state={{ tripType: "oneway" }}> */}
              {loading ? "Searching..." : "Search"}
              {/* </Link> */}
            </div>
          </Button>
        </div>
      </div>
      {showPopup && (
        <Popup message={errorMessage} onClose={() => setShowPopup(false)} />
      )}
    </form>
  );
}
