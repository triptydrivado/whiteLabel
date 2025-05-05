import React from "react";

type IconProps = {
  className?: string;
};

const EventIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21.93 7.06958L18.56 20.5996C18.32 21.6096 17.42 22.3096 16.38 22.3096H3.24001C1.73001 22.3096 0.650023 20.8295 1.10002 19.3795L5.31001 5.85962C5.60001 4.91962 6.47003 4.26953 7.45003 4.26953H19.75C20.7 4.26953 21.49 4.84954 21.82 5.64954C22.01 6.07954 22.05 6.56958 21.93 7.06958Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M16 22.3096H20.78C22.07 22.3096 23.08 21.2196 22.99 19.9296L22 6.30957"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.67993 6.68909L10.7199 2.36914"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.38 6.69934L17.32 2.35938"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.69995 12.3096H15.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.69995 16.3096H14.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EventIcon;
