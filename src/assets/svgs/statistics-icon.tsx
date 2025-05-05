import React from "react";

type IconProps = {
  className?: string;
};

const StatisticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.11 11.459H7.46005C6.83005 11.459 6.32007 11.9689 6.32007 12.5989V17.7189H10.11V11.459V11.459Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.7613 6.90918H11.2413C10.6113 6.90918 10.1013 7.41919 10.1013 8.04919V17.7092H13.8913V8.04919C13.8913 7.41919 13.3913 6.90918 12.7613 6.90918Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5482 13.1592H13.8982V17.7092H17.6882V14.2992C17.6782 13.6692 17.1682 13.1592 16.5482 13.1592Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
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

export default StatisticsIcon;
