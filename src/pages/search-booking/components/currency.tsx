import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Type and Zod Schemas
import { type TBookingSchema } from "../schemas/booking-form";

import { COUNTRY_CODES } from "@/utils/CURRENCIES";
import { Label } from "@/components/ui/label";
import CashIcon from "@/assets/svgs/cash-icon";

type Props = {
  label: string;
  name: "currency";
  baseStyle?: string;
  className?: string;
};

export default function Currency({ label, name, baseStyle, className }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const methods = useFormContext<TBookingSchema>();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [clickedInside, setClickedInside] = useState(false);
  const [shouldScrollToActive, setShouldScrollToActive] = useState(false);
  // Use refs to track dialog close button
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  // Refs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dialogListRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Improved search algorithm that prioritizes exact matches and word boundaries
  const filteredCountries = React.useMemo(() => {
    if (!searchQuery) return COUNTRY_CODES;

    const query = searchQuery.toLowerCase().trim();

    // First, find exact matches
    const exactMatches = COUNTRY_CODES.filter(
      (country) =>
        country.country.toLowerCase() === query ||
        country.currency.toLowerCase() === query,
    );

    // If we have exact matches, only return those
    if (exactMatches.length > 0) {
      return exactMatches;
    }

    // Next, find word boundary matches (starts with the query)
    const startsWithMatches = COUNTRY_CODES.filter(
      (country) =>
        country.country.toLowerCase().startsWith(query) ||
        country.currency.toLowerCase().startsWith(query),
    );

    // If we have starts-with matches, return those
    if (startsWithMatches.length > 0) {
      return startsWithMatches;
    }

    // Finally, return partial matches as fallback
    return COUNTRY_CODES.filter(
      (country) =>
        country.country.toLowerCase().includes(query) ||
        country.currency.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Efficient search handler with debounce
  const handleSearch = useCallback((value: string) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search for better performance
    searchTimeoutRef.current = setTimeout(() => {
      setSearchQuery(value);

      // Reset active index when search query changes
      if (value) {
        setActiveIndex(0); // Set to first match when searching
        setShouldScrollToActive(true); // Enable scrolling when searching
      } else {
        setActiveIndex(-1); // Reset when search is cleared
      }
    }, 150);
  }, []);

  // Handle dialog country selection
  const handleDialogCountrySelect = useCallback(
    (country: (typeof COUNTRY_CODES)[number]) => {
      // Update the form value
      methods.setValue(name, country, { shouldValidate: true });

      // Explicitly close the dialog
      setShow(false);
    },
    [methods, name],
  );

  // Handle dropdown country selection
  const handleDropdownCountrySelect = useCallback(
    (country: (typeof COUNTRY_CODES)[number]) => {
      // Update the form value
      methods.setValue(name, country, { shouldValidate: true });

      // Close the dropdown
      setClickedInside(false);
    },
    [methods, name],
  );

  // Scroll to active item only when searching, not on hover
  useEffect(() => {
    if (activeIndex === -1 || !shouldScrollToActive) return;

    const list = clickedInside ? listRef.current : dialogListRef.current;
    if (!list) return;

    const commandItems = list.querySelectorAll('[role="option"]');
    if (!commandItems || !commandItems[activeIndex]) return;

    // Use block: 'nearest' for more natural scrolling
    commandItems[activeIndex].scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [activeIndex, clickedInside, filteredCountries, shouldScrollToActive]);

  // Handle outside clicks
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        (divRef.current && !divRef.current.contains(target)) ||
        listRef.current?.contains(target)
      ) {
        setTimeout(() => setClickedInside(false), 1);
      } else {
        setClickedInside(true);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (!buttonRef.current) return;
    buttonRef.current.click();
  };

  // Function to handle mouse enter without unwanted scrolling
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    // Disable scrolling on hover
    setShouldScrollToActive(false);
  };

  // Dialog keyboard navigation handler
  const handleDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : prev,
      );
      setShouldScrollToActive(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      setShouldScrollToActive(true);
    } else if (
      e.key === "Enter" &&
      activeIndex >= 0 &&
      activeIndex < filteredCountries.length
    ) {
      e.preventDefault();
      const selectedCountry = filteredCountries[activeIndex];

      // Update the value in the form
      methods.setValue(name, selectedCountry, { shouldValidate: true });

      // Close the dialog
      setShow(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setShow(false);
    }
  };

  // Dropdown keyboard navigation handler
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : prev,
      );
      setShouldScrollToActive(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      setShouldScrollToActive(true);
    } else if (
      e.key === "Enter" &&
      activeIndex >= 0 &&
      activeIndex < filteredCountries.length
    ) {
      e.preventDefault();
      const selectedCountry = filteredCountries[activeIndex];

      // Update the value in the form
      methods.setValue(name, selectedCountry, { shouldValidate: true });

      // Close the dropdown
      setClickedInside(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setClickedInside(false);
    }
  };

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem
            onClick={handleClick}
            className={cn(
              "relative flex w-full items-center justify-between gap-8 space-y-0 xl:hidden",
              baseStyle,
              className,
            )}
          >
            <FormLabel
              onClick={(e) => e.preventDefault()}
              className="text-xs font-normal capitalize leading-[1.25rem] text-[#757575] md:text-2xl md:leading-[2.375rem]"
            >
              {field.value?.country || label}
            </FormLabel>
            <Dialog open={show} onOpenChange={setShow}>
              <DialogTrigger asChild>
                <FormControl className="w-full">
                  <Button
                    type="button"
                    ref={buttonRef}
                    variant="outline"
                    role="combobox"
                    className="mt-0 inline-flex h-auto max-w-fit items-center justify-end gap-2 truncate border-none bg-transparent p-0 px-0 text-right text-sm font-normal leading-[1.25rem] text-black shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 md:text-2xl md:leading-[2.375rem]"
                  >
                    {field.value?.currency ? (
                      <span>{field.value.currency}</span>
                    ) : (
                      <span className="text-black">Select</span>
                    )}

                    <ChevronDown className="h-4 w-4 shrink-0 translate-y-[2px] self-center opacity-50" />
                  </Button>
                </FormControl>
              </DialogTrigger>
              <DialogContent className="z-50 w-[calc(100%_-_16px)] max-w-[21.5625rem] overflow-scroll rounded-lg p-0 sm:rounded-lg md:max-w-[32.1875rem] md:rounded-lg">
                <DialogTitle className="sr-only">Currency</DialogTitle>
                <DialogClose className="hidden" ref={dialogCloseRef} />
                <Command className="rounded-lg" onKeyDown={handleDialogKeyDown}>
                  <CommandInput
                    className="truncate border-0 focus-visible:outline-none focus-visible:ring-transparent"
                    placeholder="Search for a Country"
                    onClick={(e) => e.stopPropagation()}
                    onValueChange={handleSearch}
                    autoFocus
                  />
                  <CommandList
                    ref={dialogListRef}
                    className="m-0 scrollbar-none"
                  >
                    <CommandEmpty>No Country found.</CommandEmpty>
                    <CommandGroup>
                      {filteredCountries.map((COUNTRY, index) => (
                        <CommandItem
                          key={COUNTRY.country}
                          value={COUNTRY.country}
                          disabled={COUNTRY.currency === "N/A"}
                          keywords={[COUNTRY.currency, COUNTRY.country]}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onSelect={() => handleDialogCountrySelect(COUNTRY)}
                          data-active={index === activeIndex}
                          className={cn(
                            `w-full items-start justify-between rounded-[1.25rem] border border-transparent p-4 text-base hover:cursor-pointer md:rounded-[2rem] [&[aria-selected="true"]]:border-gray-300 [&[aria-selected="true"]]:bg-gray-100`,
                            index === activeIndex &&
                              "border-gray-300 bg-gray-100",
                            field.value?.country === COUNTRY.country &&
                              "border-gray-300 bg-gray-100",
                          )}
                        >
                          <div className="flex w-full justify-between gap-x-4 focus-visible:border-0 focus-visible:ring-0">
                            <span className="text-left font-semibold leading-[normal] text-[#303030]">
                              {COUNTRY.country}
                            </span>
                            <span className="font-normal leading-[normal] text-[#535353]">
                              {COUNTRY.currency}
                            </span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>
          </FormItem>

          <div
            tabIndex={0}
            ref={divRef}
            onClick={() => setClickedInside(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setClickedInside(true);
                return;
              }
            }}
            className={cn(
              "relative hidden items-center gap-[6px] hover:cursor-pointer xl:flex",
              baseStyle,
              "border border-transparent focus-within:min-w-[11.5rem] focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:px-[0.625rem] xl:py-[0.8rem] [&_svg]:focus-visible:text-drivado-red",
              clickedInside &&
                "border-gray-300 bg-gray-100 [&_>_svg]:text-drivado-red",
              className,
            )}
          >
            <CashIcon className="text-[#999999]" />

            <div className="xl:flex xl:flex-1 xl:flex-col">
              <Label
                htmlFor={name}
                className={
                  "mt-0 hidden h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.25rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 md:leading-[2.375rem] xl:block xl:h-auto xl:pb-2 xl:font-medium xl:leading-none"
                }
              >
                {label}
              </Label>

              <div
                id={name}
                aria-haspopup="listbox"
                aria-controls="combobox-list"
                className={cn(
                  "peer truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize leading-[1.25rem] text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:leading-[1.25rem] placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 md:text-2xl md:leading-[2.375rem] md:placeholder:text-2xl md:placeholder:leading-[2.375rem] xl:h-auto xl:text-base xl:leading-[normal] xl:placeholder:truncate xl:placeholder:text-base",
                )}
              >
                {field.value?.currency ? (
                  <span>{field.value.currency}</span>
                ) : (
                  <span className="text-[#757575]">Select</span>
                )}
              </div>
            </div>

            {clickedInside && (
              <div className="absolute -inset-x-px top-[calc(100%_+_0.5rem)] z-10 h-64 w-auto gap-[2px] overflow-scroll rounded-lg border border-gray-300 bg-white text-sm text-black shadow-md scrollbar-none">
                <Command
                  className="rounded-lg py-1"
                  onKeyDown={handleDropdownKeyDown}
                >
                  <CommandInput
                    className="truncate border-0 focus-visible:outline-none focus-visible:ring-transparent"
                    placeholder="Search for a Country"
                    onClick={(e) => e.stopPropagation()}
                    onValueChange={handleSearch}
                    autoFocus
                  />
                  <CommandList
                    ref={listRef}
                    className="m-0 rounded-b-[1.25rem] scrollbar-none md:rounded-b-[2rem]"
                  >
                    <CommandEmpty>No Country found.</CommandEmpty>
                    <CommandGroup>
                      {filteredCountries.map((COUNTRY, index) => (
                        <CommandItem
                          key={COUNTRY.country}
                          value={COUNTRY.country}
                          disabled={COUNTRY.currency === "N/A"}
                          keywords={[COUNTRY.currency, COUNTRY.country]}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onSelect={() => handleDropdownCountrySelect(COUNTRY)}
                          data-active={index === activeIndex}
                          className={cn(
                            `w-full items-start justify-between rounded-xl border-b border-t border-transparent px-4 py-3 text-base hover:cursor-pointer md:rounded-none [&[aria-selected="true"]]:border-gray-300 [&[aria-selected="true"]]:bg-gray-100`,
                            index === activeIndex &&
                              "border-gray-300 bg-gray-100",
                            field.value?.country === COUNTRY.country &&
                              "border-gray-300 bg-gray-100",
                          )}
                        >
                          <div className="flex w-full justify-between gap-x-4 focus-visible:border-0 focus-visible:ring-0">
                            <span className="text-left font-semibold leading-[normal] text-[#303030]">
                              {COUNTRY.country}
                            </span>
                            <span className="font-normal leading-[normal] text-[#535353]">
                              {COUNTRY.currency}
                            </span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            )}
          </div>
        </>
      )}
    />
  );
}
