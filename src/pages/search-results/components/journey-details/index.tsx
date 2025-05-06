import { useState, useEffect } from "react";
import LocationDropdown from "./location-dropdown";
import DateDropdown from "./date-picker";
import BookingTime from "./booking-time";
import CurrencyDropdown from "./currency-dropdown";
import PaxCounter from "./pax-count";
import OnewayHourly from "./oneway-hourly";
import BookingCard from "./booking-card";

export default function JourneyDetails() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-plus-jakarta-sans">
      {isMobile ? (
        <div className="pt-[25px]">
          <BookingCard />
        </div>
      ) : (
        <div className="relative mt-[25px] w-full cursor-pointer rounded-lg bg-[var(--brand-card-bg)] shadow-md sm:px-3 sm:py-[18px] xl:px-[18px] xl:py-5">
          <div className="flex w-full cursor-pointer space-x-[15px] lg:items-center">
            {/* LocationDropdown - 70% width */}
            <div className="flex-[7] cursor-pointer">
              <LocationDropdown />
            </div>

            {/* DateDropdown - 15% width */}
            <div className="flex-[1.5] cursor-pointer">
              <DateDropdown />
            </div>

            {/* TimeDropdown - 15% width */}
            <div className="flex-[1.5] cursor-pointer">
              <BookingTime />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-start gap-x-[15px]">
            {/* Currency */}

            <CurrencyDropdown />

            {/* Passengers */}
            <PaxCounter />

            {/* Distance */}
            <OnewayHourly />
          </div>
        </div>
      )}
    </div>
  );
}
