import Calendar1Icon from "@/assets/svgs/calendar1";
import CapacityIcon from "@/assets/svgs/capacity-icon";
import RoutingIcon from "@/assets/svgs/routing-icon";
import SelectedTimerIcon from "@/assets/svgs/timer-get-icon";
import { Clock4 } from "lucide-react";

const OnewaySettings = () => {
  return (
    <div className="flex items-center justify-center space-x-1.5 pt-8 sm:space-x-1.5 sm:pt-0 md:justify-between md:space-x-2.5 xl:space-x-3 2xl:space-x-4">
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Calendar1Icon className="size-3 text-[var(--brand-icon-color)] md:size-4 lg:size-4 2xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          15/08/2025
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Clock4 className="size-3 text-[var(--brand-icon-color)] md:size-4 lg:size-4 2xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          13:45
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <CapacityIcon className="size-3 text-[var(--brand-icon-color)] md:size-4 lg:size-4 2xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          2 Pax
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <RoutingIcon className="size-3 text-[var(--brand-icon-color)] md:size-4 lg:size-4 2xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          115 km
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <SelectedTimerIcon className="size-3 text-[var(--brand-icon-color)] md:size-4 lg:size-4 2xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          1hr16min
        </h2>
      </div>
    </div>
  );
};

export default OnewaySettings;
