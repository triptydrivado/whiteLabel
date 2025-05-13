import React from "react";

interface CustomIconProps {
  className?: string;
}

const CancelIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0001 18.3337C14.6001 18.3337 18.3334 14.6003 18.3334 10.0003C18.3334 5.40033 14.6001 1.66699 10.0001 1.66699C5.40008 1.66699 1.66675 5.40033 1.66675 10.0003C1.66675 14.6003 5.40008 18.3337 10.0001 18.3337Z"
        stroke="currentColor"
        strokeWidth="1.25"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7504 4.16699L4.08374 15.8337"
        stroke="currentColor"
        strokeWidth="1.25"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CancelIcon;
