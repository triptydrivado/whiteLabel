import Duration1Icon from "@/assets/svgs/duration1";
import OneWayIcon from "@/assets/svgs/oneway-icon";
import RoutingIcon from "@/assets/svgs/routing-icon";
import React from "react";

export interface JourneyData {
  // Add 'export' here
  tripType: "oneway" | "hourly";
  distance?: string;
  duration?: string;
}

interface TripDetailsProps {
  journeyData: JourneyData;
}

export default function OnewayHourly() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-x-[15px]">
      <>
        <div className="flex items-center gap-x-3 p-2 lg:h-[42px]">
          <RoutingIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
            Distance: 12 km
          </span>
        </div>
        <div className="flex items-center gap-x-3 p-2 lg:h-[42px]">
          <Duration1Icon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
            Duration: 3 hrs 20 mins
          </span>
        </div>
      </>

      <div className="flex items-center gap-x-3 p-2 lg:h-[42px]">
        {/* {journeyData.tripType === "oneway" ? (
          <OneWayIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />
        ) : (
          <HourlyIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />
        )} */}
        <OneWayIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
          Oneway
        </span>
      </div>
    </div>
  );
}
