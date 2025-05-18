import PickupDropoffIcon from "@/assets/svgs/pickup-location-icon";

const OnewayLocation = () => {
  // const pickupLocation = localStorage.getItem("pickupLocation");
  // const dropoffLocation = localStorage.getItem("dropoffLocation");

  const bookngForm = localStorage.getItem("bookingSearchForm");
  const bookingData = JSON.parse(bookngForm || "{}");

  return (
    <div className="relative mt-8 md:mt-8 xl:mt-6 2xl:mt-10">
      <div className="absolute left-[5px] top-5 h-[50%] w-0.5 rounded-full bg-[repeating-linear-gradient(to_bottom,white_1px,var(--brand-theme-color)_7px)] sm:left-[5px] sm:top-4 md:left-[5px] md:top-4 xl:left-1.5 3xl:h-[90%]">
        &nbsp;
      </div>
      <div className="mt-3">
        <div className="mt-2 flex items-start space-x-3 xl:space-x-5">
          <div>
            <PickupDropoffIcon className="mt-1 size-3 text-[var(--brand-theme-color)] sm:mt-0.5 sm:size-3 md:size-3 xl:mt-1 xl:size-[14px]" />
          </div>
          <h2 className="text-xs font-medium sm:text-[10px] md:font-normal lg:text-sm lg:leading-[22px] xl:font-medium">
            {bookingData.from.description}
          </h2>
        </div>
        <div className="relative mt-6 flex items-start space-x-3 xl:space-x-5">
          <div className="relative z-20">
            <PickupDropoffIcon className="mt-1 size-3 bg-white text-[var(--brand-theme-color)] sm:mt-0.5 sm:size-3 md:left-1.5 md:top-3.5 md:size-3 xl:mt-1 xl:size-[14px]" />
          </div>
          <div className="absolute -left-[5px] top-[calc(1.25rem_-_6px)] h-[90%] w-0.5 flex-shrink-0 rounded-full bg-white sm:-left-[7px] md:-left-[7px] md:top-4 xl:-left-[14px]">
            &nbsp;
          </div>
          <h2 className="text-xs font-medium sm:text-[10px] md:font-normal lg:text-sm lg:leading-[22px] xl:font-medium">
            {bookingData.to.description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OnewayLocation;
