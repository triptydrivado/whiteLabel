import React from "react";

interface CustomIconProps {
  className?: string;
}

const AddUserIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      //   width="20"
      //   height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 9.99984C12.3012 9.99984 14.1667 8.13436 14.1667 5.83317C14.1667 3.53198 12.3012 1.6665 10 1.6665C7.69882 1.6665 5.83334 3.53198 5.83334 5.83317C5.83334 8.13436 7.69882 9.99984 10 9.99984Z"
        stroke="#606060"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.84167 18.3333C2.84167 15.1083 6.05001 12.5 10 12.5C10.8 12.5 11.575 12.6083 12.3 12.8083"
        stroke="#606060"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 14.9998C18.3333 15.2665 18.3 15.5248 18.2333 15.7748C18.1583 16.1082 18.025 16.4332 17.85 16.7165C17.275 17.6832 16.2167 18.3332 15 18.3332C14.1417 18.3332 13.3667 18.0081 12.7833 17.4748C12.5333 17.2581 12.3166 16.9998 12.15 16.7165C11.8416 16.2165 11.6667 15.6248 11.6667 14.9998C11.6667 14.0998 12.025 13.2749 12.6083 12.6749C13.2167 12.0499 14.0667 11.6665 15 11.6665C15.9833 11.6665 16.875 12.0915 17.475 12.7749C18.0083 13.3665 18.3333 14.1498 18.3333 14.9998Z"
        stroke="#606060"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2416 14.9834H13.7583"
        stroke="#606060"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 13.7666V16.2583"
        stroke="#606060"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default AddUserIcon;
