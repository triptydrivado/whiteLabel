import React from "react";
import RazorpayScriptLoader from "./razorpay-script-loader";
import { useNavigate } from "react-router-dom";

const customerName = localStorage.getItem("firstName" + "lastName");
const customerEmail = localStorage.getItem("email");
const customerContactNumber = localStorage.getItem("contactNumber");

const PaymentButton: React.FC = () => {
  const navigate = useNavigate();
  const handlePayment = () => {
    const options = {
      key: "rzp_test_puo1xjdgc63ciU", // Replace with your Razorpay key
      amount: 40000 * 100,
      currency: "INR",
      name: customerName,
      email: customerEmail,

      contactNumber: customerContactNumber,
      description: "A global chauffeur service",

      //   image: "https://example.com/logo.png", // Your company logo URL
      handler: async function (response: any) {
        // Send payment details to backend for verification
        try {
          const res = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
            }),
          });
          const data = await res.json();

          if (data.success) {
            // alert("Payment successful!");
            // Redirect to /voucher after payment success
            navigate("/booking-confirmation");
          } else {
            alert("Payment verification failed!");
          }
        } catch (err) {
          console.error("Payment verification failed:", err);
          alert("An error occurred during payment verification");
        }
      },
      prefill: {
        name: customerName,
        email: customerEmail,
        contactNumber: customerContactNumber,
      },
      notes: {
        address: "address for delivery",
      },
      theme: {
        color: "#FB4156",
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
        className="w-full items-center justify-center rounded-[11px] bg-[var(--brand-theme-color)] px-4 py-[15px] text-xs font-medium text-white hover:bg-[var(--brand-theme-color)] xl:text-base"
      >
        Confirm & Pay
      </button>
    </>
  );
};

export default PaymentButton;
