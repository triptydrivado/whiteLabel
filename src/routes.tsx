import React from "react";
import { BrowserRouter, Route, Routes as RoutePath } from "react-router-dom";
import SearchResult from "@/pages/search-results";
import SearchBooking from "./pages/search-booking";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutePath>
        <Route path="search-results" element={<SearchResult />} />
        <Route path="search-booking" element={<SearchBooking />} />
      </RoutePath>
    </BrowserRouter>
  );
};
export default React.memo(Routes);
