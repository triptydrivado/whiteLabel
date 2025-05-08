import React from "react";

interface CustomIconProps {
  className?: string;
}

const GstIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M9.5 4.5C10.3284 4.5 11 3.82843 11 3C11 2.17157 10.3284 1.5 9.5 1.5C8.67157 1.5 8 2.17157 8 3C8 3.82843 8.67157 4.5 9.5 4.5Z"
        stroke="#606060"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7H6"
        stroke="#606060"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9H8"
        stroke="#606060"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 1.5H4.5C2 1.5 1 2.5 1 5V8C1 10.5 2 11.5 4.5 11.5H7.5C10 11.5 11 10.5 11 8V5.5"
        stroke="#606060"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default GstIcon;
