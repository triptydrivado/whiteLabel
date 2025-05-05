import React from "react";

interface CustomIconProps {
  className?: string;
}

const ChangePassword: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.5013 19.5589H12.5013C16.668 19.5589 18.3346 17.839 18.3346 13.5391V8.37922C18.3346 4.07933 16.668 2.35938 12.5013 2.35938H7.5013C3.33464 2.35938 1.66797 4.07933 1.66797 8.37922V13.5391C1.66797 17.839 3.33464 19.5589 7.5013 19.5589Z"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5657 12.3437C12.624 13.3155 11.274 13.6165 10.0824 13.2295L7.92402 15.4482C7.77402 15.6116 7.46569 15.7148 7.24069 15.6804L6.24069 15.5428C5.90736 15.4998 5.60736 15.1731 5.55736 14.8377L5.42403 13.8057C5.39069 13.5821 5.49902 13.2639 5.64902 13.1005L7.79902 10.8818C7.43236 9.652 7.71569 8.25883 8.65736 7.28706C10.0074 5.8939 12.2074 5.8939 13.5657 7.28706C14.9157 8.67162 14.9157 10.942 13.5657 12.3437Z"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.70833 14.6398L8 13.9003"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1621 9.84112H11.1696"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChangePassword;
