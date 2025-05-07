import cr1 from "@/assets/svgs/cr1.svg";
import cr2 from "@/assets/svgs/cr2.svg";
import cr3 from "@/assets/svgs/cr3.svg";
import cr4 from "@/assets/svgs/cr4.svg";
import cr5 from "@/assets/svgs/cr5.svg";
import JourneyInclusions from "./journey-inclusion";
import VehicleCardList from "./vehicle-list";
import InclusionCard from "./inclusion-card";

const vehicles = [
  {
    id: 1,
    name: "Standard Sedan",
    description: "Corolla, Toyota Prius, Camry, Ford Taurus or similar",
    pax: 2,
    luggage: 3,
    price: 234.79,
    image: cr1,
  },
  {
    id: 2,
    name: "Premium Sedan",
    description:
      "Mercedes E Class, BMW 5 Series, Audi A6, VW Passat, Lexus or similar",
    pax: 2,
    luggage: 3,
    price: 284.54,
    image: cr2,
  },
  {
    id: 3,
    name: "Economy Van",
    description:
      "Opel Vivaro, Ford, Volkswagen Caravelle, Honda Odyssey or similar",
    pax: 5,
    luggage: 5,
    price: 344.74,
    image: cr3,
  },
  {
    id: 4,
    name: "Premium Van",
    description:
      "Mercedes Viano/V Class, Cadillac Escalade, Toyota Alphard, GMC or similar",
    pax: 5,
    luggage: 5,
    price: 518.9,
    image: cr4,
  },
  {
    id: 5,
    name: "Luxury Sedan",
    description: "Mercedes S Class, BMW 7 Series, Audi A8 or similar",
    pax: 2,
    luggage: 3,
    price: 476.79,
    image: cr5,
  },
];

export default function VehicleOption() {
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
