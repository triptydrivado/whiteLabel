import React from "react";

type IconProps = {
  className?: string;
};

const ManageBookingIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.3701 9.18945H17.6201"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.37988 9.18945L7.12988 9.93945L9.37988 7.68945"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3701 16.1895H17.6201"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.37988 16.1895L7.12988 16.9395L9.37988 14.6895"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22.3096H15C20 22.3096 22 20.3096 22 15.3096V9.30957C22 4.30957 20 2.30957 15 2.30957H9C4 2.30957 2 4.30957 2 9.30957V15.3096C2 20.3096 4 22.3096 9 22.3096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ManageBookingIcon;
