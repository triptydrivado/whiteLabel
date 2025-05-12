import { useEffect, useState } from "react";

import JourneyInclusions from "./journey-inclusion";
import VehicleCardList from "./vehicle-list";
import InclusionCard from "./inclusion-card";

export default function VehicleOption() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("vehicleList");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (parsed?.vehicleWithPriceArray) {
          setVehicles(parsed.vehicleWithPriceArray);
        }
      } catch (err) {
        console.error("Error parsing vehicleList from localStorage", err);
      }
    }
  }, []);

  return (
    <div className="mt-[15px] font-plus-jakarta-sans">
      <JourneyInclusions />

      <div className="mt-[15px] block w-full items-start rounded-lg bg-white p-3 xl:hidden">
        <div className="ml-3 flex gap-1 font-semibold text-[#A0A0A0]">
          <h2 className="text-base font-semibold">Available Vehicles</h2>
        </div>
      </div>

      <div className="mt-[15px] flex w-full flex-col xl:flex-row">
        {/* Vehicle Cards Section - 70% Width */}
        <div className="flex-1 xl:basis-[70%]">
          <VehicleCardList vehicles={vehicles} />
        </div>

        {/* Inclusion Card Section - 30% Width */}
        <div className="ml-[15px] hidden xl:sticky xl:block xl:basis-[30%]">
          <InclusionCard />
        </div>
      </div>
    </div>
  );
}
