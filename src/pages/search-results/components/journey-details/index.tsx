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

  // States
  const [pickupLocation, setPickupLocation] = useState<string[]>([]);
  const [dropoffLocation, setDropoffLocation] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string[]>([]);
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [paxCount, setPaxCount] = useState<string[]>([]);
  const [bookingType, setBookingType] = useState<string>("");

  useEffect(() => {
    // Check screen size
    const handleResize = () => setIsMobile(window.innerWidth < 760);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Get data
    const bookingData = localStorage.getItem("bookingSearchForm");
    const vehicleData = localStorage.getItem("vehicleList");

    const booking = JSON.parse(bookingData || "{}");
    const vehicle = JSON.parse(vehicleData || "{}");

    // Booking Details
    if (booking?.from?.description) {
      setPickupLocation([booking.from.description]);
    }

    if (booking?.to?.description) {
      setDropoffLocation([booking.to.description]);
    }

    if (booking?.date) {
      const dates = Array.isArray(booking.date) ? booking.date : [booking.date];
      setSelectedDate(dates.map((date: string) => date.substring(0, 10)));
    }

    if (booking?.time) {
      const times = Array.isArray(booking.time) ? booking.time : [booking.time];
      setSelectedTime(times);
    }

    if (booking?.currency?.currency) {
      const currencies = Array.isArray(booking.currency.currency)
        ? booking.currency.currency
        : [booking.currency.currency];
      setSelectedCurrency(currencies);
    }

    if (booking?.pax) {
      const pax = Array.isArray(booking.pax) ? booking.pax : [booking.pax];
      setPaxCount(pax);
    }

    if (booking?.bookingType) {
      const type = Array.isArray(booking.bookingType)
        ? booking.bookingType[0]
        : booking.bookingType;
      setBookingType(type);
    }

    // Vehicle Details
    if (vehicle?.duration) {
      const durations = Array.isArray(vehicle.duration)
        ? vehicle.duration
        : [vehicle.duration];
      setDuration(durations);
    }

    if (vehicle?.km) {
      const normalizeAndRound = (val: number | string) => {
        const num = parseFloat(val as string);
        const inKm = num >= 100 ? num / 1000 : num;
        return `${inKm.toFixed(2)} km`;
      };

      const kms = Array.isArray(vehicle.km) ? vehicle.km : [vehicle.km];
      const formatted = kms.map(normalizeAndRound);
      setDistance(formatted);
    }
  }, []); // runs on initial mount

  useEffect(() => {
    if (bookingType) {
      localStorage.setItem("bookingType", bookingType);
    }

    if (distance) {
      localStorage.setItem("distance", distance);
    }

    if (duration) {
      localStorage.setItem("duration", duration);
    }
  }, [bookingType, distance, duration]);

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
            <div className="flex w-[70%] space-x-[15px]">
              <PickupLocation pickupLocation={pickupLocation} />
              {bookingType !== "hourly" && (
                <DropOffLocation dropoffLocation={dropoffLocation} />
              )}
            </div>

            <div className="flex w-[30%] space-x-[15px]">
              <DateDropdown selectedDate={selectedDate} />
              <BookingTime selectedTime={selectedTime} />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-start gap-x-[15px]">
            <CurrencyDropdown selectedCurrency={selectedCurrency} />
            <PaxCounter paxCount={paxCount} />
            <OnewayHourly />
          </div>
        </div>
      )}
    </div>
  );
}
