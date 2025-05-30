import React from "react";

interface CustomIconProps {
  className?: string;
}

const CompanyBuildingIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="18"
      // height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 16.5H16.5"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 1.5H5.25C3 1.5 2.25 2.8425 2.25 4.5V16.5H15.75V4.5C15.75 2.8425 15 1.5 12.75 1.5Z"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 12.375H7.5"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 12.375H12.75"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 9H7.5"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 9H12.75"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 5.625H7.5"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5.625H12.75"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CompanyBuildingIcon;
