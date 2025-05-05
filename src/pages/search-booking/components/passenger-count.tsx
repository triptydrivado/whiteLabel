import React from "react";
import { Minus, Plus } from "lucide-react";
import UsersIcon from "@/assets/svgs/users-icon";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

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
  baseStyle,
  className,
}: Props) {
  const methods = useFormContext<TBookingSchema>();

  const divRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = React.useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [inputRef.current]);

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
      <FormField
        name={name}
        control={methods.control}
        render={({ field: { value, ...field } }) => (
          <FormItem
            ref={divRef}
            onClick={handleClick}
            className={cn(
              "relative flex items-center justify-between gap-8 space-y-0 xl:hidden",
              baseStyle,
              className,
            )}
          >
            <FormLabel className="text-xs font-normal capitalize leading-[1.25rem] text-[#757575] md:text-2xl md:leading-10">
              {label}
            </FormLabel>
            <FormControl>
              <div className="flex w-20 items-center justify-center gap-px overflow-hidden rounded-full border border-[#FFB1BA] bg-[#FFF2F3] p-[2px] md:w-[9.375rem]">
                <Button
                  type="button"
                  disabled={value <= 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    methods.setValue("pax", +value - 1);
                  }}
                  className="m-0 flex shrink-0 items-center justify-center rounded-full bg-drivado-red p-[5px] leading-none disabled:bg-[#FFB1BA] md:p-[0.625rem]"
                >
                  <Minus className="size-[0.625rem] text-white md:size-5" />
                </Button>
                <Input
                  {...field}
                  value={value}
                  ref={inputRef}
                  maxLength={2}
                  max={99}
                  min={1}
                  minLength={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.preventDefault();
                  }}
                  type="number"
                  className="inline-block h-5 flex-grow appearance-none border-0 p-0 text-center text-base font-medium leading-[normal] text-[#1E1E1E] shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:h-9 md:text-[2rem]"
                />
                <Button
                  type="button"
                  disabled={value >= 99}
                  onClick={(e) => {
                    e.stopPropagation();
                    methods.setValue("pax", +value + 1);
                  }}
                  className="m-0 flex shrink-0 items-center justify-center rounded-full bg-drivado-red p-[5px] leading-none disabled:bg-[#FFB1BA] md:p-[0.625rem]"
                >
                  <Plus className="size-[0.625rem] text-white md:size-5" />
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <div
        tabIndex={0}
        ref={divRef}
        className={cn(
          "relative hidden items-center justify-center gap-[6px] hover:cursor-pointer xl:flex",
          baseStyle,
          "border border-transparent focus-within:min-w-[9rem] focus-visible:border-[#FFB1BA] focus-visible:bg-[#FFF2F3] xl:h-auto xl:min-w-[9rem] xl:p-[0.625rem] [&_>_svg]:focus-visible:text-drivado-red",
          className,
          clickedInside &&
            "border-[#FFB1BA] bg-[#FFF2F3] [&_>_svg]:text-drivado-red",
        )}
        onClick={() => setClickedInside(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setClickedInside(true);
            return;
          }
        }}
      >
        {!clickedInside && <UsersIcon className="size-6 text-[#999999]" />}

        <div className="max-w-[120px] gap-y-[5px] pl-2 text-center xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 hidden h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 pl-2.5 text-right text-sm font-normal capitalize leading-[1.25rem] text-[#1E1E1E] shadow-none focus-within:bg-[#FFF2F3] peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 md:text-2xl md:leading-[2.375rem] xl:-mt-1 xl:block xl:pb-0.5 xl:text-[11px] xl:font-medium xl:leading-none 2xl:text-sm"
            }
          >
            {!clickedInside ? label : "Passengers"}
          </Label>

          {!clickedInside && (
            <span className="pl-4 text-left text-xs text-[#999] xl:text-base">
              {value ? value : "No. of Pax"}
            </span>
          )}
          {clickedInside && (
            <div className="flex h-[30px] w-[100px] items-center justify-center gap-px overflow-hidden rounded-full border border-[#FFB1BA] bg-[#FFF2F3] bg-[rgba(251,65,86,0.15)] p-[2.2px]">
              <Button
                type="button"
                disabled={value <= 1}
                onClick={(e) => {
                  e.stopPropagation();
                  methods.setValue("pax", +value - 1);
                }}
                className="m-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-drivado-red p-[5px] leading-none"
              >
                <Minus className="text-white" />
              </Button>
              <Input
                value={value}
                ref={inputRef}
                maxLength={2}
                max={99}
                min={1}
                minLength={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                type="number"
                className="inline-block h-auto flex-grow appearance-none border-0 p-0 text-center text-sm font-medium leading-[normal] text-[#1E1E1E] shadow-none placeholder:text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:text-[2rem] xl:text-sm xl:leading-none"
              />
              <Button
                type="button"
                disabled={value >= 99}
                onClick={(e) => {
                  e.stopPropagation();
                  methods.setValue("pax", +value + 1);
                }}
                className="m-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-drivado-red p-[5px] leading-none"
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
