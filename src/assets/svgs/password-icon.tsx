import React from "react";

interface CustomIconProps {
  className?: string;
}

const PasswordIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="13"
      // viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.24459 1.61698L2.74959 2.55698C2.17459 2.77198 1.70459 3.45198 1.70459 4.06198V7.77698C1.70459 8.36698 2.09459 9.14198 2.56959 9.49698L4.71959 11.102C5.42459 11.632 6.58459 11.632 7.28959 11.102L9.43959 9.49698C9.91459 9.14198 10.3046 8.36698 10.3046 7.77698V4.06198C10.3046 3.44698 9.83459 2.76698 9.25959 2.55198L6.76459 1.61698C6.33959 1.46198 5.65959 1.46198 5.24459 1.61698Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99951 6.75269C6.5518 6.75269 6.99951 6.30497 6.99951 5.75269C6.99951 5.2004 6.5518 4.75269 5.99951 4.75269C5.44723 4.75269 4.99951 5.2004 4.99951 5.75269C4.99951 6.30497 5.44723 6.75269 5.99951 6.75269Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.75122V8.25122"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default PasswordIcon;
