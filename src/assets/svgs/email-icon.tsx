import React from "react";

interface CustomIconProps {
  className?: string;
}

const Email2Icon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="13"
      // height="13"
      // viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.8942 10.7524L3.66329 10.7477C2.09402 10.7463 1.0485 9.99536 1.05006 8.24536L1.05319 4.74536C1.05475 2.99536 2.1016 2.2463 3.67087 2.2477L8.90178 2.25236C10.4711 2.25376 11.5166 3.0047 11.515 4.7547L11.5119 8.2547C11.5103 10.0047 10.4635 10.7538 8.8942 10.7524Z"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.89924 5.00223L7.26085 6.25077C6.7217 6.66028 5.83768 6.6595 5.29926 6.24901L3.66833 4.99756"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Email2Icon;
