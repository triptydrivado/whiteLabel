import { SubmitHandler, useFormContext } from "react-hook-form";
// import { Search } from "lucide-react";
import { Link } from "react-router-dom";

// Custom Components
import BookingTypeTabs from "./components/booking-type-tabs";
import CitySearch from "./components/city-search";
import Duration from "./components/duration";
import BookingDate from "./components/booking-date";
import BookingTime from "./components/booking-time";
import Currency from "./components/currency";
import PassengerCount from "./components/passenger-count";

// Custom Types and Zod Schemas
import { type TBookingSchema } from "./schemas/booking-form";
import { Button } from "@/components/ui/button";

// const Separator = () => (
//   <div className="separator mx-4 h-10 w-px bg-[#D3D3D3]" />
// );

const baseStyle = "input-base-style";
export default function DesktopBookingSearchForm() {
  const methods = useFormContext<TBookingSchema>();

  // Booking type tab: 'Oneway' | 'Hourly'
  const bookingType = methods.watch("bookingType");

  const handleSubmit: SubmitHandler<TBookingSchema> = (data) => {
    console.log(data);
    // TODO: add api
  };

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
        <Button className="w-full shrink-0 bg-[var(--brand-btn-bg)] text-[var(--brand-btn-text)]">
          <div className="rounded-lg p-[0.625rem]">
            <Link to="/search-results" state={{ tripType: "oneway" }}>
              Search
            </Link>
          </div>
        </Button>
      </div>
    </form>
  );
}
