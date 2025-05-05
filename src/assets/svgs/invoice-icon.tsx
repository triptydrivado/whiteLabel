import React from "react";

const InvoiceSvg = ({ style, className }: { style?: React.CSSProperties; className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path
        d="M10.0001 1.33331H4.00008C3.64646 1.33331 3.30732 1.47378 3.05727 1.72383C2.80722 1.97388 2.66675 2.31302 2.66675 2.66664V13.3333C2.66675 13.6869 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.6869 13.3334 13.3333V4.66664L10.0001 1.33331Z"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33325 1.33331V3.99997C9.33325 4.3536 9.47373 4.69274 9.72378 4.94278C9.97383 5.19283 10.313 5.33331 10.6666 5.33331H13.3333"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12V8"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10L8 12L10 10"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InvoiceSvg;
