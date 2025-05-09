import React from "react";

interface CustomIconProps {
  className?: string;
}

const SmsIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.3356 13.6704L4.66892 13.6644C2.66892 13.6626 1.33648 12.6615 1.33856 10.3281L1.34273 5.66146C1.34481 3.32812 2.67904 2.32931 4.67904 2.3311L11.3457 2.33705C13.3457 2.33883 14.6781 3.34002 14.6761 5.67336L14.6719 10.34C14.6698 12.6734 13.3356 13.6722 11.3356 13.6704Z"
        stroke="#171717"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3424 6.00302L9.25429 7.66782C8.56713 8.21388 7.44047 8.21287 6.75429 7.66559L4.67578 5.99707"
        stroke="#171717"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SmsIcon;
