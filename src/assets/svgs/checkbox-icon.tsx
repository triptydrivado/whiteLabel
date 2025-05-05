import React from "react";

interface CheckboxIconProps {
  checked?: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({ checked = false }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={checked ? "#FB4156" : "none"} // Fill red when checked
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.6875"
        y="0.6875"
        width="14.625"
        height="14.625"
        rx="3.9375"
        stroke={checked ? "#FF0000" : "#CCCCCC"} // Border changes color when checked
        strokeWidth="1.125"
      />
      {/* Checkmark (Only visible when checked) */}
      {checked && (
        <path
          d="M4.5 8.5L7 11L11.5 5.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

export default CheckboxIcon;
