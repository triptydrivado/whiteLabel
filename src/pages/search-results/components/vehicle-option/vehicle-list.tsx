import VehicleCard from "./vehicle-card";
import { FC } from "react";

// Reuse Vehicle type
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

interface VehicleCardListProps {
  vehicles: any[]; // raw API response, ideally typed
}

const VehicleCardList: FC<VehicleCardListProps> = ({ vehicles }) => {
  const mappedVehicles: Vehicle[] = vehicles.map((v) => ({
    id: v.id,
    name: v.vehicleName,
    description: v.description,
    pax: v.passengeCount,
    luggage: v.luggageCount,
    price: v.price,
    image: v.image,
    unit: v.unit,
    vehicleType: v.vehicleType,
  }));

  return (
    <div className="flex flex-col gap-4">
      {mappedVehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleCardList;
