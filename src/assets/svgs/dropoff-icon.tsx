import React from "react";

interface CustomIconProps {
  className?: string;
}

const DropOffIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.01651 7.07533C4.65817 -0.141339 15.3498 -0.133006 16.9832 7.08366C17.9415 11.317 15.3082 14.9003 12.9998 17.117C11.3248 18.7337 8.67484 18.7337 6.99151 17.117C4.69151 14.9003 2.05817 11.3087 3.01651 7.07533Z"
        stroke="currentColor"
        stroke-width="1.25"
      />
      <path
        d="M7.70825 9.58333L8.95825 10.8333L12.2916 7.5"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DropOffIcon;
