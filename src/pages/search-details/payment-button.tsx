import React, { useEffect, useState } from "react";
import RazorpayScriptLoader from "./razorpay-script-loader";
import { useNavigate } from "react-router-dom";

const PaymentButton: React.FC = () => {
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
      amount = selectedVehicle.price * 100 || 0;
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
      setPaymentData(data);
      console.log("Razorpay Order Response:", data);
    } catch (error) {
      console.error(" Failed to fetch Razorpay order:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (amount > 0 && currency) {
      fetchOrder();
    }
  }, [amount, currency]);

  const handlePayment = () => {
    if (!paymentData) {
      alert("Payment data not loaded yet.");
      return;
    }

    const options = {
      key: "rzp_test_puo1xjdgc63ciU",
      amount: paymentData.amount,
      currency: paymentData.currency || "INR",
      order_id: paymentData.id,
      name: customerName,
      description: "A global chauffeur service",
      handler: async function (response: any) {
        console.log("Razorpay Payment Response:", response);

        // ✅ Determine trip type and endpoint
        const tripType = localStorage.getItem("tripType") || "oneway";
        const email = import.meta.env.VITE_DRIVADO_EMAIL;

        const vehicle = JSON.parse(selectedVehicleString || "{}");

        const bookingEndpoint =
          tripType === "hourly"
            ? `${BASE_URL}/whiteLeveling/bookHourlyWL?searchId=WL-LH1TPN6D-HR&email=${email}`
            : `${BASE_URL}/whiteLeveling/bookOnewayWL?searchId=WL-IE05BQGG-OW&email=${email}`;

        const payload = {
          vehicleId: vehicle.id,
          vehiclePrice: {
            price: vehicle.price?.toString() || "0",
            currency: vehicle.unit || "INR",
          },
          passengerDetails: {
            firstname: localStorage.getItem("firstName") || "",
            lastname: localStorage.getItem("lastName") || "",
            email: localStorage.getItem("email") || "",
            phone: localStorage.getItem("contactNumber") || "",
            country: localStorage.getItem("country") || "India",
            dial_code: localStorage.getItem("dialCode") || "",
            flightOrTrain: localStorage.getItem("flightOrTrain") || "N/A",
            reference: localStorage.getItem("referenceNumber") || "N/A",
            specialRequest: localStorage.getItem("specialRequest") || "",
          },
        };

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
        } catch (err) {
          console.error(" Booking API call failed:", err);
        }

        // Redirect after booking
        navigate("/booking-confirmation");

        // Fetch new order for another potential payment
        fetchOrder();
      },
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: customerContactNumber,
      },
      notes: {
        address: "address for delivery",
      },
      theme: {
        color: "#FB4156",
      },
      modal: {
        ondismiss: function () {
          console.log(" Razorpay popup closed by user");
          fetchOrder();
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <RazorpayScriptLoader />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full items-center justify-center rounded-[11px] bg-[var(--brand-theme-color)] px-4 py-[15px] text-xs font-medium text-white hover:bg-[var(--brand-theme-color)] xl:text-base"
      >
        {loading ? "Preparing Payment..." : "Confirm & Pay"}
      </button>
    </>
  );
};

export default PaymentButton;
