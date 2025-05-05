import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedlogoutIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M15 16.8V7.21C15 4 13 2 9.8 2H7.21C4.01 2 2.01 4 2.01 7.2V16.8C2 20 4 22 7.2 22H9.8C13 22 15 20 15 16.8Z"
        fill="white"
      />
      <path
        d="M18.4296 15.88L21.7796 12.53C22.0696 12.24 22.0696 11.76 21.7796 11.47L18.4296 8.12001C18.1396 7.83001 17.6596 7.83001 17.3696 8.12001C17.0796 8.41001 17.0796 8.89001 17.3696 9.18001L19.4396 11.25H8.74957C8.33957 11.25 7.99957 11.59 7.99957 12C7.99957 12.41 8.33957 12.75 8.74957 12.75H19.4396L17.3696 14.82C17.2196 14.97 17.1496 15.16 17.1496 15.35C17.1496 15.54 17.2196 15.74 17.3696 15.88C17.6596 16.18 18.1296 16.18 18.4296 15.88Z"
        fill="white"
      />
    </svg>
  );
};
export default SelectedlogoutIcon;
