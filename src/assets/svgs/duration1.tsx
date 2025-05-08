import React from "react";

interface Duration1IconProps {
  className?: string;
}

const Duration1Icon: React.FC<Duration1IconProps> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.3335 1.66699H11.6668"
      stroke="#FB4156"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 11.667L12.5 9.16699"
      stroke="#FB4156"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0002 18.3333C13.6821 18.3333 16.6668 15.3486 16.6668 11.6667C16.6668 7.98477 13.6821 5 10.0002 5C6.31826 5 3.3335 7.98477 3.3335 11.6667C3.3335 15.3486 6.31826 18.3333 10.0002 18.3333Z"
      stroke="#FB4156"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Duration1Icon;
