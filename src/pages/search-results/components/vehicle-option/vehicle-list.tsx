import React from "react";
import VehicleCard from "./vehicle-card";

// Define the vehicle type
interface Vehicle {
  id: number;
  name: string;
  description: string;
  pax: number;
  luggage: number;
  price: number;
  image: string;
}

interface VehicleCardListProps {
  vehicles: Vehicle[];
}

const VehicleCardList: React.FC<VehicleCardListProps> = ({ vehicles }) => {
  return (
    <div className="space-y-4">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleCardList;
