import React from "react";

interface CustomIconProps {
  className?: string;
}

const LayerFour: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.08008 15.0008L8.03008 16.9508L11.9201 13.0508"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66155 21.2733C5.33724 20.6134 6.36726 20.6659 6.96054 21.3858L7.79279 22.3982C8.46024 23.2006 9.53969 23.2006 10.2071 22.3982L11.0394 21.3858C11.6327 20.6659 12.6627 20.6134 13.3384 21.2733C14.8051 22.6982 15.9999 22.2257 15.9999 20.231V11.7795C16.0082 8.75741 15.2336 8 12.1188 8H5.88933C2.77457 8 2 8.75741 2 11.7795V20.2235C2 22.2257 3.20306 22.6907 4.66155 21.2733Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LayerFour;
