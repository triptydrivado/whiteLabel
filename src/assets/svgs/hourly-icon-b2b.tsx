import React from "react";

interface CustomIconProps {
  className?: string;
}

const HourlyIconB2b: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5.15039C7.22 5.15039 3.33 9.04039 3.33 13.8204C3.33 18.6004 7.22 22.5004 12 22.5004C16.78 22.5004 20.67 18.6104 20.67 13.8304C20.67 9.05039 16.78 5.15039 12 5.15039ZM12.75 13.5004C12.75 13.9104 12.41 14.2504 12 14.2504C11.59 14.2504 11.25 13.9104 11.25 13.5004V8.50039C11.25 8.09039 11.59 7.75039 12 7.75039C12.41 7.75039 12.75 8.09039 12.75 8.50039V13.5004Z"
        fill="#606060"
        fill-opacity="0.5"
      />
      <path
        d="M14.89 3.95H9.11C8.71 3.95 8.39 3.63 8.39 3.23C8.39 2.83 8.71 2.5 9.11 2.5H14.89C15.29 2.5 15.61 2.82 15.61 3.22C15.61 3.62 15.29 3.95 14.89 3.95Z"
        fill="#606060"
        fill-opacity="0.5"
      />
    </svg>
  );
};
export default HourlyIconB2b;
