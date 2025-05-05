import React from "react";

interface ClockBannerProps {
  className?: string;
}

const ClockBanner: React.FC<ClockBannerProps> = ({ className }) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Allows dynamic styling
    >
      <path
        d="M35.0002 64.1673C51.1085 64.1673 64.1668 51.109 64.1668 35.0006C64.1668 18.8923 51.1085 5.83398 35.0002 5.83398C18.8919 5.83398 5.8335 18.8923 5.8335 35.0006C5.8335 51.109 18.8919 64.1673 35.0002 64.1673Z"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 17.5V35L46.6667 40.8333"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockBanner;
