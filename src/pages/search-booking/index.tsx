import { useForm } from "react-hook-form";
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

  return (
    <Form {...methods}>
      <section className="sm:bg-bottom-right min-h-[calc(100svh_-_2rem)] bg-black bg-cover bg-[bottom_right_10%] bg-no-repeat pt-56 md:pt-[8.5rem] xl:pt-[9.8125rem]">
        {/* TODO:Remove flex flex-col */}
        <Container className="flex flex-col text-white md:flex-col-reverse xl:flex-col">
          <BookingSearchForm />
        </Container>
      </section>
    </Form>
  );
}
