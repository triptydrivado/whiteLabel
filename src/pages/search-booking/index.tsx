import { useForm } from "react-hook-form";
// import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Cus
// import MobileBookingSearchForm from "./mobile-booking-search-form";

// Custom Helper Components

// Shadcn Primitives
import { Form } from "@/components/ui/form";

// Custom Types and Zod Schemas
import {
  type TBookingSchema,
  bookingSchema,
  BOOKING_DEFAULT_VALUES,
} from "./schemas/booking-form";
import BookingSearchForm from "./booking-search-form";
import Container from "@/components/container";

export default function SearchBooking() {
  const methods = useForm<TBookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: BOOKING_DEFAULT_VALUES,
    shouldUseNativeValidation: false,
  });

  // const location = useLocation();
  // const tripType = location.state?.tripType ?? "hourly";

  // useEffect(() => {
  //   if (tripType) {
  //     localStorage.setItem("tripType", tripType);
  //   }
  // }, [tripType]);

  // const email = import.meta.env.VITE_DRIVADO_Email;

  // const BASE_URL = import.meta.env.VITE_DRIVADO_API;

  // useEffect(() => {
  //   const storedTripType = localStorage.getItem("tripType") ?? "";

  //   const searchId =
  //     storedTripType === "hourly" ? "WL-JYLV66QZ-HR" : "WL-K5T37G2K-OW"; // default for oneway

  //   const endpoint =
  //     storedTripType === "hourly"
  //       ? `${BASE_URL}/whiteLeveling/vehiclesWithPriceHourly_WL?searchId=${searchId}&email=${email}`
  //       : `${BASE_URL}/whiteLeveling/vehiclesWithPriceOW_WL?email=${email}&searchId=${searchId}`;

  //   const fetchVehicles = async () => {
  //     try {
  //       const response = await fetch(endpoint, {
  //         headers: {
  //           apiKey: import.meta.env.VITE_DRIVADO_KEY,
  //         },
  //       });

  //       if (!response.ok) {
  //         const text = await response.text();
  //         throw new Error(`API Error ${response.status}: ${text}`);
  //       }

  //       const vehicleData = await response.json();
  //       localStorage.setItem("vehicleList", JSON.stringify(vehicleData));
  //       console.log(vehicleData);
  //     } catch (error) {
  //       console.error("Fetch vehicle list error:", error);
  //     }
  //   };

  //   fetchVehicles();
  // }, []);

  return (
    <Form {...methods}>
      <section className="sm:bg-bottom-right min-h-[calc(100svh_-_2rem)] bg-black bg-cover bg-[bottom_right_10%] bg-no-repeat pt-20">
        <Container className="text-white">
          <BookingSearchForm />
        </Container>
      </section>
    </Form>
  );
}
