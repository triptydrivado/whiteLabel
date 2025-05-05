import React from "react";

interface CustomIconProps {
  className?: string;
}

const WalletInclusionIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.8333 7.5H5.83325"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 9.14196V10.8587C18.3333 11.317 17.9667 11.692 17.5 11.7086H15.8667C14.9667 11.7086 14.1417 11.0503 14.0667 10.1503C14.0167 9.62531 14.2167 9.13364 14.5667 8.79197C14.875 8.47531 15.3 8.29199 15.7667 8.29199H17.5C17.9667 8.30866 18.3333 8.68362 18.3333 9.14196Z"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5667 8.79198C14.2167 9.13365 14.0168 9.62532 14.0668 10.1503C14.1418 11.0503 14.9667 11.7086 15.8667 11.7086H17.5001V12.917C17.5001 15.417 15.8334 17.0837 13.3334 17.0837H5.83341C3.33341 17.0837 1.66675 15.417 1.66675 12.917V7.08366C1.66675 4.81699 3.03342 3.23366 5.15842 2.96699C5.37508 2.93366 5.60008 2.91699 5.83341 2.91699H13.3334C13.5501 2.91699 13.7584 2.92532 13.9584 2.95865C16.1084 3.20865 17.5001 4.80033 17.5001 7.08366V8.292H15.7667C15.3001 8.292 14.8751 8.47532 14.5667 8.79198Z"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default WalletInclusionIcon;
