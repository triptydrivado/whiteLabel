import { useEffect } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";

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
import { useLocation } from "react-router-dom";

const baseStyle = "input-base-style";
export default function DesktopBookingSearchForm() {
  const methods = useFormContext<TBookingSchema>();

  // Booking type tab: 'Oneway' | 'Hourly'
  const bookingType = methods.watch("bookingType");

  console.log("form", methods.getValues());

  const handleSubmit: SubmitHandler<TBookingSchema> = async (data) => {
    // console.log("data -->", data);
    // add api

    const BASE_URL = import.meta.env.VITE_DRIVADO_API;

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
      const payload = {
        BookingDetails: {
          sourceLat: data.fromLatLong.lat.toString(),
          sourceLng: data.fromLatLong.lng.toString(),
          destinationLat: data.toLatLong.lat.toString(),
          destinationLng: data.toLatLong.lng.toString(),
          sourcePlaceName: data.from.mainText,
          destinationPlaceName: data.from.secondaryText,
          date: format(data.date, "yyyy-MM-dd"),
          time: formatToHHMM(data.time),
          passenger: data.pax,
        },
      };

      console.log("submitting data-------->", data);

      //   // fetch data
      const response = await fetch(
        `${BASE_URL}/whiteLeveling/searchIdGenOneWayWL?email=techsupport10@drivado.com`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey: import.meta.env.VITE_DRIVADO_KEY,
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      console.log("response ---->", result);

      const parseResult = z.object({ sId: z.string() }).safeParse(result);

      if (!parseResult.success) {
        console.log("Error", parseResult.error);
        throw new Error("data not found");
      }

      console.log("Data submitted successfully:", result);

      //   // local storage set Item
      localStorage.setItem("validatedData", JSON.stringify(parseResult.data));

      // console.log("Data saved to localStorage");
    } catch (error) {
      console.error("Submission error:", error);
    }

    console.log("saved in local storage", "validatedData");

    // localStorage.setItem("test", "Hello, World!");
    // console.log(localStorage.getItem("test"));
  };

  const location = useLocation();
  const tripType = location.state?.tripType ?? "oneway";

  useEffect(() => {
    if (tripType) {
      localStorage.setItem("tripType", tripType);
    }
  }, [tripType]);

  // const email = import.meta.env.VITE_DRIVADO_Email;

  // const BASE_URL = import.meta.env.VITE_DRIVADO_API;

  const email = "techsupport10@drivado.com";
  const apiKey = "mBk3Kyo17PUFVSUgj72c6K7tNiHDu3";
  const BASE_URL = "https://testapi.drivado.com/api/v1";

  useEffect(() => {
    const storedTripType = localStorage.getItem("tripType") ?? "";

    const searchId =
      storedTripType === "hourly" ? "WL-ZFU972OE-HR" : "WL-EUEWEHCB-OW"; // default for oneway

    const endpoint =
      storedTripType === "hourly"
        ? `${BASE_URL}/whiteLeveling/vehiclesWithPriceHourly_WL?searchId=${searchId}&email=${email}`
        : `${BASE_URL}/whiteLeveling/vehiclesWithPriceOW_WL?email=${email}&searchId=${searchId}`;

    const fetchVehicles = async () => {
      try {
        const response = await fetch(endpoint, {
          headers: {
            apiKey: apiKey,
          },
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`API Error ${response.status}: ${text}`);
        }

        const vehicleData = await response.json();
        localStorage.setItem("vehicleList", JSON.stringify(vehicleData));
        console.log(vehicleData);
      } catch (error) {
        console.error("Fetch vehicle list error:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <form
      onSubmit={methods.handleSubmit(handleSubmit)}
      className="[container:inline-size]"
    >
      {/* Book Mark Section */}
      <div className="w-96 items-center justify-between space-y-2 rounded-2xl bg-white px-[0.625rem] py-[0.625rem] text-black shadow-[0px_5px_10px_0px_rgba(89,27,27,0.05)] xl:px-3 xl:pt-3">
        <div className="">
          <BookingTypeTabs className="relative" />
        </div>

        {/* From */}
        <>
          <CitySearch
            label="from"
            name="from"
            baseStyle={baseStyle}
            className="flex-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 transition-[width] duration-500 xl:rounded-lg"
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
          <Button className="w-full shrink-0 bg-[var(--brand-theme-color)] text-[var(--brand-hover-btn-text)]">
            <div className="rounded-lg p-[0.625rem]">
              {/* <Link to="/search-results" state={{ tripType: "oneway" }}> */}
              Search
              {/* </Link> */}
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
}
