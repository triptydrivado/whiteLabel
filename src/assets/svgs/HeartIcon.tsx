import React from "react";

interface HeartIconProps {
  className?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({ className }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Allows dynamic styling
    >
      <path
        d="M63.8334 46.6667C68.8001 41.8 73.8334 35.9667 73.8334 28.3333C73.8334 23.471 71.9019 18.8079 68.4637 15.3697C65.0255 11.9315 60.3624 10 55.5001 10C49.6334 10 45.5001 11.6667 40.5001 16.6667C35.5001 11.6667 31.3667 10 25.5001 10C20.6378 10 15.9746 11.9315 12.5365 15.3697C9.09829 18.8079 7.16675 23.471 7.16675 28.3333C7.16675 36 12.1667 41.8333 17.1667 46.6667L40.5001 70L63.8334 46.6667Z"
        stroke="#FB4156"
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
