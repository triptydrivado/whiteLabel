import React, { forwardRef } from "react";

const CompanyBuilding = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Allows Tailwind or custom className styles
    {...props} // Ensures compatibility with props like stroke, fill, etc.
  >
    <g id="vuesax/linear/buildings">
      <g id="buildings">
        <path
          d="M7.58464 13.3333H2.91797C1.7513 13.3333 1.16797 12.75 1.16797 11.5833V6.91663C1.16797 5.74996 1.7513 5.16663 2.91797 5.16663H5.83464V11.5833C5.83464 12.75 6.41797 13.3333 7.58464 13.3333Z"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.89879 2.83337C5.85213 3.00837 5.83464 3.20087 5.83464 3.41671V5.16671H2.91797V4.00004C2.91797 3.35837 3.44297 2.83337 4.08464 2.83337H5.89879Z"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16797 5.16663V8.08329"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 5.16663V8.08329"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.91797 10.4166H8.7513C8.43047 10.4166 8.16797 10.6791 8.16797 11V13.3333H10.5013V11C10.5013 10.6791 10.2388 10.4166 9.91797 10.4166Z"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 8.08337V10.4167"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83203 11.5833V3.41663C5.83203 2.24996 6.41536 1.66663 7.58203 1.66663H11.082C12.2487 1.66663 12.832 2.24996 12.832 3.41663V11.5833C12.832 12.75 12.2487 13.3333 11.082 13.3333H7.58203C6.41536 13.3333 5.83203 12.75 5.83203 11.5833Z"
          stroke="currentColor"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
));

export default CompanyBuilding;
