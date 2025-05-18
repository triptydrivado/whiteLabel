import { Clock4, Route, Timer, Users } from "lucide-react";

const HourlySettings = () => {
  // const time = localStorage.getItem("time");
  // const date = localStorage.getItem("date");
  // const person = localStorage.getItem("person");
  // const distance = localStorage.getItem("distance");
  // const duration = localStorage.getItem("duration");

  const bookngForm = localStorage.getItem("bookingSearchForm");
  const bookingData = JSON.parse(bookngForm || "{}");

  const lat1 = 51.4679914,
    lon1 = 0.455051;
  const lat2 = 51.5074,
    lon2 = -0.1278;

  const distance =
    6371 *
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin(((Math.PI / 180) * (lat2 - lat1)) / 2) ** 2 +
          Math.cos((Math.PI / 180) * lat1) *
            Math.cos((Math.PI / 180) * lat2) *
            Math.sin(((Math.PI / 180) * (lon2 - lon1)) / 2) ** 2,
      ),
    );

  console.log(`Distance: ${distance.toFixed(2)} km`);

  return (
    <div className="flex items-center justify-center space-x-1.5 pt-8 sm:space-x-1.5 md:justify-between md:space-x-2.5 xl:space-x-3 2xl:space-x-4">
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Timer className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          {bookingData.duration} hrs
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Route className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          115 km
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Users className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          {bookingData.pax} pax
        </h2>
      </div>
      {/* <div className="flex w-[5rem] flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-2 py-2 sm:w-[3.5rem] sm:px-1 sm:py-1.5 md:w-[3.5rem] md:px-1.5 md:py-1.5 lg:w-[4.5rem] lg:px-2 xl:w-[5rem] xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-[6.65rem]">
        <CalendarDays className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] md:text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          {bookingData.date?.substring(0, 10)}
        </h2>
      </div> */}
      <div className="flex w-full flex-col items-center justify-center gap-y-0.5 rounded-lg bg-[#f6f7f9] px-1.5 py-2 sm:w-full sm:px-1.5 sm:py-1.5 md:w-full md:px-1.5 md:py-1.5 lg:w-full lg:px-2 xl:w-full xl:gap-y-1.5 xl:px-4 xl:py-3 2xl:w-full">
        <Clock4 className="size-3 text-[var(--brand-theme-color)] md:size-4 lg:size-4 xl:size-5" />
        <h2 className="text-[8px] font-medium text-[#282828] sm:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:text-sm">
          {bookingData.time}
        </h2>
      </div>
    </div>
  );
};

export default HourlySettings;
