import React from "react";

type ArrowDownIconProps = {
  className?: string;
};

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Apply the className prop
  >
    <path
      d="M13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.0169 18.983 2.16666 13 2.16666C7.01687 2.16666 2.16663 7.0169 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333Z"
      stroke="currentColor" // Using currentColor to inherit text color
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 9.20834V15.7083"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 13.5417L13 16.7917L16.25 13.5417"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDownIcon;
