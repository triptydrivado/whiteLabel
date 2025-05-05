import React from "react";

interface IconProps {
  className?: string;
}

const MessageAddIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3334 1.6665H6.66675C3.33341 1.6665 1.66675 3.33317 1.66675 6.6665V17.4998C1.66675 17.9582 2.04175 18.3332 2.50008 18.3332H13.3334C16.6667 18.3332 18.3334 16.6665 18.3334 13.3332V6.6665C18.3334 3.33317 16.6667 1.6665 13.3334 1.6665Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08325 10H12.9166"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.9168V7.0835"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageAddIcon;
