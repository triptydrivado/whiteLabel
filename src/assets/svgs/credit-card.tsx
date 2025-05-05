import React from "react";

type IconProps = {
  className?: string;
};

const CreditCardIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 8.81445H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16.8145H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 16.8145H14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.44 3.81445H17.55C21.11 3.81445 22 4.69445 22 8.20445V16.4145C22 19.9245 21.11 20.8045 17.56 20.8045H6.44C2.89 20.8145 2 19.9345 2 16.4245V8.20445C2 4.69445 2.89 3.81445 6.44 3.81445Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CreditCardIcon;
