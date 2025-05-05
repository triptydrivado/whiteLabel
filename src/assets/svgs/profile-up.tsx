import React from "react";

type IconProps = {
  className?: string;
};

const ProfileUp: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="19.8214"
        y="19.8214"
        width="19.6429"
        height="19.6429"
        rx="9.82143"
        transform="rotate(180 19.8214 19.8214)"
        stroke="#7A7A7A"
        stroke-width="0.357143"
      />
      <path
        d="M9.76042 9.23356L12.2808 11.9903C12.4668 12.1937 12.7683 12.1937 12.9543 11.9903C13.1402 11.7869 13.1402 11.4571 12.9543 11.2537L10.0971 8.1287C9.91117 7.92531 9.60966 7.92531 9.4237 8.1287L6.56656 11.2537C6.38059 11.4571 6.38059 11.7869 6.56656 11.9903C6.75252 12.1937 7.05403 12.1937 7.23999 11.9903L9.76042 9.23356Z"
        fill="#7A7A7A"
      />
    </svg>
  );
};

export default ProfileUp;
