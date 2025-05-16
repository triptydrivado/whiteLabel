import { useState, useEffect, useRef } from "react";
import { useRazorpay } from "@/lib/razorpayService";
import type {
  RazorpaySuccessResponse,
  RazorpayErrorResponse,
} from "@/lib/razorpayService";
import { completeOnewayBooking, completeHourlyBooking } from "@/lib/api";
import type {
  VehiclePrice,
  PassengerDetails as APIPassengerDetails,
} from "@/lib/api";

interface RazorpayPaymentProps {
  isEnabled: boolean;
  bookingData: {
    vehicle: {
      id: string;
      price: number | string;
      unit?: string;
      vehicleName: string;
    };
    journeyDetails: {
      tripType: "oneway" | "hourly";
      pickupLocation: string;
      dropoffLocation: string;
      date: string;
      time: string;
      pax: number;
    };
    passengerDetails: Record<string, string>;
    searchId?: string;
  };
  onPaymentStart: () => void;
  onPaymentSuccess: (
    response: RazorpaySuccessResponse,
    bookingId?: string,
  ) => void;
  onPaymentError: (error: RazorpayErrorResponse | Error) => void;
}

export default function RazorpayPayment({
  isEnabled,
  bookingData,
  onPaymentStart,
  onPaymentSuccess,
  onPaymentError,
}: RazorpayPaymentProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);
  // Add a ref to track if payment was successful
  const paymentSuccessfulRef = useRef(false);

  const {
    isLoaded,
    isLoading,
    error: razorpayError,
    initiatePayment,
  } = useRazorpay();

  useEffect(() => {
    if (razorpayError) {
      onPaymentError(new Error(razorpayError));
    }
  }, [razorpayError, onPaymentError]);

  // Reset payment state when component unmounts
  useEffect(() => {
    return () => {
      paymentSuccessfulRef.current = false;
    };
  }, []);

  // Convert passenger details to API format
  const convertToAPIPassengerDetails = (): APIPassengerDetails => {
    const pd = bookingData.passengerDetails;

    return {
      firstname: pd.firstName || "",
      lastname: pd.lastName || "",
      email: pd.email || "",
      phone: pd.phone || "",
      country: pd.countryName || "Unknown",
      dial_code: pd.countryCode || "",
      flightOrTrain: pd.flightNumber || "",
      reference: pd.reference || "",
      specialRequest: pd.specialRequest || "no special request",
    };
  };

  const getCustomerName = () => {
    const { salutation, firstName, lastName } = bookingData.passengerDetails;
    return `${salutation || ""} ${firstName || ""} ${lastName || ""}`.trim();
  };

  const getFormattedPhone = () => {
    const { countryCode, phone, fullPhone } = bookingData.passengerDetails;

    if (fullPhone) {
      return fullPhone;
    }

    if (countryCode && phone) {
      return `${countryCode} ${phone}`;
    }

    return phone || "";
  };

  // Function to complete the booking after successful payment
  const completeBooking = async (paymentData: RazorpaySuccessResponse) => {
    // Prevent double booking calls
    if (isBookingInProgress) {
      console.log("Booking is already in progress, skipping duplicate call");
      return;
    }

    setIsBookingInProgress(true);

    try {
      console.log("Starting booking completion process...");

      // Validate search ID
      if (!bookingData.searchId) {
        throw new Error("Search ID not provided. Cannot complete booking.");
      }

      // Convert passenger details to API format
      const passengerDetails = convertToAPIPassengerDetails();

      // Get vehicle ID
      const vehicleId = bookingData.vehicle.id;
      const tripType = bookingData.journeyDetails.tripType;

      console.log(
        `Processing ${tripType} booking with search ID: ${bookingData.searchId}`,
      );

      let response;

      // Call the appropriate booking API based on trip type
      if (tripType === "oneway") {
        console.log("Completing one-way booking...");

        // Format vehicle price
        const vehiclePrice: VehiclePrice = {
          price:
            typeof bookingData.vehicle.price === "number"
              ? bookingData.vehicle.price.toString()
              : bookingData.vehicle.price.toString(),
          currency: bookingData.vehicle.unit || "USD",
        };

        // Call one-way booking API
        response = await completeOnewayBooking(
          bookingData.searchId,
          vehicleId,
          vehiclePrice,
          passengerDetails,
          paymentData,
        );
      } else {
        console.log("Completing hourly booking...");

        // Format vehicle price - hourly bookings also need vehicle price in the parameters
        const vehiclePrice: VehiclePrice = {
          price:
            typeof bookingData.vehicle.price === "number"
              ? bookingData.vehicle.price.toString()
              : bookingData.vehicle.price.toString(),
          currency: bookingData.vehicle.unit || "USD",
        };

        // Need to pass vehiclePrice for hourly bookings too, as per API specs in your docs
        // Modified function call to include vehiclePrice
        response = await completeHourlyBooking(
          bookingData.searchId,
          vehicleId,
          passengerDetails,
          paymentData,
        );
      }

      console.log("Booking API response:", response);

      // Check if booking was successful
      if (
        response.success ||
        (typeof (response as any).msg === "string" &&
          (response as any).msg.includes("success"))
      ) {
        // Extract booking ID - check both places where it might be found

        const bookingId = response.bookingId as string | undefined;
        typeof response.data === "object"
          ? response.data?.bookingId
          : undefined;

        console.log(`Booking successful! Booking ID: ${bookingId}`);

        // Call the success callback with payment data and booking ID
        onPaymentSuccess(paymentData, bookingId);
      } else {
        throw new Error(response.message || "Failed to complete booking");
      }
    } catch (error: unknown) {
      console.error("Error completing booking:", error);

      if (error instanceof Error) {
        onPaymentError(error);
      } else {
        onPaymentError(
          new Error("An unexpected error occurred during booking."),
        );
      }
    } finally {
      setIsBookingInProgress(false);
    }
  };

  // Function to start payment process
  const startPayment = async () => {
    // Check if payment already successful or component already initialized
    if (
      !isLoaded ||
      !isEnabled ||
      isInitialized ||
      paymentSuccessfulRef.current
    ) {
      return;
    }

    setIsInitialized(true);
    onPaymentStart();

    try {
      // Get price value as a number
      const priceValue =
        typeof bookingData.vehicle.price === "number"
          ? bookingData.vehicle.price
          : parseFloat(bookingData.vehicle.price.toString());

      // Get currency
      const currency = bookingData.vehicle.unit || "USD";

      // Create booking info for Razorpay notes
      const bookingInfo = {
        vehicleId: bookingData.vehicle.id,
        vehicleName: bookingData.vehicle.vehicleName,
        tripType: bookingData.journeyDetails.tripType,
        pickupLocation: bookingData.journeyDetails.pickupLocation,
        dropoffLocation: bookingData.journeyDetails.dropoffLocation,
        date: bookingData.journeyDetails.date,
        time: bookingData.journeyDetails.time,
        pax: bookingData.journeyDetails.pax,
        searchId: bookingData.searchId || undefined,
      };

      //   console.log(`Initiating payment for ${priceValue} ${currency}`);

      // Initiate payment
      await initiatePayment(
        {
          amount: priceValue,
          currency: currency,
          name: getCustomerName(),
          email: bookingData.passengerDetails.email || "",
          phone: getFormattedPhone(),
          bookingInfo: bookingInfo,
        },
        {
          onSuccess: async (response) => {
            console.log("Payment successful!", response);

            // Mark payment as successful to prevent double-processing
            paymentSuccessfulRef.current = true;

            // Reset initialization flag
            setIsInitialized(false);

            // Complete the booking with the service provider
            try {
              await completeBooking(response);
            } catch (error) {
              // Already handled in completeBooking
              console.error("Error in booking completion:", error);
            }
          },
          onError: (error) => {
            console.error("Payment failed:", error);
            setIsInitialized(false);
            onPaymentError(error);
          },
        },
      );
    } catch (error: unknown) {
      console.error("Error starting payment:", error);

      if (error instanceof Error) {
        onPaymentError(error);
      } else {
        onPaymentError(new Error("An unexpected error occurred."));
      }

      setIsInitialized(false);
    }
  };

  // Start payment when enabled and loaded
  useEffect(() => {
    if (
      isEnabled &&
      isLoaded &&
      !isLoading &&
      !isInitialized &&
      !paymentSuccessfulRef.current
    ) {
      startPayment();
    }
  }, [isEnabled, isLoaded, isLoading, isInitialized]);

  // This component doesn't render anything visible
  return null;
}
