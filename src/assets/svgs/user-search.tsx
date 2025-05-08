import React, { forwardRef } from "react";

const UserIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M6.9987 7.49984C8.60953 7.49984 9.91537 6.194 9.91537 4.58317C9.91537 2.97234 8.60953 1.6665 6.9987 1.6665C5.38787 1.6665 4.08203 2.97234 4.08203 4.58317C4.08203 6.194 5.38787 7.49984 6.9987 7.49984Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.98828 13.3333C1.98828 11.0758 4.23413 9.25 6.99913 9.25"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6167 12.9833C11.6476 12.9833 12.4833 12.1476 12.4833 11.1167C12.4833 10.0857 11.6476 9.25 10.6167 9.25C9.58574 9.25 8.75 10.0857 8.75 11.1167C8.75 12.1476 9.58574 12.9833 10.6167 12.9833Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 13.3333L12.25 12.75"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

export default UserIcon;
