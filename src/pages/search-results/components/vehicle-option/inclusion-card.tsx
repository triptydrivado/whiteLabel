import AirplaneIcon from "@/assets/svgs/airplane-icon";
import CancelIcon from "@/assets/svgs/cancel-icon";
import CapacityIcon from "@/assets/svgs/capacity-icon";
import SandboxIcon from "@/assets/svgs/sandbox-icon";
import WalletInclusionIcon from "@/assets/svgs/wallet-inclusion-icon";

import CarIcon from "@/assets/svgs/car-icon";

const journeyInclusionsData = [
  {
    id: 1,
    title: "Waiting Time Policy",
    description:
      "Free 60 minutes waiting time after flight landing for airport pickups, 15 minutes waiting time for all other pickups.",
    icon: SandboxIcon,
  },
  {
    id: 2,
    title: "Cancellation Policy",
    description:
      "Free cancellation up to 24 hours prior to time for both oneway transfers and hourly disposals.",
    icon: CancelIcon,
  },
  {
    id: 3,
    title: "Travel Details Required",
    description:
      "Provide accurate travel details for smooth pickup. Incorrect or missing details may lead to service issues.",
    icon: AirplaneIcon,
  },
  {
    id: 4,
    title: "Capacity Guidelines",
    description:
      "Follow guest and luggage limits for safety. Choose a larger class if unsure to avoid service denial.",
    icon: CapacityIcon,
  },
  {
    id: 5,
    title: "Vehicle Information",
    description:
      "The vehicle images are just for reference. You may get a different vehicle of similar quality depending on destination.",
    icon: CarIcon,
  },
  {
    id: 6,
    title: "Inclusive Pricing",
    description: "All prices include VAT, gratuities, meet and greet services.",
    icon: WalletInclusionIcon,
  },
];

const InclusionCard = () => {
  return (
    <div className="4xl:max-w-[37.5rem] relative flex w-full max-w-[23.5rem] flex-col items-center rounded-2xl bg-[var(--brand-card-bg)] px-[15px] py-5 shadow-md transition-all duration-300 hover:shadow-md xl:max-w-[25rem] 2xl:max-w-[31.25rem]">
      <div className="flex items-center gap-2">
        <h2 className="4xl:text-3xl text-sm font-semibold xl:text-xl">
          Your Journey Inclusions
        </h2>
      </div>

      {journeyInclusionsData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="mt-[30px] flex h-full w-full items-start"
          >
            <div className="flex h-full gap-x-3">
              <div className="flex h-[39px] w-[39px] items-center justify-center rounded-lg bg-[#F7F6F6]">
                <Icon className="h-4 w-4 text-[#FB4156]" />
              </div>

              <div className="flex-1">
                <h3 className="4xl:text-xl text-xs font-semibold text-gray-800 xl:text-sm">
                  {item.title}
                </h3>
                <p className="4xl:text-[18px] text-[10px] text-gray-600 xl:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InclusionCard;
