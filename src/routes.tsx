import React from "react";
import { BrowserRouter, Route, Routes as RoutePath } from "react-router-dom";
import SearchResult from "@/pages/search-results";
import SearchDetails from "./pages/search-details";

import SummaryBooking from "./pages/search-details/summary-booking";
import BookingConfirmation from "./pages/booking-confirmation";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutePath>
        <Route path="search-results" element={<SearchResult />} />
        <Route path="passenger-details" element={<SearchDetails />} />
        <Route path="booking-summary" element={<SummaryBooking />} />
        <Route path="booking-confirmation" element={<BookingConfirmation />} />
      </RoutePath>
    </BrowserRouter>
  );
};
export default React.memo(Routes);
