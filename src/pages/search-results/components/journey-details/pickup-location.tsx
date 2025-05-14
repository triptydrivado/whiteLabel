import LocationIcon from "@/assets/svgs/location-icon";

type LocationDropdownProps = {
  pickupLocation: string[];
};

export default function PickupLocation({
  pickupLocation,
}: LocationDropdownProps) {
  return (
    <>
      {/* Pickup Location Dropdown */}
      <div className="group relative flex max-w-full flex-1 items-center gap-2 overflow-hidden rounded-lg bg-[#F5F6FA] p-[6px] xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-icon-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="block w-full truncate text-[10px] text-gray-900 lg:text-sm 2xl:text-base">
          {" "}
          {pickupLocation}
        </span>
      </div>

      {/* Dropoff Location Dropdown */}
      {/* <div className="group relative flex max-w-full flex-1 items-center gap-2 overflow-hidden rounded-lg bg-[#F5F6FA] p-[6px] xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#FB4156] text-[var(--brand-icon-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="block w-full truncate text-[10px] text-gray-900 lg:text-sm 2xl:text-base">
          {dropoffLocation}
        </span>
      </div> */}
    </>
  );
}
