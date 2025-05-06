import CapacityIcon from "@/assets/svgs/capacity-icon";

export default function PaxCounter() {
  return (
    <div className="relative">
      {/* Trigger Section */}
      <div className="group flex max-w-[120px] cursor-pointer items-center gap-x-3 rounded-lg border border-[#E9E9E9] bg-[#F9FAFB] p-[6px] transition-colors duration-300 hover:border-[#FFB1BA] hover:bg-gray-100 xl:p-[10px]">
        <>
          <CapacityIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#999999] transition-colors duration-300 group-hover:text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="items-center truncate text-[10px] font-medium lg:text-sm 2xl:text-base">
            2 pax
          </span>
        </>
      </div>
    </div>
  );
}
