import CurrencyDropIcon from "@/assets/svgs/currency-drop-icon";

type CurrenyDropdownProps = {
  selectedCurrency: string[];
};

// const currency = localStorage.getItem("currency");

export default function BookingTime({
  selectedCurrency,
}: CurrenyDropdownProps) {
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <div className="group flex w-full items-center gap-x-3 rounded-lg bg-[#F5F6FA] p-[6px] transition-colors duration-300 xl:p-[10px]">
        <CurrencyDropIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-theme-color)] transition-colors duration-300 lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

        <span className="flex items-center truncate text-[10px] font-medium lg:text-sm 2xl:text-base">
          {selectedCurrency}
        </span>
      </div>
    </div>
  );
}
