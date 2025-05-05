import React from "react";

type IconProps = {
  className?: string;
};

const SubCompanyIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 11H11"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 1H3.5C2 1 1.5 1.895 1.5 3V11H10.5V3C10.5 1.895 10 1 8.5 1Z"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 8.25H5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 8.25H8.5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 6H5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 6H8.5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 3.75H5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 3.75H8.5"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SubCompanyIcon;
