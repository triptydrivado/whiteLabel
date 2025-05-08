import React from "react";

interface CustomIconProps {
  className?: string;
}

const TrashDeleteIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5 2.98999C8.835 2.82499 7.16 2.73999 5.49 2.73999C4.5 2.73999 3.51 2.78999 2.52 2.88999L1.5 2.98999"
        stroke="#FB4156"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485"
        stroke="#FB4156"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4252 4.57001L9.1002 9.60501C9.0452 10.39 9.0002 11 7.6052 11H4.3952C3.0002 11 2.9552 10.39 2.9002 9.60501L2.5752 4.57001"
        stroke="#FB4156"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16504 8.25H6.83004"
        stroke="#FB4156"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 6.25H7.25"
        stroke="#FB4156"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TrashDeleteIcon;
