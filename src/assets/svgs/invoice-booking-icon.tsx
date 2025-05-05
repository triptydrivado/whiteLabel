import React from "react";

type IconProps = {
  className?: string;
};

const InvoiceIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 6.30957V8.72957C22 10.3096 21 11.3096 19.42 11.3096H16V4.31957C16 3.20957 16.91 2.30957 18.02 2.30957C19.11 2.31957 20.11 2.75957 20.83 3.47957C21.55 4.20957 22 5.20957 22 6.30957Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7.30957V21.3096C2 22.1396 2.93998 22.6096 3.59998 22.1096L5.31 20.8296C5.71 20.5296 6.27 20.5696 6.63 20.9296L8.28998 22.5996C8.67998 22.9896 9.32002 22.9896 9.71002 22.5996L11.39 20.9196C11.74 20.5696 12.3 20.5296 12.69 20.8296L14.4 22.1096C15.06 22.5996 16 22.1296 16 21.3096V4.30957C16 3.20957 16.9 2.30957 18 2.30957H7H6C3 2.30957 2 4.09957 2 6.30957V7.30957Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9.30957H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 13.3096H11.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InvoiceIcon;
