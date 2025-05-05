import React from "react";

interface SearchIconProps {
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2579_26746)">
        <path
          d="M6.60568 0.5C2.96341 0.5 0 3.46341 0 7.10568C0 10.7482 2.96341 13.7114 6.60568 13.7114C10.2482 13.7114 13.2114 10.7482 13.2114 7.10568C13.2114 3.46341 10.2482 0.5 6.60568 0.5ZM6.60568 12.4919C3.63577 12.4919 1.21951 10.0756 1.21951 7.10571C1.21951 4.1358 3.63577 1.71951 6.60568 1.71951C9.5756 1.71951 11.9919 4.13577 11.9919 7.10568C11.9919 10.0756 9.5756 12.4919 6.60568 12.4919Z"
          fill="currentColor"
        />
        <path
          d="M14.8224 14.4598L11.3265 10.9638C11.0883 10.7256 10.7025 10.7256 10.4643 10.9638C10.2261 11.2018 10.2261 11.588 10.4643 11.826L13.9602 15.322C14.0793 15.4411 14.2353 15.5006 14.3913 15.5006C14.5472 15.5006 14.7033 15.4411 14.8224 15.322C15.0607 15.084 15.0607 14.6978 14.8224 14.4598Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2579_26746">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
