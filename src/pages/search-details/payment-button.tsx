import React, { useEffect, useState } from "react";
import RazorpayScriptLoader from "./razorpay-script-loader";
import { useNavigate } from "react-router-dom";

const PaymentButton: React.FC = () => {
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false); // Track Razorpay script load status

  const BASE_URL = import.meta.env.VITE_DRIVADO_API;
  const apiKey = import.meta.env.VITE_DRIVADO_KEY;

  const customerName =
    (localStorage.getItem("firstName") || "") +
    " " +
    (localStorage.getItem("lastName") || "");
  const customerEmail = localStorage.getItem("email") || "";
  const customerContactNumber = localStorage.getItem("contactNumber") || "";

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
      alert("Payment data not loaded yet.");
      return;
    }

    if (!scriptLoaded) {
      alert("Razorpay script is not loaded. Please try again later.");
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
        dial_code: passengerDetails.dial_code || "", // Corrected to passengerDetails
        flightOrTrain: passengerDetails.flightNumber || "N/A",
        reference: passengerDetails.referenceNumber || "N/A",
        specialRequest: passengerDetails.splRequest || "",
      },
    };

    const options = {
      key: "rzp_test_puo1xjdgc63ciU",
      amount: paymentData.amount,
      currency: paymentData.currency || "INR",
      order_id: paymentData.id,
      name: `${passengerDetails.salutation || ""} ${passengerDetails.firstName || ""} ${passengerDetails.lastName || ""}`,
      description: "A global chauffeur service",
      handler: async function (response: any) {
        try {
          const bookingRes = await fetch(bookingEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apiKey: apiKey,
            },
            body: JSON.stringify(payload),
          });

          const bookingData = await bookingRes.json();
          console.log("Booking Response:", bookingData);

          // Reset after booking
          setPaymentData(null);
          setLoading(true);
          fetchOrder();
          navigate("/booking-confirmation"); // Redirect to the confirmation page
        } catch (err) {
          console.error("Booking API call failed:", err);
        }
      },
      prefill: {
        name: `${passengerDetails.firstName || ""} ${passengerDetails.lastName || ""}`,
        email: passengerDetails.email || "",
        contact: passengerDetails.contactNumber || "",
      },
      notes: {
        address: "Passenger address or notes",
      },
      theme: {
        color: "#FB4156",
      },
      modal: {
        ondismiss: function () {
          console.log("Razorpay popup closed by user");
          fetchOrder();
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open(); // Open the Razorpay modal
  };

  return (
    <>
      <RazorpayScriptLoader onScriptLoad={setScriptLoaded} />
      <button
        onClick={handlePayment}
        disabled={loading || !paymentData || !scriptLoaded} // Disable if loading, paymentData or script is not loaded
        className="w-full items-center justify-center rounded-[11px] bg-[var(--brand-theme-color)] px-4 py-[15px] text-xs font-medium text-white hover:bg-[var(--brand-theme-color)] xl:text-base"
      >
        {loading ? "Preparing Payment..." : "Confirm & Pay"}
      </button>
    </>
  );
};

export default PaymentButton;
