import React from "react";

type IconProps = {
  className?: string;
};

const ActivityLogIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    // width="20"
    // height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.3332 10.5987C18.3332 15.3458 14.5998 19.1984 9.99984 19.1984C5.39984 19.1984 2.5915 14.417 2.5915 14.417M2.5915 14.417H6.35817M2.5915 14.417V18.7169M1.6665 10.5987C1.6665 5.8516 5.3665 1.9989 9.99984 1.9989C15.5582 1.9989 18.3332 6.78038 18.3332 6.78038M18.3332 6.78038V2.48049M18.3332 6.78038H14.6332"
      stroke="#606060"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ActivityLogIcon;
