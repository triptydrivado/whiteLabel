import React from "react";

interface IconProps {
  className?: string;
}

const NewBookingIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      // width="21"
      // height="20"
      // viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.0934 8.33366V12.5003C19.0934 16.667 17.4268 18.3337 13.2601 18.3337H8.26009C4.09342 18.3337 2.42676 16.667 2.42676 12.5003V7.50033C2.42676 3.33366 4.09342 1.66699 8.26009 1.66699H12.4268"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.0934 8.33366H15.7601C13.2601 8.33366 12.4268 7.50033 12.4268 5.00033V1.66699L19.0934 8.33366Z"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.14343 14.1667V10"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1767 12.083H7.01001"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NewBookingIcon;
