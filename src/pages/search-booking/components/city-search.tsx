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
  latLongSchema,
  searchLocationApiSchema,
  TSearchLocation,
  type TSearchLocationApi,
} from "../schemas/search-location";
// import { Button } from "@/components/ui/button";
import { Loader2, MapPin } from "lucide-react";
import { parseISO } from "date-fns";
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
// const CITY_SEARCH_API = import.meta.env.VITE_LOCATION_SEARCH_API;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: "from" | "to";
  label: string;
  baseStyle?: string;
  className?: string;
}

// type City = {
//   _id: string;
//   name: string;
//   category: string;
//   lat: string;
//   lng: string;
//   cityName: string;
//   cityId: string;
//   country: string;
//   address?: {
//     addressOne?: string;
//     addressTwo?: string;
//     addressThree?: string;
//     street?: string;
//     streetNumber?: string;
//     cityName?: string;
//     postalCode?: string;
//   };
// };

// type Place = {
//   _id: string;
//   name: string;
//   category: string;
//   cityName: string;
//   country: string;
//   lat?: string;
//   lng?: string;
//   iata?: string;
//   giataId?: string;
//   address?: {
//     addressOne?: string;
//     addressTwo?: string;
//     addressThree?: string;
//     street?: string;
//     streetNumber?: string;
//     cityName?: string;
//     postalCode?: string;
//   };
// };

type State = {
  // Local State
  input: string;
  debouncedInput: string;
  isMounted: boolean;
  isDropDownVisible: boolean;

  // Fetch State
  isFetching: boolean;
  isFetched: boolean;
  locations: TSearchLocation[];
  activeLocationsIndex: number;
  fetchLock: boolean;
};

//TODO: move to another section

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
  | {
      type: ActionType.SET_FETCHED_LOCATIONS;
      payload: TSearchLocationApi["data"];
    }
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
        input: locations[activeLocationsIndex].mainText,
        activeLocationsIndex: 0,
        isDropDownVisible: false,
        fetchLock: true,
      };
    case ActionType.SET_LIST_LOCATION_TO_FORM_CLICK:
      return {
        ...state,
        input: locations[action.payload].mainText,
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

// const stateReducer: (state: State, action: Action) => State = (
//   state,
//   action,
// ) => {
//   const { input, isDropDownVisible, locations, activeLocationsIndex } = state;
//   const listLength = locations.length;

//   const nextIndex = (activeLocationsIndex + 1) % listLength;
//   const prevIndex =
//     activeLocationsIndex === 0
//       ? locations.length - 1
//       : activeLocationsIndex - 1;

//   switch (action.type) {
//     // Input and Debounce
//     case ActionType.SET_INPUT:
//       return { ...state, input: action.payload };
//     case ActionType.SET_DEBOUNCE:
//       return { ...state, debouncedInput: input };

//     // IsDebounce
//     case ActionType.START_FETCHING:
//       return { ...state, isFetching: true };
//     case ActionType.END_FETCHING:
//       return { ...state, isFetching: false };
//     case ActionType.SET_FETCHED_LOCATIONS:
//       return { ...state, locations: action.payload };

//     // Dropdown
//     case ActionType.SHOW_DROPDOWN:
//       return { ...state, isDropDownVisible: true };
//     case ActionType.HIDE_DROPDOWN:
//       return { ...state, isDropDownVisible: false };
//     case ActionType.TOGGLE_DROPDOWN:
//       return { ...state, isDropDownVisible: !isDropDownVisible };

//     // ActiveLocationsIndex
//     case ActionType.INCREMENT_ACTIVE_LOCATION_INDEX:
//       if (!isDropDownVisible) {
//         return { ...state, isDropDownVisible: true };
//       }

//       return { ...state, activeLocationsIndex: nextIndex };

//     case ActionType.DECREMENT_ACTIVE_LOCATION_INDEX:
//       if (!isDropDownVisible) {
//         return { ...state, isDropDownVisible: true };
//       }

//       return { ...state, activeLocationsIndex: prevIndex };

//     // Set Location to input
//     case ActionType.SET_LIST_LOCATION_TO_FORM:
//       return {
//         ...state,
//         input: locations[activeLocationsIndex].name,
//         activeLocationsIndex: 0,
//         isDropDownVisible: false,
//         fetchLock: true,
//       };
//     case ActionType.SET_LIST_LOCATION_TO_FORM_CLICK:
//       return {
//         ...state,
//         input: locations[action.payload].name,
//         activeLocationsIndex: 0,
//         isDropDownVisible: false,
//         fetchLock: true,
//       };

//     // Fetch Lock
//     case ActionType.SET_FETCH_LOCK:
//       return { ...state, fetchLock: true };
//     case ActionType.UNSET_FETCH_LOCK:
//       return { ...state, fetchLock: false };

//     default:
//       return initialState;
//   }
// };

const CitySearch = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  Props
>(({ name, label, className, ...props }, ref) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const optionRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const [state, stateDispatch] = React.useReducer(stateReducer, initialState);
  const methods = useFormContext<TBookingSchema>();

  // const [selectCities, setSelectCities] = React.useState<TSearchLocation[]>([]);

  // const [data, setData] = React.useState<Location[]>([]);

  // Case if not selected dropdown option and blur
  //TODO: Remove this
  // const handleOnBlurEvent = React.useCallback(() => {
  //   if (
  //     -1 ===
  //     state.locations.findIndex(
  //       (location) => location.structured_formatting.main_text === state.input,
  //     )
  //   ) {
  //     stateDispatch({ type: ActionType.SET_INPUT, payload: "" });
  //     methods.setValue(name, DEFAULT_SEARCH_LOCATION);
  //   }
  // }, [state.input, state.locations, methods, name]);

  // TODO: if it works keep it else remove
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

  const handleDropDownClick = async (
    location: TSearchLocation,
    index: number,
  ) => {
    const BASE_URL = import.meta.env.VITE_DRIVADO_API;
    const EMAIL_ENV = import.meta.env.VITE_DRIVADO_EMAIL;

    try {
      stateDispatch({
        type: ActionType.START_FETCHING,
      });

      stateDispatch({
        type: ActionType.SET_LIST_LOCATION_TO_FORM_CLICK,
        payload: index,
      });

      const response = await fetch(
        `${BASE_URL}/whiteLeveling/placesDetailsWL?placeId=${location.place_id}&email=${EMAIL_ENV}&isPickup=true`,
        {
          method: "POST",
          headers: {
            apiKey: import.meta.env.VITE_DRIVADO_KEY,
          },
        },
      );

      const data = await response.json();

      const validatedData = latLongSchema.safeParse(data);

      if (!validatedData.success) {
        throw new Error("Validation Failed");
      }

      const { date, isWithinRegion, lat, lng, time } = validatedData.data.data;

      if (name === "from") {
        methods.setValue("date", parseISO(date));
        methods.setValue("time", time);
        methods.setValue("fromLatLong", {
          lat,
          lng,
          isWithinRegion,
        });
      } else {
        methods.setValue("toLatLong", {
          lat,
          lng,
          isWithinRegion,
        });
      }

      console.log("he");
      methods.setValue(name, location);
    } catch (e) {
      // Error Handling to be done
      console.log(e);
    } finally {
      stateDispatch({
        type: ActionType.END_FETCHING,
      });
    }

    // try {

    //   console.log("Rahul");
    // } catch (error: unknown) {

    //   console.log("Rahul", error);
    // } finally {
    //   // lodaing false
    // }
    // onClick={() => {
    //   console.log("Data ======>", location, index);
    // methods.setValue(name, location);

    // }}
  };

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

  // const handleSelectCity = (city: TSearchLocation) => {
  //   localStorage.setItem("selectedPlace", JSON.stringify(city));
  // };

  // Initial Set of State
  const watchValue = methods.watch(name)?.mainText;
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
  // TODO: add timer and separate function  and clear timeout when unmount
  React.useEffect(() => {
    if (state.fetchLock) return;

    async function fetchLocations() {
      const BASE_URL = import.meta.env.VITE_DRIVADO_API;
      const EMAIL_ENV = import.meta.env.VITE_DRIVADO_EMAIL;

      try {
        stateDispatch({
          type: ActionType.START_FETCHING,
        });

        const response = await fetch(
          `${BASE_URL}/whiteLeveling/placesAutoCompleteWL?placeName=${state.debouncedInput}&email=${EMAIL_ENV}`,
          {
            headers: {
              apiKey: import.meta.env.VITE_DRIVADO_KEY,
            },
          },
        );

        const data = await response.json();

        const validatedData = searchLocationApiSchema.safeParse(data);

        if (!validatedData.success) {
          throw new Error("Validation 2 Failed");
        }

        stateDispatch({
          type: ActionType.SET_FETCHED_LOCATIONS,
          payload: validatedData.data.data,
        });
      } catch (e) {
        // Error Handling to be done
        console.log(e);
      } finally {
        stateDispatch({
          type: ActionType.END_FETCHING,
        });
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
        "w-full border-b border-t border-transparent p-[0.625rem] text-left hover:bg-[#f5f6fa]",
        index === state.activeLocationsIndex && "rounded-none",
      )}
      onClick={handleDropDownClick.bind(null, location, index)}
    >
      <p className="truncate text-sm font-normal leading-normal text-black">
        {location.mainText}
      </p>
      <p className="truncate text-[0.625rem] font-normal leading-normal text-[#9D9D9D]">
        {location.secondaryText}
      </p>
    </li>
  ));

  return (
    <>
      <div
        ref={divRef}
        onClick={handleDivClick}
        className={cn(
          "relative flex items-center gap-[6px] hover:cursor-pointer",
          // baseStyle,
          "border border-transparent px-2.5 py-1 focus-visible:border-gray-300 focus-visible:bg-gray-100 xl:h-auto xl:py-1.5 [&_svg]:focus-visible:text-drivado-red",
          className,
        )}
        {...props}
      >
        <MapPin className="size-5 text-[#999999]" />
        <div className="xl:flex xl:flex-1 xl:flex-col">
          <Label
            htmlFor={name}
            className={
              "mt-0 h-auto max-w-fit items-center justify-end gap-2 truncate border-none p-0 px-0 text-right text-xs font-normal capitalize leading-[1.75rem] text-[#1E1E1E] shadow-none focus-within:bg-gray-100 peer-placeholder-shown:inline hover:cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent md:gap-4 md:leading-[1.25rem] xl:h-auto xl:text-xs xl:font-medium xl:leading-[1.75rem]"
            }
          >
            {label}
          </Label>

          <Input
            id={name}
            name={name}
            ref={inputRef}
            // TODO: change placeholder title
            placeholder={name}
            value={state.input}
            autoComplete="off"
            autoCorrect="off"
            aria-haspopup="listbox"
            aria-controls="combobox-list"
            aria-expanded={state.isDropDownVisible}
            // onBlur={handleOnBlurEvent}
            onKeyDown={handleOnKeyDownEvent}
            onChange={handleOnChangeEvent}
            className={cn(
              "peer h-auto truncate rounded-none border-0 p-0 text-left text-xs font-normal capitalize text-[#757575] shadow-none placeholder:truncate placeholder:text-left placeholder:text-xs placeholder:font-normal placeholder:capitalize placeholder:text-[#757575] hover:cursor-pointer focus-visible:ring-0 xl:text-sm xl:placeholder:truncate xl:placeholder:text-sm 2xl:text-base 2xl:placeholder:text-base",
            )}
          />
          {state.isFetching && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Loader2 className="size-4 animate-spin" />
            </div>
          )}
        </div>

        {state.isDropDownVisible && (
          <div className="absolute -inset-x-px top-[calc(100%_+_0.5rem)] z-10 h-80 w-auto gap-[2px] rounded-lg border-2 border-[#EEE] bg-white text-sm text-black">
            <ul
              className="absolute w-full overflow-scroll scrollbar-none"
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
