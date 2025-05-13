import React from "react";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import {
  // FormControl,
  FormField,
} from "@/components/ui/form";

import { Timer } from "lucide-react";

// Types and Zod Validation
import type { TBookingSchema } from "../schemas/booking-form";

import { DURATIONS } from "@/lib/DURATION";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  name: "duration";
  baseStyle?: string;
  className?: string;
};

export default function Duration({ name, baseStyle, className }: Props) {
  // const [show, setShow] = React.useState(false);
  const methods = useFormContext<TBookingSchema>();

  // const buttonRef = React.useRef<HTMLButtonElement>(null);

  // const handleClick = React.useCallback(() => {
  //   if (!buttonRef.current) return;
  //   buttonRef.current.click();
  // }, [buttonRef.current]);

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
    <FormField
      control={methods.control}
      name={name}
      render={({ field: { value } }) => {
        // const selectedDuration = DURATIONS.find(
        //   (DURATION) => DURATION.hours === value,
        // )?.hours;

        return (
          <>
            <div
              tabIndex={0}
              ref={desktopButtonRef}
              // onClick={handleDivClick}
              onClick={() => setDesktopClickInside(true)}
              onKeyDown={(e) => {
                console.log(e.key);
                console.log(typeof e.key);
                if (e.key === "Enter") {
                  setDesktopClickInside(true);
                  return;
                }
              }}
              className={cn(
                "relative flex items-center gap-[6px] hover:cursor-pointer",
                baseStyle,
                "border border-transparent px-2.5 py-1 focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:py-1.5 [&_svg]:focus-visible:text-drivado-red",
                desktopClickInside &&
                  "border-[#FFB1BA] bg-gray-100 [&_svg]:text-drivado-red",
                className,
              )}
            >
              <Timer className="size-5 text-[#999999]" />
              <div className="flex flex-1 flex-col">
                <Label
                  htmlFor={name}
                  className={
                    "mt-0 h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.75rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 xl:h-auto xl:text-xs xl:font-medium xl:leading-[1.6875rem]"
                  }
                >
                  Duration
                </Label>

                <div
                  id={name}
                  // name={name}
                  // ref={inputRef}
                  // placeholder={"Select Duration"}
                  // value={state.input}
                  // autoComplete="off"
                  // autoCorrect="off"
                  aria-haspopup="listbox"
                  aria-controls="combobox-list"
                  className={cn(
                    "peer w-full truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:leading-[1.25rem] placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 xl:h-auto xl:text-base xl:leading-[normal] xl:placeholder:truncate xl:placeholder:text-base",
                  )}
                >
                  {value && (
                    <span>
                      {value}
                      &nbsp;
                      {value > 1 ? `hours` : `hour`}
                    </span>
                  )}
                  {!value && (
                    <span className="text-[#757575]">Select Duration</span>
                  )}
                </div>
              </div>

              {desktopClickInside && (
                <div className="border-gra-300 absolute -inset-x-px top-[calc(100%_+_0.5rem)] z-10 h-64 w-auto gap-[2px] overflow-scroll rounded-lg border bg-white text-sm text-black shadow-md scrollbar-none">
                  <div className="sticky left-0 top-0 mb-2 border-b border-[#E2E2E2] bg-white px-4 py-2.5 font-semibold leading-5 text-black">
                    Select Duration
                  </div>
                  <div>
                    {DURATIONS.map((DURATION) => (
                      <div
                        // value={DURATION.hours.toString()}
                        key={DURATION.hours}
                        onSelect={() => {}}
                        onClick={(e) => {
                          e.stopPropagation();
                          // setShow(false);
                          methods.setValue("duration", DURATION.hours);
                          setDesktopClickInside(false);
                        }}
                        className={cn(
                          `w-full items-start justify-between rounded-[1.25rem] border border-transparent px-4 py-1.5 text-sm hover:cursor-pointer [&[aria-selected="true"]]:border-drivado-red [&[aria-selected="true"]]:bg-gray-100`,
                        )}
                      >
                        <div className="flex w-full gap-2">
                          <span className="font-semibold leading-[normal] text-[#303030]">
                            {DURATION.hours > 1
                              ? `${DURATION.hours} hours`
                              : `${DURATION.hours} hour`}
                          </span>
                          <span>/</span>
                          <span className="font-normal leading-[normal] text-[#535353]">
                            {`${DURATION.equivalentKm} Kms`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        );
      }}
    />
  );
}
