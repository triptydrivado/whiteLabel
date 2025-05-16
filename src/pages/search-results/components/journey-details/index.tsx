import { useState, useEffect } from "react";

import DateDropdown from "./date-picker";
import BookingTime from "./booking-time";
import CurrencyDropdown from "./currency-dropdown";
import PaxCounter from "./pax-count";
import OnewayHourly from "./oneway-hourly";
import BookingCard from "./booking-card";

import PickupLocation from "./pickup-location";
import DropOffLocation from "./dropoff-loaction";

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

  // const pickupLocation = [
  //   "London Heathrow Airport (LHR), TW6 1QG, United Kingdom",
  // ];

  // const dropoffLocation = [
  //   "Los Angeles International Airport (LAX), Los Angeles, CA, USA",
  // ];
  // const selectedDate = ["09-05-2025"];
  // const selectedTime = ["02:00  AM"];
  // const selectedCurrency = ["USD"];
  // const paxCount = ["2 pax"];
  // const distance = ["12 Km"];
  const duration = ["3 hrs 20 mins"];
  // const tripType = ["oneway"];

  const [pickupLocation, setPickupLocation] = useState<string[]>([]);
  const [dropoffLocation, setDropoffLocation] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string[]>([]);
  const [distance, setDistance] = useState<string[]>([]);
  const [paxCount, setPaxCount] = useState<string[]>([]);
  const [bookingType, setBookingType] = useState<string[]>([]);

  useEffect(() => {
    const bookingData = localStorage.getItem("bookingSearchForm");
    const vehicle = JSON.parse(bookingData || "{}");

    // Handle different data structures
    if (vehicle?.from?.description) {
      // Handle pickup location
      if (Array.isArray(vehicle.from.description)) {
        setPickupLocation(vehicle.from.description);
      } else {
        setPickupLocation([vehicle.from.description]);
      }

      // Handle dropoff location, but check if it exists first
      if (vehicle?.to?.description) {
        if (Array.isArray(vehicle.to.description)) {
          setDropoffLocation(vehicle.to.description);
        } else {
          setDropoffLocation([vehicle.to.description]);
        }
      }

      if (vehicle?.date) {
        if (Array.isArray(vehicle.date)) {
          // Fix the typo: vehicle.dat -> vehicle.date
          // Also limit to first 10 characters for each date in the array
          setSelectedDate(
            vehicle.date.map((date: string) => date.substring(0, 10)),
          );
        } else {
          // For a single date string, limit to first 10 characters
          setSelectedDate([vehicle.date.substring(0, 10)]);
        }
      } else {
        setSelectedDate([]); // Set default empty array if no date
      }

      if (vehicle?.time) {
        if (Array.isArray(vehicle.time)) {
          setSelectedTime(vehicle.time);
        } else {
          setSelectedTime([vehicle.time]);
        }
      }
      if (vehicle?.currency) {
        if (Array.isArray(vehicle.currency.currency)) {
          setSelectedCurrency(vehicle.currency.currency);
        } else {
          setSelectedCurrency([vehicle.currency.currency]);
        }
      }
      if (vehicle?.pax) {
        if (Array.isArray(vehicle.pax)) {
          setPaxCount(vehicle.pax);
        } else {
          setPaxCount([vehicle.pax]);
        }
      }
      if (vehicle?.bookingType) {
        if (Array.isArray(vehicle.bookingType)) {
          setBookingType(vehicle.bookingType);
        } else {
          setBookingType([vehicle.bookingType]);
        }
      }
    }
  }, []);

  const validatedData = JSON.parse(
    localStorage.getItem("validatedData") || "{}",
  );
  const tripType = validatedData.bookingType || "oneway";

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
            <div className="flex w-[70%] space-x-[15px]">
              <PickupLocation pickupLocation={pickupLocation} />
              {tripType !== "hourly" && (
                <DropOffLocation dropoffLocation={dropoffLocation} />
              )}
            </div>

            {/* DateDropdown - 15% width */}
            <div className="flex w-[30%] space-x-[15px]">
              <DateDropdown selectedDate={selectedDate} />

              {/* TimeDropdown - 15% width */}

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
