import StandardSedan from "@/assets/image/standard-sedan.png";

import OnewayLocation from "./OnewayLocation";
import OnewaySettings from "./OnewaySettings";
import HourlyLocation from "./HourlyLocation";
import HourlySettings from "./HourlySettings";
import { useState } from "react";
import OnewayTwoIcon from "@/assets/svgs/oneway-two-icon";
import HourlyManageIcon from "@/assets/svgs/hourly-manage-icon";

const BookingDetails = () => {
  const [bookingType] = useState<"oneway" | "hourly">("oneway");
  return (
    <div className="flex w-full flex-col justify-between rounded-xl bg-white p-3 shadow-md sm:w-1/2 md:w-1/2 lg:w-1/2 lg:p-6 2xl:rounded-2xl">
      <div className="flex justify-center rounded-lg bg-[#F5F6FA] px-20 py-3 sm:px-16 sm:py-3 md:px-12 md:py-4 xl:px-20 xl:py-8 2xl:rounded-xl 2xl:px-32">
        <img src={StandardSedan} className="w-44" />
      </div>
      <div className="flex justify-between pt-4 md:pt-5">
        <div className="w-full">
          <div className="flex w-full justify-between">
            <h2 className="text-sm font-semibold text-[#1a202c] md:text-xl 2xl:text-2xl">
              Standard Sedan
            </h2>
            <div className="flex items-center justify-end space-x-1">
              <div className="3xl:ml-8 3xl:px-3 3xl:py-[6px] ml-4 flex items-center gap-1 rounded-[28px] bg-[#FB4156] px-2 py-1 text-white xl:ml-6">
                {bookingType === "oneway" ? (
                  <OnewayTwoIcon className="3xl:size-[14px] size-[14px] flex-shrink-0 xl:size-3" />
                ) : bookingType === "hourly" ? (
                  <HourlyManageIcon className="3xl:size-[14px] size-[14px] flex-shrink-0 xl:size-3" />
                ) : null}

                <span className="text-xs font-medium 2xl:text-sm">
                  {bookingType.charAt(0).toUpperCase() + bookingType.slice(1)}
                </span>
              </div>

              {/* <h2 className="text-nowrap text-[10px] font-medium md:text-[10px] lg:text-xs xl:text-[15px]">
            {bookingType === "hourly" ? "Hourly" : "Oneway"}
          </h2> */}
            </div>
          </div>
          <h3 className="mt-2 text-[10px] font-medium leading-5 text-[#282828] md:text-xs xl:leading-8 2xl:mt-3 2xl:text-base">
            Corolla, Toyota Prius, Camry, Ford Taurus or similar
          </h3>
        </div>
      </div>

      {/* ONEWAY SECTION */}
      {bookingType === "oneway" && (
        <div>
          <OnewaySettings />
          <OnewayLocation />
        </div>
      )}

      {/* HOURLY SECTION */}
      {bookingType === "hourly" && (
        <div>
          <HourlyLocation />
          <HourlySettings />
        </div>
      )}

      <div className="flex items-center justify-between pt-[4.25rem]">
        <div className="leading-5 md:leading-3">
          <h2 className="text-base font-bold leading-3 text-[#fb4156] md:text-xs lg:text-base xl:text-xl">
            Total Price
          </h2>
          <span className="text-xs font-medium text-[#282828]/50 md:text-[8px] lg:text-xs xl:leading-6">
            Includes VAT, Gratuities, Meet & Greet services
          </span>
        </div>
        <h3 className="text-lg font-bold text-black md:text-base md:font-semibold lg:text-2xl xl:text-[32px]">
          $239.74
        </h3>
      </div>
    </div>
  );
};

export default BookingDetails;
