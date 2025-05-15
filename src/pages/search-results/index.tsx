import { useEffect } from "react";
import NavOptions from "@/components/nav-option";
import Container from "@/components/container";
import JourneyDetails from "./components/journey-details";
import VehicleOption from "./components/vehicle-option";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const tripType = location.state?.tripType ?? "oneway";

  useEffect(() => {
    if (tripType) {
      localStorage.setItem("tripType", tripType);
    }
  }, [tripType]);

  const email = "techsupport10@drivado.com";
  const apiKey = "mBk3Kyo17PUFVSUgj72c6K7tNiHDu3";
  const BASE_URL = "https://testapi.drivado.com/api/v1";

  useEffect(() => {
    const storedTripType = localStorage.getItem("tripType") ?? "";

    const searchId =
      storedTripType === "hourly" ? "WL-VLCGCQOE-HR" : "WL-OCW2CPVG-OW"; // default for oneway

    const endpoint =
      storedTripType === "hourly"
        ? `${BASE_URL}/whiteLeveling/vehiclesWithPriceHourly_WL?searchId=${searchId}&email=${email}`
        : `${BASE_URL}/whiteLeveling/vehiclesWithPriceOW_WL?email=${email}&searchId=${searchId}`;

    const fetchVehicles = async () => {
      try {
        const response = await fetch(endpoint, {
          headers: {
            apiKey: apiKey,
          },
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`API Error ${response.status}: ${text}`);
        }

        const vehicleData = await response.json();
        localStorage.setItem("vehicleList", JSON.stringify(vehicleData));
        console.log(vehicleData);
      } catch (error) {
        console.error("Fetch vehicle list error:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <Container className="relative z-20 h-auto bg-[#F6F7F9] pb-8 font-plus-jakarta-sans">
      <div className="pt-6">
        <NavOptions />
      </div>
      <JourneyDetails />
      <VehicleOption />
    </Container>
  );
};

export default SearchResult;
