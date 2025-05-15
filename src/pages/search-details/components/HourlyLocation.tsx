import PickupDropoffIcon from "@/assets/svgs/pickup-location-icon";

const HourlyLocation = () => {
  // const pickupLocation=localStorage.getItem("pickupLocation")

  return (
    <div className="relative mt-8 md:mt-8 xl:mt-6 2xl:mt-10">
      <div className="mt-3">
        <div className="flex w-24 items-center space-x-1.5 rounded-md bg-gray-200 px-1.5 py-1">
          <PickupDropoffIcon className="mt-1 text-[var(--brand-theme-color)] sm:mt-0.5 sm:size-3 md:size-2 xl:mt-1 xl:size-[14px]" />
          <h2 className="text-sm font-medium text-black">Pick-up</h2>
        </div>
        <div className="relative mt-2 flex items-start space-x-2 xl:space-x-2">
          <div className="pl-2.5 text-xs font-medium sm:text-[10px] md:font-normal lg:text-sm lg:leading-[22px] xl:font-medium">
            Park Plaza Westminster Bridge London, 200 Westminster Bridge Rd,
            London SE1 7UT, United Kingdom United Kingdom United Kingdom United
            Kingdom United Kingdom United Kingdom United Kingdom United Kingdom
            United Kingdom United Kingdom United Kingdom United Kingdom Kingdom
            United Kingdom United Kingdom United Kingdom United Kingdom United
            Kingdom United Kingdom United Kingdom United Kingdom
          </div>
          <div className="absolute -left-2 top-1.5 h-[90%] w-[3px] rounded-full bg-[#fb4156]" />
        </div>
      </div>
    </div>
  );
};

export default HourlyLocation;
