import React from "react";

interface CustomIconProps {
  className?: string;
}

const EditCompanyIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      //   width="20"
      //   height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.16666 1.6665H7.5C3.33333 1.6665 1.66666 3.33317 1.66666 7.49984V12.4998C1.66666 16.6665 3.33333 18.3332 7.5 18.3332H12.5C16.6667 18.3332 18.3333 16.6665 18.3333 12.4998V10.8332"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3667 2.51639L6.8 9.08306C6.55 9.33306 6.3 9.82472 6.25 10.1831L5.89167 12.6914C5.75833 13.5997 6.4 14.2331 7.30833 14.1081L9.81666 13.7497C10.1667 13.6997 10.6583 13.4497 10.9167 13.1997L17.4833 6.63306C18.6167 5.49972 19.15 4.18306 17.4833 2.51639C15.8167 0.849722 14.5 1.38306 13.3667 2.51639Z"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.425 3.45801C12.9833 5.44967 14.5417 7.00801 16.5417 7.57467"
        stroke="#606060"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default EditCompanyIcon;
