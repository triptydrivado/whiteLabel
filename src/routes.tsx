import React from "react";
import { BrowserRouter, Route, Routes as RoutePath } from "react-router-dom";
import SearchResult from "@/pages/searchResult";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutePath>
        <Route path="searchResult" element={<SearchResult />} />
      </RoutePath>
    </BrowserRouter>
  );
};
export default React.memo(Routes);
