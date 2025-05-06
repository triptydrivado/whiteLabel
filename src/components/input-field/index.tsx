import React from "react";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import {
  PassengerDetailsKey,
  TPassengerDetails,
} from "@/pages/b2c/search-details/passenger-details-form-schema";
import { CircleAlert } from "lucide-react";

type AllowedKeys = Exclude<PassengerDetailsKey, "isPassenger" | "consent">;
type InputSpecificFormSchema = Omit<
  TPassengerDetails,
  "isPassenger" | "consent"
>;
interface InputWrapperProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  type: string;
  className?: string;
  error?: string;
  field: AllowedKeys;
  isRequired?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputWrapperProps>(
  ({
    label,
    type,
    // className,
    field,
    placeholder,
    isRequired = false,
    ...props
  }) => {
    const methods = useFormContext<InputSpecificFormSchema>();

    const errors = methods.formState.errors;
    const currentValue = methods.watch(field);
    const [isFocused, setIsFocused] = React.useState(false);

    // Determine if the input is active (focused or has content)
    const isActive = isFocused || (currentValue && currentValue.length > 0);

    return (
      <div className="relative">
        {/* Fixed height container */}
        <div
          className={cn(
            "relative h-12 w-full overflow-hidden rounded-lg border border-transparent bg-[#F5F6FA] focus-within:border-[#000000]/50 hover:bg-[#EBECF0] lg:h-14",
            errors[field] ? "border border-drivado-red" : "",
          )}
        >
          {/* Label - animated to slide in from top */}
          <label
            className={cn(
              "absolute left-4 text-[8px] font-medium text-[#0D0D0D]/50 transition-all duration-200 hover:cursor-text xl:text-[10px]",
              isActive ? "top-2 opacity-100" : "-top-4 opacity-0",
            )}
            htmlFor={field}
          >
            {label}
            {isRequired && <span className="text-drivado-red">*</span>}
          </label>

          {/* Input with transition for text position */}
          <input
            id={field}
            {...props}
            {...methods.register(field, {
              onBlur: () => {
                methods.trigger(field);
                setIsFocused(false);
              },
            })}
            type={type}
            defaultValue={undefined}
            placeholder={placeholder}
            onFocus={() => {
              methods.clearErrors(field);
              setIsFocused(true);
            }}
            className={cn(
              "h-12 w-full bg-transparent px-4 text-xs font-normal text-[#0D0D0D] transition-all duration-200 placeholder:text-[#0D0D0D]/50 focus:outline-none focus:ring-0 md:pb-1 lg:h-14 2xl:text-sm",
              isActive
                ? "pt-4" // Push text down when active
                : "pt-0", // Center text when inactive
              errors[field] ? "pr-10" : "", // Add right padding when error icon is present
            )}
            style={{
              transitionProperty: "padding-top, transform",
              transitionDuration: "200ms",
            }}
          />

          {/* Error icon - positioned inside the input container */}
          {errors[field] && (
            <div className="absolute right-4 top-0 flex h-full items-center">
              <CircleAlert className="size-5 text-[#dc3545] md:size-4 2xl:size-5" />
            </div>
          )}
        </div>

        {/* Error message below input */}
        {errors[field] && (
          <div className="mt-1 flex w-full justify-between px-0">
            <h2 className="text-[10px] text-[#dc3545] 2xl:text-xs">
              {errors[field].message}
            </h2>
          </div>
        )}
      </div>
    );
  },
);

export default InputField;
