import React, { forwardRef } from "react";

const QuotedIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M7.73561 2.60021L2.94644 7.66937C2.76561 7.86187 2.59061 8.24104 2.55561 8.50354L2.33977 10.3935C2.26394 11.076 2.75394 11.5427 3.43061 11.426L5.30894 11.1052C5.57144 11.0585 5.93894 10.866 6.11977 10.6677L10.9089 5.59854C11.7373 4.72354 12.1106 3.72604 10.8214 2.50687C9.5381 1.29937 8.56394 1.72521 7.73561 2.60021Z"
        stroke="#606060"
        strokeWidth="0.875"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.9375 3.4458C7.18833 5.0558 8.495 6.28663 10.1167 6.44997"
        stroke="#606060"
        strokeWidth="0.875"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 13.3335H12.25"
        stroke="#606060"
        strokeWidth="0.875"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

export default QuotedIcon;
