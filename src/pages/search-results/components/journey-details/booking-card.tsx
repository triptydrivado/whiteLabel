import { Clock3, Users } from "lucide-react";
import OneWayIcon from "@/assets/svgs/oneway-icon";
import HourlyIcon from "@/assets/svgs/hourly-icon";
import ClockIcon from "@/assets/svgs/clock-icon";
import Distance2Icon from "@/assets/svgs/deskmap-icon";
import CalendarIcon from "@/assets/svgs/calendar-icon";
import LocationMobSvg from "@/assets/svgs/location-mob";
import CurrencyMoney from "@/assets/svgs/currency-mob";

import MapDeskIcon from "@/assets/svgs/mapdesk-icon";
import Duration1Icon from "@/assets/svgs/duration1";

const BookingCard = () => {
  const bookingData = {
    tripType: "oneway", // Change to "One-way" or "Hourly"
    from: "London Heathrow Airport (LHR), TW6 1QG, United Kingdom",
    to: "New York JFK Airport, Queens, NY 11430, USA London Heathrow Airport (LHR), TW6 1QG, United Kingdom",
    distance: "115 km",
    duration: "1hour16 min",
    passengers: "2 passenger",
    details: [
      { icon: CalendarIcon, label: "15-08-2024", wide: true },
      { icon: Clock3, label: "13:45" },
      { icon: Users, label: "2 pax" },
      { icon: CurrencyMoney, label: "USD" },
    ],
  };

  // const iconColor = bookingData.tripType === "Hourly" ? "#FB4156" : "#282828";

  return (
    <div className="flex w-full max-w-[42.5rem] flex-col justify-center rounded-2xl bg-white p-[15px] sm:p-[15px] lg:p-[25px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {bookingData.tripType === "hourly" ? (
            <HourlyIcon className="size-3 text-[var(--brand-icon-color)]" />
          ) : (
            <OneWayIcon className="ml-1 size-3 text-[var(--brand-icon-color)]" />
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
                <LocationMobSvg className="h-5 w-5 text-[var(--brand-icon-color)]" />
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

          <div className="ml-5 flex w-full min-w-0 flex-1 flex-col border-l-[0.5px] border-[#A2A2A2] pl-[16px] sm:ml-64 mobM:ml-32 mobL:ml-44">
            {[
              { icon: Distance2Icon, text: bookingData.distance },
              { icon: ClockIcon, text: bookingData.duration },
            ].map((item, index) => (
              <div
                key={index}
                className={`mt-[15px] flex w-full items-center gap-[10px] ${index === 0 ? "mb-2" : ""}`}
              >
                <item.icon className="text-[${iconColor}] h-[15px] w-[15px]" />
                <span className="text-[10px] font-normal sm:text-xs">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-[15px] flex flex-col">
          <div className="flex items-center">
            <LocationMobSvg className="h-5 w-5 text-[var(--brand-icon-color)]" />
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
              <Duration1Icon className="h-4 w-4 text-[var(--brand-icon-color)]" />
              <span className="text-[9px] sm:text-xs mobM:text-[10px] mobL:text-[10px]">
                Duration:
                <p className="text-[9px] font-semibold sm:text-[11px] mobM:text-[11px] mobL:text-[11px]">
                  {bookingData.duration}
                </p>{" "}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--brand-icon-color)]" />
              <span className="text-[9px] sm:text-xs mobM:text-[10px] mobL:text-[10px]">
                Passengers:{" "}
                <p className="text-[9px] font-semibold sm:text-[11px] mobM:text-[11px] mobL:text-[11px]">
                  {bookingData.passengers}
                </p>{" "}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapDeskIcon className="h-4 w-4 text-[var(--brand-icon-color)]" />
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
              <detail.icon className="h-[15px] w-[15px] text-[var(--brand-icon-color)]" />
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
