import React from "react";

interface CustomIconProps {
  className?: string;
}

const CreditLimitIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 4.75244H11"
        stroke="#606060"
        stroke-width="0.75"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 8.75244H4"
        stroke="#606060"
        stroke-width="0.75"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25 8.75244H7.25"
        stroke="#606060"
        stroke-width="0.75"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.22 2.25244H8.775C10.555 2.25244 11 2.69244 11 4.44744V8.55244C11 10.3074 10.555 10.7474 8.78 10.7474H3.22C1.445 10.7524 1 10.3124 1 8.55744V4.44744C1 2.69244 1.445 2.25244 3.22 2.25244Z"
        stroke="#606060"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default CreditLimitIcon;
