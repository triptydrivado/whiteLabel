import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavOptions() {
  const [selected, setSelected] = useState<number | null>(null);

  const items = ["Home", "Vehicles", "Details", "Summary", "Overview"];

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/b2c/") {
      setSelected(0);
    }

    if (path === "/b2c/search-results") {
      setSelected(1);
    }

    if (path === "/b2c/search-details") {
      setSelected(2);
    }
    if (path === "/b2c/booking-summary") {
      setSelected(3);
    }
    if (path === "/b2c/confirmation") {
      setSelected(4);
    }
  }, []);

  return (
    <div className="sticky top-0 z-20 flex justify-between">
      <div className="3xl:mx-5 3xl:mt-5 mx-3 mt-3 sm:mx-5 sm:mt-5">
        <ul className="xs:text-[8px] 3xl:text-[18px] flex items-center justify-start space-x-1 text-[6px] sm:justify-start sm:text-[10px] md:space-x-2 md:text-xs 2xl:space-x-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="mobL:space-x-1.5 flex items-center space-x-1 md:space-x-[10px] 2xl:space-x-4"
            >
              {index === 0 ? (
                <Link
                  to="/b2c/"
                  className={`${
                    selected === index
                      ? "font-semibold text-red-500"
                      : "text-[#282828]"
                  }`}
                >
                  {item}
                </Link>
              ) : (
                <span
                  className={`${
                    selected === index
                      ? "font-semibold text-red-500"
                      : "text-[#282828]"
                  }`}
                  // onClick={() => setSelected(index)}
                >
                  {item}
                </span>
              )}
              {index < items.length - 1 && (
                <ChevronRight
                  className={`${
                    selected === index
                      ? "font-semibold text-red-500"
                      : "text-[#282828]"
                  } xs:size-[10px] 3xl:size-[26px] size-[8px] md:size-[18px]`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
