import React from "react";

interface CustomIconProps {
  className?: string;
}

const PaxUserIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M7.63302 9.05866C7.54968 9.05033 7.44968 9.05033 7.35802 9.05866C5.37468 8.99199 3.79968 7.36699 3.79968 5.36699C3.79968 3.32533 5.44968 1.66699 7.49968 1.66699C9.54135 1.66699 11.1997 3.32533 11.1997 5.36699C11.1913 7.36699 9.61635 8.99199 7.63302 9.05866Z"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.6752 3.33301C15.2919 3.33301 16.5919 4.64134 16.5919 6.24967C16.5919 7.82467 15.3419 9.10801 13.7836 9.16634C13.7169 9.15801 13.6419 9.15801 13.5669 9.16634"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.46648 12.133C1.44981 13.483 1.44981 15.683 3.46648 17.0247C5.75815 18.558 9.51648 18.558 11.8081 17.0247C13.8248 15.6747 13.8248 13.4747 11.8081 12.133C9.52481 10.608 5.76648 10.608 3.46648 12.133Z"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2832 16.667C15.8832 16.542 16.4499 16.3003 16.9165 15.942C18.2165 14.967 18.2165 13.3587 16.9165 12.3837C16.4582 12.0337 15.8999 11.8003 15.3082 11.667"
        stroke="#FB4156"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default PaxUserIcon;
