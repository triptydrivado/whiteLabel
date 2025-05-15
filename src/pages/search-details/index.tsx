import Container from "@/components/container";
import React from "react";
import NavOptions from "@/components/nav-option";
import BookingDetails from "./components/BookingDetails";
import PassengerDetails from "./components/PassengerDetails";

import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PASSENGER_DEFAULT_VALUES,
  passengerDetailsSchema,
  TPassengerDetails,
} from "./passenger-details-form-schema";
import { FormProvider, useForm } from "react-hook-form";

export default function SearchDetails() {
  const methods = useForm<TPassengerDetails>({
    defaultValues: PASSENGER_DEFAULT_VALUES,
    resolver: zodResolver(passengerDetailsSchema),
    // mode: "onBlur",
  });

  const navigate = useNavigate();

  const goToBookingDetails = React.useCallback(() => {
    navigate("/booking-summary");
  }, [navigate]);

  return (
    <FormProvider {...methods}>
      <section className="relative z-20 h-full bg-[#f6f7f9]">
        <Container className="w-full py-6 sm:px-5">
          <NavOptions />
          <div className="py-4 sm:flex sm:space-x-4 sm:py-6 xl:space-x-[30px]">
            <BookingDetails />
            <PassengerDetails onConfirm={goToBookingDetails} />
          </div>
        </Container>
      </section>
    </FormProvider>
  );
}
