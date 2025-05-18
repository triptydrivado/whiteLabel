import { Clock3, Users } from "lucide-react";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import OneWayIcon from "@/assets/svgs/oneway-icon";
import HourlyIcon from "@/assets/svgs/hourly-icon";
import ClockIcon from "@/assets/svgs/clock-icon";
import Distance2Icon from "@/assets/svgs/deskmap-icon";
// import CalendarIcon from "@/assets/svgs/calendar-icon";
import LocationMobSvg from "@/assets/svgs/location-mob";
// import CurrencyMoney from "@/assets/svgs/currency-mob";

import MapDeskIcon from "@/assets/svgs/mapdesk-icon";
import Duration1Icon from "@/assets/svgs/duration1";
// import { boolean } from "zod";
// import { bookingType } from "@/pages/search-booking/schemas/booking-tabs";
// import { Duration } from "@/lib/DURATION";
import CalendarIcon from "@/assets/svgs/calendar-icon";
import CurrencyMoney from "@/assets/svgs/currency-mob";
// import { duration } from "html2canvas/dist/types/css/property-descriptors/duration";

const BookingCard = () => {
  const [bookingTypeValue, setBookingTypeValue] = useState<string>("");

  const [pickupLocation, setPickupLocation] = useState<string[]>([]);
  const [dropoffLocation, setDropoffLocation] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string[]>([]);
  const [distance, setDistance] = useState<string[]>([]);
  const [duration, setDuration] = useState<string[]>([]);
  const [paxCount, setPaxCount] = useState<string[]>([]);
  // const [bookingType, setBookingType] = useState<string[]>([]);

  useEffect(() => {
    const bookingDataForm = localStorage.getItem("bookingSearchForm");
    const vehicle = JSON.parse(bookingDataForm || "{}");

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
          setBookingTypeValue(vehicle.bookingType);
        } else {
          setBookingTypeValue(vehicle.bookingType);
        }
      }
    }
  }, []);
  useEffect(() => {
    const vehicleList = localStorage.getItem("vehicleList");
    const vehicle = JSON.parse(vehicleList || "{}");

    // Handle different data structures
    if (vehicle?.duration) {
      // Handle pickup location
      if (Array.isArray(vehicle.duration)) {
        setDuration(vehicle.duration);
      } else {
        setDuration([vehicle.duration]);
      }
      if (vehicle?.km) {
        const normalizeAndRound = (val: number | string) => {
          const num = parseFloat(val as string);

          // Treat as meters if 100 or more
          const inKm = num >= 100 ? num / 1000 : num;

          // Round to 2 decimal places and format
          return `${inKm.toFixed(2)} km`;
        };

        if (Array.isArray(vehicle.km)) {
          const formatted = vehicle.km.map((km: number) =>
            normalizeAndRound(km),
          );
          setDistance(formatted);
        } else {
          const formatted = normalizeAndRound(vehicle.km);
          setDistance([formatted]);
        }
      }
    }
  }, []);

  const bookingData = {
    tripType: bookingTypeValue,
    from: pickupLocation,
    to: dropoffLocation,
    distance: distance,
    duration: duration,
    passengers: paxCount,
    details: [
      { icon: CalendarIcon, label: selectedDate[0] || "", wide: true },
      { icon: Clock3, label: selectedTime[0] || "" },
      { icon: Users, label: `${paxCount[0] || "0"} pax` },
      { icon: CurrencyMoney, label: selectedCurrency[0] || "USD" },
    ],
  };

  console.log("hdhhd", bookingData.tripType);

  return (
    <div className="flex w-full max-w-[42.5rem] flex-col justify-center rounded-2xl bg-white p-[15px] sm:p-[15px] lg:p-[25px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {bookingData.tripType === "hourly" ? (
            <HourlyIcon className="size-3 text-[var(--brand-theme-color)]" />
          ) : (
            <OneWayIcon className="ml-1 size-3 text-[var(--brand-theme-color)]" />
          )}
          <span className="ml-1 text-[10px] font-medium sm:text-xs">
            {bookingData.tripType}
          </span>
        </div>
      </div>

      {bookingData.tripType === "oneway" ? (
        <div className="mt-[15px] flex w-full flex-wrap justify-between sm:justify-normal">
          <div className="w-full min-w-0 flex-1">
            {["From", "To"].map((label, index) => (
              <div
                key={index}
                className={`flex w-full items-center ${label === "From" ? "mb-4" : ""}`}
              >
                <LocationMobSvg className="h-5 w-5 text-[var(--brand-theme-color)]" />
                <div className="ml-2 flex min-w-0 flex-1 flex-col">
                  <span className="text-[10px] font-normal text-gray-500 sm:text-xs">
                    {label}
                  </span>
                  <span className="line-clamp-1 text-[10px] font-semibold sm:min-w-80 sm:text-xs mobM:min-w-48 mobL:min-w-56">
                    {label === "From" ? bookingData.from : bookingData.to}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="ml-5 flex w-full min-w-0 flex-1 flex-col justify-between border-l-[0.5px] border-[#A2A2A2] pl-[16px] sm:ml-64 mobM:ml-32 mobL:ml-44">
            {[
              { icon: Distance2Icon, text: bookingData.distance },
              { icon: ClockIcon, text: bookingData.duration },
            ].map((item, index) => {
              const text = Array.isArray(item.text)
                ? item.text.join(", ")
                : typeof item.text === "string"
                  ? item.text
                  : ""; // or some fallback

              return (
                <div key={index} className="flex items-center gap-[10px]">
                  <item.icon className="h-[15px] text-[var(--brand-theme-color)]" />
                  <span className="text-[10px] font-normal sm:text-xs">
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-[15px] flex flex-col">
          <div className="flex items-center">
            <LocationMobSvg className="h-5 w-5 text-[var(--brand-theme-color)]" />
            <div className="ml-2 flex flex-col">
              <span className="text-[10px] font-normal text-gray-500 sm:text-xs">
                From
              </span>
              <span className="line-clamp-1 text-[10px] font-semibold sm:text-xs">
                {bookingData.from}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <Duration1Icon className="h-4 w-4 text-[var(--brand-theme-color)]" />
              <span className="text-[9px] sm:text-xs mobM:text-[10px] mobL:text-[10px]">
                Duration:
                <p className="text-[9px] font-semibold sm:text-[11px] mobM:text-[11px] mobL:text-[11px]">
                  {bookingData.duration}
                </p>{" "}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--brand-theme-color)]" />
              <span className="text-[9px] sm:text-xs mobM:text-[10px] mobL:text-[10px]">
                Passengers:{" "}
                <p className="text-[9px] font-semibold sm:text-[11px] mobM:text-[11px] mobL:text-[11px]">
                  {bookingData.passengers} pax
                </p>{" "}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapDeskIcon className="h-4 w-4 text-[var(--brand-theme-color)]" />
              <span className="text-[9px] sm:text-xs mobM:text-[10px] mobL:text-[10px]">
                Distance:
                <p className="text-[9px] font-semibold sm:text-[11px] mobM:text-[11px] mobL:text-[11px]">
                  {" "}
                  {bookingData.distance}{" "}
                </p>
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-nowrap gap-2 border-[#9F9F9F99]">
        {bookingData.details.map((detail, index) =>
          bookingData.tripType.toLowerCase() === "hourly" &&
          detail.label.toLowerCase().includes("pax") ? null : (
            <div
              key={index}
              className={`flex h-[30px] items-center justify-center gap-1 rounded-lg border border-[#9F9F9F99] sm:justify-normal sm:p-2 sm:pl-1.5 mobM:justify-normal mobM:pl-1.5 ${
                detail.wide ? "flex-[1.6]" : "flex-1"
              } min-w-0`}
            >
              <detail.icon className="h-[15px] w-[15px] text-[var(--brand-theme-color)]" />
              <span className="text-[10px] font-normal sm:ml-2 sm:text-xs mobM:ml-2 mobL:ml-2">
                {detail.label}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default BookingCard;
