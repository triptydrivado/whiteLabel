import CapacityIcon from "@/assets/svgs/capacity-icon";

type PaxCounterProps = {
  paxCount: string[];
};

// const pax = localStorage.getItem("pax");

export default function PaxCounter({ paxCount }: PaxCounterProps) {
  return (
    <div className="relative">
      {/* Trigger Section */}
      <div className="group flex max-w-[120px] items-center gap-x-3 rounded-lg bg-[#F5F6FA] p-[6px] transition-colors duration-300 xl:p-[10px]">
        <>
          <CapacityIcon className="h-3 min-h-3 w-3 min-w-3 flex-shrink-0 text-[var(--brand-theme-color)] transition-colors duration-300 lg:h-5 lg:w-5 2xl:h-[22px] 2xl:w-[22px]" />

          <span className="items-center truncate text-[10px] font-medium lg:text-sm 2xl:text-base">
            {paxCount}
          </span>
        </>
      </div>
    </div>
  );
}
