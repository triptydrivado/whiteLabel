import React from "react";

interface DownloadIconProps {
  style?: React.CSSProperties;
  className?: string;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ style, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      style={style}
      className={className}
    >
      <path
        d="M16.74,64H40.63a13.67,13.67,0,0,0,9.66-23.33A14.09,14.09,0,0,0,48,38.8V25.46a2,2,0,0,0-2-2,2,2,0,0,1,0-3.92,2,2,0,0,0,2-2V7a7,7,0,0,0-7-7h-6.8a2,2,0,0,0-2,2,3.3,3.3,0,0,1-6.59,0,2,2,0,0,0-2-2h-6.8a7,7,0,0,0-7,7v10.5a2,2,0,0,0,2,2,2,2,0,0,1,0,3.92,2,2,0,0,0-2,2V56.94A7,7,0,0,0,16.74,64Zm30.72-6.82a9.66,9.66,0,1,1,0-13.67A9.67,9.67,0,0,1,47.46,57.16Zm-33.75-30a6,6,0,0,0,0-11.23V7a3,3,0,0,1,3-3h5.08a7.3,7.3,0,0,0,14,0h5.08a3,3,0,0,1,3,3v8.84a6,6,0,0,0,0,11.23v10A13.65,13.65,0,0,0,31,60H16.74a3,3,0,0,1-3-3Z"
        fill="white"
      />
      <path
        d="M22.1,23.43h2.82a2,2,0,0,0,0-4H22.1a2,2,0,0,0,0,4Z"
        fill="white"
      />
      <path
        d="M32.7,23.43h2.81a2,2,0,0,0,0-4H32.7a2,2,0,0,0,0,4Z"
        fill="white"
      />
      <path
        d="M44.87,49.59l-2.24,2.24V44a2,2,0,0,0-4,0v7.83l-2.25-2.24a2,2,0,0,0-2.83,2.83l5.66,5.65a2,2,0,0,0,2.83,0l5.66-5.65a2,2,0,0,0-2.83-2.83Z"
        fill="white"
      />
    </svg>
  );
};

export default DownloadIcon;
