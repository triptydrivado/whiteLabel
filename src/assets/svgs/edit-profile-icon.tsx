import React from "react";

interface CustomIconProps {
  className?: string;
}

const EditProfileIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      //   width="20"
      //   height="20"
      //   viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="10" cy="10" r="9.5" fill="#FB4156" stroke="white" />
      <path
        d="M10.6316 5.80157L6.52663 10.1466C6.37163 10.3116 6.22163 10.6366 6.19163 10.8616L6.00663 12.4816C5.94163 13.0666 6.36163 13.4666 6.94163 13.3666L8.55164 13.0916C8.77664 13.0516 9.09163 12.8866 9.24663 12.7166L13.3516 8.37157C14.0616 7.62157 14.3816 6.76657 13.2766 5.72157C12.1766 4.68657 11.3416 5.05157 10.6316 5.80157Z"
        fill="#FB4156"
        stroke="white"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.94531 6.52344C10.1603 7.90344 11.2803 8.95844 12.6703 9.09844L9.94531 6.52344Z"
        fill="#FB4156"
      />
      <path
        d="M9.94531 6.52344C10.1603 7.90344 11.2803 8.95844 12.6703 9.09844"
        stroke="white"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 15H14.5"
        stroke="white"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default EditProfileIcon;
