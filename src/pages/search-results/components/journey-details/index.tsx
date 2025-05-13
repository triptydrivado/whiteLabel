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

  const pickupLocation = [
    "London Heathrow Airport (LHR), TW6 1QG, United Kingdom",
  ];

  const dropoffLocation = [
    "Los Angeles International Airport (LAX), Los Angeles, CA, USA",
  ];
  const selectedDate = ["09-05-2025"];
  const selectedTime = ["02:00  AM"];
  const selectedCurrency = ["USD"];
  const paxCount = ["2 pax"];
  const distance = ["12 Km"];
  const duration = ["3 hrs 20 mins"];
  // const tripType = ["oneway"];

  return (
    <div>
      {isMobile ? (
        <div className="pt-[25px]">
          <BookingCard />
        </div>
      ) : (
        <div className="relative mt-[25px] w-full rounded-lg bg-white shadow-md sm:px-3 sm:py-[18px] xl:px-[18px] xl:py-5">
          <h6 className="mb-3 text-[10px] font-medium text-[#0D0D0D] 3xl:text-sm">
            Booking Details
          </h6>

          <div className="flex w-full space-x-[15px] lg:items-center">
            {/* LocationDropdown - 70% width */}
            <div className="flex-[7]">
              <LocationDropdown
                pickupLocation={pickupLocation}
                dropoffLocation={dropoffLocation}
              />
            </div>

            {/* DateDropdown - 15% width */}
            <div className="flex-[1.5]">
              <DateDropdown selectedDate={selectedDate} />
            </div>

            {/* TimeDropdown - 15% width */}
            <div className="flex-[1.5]">
              <BookingTime selectedTime={selectedTime} />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-start gap-x-[15px]">
            {/* Currency */}

            <CurrencyDropdown selectedCurrency={selectedCurrency} />

            {/* Passengers */}
            <PaxCounter paxCount={paxCount} />

            {/* Distance */}
            <OnewayHourly distance={distance} duration={duration} />
          </div>
        </div>
      )}
    </div>
  );
}
