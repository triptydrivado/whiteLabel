import React from "react";
import BriefCaseIcon from "@/assets/svgs/briefcase-icon";

import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";
import CapacityIcon from "@/assets/svgs/capacity-icon";

interface Vehicle {
  id: number;
  name: string;
  description: string;
  pax: number;
  luggage: number;
  price: number;
  image: string;
  unit: string;
  vehicleType: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-white p-4 shadow-none transition-shadow duration-300 hover:shadow-md sm:w-full sm:flex-row sm:p-5 md:w-full md:p-5 lg:w-full lg:p-5 xl:w-full xl:p-5 2xl:w-full 2xl:p-6 mobS:w-full mobM:w-full mobL:w-full 4xl:w-full 4xl:p-6">
      <div className="w-full sm:flex">
        {/* Vehicle Image */}
        <div className="flex justify-center sm:block">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="h-[10rem] w-[300px] rounded-lg bg-[#0000000A] sm:h-[7.625rem] sm:w-[12.25rem] md:h-[147px] md:w-[235px] lg:h-[12.25rem] lg:w-[313px] xl:h-[147px] xl:w-[258px] 2xl:h-[10rem] 3xl:h-[10.1rem] 3xl:w-[300px] 4xl:h-full 4xl:w-[421px]"
          />
        </div>

        {/* Vehicle Details */}
        <div className="mt-4 flex h-[7.5rem] w-full flex-1 justify-between sm:ml-8 sm:mt-0 md:mt-0 md:h-[9rem] md:w-[20.625rem] lg:h-[12.25rem] lg:w-[519px] xl:h-[147px] xl:w-[26.875rem] 2xl:h-[10rem] mobS:w-full mobM:h-[8.125rem] mobM:w-full mobL:w-full 3xl:h-[10.125rem] 3xl:w-[30.625rem] 4xl:h-[13.125rem]">
          {/* Description */}
          <div className="relative flex h-full w-60 flex-col items-start text-left sm:w-[8.75rem] md:w-[13.75rem] lg:w-[243px] xl:w-[12rem] 2xl:w-[10.125rem] mobM:w-[11.875rem] 3xl:w-[243px] 4xl:h-full 4xl:w-[20.25rem]">
            {/* Vehicle Name */}
            <h2 className="text-sm font-semibold sm:text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mobM:text-xl 3xl:text-2xl 4xl:text-[26px]">
              {vehicle.vehicleType}
            </h2>

            {/* Vehicle Description */}
            <p className="text-[10px] font-medium text-[#6D6D6D] sm:w-[8.75rem] sm:whitespace-normal sm:text-[10px] md:w-[13.5rem] md:text-xs lg:text-base xl:w-[11rem] xl:text-xs 2xl:w-[13.75rem] 2xl:text-xs mobM:w-[13.625rem] mobM:text-xs 3xl:text-xs 4xl:text-base">
              {vehicle.description}
            </p>

            {/* Passenger and Luggage Details */}
            <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2">
              {/* Passengers */}
              <span className="flex items-center gap-2">
                <CapacityIcon className="h-[10.36px] w-[10.36px] text-[#fb4156] sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-4 lg:w-4 2xl:h-3.5 2xl:w-3.5" />
                <p className="text-[10px] font-medium text-[#6D6D6D] sm:text-[13px] md:text-base lg:text-base 2xl:text-base mobM:text-xs 3xl:text-base 4xl:text-[18px]">
                  {vehicle.pax} Pax
                </p>
              </span>

              {/* Luggage */}
              <span className="flex items-center gap-2">
                <BriefCaseIcon className="h-[10.36px] w-[10.36px] text-[#fb4156] sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-4 lg:w-4 2xl:w-3.5 3xl:h-4 3xl:w-4" />
                <p className="text-[10px] font-medium text-[#6D6D6D] sm:text-[13px] md:text-base lg:text-base xl:text-base 2xl:text-base mobM:text-xs 3xl:text-base 4xl:text-[18px]">
                  {vehicle.luggage} Luggage
                </p>
              </span>
            </div>
          </div>

          {/* Price and Book Now Button */}
          <div className="relative flex w-full flex-col items-end text-right lg:w-[267px] xl:h-[147px] xl:w-[8.75rem] 2xl:h-[10rem] 2xl:w-[7.625rem] mobS:w-[18.75rem] mobM:w-[8.75rem] 3xl:h-full 3xl:w-[11.375rem] 4xl:h-full 4xl:w-[20.5rem]">
            <h2 className="text-sm font-semibold md:text-xl md:font-semibold mobM:text-xl 3xl:text-2xl 4xl:text-[26px]">
              {vehicle.unit} {vehicle.price.toFixed(2)}
            </h2>
            <p className="w-[6.25rem] whitespace-normal text-[10px] text-[#6D6D6D] md:text-[11px] lg:w-[7.25rem] lg:text-sm xl:text-[11px] 2xl:w-[7rem] 2xl:text-[11px] mobM:text-[10px] 3xl:w-[8.125rem] 3xl:text-xs 4xl:w-[11.25rem] 4xl:text-base">
              Includes VAT, Gratuities, Meet & Greet services
            </p>
            <Button
              onClick={() => {
                localStorage.setItem(
                  "selectedVehicle",
                  JSON.stringify(vehicle),
                );
                navigate("/passenger-details");
              }}
              className="absolute bottom-0 right-0 h-[35px] w-[6.25rem] items-center rounded-[7px] bg-[var(--brand-btn-bg)] text-xs text-[var(--brand-btn-text)] shadow-md transition-all duration-300 hover:bg-[#EB0012] hover:shadow-lg sm:h-[37px] sm:w-[9.5rem] sm:text-sm md:rounded-[10px] lg:h-[45px] lg:w-[13.5rem] lg:text-base xl:h-[45px] xl:w-[11.375rem] xl:rounded-xl 2xl:h-[45px] 2xl:w-[11.375rem] 2xl:text-sm mobM:h-[35px] mobM:w-[8.375rem] mobM:text-xs 3xl:h-[45px] 3xl:w-[11.375rem] 3xl:text-base 4xl:h-[3.75rem] 4xl:w-[16.25rem] 4xl:text-[18px]"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
