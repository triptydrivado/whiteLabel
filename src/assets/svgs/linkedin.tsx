import React from "react";

interface LinkedInIconProps {
  className?: string; // ✅ Allows custom classes
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className }) => {
  return (
    <svg
      width="91"
      height="90"
      viewBox="0 0 91 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Accepts dynamic className
    >
      <rect width="91" height="90" fill="#757575" />
      <g clipPath="url(#clip0_590_1030)">
        <rect width="1440" height="2671" transform="translate(-774 -2020)" fill="white" />
        <path
          d="M45.7181 77.998C63.9429 77.998 78.7171 63.2239 78.7171 44.999C78.7171 26.7742 63.9429 12 45.7181 12C27.4932 12 12.7191 26.7742 12.7191 44.999C12.7191 63.2239 27.4932 77.998 45.7181 77.998Z"
          fill="#007AB9"
        />
        <path
          d="M65.4347 47.6545V61.2593H57.547V48.5662C57.547 45.3792 56.4081 43.2027 53.5522 43.2027C51.3728 43.2027 50.0781 44.668 49.5063 46.0868C49.2987 46.5939 49.2452 47.298 49.2452 48.0092V61.2587H41.3569C41.3569 61.2587 41.4628 39.7609 41.3569 37.5356H49.2457V40.8974C49.2299 40.9238 49.2075 40.9497 49.1934 40.975H49.2457V40.8974C50.294 39.2844 52.1634 36.9785 56.3546 36.9785C61.5441 36.9785 65.4347 40.3691 65.4347 47.6545ZM33.1051 26.1002C30.4068 26.1002 28.6415 27.8714 28.6415 30.1985C28.6415 32.4761 30.3556 34.2985 33.0015 34.2985H33.0527C35.8039 34.2985 37.5145 32.4761 37.5145 30.1985C37.4621 27.8714 35.8039 26.1002 33.1051 26.1002ZM29.1103 61.2593H36.9957V37.5356H29.1103V61.2593Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_590_1030">
          <rect width="1440" height="2671" fill="white" transform="translate(-774 -2020)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInIcon;
