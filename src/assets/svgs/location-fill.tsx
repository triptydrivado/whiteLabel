import React from "react";

interface LocationIconProps {
  className?: string;
}

const LocationFillIcon: React.FC<LocationIconProps> = ({ className }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.31 4.60488C9.78505 2.29488 7.77005 1.25488 6.00005 1.25488C6.00005 1.25488 6.00005 1.25488 5.99505 1.25488C4.23005 1.25488 2.21005 2.28988 1.68505 4.59988C1.10005 7.17988 2.68005 9.36488 4.11005 10.7399C4.64005 11.2499 5.32005 11.5049 6.00005 11.5049C6.68005 11.5049 7.36005 11.2499 7.88505 10.7399C9.31505 9.36488 10.895 7.18488 10.31 4.60488ZM6.00005 7.10988C5.13005 7.10988 4.42505 6.40488 4.42505 5.53488C4.42505 4.66488 5.13005 3.95988 6.00005 3.95988C6.87005 3.95988 7.57505 4.66488 7.57505 5.53488C7.57505 6.40488 6.87005 7.10988 6.00005 7.10988Z"
        fill="#9C9C9C"
      />
    </svg>
  );
};

export default LocationFillIcon;
