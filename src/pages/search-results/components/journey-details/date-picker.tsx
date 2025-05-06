import DateIcon from "@/assets/svgs/date-icon";

export default function DateDropdown() {
  return (
    <div className="relative">
      {/* Date Display Button */}
      <div className="group flex w-auto flex-1 items-center truncate rounded-lg border border-[#E9E9E9] bg-[#F9FAFB] p-[6px] transition-colors duration-300 hover:border-[#FFB1BA] hover:bg-[#FFF2F3] xl:p-3">
        <DateIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[#999999] group-hover:text-[#FB4156] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="ml-2 text-[10px] font-normal lg:text-sm 2xl:text-base">
          05/05/2025
        </span>
      </div>
    </div>
  );
}
