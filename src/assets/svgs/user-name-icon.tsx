import React from "react";

interface CustomIconProps {
  className?: string;
}

const UserNameIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="13"
      // viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.07005 11.3099C8.63005 11.4399 8.11005 11.4999 7.50005 11.4999H4.50005C3.89005 11.4999 3.37005 11.4399 2.93005 11.3099C3.04005 10.0099 4.37505 8.98486 6.00005 8.98486C7.62505 8.98486 8.96005 10.0099 9.07005 11.3099Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 1.5H4.5C2 1.5 1 2.5 1 5V8C1 9.89 1.57 10.925 2.93 11.31C3.04 10.01 4.375 8.98499 6 8.98499C7.625 8.98499 8.96 10.01 9.07 11.31C10.43 10.925 11 9.89 11 8V5C11 2.5 10 1.5 7.5 1.5ZM6 7.58499C5.01 7.58499 4.21 6.78001 4.21 5.79001C4.21 4.80001 5.01 4 6 4C6.99 4 7.79 4.80001 7.79 5.79001C7.79 6.78001 6.99 7.58499 6 7.58499Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78996 5.79001C7.78996 6.78001 6.98996 7.58499 5.99996 7.58499C5.00996 7.58499 4.20996 6.78001 4.20996 5.79001C4.20996 4.80001 5.00996 4 5.99996 4C6.98996 4 7.78996 4.80001 7.78996 5.79001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserNameIcon;
