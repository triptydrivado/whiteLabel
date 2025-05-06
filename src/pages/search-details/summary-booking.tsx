import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/container";
// import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  PASSENGER_DEFAULT_VALUES,
  passengerDetailsSchema,
  TPassengerDetails,
} from "./passenger-details-form-schema";
import BookingDetails from "./components/BookingDetails";
import BookingSummary from "./components/BookingSummary";
import NavOptions from "@/components/nav-option";

export default function SummaryBooking() {
  const methods = useForm<TPassengerDetails>({
    defaultValues: PASSENGER_DEFAULT_VALUES,
    resolver: zodResolver(passengerDetailsSchema),
    // mode: "onBlur",
  });

  const navigate = useNavigate();

  const goToPassengerDetails = React.useCallback(() => {
    navigate("/b2b/booking-summary");
  }, [navigate]);

  return (
    <FormProvider {...methods}>
      <section className="relative z-20 bg-[#f6f7f9]">
        <Container className="w-full py-6 sm:px-5">
          <NavOptions />
          <div className="py-4 sm:flex sm:space-x-4 sm:py-6 xl:space-x-[30px]">
            <BookingDetails />
            <BookingSummary onEdit={goToPassengerDetails} />
          </div>
        </Container>
      </section>
    </FormProvider>
  );
}
