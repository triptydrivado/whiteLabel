import React from "react";

interface CustomIconProps {
  className?: string;
}

const PenEditIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="16"
      // height="16"
      // viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.43839 2.65406L3.21384 8.18406C3.01657 8.39406 2.82566 8.8077 2.78748 9.09406L2.55202 11.1559C2.4693 11.9004 3.00384 12.4095 3.74202 12.2822L5.79111 11.9322C6.07748 11.8813 6.47839 11.6713 6.67566 11.455L11.9002 5.92497C12.8038 4.97043 13.2111 3.88224 11.8048 2.55224C10.4048 1.23497 9.34202 1.69952 8.43839 2.65406Z"
        stroke="currentColor"
        strokeWidth="0.954545"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.56616 3.57715C7.8398 5.33351 9.26525 6.67624 11.0343 6.85442"
        stroke="currentColor"
        strokeWidth="0.954545"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.90906 14.3633H13.3636"
        stroke="currentColor"
        strokeWidth="0.954545"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PenEditIcon;
