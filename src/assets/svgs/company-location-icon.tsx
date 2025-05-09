import React from "react";

interface CustomIconProps {
  className?: string;
}

const CompanyLocationIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M5.99994 7.21497C6.86151 7.21497 7.55994 6.51654 7.55994 5.65497C7.55994 4.79341 6.86151 4.09497 5.99994 4.09497C5.13838 4.09497 4.43994 4.79341 4.43994 5.65497C4.43994 6.51654 5.13838 7.21497 5.99994 7.21497Z"
        stroke="#606060"
        strokeWidth="0.75"
      />
      <path
        d="M1.80985 4.745C2.79485 0.415001 9.20985 0.420001 10.1899 4.75C10.7649 7.29 9.18485 9.44 7.79985 10.77C6.79485 11.74 5.20485 11.74 4.19485 10.77C2.81485 9.44 1.23485 7.285 1.80985 4.745Z"
        stroke="#606060"
        strokeWidth="0.75"
      />
    </svg>
  );
};
export default CompanyLocationIcon;
