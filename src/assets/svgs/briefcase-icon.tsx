import React from "react";

interface CustomIconProps {
  className?: string;
}

const BriefCaseIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.99991 11.5H7.99991C10.0099 11.5 10.3699 10.695 10.4749 9.715L10.8499 5.715C10.9849 4.495 10.6349 3.5 8.49991 3.5H3.49991C1.36491 3.5 1.01491 4.495 1.14991 5.715L1.52491 9.715C1.62991 10.695 1.98991 11.5 3.99991 11.5Z"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 3.5V3.1C4 2.215 4 1.5 5.6 1.5H6.4C8 1.5 8 2.215 8 3.1V3.5"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7V7.5C7 7.505 7 7.505 7 7.51C7 8.055 6.995 8.5 6 8.5C5.01 8.5 5 8.06 5 7.515V7C5 6.5 5 6.5 5.5 6.5H6.5C7 6.5 7 6.5 7 7Z"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.825 6C9.67 6.84 8.35 7.34 7 7.51"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.31006 6.13501C2.43506 6.90501 3.70506 7.37001 5.00006 7.51501"
        stroke="currentColor"
        strokeWidth="0.75"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default BriefCaseIcon;
