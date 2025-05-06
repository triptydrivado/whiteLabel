import LocationIcon from "@/assets/svgs/location-icon";

export default function LocationDropdown() {
  const pickupLocation = [
    "London Heathrow Airport (LHR), TW6 1QG, United Kingdom",
  ];

  const dropoffLocation = [
    "Los Angeles International Airport (LAX), Los Angeles, CA, USA",
  ];

  return (
    <div className="flex space-x-[15px]">
      {/* Pickup Location Dropdown */}
      <div className="group relative flex w-auto flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#E9E9E9] bg-[#F9FAFB] p-[6px] focus-within:border-gray-100 focus-within:bg-gray-100 hover:border-[#FFB1BA] hover:bg-gray-100 xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#999999] group-hover:text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="3xl:w-[ 26.25 rem] 4xl:w-[480px] cursor-pointer truncate whitespace-nowrap text-[10px] text-gray-900 sm:max-w-[9.375rem] md:max-w-[10.625rem] lg:max-w-[15rem] lg:text-sm xl:max-w-[17.5rem] 2xl:max-w-[20rem]">
          {pickupLocation ||
            "London Heathrow Airport (LHR), TW6 1QG, United Kingdom"}
        </span>
      </div>

      {/* Dropoff Location Dropdown */}
      <div className="group relative flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#E9E9E9] bg-[#F9FAFB] p-[6px] focus-within:bg-gray-100 hover:border-[#FFB1BA] hover:bg-gray-100 xl:p-3">
        <LocationIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#999999] group-hover:text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="3xl:max-w-[400px] 4xl:w-[440px] cursor-pointer truncate whitespace-nowrap text-[10px] text-gray-900 sm:max-w-[150px] md:max-w-[170px] lg:max-w-[240px] lg:text-sm xl:max-w-[280px] 2xl:max-w-[320px]">
          {dropoffLocation ||
            "Park Plaza Westminster Bridge London, 200 Westminster Bridge Rd, London SE1 7UT, United Kingdom"}
        </span>
      </div>
    </div>
  );
}
