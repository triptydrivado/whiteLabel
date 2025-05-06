import React from "react";
import { BrowserRouter, Route, Routes as RoutePath } from "react-router-dom";
import SearchResult from "@/pages/search-results";
import SearchBooking from "./pages/search-booking";
import SearchDetails from "./pages/search-details";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutePath>
        <Route path="search-results" element={<SearchResult />} />
        <Route path="search-booking" element={<SearchBooking />} />
        <Route path="search-details" element={<SearchDetails />} />
      </RoutePath>
    </BrowserRouter>
  );
};
export default React.memo(Routes);
