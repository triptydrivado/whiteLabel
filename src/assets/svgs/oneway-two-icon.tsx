import React from "react";

interface CustomIconProps {
  className?: string;
}

const OnewayTwoIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="12"
      // height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1Z"
        fill="currentColor"
      />
      <path
        d="M9.265 5.73422L7.12 3.58922C6.975 3.44422 6.735 3.44422 6.59 3.58922C6.445 3.73422 6.445 3.97422 6.59 4.11922L8.095 5.62422H3C2.795 5.62422 2.625 5.79422 2.625 5.99922C2.625 6.20422 2.795 6.37422 3 6.37422H8.095L6.59 7.87922C6.445 8.02422 6.445 8.26422 6.59 8.40922C6.665 8.48422 6.76 8.51922 6.855 8.51922C6.95 8.51922 7.045 8.48422 7.12 8.40922L9.265 6.26422C9.335 6.19422 9.375 6.09922 9.375 5.99922C9.375 5.89922 9.335 5.80422 9.265 5.73422Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default OnewayTwoIcon;
