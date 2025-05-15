import { Clock3 } from "lucide-react";

type TimeDropdownProps = {
  selectedTime: string[];
};

// const time=localStorage.getItem("time");

export default function BookingTime({ selectedTime }: TimeDropdownProps) {
  return (
    <>
      <div className="group flex flex-1 items-center truncate rounded-lg bg-[#F5F6FA] p-[6px] transition-colors duration-300 xl:p-3">
        <Clock3 className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-theme-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="ml-2 text-[10px] font-medium lg:text-sm 2xl:text-base">
          {selectedTime}
        </span>
      </div>
    </>
  );
}
