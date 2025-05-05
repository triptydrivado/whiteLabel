import React from "react";

interface RibbonIconProps {
  className?: string;
}

const RibbonIcon: React.FC<RibbonIconProps> = ({ className }) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Allows dynamic styling
    >
      <path
        d="M45.1415 37.5957L49.5603 62.4632C49.6097 62.756 49.5687 63.057 49.4425 63.3258C49.3163 63.5946 49.1111 63.8186 48.8542 63.9676C48.5974 64.1167 48.3011 64.1837 48.0051 64.1599C47.7091 64.136 47.4274 64.0223 47.1977 63.834L36.7561 55.9969C36.252 55.6204 35.6397 55.4169 35.0105 55.4169C34.3813 55.4169 33.7689 55.6204 33.2648 55.9969L22.8057 63.8311C22.5762 64.0191 22.2948 64.1325 21.9992 64.1564C21.7035 64.1804 21.4076 64.1135 21.1509 63.9649C20.8942 63.8163 20.689 63.5929 20.5625 63.3246C20.4361 63.0563 20.3944 62.7558 20.4432 62.4632L24.859 37.5957"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 40.834C44.665 40.834 52.5 32.999 52.5 23.334C52.5 13.669 44.665 5.83398 35 5.83398C25.335 5.83398 17.5 13.669 17.5 23.334C17.5 32.999 25.335 40.834 35 40.834Z"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RibbonIcon;
