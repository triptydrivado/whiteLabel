import React from "react";

interface CustomIconProps {
  className?: string;
}

const LayerManage: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.3612 2.37891L10.639 3.83446C11.5834 4.25113 11.5834 4.94002 10.639 5.35668L7.3612 6.81224C6.98898 6.97891 6.37786 6.97891 6.00564 6.81224L2.72786 5.35668C1.78342 4.94002 1.78342 4.25113 2.72786 3.83446L6.00564 2.37891C6.37786 2.21224 6.98898 2.21224 7.3612 2.37891Z"
        stroke="#FB4156"
        stroke-width="0.833333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.80078 6.86768C1.80078 7.33434 2.15078 7.87323 2.57856 8.06212L6.35078 9.7399C6.63967 9.86768 6.96745 9.86768 7.25078 9.7399L11.023 8.06212C11.4508 7.87323 11.8008 7.33434 11.8008 6.86768"
        stroke="#FB4156"
        stroke-width="0.833333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.80078 9.64551C1.80078 10.1622 2.10634 10.6288 2.57856 10.84L6.35078 12.5177C6.63967 12.6455 6.96745 12.6455 7.25078 12.5177L11.023 10.84C11.4952 10.6288 11.8008 10.1622 11.8008 9.64551"
        stroke="#FB4156"
        stroke-width="0.833333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LayerManage;
