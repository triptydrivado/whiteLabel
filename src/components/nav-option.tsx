import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavOptions() {
  const [selected, setSelected] = useState<number | null>(null);

  const items = [
    { name: "Home", path: "/search-booking" },
    { name: "Vehicles", path: "/search-results" },
    { name: "Details", path: "/passenger-details" },
    { name: "Summary", path: "/booking-summary" },
    { name: "Overview", path: "/booking-confirmation" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const currentIndex = items.findIndex((item) => item.path === path);
    if (currentIndex !== -1) setSelected(currentIndex);
  }, []);

  return (
    <div className="hidden md:flex">
      <div className="sticky top-0 z-20 flex justify-between">
        <div className="mt-3 sm:mt-5 3xl:mt-5">
          <ul className="flex items-center justify-between space-x-1 text-[6px] sm:justify-start sm:text-[10px] md:space-x-2 md:text-xs 2xl:space-x-4 mobM:justify-start mobL:justify-start xs:text-[8px] 3xl:text-[18px]">
            {items.map((item, index) => {
              const isSelected = selected === index;
              const isCompleted = selected !== null && index < selected;

              return (
                <li
                  key={index}
                  className="flex items-center space-x-1 md:space-x-[10px] 2xl:space-x-4 mobL:space-x-1.5"
                >
                  {isCompleted ? (
                    <Link
                      to={item.path}
                      className="hover:text-bold text-[#282828] hover:text-drivado-red"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={`${
                        isSelected
                          ? "font-semibold text-drivado-red"
                          : "text-[#282828]"
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                  {index < items.length - 1 && (
                    <ChevronRight
                      className={`${
                        isSelected
                          ? "text-drivado-red"
                          : isCompleted
                            ? "text-[#282828]"
                            : "text-[#282828]"
                      } size-[8px] md:size-[18px] xs:size-[10px] 3xl:size-[26px]`}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
