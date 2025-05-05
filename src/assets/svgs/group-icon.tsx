import React, { forwardRef } from "react";

const GroupIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M7.58922 2.20352L11.0309 3.73185C12.0226 4.16935 12.0226 4.89268 11.0309 5.33018L7.58922 6.85852C7.19839 7.03352 6.55672 7.03352 6.16589 6.85852L2.72422 5.33018C1.73255 4.89268 1.73255 4.16935 2.72422 3.73185L6.16589 2.20352C6.55672 2.02852 7.19839 2.02852 7.58922 2.20352Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 6.9165C1.75 7.4065 2.1175 7.97234 2.56667 8.17067L6.5275 9.93234C6.83083 10.0665 7.175 10.0665 7.4725 9.93234L11.4333 8.17067C11.8825 7.97234 12.25 7.4065 12.25 6.9165"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 9.8335C1.75 10.376 2.07083 10.866 2.56667 11.0877L6.5275 12.8493C6.83083 12.9835 7.175 12.9835 7.4725 12.8493L11.4333 11.0877C11.9292 10.866 12.25 10.376 12.25 9.8335"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
);

export default GroupIcon;
