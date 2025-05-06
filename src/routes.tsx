import React from "react";
import { BrowserRouter, Route, Routes as RoutePath } from "react-router-dom";
import SearchResult from "@/pages/search-results";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutePath>
        <Route path="search-results" element={<SearchResult />} />
      </RoutePath>
    </BrowserRouter>
  );
};
export default React.memo(Routes);
