import { useEffect, useState, useRef } from "react";

// Type definition for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Razorpay response types
export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface RazorpayErrorResponse {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: {
    order_id: string;
    payment_id: string;
  };
}

// Configuration for Razorpay - Use environment variables in production
const RAZORPAY_KEY_ID = "rzp_test_puo1xjdgc63ciU";
const API_URL = "https://testapi.drivado.com";

// Helper function to load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // If already loaded, return immediately
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    // Create script element and append to body
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    // Handle success
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully");
      resolve(true);
    };

    // Handle failure
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      resolve(false);
    };

    // Add to document
    document.body.appendChild(script);
  });
};

// Flag to track if a payment is in progress or completed
let isPaymentInProgress = false;
let lastOrderId: string | null = null;

// Function to create a Razorpay order through your backend
export const createRazorpayOrder = async (
  amount: number,
  currency: string
): Promise<{ id: string; currency: string; amount: number }> => {
  try {
    console.log(`Creating Razorpay order for amount: ${amount} ${currency}`);

    // Razorpay expects amount in smallest currency unit (paise for INR, cents for USD)
    // Multiply by 100 since most currencies have 100 subunits
    const amountInSmallestUnit = Math.round(amount * 100);

    try {
      const response = await fetch(
        `${API_URL}/api/v1/razorpay?amount=${amountInSmallestUnit}&currency=${currency}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (directError) {
      console.log("POST request failed, trying with GET:", directError);
    }

    // Fallback to GET method if POST fails
    const fallbackResponse = await fetch(
      `${API_URL}/api/v1/razorpay?amount=${amountInSmallestUnit}&currency=${currency}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!fallbackResponse.ok) {
      throw new Error(
        (await fallbackResponse.text()) || "Failed to create order"
      );
    }

    const data = await fallbackResponse.json();

    // For testing when API is unavailable, use mock order data
    if (!data.id) {
      console.warn("Using mock order data for testing");
      return {
        id: `order_${Date.now()}`,
        currency: currency,
        amount: amountInSmallestUnit,
      };
    }

    return data;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);

    // For testing/development, return mock data when the API is not available
    console.warn("Using mock order data due to API error");
    return {
      id: `order_${Date.now()}`,
      currency: currency,
      amount: Math.round(amount * 100),
    };
  }
};

// React hook to use Razorpay in components
export const useRazorpay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const razorpayInstanceRef = useRef<any>(null);

  // Reset payment state tracking when component unmounts
  useEffect(() => {
    return () => {
      isPaymentInProgress = false;
      lastOrderId = null;

      // If there's an active Razorpay instance, close it
      if (razorpayInstanceRef.current) {
        try {
          // Try to close the Razorpay modal if it's open
          razorpayInstanceRef.current.close();
        } catch {
          // Ignore errors when trying to close
        }
        razorpayInstanceRef.current = null;
      }
    };
  }, []);

  // Load the script on component mount
  useEffect(() => {
    const loadScript = async () => {
      try {
        setIsLoading(true);
        const result = await loadRazorpayScript();
        setIsLoaded(result);
        if (!result) {
          setError("Failed to load Razorpay SDK");
        }
      } catch (err) {
        setError("Error loading Razorpay SDK");
        console.error("Error loading Razorpay SDK:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadScript();
  }, []);

  // Function to initiate a payment
  const initiatePayment = async (
    orderData: {
      amount: number;
      currency: string;
      name: string;
      email: string;
      phone: string;
      bookingInfo: any;
    },
    callbacks: {
      onSuccess: (response: RazorpaySuccessResponse) => void;
      onError: (error: RazorpayErrorResponse) => void;
    }
  ) => {
    // Check if SDK is loaded
    if (!isLoaded) {
      const errorMsg = "Razorpay SDK not loaded";
      setError(errorMsg);
      callbacks.onError({
        code: "SDK_NOT_LOADED",
        description: errorMsg,
        source: "client",
        step: "initialization",
        reason: "SDK load failure",
        metadata: { order_id: "", payment_id: "" },
      });
      return;
    }

    // Check if payment is already in progress
    if (isPaymentInProgress) {
      console.warn("Payment already in progress, not starting a new one");
      return;
    }

    // Set payment in progress flag
    isPaymentInProgress = true;

    try {
      console.log("Initiating payment for:", orderData);

      // Step 1: Create order on your server
      const order = await createRazorpayOrder(
        orderData.amount,
        orderData.currency
      );

      // Check if we already processed this order
      if (lastOrderId === order.id) {
        console.warn("Order already processed, not reopening payment window");
        isPaymentInProgress = false;
        return;
      }

      // Save order ID to prevent reprocessing
      lastOrderId = order.id;

      console.log("Order created, configuring Razorpay options");

      // Step 2: Configure Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Car Booking Service",
        description: "Car Booking Payment",
        order_id: order.id,
        prefill: {
          name: orderData.name,
          email: orderData.email,
          contact: orderData.phone,
        },
        notes: {
          booking_info: JSON.stringify(orderData.bookingInfo),
        },
        theme: {
          color: "#3a76f0",
        },
        // This function is called when payment completes successfully
        handler: function (response: RazorpaySuccessResponse) {
          console.log("Payment successful, response:", response);
          isPaymentInProgress = false; // Reset flag on success
          razorpayInstanceRef.current = null;
          callbacks.onSuccess(response);
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout form closed by user");
            isPaymentInProgress = false; // Reset flag on modal dismissal
            razorpayInstanceRef.current = null;
            callbacks.onError({
              code: "PAYMENT_CANCELLED",
              description: "Payment cancelled by user",
              source: "client",
              step: "payment",
              reason: "modal_closed",
              metadata: { order_id: order.id, payment_id: "" },
            });
          },
        },
      };

      console.log("Opening Razorpay payment form");

      // Step 3: Initialize Razorpay and open payment form
      razorpayInstanceRef.current = new window.Razorpay(options);

      // Step 4: Handle payment failures
      razorpayInstanceRef.current.on(
        "payment.failed",
        function (response: { error: RazorpayErrorResponse }) {
          console.error("Payment failed:", response.error);
          isPaymentInProgress = false; // Reset flag on failure
          razorpayInstanceRef.current = null;
          callbacks.onError(response.error);
        }
      );

      // Step 5: Open the payment form
      razorpayInstanceRef.current.open();
    } catch (err: any) {
      // Handle order creation errors
      const errorMsg = err.message || "Payment initialization failed";
      console.error("Payment initialization error:", errorMsg);
      setError(errorMsg);
      isPaymentInProgress = false; // Reset flag on error

      callbacks.onError({
        code: "ORDER_CREATION_FAILED",
        description: errorMsg,
        source: "client",
        step: "order_creation",
        reason: "API error",
        metadata: { order_id: "", payment_id: "" },
      });
    }
  };

  // Return hook values and functions
  return {
    isLoaded,
    isLoading,
    error,
    initiatePayment,
  };
};
