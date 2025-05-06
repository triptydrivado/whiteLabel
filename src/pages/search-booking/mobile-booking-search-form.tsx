import React from "react";
import { useFormContext, type SubmitHandler } from "react-hook-form";
import { X, Search } from "lucide-react";

// Custom Components
import BookingTypeTabs from "./components/booking-type-tabs";
import CitySearch from "./components/city-search";
import Duration from "./components/duration";
import BookingDate from "./components/booking-date";
import BookingTime from "./components/booking-time";
import Currency from "./components/currency";
import PassengerCount from "./components/passenger-count";

// Shadcn Primitives
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

// Custom Types and Zod Schemas
import {
  type TBookingSchema,
  BOOKING_DEFAULT_VALUES,
} from "./schemas/booking-form";

const baseStyle =
  "relative rounded-2xl border border-[#eeeeee] bg-white px-4 py-6 focus-within:border-gray-300 focus-within:bg-gray-100 focus-within:outline-none md:border-2 md:px-8 md:h-[6.25rem] md:rounded-[2rem]";

export default function MobileBookingSearchForm() {
  const methods = useFormContext<TBookingSchema>();

  const bookingType = methods.watch("bookingType");

  const handleSubmit: SubmitHandler<TBookingSchema> = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    return () => {
      methods.reset();
    };
  }, []);

  return (
    <form
      onSubmit={methods.handleSubmit(handleSubmit)}
      onReset={() => {
        methods.reset(BOOKING_DEFAULT_VALUES);
      }}
      className="grid h-full grid-rows-[auto_1fr_auto] gap-y-2 pt-[1.625rem] scrollbar-none"
    >
      {/* Top Section */}
      <div className="flex items-center justify-between gap-x-[2.375rem] px-6 md:gap-x-[4.625rem] md:px-10">
        <SheetClose className="flex size-8 items-center justify-center rounded-full border bg-white p-px hover:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-drivado-red md:size-[3.890625rem]">
          <X className="size-3 text-black md:size-6" />
          <span className="sr-only">Close</span>
        </SheetClose>

        <BookingTypeTabs />
      </div>

      {/* Middle Section */}
      <div className="mx-6 mt-2 space-y-[0.625rem] overflow-scroll rounded-2xl scrollbar-none md:mx-10 md:rounded-[2rem]">
        <CitySearch
          label="from"
          name="from"
          baseStyle={baseStyle}
          className=""
        />
        {bookingType === "oneway" && (
          <CitySearch
            label="to"
            name="to"
            baseStyle={baseStyle}
            className="relative"
          />
        )}
        {bookingType === "hourly" && (
          <Duration
            label="Duration"
            name="duration"
            baseStyle={baseStyle}
            className=""
          />
        )}
        <BookingTime
          label="time"
          name="time"
          baseStyle={baseStyle}
          className=""
        />
        <BookingDate
          label="date"
          name="date"
          baseStyle={baseStyle}
          className=""
        />
        <Currency
          label="currency"
          name="currency"
          baseStyle={baseStyle}
          className=""
        />
        <PassengerCount
          label="pax"
          name="pax"
          baseStyle={baseStyle}
          className="focus-within:bg-white"
        />
      </div>

      {/* Bottom Section */}
      <div className="sticky bottom-0 flex w-full justify-between rounded-t-lg border border-[#E2E2E2] bg-white px-6 py-4 pb-6 md:px-10">
        <Button
          type="submit"
          className="mx-auto flex w-full max-w-xl items-center justify-center gap-x-[10px] rounded-md bg-drivado-red px-6 py-[10px] text-base font-medium leading-none tracking-[-0.32px] text-white md:gap-x-5 md:px-11 md:py-5 md:text-[1.75rem]"
        >
          <Search className="size-4 shrink-0 md:size-8" />
          <span>Search</span>
        </Button>
      </div>
    </form>
  );
}
