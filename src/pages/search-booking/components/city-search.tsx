import React from "react";
import { useFormContext } from "react-hook-form";

// Shadcn Primitives
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// types
import { type TBookingSchema } from "../schemas/booking-form";
import {
  DEFAULT_SEARCH_LOCATION,
  searchLocationApiSchema,
  type TSearchLocationApi,
} from "../schemas/search-location";
// import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import for Apis
const CITY_SEARCH_API = import.meta.env.VITE_LOCATION_SEARCH_API;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: "from" | "to";
  label: string;
  baseStyle?: string;
  className?: string;
}

type State = {
  // Local State
  input: string;
  debouncedInput: string;
  isMounted: boolean;
  isDropDownVisible: boolean;

  // Fetch State
  isFetching: boolean;
  isFetched: boolean;
  locations: TSearchLocationApi;
  activeLocationsIndex: number;
  fetchLock: boolean;
};

enum ActionType {
  SET_INPUT = "CHANGE_INPUT",
  SET_DEBOUNCE = "CHANGE_DEBOUNCED_INPUT",

  START_FETCHING = "SET_IS_FETCHING",
  END_FETCHING = "UNSET_IS_FETCHING",

  SET_FETCHED = "SET_FETCHED",
  SET_NOT_FETCHED = "UNSET_FETCHED",

  SET_FETCHED_LOCATIONS = "SET_FETCHED_LOCATIONS",

  SHOW_DROPDOWN = "SET_DROP_DOWN_TO_TRUE",
  HIDE_DROPDOWN = "SET_DROP_DOWN_TO_FALSE",
  TOGGLE_DROPDOWN = "INVERT_DROP_DOWN_STATE",

  INCREMENT_ACTIVE_LOCATION_INDEX = "INCREMENT_ACTIVE_LOCATION_INDEX_BY_1",
  DECREMENT_ACTIVE_LOCATION_INDEX = "DECREMENT_ACTIVE_LOCATION_INDEX_BY_1",

  SET_LIST_LOCATION_TO_FORM = "SET_LIST_LOCATION_TO_FORM",
  SET_LIST_LOCATION_TO_FORM_CLICK = "SET_LIST_LOCATION_TO_FORM_CLICK",

  SET_FETCH_LOCK = "SET_FETCH_LOCK",
  UNSET_FETCH_LOCK = "UNSET_FETCH_LOCK",
}

type Action =
  | { type: ActionType.SET_INPUT; payload: string }
  | { type: ActionType.SET_DEBOUNCE }
  | { type: ActionType.START_FETCHING }
  | { type: ActionType.END_FETCHING }
  | { type: ActionType.SET_FETCHED }
  | { type: ActionType.SET_NOT_FETCHED }
  | { type: ActionType.SET_FETCHED_LOCATIONS; payload: TSearchLocationApi }
  | { type: ActionType.SHOW_DROPDOWN }
  | { type: ActionType.HIDE_DROPDOWN }
  | { type: ActionType.TOGGLE_DROPDOWN }
  | { type: ActionType.INCREMENT_ACTIVE_LOCATION_INDEX }
  | { type: ActionType.DECREMENT_ACTIVE_LOCATION_INDEX }
  | { type: ActionType.SET_LIST_LOCATION_TO_FORM }
  | { type: ActionType.SET_LIST_LOCATION_TO_FORM_CLICK; payload: number }
  | { type: ActionType.SET_FETCH_LOCK }
  | { type: ActionType.UNSET_FETCH_LOCK };

const initialState: Readonly<State> = {
  // Local State
  input: "",
  debouncedInput: "",
  isMounted: false,
  isDropDownVisible: false,

  // Fetch State
  isFetching: false,
  isFetched: false,
  locations: [],
  activeLocationsIndex: 0,
  fetchLock: true,
} as const;

const stateReducer: (state: State, action: Action) => State = (
  state,
  action,
) => {
  const { input, isDropDownVisible, locations, activeLocationsIndex } = state;
  const listLength = locations.length;

  const nextIndex = (activeLocationsIndex + 1) % listLength;
  const prevIndex =
    activeLocationsIndex === 0
      ? locations.length - 1
      : activeLocationsIndex - 1;

  switch (action.type) {
    // Input and Debounce
    case ActionType.SET_INPUT:
      return { ...state, input: action.payload };
    case ActionType.SET_DEBOUNCE:
      return { ...state, debouncedInput: input };

    // IsDebounce
    case ActionType.START_FETCHING:
      return { ...state, isFetching: true };
    case ActionType.END_FETCHING:
      return { ...state, isFetching: false };
    case ActionType.SET_FETCHED_LOCATIONS:
      return { ...state, locations: action.payload };

    // Dropdown
    case ActionType.SHOW_DROPDOWN:
      return { ...state, isDropDownVisible: true };
    case ActionType.HIDE_DROPDOWN:
      return { ...state, isDropDownVisible: false };
    case ActionType.TOGGLE_DROPDOWN:
      return { ...state, isDropDownVisible: !isDropDownVisible };

    // ActiveLocationsIndex
    case ActionType.INCREMENT_ACTIVE_LOCATION_INDEX:
      if (!isDropDownVisible) {
        return { ...state, isDropDownVisible: true };
      }

      return { ...state, activeLocationsIndex: nextIndex };

    case ActionType.DECREMENT_ACTIVE_LOCATION_INDEX:
      if (!isDropDownVisible) {
        return { ...state, isDropDownVisible: true };
      }

      return { ...state, activeLocationsIndex: prevIndex };

    // Set Location to input
    case ActionType.SET_LIST_LOCATION_TO_FORM:
      return {
        ...state,
        input: locations[activeLocationsIndex].structured_formatting.main_text,
        activeLocationsIndex: 0,
        isDropDownVisible: false,
        fetchLock: true,
      };
    case ActionType.SET_LIST_LOCATION_TO_FORM_CLICK:
      return {
        ...state,
        input: locations[action.payload].structured_formatting.main_text,
        activeLocationsIndex: 0,
        isDropDownVisible: false,
        fetchLock: true,
      };

    // Fetch Lock
    case ActionType.SET_FETCH_LOCK:
      return { ...state, fetchLock: true };
    case ActionType.UNSET_FETCH_LOCK:
      return { ...state, fetchLock: false };

    default:
      return initialState;
  }
};

const CitySearch = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  Props
>(({ name, label, baseStyle, className, ...props }, ref) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const optionRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const [state, stateDispatch] = React.useReducer(stateReducer, initialState);
  const methods = useFormContext<TBookingSchema>();

  // Case if not selected dropdown option and blur
  const handleOnBlurEvent = React.useCallback(() => {
    if (
      -1 ===
      state.locations.findIndex(
        (location) => location.structured_formatting.main_text === state.input,
      )
    ) {
      stateDispatch({ type: ActionType.SET_INPUT, payload: "" });
      methods.setValue(name, DEFAULT_SEARCH_LOCATION);
    }
  }, [state.input, state.locations, methods, name]);

  const handleOnKeyDownEvent = React.useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          stateDispatch({ type: ActionType.DECREMENT_ACTIVE_LOCATION_INDEX });
          return;
        case "ArrowDown":
          e.preventDefault();
          stateDispatch({ type: ActionType.INCREMENT_ACTIVE_LOCATION_INDEX });
          return;
        case "Enter":
          e.preventDefault();
          if (!state.isDropDownVisible) return;
          stateDispatch({ type: ActionType.SET_LIST_LOCATION_TO_FORM });
          methods.setValue(name, state.locations[state.activeLocationsIndex]);
          return;
      }
    },
    [
      state.isDropDownVisible,
      state.locations,
      state.activeLocationsIndex,
      methods,
      name,
    ],
  );

  const handleOnChangeEvent = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      methods.setValue(name, DEFAULT_SEARCH_LOCATION);
      stateDispatch({ type: ActionType.UNSET_FETCH_LOCK });
      stateDispatch({ type: ActionType.SHOW_DROPDOWN });
      stateDispatch({ type: ActionType.START_FETCHING });
      stateDispatch({
        type: ActionType.SET_INPUT,
        payload: e.target.value,
      });
    },
    [name, methods],
  );

  // Focus on input when clicking on input
  const handleDivClick = React.useCallback(() => {
    if (!divRef.current || !inputRef.current) return;
    inputRef.current.focus();
  }, []);

  // For Creating this Component Specific APIs
  React.useImperativeHandle(ref, () => ({}));

  // Mouse Event
  React.useEffect(() => {
    const callbackFunction = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        stateDispatch({ type: ActionType.HIDE_DROPDOWN });
      }
    };

    window.addEventListener("mousedown", callbackFunction);

    return () => {
      window.removeEventListener("mousedown", callbackFunction);
    };
  }, []);

  // Initial Set of State
  const watchValue = methods.watch(name)?.structured_formatting.main_text;
  React.useEffect(() => {
    if (watchValue)
      stateDispatch({
        type: ActionType.SET_INPUT,
        payload: watchValue,
      });
  }, [watchValue]);

  // Debouncing Logic
  React.useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      stateDispatch({ type: ActionType.SET_DEBOUNCE });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [state.input]);

  // Fetching Logic
  React.useEffect(() => {
    if (state.fetchLock) return () => {};

    async function fetchLocations() {
      stateDispatch({ type: ActionType.START_FETCHING });

      try {
        const response = await fetch(
          `${CITY_SEARCH_API}?input=${state.debouncedInput}`,
        );
        const data = await response.json();
        const validatedData = searchLocationApiSchema.safeParse(data);

        if (!validatedData.success) {
          throw new Error();
        }

        stateDispatch({
          type: ActionType.SET_FETCHED_LOCATIONS,
          payload: validatedData.data,
        });
      } catch (e) {
        // Error Handling to be done
        console.log(e);
      } finally {
        stateDispatch({ type: ActionType.END_FETCHING });
      }
    }

    fetchLocations();
  }, [state.debouncedInput, state.fetchLock]);

  // Dropdown auto scroll logic
  React.useEffect(() => {
    const scrollToOption = (index: number) => {
      if (optionRefs.current[index]) {
        optionRefs.current[index].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    };

    scrollToOption(state.activeLocationsIndex);
  }, [state.activeLocationsIndex]);

  const dropdownListLength = state.locations.length;
  const dropdownList = state.locations.map((location, index) => (
    <li
      role="option"
      key={location.place_id}
      ref={(el) => {
        if (el) {
          optionRefs.current[index] = el; // Assign the element to the array
        } else {
          delete optionRefs.current[index]; // Clean up if the element is removed
        }
      }}
      className={cn(
        "w-full border border-transparent p-[0.625rem] text-left",
        index === state.activeLocationsIndex &&
          "rounded-2xl border md:border-[#FFB1BA] md:bg-gray-100",
      )}
      onClick={() => {
        methods.setValue(name, location);
        stateDispatch({
          type: ActionType.SET_LIST_LOCATION_TO_FORM_CLICK,
          payload: index,
        });
      }}
    >
      <p className="truncate text-sm font-normal leading-normal text-black">
        {location.structured_formatting.main_text}
      </p>
      <p className="truncate text-[0.625rem] font-normal leading-normal text-[#9D9D9D]">
        {location.structured_formatting.secondary_text}
      </p>
    </li>
  ));

  // const value = methods.watch(name);

  return (
    <>
      <div
        ref={divRef}
        onClick={handleDivClick}
        className={cn(
          "relative flex items-center gap-[6px] hover:cursor-pointer",
          baseStyle,
          "border border-transparent px-2.5 py-1 focus-visible:border-drivado-red xl:h-auto xl:py-2 [&_svg]:focus-within:text-drivado-red",
          className,
        )}
        {...props}
      >
        <MapPin className="size-5 text-[#999999]" />
        <div className="xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.75rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 xl:h-auto xl:pb-1 xl:font-medium xl:leading-none"
            }
          >
            {label}
          </Label>

          <Input
            id={name}
            name={name}
            ref={inputRef}
            placeholder={"Search Destinations"}
            value={state.input}
            autoComplete="off"
            autoCorrect="off"
            aria-haspopup="listbox"
            aria-controls="combobox-list"
            aria-expanded={state.isDropDownVisible}
            onBlur={handleOnBlurEvent}
            onKeyDown={handleOnKeyDownEvent}
            onChange={handleOnChangeEvent}
            className={cn(
              "peer h-auto truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 xl:placeholder:truncate xl:placeholder:text-xs 2xl:placeholder:text-base",
            )}
          />
        </div>

        {state.isDropDownVisible && (
          <div className="absolute -inset-x-px top-[calc(100%_+_0.5rem)] z-10 h-64 w-auto gap-[2px] rounded-lg border-2 border-[#EEE] bg-white text-sm text-black">
            <ul
              className="absolute inset-3 overflow-scroll rounded-2xl scrollbar-none"
              id="combobox-list"
              role="list"
              ref={listRef}
            >
              {dropdownListLength > 0 && dropdownList}
              {dropdownListLength === 0 && (
                <li
                  role="option"
                  className="h-[78px] border-2 border-transparent p-[0.625rem]"
                >
                  <p className="truncate text-center text-sm font-normal leading-normal text-black">
                    {state.isFetching
                      ? "Loading..."
                      : state.input.length
                        ? "No Such Locations Found"
                        : "Type to Search"}
                  </p>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
});

CitySearch.displayName = "CitySearch";
export default CitySearch;
