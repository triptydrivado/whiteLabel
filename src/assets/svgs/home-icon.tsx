import React from "react";

type HomeIconProps = {
  className?: string;
};

const HomeIcon: React.FC<HomeIconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.02 3.14973L3.63 7.34973C2.73 8.04973 2 9.53973 2 10.6697V18.0797C2 20.3997 3.89 22.2997 6.21 22.2997H17.79C20.11 22.2997 22 20.3997 22 18.0897V10.8097C22 9.59973 21.19 8.04973 20.2 7.35973L14.02 3.02973C12.62 2.04973 10.37 2.09973 9.02 3.14973Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18.2998V15.2998"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
