import React from "react";

interface CustomIconProps {
  className?: string;
}

const HourlyManageIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="57"
      // height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M28.4999 52.2509C39.8722 52.2509 49.0912 43.0318 49.0912 31.6596C49.0912 20.2874 39.8722 11.0684 28.4999 11.0684C17.1277 11.0684 7.90869 20.2874 7.90869 31.6596C7.90869 43.0318 17.1277 52.2509 28.4999 52.2509Z"
        fill="currentColor"
      />
      <path
        d="M28.5 32.6563C27.5262 32.6563 26.7188 31.8488 26.7188 30.875V19C26.7188 18.0263 27.5262 17.2188 28.5 17.2188C29.4737 17.2188 30.2812 18.0263 30.2812 19V30.875C30.2812 31.8488 29.4737 32.6563 28.5 32.6563Z"
        fill="currentColor"
      />
      <path
        d="M35.3638 8.19375H21.6363C20.6863 8.19375 19.9263 7.43375 19.9263 6.48375C19.9263 5.53375 20.6863 4.75 21.6363 4.75H35.3638C36.3138 4.75 37.0738 5.51 37.0738 6.46C37.0738 7.41 36.3138 8.19375 35.3638 8.19375Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default HourlyManageIcon;
