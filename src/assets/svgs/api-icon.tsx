import React from "react";

type IconProps = {
  className?: string;
};

const ApiIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 7.30957V17.3096C21 20.3096 19.5 22.3096 16 22.3096H8C4.5 22.3096 3 20.3096 3 17.3096V7.30957C3 4.30957 4.5 2.30957 8 2.30957H16C19.5 2.30957 21 4.30957 21 7.30957Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 4.80957V6.80957C14.5 7.90957 15.4 8.80957 16.5 8.80957H18.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13.3096H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 17.3096H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ApiIcon;
