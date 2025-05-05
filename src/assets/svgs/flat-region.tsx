import React from "react";

type IconProps = {
  className?: string;
};

const FlatRegionIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 19.8096C16.1421 19.8096 19.5 16.4517 19.5 12.3096C19.5 8.16743 16.1421 4.80957 12 4.80957C7.85786 4.80957 4.5 8.16743 4.5 12.3096C4.5 16.4517 7.85786 19.8096 12 19.8096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M12 15.3096C13.6569 15.3096 15 13.9664 15 12.3096C15 10.6527 13.6569 9.30957 12 9.30957C10.3431 9.30957 9 10.6527 9 12.3096C9 13.9664 10.3431 15.3096 12 15.3096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M12 4.30957V2.30957"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M4 12.3096H2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M12 20.3096V22.3096"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity="0.4"
      d="M20 12.3096H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FlatRegionIcon;
