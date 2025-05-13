import LocationIcon from "@/assets/svgs/location-icon";

type LocationDropdownProps = {
  pickupLocation: string[];
  dropoffLocation: string[];
};

export default function LocationDropdown({
  pickupLocation,
  dropoffLocation,
}: LocationDropdownProps) {
  return (
    <div className="flex space-x-[15px]">
      {/* Pickup Location Dropdown */}
      <div className="group relative flex w-auto flex-1 items-center gap-2 rounded-lg bg-[#F5F6FA] p-[6px] xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-icon-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="truncate whitespace-nowrap text-[10px] text-gray-900 sm:max-w-[150px] md:max-w-[170px] lg:max-w-[240px] lg:text-sm xl:max-w-[280px] 2xl:max-w-[320px] 2xl:text-base 3xl:max-w-[400px] 4xl:w-[440px]">
          {" "}
          {pickupLocation}
        </span>
      </div>

      {/* Dropoff Location Dropdown */}
      <div className="group relative flex flex-1 items-center gap-2 rounded-lg bg-[#F5F6FA] p-[6px] xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] text-[var(--brand-icon-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="truncate whitespace-nowrap text-[10px] text-gray-900 sm:max-w-[150px] md:max-w-[170px] lg:max-w-[240px] lg:text-sm xl:max-w-[280px] 2xl:max-w-[320px] 2xl:text-base 3xl:max-w-[400px] 4xl:w-[440px]">
          {dropoffLocation}
        </span>
      </div>
    </div>
  );
}
