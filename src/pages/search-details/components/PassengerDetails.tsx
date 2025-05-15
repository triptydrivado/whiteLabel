import InputField from "@/components/input-field";
import { useRef, useEffect } from "react";
// import { error } from "console";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PASSENGER_SALUTATIONS,
  TPassengerDetails,
  TSalutations,
} from "../passenger-details-form-schema";
import { type SubmitHandler, useFormContext } from "react-hook-form";
import PhoneInput from "./PhoneInput";

import ProfileDropdown from "@/assets/svgs/profile-dropdown";
import { SquareTickIcon } from "@/assets/svgs/square-tick";
import { SquareIcon } from "@/assets/svgs/square";

const PassengerDetails = ({ onConfirm }: { onConfirm: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const methods = useFormContext<TPassengerDetails>();

  const titles = PASSENGER_SALUTATIONS;

  // console.log(methods.formState.errors);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const salutation = localStorage.getItem("salutation");
  // const firstName = localStorage.getItem("firstName");
  // const lastName = localStorage.getItem("lastName");
  // const contactNumber = localStorage.getItem("contactNumber");
  // const email = localStorage.getItem("email");
  // const flightNumber = localStorage.getItem("flightNumber");
  // const splRequest = localStorage.getItem("splRequest");

  const handleSubmit: SubmitHandler<TPassengerDetails> = (data) => {
    console.log("formdata", data);
    localStorage.setItem("salutation", data.salutation);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("contactNumber", data.contactNumber);
    localStorage.setItem("email", data.email);
    localStorage.setItem("referenceNumber", data.referenceNumber);
    localStorage.setItem("flightNumber", data.flightNumber);
    localStorage.setItem("splRequest", data.splRequest);

    onConfirm();
  };

  const handleSelect = (title: TSalutations) => {
    setSelectedTitle(title);
    methods.setValue("salutation", title);
    setIsOpen(false);
  };
  return (
    <div className="relative mt-5 w-full rounded-xl bg-white p-3 shadow-md sm:mt-0 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:p-[22px] 2xl:rounded-2xl">
      <h2 className="pb-1.5 pt-2 text-center text-sm font-medium text-[#000000] sm:font-semibold md:text-base 2xl:text-2xl">
        Passenger Details
      </h2>

      <form
        className="space-y-2 md:space-y-3"
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        {/* <div className="peer mb-2 mt-4 flex items-center justify-between rounded-md bg-[#F5F6FA] px-4 py-[14px] text-[#0D0D0D]/50 hover:bg-[#EBECF0] md:mb-3 lg:rounded-lg lg:px-4 lg:py-[18px] 2xl:rounded-[10px]">
          <h2 className="text-xs font-normal text-[#0D0D0D]/50 peer-hover:text-[var(--brand-icon-color)] 2xl:text-sm">
            Are you the passenger ?
            <span className="text-[var(--brand-theme-color)]">*</span>
          </h2>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center text-xs md:text-sm"
                htmlFor="yes"
              >
                <input
                  {...methods.register("isPassenger")}
                  value="true"
                  defaultChecked={true}
                  type="radio"
                  className="peer size-5 cursor-pointer appearance-none rounded-full border border-[#cecece] transition-all checked:border-[var(--brand-theme-color)] sm:size-4 md:size-3.5 lg:size-5"
                  id="yes"
                />
                <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[var(--brand-theme-color)] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 sm:size-2 md:size-2 lg:size-3"></span>
              </label>
              <h2 className="ml-1 text-xs font-medium text-[#72777a] md:text-sm lg:ml-1.5">
                Yes
              </h2>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center text-xs md:text-sm"
                htmlFor="no"
              >
                <input
                  {...methods.register("isPassenger")}
                  value="false"
                  type="radio"
                  className="peer size-5 cursor-pointer appearance-none rounded-full border border-[#cecece] transition-all checked:border-[var(--brand-theme-color)] sm:size-4 md:size-3.5 lg:size-5"
                  id="no"
                />
                <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[var(--brand-theme-color)] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 sm:size-2 md:size-2 lg:size-3"></span>
              </label>
              <h2 className="ml-1 text-xs font-medium text-[#72777a] md:text-sm lg:ml-1.5">
                No
              </h2>
            </div>
          </div>
        </div> */}
        <div
          className="group relative mt-4 flex items-center"
          ref={dropdownRef}
          onClick={toggleDropdown}
        >
          <input
            readOnly
            // value={selectedTitle || ""}
            className="peer h-12 w-full cursor-pointer rounded-md bg-[#F5F6FA] py-[15px] text-[#6a6a6a] group-hover:bg-[#EBECF0] focus:outline-none md:py-1.5 lg:h-14 lg:rounded-lg lg:px-4 lg:py-3.5 xl:py-3.5 2xl:rounded-[10px] 2xl:py-4"
          />
          <span
            className={`pointer-events-none absolute left-3 px-2 text-xs font-normal text-[#0D0D0D] transition-all duration-200 md:px-1 2xl:text-sm ${
              selectedTitle ? "text-[#0D0D0D]" : "text-[#0D0D0D]/50"
            }`}
          >
            {selectedTitle || "Select your salutation"}
          </span>
          <ProfileDropdown
            className={`pointer-events-none absolute right-3 text-[#ACACAC] transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } size-5 md:size-6`}
          />

          {isOpen && (
            <ul className="absolute left-0 top-[calc(100%_+_4px)] z-10 w-full rounded-[10px] border border-gray-300 bg-white shadow-lg">
              {titles.map((title, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(title)}
                  className="cursor-pointer px-4 py-3 text-sm font-normal text-black hover:bg-[#F5F6FA] hover:text-[var(--brand-theme-color)] first:hover:rounded-t-[10px] last:hover:rounded-b-[10px]"
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid gap-y-2 md:grid-cols-2 md:items-start md:gap-x-1 md:gap-y-0 lg:gap-x-3">
          <div className="relative w-full">
            {/* <label
              htmlFor="name"
              className="absolute left-2 top-2 origin-left -translate-y-3 scale-75 transform text-sm text-[#6a6a6a] opacity-0 transition-all duration-200 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:opacity-0 peer-focus:translate-y-0 peer-focus:opacity-100"
            >
              First name
            </label> */}
            <InputField
              type="text"
              label="First Name"
              id="name"
              placeholder="Enter your first name"
              className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
              field="firstName"
              isRequired
            />
          </div>
          <div className="relative w-full">
            <InputField
              type="text"
              label="Last Name"
              id="name"
              field="lastName"
              placeholder="Enter your last name"
              className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
              isRequired
            />
          </div>
        </div>
        <div className="relative">
          {/* <InputField
            type="number"
            label="Contact Number"
            field="contactNumber"
            placeholder="Enter your contact number*"
            className="px-2.5 py-[19px]"
          /> */}

          <PhoneInput />
        </div>
        <InputField
          type="text"
          label="Email ID"
          field="email"
          placeholder="Enter your Email ID*"
          className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
          isRequired
        />

        <InputField
          type="number"
          label="Reference Number"
          field="referenceNumber"
          placeholder="Enter your Reference Number*"
          className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
          isRequired
        />

        <InputField
          type="text"
          label="Flight No."
          field="flightNumber"
          placeholder="Enter your flight number (Optional)"
          className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
        />
        <InputField
          type="text"
          label="Special request"
          field="splRequest"
          placeholder="Special request (Optional)"
          className="px-2.5 py-[19px] placeholder:text-[#0D0D0D]/50"
        />
        <div className="align-baseline">
          <div className="mt-8 flex items-start space-x-2">
            <div className="mt-0.5">
              <label>
                <input
                  {...methods.register("consent")}
                  type="checkbox"
                  className="hidden"
                />
                {methods.watch("consent") ? (
                  <SquareTickIcon className="size-3.5 rounded-sm bg-[var(--brand-theme-color)] text-white md:size-3 lg:size-4 2xl:size-5" />
                ) : (
                  <SquareIcon className="size-3.5 rounded-sm border border-[#606060] text-[#606060] md:size-3 lg:size-4 2xl:size-5" />
                )}
              </label>
            </div>
            <h2 className="text-xs font-normal text-[#282828] md:text-[10px] lg:text-xs 2xl:text-sm">
              I agree to
              <Link
                to=""
                className="font-semibold hover:text-[var(--brand-theme-color)]"
              >
                &nbsp;Terms & Conditions
              </Link>
              ,
              <Link
                to=""
                className="font-semibold hover:text-[var(--brand-theme-color)]"
              >
                Booking Conditions
              </Link>
              and
              <Link
                to=""
                className="font-semibold hover:text-[var(--brand-theme-color)]"
              >
                Privacy Policy
              </Link>
            </h2>
          </div>
          <button
            disabled={!methods.watch("consent")}
            className="mt-4 w-full items-center justify-center rounded-[11px] bg-[var(--brand-theme-color)] px-4 py-3 text-sm font-semibold text-white disabled:bg-gray-500 disabled:hover:cursor-not-allowed md:text-xs lg:text-base 2xl:rounded-xl"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetails;
