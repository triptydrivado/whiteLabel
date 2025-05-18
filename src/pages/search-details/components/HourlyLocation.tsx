import PickupDropoffIcon from "@/assets/svgs/pickup-location-icon";

const HourlyLocation = () => {
  // const pickupLocation=localStorage.getItem("pickupLocation")
  const bookngForm = localStorage.getItem("bookingSearchForm");
  const bookingData = JSON.parse(bookngForm || "{}");

  return (
    <div className="relative mt-8 md:mt-8 xl:mt-4 2xl:mt-10">
      <div className="mt-3">
        <div className="flex w-24 items-center space-x-1.5 rounded-md bg-gray-200 px-1.5 py-1">
          <PickupDropoffIcon className="mt-1 size-2 text-[var(--brand-theme-color)] sm:mt-0.5 sm:size-3 md:size-2 xl:mt-1 xl:size-[14px]" />
          <h2 className="text-xs font-medium text-black xl:text-sm">Pick-up</h2>
        </div>
        <div className="relative mt-2 flex items-center space-x-2">
          <div className="h-4 w-[3px] rounded-full bg-[#fb4156]" />

          <div className="text-xs font-medium md:font-normal lg:text-sm lg:leading-[22px] xl:font-medium">
            {bookingData.from.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyLocation;
