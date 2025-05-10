import Duration1Icon from "@/assets/svgs/duration1";
import HourlyManageIcon from "@/assets/svgs/hourly-manage-icon";
import OnewayTwoIcon from "@/assets/svgs/oneway-two-icon";
import RoutingIcon from "@/assets/svgs/routing-icon";

// export interface JourneyData {
//   // Add 'export' here
//   tripType: "oneway" | "hourly";
//   distance?: string;
//   duration?: string;
// }

const tripType = "oneway";

type DefaultProps = {
  distance: string[];
  duration: string[];
};

export default function OnewayHourly({ distance, duration }: DefaultProps) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-x-[15px]">
      <>
        <div className="flex items-center gap-x-3 p-2 lg:h-[42px]">
          <RoutingIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
            Distance: {distance}
          </span>
        </div>
        <div className="flex items-center gap-x-3 p-2 lg:h-[42px]">
          <Duration1Icon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
            Duration: {duration}
          </span>
        </div>
      </>

      <div className="flex items-center gap-1 rounded-[28px] bg-[#FB4156] px-2 py-1 text-white 3xl:px-3 3xl:py-[6px]">
        {tripType === "oneway" ? (
          <OnewayTwoIcon className="size-3 flex-shrink-0 text-white lg:size-5 2xl:size-[22px]" />
        ) : (
          <HourlyManageIcon className="size-3 flex-shrink-0 text-white lg:size-5 2xl:size-[22px]" />
        )}
        <span className="text-[10px] font-medium lg:text-sm 2xl:text-base">
          {tripType}
        </span>
      </div>
    </div>
  );
}
