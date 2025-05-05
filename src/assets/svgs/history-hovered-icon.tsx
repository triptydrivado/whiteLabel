import React from "react";

interface CustomIconProps {
  className?: string;
}

const HistoryHoveredIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="18"
      // height="18"
      // viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        fill="#FB4156"
      />
      <path
        d="M11.7825 11.9476C11.685 11.9476 11.5875 11.9251 11.4975 11.8651L9.1725 10.4776C8.595 10.1326 8.1675 9.37507 8.1675 8.70757V5.63257C8.1675 5.32507 8.4225 5.07007 8.73 5.07007C9.0375 5.07007 9.2925 5.32507 9.2925 5.63257V8.70757C9.2925 8.97757 9.5175 9.37507 9.75 9.51007L12.075 10.8976C12.345 11.0551 12.4275 11.4001 12.27 11.6701C12.1575 11.8501 11.97 11.9476 11.7825 11.9476Z"
        fill="#FB4156"
      />
    </svg>
  );
};
export default HistoryHoveredIcon;
