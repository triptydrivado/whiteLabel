import React from "react";

interface CustomIconProps {
  className?: string;
}

const PencilEditIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      //   width="14"
      //   height="14"
      //   viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.45115 2.32896L2.98377 7.05753C2.81509 7.23709 2.65184 7.59078 2.6192 7.83564L2.41786 9.59865C2.34713 10.2353 2.8042 10.6706 3.4354 10.5618L5.18753 10.2625C5.43239 10.219 5.7752 10.0394 5.94388 9.8544L10.4113 5.12583C11.1839 4.30962 11.5322 3.37915 10.3296 2.2419C9.13254 1.11553 8.22383 1.51275 7.45115 2.32896Z"
        stroke="white"
        stroke-width="0.816208"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.70557 3.11792C6.93955 4.61974 8.15842 5.76788 9.67112 5.92023"
        stroke="white"
        stroke-width="0.816208"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.86816 12.3411H11.6627"
        stroke="white"
        stroke-width="0.816208"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default PencilEditIcon;
