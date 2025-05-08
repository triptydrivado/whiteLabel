import React from "react";

interface CustomIconProps {
  className?: string;
}

const CarIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.9249 2.3584H7.07492C4.99992 2.3584 4.54159 3.39173 4.27492 4.6584L3.33325 9.16673H16.6666L15.7249 4.6584C15.4583 3.39173 14.9999 2.3584 12.9249 2.3584Z"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3248 16.517C18.4164 17.492 17.6331 18.3337 16.6331 18.3337H15.0664C14.1664 18.3337 14.0414 17.9503 13.8831 17.4753L13.7164 16.9753C13.4831 16.292 13.3331 15.8337 12.1331 15.8337H7.86645C6.66645 15.8337 6.49145 16.3503 6.28311 16.9753L6.11645 17.4753C5.95811 17.9503 5.83311 18.3337 4.93311 18.3337H3.36645C2.36645 18.3337 1.58311 17.492 1.67478 16.517L2.14145 11.442C2.25811 10.192 2.49978 9.16699 4.68311 9.16699H15.3164C17.4998 9.16699 17.7414 10.192 17.8581 11.442L18.3248 16.517Z"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33333 6.66699H2.5"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5001 6.66699H16.6667"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.5V4.16667"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 4.16699H11.25"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12.5H7.5"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12.5H15"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CarIcon;
