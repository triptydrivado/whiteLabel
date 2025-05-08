import { useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Custom Types and Zod Schemas
import { BOOKING_TYPE_VALUES } from "../schemas/booking-tabs";
import { type TBookingSchema } from "../schemas/booking-form";

type Props = {
  className?: string;
};

export default function BookingTypeTabs({ className }: Props) {
  const methods = useFormContext<TBookingSchema>();

  const bookingType = methods.watch("bookingType");

  return (
    <div
      className={cn(
        "flex w-full flex-1 items-center justify-center rounded-full border border-[#E2E2E2] bg-white/55 px-[0.375rem] py-1 shadow-lg xl:border-0 xl:border-transparent xl:px-[3px] xl:shadow-xl 2xl:bg-white",
        className,
        // "xl:shadow-[16px_23px_0px_7px_black]",
      )}
    >
      {BOOKING_TYPE_VALUES.map((BOOKING_TYPE) => (
        <Button
          type="button"
          key={BOOKING_TYPE}
          className={cn(
            "relative flex w-full flex-1 overflow-hidden rounded-full py-[0.375rem] text-xs leading-[normal] text-[#939393] focus-visible:ring-1 xl:h-[34px] xl:px-[9px] xl:py-[6px] xl:text-sm xl:font-semibold",
            bookingType === BOOKING_TYPE &&
              "text-white focus-visible:ring-black",
            bookingType !== BOOKING_TYPE && "focus-visible:ring-drivado-red",
          )}
          onClick={() => methods.setValue("bookingType", BOOKING_TYPE)}
        >
          <AnimatePresence>
            {bookingType === BOOKING_TYPE && (
              <motion.div
                layoutId="booking-tab-mobile"
                className="absolute inset-0 bg-[var(--brand-btn-bg)]"
                transition={{ duration: 0.45 }}
              />
            )}
          </AnimatePresence>
          <motion.p
            className="relative text-center capitalize"
            initial="false"
            animate={{
              color: bookingType === BOOKING_TYPE ? "#ffffff" : "#757575",
            }}
          >
            {BOOKING_TYPE}
          </motion.p>
        </Button>
      ))}
    </div>
  );
}
