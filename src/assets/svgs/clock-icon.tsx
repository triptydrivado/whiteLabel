import React from 'react';

interface ClockIconProps extends React.SVGProps<SVGSVGElement> {}

const ClockIcon: React.FC<ClockIconProps> = (props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread props to allow customization
  >
    <g clipPath="url(#clip0_1787_10992)">
      <path
        d="M6.6667 1.5172H9.33337"
        stroke="#A2A2A2"
        strokeWidth="1.06667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5172L10 7.5172"
        stroke="#A2A2A2"
        strokeWidth="1.06667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 14.8507C10.9456 14.8507 13.3334 12.4628 13.3334 9.51732C13.3334 6.57181 10.9456 4.18399 8.00004 4.18399C5.05452 4.18399 2.6667 6.57181 2.6667 9.51732C2.6667 12.4628 5.05452 14.8507 8.00004 14.8507Z"
        stroke="#A2A2A2"
        strokeWidth="1.06667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1787_10992">
        <rect width="16" height="16" fill="white" transform="translate(0 0.18399)" />
      </clipPath>
    </defs>
  </svg>
);

export default ClockIcon;
