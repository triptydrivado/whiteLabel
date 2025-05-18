import NavOptions from "@/components/nav-option";
import Container from "@/components/container";
import JourneyDetails from "./components/journey-details";
import VehicleOption from "./components/vehicle-option";

const SearchResult = () => {
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
