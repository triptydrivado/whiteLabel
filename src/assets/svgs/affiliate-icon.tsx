import React from "react";

type IconProps = {
  className?: string;
};

const AffiliateIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17 21.3096H7C3 21.3096 2 20.3096 2 16.3096V8.30957C2 4.30957 3 3.30957 7 3.30957H17C21 3.30957 22 4.30957 22 8.30957V16.3096C22 20.3096 21 21.3096 17 21.3096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8.30957H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12.3096H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 16.3096H19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.49994 11.5995C9.49958 11.5995 10.3099 10.7891 10.3099 9.78949C10.3099 8.78986 9.49958 7.97949 8.49994 7.97949C7.50031 7.97949 6.68994 8.78986 6.68994 9.78949C6.68994 10.7891 7.50031 11.5995 8.49994 11.5995Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16.6393C11.86 15.1893 10.71 14.0493 9.26 13.9193C8.76 13.8693 8.25 13.8693 7.74 13.9193C6.29 14.0593 5.14 15.1893 5 16.6393"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AffiliateIcon;
