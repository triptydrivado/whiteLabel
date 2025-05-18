import React from "react";

interface CustomIconProps {
  className?: string;
}

const FlightIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="11"
      // height="12"
      className={className}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.926 7.11794L6.2996 7.85374L9.2031 8.75374C9.64013 8.88954 10.0881 8.58954 10.2055 8.08427C10.323 7.579 10.0635 7.0611 9.62647 6.92533L6.72297 6.02532L5.21795 0.328455L4.16089 0V5.2295L1.44858 4.38949L0.940537 2.92422L0.148438 2.67791V5.94636L1.02521 6.21793L3.926 7.11794Z"
        fill="#808080"
      />
      <path d="M10.3794 10.7363H0V11.9995H10.3794V10.7363Z" fill="#808080" />
    </svg>
  );
};
export default FlightIcon;
