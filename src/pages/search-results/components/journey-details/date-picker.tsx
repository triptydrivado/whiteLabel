import DateIcon from "@/assets/svgs/date-icon";

type DateDropdownProps = {
  selectedDate: string[];
};

export default function DateDropdown({ selectedDate }: DateDropdownProps) {
  return (
    <div className="relative">
      {/* Date Display Button */}
      <div className="group flex w-auto flex-1 items-center truncate rounded-lg bg-[#F5F6FA] p-[6px] transition-colors duration-300 xl:p-3">
        <DateIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-icon-color)] lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="ml-2 text-[10px] font-medium lg:text-sm 2xl:text-base">
          {selectedDate}
        </span>
      </div>
    </div>
  );
}
