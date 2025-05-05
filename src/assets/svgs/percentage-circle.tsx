import React from "react";

interface CustomIconProps {
  className?: string;
}

const PercentageCircle: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="13"
      // viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.28503 8.13498L7.55502 4.86499"
        stroke="#606060"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.49001 5.68507C4.82966 5.68507 5.105 5.40974 5.105 5.07008C5.105 4.73043 4.82966 4.45508 4.49001 4.45508C4.15035 4.45508 3.875 4.73043 3.875 5.07008C3.875 5.40974 4.15035 5.68507 4.49001 5.68507Z"
        stroke="#606060"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.76001 8.54494C8.09966 8.54494 8.37502 8.26959 8.37502 7.92993C8.37502 7.59028 8.09966 7.31494 7.76001 7.31494C7.42035 7.31494 7.14502 7.59028 7.14502 7.92993C7.14502 8.26959 7.42035 8.54494 7.76001 8.54494Z"
        stroke="#606060"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 11.5C8.76142 11.5 11 9.26142 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.26142 3.23858 11.5 6 11.5Z"
        stroke="#606060"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PercentageCircle;
