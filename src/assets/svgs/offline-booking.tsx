import React from "react";

type IconProps = {
  className?: string;
};

const OffilingBookingIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 20.3796V12.4896C22 6.88956 17.5 2.30957 12 2.30957C6.5 2.30957 2 6.88956 2 12.4896V20.3796C2 21.6396 2.74998 21.9796 3.66998 21.1396L4.66998 20.2296C5.03998 19.8896 5.64001 19.8896 6.01001 20.2296L8.01001 22.0596C8.38001 22.3996 8.97998 22.3996 9.34998 22.0596L11.35 20.2296C11.72 19.8896 12.32 19.8896 12.69 20.2296L14.69 22.0596C15.06 22.3996 15.66 22.3996 16.03 22.0596L18.03 20.2296C18.4 19.8896 19 19.8896 19.37 20.2296L20.37 21.1396C21.25 21.9796 22 21.6396 22 20.3796Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14.3096C10.37 16.0896 13.63 16.0896 16 14.3096"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.3096C13.1046 11.3096 14 10.4141 14 9.30957C14 8.205 13.1046 7.30957 12 7.30957C10.8954 7.30957 10 8.205 10 9.30957C10 10.4141 10.8954 11.3096 12 11.3096Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OffilingBookingIcon;
