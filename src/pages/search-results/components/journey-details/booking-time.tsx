import { Clock3 } from "lucide-react";

export default function BookingTime() {
  return (
    <>
      <div className="group flex flex-1 items-center truncate rounded-lg bg-[#F5F6FA] p-[6px] transition-colors duration-300 xl:p-3">
        <Clock3 className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="ml-2 text-[10px] font-medium lg:text-sm 2xl:text-base">
          2:00 AM
        </span>
      </div>
    </>
  );
}
