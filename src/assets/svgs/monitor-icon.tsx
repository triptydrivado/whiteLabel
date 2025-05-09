import React from "react";

interface IconProps {
  className?: string;
}

const MonitorIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      // width="12"
      // height="13"
      // viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 8.97502H3.105C1.42 8.97502 1 8.55501 1 6.87001V3.87001C1 2.18501 1.42 1.76501 3.105 1.76501H8.37C10.055 1.76501 10.475 2.18501 10.475 3.87001"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11.235V8.97498"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6.97498H5"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.36987 11.235H4.99987"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 6.89992V9.75492C10.9999 10.9399 10.7049 11.2349 9.51989 11.2349H7.74489C6.55989 11.2349 6.26489 10.9399 6.26489 9.75492V6.89992C6.26489 5.71492 6.55989 5.41992 7.74489 5.41992H9.51989C10.7049 5.41992 10.9999 5.71492 10.9999 6.89992Z"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.62225 9.625H8.62674"
        stroke="#606060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MonitorIcon;
