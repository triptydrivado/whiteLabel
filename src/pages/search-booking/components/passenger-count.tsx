import React from "react";
import { Minus, Plus } from "lucide-react";
import UsersIcon from "@/assets/svgs/users-icon";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Type and Zod Schemas
import { type TBookingSchema } from "../schemas/booking-form";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  name: "pax";
  baseStyle?: string;
  className?: string;
};

export default function PassengerCount({
  label,
  name,
  // baseStyle,
  className,
}: Props) {
  const methods = useFormContext<TBookingSchema>();

  const divRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // const handleClick = React.useCallback(() => {
  //   if (!inputRef.current) return;
  //   inputRef.current.focus();
  // }, [inputRef.current]);

  const [clickedInside, setClickedInside] = React.useState(false);

  React.useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setClickedInside(false);
      } else {
        setClickedInside(true);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  });

  const value = methods.watch(name);

  return (
    <>
      <div
        tabIndex={0}
        ref={divRef}
        className={cn(
          "relative flex items-center justify-start gap-[6px] hover:cursor-pointer",
          // baseStyle,
          "border border-transparent px-2.5 py-1 focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:py-1 [&_svg]:focus-visible:text-[var(--brand-theme-color)]",
          className,
          clickedInside &&
            "border-gray-100 bg-gray-100 [&_>_svg]:text-[var(--brand-theme-color)]",
        )}
        onClick={() => setClickedInside(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setClickedInside(true);
            return;
          }
        }}
      >
        <UsersIcon className="size-5 text-[#999999]" />

        <div className="xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.75rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 xl:h-auto xl:text-xs xl:font-medium xl:leading-[1.75rem]"
            }
          >
            {!clickedInside ? label : "Passengers"}
          </Label>

          {!clickedInside && (
            <div className="text-left text-xs text-[#999] xl:text-sm 2xl:text-base">
              {value ? value : "No. of Pax"}
            </div>
          )}
          {clickedInside && (
            <div className="flex h-[30px] w-[100px] items-center justify-start gap-px overflow-hidden rounded-full border border-[var(--brand-theme-color)] bg-[var(--brand-theme-color)] bg-gray-100 p-[2.2px]">
              <Button
                type="button"
                disabled={value <= 1}
                onClick={(e) => {
                  e.stopPropagation();
                  methods.setValue("pax", +value - 1);
                }}
                className="m-0 flex size-6 shrink-0 items-center justify-start rounded-full bg-[var(--brand-theme-color)] p-[5px] leading-none"
              >
                <Minus className="text-white" />
              </Button>
              <Input
                value={value}
                ref={inputRef}
                maxLength={2}
                max={5}
                min={1}
                minLength={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                type="number"
                className="inline-block h-auto flex-grow appearance-none border-0 p-0 text-center text-xs font-medium leading-[normal] text-[#1E1E1E] shadow-none placeholder:text-xs focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent xl:text-sm xl:leading-none xl:placeholder:text-sm 2xl:text-base 2xl:placeholder:text-base"
              />
              <Button
                type="button"
                disabled={value >= 5}
                onClick={(e) => {
                  e.stopPropagation();
                  methods.setValue("pax", +value + 1);
                }}
                className="m-0 flex size-6 shrink-0 items-center justify-start rounded-full bg-[var(--brand-theme-color)] p-[5px] leading-none"
              >
                <Plus className="text-white" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
