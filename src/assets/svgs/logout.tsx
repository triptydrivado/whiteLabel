import React from "react";

type IconProps = {
  className?: string;
};

const LogoutIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    // width="24"
    // height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15.1 16.7493C14.79 20.3493 12.94 21.8193 8.88998 21.8193H8.75998C4.28998 21.8193 2.49998 20.0293 2.49998 15.5593V9.03934C2.49998 4.56934 4.28998 2.77934 8.75998 2.77934H8.88998C12.91 2.77934 14.76 4.22933 15.09 7.76933"
      stroke="#606060"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.3096H20.38"
      stroke="#606060"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.15 15.6592L21.5 12.3092L18.15 8.95918"
      stroke="#606060"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LogoutIcon;
