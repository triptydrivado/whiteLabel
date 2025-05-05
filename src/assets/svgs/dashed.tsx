import React from "react";

interface DashedVerticalLineProps {
  className?: string;
}

const DashedVerticalLine: React.FC<DashedVerticalLineProps> = ({
  className,
}) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 30 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 1.0708V11.0708"
        stroke="#C5C5C5"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default DashedVerticalLine;
