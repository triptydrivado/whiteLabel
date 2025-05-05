import React from "react";

interface SearchIconProps {
  className?: string;
}

const SearchInputIcon: React.FC<SearchIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      //   width="17"
      //   height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33327 14.6667C11.8311 14.6667 14.6666 11.8311 14.6666 8.33333C14.6666 4.83553 11.8311 2 8.33327 2C4.83547 2 1.99994 4.83553 1.99994 8.33333C1.99994 11.8311 4.83547 14.6667 8.33327 14.6667Z"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3333 15.3333L13.9999 14"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchInputIcon;
