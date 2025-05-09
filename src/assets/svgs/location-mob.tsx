import React from "react";

const LocationMobSvg = ({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M10.0006 11.3756C11.4366 11.3756 12.6006 10.2115 12.6006 8.7756C12.6006 7.33966 11.4366 6.1756 10.0006 6.1756C8.56469 6.1756 7.40063 7.33966 7.40063 8.7756C7.40063 10.2115 8.56469 11.3756 10.0006 11.3756Z"
        stroke="#FB4156"
        strokeWidth="2"
      />
      <path
        d="M3.01626 7.25892C4.65793 0.0422546 15.3496 0.0505881 16.9829 7.26725C17.9413 11.5006 15.3079 15.0839 12.9996 17.3006C11.3246 18.9173 8.6746 18.9173 6.99126 17.3006C4.69126 15.0839 2.05793 11.4923 3.01626 7.25892Z"
        stroke="#FB4156"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LocationMobSvg;
