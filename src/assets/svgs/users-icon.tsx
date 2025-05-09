import React from "react";
import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const UsersIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={cn("", className)}
    >
      <path
        d="M6.79961 8.05596C6.72701 8.04902 6.63989 8.04902 6.56002 8.05596C4.83212 8.00041 3.45996 6.64624 3.45996 4.97957C3.45996 3.27818 4.89746 1.89624 6.68345 1.89624C8.46217 1.89624 9.90693 3.27818 9.90693 4.97957C9.89967 6.64624 8.52751 8.00041 6.79961 8.05596Z"
        stroke="currentColor"
        strokeWidth="1.51515"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0624 3.28516C13.4709 3.28516 14.6034 4.37543 14.6034 5.71571C14.6034 7.02821 13.5144 8.09766 12.1568 8.14627C12.0987 8.13932 12.0334 8.13932 11.968 8.14627"
        stroke="currentColor"
        strokeWidth="1.51515"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.16976 10.6185C1.41281 11.7435 1.41281 13.5768 3.16976 14.6949C5.16629 15.9726 8.44059 15.9726 10.4371 14.6949C12.1941 13.5699 12.1941 11.7365 10.4371 10.6185C8.44785 9.34764 5.17355 9.34764 3.16976 10.6185Z"
        stroke="currentColor"
        strokeWidth="1.51515"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4639 14.3962C13.9866 14.2921 14.4803 14.0907 14.8868 13.7921C16.0194 12.9796 16.0194 11.6393 14.8868 10.8268C14.4875 10.5351 14.0011 10.3407 13.4856 10.2296"
        stroke="currentColor"
        strokeWidth="1.51515"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
