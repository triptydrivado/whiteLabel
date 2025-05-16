// import { TPassengerDetails } from "../passenger-details-form-schema";
// import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import AirplaneIcon from "@/assets/svgs/airplane-icon";
import SpecialRequestIcon from "@/assets/svgs/special-request-icon";
import SmsIcon from "@/assets/svgs/sms-icon";
import CallIcon from "@/assets/svgs/call-icon";
import PaymentButton from "../payment-button";
import RazorpayPayment from "../RazorpayPayment";
import { useRazorpay } from "@/lib/razorpayService";
const BookingSummary = ({}: { onEdit: () => void }) => {
  // const methods = useFormContext<TPassengerDetails>();

  // const handleClick = () => {
  //   window.location.href = "/booking-confirmation"; // Navigates to /search-form
  // };
  const handleEdit = () => {
    window.location.href = "/passenger-details"; // Navigates to /search-form
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedTitle, setSelectedTitle] = useState("Select your salutation");

  // const titles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "H.E."];

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSelect = (title: string) => {
  //   setSelectedTitle(title);
  //   setIsOpen(false);
  // };
  const arrivalTime = localStorage.getItem("flight_arrivalTime");

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const contactNumber = localStorage.getItem("contactNumber");
  const email = localStorage.getItem("email");
  const flightNumber = localStorage.getItem("flightNumber");
  const referenceNumber = localStorage.getItem("referenceNumber");
  const splRequest = localStorage.getItem("splRequest");
  const firstLetterCapitalized = firstName
    ? firstName.charAt(0).toUpperCase()
    : "";

  return (
    <div className="relative mt-5 w-full rounded-xl bg-white p-3 shadow-md sm:mt-0 sm:w-1/2 lg:w-1/2 xl:p-[22px] 2xl:rounded-2xl">
      <h2 className="pb-1.5 pt-2 text-center text-sm font-semibold text-black sm:font-semibold xl:text-2xl">
        Review Booking Details
      </h2>

      <div className="lg mb-12 mt-[30px] md:mb-20 lg:mb-[160px] xl:mb-16 xl:mt-12">
        <h2 className="text-[10px] font-semibold text-black xl:text-sm">
          Passenger Information
        </h2>
        <div className="border-b border-[#282828]/20 pb-4 pt-4 xl:pb-6 xl:pt-6">
          <div className="mb-3 flex items-center space-x-4 text-center 2xl:mb-8">
            <div className="flex size-7 items-center justify-center rounded-full bg-[var(--brand-theme-color)] text-center text-xs font-light text-white xl:size-6 xl:text-sm 2xl:size-11 2xl:text-3xl">
              {/* C */}
              {firstLetterCapitalized}
            </div>
            <h2 className="text-sm font-semibold text-black xl:text-base 2xl:text-xl">
              {/* {`${methods.getValues("salutation")} ${methods.getValues("firstName") || "Cameron Williamson"} ${methods.getValues("lastName")}`}
               */}{" "}
              {firstName}
              {lastName}
            </h2>
          </div>
          <div className="md:flex md:items-center md:space-x-3">
            <div className="flex items-center space-x-2 rounded-lg bg-[#F6F7F9] px-2.5 py-1.5">
              <CallIcon className="size-3 md:size-4" />
              <h2 className="text-xs font-normal text-[#282828] 2xl:text-base">
                {/* {methods.getValues("contactNumber") || "(907) 555-0101-775"} */}
                {contactNumber}
              </h2>
            </div>
            <div className="mt-3 flex items-center space-x-2 rounded-lg bg-[#F6F7F9] px-2.5 py-1.5 md:mt-0">
              <SmsIcon className="size-3 md:size-4" />
              <h2 className="text-xs font-normal text-[#282828] 2xl:text-base">
                {/* {methods.getValues("email") || "manhhachkt08@gmail.com"} */}
                {email}
              </h2>
            </div>
          </div>
        </div>
        <div className="border-b border-[#282828]/20 pb-4 pt-4 xl:pb-6 xl:pt-6">
          <h2 className="text-[10px] font-semibold text-black xl:text-sm">
            Flight Information
          </h2>
          <div className="flex items-center space-x-3 pt-4 xl:pt-6">
            <div className="rounded-lg bg-[#F6F7F9] px-[6.56px] py-[6.56px] 2xl:px-2.5 2xl:py-2.5">
              <AirplaneIcon className="size-5" />
            </div>
            <h2 className="text-xs font-normal text-[#282828] 2xl:text-base">
              {/* {methods.watch("flightNumber") || "SK 2301"} */}
              {flightNumber || "Not Provided"}
            </h2>
          </div>
          <h2 className="mt-2 flex text-xs font-medium text-[#282828] 2xl:text-base">
            {/* {methods.watch("flightNumber") || "SK 2301"} */}
            Arrival Time :{"  "}
            <p className="font-medium text-green-500">
              {"  "}
              {arrivalTime || "Not Provided"}
            </p>
          </h2>
        </div>

        <div className="border-b border-[#282828]/20 pb-4 pt-4 xl:pb-6 xl:pt-6">
          <h2 className="text-[10px] font-semibold text-black xl:text-sm">
            Reference Number
          </h2>
          <div className="flex items-center space-x-3 pt-4 xl:pt-6">
            <div className="rounded-lg bg-[#F6F7F9] px-[6.56px] py-[6.56px] 2xl:px-2.5 2xl:py-2.5">
              <SpecialRequestIcon className="size-5" />
            </div>
            <h2 className="text-xs font-normal text-[#282828] 2xl:text-base">
              {/* {methods.watch("splRequest") || "One water bottle please. "} */}
              {referenceNumber || "Not Provided"}
            </h2>
          </div>
        </div>
        <div className="border-b border-[#282828]/20 pb-4 pt-4 xl:pb-6 xl:pt-6">
          <h2 className="text-[10px] font-semibold text-black xl:text-sm">
            Special Request
          </h2>
          <div className="flex items-center space-x-3 pt-4 xl:pt-6">
            <div className="rounded-lg bg-[#F6F7F9] px-[6.56px] py-[6.56px] 2xl:px-2.5 2xl:py-2.5">
              <SpecialRequestIcon className="size-5" />
            </div>
            <h2 className="text-xs font-normal text-[#282828] 2xl:text-base">
              {/* {methods.watch("splRequest") || "One water bottle please. "} */}
              {splRequest || "Not Provided"}
            </h2>
          </div>
        </div>
      </div>
      <div className="align-baseline">
        <div className="flex items-baseline justify-end space-x-3">
          <button
            type="button"
            onClick={handleEdit}
            className="w-full items-center justify-center rounded-[11px] border border-[#282828]/50 bg-white px-4 py-[15px] text-xs font-medium text-[#282828] hover:border-[#282828] hover:bg-[#efefef] xl:text-base"
          >
            Edit Details
          </button>

          {/* <button
            type="button"
            onClick={handleClick}
            className="w-full items-center justify-center rounded-[11px] bg-[var(--brand-icon-color)] px-4 py-[15px] text-xs font-medium text-white hover:bg-[var(--brand-icon-color)] xl:text-base"
          >
            Confirm & Pay
          </button> */}
          <PaymentButton />
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
