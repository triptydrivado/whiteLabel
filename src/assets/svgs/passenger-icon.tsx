import React, { forwardRef } from "react";

const PassengerIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className }) => (
    <svg
      // width="14"
      // height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.09349 6.84067C7.03516 6.83484 6.96516 6.83484 6.90099 6.84067C5.51266 6.794 4.41016 5.6565 4.41016 4.2565C4.41016 2.82734 5.56516 1.6665 7.00016 1.6665C8.42932 1.6665 9.59016 2.82734 9.59016 4.2565C9.58432 5.6565 8.48182 6.794 7.09349 6.84067Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.17594 8.9935C2.76427 9.9385 2.76427 11.4785 4.17594 12.4177C5.7801 13.491 8.41094 13.491 10.0151 12.4177C11.4268 11.4727 11.4268 9.93266 10.0151 8.9935C8.41677 7.926 5.78594 7.926 4.17594 8.9935Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

export default PassengerIcon;
