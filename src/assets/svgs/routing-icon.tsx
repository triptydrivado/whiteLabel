import React from "react";

interface CustomIconProps {
  className?: string;
}

const RoutingIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M1.72501 3.83438C2.39167 0.951042 6.73334 0.951042 7.39167 3.83438C7.78334 5.52604 6.70834 6.95938 5.77501 7.85104C5.09167 8.50104 4.01667 8.49271 3.33334 7.85104C2.40834 6.95938 1.33334 5.52604 1.72501 3.83438Z"
        stroke="#FB4156"
        strokeWidth="1.25"
      />
      <path
        d="M12.5583 13.8344C13.225 10.951 17.5917 10.951 18.2583 13.8344C18.65 15.526 17.575 16.9594 16.6333 17.851C15.95 18.501 14.8667 18.4927 14.1833 17.851C13.2417 16.9594 12.1667 15.526 12.5583 13.8344Z"
        stroke="#FB4156"
        strokeWidth="1.25"
      />
      <path
        d="M9.99979 4.16699H12.2331C13.7748 4.16699 14.4915 6.07533 13.3331 7.09199L6.67479 12.917C5.51646 13.9253 6.23312 15.8337 7.76646 15.8337H9.99979"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.57148 4.58366H4.58111"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4047 14.5837H15.4144"
        stroke="#FB4156"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RoutingIcon;
