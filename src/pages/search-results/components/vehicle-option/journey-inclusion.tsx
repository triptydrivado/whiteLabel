import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Hourglass,
  CopyX,
  Plane,
  CarFront,
  ReceiptText,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import WarningIcon from "@/assets/svgs/warning-icon";

// Dynamic data for journey inclusions
const journeyInclusionsData = [
  {
    id: 1,
    title: "Waiting Time Policy",
    description:
      "Free 60 minutes waiting time after flight landing for airport pickups, 15 minutes waiting time for all other pickups.",
    icon: Hourglass,
  },
  {
    id: 2,
    title: "Cancellation Policy",
    description:
      "Free cancellation up to 24 hours prior to time for both oneway transfers and hourly disposals.",
    icon: CopyX,
  },
  {
    id: 3,
    title: "Travel Details Required",
    description:
      "Provide accurate travel details for smooth pickup. Incorrect or missing details may lead to service issues.",
    icon: Plane,
  },
  {
    id: 4,
    title: "Capacity Guidelines",
    description:
      "Follow guest and luggage limits for safety. Choose a larger class if unsure to avoid service denial.",
    icon: Users,
  },
  {
    id: 5,
    title: "Vehicle Information",
    description:
      "The vehicle images are just for reference. You may get a different vehicle of similar quality depending on destination.",
    icon: CarFront,
  },
  {
    id: 6,
    title: "Inclusive Pricing",
    description: "All prices include VAT, gratuities, meet and greet services.",
    icon: ReceiptText,
  },
];

export default function JourneyInclusions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Mobile View Button */}
      <div className="block h-[3.125rem] w-full rounded-lg bg-white xl:hidden">
        <div className="flex cursor-pointer gap-2 p-4" onClick={openModal}>
          <div className="flex items-center gap-1">
            <WarningIcon className="h-[18px] w-[18px] text-[var(--brand-icon-color)]" />
            <h2 className="text-xs font-medium md:text-base">
              Journey Inclusions
            </h2>
          </div>
        </div>
      </div>

      {/* Modal for Mobile View */}
      <Dialog.Root open={isModalOpen} onOpenChange={closeModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-20 flex items-center justify-center"
          >
            <Dialog.Content className="relative w-[18.75rem] max-w-lg rounded-lg bg-white p-6 sm:w-[27.5rem]">
              {/* Header Row */}

              {/* Dynamic content rendering */}
              <div className="mt-2 space-y-4">
                <div className="-mt-3 mb-6 ml-0 flex items-center justify-between">
                  <div className="flex items-center justify-center gap-4">
                    <WarningIcon className="h-4 w-4 text-[var(--brand-icon-color)]" />
                    <h2 className="text-sm font-semibold">
                      Journey Inclusions
                    </h2>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      onClick={closeModal}
                      className="text-md -mr-2 text-gray-500 focus:outline-none"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
                {journeyInclusionsData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-start gap-4">
                      <div>
                        <Icon className="h-4 w-4 text-[var(--brand-icon-color)]" />
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-gray-800 sm:text-sm">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-gray-600 sm:text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Dialog.Content>
          </motion.div>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
