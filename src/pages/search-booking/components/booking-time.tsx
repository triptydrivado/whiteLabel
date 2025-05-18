import React from "react";
import { Clock3 } from "lucide-react";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Type and Zod Schemas
import { type TBookingSchema } from "../schemas/booking-form";

// import { format, parse } from "date-fns";
import ClockArrowDownIcon from "@/assets/svgs/clock-arrow-down";

type Props = {
  label: string;
  name: "time";
  baseStyle?: string;
  className?: string;
};

export default function BookingTime({
  label,
  name,
  // baseStyle,
  className,
}: Props) {
  // const [show, setShow] = React.useState<boolean>(false);

  const methods = useFormContext<TBookingSchema>();

  const time = methods.watch(name);

  const [openMobileDialog, setOpenMobileDialog] =
    React.useState<boolean>(false);

  const desktopButtonRef = React.useRef<HTMLDivElement>(null);
  const [desktopClickInside, setDesktopClickInside] =
    React.useState<boolean>(false);
  React.useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (
        desktopButtonRef.current &&
        !desktopButtonRef.current.contains(e.target as Node)
      ) {
        setDesktopClickInside(false);
        setOpenMobileDialog(false);
      } else {
        setDesktopClickInside(true);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Parse time string into a Date object (assuming today's date)
  // const calcTime = time || "00:00";
  // const parsedDate = parse(calcTime, "H:m", new Date());

  // // Format the date in a readable format
  // const formattedTime = format(parsedDate, "hh:mm a"); // e.g., "02:30 PM"

  return (
    <>
      {/* Desktop */}
      <div
        tabIndex={0}
        ref={desktopButtonRef}
        onClick={() => setOpenMobileDialog(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOpenMobileDialog(true);
            return;
          }
        }}
        className={cn(
          "relative flex items-center gap-[6px] hover:cursor-pointer",
          // baseStyle,
          "border border-transparent px-2.5 py-1 focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:py-1 [&_svg]:focus-visible:text-[var(--brand-theme-color)]",
          desktopClickInside &&
            "border-gray-300 bg-gray-100 [&_>_svg]:text-[var(--brand-theme-color)]",
          className,
        )}
      >
        <Clock3 className="size-5 text-[#999999]" />
        <div className="xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.75rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 xl:h-auto xl:text-xs xl:font-medium xl:leading-[1.75rem]"
            }
          >
            {label}
          </Label>

          <div
            id={name}
            aria-haspopup="listbox"
            aria-controls="combobox-list"
            className={cn(
              "peer truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 xl:text-sm xl:placeholder:truncate xl:placeholder:text-sm 2xl:text-base 2xl:placeholder:text-base",
            )}
          >
            {time || "00:00"}
          </div>
        </div>

        {openMobileDialog && (
          <div className="absolute left-4 top-8 z-10 -translate-y-1/2 gap-[2px] overflow-scroll rounded-2xl border border-gray-200 bg-white text-sm text-black shadow-lg scrollbar-none">
            <TimePicker
              onClose={() => {
                setOpenMobileDialog(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

type TimeProps = {
  onClose: () => void;
};

function TimePicker({ onClose }: TimeProps) {
  const hourRef = React.useRef<HTMLInputElement>(null);
  const minRef = React.useRef<HTMLInputElement>(null);

  const methods = useFormContext<TBookingSchema>();

  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);

  // Function to handle increaments and decrements
  const increaseHour = () => {
    setHours((prev) => Math.floor((prev + 1) % 24));
  };

  const decreaseHour = () => {
    setHours((prev) => (prev > 0 ? prev - 1 : 23));
  };

  const increaseMinute = () => {
    // setMinutes((prev) => (prev < 59 ? prev + 1 : 59));
    setMinutes((prev) => Math.floor((prev + 1) % 60));
  };

  const decreaseMinute = () => {
    setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
  };

  // Handlers for manual input changes
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const val = parseInt(e.target.value, 10);
    let val = e.target.value;

    // Remove non-digit characters
    val = val.replace(/\D/g, "");

    // Remove leading zeros, but allow '00'
    if (val.length > 1) val = val.replace(/^0+/, "");

    // Limit to 2 digits
    if (val.length > 2) val = val.slice(0, 2);

    const num = parseInt(val || "0", 10);
    if (!isNaN(num)) {
      setHours(Math.min(num, 23));
    }

    // if (!isNaN(val)) {
    //   if (val < 0) {
    //     setHours(0);
    //   } else if (val > 23) {
    //     setHours(23);
    //   } else {
    //     setHours(val);
    //   }
    // }
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    val = val.replace(/\D/g, "");
    if (val.length > 1) val = val.replace(/^0+/, "");
    if (val.length > 2) val = val.slice(0, 2);

    const num = parseInt(val || "0", 10);
    if (!isNaN(num)) {
      setMinutes(Math.min(num, 59));
    }
    // const val = parseInt(e.target.value, 10);
    // if (!isNaN(val)) {
    //   if (val < 0) {
    //     setMinutes(0);
    //   } else if (val > 59) {
    //     setMinutes(59);
    //   } else {
    //     setMinutes(val);
    //   }
    // }
  };

  // Handlers for keyboard events on hour and minute inputs
  const handleHourKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increaseHour();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decreaseHour();
    }
  };

  const handleMinuteKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increaseMinute();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decreaseMinute();
    }
  };

  return (
    <div className="w-full max-w-80 space-y-6 px-6 py-4">
      {/* Heading */}
      <h3 className="text-xs font-medium uppercase tracking-[1.5px] text-[#717370]">
        select time
      </h3>

      {/* Selected Time Display */}
      <div className="flex w-full max-w-sm gap-x-3">
        <div className="flex w-full flex-1">
          <div>
            <div className="flex justify-center">
              <ClockArrowDownIcon
                className="mb-1.5 h-auto w-6 text-gray-600"
                onClick={increaseHour} // Increase hours
              />
            </div>
            {/* Hour */}
            <Input
              ref={hourRef}
              min={0}
              max={23}
              step={1}
              defaultValue={0}
              type="number"
              // value={hours}
              value={hours.toString().padStart(2, "0")}
              onChange={handleHourChange}
              onKeyDown={handleHourKeyDown}
              // onChange={(e) => {
              //   let value = parseInt(e.target.value, 10);
              //   if (isNaN(value) || value < 0) {
              //     value = 0;
              //   } else if (value > 23) {
              //     value = 23;
              //   }
              //   e.target.value = value.toString();
              // }}
              className="h-full w-28 flex-1 rounded-sm border-0 bg-[#F6F7F9] text-center text-5xl font-medium leading-none text-black shadow-none ring-1 ring-[#DADCE0] focus:bg-[#FFEBED] focus:text-[var(--brand-theme-color)] focus:shadow-none focus:ring-[var(--brand-theme-color)] focus-visible:text-[var(--brand-theme-color)] focus-visible:outline-none focus-visible:ring-[var(--brand-theme-color)] md:text-5xl"
            />
            <div className="flex justify-center">
              <ClockArrowDownIcon
                className="mt-1.5 h-auto w-6 rotate-180 text-gray-600"
                onClick={decreaseHour} // Decrease hours
              />
            </div>
          </div>
          {/* Dots */}
          <div className="mx-[0.625rem] mt-10 flex flex-col justify-center gap-y-6">
            <span className="size-[6px] rounded-full bg-black"></span>
            <span className="size-[6px] rounded-full bg-black"></span>
          </div>
          <div>
            <div className="flex justify-center">
              <ClockArrowDownIcon
                className="mb-1.5 h-auto w-6 text-gray-600"
                onClick={increaseMinute}
              />
            </div>
            {/* Minutes */}
            <Input
              ref={minRef}
              min={0}
              max={59}
              step={1}
              defaultValue={0}
              type="number"
              // value={minutes}
              value={minutes.toString().padStart(2, "0")}
              onChange={handleMinuteChange}
              onKeyDown={handleMinuteKeyDown}
              // onChange={(e) => {
              //   let value = parseInt(e.target.value, 10);
              //   if (isNaN(value) || value < 0) {
              //     value = 0;
              //   } else if (value > 59) {
              //     value = 59;
              //   }
              //   e.target.value = value.toString();
              // }}
              className="h-full w-28 flex-1 rounded-sm border-0 bg-[#F6F7F9] text-center text-5xl font-medium leading-none text-black shadow-none ring-1 ring-[#DADCE0] focus:bg-[#FFEBED] focus:text-[var(--brand-theme-color)] focus:shadow-none focus:ring-[var(--brand-theme-color)] focus-visible:text-[var(--brand-theme-color)] focus-visible:outline-none focus-visible:ring-[var(--brand-theme-color)] md:text-5xl"
            />
            <div className="flex justify-center">
              <ClockArrowDownIcon
                className="z-10 mt-1.5 h-auto w-6 rotate-180 text-gray-600 hover:text-[#fb4156]"
                onClick={decreaseMinute}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end pt-10">
        <div className="">
          <Button
            type="button"
            className="px-2 py-[0.625rem] uppercase text-[var(--brand-theme-color)]"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            cancel
          </Button>
          <Button
            type="button"
            className="px-2 py-[0.625rem] uppercase text-[var(--brand-theme-color)]"
            onClick={(e) => {
              e.stopPropagation();
              const hour = hourRef.current?.value.padStart(2, "0");
              const minute = minRef.current?.value.padStart(2, "0");
              console.log(`${hourRef.current?.value}:${minRef.current?.value}`);
              methods.setValue(
                "time",
                `${hour}:${minute}`,
                // `${hourRef.current?.value}:${minRef.current?.value}`,
              );
              onClose();
            }}
          >
            ok
          </Button>
        </div>
      </div>
    </div>
  );
}
