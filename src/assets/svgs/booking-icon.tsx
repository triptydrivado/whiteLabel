import React from "react";

type IconProps = {
  className?: string;
};

const BookingIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 10.3096V15.3096C22 20.3096 20 22.3096 15 22.3096H9C4 22.3096 2 20.3096 2 15.3096V9.30957C2 4.30957 4 2.30957 9 2.30957H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 10.3096H18C15 10.3096 14 9.30957 14 6.30957V2.30957L22 10.3096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0601 17.3096V12.3096"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 14.8096H7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BookingIcon;
