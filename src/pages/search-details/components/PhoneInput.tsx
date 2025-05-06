import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleAlert, Search } from "lucide-react";
import { COUNTRY_CODES } from "@/lib/CURRENCIES";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { TPassengerDetails } from "../passenger-details-form-schema";

const PhoneInput = () => {
  const methods = useFormContext<TPassengerDetails>();
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const contactNumber = methods.watch("contactNumber");
  const isActive = isFocused || (contactNumber && contactNumber.length > 0);
  const hasError = !!methods.formState.errors.contactNumber;

  const searchInputRef = useRef<HTMLInputElement>(null); // Step 1: create ref

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Step 2: after searchTerm change, manually focus again
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="flex w-full flex-col space-y-2">
      <div className="group relative flex items-start space-x-0 rounded-xl border border-transparent bg-[#f6f7f9] focus-within:border-[#000000]/50 lg:space-x-0">
        {/* Country Code Dropdown */}
        <div className="relative shrink-0">
          <Select
            value={selectedCountry?.abbreviation || ""}
            onValueChange={(code: string) => {
              const country = COUNTRY_CODES.find(
                (c) => c.abbreviation === code,
              );
              setSelectedCountry(country!);
              setSearchTerm("");
            }}
          >
            <SelectTrigger className="h-12 rounded-l-xl rounded-r-none border border-none group-hover:bg-[#EBECF0] focus:outline-none focus:ring-0 lg:h-14">
              <SelectValue placeholder="Country">
                {selectedCountry?.value || "Select"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="relative min-h-72 min-w-72 bg-[#f6f7f9] px-1 pt-1 focus:outline-none">
              <div className="fixed z-10 w-[97%] bg-[#f6f7f9]">
                <div className="mb-0 flex items-center rounded-lg bg-white px-2">
                  <Search className="mr-2 text-gray-400" size={16} />
                  <Input
                    ref={searchInputRef} // Step 1: assign ref
                    placeholder="Search countries"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onClick={(e) => e.stopPropagation()}
                    onFocus={(e) => e.stopPropagation()}
                    className="w-full rounded-lg border-none py-3.5 shadow-none focus:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <div className="z-0 w-full pt-[54px]">
                {COUNTRY_CODES.filter(
                  (country) =>
                    country.country
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    country.abbreviation
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()),
                ).map((country) => (
                  <SelectItem
                    key={country.abbreviation}
                    value={country.abbreviation}
                    className="data-[highlighted]:bg-red-100 data-[state=checked]:bg-red-100"
                  >
                    <div className="flex w-full justify-between">
                      <div>{country.country}</div>
                      <div>({country.value})</div>
                    </div>
                  </SelectItem>
                ))}

                {/* No country found */}
                {searchTerm !== "" &&
                  COUNTRY_CODES.filter(
                    (country) =>
                      country.country
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      country.abbreviation
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                  ).length === 0 && (
                    <div className="flex w-full justify-center py-4 text-center">
                      No country found!
                    </div>
                  )}
              </div>
            </SelectContent>
          </Select>
        </div>

        {/* Phone Number Field */}
        <div className="relative w-full">
          <div
            className={cn(
              "relative h-12 w-full flex-grow items-center justify-between overflow-hidden rounded-l-none rounded-r-xl bg-[#F5F6FA] text-xs font-normal text-[#0d0d0d]/50 shadow-none group-hover:bg-[#EBECF0] placeholder:hover:text-drivado-red focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:text-xs lg:h-14 lg:text-sm xl:text-sm 2xl:text-sm",
              hasError && "border border-drivado-red",
            )}
          >
            {/* Animated Label */}
            <label
              className={cn(
                "absolute left-4 text-[8px] font-medium text-[#0D0D0D]/50 transition-all duration-200 hover:cursor-text xl:text-[10px]",
                isActive ? "top-2 opacity-100" : "-top-4 opacity-0",
              )}
            >
              Phone Number <span className="text-drivado-red">*</span>
            </label>

            {/* Input */}
            <input
              type="number"
              placeholder="Enter your phone number"
              value={contactNumber}
              onChange={(e) => {
                methods.setValue("contactNumber", e.target.value);
                methods.clearErrors("contactNumber");
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                methods.trigger("contactNumber");
              }}
              className={cn(
                "h-12 w-full border border-transparent bg-[#F5F6FA] px-4 text-xs font-normal text-[#0D0D0D] transition-all duration-200 focus:outline-none focus:ring-0 lg:h-14 2xl:text-sm",
                isActive ? "pt-[10px]" : "pt-0",
                hasError && "pr-10",
              )}
              style={{
                transitionProperty: "padding-top, transform",
                transitionDuration: "200ms",
              }}
            />

            {/* Error Icon */}
            {hasError && (
              <div className="absolute right-4 top-0 flex h-full items-center">
                <CircleAlert className="size-5 text-[#dc3545] md:size-4 2xl:size-5" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Error Message */}
      {hasError && (
        <div className="mt-1 flex w-full justify-between px-0">
          <p className="text-[10px] text-[#dc3545] 2xl:text-xs">
            {methods.formState.errors.contactNumber?.message ||
              "Phone number is required!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
