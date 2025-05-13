import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedTimerIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="21"
      // height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.6917 11.0417C17.6917 15.0667 14.4251 18.3333 10.4001 18.3333C6.37507 18.3333 3.1084 15.0667 3.1084 11.0417C3.1084 7.01667 6.37507 3.75 10.4001 3.75C14.4251 3.75 17.6917 7.01667 17.6917 11.0417Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3999 6.66699V10.8337"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.8999 1.66699H12.8999"
        stroke="currentColor"
        strokeWidth="1.25"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SelectedTimerIcon;
