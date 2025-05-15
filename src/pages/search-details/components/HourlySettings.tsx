import { CalendarDays, Clock4, Route, Timer, Users } from "lucide-react";

const HourlySettings = () => {
  // const time = localStorage.getItem("time");
  // const date = localStorage.getItem("date");
  // const person = localStorage.getItem("person");
  // const distance = localStorage.getItem("distance");
  // const duration = localStorage.getItem("duration");

  return (
    <div className="flex items-center justify-center space-x-1 pt-[4.25rem] md:justify-between">
      <div className="flex w-[4.2rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <Timer className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          4 hours
        </h2>
      </div>
      <div className="flex w-[4.2rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <Route className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          115 km
        </h2>
      </div>
      <div className="flex w-[4.2rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <Users className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          2 Pax
        </h2>
      </div>
      <div className="flex w-[4.2rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <CalendarDays className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          15/08/2025
        </h2>
      </div>
      <div className="flex w-[4.2rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <Clock4 className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          13:45
        </h2>
      </div>
    </div>
  );
};

export default HourlySettings;
