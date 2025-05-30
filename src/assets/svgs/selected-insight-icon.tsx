import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedInsightIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="white"
      />
      <path
        d="M10.1103 11.15H7.4603C6.8303 11.15 6.32031 11.66 6.32031 12.29V17.41H10.1103V11.15Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M12.7606 6.59998H11.2406C10.6106 6.59998 10.1006 7.10999 10.1006 7.73999V17.4H13.8906V7.73999C13.8906 7.10999 13.3906 6.59998 12.7606 6.59998Z"
        fill="white"
      />
      <path
        d="M16.5504 12.85H13.9004V17.4H17.6904V13.99C17.6804 13.36 17.1704 12.85 16.5504 12.85Z"
        fill="white"
      />
    </svg>
  );
};
export default SelectedInsightIcon;
