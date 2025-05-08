import React, { forwardRef } from "react";

const DocumentIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className }) => (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.33594"
        y="1.6665"
        width="9.33333"
        height="11.6667"
        rx="2.33333"
        stroke="#606060"
        strokeWidth="0.875"
      />
      <path
        d="M4.66797 4.58301H9.33464"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
      />
      <path
        d="M4.66797 7.5H9.33464"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
      />
      <path
        d="M4.66797 10.4165H7.0013"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
      />
    </svg>
  ),
);

export default DocumentIcon;
