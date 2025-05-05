import React from "react";

type IconProps = {
  className?: string;
};

const ProfileDropdown: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      // width="18"
      // height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="currentColor"
        stroke-width="0.964286"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.35254 8.05499L9.00004 10.695L11.6475 8.05499"
        stroke="currentColor"
        stroke-width="0.964286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ProfileDropdown;
