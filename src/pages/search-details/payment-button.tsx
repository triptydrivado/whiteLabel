import React, { useState, useEffect } from "react";
import RazorpayScriptLoader from "./razorpay-script-loader";
import { useNavigate } from "react-router-dom";
import Popup from "@/components/ui/popup";

const PaymentButton: React.FC = () => {
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false); // Track Razorpay script load status
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const [showPopup, setShowPopup] = useState(false); // Popup visibility state

  const BASE_URL = import.meta.env.VITE_DRIVADO_API;
  const apiKey = import.meta.env.VITE_DRIVADO_KEY;

  const selectedVehicleString = localStorage.getItem("selectedVehicle");
  let amount = 0;
  let currency = "INR";

  if (selectedVehicleString) {
    try {
      const selectedVehicle = JSON.parse(selectedVehicleString);
      amount = selectedVehicle.price * 100 || 0; // Razorpay expects amount in paise (cents)
      currency = selectedVehicle.unit || "INR";
    } catch (error) {
      console.error("Invalid selectedVehicle JSON:", error);
    }
  }

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/razorpay?amount=${amount}&currency=${currency}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
          },
        },
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`API Error ${response.status}: ${text}`);
      }

      const data = await response.json();
      setPaymentData(data); // Set the payment data to state
      console.log("Razorpay Order Response:", data);
    } catch (error) {
      console.error("Failed to fetch Razorpay order:", error);
    } finally {
      setLoading(false); // Set loading to false after API call
    }
  };

  useEffect(() => {
    if (amount > 0 && currency) {
      fetchOrder(); // Fetch the order when amount and currency are available
    }
  }, [amount, currency]);

  // Handle payment when the button is clicked
  const handlePayment = () => {
    if (!paymentData) {
      showError("Payment data not loaded yet.");
      return;
    }

    if (!scriptLoaded) {
      showError("Razorpay script is not loaded. Please try again later.");
      return;
    }

    const tripType = localStorage.getItem("tripType") || "oneway";
    const email = import.meta.env.VITE_DRIVADO_EMAIL;

    const selectedVehicle = JSON.parse(
      localStorage.getItem("selectedVehicle") || "{}",
    );
    const passengerDetails = JSON.parse(
      localStorage.getItem("passengerDetails") || "{}",
    );

    const bookingSearchForm = JSON.parse(
      localStorage.getItem("bookingSearchForm") || "{}",
    );
    const validatedData = JSON.parse(
      localStorage.getItem("validatedData") || "{}",
    );

    const searchId = validatedData?.sId || ""; // fallback if missing

    const bookingEndpoint =
      tripType === "hourly"
        ? `${BASE_URL}/whiteLeveling/bookHourlyWL?searchId=${searchId}&email=${email}`
        : `${BASE_URL}/whiteLeveling/bookOnewayWL?searchId=${searchId}&email=${email}`;

    const payload = {
      vehicleId: selectedVehicle.id,
      vehiclePrice: {
        price: selectedVehicle.price?.toString() || "0",
        currency: selectedVehicle.unit || "INR",
      },
      passengerDetails: {
        salutation: passengerDetails.salutation || "",
        firstname: passengerDetails.firstName || "",
        lastname: passengerDetails.lastName || "",
        email: passengerDetails.email || "",
        phone: passengerDetails.contactNumber || "",
        country: passengerDetails.country || "India",
        dial_code: bookingSearchForm.currency.value || "",
        flightOrTrain: passengerDetails.flightNumber || "N/A",
        reference: passengerDetails.referenceNumber || "N/A",
        specialRequest: passengerDetails.splRequest || "",
      },
    };

    const options = {
      key: "rzp_test_puo1xjdgc63ciU",
      amount: paymentData.amount,
      currency: "INR", // Fixed, user can't change this
      order_id: paymentData.id,
      name: `${passengerDetails.firstName} ${passengerDetails.lastName}`,
      description: "A global chauffeur service",
      handler: async function () {
        // success logic
      },
      prefill: {
        name: `${passengerDetails.firstName} ${passengerDetails.lastName}`,
        email: passengerDetails.email || "",
        contact: passengerDetails.contactNumber || "",
      },
      theme: {
        color: "#FB4156",
      },
      modal: {
        ondismiss: function () {
          fetchOrder();
        },
      },
    };

    // const options = {
    //   key: "rzp_test_puo1xjdgc63ciU",
    //   amount: paymentData.amount,
    //   currency: paymentData.currency || "INR",
    //   order_id: paymentData.id,
    //   name: `${passengerDetails.salutation || ""} ${passengerDetails.firstName || ""} ${passengerDetails.lastName || ""}`,
    //   description: "A global chauffeur service",
    //   handler: async function () {
    //     try {
    //       const bookingRes = await fetch(bookingEndpoint, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           apiKey: apiKey,
    //         },
    //         body: JSON.stringify(payload),
    //       });

    //       if (!bookingRes.ok) {
    //         const errorText = await bookingRes.text();
    //         showError(`Booking failed: ${errorText}`);
    //         throw new Error(errorText); // Throw an error to stop further execution
    //       }

    //       const bookingData = await bookingRes.json();
    //       console.log("Booking Response:", bookingData);

    //       // Clear all localStorage after booking success
    //       clearSession();

    //       // Navigate to confirmation
    //       navigate("/booking-confirmation");
    //     } catch (err: unknown) {
    //       console.error("Booking API call failed:", err);

    //       // Type guard to check if 'err' is an instance of Error
    //       if (err instanceof Error) {
    //         showError(`An error occurred: ${err.message || "Unknown error"}`);
    //       } else {
    //         // If it's not an instance of 'Error', treat it as an unknown error
    //         showError("An unknown error occurred");
    //       }
    //     }
    //   },
    //   prefill: {
    //     name: `${passengerDetails.firstName || ""} ${passengerDetails.lastName || ""}`,
    //     email: passengerDetails.email || "",
    //     contact: passengerDetails.contactNumber || "",
    //   },
    //   // notes: {
    //   //   address: "Passenger address or notes",
    //   // },
    //   theme: {
    //     color: "#FB4156",
    //   },
    //   modal: {
    //     ondismiss: function () {
    //       console.log("Razorpay popup closed by user");
    //       fetchOrder();
    //     },
    //   },
    // };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open(); // Open the Razorpay modal
  };

  const showError = (message: string) => {
    setErrorMessage(message);
    setShowPopup(true); // Show the popup with error message
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const clearSession = () => {
    // Clear all relevant session data to start a fresh session
    localStorage.clear();
    setPaymentData(null); // Reset payment data
    setLoading(true); // Reset loading state
    setErrorMessage(null); // Reset error message
    setShowPopup(false); // Close any open popup
  };

  return (
    <>
      <RazorpayScriptLoader onScriptLoad={setScriptLoaded} />
      <button
        onClick={handlePayment}
        disabled={loading || !paymentData || !scriptLoaded}
        className="w-full items-center justify-center rounded-[11px] bg-[var(--brand-theme-color)] px-4 py-[15px] text-xs font-medium text-white hover:bg-[var(--brand-theme-color)] xl:text-base"
      >
        {loading ? "Preparing Payment..." : "Confirm & Pay"}
      </button>

      {/* Display the Popup if an error message exists */}
      {showPopup && errorMessage && (
        <Popup message={errorMessage} onClose={closePopup} />
      )}
    </>
  );
};

export default PaymentButton;
