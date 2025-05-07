"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import {
  format,
  eachDayOfInterval,
  startOfToday,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isToday,
  isEqual,
  add,
  isBefore,
} from "date-fns";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Type and Zod Schemas
import { type TBookingSchema } from "../schemas/booking-form";

const WeekInitials: ReadonlyArray<string> = [
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
  "S",
] as const;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: "date";
  label: string;
  className?: string;
  baseStyle?: string;
}

export default function BookingDate({
  label,
  name,
  baseStyle,
  className,
}: Props) {
  // const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [openMobileDialog, setOpenMobileDialog] =
    React.useState<boolean>(false);

  // const divRef = React.useRef<HTMLDivElement>(null);
  const methods = useFormContext<TBookingSchema>();

  const date = methods.watch("date");

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

  return (
    <>
      {/* DESKTOP VIEW */}
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
          baseStyle,
          "border border-transparent px-2.5 py-1 focus-within:min-w-[11.5rem] focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:py-2 [&_svg]:focus-visible:text-drivado-red",
          desktopClickInside &&
            "border-gray-300 bg-gray-100 [&_>_svg]:text-drivado-red",
          className,
        )}
      >
        <CalendarDays className="size-5 text-[#999999]" />
        <div className="xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.25rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 md:text-xs xl:h-auto xl:pb-1 xl:text-xs xl:font-medium xl:leading-none"
            }
          >
            {label}
          </Label>

          <div
            id={name}
            aria-haspopup="listbox"
            aria-controls="combobox-list"
            className={cn(
              "peer w-max truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize leading-[1.25rem] text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:leading-[1.25rem] placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 md:text-2xl md:leading-[2.375rem] md:placeholder:text-2xl md:placeholder:leading-[2.375rem] xl:h-auto xl:text-base xl:leading-[normal] xl:placeholder:truncate xl:placeholder:text-base",
            )}
          >
            {!date && "DD-MM-YYYY"}
            {date && format(date, "dd-MM-yyyy")}
          </div>
        </div>

        {openMobileDialog && (
          <div className="absolute left-4 top-0 z-10 -translate-y-[20%] gap-[2px] overflow-scroll rounded-2xl border border-gray-200 bg-white text-sm text-black shadow-lg scrollbar-none">
            <CalendarPick
              name="date"
              open={openMobileDialog}
              setOpen={() => {
                setOpenMobileDialog(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

const CalendarPick = ({
  name = "date",
  setOpen,
}: {
  name: "date";
  open: boolean;
  setOpen: () => void;
}) => {
  const methods = useFormContext<TBookingSchema>();

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = React.useState(today);
  const [currentMonth, setCurrentMonth] = React.useState(today);
  // const [currentYear, setCurrentYear] = React.useState(today);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const handleChangetoNextMonth = () => {
    setCurrentMonth((p) => {
      const nextMonthFirstDate = add(p, { months: 1 });
      return nextMonthFirstDate;
    });
  };

  const handleChangetoPreviousMonth = () => {
    setCurrentMonth((p) => {
      const prevMonthFirstDate = add(p, { months: -1 });
      return prevMonthFirstDate;
    });
  };

  return (
    <div className={cn("w-80 gap-0 rounded-2xl bg-white p-0")}>
      {/* Calendar Heading */}
      <div className="flex items-center justify-between px-6 pb-3 pt-4">
        <div className="font-medium leading-6 tracking-[0.1px] text-[rgba(0,0,0,0.60)]">
          {format(currentMonth, "MMM yyyy")}
        </div>
        <div className="flex items-center gap-x-[2.625rem]">
          <Button
            type="button"
            size={"icon"}
            variant={"outline"}
            onClick={handleChangetoPreviousMonth}
            className="m-0 size-4 border-0 p-0 shadow-none focus-visible:ring-[#FB4156] focus-visible:ring-offset-2"
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            size={"icon"}
            variant={"outline"}
            onClick={handleChangetoNextMonth}
            className="m-0 size-4 border-0 p-0 shadow-none focus-visible:ring-[#FB4156] focus-visible:ring-offset-2"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 px-3">
        {/* Week Initials */}
        {WeekInitials.map((day, index) => (
          <div
            key={index}
            className="flex size-10 select-none items-center justify-center text-xs font-semibold leading-4 tracking-[0.4px] text-[rgba(0,0,0,0.60)]"
          >
            {day}
          </div>
        ))}

        {/* Dates by weeks */}
        {days.map((day) => (
          <Button
            type="button"
            disabled={
              isBefore(day, add(startOfToday(), { days: -1 })) ||
              !isSameMonth(day, currentMonth)
            }
            key={day.toString()}
            onClick={() => setSelectedDay(day)}
            className={cn(
              "flex size-10 select-none items-center justify-center rounded-full border-0 bg-transparent text-center text-xs font-semibold leading-4 tracking-[0.4px] text-[rgba(0,0,0,0.40)] shadow-none hover:bg-gray-100",
              isSameMonth(currentMonth, day) &&
                "font-semibold text-[rgba(0,0,0,0.87)]",
              isToday(day) && "bg-gray-50 text-drivado-red",
              isEqual(selectedDay, day) &&
                "bg-drivado-red text-white hover:bg-drivado-red",
            )}
          >
            <time dateTime={format(day, "yyyy-MM-dd")} className="rounded-full">
              {format(day, "d")}
            </time>
          </Button>
        ))}
      </div>

      {/* Call to action Buttons */}
      <div className="flex justify-end gap-2 pb-[0.625rem] pr-4 pt-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setOpen();
          }}
          type="button"
          className="min-w-16 border-0 bg-white px-2 py-[0.625rem] text-center text-sm font-bold uppercase leading-[1rem] tracking-[0.4px] text-[#E0606F] shadow-none hover:bg-white focus-visible:ring-[#FB4156] focus-visible:ring-offset-2"
        >
          cancel
        </Button>
        <Button
          type="button"
          className="min-w-16 border-0 bg-white px-2 py-[0.625rem] text-center text-sm font-bold uppercase leading-[1rem] tracking-[0.4px] text-[#FB4156] shadow-none hover:bg-white focus-visible:ring-[#FB4156] focus-visible:ring-offset-2"
          onClick={(e) => {
            e.stopPropagation();
            methods.setValue(name, selectedDay);
            setOpen();
          }}
        >
          ok
        </Button>
      </div>
    </div>
  );
};
