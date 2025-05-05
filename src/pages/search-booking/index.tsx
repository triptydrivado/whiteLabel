import React from "react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
// Cus
import MobileBookingSearchForm from "./mobile-booking-search-form";

// Custom Helper Components
// import Container from "@/components/helper/container";

// Shadcn Primitives
import { Form } from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

// Custom Types and Zod Schemas
import {
  type TBookingSchema,
  bookingSchema,
  BOOKING_DEFAULT_VALUES,
} from "./schemas/booking-form";
import DesktopBookingSearchForm from "./desktop-booking-search-form";
import Container from "@/components/container";

export default function SearchBooking() {
  const methods = useForm<TBookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: BOOKING_DEFAULT_VALUES,
    shouldUseNativeValidation: false,
  });

  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const handleResize = React.useCallback(
    () => setInnerWidth(window.innerWidth),
    [window.innerWidth],
  );

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);

  return (
    <Form {...methods}>
      <section className="sm:bg-bottom-right min-h-[calc(100svh_-_2rem)] bg-black bg-cover bg-[bottom_right_10%] bg-no-repeat pt-56 md:pt-[8.5rem] xl:pt-[9.8125rem]">
        <Container className="flex flex-col text-white md:flex-col-reverse xl:flex-col">
          {/* <div className="xl:hidden">Sheet</div> */}
          {/* Booking Search Form Drawer for Mobile and Tablet Screen */}
          {innerWidth < 1280 && (
            <Sheet>
              <SheetTrigger className="mx-auto flex w-full max-w-xl items-center justify-center gap-x-[0.625rem] rounded-full bg-white px-3 py-2 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drivado-red xl:hidden">
                <Link to="/search-results">
                  <Search size={24} className="size-6 text-black" />
                </Link>
              </SheetTrigger>
              <SheetContent
                side={"bottom"}
                tabIndex={undefined}
                className="inset-y-0 min-h-svh rounded-3xl bg-[#F9F9F9] p-0 xl:hidden"
              >
                {/* Sheet Header for Semantic Purpose */}
                <SheetHeader className="sr-only">
                  <SheetTitle>Booking Search Form</SheetTitle>
                  <SheetDescription>
                    Booking Search Form for Mobile and Tablet Screen
                  </SheetDescription>
                </SheetHeader>

                {/* Sheet Body */}
                <MobileBookingSearchForm />
              </SheetContent>
            </Sheet>
          )}

          {/* Hero Text */}

          {innerWidth >= 1280 && <DesktopBookingSearchForm />}
        </Container>
      </section>
    </Form>
  );
}
